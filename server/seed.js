require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');
const User = require('./models/User');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/course_dashboard';

const initialCourses = [
  { 
    title: 'Introduction to React', instructor: 'Aryan Raj', level: 'Beginner', duration: '4 Weeks',
    modules: [
      { title: 'Welcome to the Course', type: 'video', contentUrl: 'https://www.youtube.com/embed/Ty8gcCKuwNI?si=pjGKH2qcxk18QrtG' },
      { title: 'React Basics', type: 'notes', contentUrl: 'React is a library for building user interfaces. It lets you build complex UIs from small and isolated pieces of code called components.' },
      { title: 'Components and Props', type: 'video', contentUrl: 'https://www.youtube.com/embed/Ty8gcCKuwNI?si=pjGKH2qcxk18QrtG' }
    ]
  },
  { 
    title: 'Advanced CSS Layouts', instructor: 'Aryan Raj', level: 'Intermediate', duration: '3 Weeks',
    modules: [
      { title: 'Flexbox Deep Dive', type: 'video', contentUrl: 'https://www.youtube.com/embed/Ty8gcCKuwNI?si=pjGKH2qcxk18QrtG' },
      { title: 'CSS Grid Notes', type: 'notes', contentUrl: 'CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.' }
    ]
  },
  { 
    title: 'Node.js Backend Masterclass', instructor: 'Vratika', level: 'Advanced', duration: '8 Weeks',
    modules: [
      { title: 'Setting up Express', type: 'notes', contentUrl: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.' },
      { title: 'Creating REST APIs', type: 'video', contentUrl: 'https://www.youtube.com/embed/Ty8gcCKuwNI?si=pjGKH2qcxk18QrtG' }
    ]
  },
  { 
    title: 'UI/UX Design Principles', instructor: 'Riya', level: 'Beginner', duration: '2 Weeks',
    modules: [
      { title: 'Color Theory', type: 'video', contentUrl: 'https://www.youtube.com/embed/Ty8gcCKuwNI?si=pjGKH2qcxk18QrtG' },
      { title: 'Typography Essentials', type: 'notes', contentUrl: 'Good typography is about creating a hierarchy and ensuring readability. Always prioritize clear fonts over overly decorative ones for body text.' }
    ]
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    await Course.deleteMany();
    await User.deleteMany();
    console.log('Cleared existing courses and users');

    await Course.insertMany(initialCourses);
    await User.create({
      name: 'Test Student',
      email: 'test@example.com',
      password: 'password123'
    });
    console.log('Database seeded successfully with initial courses and test user!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
