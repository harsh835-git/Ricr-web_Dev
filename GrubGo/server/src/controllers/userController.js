export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      { fullName, email, mobileNumber },
      { new: true }
    );

    res.status(200).json({
      message: "User Updated Successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
