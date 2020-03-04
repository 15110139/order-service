
const {
    createOrder
} = require('./create-order')
class OrderRepository {
    constructor() {}
}
OrderRepository.prototype.createOrder = createOrder

module.exports.OrderRepository = OrderRepository