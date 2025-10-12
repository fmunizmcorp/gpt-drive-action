require("dotenv").config();
const express = require("express");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// ===== Config =====
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "25mb" }));

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const SCOPES = (process.env.DRIVE_SCOPES || "https://www.googleapis.com/auth/drive.file").split(" ");

// ===== Token store por chave do usuário (POC: memória) =====
// Produção: troque por Redis/DB.
const tokensByKey = new Map();

// Util: cria cliente OAuth
function makeOAuthClient() {
  return new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    `${BASE_URL}/auth/callback`
  );
}

// Middleware: exige X-Auth-Key e tokens válidos
function withAuth(req, res, next) {
  const key = req.header("X-Auth-Key");
  if (!key) return res.status(401).json({ error: "missing_x_auth_key" });
  const tokens = tokensByKey.get(key);
  if (!tokens) return res.status(401).json({ error: "not_authorized_for_key" });
  const oAuth2 = makeOAuthClient();
  oAuth2.setCredentials(tokens);
  req.gdrive = google.drive({ version: "v3", auth: oAuth2 });
  next();
}

// ===== Rotas =====

// Health
app.get("/health", (_, res) => res.json({ ok: true }));

// 1) Gerar URL de autorização para uma key
// Uso: GET /auth/url?key=MINHA_CHAVE
app.get("/auth/url", (req, res) => {
  const key = req.query.key;
  if (!key) return res.status(400).json({ error: "key_required" });
  const oAuth2 = makeOAuthClient();
  const url = oAuth2.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
    state: encodeURIComponent(key) // amarra a key na volta
  });
  res.json({ url, key });
});

// 2) Callback OAuth: salva tokens na key
app.get("/auth/callback", async (req, res) => {
  const code = req.query.code;
  const key = req.query.state ? decodeURIComponent(req.query.state) : null;
  if (!code || !key) return res.status(400).send("Parâmetros inválidos.");
  try {
    const oAuth2 = makeOAuthClient();
    const { tokens } = await oAuth2.getToken(code);
    tokensByKey.set(key, tokens);
    res.send(`Autenticado para a chave: ${key}. Você pode fechar esta aba.`);
  } catch (e) {
    res.status(400).send("Falha na autenticação.");
  }
});

// 3) Listar arquivos
app.get("/drive/list", withAuth, async (req, res) => {
  try {
    const { q, pageSize = 50, pageToken } = req.query;
    const r = await req.gdrive.files.list({
      q: q || "",
      fields: "files(id,name,mimeType,parents,modifiedTime,owners,webViewLink,webContentLink),nextPageToken",
      pageSize: Number(pageSize),
      pageToken
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 4) Criar pasta
app.post("/drive/create-folder", withAuth, async (req, res) => {
  try {
    const { name, parentId } = req.body || {};
    if (!name) return res.status(400).json({ error: "name_required" });
    const r = await req.gdrive.files.create({
      requestBody: {
        name,
        mimeType: "application/vnd.google-apps.folder",
        parents: parentId ? [parentId] : undefined
      },
      fields: "id,name,webViewLink"
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 5) Criar arquivo (Google nativo ou binário base64)
app.post("/drive/create-file", withAuth, async (req, res) => {
  try {
    const { name, parentId, type, base64 } = req.body || {};
    const googleTypes = {
      doc: "application/vnd.google-apps.document",
      sheet: "application/vnd.google-apps.spreadsheet",
      slide: "application/vnd.google-apps.presentation"
    };
    if (googleTypes[type]) {
      const r = await req.gdrive.files.create({
        requestBody: { name, mimeType: googleTypes[type], parents: parentId ? [parentId] : undefined },
        fields: "id,name,webViewLink"
      });
      return res.json(r.data);
    }
    if (!base64) return res.status(400).json({ error: "base64_required_for_binary" });
    const r = await req.gdrive.files.create({
      requestBody: { name, parents: parentId ? [parentId] : undefined },
      media: { mimeType: "application/octet-stream", body: Buffer.from(base64, "base64") },
      fields: "id,name,webViewLink,webContentLink"
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 6) Metadados
app.get("/drive/metadata/:id", withAuth, async (req, res) => {
  try {
    const r = await req.gdrive.files.get({
      fileId: req.params.id,
      fields: "id,name,mimeType,parents,modifiedTime,owners,webViewLink,webContentLink"
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 7) Download base64
app.get("/drive/download/:id", withAuth, async (req, res) => {
  try {
    const r = await req.gdrive.files.get({ fileId: req.params.id, alt: "media" }, { responseType: "arraybuffer" });
    res.json({ base64: Buffer.from(r.data).toString("base64") });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// 8) Update (rename/move e/ou conteúdo binário)
app.patch("/drive/update/:id", withAuth, async (req, res) => {
  try {
    const { name, addParentId, removeParentId, base64 } = req.body || {};
    const metadata = {};
    if (name) metadata.name = name;
    if (addParentId || removeParentId) {
      metadata.addParents = addParentId || undefined;
      metadata.removeParents = removeParentId || undefined;
    }
    const media = base64 ? { mimeType: "application/octet-stream", body: Buffer.from(base64, "base64") } : undefined;
    const r = await req.gdrive.files.update({
      fileId: req.params.id,
      requestBody: metadata,
      media,
      fields: "id,name,parents,webViewLink,webContentLink"
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// OpenAPI + legal
app.get("/openapi.json", (_, res) => res.sendFile(path.join(__dirname, "openapi.json")));
app.get("/legal", (_, res) => res.send("Terms"));

// Start
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Drive Action server on :${port}`));
