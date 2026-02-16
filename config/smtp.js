const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'localhost',
  port: process.env.SMTP_PORT || 25,
  secure: false, // true for 465, false for other ports
  tls: {
    rejectUnauthorized: false
  },
  // Only add auth if user/pass are defined
  ...(process.env.SMTP_USER && process.env.SMTP_PASS ? {
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  } : {})
});

module.exports = transporter;
