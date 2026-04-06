import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="navbar">
      <Link to="/" className="nav-brand">
        Study<span>Dash</span>
      </Link>
      <nav className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>
        <Link to="/login" className="btn">Login</Link>
      </nav>
    </header>
  );
};

export default Navbar;
