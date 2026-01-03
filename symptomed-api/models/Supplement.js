import mongoose from "mongoose";

const { Schema, model } = mongoose;

const supplementSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  slug: { type: String },
  benefits: [String],
  disease: [String],
  dose: [String],
  suggestions: [String],
});

const Supplement = model("Supplement", supplementSchema);

export default Supplement;
