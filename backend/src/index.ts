import express from "express";
import cors from "cors";
import { onibusMock } from "./data/onibus";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "🚍 CampusGO API está funcionando!", endpoint: "/api/onibus" });
});

app.get("/api/onibus", (req, res) => {
  res.json(onibusMock);
});

const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, () => {
  console.log(`🚍 Backend rodando na porta ${PORT}`);
});
