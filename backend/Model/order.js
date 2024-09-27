const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered"],
    default: "pending",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  items: [
    {
      productId: {
        type: String,
        required: true,
      },
      // product: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "Product", // Reference to the Product model
      //   required: true,
      // },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      }
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
