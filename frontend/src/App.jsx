import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Temporary placeholder components
const Home = () => <div><h2>Available Courses</h2><p>Course list will go here.</p></div>;
const Login = () => <div><h2>Login</h2><p>Login form will go here.</p></div>;
const Dashboard = () => <div><h2>My Dashboard</h2><p>User progress will go here.</p></div>;

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <nav style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/dashboard" style={{ marginRight: '15px' }}>Dashboard</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
