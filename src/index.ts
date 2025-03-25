import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {open} from "./services/mongo-db/connection"
import {router} from "../src/routers/expense"
dotenv.config();
import http from "http"

const app: Express = express();
const PORT = 3000;
const HOST = "127.0.0.1"
const MONGO_URL = "mongodb://127.0.0.1:27017"

const server = http.createServer(app)

open(MONGO_URL).then(() => {
  server.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}`);
  })
}).catch((err) => console.log(err))
console.log('after connecting to mongo');


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});
app.use("/update",router);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

