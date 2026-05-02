const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/users/login
// Basic login without JWT
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// POST /api/users/signup
// Basic signup without JWT
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

// GET /api/users/:id
// Get user details and populated enrolled courses
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('enrolledCourses');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      enrolledCourses: user.enrolledCourses
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error fetching user details' });
  }
});

// POST /api/users/:id/enroll
// Enroll a user in a course
router.post('/:id/enroll', async (req, res) => {
  const { courseId } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if course is already in enrolledCourses array
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(400).json({ message: 'User already enrolled in this course' });
    }

    user.enrolledCourses.push(courseId);
    await user.save();

    res.status(200).json({ message: 'Successfully enrolled in course' });
  } catch (error) {
    console.error('Error enrolling in course:', error);
    res.status(500).json({ message: 'Server error during enrollment' });
  }
});

module.exports = router;
