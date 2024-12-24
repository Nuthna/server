const express = require('express');
const router = express.Router();
const { addBankAccount } = require('../controllers/bankController');

router.post('/add', addBankAccount);

module.exports = router;
