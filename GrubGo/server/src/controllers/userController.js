export const UserUpdate = async (req, res, next) => {
    try {

        const { fullName, email, mobileNumber } = req.body;
        const currentUser = req.user;

        if (!fullName || !email || !mobileNumber) {
            const error = new Error("All fields Required");
            error.statusCode = 400;
            return next(error)


        }

        console.log("OLd Data", currentUser);
        // currentUser.fullName = fullName;
        // currentUser.email = email;
        // currentUser.mobileNumber = mobileNumber;

        // await currentUser.save();
        // console.log("New data",currentUser);

        const updatedUser = await User.findByIdAndUpdate({ id: currentUser._.id }, {
            fullName,
            email,
            mobileNumber,
        }, { new: true });
        console.log("New data", updatedUser);
        res.status(200).json({ message: "User Updated SuceesFully", data: updatedUser })
        console.log("Update the User");

    } catch (error) {
        next(error);

    }
}