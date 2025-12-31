import mongoose from "mongoose";
import dotenv from "dotenv";
import supplements from "./supplements.json" with { type: "json" };
import Supplement from "../models/Supplement.js";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGODB_URI);
  await Supplement.deleteMany({});
  await Supplement.insertMany(supplements.data);
  console.log("Database seeded");
} catch (err) {
  console.error("Seeding failed:", err);
} finally {
  process.exit();
}

