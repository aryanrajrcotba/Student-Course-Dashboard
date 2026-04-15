const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET /api/courses
// Fetch all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Server error while fetching courses' });
  }
});

module.exports = router;
