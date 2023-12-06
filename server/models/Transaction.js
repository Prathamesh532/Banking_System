// models/Transaction.js
const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["deposit", "withdraw"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
