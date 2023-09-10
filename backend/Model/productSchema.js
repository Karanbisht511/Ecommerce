const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Float32Array, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: {
    rate: { type: Number, max: 5, min: 0 },
    count: { type: Number, required: true },
  }
})

const User = mongoose.model("product", productSchema)

module.exports = User
