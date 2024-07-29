const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post('/payment', async (req, res) => {
  const { token, amount } = req.body;
  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token,
      description: 'Payment for services',
    });
    res.status(200).json({ message: 'Payment successful', charge });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
