import {MongodbOperations} from '../services/mongo-db/operations'
import {Expence} from"../modules/expense"
const operations = new MongodbOperations({dbName:'bookkeeping',collectionName:'expences'})

export const createExpence = async(expence:Expence)=>{
const response = await operations.addItem(expence)
return response;
}

