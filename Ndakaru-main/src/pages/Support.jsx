import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
import { BG_IMAGES } from '../data/images';
import './PageShared.css';
import './PageVisuals.css';

export default function Support() {
  return (
    <div className="page-support">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.construction})` }}>
        <div className="container">
          <h1>Support Our Mission</h1>
          <p>Partner with us to expand impact in Bungoma and beyond.</p>
        </div>
      </section>
      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.building})` }}>
        <div className="container page-content">
          <h2>How You Can Help</h2>
          <p className="lead">Donate, partner, or spread the word.</p>

          <div className="visual-cards">
            <div className="visual-card">
              <span className="visual-card-icon" aria-hidden="true">&#128176;</span>
              <strong>Donate</strong>
              <p>Help us buy equipment and train more youth.</p>
            </div>
            <div className="visual-card">
              <span className="visual-card-icon" aria-hidden="true">&#128101;</span>
              <strong>Partner</strong>
              <p>Schools, NGOs, contractors — we work with you.</p>
            </div>
            <div className="visual-card">
              <span className="visual-card-icon" aria-hidden="true">&#128172;</span>
              <strong>Share</strong>
              <p>Tell others about Ndakaru Bricks & Construction.</p>
            </div>
          </div>

          <div className="visual-strip" aria-label="Our work">
            <div className="visual-strip-item">
              <img src={BG_IMAGES.bricks} alt="Quality bricks" loading="lazy" />
            </div>
          </div>

          <p>Your support helps us train more youth, employ more women, and deliver quality construction to the community.</p>
          <div className="page-actions">
            <Link to="/get-a-quote" className="btn-page">Get a Quote</Link>
            <ContactIcons variant="default" />
          </div>
          <p style={{ marginTop: '1.5rem' }}><Link to="/contact">Contact</Link> · <Link to="/">Home</Link></p>
        </div>
      </section>
    </div>
  );
}
