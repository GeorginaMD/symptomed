import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

//load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGODB_URI;

//middleware to parse json
app.use(express.json());
app.use(cors());

//connect to mongo using mongoose
mongoose.connect(uri);

//confirm connection/error to mongoose
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
  console.log(mongoose.connection.readyState);
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

/* const { Schema, model } = mongoose;

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
export default User; */

//routes
app.get("/", (req, res) => {
  res.send("Hello Symptomed Api!");
});

//start the express server
app.listen(port, () => {
  console.log(`Api running on port ${port}`);
});
