require("dotenv").config();
const express = require("express");
const { logDeployment } = require("./contractInteractor");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/log", async (req, res) => {
  const { eventType, status, timestamp, committer } = req.body;

  if (!eventType || !status || !timestamp || !committer) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const txHash = await logDeployment({ eventType, status, timestamp, committer });
    res.json({ success: true, txHash });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 BlockSecure backend listening on http://localhost:${PORT}`);
});
