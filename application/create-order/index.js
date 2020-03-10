const {
    ErrorCustom
} = require('../common/error-custom')
const {
    ErrorObject
} = require('../common/error-object')


const {
    OrderEntity,
    CommonEntity
} = require('../../entity')



class CreateOrderApplication {
    /**
     * 
     * @param {Object} options
     * @param {Object} options.infra 
     * @param {Object} infra.db 
     */
    constructor(options) {
        this.db = options.infra.db
        this.commonEntity = new CommonEntity()
        this.orderEntity = new OrderEntity()
    }

    /**
     * 
     * @param {Object} orderData
     * @param {Number} orderData.amount
     * @param {String} orderData.userId
     * @param {String} orderData.productId
     */
    async execute(orderData) {
        console.log("Data create order",JSON.stringify(orderData))
        const {
           userId,amount,productId
        } = orderData

        if (!userId) {
            throw new ErrorCustom(ErrorObject.RequiredUserId, "UserId is required")
        }

        if (!amount) {
            throw new ErrorCustom(ErrorObject.RequiredAmount, "Amount is required")
        }

        if (!productId) {
            throw new ErrorCustom(ErrorObject.RequiredProductId, "ProductId is required")
        }

        const order = await this.db.orderRepo.createOrder({
            userId,
            amount,
            productId,
        })
        const orderObject = this.orderEntity.getOrderObject(order)
        return orderObject
    }
}

module.exports.CreateOrderApplication = CreateOrderApplication