const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "suzankarunga@gmail.com",
    pass: "Su24n#123"
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailOptions = {
  from: "suzankarunga@gmail.com",
  to: "nakimulisandra@gmail.com",
  subject: "Testing",
  text: "First email"
};

transporter.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully");
  }
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
