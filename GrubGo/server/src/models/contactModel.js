import mongoose from 'mongoose';
const contactSchema = mongoose.Schema({

    // Take all the attributes type in backend as String Always 
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema)
export default Contact;