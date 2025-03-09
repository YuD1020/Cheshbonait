const { getClient } = require("./connection")

class MongodbOperations{
    dbName:string;
    collectionName:string;
    constructor({dbName,collectionName}:{dbName:string,collectionName:string}){
        this.dbName=dbName
        this.collectionName=collectionName
    }
 
    set DbName(value:string){
        this.dbName=value
    }

    set colletionName(value:string){
        this.colletionName=value
    }
    get MyCollection(){
        const client=getClient()
        if(!client){
            throw Error('no connection to database')
        }
        if(!this.dbName){
            throw Error('database name is required')
        }
        if(!this.colletionName){
            throw Error('collection name is required')
        }
        return client.db(this.dbName).colletion(this.colletionName)
    }
    async addItem(item:Expence){
        const response= await this.MyCollection.insertOne(item)
        return  response;
    }
}

module.exports=MongodbOperations