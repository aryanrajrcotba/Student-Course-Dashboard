require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/course_dashboard';

const initialCourses = [
  { title: 'Introduction to React', instructor: 'Sarah Drasner', level: 'Beginner', duration: '4 Weeks' },
  { title: 'Advanced CSS Layouts', instructor: 'Kevin Powell', level: 'Intermediate', duration: '3 Weeks' },
  { title: 'Node.js Backend Masterclass', instructor: 'Brad Traversy', level: 'Advanced', duration: '8 Weeks' },
  { title: 'UI/UX Design Principles', instructor: 'Gary Simon', level: 'Beginner', duration: '2 Weeks' },
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    await Course.deleteMany();
    console.log('Cleared existing courses');

    await Course.insertMany(initialCourses);
    console.log('Database seeded successfully with initial courses!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
