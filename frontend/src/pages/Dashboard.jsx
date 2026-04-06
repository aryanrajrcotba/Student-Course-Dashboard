const Dashboard = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">My Dashboard</h1>
      <p className="page-subtitle">Track your learning progress</p>
      
      <div className="glass-panel" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Current Course Progress</h3>
        <div style={{ background: 'var(--surface-border)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ background: 'var(--primary)', height: '100%', width: '45%', borderRadius: '4px' }}></div>
        </div>
        <p style={{ marginTop: '0.5rem', textAlign: 'right', fontSize: '0.9rem', color: 'var(--text-muted)' }}>45% Complete (Intro to React)</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>3</h2>
          <p style={{ color: 'var(--text-muted)' }}>Active Courses</p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>12</h2>
          <p style={{ color: 'var(--text-muted)' }}>Hours Learned</p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>5</h2>
          <p style={{ color: 'var(--text-muted)' }}>Certificates</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
