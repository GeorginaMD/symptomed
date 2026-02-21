import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  updateHealthData,
  updateProfileData,
} from "../controllers/userController.js";

const router = express.Router();

router.put("/health", protect, updateHealthData);
router.put("/profile", protect, updateProfileData);

export default router;
