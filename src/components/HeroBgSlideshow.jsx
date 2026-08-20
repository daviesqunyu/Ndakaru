import { useState, useEffect, useRef, useCallback } from 'react';
import { GALLERY_IMAGES, encodedMediaSrc } from '../data/gallery';
import './HeroBgSlideshow.css';

const INTERVAL_MS = 5500;
const TRANSITION_MS = 1200;

export default function HeroBgSlideshow() {
  const images = GALLERY_IMAGES;
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [preloaded, setPreloaded] = useState(new Set());
  const timerRef = useRef(null);

  const preload = useCallback((src) => {
    if (preloaded.has(src)) return;
    const img = new Image();
    img.src = src;
    img.onload = () => setPreloaded((prev) => new Set([...prev, src]));
  }, [preloaded]);

  useEffect(() => {
    if (images.length <= 1) return;
    const total = images.length;
    preload(encodedMediaSrc(images[0].src));
    preload(encodedMediaSrc(images[1 % total].src));
    preload(encodedMediaSrc(images[2 % total].src));
  }, [images.length, preload]);

  const advance = useCallback(() => {
    if (images.length <= 1) return;
    const total = images.length;
    const newNext = (index + 2) % total;
    preload(encodedMediaSrc(images[newNext].src));
    setTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
      setNextIndex(newNext);
      setTransitioning(false);
    }, TRANSITION_MS);
  }, [index, images, preload]);

  useEffect(() => {
    if (images.length <= 1) return;
    if (transitioning) return;
    timerRef.current = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [images.length, advance, transitioning]);

  if (!images.length) return null;

  const currentSrc = encodedMediaSrc(images[index].src);
  const nextSrc = encodedMediaSrc(images[nextIndex].src);

  return (
    <div className="hero-bg-slideshow" aria-hidden="true">
      <div
        className={`hero-bg-slide hero-bg-slide--current ${transitioning ? 'hero-bg-slide--exit' : ''}`}
        style={{ backgroundImage: `url(${currentSrc})` }}
      />
      <div
        className={`hero-bg-slide hero-bg-slide--next ${transitioning ? 'hero-bg-slide--enter' : ''}`}
        style={{ backgroundImage: `url(${nextSrc})` }}
      />
      <div className="hero-bg-slideshow-overlay" />
    </div>
  );
}
