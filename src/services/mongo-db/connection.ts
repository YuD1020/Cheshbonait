const { MongoClient } = require('mongodb')

let client:any = null

const openM = async (url:String) => {
    if (!client) {
        client = new MongoClient(url)
        await client.connect()
    }
}

const closeM = async () => {
    if (client)
        await client.close()
}

const getClientM = () => client

module.exports = { openM, closeM, getClientM }


