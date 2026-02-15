module.exports = function verifySender(req, res, next) {
  const { fromEmail } = req.body;

  const allowedDomain = process.env.ALLOWED_DOMAIN;

  if (!fromEmail) {
    return res.status(400).json({ error: "fromEmail is required" });
  }

  // Domain check removed to allow any sender
  // if (!fromEmail.endsWith(`@${allowedDomain}`)) { ... }

  next();
};
