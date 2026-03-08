import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
import { BG_IMAGES } from '../data/images';
import { CONTACT } from '../data/site';
import './PageShared.css';
import './PageVisuals.css';

export default function Contact() {
  return (
    <div className="page-contact">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.contact})` }}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Reach out — we respond within 24 hours.</p>
        </div>
      </section>
      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.site})` }}>
        <div className="container page-content">
          <h2>Find Us</h2>
          <div className="visual-highlight">
            <div className="visual-highlight-img">
              <img src={BG_IMAGES.contact} alt="Ndakaru team at the site" loading="lazy" />
            </div>
            <div className="visual-highlight-text">
              <p className="lead" style={{ marginBottom: '1rem' }}>Sirisia, Ndakaru — Bungoma County, Kenya</p>
              <p className="contact-label">Phone</p>
              <p><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="contact-tel">{CONTACT.phone}</a> · <a href={`tel:${CONTACT.phoneAlt.replace(/\s/g, '')}`} className="contact-tel">{CONTACT.phoneAlt}</a></p>
              <p className="contact-label">Company email</p>
              <p><a href={`mailto:${CONTACT.email}`} className="contact-tel">{CONTACT.email}</a></p>
              <p className="contact-label">Founder</p>
              <p><a href={`mailto:${CONTACT.founderEmail}`} className="contact-tel">{CONTACT.founderEmail}</a></p>
            </div>
          </div>
          <div className="page-actions contact-actions">
            <ContactIcons variant="default" />
          </div>
          <p style={{ marginTop: '1.5rem' }}><Link to="/">Home</Link></p>
        </div>
      </section>
    </div>
  );
}
