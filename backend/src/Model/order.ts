import { Schema, Document, model } from "mongoose";

export interface Item {
  productId: string;
  quantity: number;
}

export interface IOrder extends Document {
  username: string;
  status: Enumerator<string>;
  orderDate: Date;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  totalAmount: number;
  items: Item[];
  created_at: Date;
  updated_at: Date;
}

const orderSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  status: {
    type: Enumerator,
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
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
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

export const Order = model<IOrder>("Order", orderSchema);
