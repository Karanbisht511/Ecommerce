import { Schema, model, Document } from "mongoose";

export interface iProduct extends Document {
  name: String;
  description: String;
  price: Number;
  stockQuantity: Number;
  category: String;
  review: {
    rating: Number;
    reviewerCount: Number;
  };
  images: [String];
  created_at: Date;
  updated_at: Date;
}

const productSchema = new Schema({
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
    required: true,
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

export const Product = model<iProduct>("Product", productSchema);
