import User from "../models/userModel.js";

export const UserRegister = async (req, res, next) => {
    try {
        const { fullName, email, phone, passWord } = req.body;

        if (!fullName || !email || !phone || !passWord) {
            const error = new Error("All fields Required");
            error.StatusCode = 400;
            return next(error);
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {

            const error = new Error("Email already exists");
            error.StatusCode = 409;
            return next(error);
        }
        const newUser = await User.create({
            fullName, email, phone, passWord
        });
        console.log(newUser);


        const error = new Error("User Created Successfully");
        error.StatusCode = 201;
        return next(error);

    } catch (error) {
        console.log(error);

        next(error);
    }
}
export const UserLogin = async (req, res, next) => {
    try {
        const { email, passWord } = req.body;

        if (!email || !passWord) {

            const error = new Error("All fields Required");
            error.StatusCode = 400;
            return next(error);
        }
        const existingUser = await User.findOne({
            email
        });
        if (!existingUser) {

            const error = new Error("User Not Found");
            error.StatusCode = 404;
            return next(error);
        }
        const isVerfied = passWord === existingUser.passWord;
        if (!isVerfied) {

            const error = new Error("User Not Authorized");
            error.StatusCode = 402;
            return next(error);
        }

        console.log(existingUser);

        res.status(200).json({ message: "Welcome Back", data: existingUser });

    } catch (error) {
        console.log(error);
        next(error);
    }
}
export const UserLogout = async (req, res, next) => {
    try {
        res.status(200).json({ message: "Logout successfull" })
    } catch (error) {
        console.log(error);
        next(error);

    }
}

export const UserUpdate = async (req, res, next) => {
    try {
        const { fullName, email, phone } = req.body

        if (!fullName || !email || !phone) {

            const error = new Error("All fields Required");
            error.StatusCode = 400;
            return next(error);
        }
        const existingUser = await User.findOne({
            email
        });
        if (!existingUser) {

            const error = new Error("User Not Found");
            error.StatusCode = 404;
            return next(error);
        }

        existingUser.fullName = fullName;
        existingUser.phone = phone;

        await existingUser.save();
        res.status(200).json({ message: "User Updated Successfully", data: existingUser });

    } catch (error) {
        console.log(error);
        next(error);

    }
}