const path = require("path");

const { createOrderHandller } = require("./handler/create-order");
const { loadProto } = require("../../common/load-proto");

const protoFile = path.join(__dirname,  "../../../../", "protobuf/order.proto");
const proto = loadProto(protoFile);
const service  = proto.order_service.OrderService.service;

module.exports.orderService = {
  service,
  handlers: {
    CreateOrder: createOrderHandller,
  },
};
