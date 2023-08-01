const mongoose = require('mongoose');

const microServiceSchema = new mongoose.Schema({
  serviceId: {
    type: String,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
    unique: true,
  },
  serviceStatus: {
    type: String,
    required: true,
    unique: true,
  },
});

const MicroService = mongoose.model('micro_service', microServiceSchema);

module.exports = MicroService;
