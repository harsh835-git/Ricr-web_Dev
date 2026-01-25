import jwt from "jsonwebtoken"; 
import User from "../models/userModel.js";
export const Protect = async (req, res, next) => {
  try {
    const biscuit = req.cookies.Bourbon;
    if (!biscuit) {
      const error = new Error("Login again");
      error.statusCode = 401;
      return next(error);
    }

    const tea = jwt.verify(biscuit, process.env.JWT_SECRET);

    const verifiedUser = await User.findById(tea.id);
    if (!verifiedUser) {
      const error = new Error("Unauthorized User");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    next(error);
  }
};
