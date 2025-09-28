import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { open } from "./services/mongo-db/connection";
import { router } from "./routers/expense";
import { displayRouter } from "./routers/display";
import cors from "cors";
import http from "http";

dotenv.config();

const app: Express = express();
const PORT = parseInt(process.env.PORT || "8080", 10);
const HOST = process.env.HOST || "0.0.0.0";
const MONGO_URL = process.env.MONGO_URL!;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use("/display", displayRouter);
app.use("/update", router);

app.use("/*", (req: Request, res: Response, next: NextFunction) => {
  if (!res.locals["response"]) {
    res.status(404).send(`${req.method}: "${req.baseUrl}" not found`);
    res.locals["response"] = 404;
  }
  next();
});

const server = http.createServer(app);

open(MONGO_URL)
  .then(() => {
    server.listen(PORT, HOST, () => {
      console.log(`[server]: Server is running at http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
