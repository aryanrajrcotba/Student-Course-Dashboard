const courses = [
  { id: 1, title: 'Introduction to React', instructor: 'Sarah Drasner', level: 'Beginner', duration: '4 Weeks' },
  { id: 2, title: 'Advanced CSS Layouts', instructor: 'Kevin Powell', level: 'Intermediate', duration: '3 Weeks' },
  { id: 3, title: 'Node.js Backend Masterclass', instructor: 'Brad Traversy', level: 'Advanced', duration: '8 Weeks' },
  { id: 4, title: 'UI/UX Design Principles', instructor: 'Gary Simon', level: 'Beginner', duration: '2 Weeks' },
];

const Home = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Available Courses</h1>
      <p className="page-subtitle">Start learning today with our premium courses</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {courses.map(course => (
          <div key={course.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
    </div>
  );
}

export default Home;
