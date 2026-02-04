import Restaurant from "../models/restaurantModel.js";
import bcrypt from "bcrypt";
import { genAdminToken } from "../utils/authToken.js";
import Menu from "../models/menuSchema.js";
import { UploadMultipleToCloudinary } from "../utils/imageUploader.js";


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
        const { oldPassword, newPassword } = req.body;

        const restaurantId = req.user._id;

        if (!oldPassword || !newPassword) {
            return res.status(400).json({ message: "All fields required" });
        }

        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {

            return res.status(404).json({ message: "Restaurant not found" });
        }

        const isMatch = await bcrypt.compare(oldPassword, restaurant.passWord);

        if (!isMatch) {
            return res.status(401).json({ message: "Old password incorrect" });
        }

        restaurant.passWord = await bcrypt.hash(newPassword, 10);
        await restaurant.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        next(error);
    }
};


export const RestaurantAddMenuItem = async (req, res, next) => {
    try {
        const {
            itemName,
            description,
            price,
            type,
            preparationTime,
            availability,
            servingSize,
            cuisine,
        } = req.body;
        const CurrentUser = req.user;

        if (
            !itemName ||
            !description ||
            !price ||
            !type ||
            !preparationTime ||
            !availability ||
            !servingSize ||
            !cuisine
        ) {
            const error = new Error("All Fields are Required");
            error.statusCode = 400;
            return next(error);
        }

        const images = await UploadMultipleToCloudinary(req.files);
        console.log(images);

        const newMenuItem = await Menu.create({
            itemName,
            description,
            price,
            type,
            preparationTime,
            availability,
            servingSize,
            cuisine,
            images,
            resturantID: CurrentUser._id,
        });

        res.status(201).json({
            message: "Menu Item Added Successfully",
            data: newMenuItem,
        });
    } catch (error) {
        next(error);
    }
};

export const GetRestaurantMenuItem = async (req, res, next) => {
    try {
        const CurrentUser = req.user;

        const menuItems = await Menu.find({ resturantID: CurrentUser._id });


        res.status(200).json({
            message: "Menu Items Fetched Successfully",
            data: menuItems,
        });

        console.log("Body", req.body);
        console.log("Files", req.files);
    } catch (error) {
        next(error);
    }
};