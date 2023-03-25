const config = require('../../config');

const chatGPT = async (prompt) => {
  try {
    const { ChatGPTAPI } = await import("chatgpt");

    const api = new ChatGPTAPI({
        apiKey: config.openai.apiKey,
    });

    console.log(`User: ${prompt}`);
    const res = await api.sendMessage(prompt);
    console.log(`Bot: ${res.text}`);
    return res.text;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  chatGPT,
};