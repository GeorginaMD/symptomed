import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);
export default User;

app.get("/", (req, res) => {
  res.send("Hello Symptomed Api!");
});

app.listen(port, () => {
  console.log(`Api running on port ${port}`);
});
