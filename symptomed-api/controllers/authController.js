import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

//REGISTER controller:
export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    const { email, password } = req.body;
    //check if user exists:
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    //create user:
    const user = await User.create({ email, password });
    res.status(201).json({ message: "User registered succesfully" });
  } catch (error) {
    console.log("REGISTER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//LOGIN controller:
export const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePasswords(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //if password ^ is correct, create token:
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    //send token as http-only cookie (stored in browser):
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, //true for production
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({ message: "Login succesfull" });
  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//LOGOUT controller
export const logoutUser = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, //true for production
    sameSite: "strict",
  });
  res.status(200).json({ message: "Logged out successfully" });
};
