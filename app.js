const express = require("express");
const dotenv = require("dotenv");
const logger = require("./utils/logger");
const mailRoutes = require("./routes/mailRoutes");

// Load env vars
dotenv.config();

// Start worker
require("./workers/mailWorker");

const app = express();

app.use(express.json());

// Routes
app.use("/api/mail", mailRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Nutaan Mail Engine Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
