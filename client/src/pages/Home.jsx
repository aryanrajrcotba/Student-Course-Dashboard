import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ user }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
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

  const handleEnroll = async (courseId) => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/api/users/${user._id}/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ courseId })
      });

      const data = await response.json();
      if (!response.ok) {
        alert(data.message || 'Failed to enroll');
      } else {
        alert('Successfully enrolled!');
        // Optionally redirect to dashboard
        navigate('/dashboard');
      }
    } catch (err) {
      alert('Error enrolling in course');
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Available Courses</h1>
      <p className="page-subtitle">Start learning today with Aryan Vratika & Riya</p>

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
              <button
                className="btn btn-secondary"
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={() => handleEnroll(course._id)}
              >
                {user ? 'Enroll' : 'Login to Enroll'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
