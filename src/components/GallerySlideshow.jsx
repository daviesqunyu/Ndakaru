import { useState, useEffect, useCallback, useRef } from 'react';
import { GALLERY_MEDIA, encodedMediaSrc } from '../data/gallery';
import styles from './GallerySlideshow.module.css';

const AUTOPLAY_MS = 6000;

export default function GallerySlideshow() {
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

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }, [next]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Pause all videos, play active slide's video
  useEffect(() => {
    GALLERY_MEDIA.forEach((slide, i) => {
      const el = videoRefs.current[i];
      if (el) {
        if (i === index && slide.type === 'video') {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      }
    });
  }, [index]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [index, startAutoplay, stopAutoplay]);

  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart == null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 50) dx > 0 ? prev() : next();
    setTouchStart(null);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  };

  const getSlideSrc = (slide) => {
    if (srcState[slide.src] === 'placeholder') return null;
    return slide.src;
  };

  const handleMediaError = (src) => {
    setSrcState((prev) => ({ ...prev, [src]: 'placeholder' }));
  };

  if (total === 0) return null;

  return (
    <div
      className={styles.wrap}
      aria-label="Featured gallery slideshow"
      ref={containerRef}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className={styles.container}>
        <div className={styles.track}>
          {GALLERY_MEDIA.map((slide, i) => {
            const currentSrc = getSlideSrc(slide);
            const isActive = i === index;
            return (
              <div
                key={`${slide.type}-${slide.src}-${i}`}
                className={isActive ? `${styles.slide} ${styles.active}` : styles.slide}
                role="tabpanel"
                aria-hidden={!isActive}
              >
                {currentSrc === null ? (
                  <div className={styles.slidePlaceholder}>
                    <span>{slide.title}</span>
                  </div>
                ) : slide.type === 'video' ? (
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
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
                    src={encodedMediaSrc(slide.src)}
                    alt={slide.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    onError={() => handleMediaError(slide.src)}
                  />
                )}
              </div>
            );
          })}
        </div>
        <button type="button" className={styles.prev} onClick={prev} aria-label="Previous">&#10094;</button>
        <button type="button" className={styles.next} onClick={next} aria-label="Next">&#10095;</button>
        <div className={styles.dots} role="tablist" aria-label="Slide navigation">
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
          {GALLERY_MEDIA[index].type === 'video' && <span className={styles.videoBadge}>Video</span>}
          {GALLERY_MEDIA[index].title}
        </p>
      </div>
    </div>
  );
}
