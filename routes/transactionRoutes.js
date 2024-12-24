const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Send money
router.post("/send", async (req, res) => {
  const { sender, receiver, amount } = req.body;
  try {
    const transaction = new Transaction({ sender, receiver, amount });
    await transaction.save();
    res.status(201).json({ message: "Transaction successful!" });
  } catch (error) {
    res.status(500).json({ error: "Transaction failed" });
  }
});

// Get transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

module.exports = router;
