const mailQueue = require("../queue/mailQueue");

exports.sendMail = async (req, res) => {
  try {
    const { to, subject, html, fromName, fromEmail } = req.body;

    await mailQueue.add({
      to,
      subject,
      html,
      fromName,
      fromEmail
    });

    res.json({ success: true, message: "Mail queued" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
