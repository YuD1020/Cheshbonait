import { getClient } from "./connection"

export class MongodbOperations {

    dbName:string
    collectionName:string
    constructor({ dbName, collectionName }: { dbName: string, collectionName: string }) {
        this.dbName = dbName
        this.collectionName = collectionName
    }

    set DbName(value: string) {
        this.dbName = value
    }

    set CollectionName(value: string) {
        this.collectionName = value
    }
    get MyCollection() {
        const client: any = getClient()
        if (!client) {
            throw Error('no connection to database')
        }
        if (!this.dbName) {
            throw Error('database name is required')
        }
        if (!this.collectionName) {
            throw Error('collection name is required')
        }
        return client.db(this.dbName).collection(this.collectionName)
    }
    async addItem(item: any) {
        const response = await this.MyCollection.insertOne(item)
        return response;
    }
    async findItem({ filter = {}, project = {} } = {}) {
        return await this.MyCollection.findOne(filter, project)
    }
    async find({ filter = {}, project = {} } = {}) {
        return await this.MyCollection.find(filter, project).toArray()
    }
    async updateItem({ filter = {}, set = {} }) {
        const response = await this.MyCollection.updateOne(filter, set)
        return response
    }
}
