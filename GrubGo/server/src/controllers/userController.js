import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }
    console.log("OldData: ", currentUser);

    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      { fullName, email, mobileNumber },
      { new: true }
    );
    console.log("Updated User: ", updatedUser);

    res.status(200).json({
      message: "User Updated Successfully",
      data: updatedUser,
    });
    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};
