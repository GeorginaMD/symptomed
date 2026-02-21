import User from "../models/User.js";

export const updateHealthData = async (req, res) => {
  try {
    const userId = req.user._id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { healthData: req.body },
      { new: true },
    );
    res.status(200).json({
      message: "Health data updated",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProfileData = async (req, res) => {
  try {
    const userId = req.user._id;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profileData: req.body },
      { new: true },
    );
    res.status(200).json({
      message: "Profile data updated",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
