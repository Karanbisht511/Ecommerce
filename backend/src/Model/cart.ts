import { Schema, Document, model } from "mongoose";

interface iCart extends Document {
  user: Schema.Types.ObjectId;
  items: [
    {
      product: Schema.Types.ObjectId;
      quantity: Number;
    }
  ];
  created_at: Date;
  updated_at: Date;
}

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
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

export const Cart = model<iCart>("Cart", cartSchema);
