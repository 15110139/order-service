const path = require("path");

const { healthCheckHandller } = require("./handler/health-check");
const { loadProto } = require("../../common/load-proto");

const protoFile = path.join(__dirname,  "../../../../", "protobuf/health-check.proto");
const proto = loadProto(protoFile);
const service  = proto.health_check.Health.service;

module.exports.healthCheckService = {
  service,
  handlers: {
    Check: healthCheckHandller,
  },
};
