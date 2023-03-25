const express = require('express');
const router = express.Router();
const { handleIncomingSMS } = require('../controllers/chatController');

router.post('/sms', handleIncomingSMS);

module.exports = router;