const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  nearestYard: {
    type: String,
    required: true
  },
  sDate: {
    type: Date,
    required: true
  },
  sTime: {
    type: String,
    required: true
  },
  itemDetails: {
    type: String,
    required: true
  },
  collectorYard: {
    type: String,
    required: true
  },
  collectorId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('notifycollector', pickupSchema);
