const Login = () => {
  return (
    <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '0.5rem' }}>Welcome Back</h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '2rem' }}>Log in to access your dashboard</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '500' }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
            />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="password" style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
            />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}>
              <input type="checkbox" style={{ padding: 0 }} /> Remember me
            </label>
            <a href="#" style={{ color: 'var(--primary)' }}>Forgot password?</a>
          </div>
          
          <button type="submit" className="btn" style={{ marginTop: '1rem', width: '100%' }}>Log In</button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Don't have an account? <a href="#" style={{ color: 'var(--primary)', fontWeight: '500' }}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
