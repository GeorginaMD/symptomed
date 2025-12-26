import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Symptomed Api!");
});

app.listen(port, () => {
  console.log(`Api running on port ${port}`);
});
