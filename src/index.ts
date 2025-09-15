import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { open } from "./services/mongo-db/connection";
import { router } from "./routers/expense";
import cors from "cors";

dotenv.config();
import http from "http";
import { displayRouter } from "./routers/display";
const app: Express = express();
const PORT = 3002;
const HOST = "127.0.0.1";
const MONGO_URL = "mongodb://127.0.0.1:27017";

const server = http.createServer(app);

open(MONGO_URL)
  .then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
console.log("after connecting to mongo");

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use("/display", displayRouter);
app.use("/update", router);

app.use("/*", (req: Request, res: Response, next: NextFunction) => {
  if (!res.locals["response"]) {
    const { url } = req;
    res.status(404).send(`${req.method}:"${req.baseUrl}"not found`);
    res.locals["response"] = 404;
  }
  next();
});
