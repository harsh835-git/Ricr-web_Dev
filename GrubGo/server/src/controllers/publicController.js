import Contact from "../models/contactModel.js";

export const NewContact = async (req, res, next) => {
    try {
        console.log(req.body);

        const { fullName, email, mobileNumber, message, gender } = req.body;

        if (!fullName || !email || !mobileNumber || !message || !gender) {
            const error = new Error("All fields required");
            error.statusCode = 400;
            return next(error);
        }

        const newContact = await Contact.create({
            fullName,
            email,
            mobileNumber,
            message,
            gender,
        })

        console.log(newContact);

        console.log(fullName, email, mobileNumber, message, gender);
        res.status(201).json({ message: "Thanks for contacting us.We will get back to you in 24 Hours" });
        // end
    } catch (error) {
        next(error)
    }
}
