import { useState, useEffect } from 'react';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // We use localhost:5001 as specified in backend/.env
        const response = await fetch('http://localhost:5001/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Available Courses</h1>
      <p className="page-subtitle">Start learning today with our premium courses</p>
      
      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading courses...</p>
      ) : error ? (
        <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>{error}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {courses.map(course => (
            <div key={course._id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem', background: 'var(--surface-border)', borderRadius: '12px' }}>{course.level}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{course.duration}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{course.title}</h3>
              <p style={{ color: 'var(--text-muted)', flexGrow: 1 }}>By {course.instructor}</p>
              <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }}>View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
