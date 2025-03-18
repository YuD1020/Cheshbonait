import { NextFunction } from "express"
import express, {  Request, Response } from "express";
import { Income } from "src/modules/income";
import { createIncome } from "src/services/update/income";

export const routerIncome = express.Router()



routerIncome.post('/', express.json(), (req: Request, res: Response, next: NextFunction) => {
    try {
        const income:Required<Income> = req.body
        createIncome(income)
        res.status(201)
        res.locals['response'] = 201
    }
    catch (error: any) {
        res.status(500).json({ error: error.message })
        res.locals['response'] = 500

    }
    next()
})


