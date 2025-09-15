import { MongodbOperations } from "../services/mongo-db/operations";

const operations = new MongodbOperations({ dbName: 'bookkeeping', collectionName: 'expenses' })
export const findAllExpense = async () => {
    return await operations.find()

}

export const findMonthExpense = async ({ month }: { month: any }) => {
    return await operations.find({ filter: { "date.month":month } })

}

export const findMonthYearExpense = async ({ month, year }: { month: any, year: any }) => {
    const response=await operations.find({ filter: {"date.year": year, "date.month": month } })
    console.log({response});
    
    return response

}
export const findCategoryExpense = async ({ category }: { category: string }) => {
    return await operations.find({ filter: { category: category } })

}
export const findYearExpense = async ({ year }: { year: any }) => {
    return await operations.find({ filter: { "date.year": year } })

}

