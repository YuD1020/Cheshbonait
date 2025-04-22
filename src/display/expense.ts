import { MongodbOperations } from "../services/mongo-db/operations";

const operations = new MongodbOperations({ dbName: 'bookkeeping', collectionName: 'expences' })
export const findAllExpense = async () => {
    return await operations.find()

}

export const findMonthExpense = async ({ month }: { month: number }) => {
    return await operations.find({ filter: { "date.month":month } })

}

export const findMonthYearExpense = async ({ month, year }: { month: number, year: number }) => {
    return await operations.find({ filter: {" date.year": year, "date.month": month } })

}
export const findCategoryExpense = async ({ category }: { category: string }) => {
    return await operations.find({ filter: { category: category } })

}
export const findYearExpense = async ({ year }: { year: number }) => {
    return await operations.find({ filter: { "date.year": year } })

}

