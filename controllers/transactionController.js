const Transaction = require('../models/Transaction');

exports.sendMoney = async (req, res) => {
  const { sender, receiver, amount } = req.body;
  try {
    const transaction = new Transaction({ sender, receiver, amount });
    await transaction.save();
    res.send('Transaction successful');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
