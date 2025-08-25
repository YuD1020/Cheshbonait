import {MongodbOperations} from '../services/mongo-db/operations'
import {Expence} from"../modules/expense"
import { myDate } from 'src/modules/myDate'
const operations = new MongodbOperations({dbName:'bookkeeping',collectionName:'expences'})

export const createExpence = async({provider,category,sum,date}:{provider:String,category:String,sum:number,date:any})=>{
const expence =new Expence({provider:provider,category:category,sum:sum,date:date})
console.log("------------------");
console.log(expence);

const response = await operations.addItem(expence)
console.log("------------------");
console.log(response);


return response;
}
