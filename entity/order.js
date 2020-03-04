class OrderEntity {
    getOrderObject (data){
        return {
            _id:data._id,
            productId:data.productId,
            userId:data.userId,
            amount:data.amount
        }
    }
}

module.exports.OrderEntity = OrderEntity