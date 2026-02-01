import Restaurant from "../models/restaurantModel.js";
import bcrypt from "bcrypt";
import { genAdminToken } from "../utils/authToken.js";

export const RestaurantRegister = async (req, res, next) => {
    try {
        const { fullName, email, mobileNumber, passWord, restaurantName } = req.body;

        if (!fullName || !email || !mobileNumber || !passWord || !restaurantName) {
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }

        // Check existing restaurant
        const existing = await Restaurant.findOne({ email });
        if (existing) {
            const error = new Error("Restaurant already registered");
            error.statusCode = 409;
            return next(error);
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(passWord, salt);

        const photoURL = `https://placehold.co/600x400?text=${restaurantName
            .charAt(0)
            .toUpperCase()}`;

        const newRestaurant = await Restaurant.create({
            fullName,
            restaurantName,
            email: email.toLowerCase(),
            mobileNumber,
            passWord: hashPassword,
            photo: { url: photoURL },
        });

        res.status(201).json({
            message: "Restaurant registered successfully",
            data: newRestaurant,
        });
    } catch (error) {
        next(error);
    }
};

export const RestaurantLogin = async (req, res, next) => {
    try {
        const { email, passWord } = req.body;

        if (!email || !passWord) {
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }

        const restaurant = await Restaurant.findOne({ email });
        if (!restaurant) {
            const error = new Error("Restaurant not registered");
            error.statusCode = 401;
            return next(error);
        }

        const isVerified = await bcrypt.compare(passWord, restaurant.passWord);
        if (!isVerified) {
            const error = new Error("Password did not match");
            error.statusCode = 401;
            return next(error);
        }

        genAdminToken(restaurant, res);

        res.status(200).json({
            message: "Restaurant login successful",
            data: restaurant,
        });
    } catch (error) {
        next(error);
    }
};

export const RestaurantLogout = async (req, res, next) => {
    try {
        res.clearCookie("Bourbon");
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        next(error);
    }
};


export const UpdateRestaurantProfile = async (req, res, next) => {
    try {
        const restaurantId = req.user._id;

        const updated = await Restaurant.findByIdAndUpdate(
            restaurantId,
            req.body,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            message: "Restaurant profile updated",
            data: updated,
        });
    } catch (error) {
        next(error);
    }
};

export const RestaurantChangePhoto = async (req, res, next) => {
    try {
        const restaurantId = req.user._id;

        if (!req.file) {
            const error = new Error("No image uploaded");
            error.statusCode = 400;
            return next(error);
        }

        const restaurant = await Restaurant.findById(restaurantId);

        restaurant.photo = {
            url: `/uploads/${req.file.filename}`,
        };

        await restaurant.save();

        res.status(200).json({
            message: "Restaurant photo updated",
            data: restaurant,
        });
    } catch (error) {
        next(error);
    }
};


export const restaurantResetPassword = async (req, res, next) => {
    try {
        const { oldPassword, newPassword, cfNewPassword } = req.body;
        const restaurantId = req.user._id;   // middleware se aa raha hoga

        if (!oldPassword || !newPassword || !cfNewPassword) {
            return res.status(400).json({ message: "All fields required" });
        }

        if (newPassword !== cfNewPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const restaurant = await User.findById(restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }

        const isMatch = await bcrypt.compare(oldPassword, restaurant.passWord);

        if (!isMatch) {
            return res.status(401).json({ message: "Old password incorrect" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        restaurant.passWord = hashedPassword;
        await restaurant.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        next(error);
    }
};
