import { NextFunction } from "express"
import express, { Express, Request, Response } from "express";
import { findAllExpense, findCategoryExpense, findMonthExpense, findMonthYearExpense, findYearExpense } from "../display/expense";
export const displayRouter: Express = express();
displayRouter.use("/", express.json())
displayRouter.get("/expense", express.json(),async(req: Request, res: Response, next: NextFunction) => {
    if (!res.locals['response']) {
        try {
            // const { month } = req.params
            // console.log(month)
            const response =  await findAllExpense()
            res.status(200).json(response)
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
displayRouter.get('/expense/year/:year',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.params")
        console.log(req.params)
        try {
            const { year } = req.params
            console.log(year)
            const intYear= parseInt(year)
            const response =  await findYearExpense({ year: intYear })
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
displayRouter.get('/expense/month/:month',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.params")
        console.log(req.params)
        try {
            const { month } = req.params
            console.log(month)
            const intMonth=parseInt(month)
            const response =  await findMonthExpense({month: intMonth })
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
        console.log("req.params")
        console.log(req.params)
        try {
            // const { month } = req.params
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

displayRouter.get('/expense/monthInYear/:year/:month',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.params")
        console.log(req.params)
        try {
            const { year,month } = req.params
          const intYear=parseInt(year)
          const intMonth=parseInt(month)
            console.log(year,month)
            const response =  await findMonthYearExpense({  year:intYear ,month:intMonth})
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
displayRouter.get('/expense/category/:category',async (req: Request, res: Response, next: NextFunction) => {
    
    if (!res.locals['response']) {
        console.log("req.params")
        console.log(req.params)
        try {
            const { category} = req.params
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

