// controllers/transactionController.js
const express = require('express');
const router = express.Router();
const User = require('../models/Transaction');
const Transaction = require('../models/Transaction');

router.post('/', async (req, res) => {
  try {
    const { username, type, amount  } = req.body;

    console.log(username)
    console.log(type)
    console.log(amount)

    // Fetch the logged-in user
    const user = await User.findById(username);

    // Perform deposit or withdrawal logic
    if (type === 'deposit') {
      user.balance += amount;
    } else if (type === 'withdraw') {
      if (user.balance < amount) {
        return res.status(400).json({ message: 'Insufficient funds' });
      }
      user.balance -= amount;
    } else {
      return res.status(400).json({ message: 'Invalid transaction type' });
    }

    // Save the updated user to the database
    await user.save();

    // Create a transaction record
    const transaction = new Transaction({
      user: username,
      type,
      amount,
    });
    await transaction.save();

    res.status(200).json({ message: 'Transaction successful', newBalance: user.balance });
  } catch (error) {
    console.error('Transaction failed:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
