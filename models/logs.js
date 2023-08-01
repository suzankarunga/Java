const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const logSchema = new mongoose.Schema({
  incident_name: {
    type: String,
    required: true
  },
  incident_id: {
    type: Number,
    required: true,
    unique: true
  },
  incident_log_number: {
    type: String,
    required: true
  },
  reporting_date_and_time: {
    type: Date,
    required: true
  },
  incident_description: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  micro_service_id: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  reported_by: {
    type: String,
    required: true
  },
  estimated_time_of_restoration: {
    type: Date
  },
  restored_by: {
    type: String
  },
  follow_up_steps: {
    type: String
  },
  follow_up_incharge: {
    type: String
  },
  closure_notes: {
    type: String
  },
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  // incident_type_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Log',
  //   required: true
  // }
}
);

logSchema.pre('save', async function (next) {
  // Hash password or perform any other operations if needed
  next();
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
