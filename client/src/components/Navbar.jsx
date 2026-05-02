import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const location = useLocation();
  
  return (
    <header className="navbar">
      <Link to="/" className="nav-brand">
        SDB
      </Link>
      <nav className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        {user && <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>Dashboard</Link>}
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Hi, {user.name}</span>
            <button onClick={() => setUser(null)} className="btn">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="btn">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
