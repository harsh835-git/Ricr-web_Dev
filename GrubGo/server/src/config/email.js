import nodemailer from 'nodemailer';
// import dotenv from "dotenv"
// dotenv.config();

const sendEmail = async (to, subject, message) => {
    try {
        console.log("started sending email");
        
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSCODE,
            },
        });
        console.log("3......2.......1.....");
        
        const mailoption = {
            from: process.env.GMAIL_USER,
            to,
            subject,
            html: message,
        };

        console.log("hello");
        

        const res = await transporter.sendMail(mailoption);
        console.log(res);
    } catch (error) {
        console.log(error);


    }
};

// sendEmail("harshsoni83588@gmail.com", "test Email", "<p style='color:red' >Test Message </p>")