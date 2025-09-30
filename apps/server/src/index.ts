import express, { Express, Request, Response } from "express";

const app: Express = express();
const HOST = process.env?.["SERVER_HOST"] || "localhost";
const PORT = Number(process.env?.["SERVER_PORT"]) || 4000;

app.get("/", (_: Request, res: Response) => {
  res.send({ message: "API is working" });
});

app.listen(PORT, HOST, () => {
  console.log(`[⏳⏳] Server running at http://${HOST}:${PORT}`);
});
