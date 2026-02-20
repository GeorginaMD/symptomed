import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    healthData: {
      gender: { type: String },
      age: { type: Number },
      weight: { type: Number },
      height: { type: Number },
      sleep: { type: String },
      activity: { type: Number },
      blood: { type: String },
    },
    profileData: {
      name: { type: String },
      email: { type: String },
      password: { type: String },
      telephone: { type: String },
      address: { type: String },
      city: { type: String },
      country: { type: String },
    },
  },
  { timestamps: true },
);

//hash passwords before saving:
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//compare passwords during login:
userSchema.methods.comparePasswords = async function (typedPassword) {
  return bcrypt.compare(typedPassword, this.password);
};

const User = model("User", userSchema);

export default User;
