import jwt from "jsonwebtoken";
import User from "../models/userModel.js"

export const Protect = async (req, res, next) => {
    try {
        const biscuit = req.cookies.Bourbon;
        console.log("Token Recived in cookies ; ", biscuit);

        const tea = jwt.verify(biscuit, process.env.JWT_SECRET);
        console.log(tea);
        if (!tea) {
            const error = new Error("Unauthorized User! Please Login Again")
            error.statusCode = 401;
            return next(error);
        }

        const verifiedUser = await User.findByID(tea.id);
        if (!verifiedUser) {
            const error = new Error("Unauthorized User! Please Login Again")
            error.statusCode = 401;
            return next(error);
        }

        req.user = verifiedUser;

        next();
    } catch (error) {
        next(error);

    }
}