const {
    MongodbDataGateway,
    InitConnectionMongodb
} = require('./data-gateway/mongodb')


const configMongodb = {
    host: process.env.MONGODB_HOST || 'localhost',
    port: process.env.MONGODB_PORT || 27017,
    dbName: process.env.MONGODB_DB_NAME || 'order-service'
}


async function initConectionDB() {
    return await InitConnectionMongodb(configMongodb.host, configMongodb.port, configMongodb.dbName)
}


function dataGateway() {
    return new MongodbDataGateway()
}

initConectionDB()

module.exports = {
    dataGateway,
    initConectionDB
}
