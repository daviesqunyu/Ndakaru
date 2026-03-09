import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../data/site';
import './PageShared.css';

export default function NotFound() {
  useEffect(() => {
    document.title = `Page Not Found | ${SITE_NAME}`;
  }, []);

  return (
    <div className="container page-not-found">
      <div className="page-not-found-code">404</div>
      <h1 className="page-not-found-title">Page Not Found</h1>
      <p className="page-not-found-desc">The page you are looking for does not exist or has been moved.</p>
      <div className="page-not-found-actions">
        <Link to="/" className="btn-page page-not-found-home">Back to Home</Link>
        <Link to="/contact" className="btn-page page-not-found-contact">Contact</Link>
      </div>
    </div>
  );
}
