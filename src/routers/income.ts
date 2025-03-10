import { NextFunction } from "express"
const { newIncome } = require('../modules/income')

const express = require('express')
const router = express.Router()



router.post('/', express.json(), (req: Request, res: Response, next: NextFunction) => {
    try {
        const income = req.body
        const response = newIncome(income)
        // res.status(201).json(response)
        // res.locals['response'] = 201

    }
    catch (error: any) {
        // res.status(500).json({ error: error.message })
        // res.locals['response'] = 500

    }
    next()
})


module.exports = router
