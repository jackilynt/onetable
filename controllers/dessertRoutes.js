const express = require('express');
const router = express.Router();
const Dessert = require('../models/dessert');

// Define your routes for desserts
// Example:
router.get('/desserts', async (req, res) => {
  try {
    const desserts = await Dessert.findAll();
    res.json(desserts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
