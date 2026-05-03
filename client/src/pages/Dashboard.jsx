import { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/users/${user._id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <div className="page-container"><p style={{ textAlign: 'center' }}>Loading dashboard...</p></div>;
  }

  if (error) {
    return <div className="page-container"><p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{error}</p></div>;
  }

  const enrolledCourses = userData?.enrolledCourses || [];

  return (
    <div className="page-container">
      <h1 className="page-title">My Dashboard</h1>
      <p className="page-subtitle">Welcome back, {user.name}! Track your learning progress.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{enrolledCourses.length}</h2>
          <p style={{ color: 'var(--text-muted)' }}>Enrolled Courses</p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>0</h2>
          <p style={{ color: 'var(--text-muted)' }}>Hours Learned</p>
        </div>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>0</h2>
          <p style={{ color: 'var(--text-muted)' }}>Certificates</p>
        </div>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Your Courses</h2>
      {enrolledCourses.length === 0 ? (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>You haven't enrolled in any courses yet.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {enrolledCourses.map(course => (
            <div key={course._id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'var(--surface-border)', borderRadius: '12px' }}>{course.level}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{course.duration}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{course.title}</h3>
              <p style={{ color: 'var(--text-muted)', flexGrow: 1 }}>By {course.instructor}</p>

              <div style={{ marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                  <span>Progress</span>
                  <span>0%</span>
                </div>
                <div style={{ background: 'var(--surface-border)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ background: 'var(--primary)', height: '100%', width: '0%', borderRadius: '3px' }}></div>
                </div>
              </div>

              <Link to={`/course/${course._id}`} className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem', textAlign: 'center', textDecoration: 'none', display: 'inline-block', boxSizing: 'border-box' }}>Continue Learning</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
