import {MongodbOperations} from '../services/mongo-db/operations'
import {Expence} from"../modules/expense"
const operations = new MongodbOperations({dbName:'bookkeeping',collectionName:'expences'})

export const createExpence = async({provider,category,sum,date}:{provider:String,category:String,sum:number,date:number})=>{
const expence =new Expence({date:date,provider:provider,category:category,sum:sum})
const response = await operations.addItem(expence)
return response;
}

