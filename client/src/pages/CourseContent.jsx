import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';

const CourseContent = ({ user }) => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  useEffect(() => {
    if (!user) return;

    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://student-course-dashboard.onrender.com/api/courses/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course data');
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <div className="page-container"><p style={{ textAlign: 'center' }}>Loading course content...</p></div>;
  }

  if (error || !course) {
    return <div className="page-container"><p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>{error || 'Course not found'}</p></div>;
  }

  const activeModule = course.modules && course.modules.length > 0 ? course.modules[activeModuleIndex] : null;

  return (
    <div className="page-container" style={{ maxWidth: '1400px' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/dashboard" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
          &larr; Back to Dashboard
        </Link>
        <h1 className="page-title" style={{ marginBottom: '0.5rem' }}>{course.title}</h1>
        <p className="page-subtitle">By {course.instructor}</p>
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

        {/* Content Viewer (Left Side) */}
        <div style={{ flex: '1 1 60%', minWidth: '300px' }}>
          <div className="glass-panel" style={{ padding: '2rem', minHeight: '500px' }}>
            {activeModule ? (
              <>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{activeModule.title}</h2>

                {activeModule.type === 'video' ? (
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                    <iframe
                      src={activeModule.contentUrl}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={activeModule.title}
                    ></iframe>
                  </div>
                ) : (
                  <div style={{ lineHeight: '1.8', color: 'var(--text-main)', background: 'var(--surface-border)', padding: '1.5rem', borderRadius: '8px' }}>
                    {activeModule.contentUrl}
                  </div>
                )}
              </>
            ) : (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '4rem' }}>No content available for this course yet.</p>
            )}
          </div>
        </div>

        {/* Module Sidebar (Right Side) */}
        <div style={{ flex: '1 1 30%', minWidth: '250px' }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--surface-border)' }}>Course Content</h3>

            {course.modules && course.modules.length > 0 ? (
              <ul style={{ listStyle: 'none' }}>
                {course.modules.map((mod, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>
                    <button
                      onClick={() => setActiveModuleIndex(index)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '1rem',
                        background: activeModuleIndex === index ? 'var(--primary)' : 'transparent',
                        color: activeModuleIndex === index ? '#fff' : 'var(--text-main)',
                        border: '1px solid var(--surface-border)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span style={{ fontWeight: activeModuleIndex === index ? '600' : '400' }}>{mod.title}</span>
                      <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: activeModuleIndex === index ? 'rgba(255,255,255,0.2)' : 'var(--bg-color)', borderRadius: '12px' }}>
                        {mod.type}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>Modules coming soon.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseContent;
