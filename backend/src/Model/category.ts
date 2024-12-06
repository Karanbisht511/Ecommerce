import { Schema, Document, model } from "mongoose";

interface iCategory extends Document {
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

export const Category = model<iCategory>("Category", categorySchema);
