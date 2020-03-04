const mongoose = require('mongoose')
const Order = mongoose.Schema({
    userId:{
        type:String
    },
    amount:{
        type:Number
    },
    productId:{
        type:String
    }
})

const OrderModel = mongoose.model('orders',Order)

module.exports.OrderModel = OrderModel