const express = require('express');
const router = express.Router();
const Appetizer = require('../models/appetizer');

// Define your routes for appetizers
// Example:
router.get('/appetizers', async (req, res) => {
  try {
    const appetizers = await Appetizer.findAll();
    res.json(appetizers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
