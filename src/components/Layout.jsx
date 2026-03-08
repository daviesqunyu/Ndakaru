import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_URL, CONTACT, WHATSAPP_URL } from '../data/site';
import './Layout.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/impact', label: 'Impact' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact' },
  { to: '/get-a-quote', label: 'Get a Quote' },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (to) => location.pathname === to || (to === '/' && location.pathname === '/');

  return (
    <>
      <header className="main-nav scrolled" id="mainNav">
        <div className="container nav-container">
          <Link to="/" className="nav-logo">Ndakaru Bricks & Construction</Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
          <nav className="nav-wrap" aria-label="Main navigation">
            <ul className="nav-links">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={isActive(to) ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`} id="navOverlay" aria-hidden={!menuOpen}>
        <div className="nav-overlay-header">
          <span className="nav-overlay-title">Menu</span>
          <button type="button" className="nav-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <ul className="nav-overlay-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={isActive(to) ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-overlay-footer">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="nav-overlay-cta">📞 {CONTACT.phone}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-overlay-cta nav-overlay-whatsapp">WhatsApp</a>
        </div>
      </div>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="container footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">Ndakaru Bricks & Construction</h3>
              <p className="footer-tagline">Building Kenya. One Brick at a Time.</p>
              <p className="footer-location">📍 Ndakaru Village, Sirisia, Bungoma County</p>
            </div>
            <div className="footer-links">
              <h4 className="footer-heading">Quick links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/get-a-quote">Get a Quote</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-more">
              <h4 className="footer-heading">More</h4>
              <ul>
                <li><Link to="/impact">Impact</Link></li>
                <li><Link to="/support">Support</Link></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4 className="footer-heading">Contact</h4>
              <p><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a></p>
              <p><a href={`tel:${CONTACT.phoneAlt.replace(/\s/g, '')}`}>{CONTACT.phoneAlt}</a></p>
              <p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
              <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
              <p><a href={`mailto:${CONTACT.founderEmail}`}>Founder: {CONTACT.founderEmail}</a></p>
              <p><a href={SITE_URL} target="_blank" rel="noopener noreferrer">ndakaru.co.ke</a></p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Ndakaru Bricks & Construction. Sirisia, Ndakaru, Bungoma. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        className="float-cta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="float-cta-icon">💬</span>
        WhatsApp
      </a>
    </>
  );
}
