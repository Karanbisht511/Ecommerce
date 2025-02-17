import { Schema, Document, model } from "mongoose";

interface iUser extends Document {
  username: string;
  passwordHash: string;
  email: string;
  mobile: Number;
}

const userSchema = new Schema({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
});

export const User = model<iUser>("User", userSchema);
