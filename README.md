# SMS Chatbot using Twilio and OpenAI ChatGPT

This project is a Node.js app that receives SMS messages via Twilio, sends them to OpenAI ChatGPT API, and sends responses back to the sender via Twilio.

## Prerequisites

- Node.js installed
- Twilio account and API credentials
- OpenAI API key

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add your Twilio and OpenAI API credentials.
4. Run `node src/app.js` to start the server.

## Usage

1. Expose your local server using a tool like [ngrok](https://ngrok.com/).
2. Set up a Twilio phone number and configure the webhook for incoming messages to point to your ngrok URL (e.g., `https://your-ngrok-url/api/sms`).
3. Send an SMS message to your Twilio phone number, and the app will respond using ChatGPT.

## License

This project is licensed under the MIT License.