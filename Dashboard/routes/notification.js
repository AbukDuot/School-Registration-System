const express = require('express');
const sendEmail = require('../utils/mailer');

const router = express.Router();

router.post('/notify', (req, res) => {
  const { email, subject, message } = req.body;
  try {
    sendEmail(email, subject, message);
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
