import express from "express";
import cors from "cors";
import { rivers } from "./data/hatches.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/rivers", (_req, res) => {
  res.json(rivers.map(({ id, name }) => ({ id, name })));
});

// ---------- Candidate builds below this line ----------

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
