const grpc = require('grpc')
const {
    CheckHealthApplication,
    ErrorObject
} = require('../../../../../application')
const {
    dataGateway
} = require('../../../../../infrastructure')
const {
    ErrorMap
} = require('../../../common/error-map')
const errorMapping = {

}
const healthCheckHandller = async (call, callback) => {
    try {
        const body = call.request
        const intersect = new CheckHealthApplication()
        const rs = await intersect.execute(body.service);
        return callback(null, rs)
    } catch (error) {
        console.log(error)
        return callback(ErrorMap(error, errorMapping, "Internal server when health check"), null)

    }
}

module.exports.healthCheckHandller = healthCheckHandller