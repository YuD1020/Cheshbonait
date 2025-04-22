import { NextFunction } from "express"
import express, { Express, Request, Response } from "express";
import { findAllExpense, findCategoryExpense, findMonthExpense, findMonthYearExpense, findYearExpense } from "../display/expense";
export const displayRouter: Express = express();
displayRouter.use("/", express.json(),async(req: Request, res: Response, next: NextFunction) => {
    if (!res.locals['response']) {
        console.log("req.body")
        console.log(req.body)
        try {
            // const { month } = req.body
            // console.log(month)
            const response =  await findAllExpense()
            res.status(201).json(response)
            res.locals['response'] = 201
        }
        catch (error) {
            res.locals['response'] = 500
            console.log(error);
 res.status(500).json({ error: "error.message" })
        }
    }
    next()
})
displayRouter.use("/expense", express.json())
displayRouter.get('/expense/year',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.body")
        console.log(req.body)
        try {
            const { year } = req.body
            console.log(year)
            const response =  await findYearExpense({ year: year })
            res.status(201).json(response)
            res.locals['response'] = 201
        }
        catch (error) {
            res.locals['response'] = 500
            console.log(error);
 res.status(500).json({ error: "error.message" })
        }
    }
    next()
})
displayRouter.get('/expense/month',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.body")
        console.log(req.body)
        try {
            const { month } = req.body
            console.log(month)
            const response =  await findMonthExpense({month: month })
            res.status(201).json(response)
            res.locals['response'] = 201
        }
        catch (error) {
            res.locals['response'] = 500
            console.log(error);
 res.status(500).json({ error: "error.message" })
        }
    }
    next()
})


displayRouter.get('/expense/all',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.body")
        console.log(req.body)
        try {
            // const { month } = req.body
            // console.log(month)
            const response =  await findAllExpense()
            res.status(201).json(response)
            res.locals['response'] = 201
        }
        catch (error) {
            res.locals['response'] = 500
            console.log(error);
 res.status(500).json({ error: "error.message" })
        }
    }
    next()
})

displayRouter.get('/expense/monthInYear',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.body")
        console.log(req.body)
        try {
            const { year,month } = req.body
            console.log(year,month)
            const response =  await findMonthYearExpense({ year: year ,month:month})
            res.status(201).json(response)
            res.locals['response'] = 201
        }
        catch (error) {
            res.locals['response'] = 500
            console.log(error);
 res.status(500).json({ error: "error.message" })
        }
    }
    next()
})
displayRouter.get('/expense/category',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.body")
        console.log(req.body)
        try {
            const { category} = req.body
            console.log(category)
            const response =  await findCategoryExpense({ category:category})
            res.status(201).json(response)
            res.locals['response'] = 201
        }
        catch (error) {
            res.locals['response'] = 500
            console.log(error);
 res.status(500).json({ error: "error.message" })
        }
    }
    next()
})

