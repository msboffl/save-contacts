import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (_: Request, res: Response) => {
  res.send({ message: "API is working" });
});

app.listen(4000, () => {
  console.log("server running at port: 3000");
});
