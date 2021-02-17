import nodemailer from "nodemailer";

const sendMail = async (subject, htmlContent, email) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSMAIL, // generated ethereal password
      },
    });

    const info = await transporter.sendMail({
      from: `"Comfeco" <${process.env.EMAIL}>`, // sender address
      to: email, // list of receivers
      subject, // Subject line
      html: htmlContent, // html body
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default sendMail;
