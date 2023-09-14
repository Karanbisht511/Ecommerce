const mongoose = require("mongoose");
const Category = require("./category");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensure that the price is non-negative
  },
  stockQuantity: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true
  },
  review: {
    rating: { type: Number },
    reviewerCount: { type: Number },
  },
  images: [String], // Store URLs or file paths to product images
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
