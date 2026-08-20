import { useState, useEffect, useCallback, useRef } from 'react';
import { GALLERY_MEDIA, encodedMediaSrc } from '../data/gallery';
import styles from './GallerySlideshow.module.css';

const AUTOPLAY_MS = 6000;

export default function GallerySlideshow({ onOpenLightbox }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [srcState, setSrcState] = useState({});
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const videoRefs = useRef({});

  const total = GALLERY_MEDIA.length;

  const goTo = useCallback((i) => {
    setIndex((prev) => (i + total) % total);
  }, [total]);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }, [next, stopAutoplay]);

  useEffect(() => {
    GALLERY_MEDIA.forEach((slide, i) => {
      const el = videoRefs.current[i];
      if (el) {
        if (i === index && slide.type === 'video') {
          el.play().catch(() => {});
        } else {
          el.pause();
          el.currentTime = 0;
        }
      }
    });
  }, [index]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [index, startAutoplay, stopAutoplay]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
    };
    const el = containerRef.current;
    if (el) el.addEventListener('keydown', handleKey);
    return () => { if (el) el.removeEventListener('keydown', handleKey); };
  }, [next, prev]);

  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart == null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 50) dx > 0 ? prev() : next();
    setTouchStart(null);
  };

  const handleMediaError = (src) => {
    setSrcState((prev) => ({ ...prev, [src]: 'placeholder' }));
  };

  const getSlideSrc = (slide) => {
    if (srcState[slide.src] === 'placeholder') return null;
    return slide.src;
  };

  if (total === 0) return null;

  const slide = GALLERY_MEDIA[index];
  const currentSrc = getSlideSrc(slide);

  return (
    <div
      className={styles.wrap}
      aria-label="Featured gallery slideshow"
      ref={containerRef}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
    >
      <div
        className={`${styles.container} ${onOpenLightbox ? styles.clickable : ''}`}
        onClick={() => onOpenLightbox?.(slide)}
        role={onOpenLightbox ? 'button' : undefined}
        tabIndex={onOpenLightbox ? 0 : undefined}
        onKeyDown={onOpenLightbox ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenLightbox(slide); } } : undefined}
        aria-label={onOpenLightbox ? `View current: ${slide.title}. Click to open full size.` : undefined}
      >
        <div className={styles.track}>
          <div className={`${styles.slide} ${styles.active}`} role="tabpanel">
            {currentSrc === null ? (
              <div className={styles.slidePlaceholder}>
                <span>{slide.title}</span>
              </div>
            ) : slide.type === 'video' ? (
              <video
                key={`video-${index}`}
                ref={(el) => { videoRefs.current[index] = el; }}
                src={encodedMediaSrc(slide.src)}
                muted
                loop
                playsInline
                className={styles.slideVideo}
                aria-label={slide.title}
                onError={() => handleMediaError(slide.src)}
              />
            ) : (
              <img
                key={`img-${index}`}
                src={encodedMediaSrc(slide.src)}
                alt={slide.title}
                loading="lazy"
                onError={() => handleMediaError(slide.src)}
              />
            )}
          </div>
        </div>
        <button type="button" className={styles.prev} onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">&#10094;</button>
        <button type="button" className={styles.next} onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">&#10095;</button>
        <div className={styles.dots} role="tablist" aria-label="Slide navigation" onClick={(e) => e.stopPropagation()}>
          {GALLERY_MEDIA.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === index}
              className={i === index ? `${styles.dot} ${styles.active}` : styles.dot}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <p className={styles.caption} aria-live="polite">
          {slide.type === 'video' && <span className={styles.videoBadge}>Video</span>}
          {slide.title}
        </p>
      </div>
    </div>
  );
}
