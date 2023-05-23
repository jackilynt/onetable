const express = require('express');
const router = express.Router();
const MainCourse = require('../models/main');

// Define your routes for main courses
// Example:
router.get('/main-courses', async (req, res) => {
  try {
    const mainCourses = await MainCourse.findAll();
    res.json(mainCourses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
