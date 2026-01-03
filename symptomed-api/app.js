import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import supplementsRoutes from "./routes/supplements.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
  console.log(mongoose.connection.readyState);
});
mongoose.connection.on("error", (err) => {
  logError(err);
});

app.get("/", (req, res) => {
  res.send("Hello Symptomed Api!");
});

app.use("/api/supplements", supplementsRoutes);

//start the express server
app.listen(port, () => {
  console.log(`Api running on port ${port}`);
});
