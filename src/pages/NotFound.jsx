import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center', minHeight: '50vh' }}>
      <div style={{ fontSize: '4rem', fontWeight: 700, color: 'var(--green)' }}>404</div>
      <h1 style={{ marginTop: '0.5rem' }}>Page Not Found</h1>
      <p style={{ marginTop: '1rem', color: '#666' }}>The page you are looking for does not exist or has been moved.</p>
      <p style={{ marginTop: '1.5rem' }}>
        <Link to="/" style={{ padding: '0.85rem 1.5rem', background: 'var(--green)', color: 'var(--white)', borderRadius: 8, fontWeight: 700 }}>Back to Home</Link>
        {' '}
        <Link to="/contact" style={{ padding: '0.85rem 1.5rem', border: '2px solid var(--green)', color: 'var(--green)', borderRadius: 8, fontWeight: 600, marginLeft: '0.5rem' }}>Contact</Link>
      </p>
    </div>
  );
}
