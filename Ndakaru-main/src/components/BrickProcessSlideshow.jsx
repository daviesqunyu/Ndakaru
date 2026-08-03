import { useState, useEffect, useRef } from 'react';
import { BRICK_PROCESS_STEPS } from '../data/brickProcess';
import { encodedMediaSrc } from '../data/gallery';
import styles from './BrickProcessSlideshow.module.css';

const AUTOPLAY_MS = 7000;

export default function BrickProcessSlideshow() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const total = BRICK_PROCESS_STEPS.length;
  const step = total > 0 ? BRICK_PROCESS_STEPS[index % total] : null;

  const goTo = (i) => setIndex((i + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(() => setIndex((prev) => (prev + 1) % total), AUTOPLAY_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [total]);

  useEffect(() => {
    if (!step) return;
    const el = videoRef.current;
    if (!el || step.type !== 'video') return;
    el.play().catch(() => {});
    return () => el.pause();
  }, [index, step]);

  if (!step) return null;

  return (
    <section className={styles.wrap} aria-label="How we make bricks: soil to burning">
      <h2 className={styles.heading}>How We Make Bricks</h2>
      <p className={styles.subheading}>From soil to burning — quality bricks made in Sirisia, Ndakaru.</p>

      <div className={styles.presentation}>
        <div className={styles.media}>
          {step.type === 'video' ? (
            <video
              ref={videoRef}
              src={encodedMediaSrc(step.src)}
              muted
              loop
              playsInline
              className={styles.mediaEl}
              aria-label={step.title}
            />
          ) : (
            <img
              src={encodedMediaSrc(step.src)}
              alt={step.title}
              className={styles.mediaEl}
              loading="lazy"
            />
          )}
        </div>

        <div className={styles.caption}>
          <span className={styles.stepNum}>Step {step.step} of {total}</span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.desc}>{step.description}</p>
        </div>

        <div className={styles.controls}>
          <button type="button" className={styles.prev} onClick={prev} aria-label="Previous step">&#10094;</button>
          <div className={styles.dots}>
            {BRICK_PROCESS_STEPS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to step ${i + 1}`}
                aria-current={i === index}
                className={i === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button type="button" className={styles.next} onClick={next} aria-label="Next step">&#10095;</button>
        </div>
      </div>
    </section>
  );
}
