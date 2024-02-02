const nodemailer = require("nodemailer");
const crypto = require("crypto");

module.exports = {
  sendConfirmationMail: (req, res) => {
    const { email } = req.body;
    const Token = crypto.randomBytes(32).toString("hex");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Email Confirmation",
      text: `Please click on the following link to confirm your email: ${process.env.SERVER_URL}/confirm?email=${email}&token=${Token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json(error);
      } else {
        return res
          .status(200)
          .json({ message: "Confirmation email sent successfully" });
      }
    });
  },
};
