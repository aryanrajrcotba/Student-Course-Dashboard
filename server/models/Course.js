const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true,
    enum: ['Beginner', 'Intermediate', 'Advanced']
  },
  duration: {
    type: String,
    required: true
  },
  modules: [{
    title: { type: String, required: true },
    type: { type: String, enum: ['video', 'notes'], required: true },
    contentUrl: { type: String, required: true }
  }]
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
