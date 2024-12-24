const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true },
  accountHolder: { type: String, required: true },
  balance: { type: Number, required: true },
});

module.exports = mongoose.model('BankAccount', bankAccountSchema);
