const grpc = require('grpc')
const {
    CreateOrderApplication,
    ErrorObject
} = require('../../../../../application')
const {
    dataGateway
} = require('../../../../../infrastructure')
const {
    ErrorMap
} = require('../../../common/error-map')
const errorMapping = {
    [ErrorObject.RequiredUserId]: grpc.status.INVALID_ARGUMENT,
    [ErrorObject.RequiredAmount]: grpc.status.INVALID_ARGUMENT,
    [ErrorObject.RequiredProductId]: grpc.status.INVALID_ARGUMENT,
    [ErrorObject.AmountMustBeNumber]: grpc.status.INVALID_ARGUMENT,

}
const createOrderHandller = async (call, callback) => {
    try {
        const body = call.request
        const intersect = new CreateOrderApplication({
            infra: {
                db: dataGateway()
            }
        })
        const rs = await intersect.execute({
            userId: body.userId,
            productId: body.productId,
            amount: body.amount
        });
        return callback(null, rs)
    } catch (error) {
        console.log(error)
        return callback(ErrorMap(error, errorMapping, "Internal server when create order"), null)

    }
}

module.exports.createOrderHandller = createOrderHandller