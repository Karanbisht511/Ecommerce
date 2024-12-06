import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export function connectMongo() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected");
  } catch (error: any) {
    console.log(error.message);
  }
}
