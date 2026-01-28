import cloudinary from "../config/cloudinary.js";
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

export const UserChangePhoto = async (req, res, next) => {
  try {
    console.log("body: ", req.body);
    // console.log("body: ", req.body);
    const currentUser = req.user;
    const dp = req.file;

    console.log("request file: ", req.file);

    if (!dp) {
      const error = new Error("Profile Picture required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("DP:", dp);

    if (currentUser.photo.publicID) {
      await cloudinary.uploader.destroy(currentUser.photo.publicID);
    }

    const b64 = Buffer.from(dp.buffer).toString("base64");
    // console.log(b64.slice(0,100));
    const dataURI = `data:${dp.mimetype};base64,${b64}`;
    console.log("DataURI", dataURI.slice(0, 100));

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Cravings/User",
      width: 500,
      height: 500,
      crop: "fill",
    });

    console.log("Image Uplaoded successfully: ", result);
    currentUser.photo.url = result.secure_url;
    currentUser.photo.publicID = result.public_id;

    
    await currentUser.save();

    
    res.status(200).json({ message: "Photo Updated", data: currentUser });
  } catch (error) {
    next(error);
  }
};
