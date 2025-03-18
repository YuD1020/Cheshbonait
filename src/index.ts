import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {routerIncome} from './routers/income'

import {open} from "./services/mongo-db/connection"
import {routerExpense} from  "../src/routers/expense" 
dotenv.config();
import http from "http"

const app: Express = express();
const PORT = 3002;
const HOST = "127.0.0.1"
const MONGO_URL="mongodb://127.0.0.1:27017"

const server=http.createServer(app)

open(MONGO_URL).then(() => {
  app.listen(PORT,HOST,  () => {
      console.log(`http://${HOST}:${PORT}`);
  })
}).catch((err) => console.log(err))
console.log('after connecting to mongo');


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});


app.use("/update/expense",routerExpense);
app.use("/update/income",routerIncome)


