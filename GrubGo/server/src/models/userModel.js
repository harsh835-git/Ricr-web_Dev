import mongoose from 'mongoose';
const userSchema = mongoose.Schema({

    // Take all the attributes type in backend as String Always 
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    passWord: {
        type: String,
        required: true,
    },

},
    { timeStamp: true }
);

const User = mongoose.model("User", userSchema)
export default User;