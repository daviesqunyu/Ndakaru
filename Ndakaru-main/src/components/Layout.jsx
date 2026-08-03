import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SITE_URL, CONTACT, WHATSAPP_URL, PAGE_META, SITE_NAME, SITE_DESCRIPTION } from '../data/site';
import {
  IconHome, IconInfo, IconServices, IconProjects, IconGallery, IconBlog, IconQuote, IconContact,
  IconImpact, IconSupport, IconPhone, IconWhatsApp, IconEmail, IconUser, IconGlobe, IconLocation,
} from './FooterIcons';
import BackToTop from './BackToTop';
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

const DEFAULT_META = { title: SITE_NAME, description: SITE_DESCRIPTION };

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] || DEFAULT_META;
    document.title = meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', meta.description);
  }, [location.pathname]);

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
          {NAV_LINKS.map(({ to, label }) => {
            const Icon = to === '/' ? IconHome : to === '/about' ? IconInfo : to === '/services' ? IconServices : to === '/projects' ? IconProjects : to === '/gallery' ? IconGallery : to === '/blog' ? IconBlog : to === '/impact' ? IconImpact : to === '/support' ? IconSupport : to === '/contact' ? IconContact : IconQuote;
            return (
              <li key={to}>
                <Link to={to} className={isActive(to) ? 'active' : ''} onClick={() => setMenuOpen(false)}>
                  <span className="nav-overlay-icon" aria-hidden><Icon /></span> {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="nav-overlay-footer">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="nav-overlay-cta"><IconPhone /> {CONTACT.phone}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-overlay-cta nav-overlay-whatsapp"><IconWhatsApp /> WhatsApp</a>
        </div>
      </div>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="container footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">Ndakaru Bricks & Construction</h3>
              <p className="footer-tagline">Building Kenya. One Brick at a Time.</p>
              <div className="footer-location-wrap" aria-label="Location">
                <span className="footer-location-icon" aria-hidden><IconLocation /></span>
                <span className="footer-location-text"><strong>Ndakaru Village</strong>, Sirisia, Bungoma County, Kenya</span>
              </div>
            </div>
            <div className="footer-links">
              <h4 className="footer-heading">Quick links</h4>
              <ul>
                <li><Link to="/"><span className="footer-icon" aria-hidden><IconHome /></span> Home</Link></li>
                <li><Link to="/about"><span className="footer-icon" aria-hidden><IconInfo /></span> About</Link></li>
                <li><Link to="/services"><span className="footer-icon" aria-hidden><IconServices /></span> Services</Link></li>
                <li><Link to="/projects"><span className="footer-icon" aria-hidden><IconProjects /></span> Projects</Link></li>
                <li><Link to="/gallery"><span className="footer-icon" aria-hidden><IconGallery /></span> Gallery</Link></li>
                <li><Link to="/blog"><span className="footer-icon" aria-hidden><IconBlog /></span> Blog</Link></li>
                <li><Link to="/get-a-quote"><span className="footer-icon" aria-hidden><IconQuote /></span> Get a Quote</Link></li>
                <li><Link to="/contact"><span className="footer-icon" aria-hidden><IconContact /></span> Contact</Link></li>
              </ul>
            </div>
            <div className="footer-more">
              <h4 className="footer-heading">More</h4>
              <ul>
                <li><Link to="/impact"><span className="footer-icon" aria-hidden><IconImpact /></span> Impact</Link></li>
                <li><Link to="/support"><span className="footer-icon" aria-hidden><IconSupport /></span> Support</Link></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4 className="footer-heading">Contact</h4>
              <p><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="footer-contact-link footer-contact-link--phone"><span className="footer-icon" aria-hidden><IconPhone /></span> {CONTACT.phone}</a></p>
              <p><a href={`tel:${CONTACT.phoneAlt.replace(/\s/g, '')}`} className="footer-contact-link footer-contact-link--phone"><span className="footer-icon" aria-hidden><IconPhone /></span> {CONTACT.phoneAlt}</a></p>
              <p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-link footer-contact-link--whatsapp"><span className="footer-icon" aria-hidden><IconWhatsApp /></span> WhatsApp</a></p>
              <p><a href={`mailto:${CONTACT.email}`} className="footer-contact-link footer-contact-link--email"><span className="footer-icon" aria-hidden><IconEmail /></span> {CONTACT.email}</a></p>
              <p><a href={`mailto:${CONTACT.founderEmail}`} className="footer-contact-link footer-contact-link--founder"><span className="footer-icon" aria-hidden><IconUser /></span> Founder: {CONTACT.founderEmail}</a></p>
              <p><a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="footer-contact-link footer-contact-link--web"><span className="footer-icon" aria-hidden><IconGlobe /></span> ndakaru.co.ke</a></p>
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
      <BackToTop />
    </>
  );
}
