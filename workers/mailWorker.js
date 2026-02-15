const mailQueue = require('../queue/mailQueue');
const mailService = require('../services/mailService');
const logger = require('../utils/logger');

mailQueue.process(async (job) => {
  const { to, subject, html, fromName, fromEmail } = job.data;
  try {
    const info = await mailService.sendMail({ to, subject, html, fromName, fromEmail });
    logger.info(`Email sent to ${to}: ${info.messageId}`);
    return info;
  } catch (error) {
    logger.error(`Failed to send email to ${to}: ${error.message}`);
    throw error;
  }
});

logger.info('Mail worker started');
