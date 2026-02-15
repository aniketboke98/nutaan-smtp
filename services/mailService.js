const transporter = require("../config/smtp");

exports.sendMail = async ({ to, subject, html, fromName, fromEmail }) => {
  const from = fromName
    ? `${fromName} <${fromEmail}>` // User provided code used `fromName <fromEmail>`
    : fromEmail;

  return await transporter.sendMail({
    from,
    to,
    subject,
    html
  });
};
