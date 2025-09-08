import {MongodbOperations} from '../services/mongo-db/operations'
import {Expense} from"../modules/expense"
import { myDate } from 'src/modules/myDate'
const operations = new MongodbOperations({dbName:'bookkeeping',collectionName:'expenses'})

export const createExpense = async({provider,category,sum,date}:{provider:string,category:string,sum:number,date:any})=>{
const expense =new Expense({provider:provider,category:category,sum:sum,date:date})
const response = await operations.addItem(expense)
return response;
}
