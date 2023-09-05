const nodemailer = require("nodemailer");

const sendMail = async (email,otp) => {
    // connect with the smtp
    let transporter = await nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.APP_PASSWORD
        }
    });

    let info = await transporter.sendMail({
        from: `"Your future" <${process.env.APP_PASSWORD}>`, // sender address
        to: email, // list of receivers
        subject: "Account Recovery", // Subject line
        text: `Your otp is ${otp}, and it is valid for 5 mins`, // plain text body
    });
};

module.exports.sendMail = sendMail;