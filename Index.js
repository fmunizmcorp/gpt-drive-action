require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "25mb" }));
app.use(session({ secret: process.env.SESSION_SECRET || "change-me", resave: false, saveUninitialized: false }));

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const SCOPES = (process.env.DRIVE_SCOPES || "https://www.googleapis.com/auth/drive").split(" ");

function getOAuth2(req) {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    `${BASE_URL}/auth/callback`
  );
  if (req.session.tokens) oAuth2Client.setCredentials(req.session.tokens);
  return oAuth2Client;
}
function requireAuth(req, res, next) { if (!req.session?.tokens) return res.status(401).json({ error: "not_authenticated" }); next(); }
function driveClient(req) { return google.drive({ version: "v3", auth: getOAuth2(req) }); }

app.get("/health", (_, res) => res.json({ ok: true }));

app.get("/auth/url", (req, res) => {
  const url = getOAuth2(req).generateAuthUrl({ access_type: "offline", prompt: "consent", scope: SCOPES });
  res.json({ url });
});
app.get("/auth/callback", async (req, res) => {
  try {
    const { tokens } = await getOAuth2(req).getToken(req.query.code);
    req.session.tokens = tokens;
    res.send("Autenticado. Você pode fechar esta aba.");
  } catch (e) { res.status(400).send("Falha na autenticação."); }
});

app.get("/drive/list", requireAuth, async (req, res) => {
  try {
    const r = await driveClient(req).files.list({
      q: req.query.q || "",
      fields: "files(id,name,mimeType,parents,modifiedTime,owners,webViewLink,webContentLink),nextPageToken",
      pageSize: Number(req.query.pageSize || 50),
      pageToken: req.query.pageToken
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post("/drive/create-folder", requireAuth, async (req, res) => {
  try {
    const r = await driveClient(req).files.create({
      requestBody: { name: req.body.name, mimeType: "application/vnd.google-apps.folder", parents: req.body.parentId ? [req.body.parentId] : undefined },
      fields: "id,name,webViewLink"
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post("/drive/create-file", requireAuth, async (req, res) => {
  try {
    const googleTypes = {
      doc: "application/vnd.google-apps.document",
      sheet: "application/vnd.google-apps.spreadsheet",
      slide: "application/vnd.google-apps.presentation"
    };
    if (googleTypes[req.body.type]) {
      const r = await driveClient(req).files.create({
        requestBody: { name: req.body.name, mimeType: googleTypes[req.body.type], parents: req.body.parentId ? [req.body.parentId] : undefined },
        fields: "id,name,webViewLink"
      });
      return res.json(r.data);
    }
    if (!req.body.base64) return res.status(400).json({ error: "base64_required_for_binary" });
    const r = await driveClient(req).files.create({
      requestBody: { name: req.body.name, parents: req.body.parentId ? [req.body.parentId] : undefined },
      media: { mimeType: "application/octet-stream", body: Buffer.from(req.body.base64, "base64") },
      fields: "id,name,webViewLink,webContentLink"
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get("/drive/metadata/:id", requireAuth, async (req, res) => {
  try {
    const r = await driveClient(req).files.get({
      fileId: req.params.id,
      fields: "id,name,mimeType,parents,modifiedTime,owners,webViewLink,webContentLink"
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get("/drive/download/:id", requireAuth, async (req, res) => {
  try {
    const r = await driveClient(req).files.get({ fileId: req.params.id, alt: "media" }, { responseType: "arraybuffer" });
    res.json({ base64: Buffer.from(r.data).toString("base64") });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch("/drive/update/:id", requireAuth, async (req, res) => {
  try {
    const meta = {};
    if (req.body.name) meta.name = req.body.name;
    if (req.body.addParentId || req.body.removeParentId) {
      meta.addParents = req.body.addParentId || undefined;
      meta.removeParents = req.body.removeParentId || undefined;
    }
    const media = req.body.base64 ? { mimeType: "application/octet-stream", body: Buffer.from(req.body.base64, "base64") } : undefined;
    const r = await driveClient(req).files.update({
      fileId: req.params.id, requestBody: meta, media, fields: "id,name,parents,webViewLink,webContentLink"
    });
    res.json(r.data);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get("/openapi.json", (_, res) => res.sendFile(path.join(__dirname, "openapi.json")));
app.get("/legal", (_, res) => res.send("Terms"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Drive Action server on :${port}`));
