import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
import { BG_IMAGES } from '../data/images';
import './PageShared.css';
import './PageVisuals.css';

export default function GetAQuote() {
  return (
    <div className="page-quote">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.building})` }}>
        <div className="container">
          <h1>Get a Free Quote</h1>
          <p>Tell us your project — we respond within 24 hours.</p>
        </div>
      </section>
      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.bricks})` }}>
        <div className="container page-content">
          <h2>How It Works</h2>
          <div className="visual-steps" aria-label="Quote process">
            <div className="visual-step">
              <div className="visual-step-num">1</div>
              <strong>Reach out</strong>
              <p>WhatsApp or email us with your project details.</p>
            </div>
            <div className="visual-step">
              <div className="visual-step-num">2</div>
              <strong>We quote</strong>
              <p>We respond within 24 hours with a no-obligation quote.</p>
            </div>
            <div className="visual-step">
              <div className="visual-step-num">3</div>
              <strong>You build</strong>
              <p>Agree and we deliver — bricks or full construction.</p>
            </div>
          </div>
          <h2>Reach Out</h2>
          <p className="lead">WhatsApp or email for a quick quote.</p>
          <div className="page-actions quote-actions">
            <ContactIcons variant="default" />
          </div>
          <p style={{ marginTop: '1.5rem' }}><Link to="/">Home</Link> · <Link to="/contact">Contact</Link></p>
        </div>
      </section>
    </div>
  );
}
