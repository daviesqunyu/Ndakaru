import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
import { BG_IMAGES } from '../data/images';
import './PageShared.css';
import './About.css';

const VALUES = [
  { icon: '✓', title: 'Quality', text: 'Pressed bricks made to last. Every batch checked.' },
  { icon: '📍', title: 'Local', text: 'Based in Sirisia, Ndakaru. We know the land and the people.' },
  { icon: '🛡', title: 'Trust', text: 'Women and youth employed. Real impact.' },
];

const PHOTOS = [
  { src: BG_IMAGES.team, alt: 'Our team at work' },
  { src: BG_IMAGES.bricks, alt: 'Quality bricks' },
  { src: BG_IMAGES.building, alt: 'Founder with employees' },
];

export default function About() {
  return (
    <div className="page-about">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.team})` }}>
        <div className="container">
          <h1>About Us</h1>
          <p>Quality bricks and construction from Sirisia, Ndakaru — Bungoma.</p>
        </div>
      </section>
      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.bricks})` }}>
        <div className="container page-content">
          <div className="about-story">
            <h2>Our Story</h2>
            <p className="lead">We are a local brick and construction company based in Ndakaru Village, Sirisia, Bungoma County.</p>
            <p>We produce quality pressed bricks and deliver residential and commercial construction. Your partner in Bungoma and beyond.</p>
          </div>

          <div className="about-values">
            <h3 className="about-values-title">Why Ndakaru</h3>
            <div className="about-values-grid">
              {VALUES.map((v, i) => (
                <div key={i} className="about-value-card">
                  <div className="about-value-icon" aria-hidden="true">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-photos">
            <h3 className="about-photos-title">Photos from Ndakaru</h3>
            <div className="about-photos-grid">
              {PHOTOS.map((p, i) => (
                <div key={i} className="about-photo-card">
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="page-actions">
            <Link to="/contact" className="btn-page">Contact</Link>
            <Link to="/get-a-quote" className="btn-page">Get a Quote</Link>
            <ContactIcons variant="default" />
          </div>
          <p style={{ marginTop: '1.5rem' }}><Link to="/">Home</Link> · <Link to="/services">Services</Link></p>
        </div>
      </section>
    </div>
  );
}
