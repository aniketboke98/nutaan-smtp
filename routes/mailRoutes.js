const express = require("express");
const router = express.Router();

const { sendMail } = require("../controllers/mailController");
const verifySender = require("../middleware/verifySender");

router.post("/send", verifySender, sendMail);

module.exports = router;
