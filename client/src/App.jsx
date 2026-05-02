import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CourseContent from './pages/CourseContent';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="container">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login setUser={setUser} />} />
          <Route path="/signup" element={user ? <Navigate to="/dashboard" replace /> : <Signup setUser={setUser} />} />
          <Route path="/course/:id" element={<CourseContent user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
