import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAdminToken } from '../utils/authToken.js'
export const UserRegister = async (req, res, next) => {
    try {
        console.log(req.body);

        const { fullName, email, mobileNumber, passWord, role } = req.body;

        if (!fullName || !email || !mobileNumber || !passWord || !role) {
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }
        console.log(fullName, email, mobileNumber, passWord);

        // check duplicated user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error("Email Already  Registered");
            error.statusCode = 409;
            return next(error);
        }
        console.log("Sending Data to DB");

        // encrypt the password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(passWord, salt);

        // save data to databse
        console.log("wor hashing done.hashpassowrd ", hashPassword);


        const newUser = await User.create({
            fullName,
            email,
            mobileNumber,
            passWord: hashPassword,
            role,
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
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            const error = new Error("Email not  Registered");
            error.statusCode = 401;
            return next(error);
        }


        // verify pssowrd

        const isVerified = await bcrypt.compare(passWord, existingUser.passWord);
        if (!isVerified) {
            const error = new Error("PassWord didnt match");
            error.statusCode = 401;
            return next(error);
        }

        //token generation will be done here
        genAdminToken(existingUser, res)
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
        res.clearCookie("Bourbon");
        res.status(200).json({ message: 'Logout Successfull' });
    } catch (error) {
        next(error)
    }
}

export const Usercontact = async (req, res, next) => {
    try {
        console.log(req.body);

        const { fullName, email, mobileNumber, message, gender } = req.body;

        if (!fullName || !email || !mobileNumber || !message || !gender) {
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }
        console.log(fullName, email, mobileNumber, message, gender);
        res.status(201).json({ message: "Query accepted" });
        // end
    } catch (error) {
        next(error)
    }
}