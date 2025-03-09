const MongoDbOperations =require('../services/mongo-db/operations')
const operations = new MongoDbOperations({dbName:'bookkeeping',collectionName:'expences'})

const createExpence = async({provider,category,sum,date}:{provider:String,category:String,sum:number,date:number})=>{
const expence =new Expence({date:date,provider:provider,category:category,sum:sum})
const response = await operations.addItem(expence)
return response;
}
module.exports={createExpence}
