# Student Course Dashboard (SDB)

A full-stack web application designed for students to view and manage their course content. Built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- **User Authentication:** Secure login and signup functionality.
- **Course Dashboard:** View enrolled courses and their details.
- **Course Content:** Access video modules and notes for each course.
- **Responsive Design:** A clean, modern UI that works seamlessly across all devices.

## Tech Stack

- **Frontend:** React 
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) running locally or via MongoDB Atlas.

### Installation

1. Clone the repository and navigate into the project:
   ```bash
   git clone https://github.com/aryanrajrcotba/Student-Course-Dashboard.git
   cd Student-Course-Dashboard
   ```

2. Install dependencies for the root, client, and server:
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `server` directory and add your MongoDB connection string:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/course_dashboard
   ```

4. Seed the database with sample courses and users:
   ```bash
   cd server
   node seed.js
   ```

### Running the Application

From the root directory of the project, you can start both the frontend and backend servers at the same time:

```bash
npm start
```

- The React Frontend will be available at `http://localhost:5173`
- The Node/Express Server will be available at `http://localhost:5001`

FrontEnd: https://studentcoursedashboard.netlify.app

Backend: https://student-course-dashboard-dep.onrender.com

