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



class CheckHealthApplication {
  /**
   * 
   * @param {String} service 
   */
  async execute(service) {
      console.log("Check health check:",service )
      return 1
  }
}

module.exports.CheckHealthApplication = CheckHealthApplication