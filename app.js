require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_SECRET,
  },
});

async function sendMail() {
  const options = {
    from: `Your's Truly Pavan <${process.env.USER_EMAIL}>`,
    to: ["pavankumarmaddala585@gmail.com", "hemanthreddy9133@gmail.com"],
    subject: "Tesing nodemailer",
    text: "Hello hemanth and pavan.",
    html: "<strong>Hai guys thisemail is sent from nodemiler.</strong>",
    attachments: [
      {
        filename: "attachment.text",
        path: "attachment.txt",
        contentType: "text/plain",
      },
    ],
  };

  try {
    await transporter.sendMail(options);
    console.log("Mail sent successfully!");
  } catch (error) {
    console.log(error);
  }
}

sendMail();
