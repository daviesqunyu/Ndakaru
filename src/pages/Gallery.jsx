import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GALLERY_MEDIA, encodedMediaSrc } from '../data/gallery';
import { BG_IMAGES } from '../data/images';
import MediaLightbox from '../components/MediaLightbox';
import './PageShared.css';
import './Gallery.css';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'image', label: 'Images' },
  { id: 'video', label: 'Videos' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered = useMemo(() => {
    if (filter === 'all') return GALLERY_MEDIA;
    return GALLERY_MEDIA.filter((m) => m.type === filter);
  }, [filter]);

  return (
    <div className="page-gallery">
      <section className="page-hero" style={{ backgroundImage: `url(${BG_IMAGES.bricks})` }}>
        <div className="container">
          <h1>Project Gallery</h1>
          <p>All photos and videos from Ndakaru Village, Sirisia, Bungoma.</p>
        </div>
      </section>
      <section className="section-with-bg gallery-section-inner" style={{ backgroundImage: `url(${BG_IMAGES.construction})` }}>
        <div className="container">
          <div className="gallery-toolbar" role="tablist" aria-label="Filter gallery">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                className={`gallery-filter-btn ${filter === f.id ? 'active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="gallery-count">
            {filter === 'all' && `${GALLERY_MEDIA.length} items`}
            {filter === 'image' && `${filtered.length} images`}
            {filter === 'video' && `${filtered.length} videos`}
          </p>

          <div className="gallery-grid-page">
            {filtered.map((item, i) => (
              <article
                key={`${item.type}-${item.src}-${i}`}
                className="gallery-card-page gallery-card-page-clickable"
                role="button"
                tabIndex={0}
                onClick={() => setLightboxItem(item)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxItem(item); } }}
                aria-label={`View ${item.type === 'video' ? 'video' : 'image'}: ${item.title}`}
              >
                <div className="gallery-card-media">
                  {item.type === 'video' ? (
                    <>
                      <video
                        src={encodedMediaSrc(item.src)}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-hidden
                      />
                      <div className="video-overlay" aria-hidden="true">
                        <span>▶</span>
                      </div>
                    </>
                  ) : (
                    <img
                      src={encodedMediaSrc(item.src)}
                      alt=""
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-category">{item.category}</span>
                  <p className="gallery-caption-page">{item.type === 'video' ? '▶ ' : ''}{item.title}</p>
                </div>
              </article>
            ))}
          </div>
          {lightboxItem && <MediaLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}

          {filtered.length === 0 && (
            <div className="gallery-empty">
              <p>No items in this filter.</p>
            </div>
          )}

          <p style={{ marginTop: '2rem', textAlign: 'center' }}><Link to="/">Home</Link> · <Link to="/contact">Contact</Link></p>
        </div>
      </section>
    </div>
  );
}
