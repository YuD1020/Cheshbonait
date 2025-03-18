import { Income } from "src/modules/income";
import {MongodbOperations} from '../services/mongo-db/operations'
const operations = new MongodbOperations({dbName:'bookkeeping',collectionName:'incomes'})

export const createIncome=async(income:Income)=>{
const response = await operations.addItem(income)
return response;

    
}




