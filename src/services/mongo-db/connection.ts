import { MongoClient } from 'mongodb' 

let client:any = null

export const open = async (url:string=process.env.MONGO_URL!) => {
    if (!client) {
        client = new MongoClient(url)
        await client.connect()
    }
}

export const close = async () => {
    if (client)
        await client.close()
}

export const getClient = () => client



