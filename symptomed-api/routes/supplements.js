import express from "express";
import Supplement from "../models/Supplement.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const supplements = await Supplement.find();
  res.json(supplements);
});

router.get("/:slug", async (req, res) => {
  try {
    const supplement = await Supplement.findOne({ slug: req.params.slug });
    if (!supplement) return res.status(404).json({ error: "Not Found!" });
    res.json(supplement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
