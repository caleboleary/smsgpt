const twilio = require('twilio');
const config = require('../../config');

const client = twilio(config.twilio.accountSid, config.twilio.authToken);

const sendSMS = async (to, body) => {
  try {
    const message = await client.messages.create({
      body,
      to,
      from: config.twilio.phoneNumber,
    });
    return message;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  sendSMS,
};