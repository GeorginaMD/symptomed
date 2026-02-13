import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import supplementsRoutes from "./routes/supplements.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
  console.log(mongoose.connection.readyState);
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("Hello Symptomed Api!");
});

app.use("/api/supplements", supplementsRoutes);
app.use("/api/auth", authRoutes);

//start the express server
app.listen(port, () => {
  console.log(`Api running on port ${port}`);
});
