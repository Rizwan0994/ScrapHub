const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: {
    url: String,
    width: Number,
    height: Number,
  },
  price: Number,
  quantity: Number,
  bidStartTime: Date,
  bidEndTime: Date,
  closedAt: Date,
}, { timestamps: true });

const Product = mongoose.model('BidProducts', productSchema);

module.exports = Product;
