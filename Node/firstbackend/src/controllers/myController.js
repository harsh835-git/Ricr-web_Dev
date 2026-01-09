import User from "../models/userModel.js";

export const UserRegister = async (req, res) => {
    try {
        const { fullName, email, phone, passWord } = req.body;

        if (!fullName || !email || !phone || !passWord) {
            res.status(400).json({ message: "All Fields Required" })
            return;
        }
        const newUser = await User.create({
            fullName, email, phone, passWord
        });
        console.log(newUser);

        res.status(201).json({ message: "User Created Successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Inernal Server Error" });
    }
}
export const UserLogin = async (req, res) => {
    try {
        const { email, passWord } = req.body;

        if (!email || !passWord) {
            res.status(400).json({ message: "All Fields Required" })
            return;
        }
        const existingUser = await User.find({
            email
        });
        if (!existingUser) {
            res.status(404).json({ message: "User Not Found" })
            return;
        }
        const isVerfied = passWord === existingUser.passWord;
        if (!isVerfied) {
            res.status(402).json({ message: "User Not Authorized" })
            return;
        }


        res.status(200).json({ message: "Welcome Back", data: existingUser });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Inernal Server Error" });
    }
}
export const UserLogout = async (req, res) => {
    try {
        res.status(200).json({ message: "Logout Sucessfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Inernal Server Error" });

    }
}