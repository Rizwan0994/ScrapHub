const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', OrderSchema);
