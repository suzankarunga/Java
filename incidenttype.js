const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const incidentTypeSchema = new mongoose.Schema({
  incidentName: {
    type: String,
    required: true,
  },
  incidentId: {
    type: String,
    required: true,
    unique: true,
  },
});

const IncidentType = mongoose.model('IncidentType', incidentTypeSchema);

module.exports = IncidentType;
