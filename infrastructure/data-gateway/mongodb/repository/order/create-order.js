const {OrderModel} = require('../../model/order')

async function createOrder(orderData){
    return await OrderModel.create(orderData)
}
module.exports.createOrder = createOrder