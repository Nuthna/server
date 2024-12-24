const BankAccount = require('../models/BankAccount');

exports.addBankAccount = async (req, res) => {
  const { accountNumber, accountHolder, balance } = req.body;
  try {
    const newAccount = new BankAccount({ accountNumber, accountHolder, balance });
    await newAccount.save();
    res.send('Bank account added');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
