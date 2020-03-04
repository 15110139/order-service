
const {OrderRepository} = require('./repository/order')
const {
    InitConnectionMongodb
} = require('./connection')
class MongodbDataGateway {
    constructor() {
        this.orderRepo = new OrderRepository()
    }
}
module.exports.MongodbDataGateway = MongodbDataGateway
module.exports.InitConnectionMongodb =  InitConnectionMongodb