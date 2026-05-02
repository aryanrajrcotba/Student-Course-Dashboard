import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Welcome Back</h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem' }}>Log in to access your dashboard</p>
        
        {error && (
          <div style={{ padding: '0.75rem', marginBottom: '1.5rem', background: 'rgba(255, 99, 132, 0.1)', color: '#ff6384', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleLogin}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '500' }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="password" style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}>
              <input type="checkbox" style={{ padding: 0 }} /> Remember me
            </label>
            <a href="#" style={{ color: 'var(--primary)' }}>Forgot password?</a>
          </div>
          
          <button type="submit" className="btn" style={{ marginTop: '1rem', width: '100%' }} disabled={loading}>
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: '500' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
