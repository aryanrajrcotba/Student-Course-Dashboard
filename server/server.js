const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();


app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/course_dashboard';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => console.log('Database connection error:', error));