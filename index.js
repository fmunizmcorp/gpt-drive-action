const express = require("express");
const fetch = (...args) => import("node-fetch").then(({default: f}) => f(...args));
const app = express();
app.use(express.json({ limit: "25mb" }));

// Cole sua URL do Apps Script /exec como variável TARGET_URL no Render
const TARGET = process.env.TARGET_URL;

// Proxy GET
app.get("/", async (req, res) => {
  try {
    if (!TARGET) return res.status(500).json({ error: "TARGET_URL not set" });
    const url = new URL(TARGET);
    url.search = req.url.includes("?") ? req.url.split("?")[1] : "";
    const r = await fetch(url.toString(), { method: "GET" });
    const text = await r.text();
    res.status(r.status).type(r.headers.get("content-type") || "application/json").send(text);
  } catch (e) { res.status(500).json({ error: String(e) }); }
});

// Proxy POST
app.post("/", async (req, res) => {
  try {
    if (!TARGET) return res.status(500).json({ error: "TARGET_URL not set" });
    const url = new URL(TARGET);
    url.search = req.url.includes("?") ? req.url.split("?")[1] : "";
    const r = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body || {})
    });
    const text = await r.text();
    res.status(r.status).type(r.headers.get("content-type") || "application/json").send(text);
  } catch (e) { res.status(500).json({ error: String(e) }); }
});

const port = process.env.PORT || 10000;
app.listen(port, () => console.log("Proxy on :" + port));
