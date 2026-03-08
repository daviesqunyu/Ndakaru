import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
import BrickProcessSlideshow from '../components/BrickProcessSlideshow';
import { BG_IMAGES } from '../data/images';
import './PageShared.css';
import './Projects.css';

export default function Projects() {
  return (
    <div className="page-projects">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.construction})` }}>
        <div className="container">
          <h1>Our Projects</h1>
          <p>Completed work, ongoing builds, and how we make our bricks.</p>
        </div>
      </section>
      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.site})` }}>
        <div className="container page-content">
          <BrickProcessSlideshow />
          <h2 className="projects-portfolio-heading">Portfolio & Gallery</h2>
          <p className="lead">View our gallery for photos and videos of bricks, builds, and team.</p>
          <div className="page-actions">
            <Link to="/gallery" className="btn-page">View gallery</Link>
            <ContactIcons variant="default" />
          </div>
          <p style={{ marginTop: '1.5rem' }}><Link to="/">Home</Link></p>
        </div>
      </section>
    </div>
  );
}
