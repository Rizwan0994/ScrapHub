// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema({
//   productName: { type: String, required: true },
//   weight: { type: Number, required: true },
//   price: { type: Number, required: true },
//   paid: { type: Boolean, default: false }
// });

// module.exports = mongoose.model("Order", OrderSchema);

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
