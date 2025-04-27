import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {open} from "./services/mongo-db/connection"
import {routerIncome} from './routers/income'
import {routerExpense} from  "../src/routers/expense" 
import http from "http"
import cors from "cors"
dotenv.config();

const app: Express = express();
const PORT = 3002;
const HOST = "127.0.0.1"
const MONGO_URL="mongodb://127.0.0.1:27017"

const server=http.createServer(app)

open(MONGO_URL).then(() => {
  server.listen(PORT,HOST,  () => {
      console.log(`http://${HOST}:${PORT}`);
  })
}).catch((err) => console.log(err))

app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.use("/update/expense",routerExpense);
app.use("/update/income",routerIncome)


