import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
import { BG_IMAGES } from '../data/images';
import './PageShared.css';
import './Services.css';

const SERVICES = [
  { icon: '🧱', title: 'Brick manufacturing', desc: 'Quality pressed bricks for homes, schools & commercial.', img: BG_IMAGES.construction },
  { icon: '🏠', title: 'Residential', desc: 'Bungalows, maisonettes — foundation to finish.', img: BG_IMAGES.building },
  { icon: '🔧', title: 'Commercial & civil', desc: 'Shops, offices, fencing, drainage.', img: BG_IMAGES.site },
];

export default function Services() {
  return (
    <div className="page-services">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.construction})` }}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Brick manufacturing, residential and commercial construction, civil works.</p>
        </div>
      </section>
      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.building})` }}>
        <div className="container page-content">
          <div className="services-intro">
            <h2>What We Offer</h2>
            <p className="lead">Each service delivered with the same quality and care.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={i} className="service-tile">
                <div className="service-tile-img-wrap">
                  <img src={s.img} alt="" loading="lazy" />
                  <span className="service-tile-badge" aria-hidden="true">{s.icon}</span>
                </div>
                <div className="service-tile-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="page-actions">
            <Link to="/get-a-quote" className="btn-page">Get a quote</Link>
            <ContactIcons variant="default" />
          </div>
          <p style={{ marginTop: '1.5rem' }}><Link to="/">Home</Link></p>
        </div>
      </section>
    </div>
  );
}
