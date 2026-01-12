import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const UserRegister = async (req, res, next) => {
    try {
        const { fullName, email, mobileNumber, passWord } = req.body;

        if (!fullName || !email || !mobileNumber || !passWord) {
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }
        // check duplicated user
        const existingUser = await User.findOne({email});
        if (existingUser) {
            const error = new Error("Email Already  Registered");
            error.statusCode = 409;
            return next(error);
        }

        // encrypt the password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(passWord, salt);

        // save data to databse


        const newUser = await User.create({
            fullName,
            email,
            mobileNumber,
            passWord: hashPassword,
        })

        //  send response to  frontend  

        console.log(newUser);

        res.status(201).json({ message: "Registration Successfull" });
        // end
    } catch (error) {
        next(error)
    }
}

export const UserLogin = async (req, res, next) => {
    try {
        const { email, passWord } = req.body;

        if (!email || !passWord) {
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }
        // check duplicated user
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            const error = new Error("Email not  Registered");
            error.statusCode = 402;
            return next(error);
        }


        // verify pssowrd

        const isVerified = await bcrypt.compare(passWord, existingUser.passWord);
        if (!isVerified) {
            const error = new Error("PassWord didnt match");
            error.statusCode = 402;
            return next(error);
        }

        // send message to Frontend
        res.status(200).json({ message: 'Login Successfull', data: existingUser })
        // end
    }
    catch (error) {
        next(error)
    }
}
    export const UserLogout = async (req, res, next) => {
        try {
            res.status(200).json({ message: 'Logout Successfull' });
        } catch (error) {
            next(error)
        }
    }
