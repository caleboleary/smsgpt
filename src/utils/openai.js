const config = require('../../config');

let lastMsgId = null;

let api;

const chatGPT = async (prompt) => {
  try {
    const { ChatGPTAPI } = await import("chatgpt");

    if (!api) {
        api = new ChatGPTAPI({
            apiKey: config.openai.apiKey,
            completionParams: {
                "model": "gpt-4"
            }
        });
    }

    if (prompt.trim().toLowerCase() === 'clear') {
        lastMsgId = null;
        return 'Conversation cleared.';
    }

    console.log(`User: ${prompt}, lastMsgId: ${lastMsgId}`);
    const res = await api.sendMessage(prompt, {
        parentMessageId: lastMsgId,
    });
    console.log(`Bot: ${res.text}`);
    lastMsgId = res.id;
    return res.text;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  chatGPT,
};