const Queue = require('bull');
const dotenv = require('dotenv');

dotenv.config();

const mailQueue = new Queue('mailQueue', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

module.exports = mailQueue;
