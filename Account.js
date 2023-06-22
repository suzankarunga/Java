const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3500;

app.get('/', (req, res) => {
    res.send('Welcome to the application!');
  });
  
// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'suzankarunga@gmail.com', // Replace with your Gmail email address
    pass: 'Su24n#123' // Replace with your Gmail password or app password
  }
});

// Endpoint to handle account creation request
app.post('/create-account', (req, res) => {
  const { email } = req.body;

  // Email content
  const mailOptions = {
    from: 'suzankarunga@gmail.com', // Replace with your Gmail email address
    to: email,
    subject: 'Account Creation',
    text: 'Your account has been created successfully!'
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
