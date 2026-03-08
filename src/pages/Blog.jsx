import { Link } from 'react-router-dom';
import ContactIcons from '../components/ContactIcons';
import { BG_IMAGES } from '../data/images';
import './PageShared.css';
import './Blog.css';

const CATEGORIES = [
  'Construction tips',
  'Client stories',
  'Material guides',
  'Community updates',
];

const POSTS = [
  {
    title: 'How to choose the right bricks for your project',
    excerpt: 'Quality, size, and finish — what to look for when ordering bricks in Bungoma and beyond.',
    category: 'Construction tips',
    img: BG_IMAGES.bricks,
  },
  {
    title: 'Stories from the field: schools and families we’ve built for',
    excerpt: 'Real projects and real impact. How Ndakaru bricks and construction are helping the community.',
    category: 'Client stories',
    img: BG_IMAGES.building,
  },
  {
    title: 'From soil to burning: understanding our brick process',
    excerpt: 'A short guide to how we make quality pressed bricks in Sirisia, Ndakaru.',
    category: 'Material guides',
    img: BG_IMAGES.construction,
  },
  {
    title: 'News from Ndakaru Village and Bungoma',
    excerpt: 'Updates on employment, training, and community projects we’re part of.',
    category: 'Community updates',
    img: BG_IMAGES.team,
  },
];

export default function Blog() {
  return (
    <div className="page-blog">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.construction})` }}>
        <div className="container">
          <h1>Blog</h1>
          <p>Construction tips, client stories, material guides, and community updates.</p>
        </div>
      </section>
      <section className="section-with-bg" style={{ backgroundImage: `url(${BG_IMAGES.bricks})` }}>
        <div className="container page-content">
          <div className="blog-intro">
            <h2>Updates &amp; Stories</h2>
            <p className="lead">Practical advice and stories from Ndakaru Bricks &amp; Construction.</p>
            <p>
              Here we’ll share tips on choosing bricks and working with builders, stories from the projects we’ve delivered, 
              and updates from our community in Sirisia, Ndakaru — Bungoma County.
            </p>
          </div>

          <div className="blog-categories" role="navigation" aria-label="Blog categories">
            {CATEGORIES.map((cat) => (
              <span key={cat} className="blog-cat-pill">{cat}</span>
            ))}
          </div>

          <div className="blog-posts">
            {POSTS.map((post, i) => (
              <article key={i} className="blog-post-card">
                <div className="blog-post-card-img">
                  <img src={post.img} alt="" loading="lazy" />
                  <span className="blog-post-card-badge">{post.category}</span>
                  <span className="blog-post-card-coming">Coming soon</span>
                </div>
                <div className="blog-post-card-body">
                  <h3>{post.title}</h3>
                  <p className="blog-post-meta">Ndakaru Bricks &amp; Construction</p>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-cta">
            <p>Stay updated — follow our work and get in touch.</p>
            <div className="blog-cta-links">
              <ContactIcons variant="default" />
            </div>
            <p style={{ marginTop: '1rem', marginBottom: 0, fontSize: '0.9rem' }}>
              <Link to="/contact">Contact</Link> · <Link to="/get-a-quote">Get a Quote</Link> · <Link to="/">Home</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
