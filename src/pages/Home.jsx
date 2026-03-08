import { Link } from 'react-router-dom';
import GallerySlideshow from '../components/GallerySlideshow';
import HeroBgSlideshow from '../components/HeroBgSlideshow';
import ContactIcons from '../components/ContactIcons';
import { GALLERY_MEDIA, encodedMediaSrc } from '../data/gallery';
import { BG_IMAGES } from '../data/images';
import './Home.css';

const SERVICES = [
  { icon: '🧱', title: 'Brick manufacturing', desc: 'Quality pressed bricks for homes, schools & commercial.', img: BG_IMAGES.construction },
  { icon: '🏠', title: 'Residential', desc: 'Bungalows, maisonettes — foundation to finish.', img: BG_IMAGES.building },
  { icon: '🔧', title: 'Commercial & civil', desc: 'Shops, offices, fencing, drainage.', img: BG_IMAGES.site },
];

const TRUST_ITEMS = [
  { label: 'Quality bricks', icon: '🧱' },
  { label: 'Sirisia, Ndakaru', icon: '📍' },
  { label: 'Free quotes', icon: '💬' },
];

const INTRO_PHOTOS = [
  { src: BG_IMAGES.team, alt: 'Our team at work' },
  { src: BG_IMAGES.bricks, alt: 'Quality bricks' },
  { src: BG_IMAGES.building, alt: 'Founder with employees' },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero" id="hero">
        <HeroBgSlideshow />
        <div className="container hero-container">
          <div className="hero-content-inner">
            <h1 className="hero-title">Ndakaru Bricks & Construction</h1>
            <p className="hero-tagline">Quality bricks & construction from Sirisia, Ndakaru — Bungoma County</p>
            <p className="hero-location">&#128205; Sirisia, Ndakaru — Bungoma County, Kenya</p>
            <div className="hero-cta">
              <Link to="/get-a-quote" className="btn-primary">Get a Free Quote</Link>
              <Link to="/gallery" className="btn-hero-gallery">View Gallery</Link>
              <Link to="/projects" className="btn-outline">View Projects</Link>
            </div>
          </div>
        </div>
        <a href="#intro" className="hero-scroll-hint" aria-label="Scroll to explore">
          <span className="chevron" aria-hidden="true" />
          <span>Explore</span>
        </a>
      </section>

      {/* Middle: Welcome + visual strip — bridge between hero and gallery */}
      <section id="intro" className="home-middle">
        <div className="home-middle-inner container">
          <div className="home-welcome">
            <p className="home-welcome-label"><span className="home-welcome-icon" aria-hidden="true">🤝</span> Your Local Partner</p>
            <h2 className="home-welcome-title">Welcome to Ndakaru Bricks & Construction</h2>
            <p className="home-welcome-text">
              Based in <strong>Sirisia, Ndakaru — Bungoma County</strong>. We make quality bricks and deliver construction that builds homes and futures. Your local partner.
            </p>
            <div className="home-welcome-links">
              <Link to="/about" className="home-link">About</Link>
              <Link to="/services" className="home-link">Services</Link>
            </div>
            <ContactIcons variant="default" />
          </div>
          <div className="home-welcome-photos" aria-label="Photos from Ndakaru">
            {INTRO_PHOTOS.map((p, i) => (
              <div key={i} className="home-welcome-photo">
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do — image-led service tiles */}
      <section id="what-we-do" className="home-services">
        <div className="container">
          <p className="home-section-label">Our expertise</p>
          <h2 className="home-section-title">What We Do</h2>
          <p className="home-section-desc">Brick manufacturing and construction from Sirisia, Ndakaru.</p>
          <div className="home-services-grid">
            {SERVICES.map((s, i) => (
              <Link key={i} to="/services" className="home-service-tile">
                <div className="home-service-tile-img">
                  <img src={s.img} alt="" loading="lazy" />
                  <span className="home-service-tile-badge" aria-hidden="true">{s.icon}</span>
                </div>
                <div className="home-service-tile-body">
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="home-services-cta">
            <Link to="/services" className="btn-services">View all services</Link>
          </div>
        </div>
      </section>

      {/* Trust bar — visual, clear */}
      <section className="home-trust">
        <div className="container">
          <div className="home-trust-grid">
            {TRUST_ITEMS.map((t, i) => (
              <div key={i} className="home-trust-item">
                <span className="home-trust-icon" aria-hidden="true">{t.icon}</span>
                <span className="home-trust-label">{t.label}</span>
              </div>
            ))}
          </div>
          <ContactIcons variant="dark" />
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="container">
          <p className="section-label">Our work</p>
          <h2>Project Gallery</h2>
          <p className="gallery-section-desc">See our bricks, builds, and team in action — photos and videos from Ndakaru.</p>

          <GallerySlideshow />

          <div className="gallery-cta-strip">
            <Link to="/gallery" className="btn-gallery-primary">
              <span className="btn-gallery-icon" aria-hidden="true">🖼</span>
              View full gallery — all photos & videos
            </Link>
          </div>

          <div className="gallery-grid">
            {GALLERY_MEDIA.map((item, i) => (
              <div key={`${item.type}-${item.src}-${i}`} className="gallery-card" data-category={item.category}>
                {item.type === 'video' ? (
                  <video src={encodedMediaSrc(item.src)} muted loop playsInline preload="metadata" aria-label={item.title} />
                ) : (
                  <img src={encodedMediaSrc(item.src)} alt={item.title} loading="lazy" />
                )}
                <span className="gallery-caption">{item.type === 'video' ? '▶ ' : ''}{item.title}</span>
              </div>
            ))}
          </div>
          <div className="gallery-actions">
            <Link to="/gallery" className="btn-cta-primary">View full gallery</Link>
            <Link to="/projects" className="btn-cta-secondary">View Projects</Link>
            <ContactIcons variant="default" />
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner-inner">
          <p className="cta-banner-text">Reach out — we respond within 24 hours.</p>
          <ContactIcons variant="dark" />
        </div>
      </section>
    </div>
  );
}
