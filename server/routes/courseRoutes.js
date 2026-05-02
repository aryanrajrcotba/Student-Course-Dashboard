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

// GET /api/courses/:id
// Fetch a single course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({ message: 'Server error while fetching course' });
  }
});

module.exports = router;
