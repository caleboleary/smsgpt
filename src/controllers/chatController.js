const { sendSMS } = require('../utils/twilio');
const { chatGPT } = require('../utils/openai');

const handleIncomingSMS = async (req, res) => {
  try {
    const { Body, From } = req.body;
    const responseText = await chatGPT(Body);
    await sendSMS(From, responseText);
    res.status(200).send('OK');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  handleIncomingSMS,
};