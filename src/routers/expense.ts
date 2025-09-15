import { NextFunction } from "express";
import { createExpense } from "../update/expense";
import express, { Express, Request, Response } from "express";
export const router: Express = express();
router.use("", express.json());
router.post("/expense", async (req: Request, res: Response, next: NextFunction) => {
  if (!res.locals["response"]) {
    console.log("req.body");
    console.log(req.body);
    try {
      const { provider, category, sum, date } = req.body;
      console.log(provider, category, sum, date);

      const response = await createExpense({ provider, category, sum, date });
      res.status(201).json(response);
      res.locals["response"] = 201;
    } catch (error) {
      res.locals["response"] = 500;
      console.log(error);

      res.status(500).json({ error: "error.message" });
    }
  }
  next();
});
