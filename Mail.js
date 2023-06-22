const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail email address
    pass: 'your-password' // Replace with your Gmail password or app password
  }
});

// Endpoint to handle account creation request
app.post('/create-account', (req, res) => {
  const { email } = req.body;

  // Generate account activation token (e.g., using a library like `crypto`)

  // Save user details and activation token to the database

  // Construct activation link
  const activationLink = `https://your-domain.com/activate?token=your-activation-token`;

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Activate Your Account',
    text: `Please click the following link to activate your account: ${activationLink}`
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

// Endpoint to handle activation link clicks
app.get('/activate', (req, res) => {
  const token = req.query.token;

  // Validate token and activate user's account in the database

  // Redirect to a success page
  res.redirect('/success.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
