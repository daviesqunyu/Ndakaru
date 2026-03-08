import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
import { BG_IMAGES } from '../data/images';
import './PageShared.css';
import './PageVisuals.css';

export default function Impact() {
  return (
    <div className="page-impact">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.team})` }}>
        <div className="container">
          <h1>Impact & Stories</h1>
          <p>Community, employment, and local development.</p>
        </div>
      </section>
      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.bricks})` }}>
        <div className="container page-content">
          <h2>Our Impact</h2>
          <p className="lead">We create jobs and support the local economy in Sirisia, Ndakaru.</p>

          <div className="visual-stats" aria-label="Impact in numbers">
            <div className="visual-stat">
              <span className="visual-stat-num">18+</span>
              <span className="visual-stat-label">Women employed</span>
            </div>
            <div className="visual-stat">
              <span className="visual-stat-num">7+</span>
              <span className="visual-stat-label">Youth trained</span>
            </div>
            <div className="visual-stat">
              <span className="visual-stat-num">50+</span>
              <span className="visual-stat-label">Projects delivered</span>
            </div>
          </div>

          <div className="visual-strip" aria-label="Impact in action">
            <div className="visual-strip-item">
              <img src={BG_IMAGES.team} alt="Team at work" loading="lazy" />
            </div>
            <div className="visual-strip-item">
              <img src={BG_IMAGES.building} alt="Founder with employees" loading="lazy" />
            </div>
          </div>

          <p>Women and youth employed, quality bricks supplied to schools and homes. Partner with us to expand impact.</p>
          <div className="page-actions">
            <Link to="/support" className="btn-page">Support us</Link>
            <ContactIcons variant="default" />
          </div>
          <p style={{ marginTop: '1.5rem' }}><Link to="/contact">Contact</Link> · <Link to="/">Home</Link></p>
        </div>
      </section>
    </div>
  );
}
