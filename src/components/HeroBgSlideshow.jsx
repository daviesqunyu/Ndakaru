import { useState, useEffect } from 'react';
import { GALLERY_IMAGES, encodedMediaSrc } from '../data/gallery';
import './HeroBgSlideshow.css';

const INTERVAL_MS = 5000;

export default function HeroBgSlideshow() {
  const images = GALLERY_IMAGES;
  const [index, setIndex] = useState(0);
  const [front, setFront] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setFront((f) => 1 - f);
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  if (!images.length) return null;

  const currentSrc = encodedMediaSrc(images[index].src);
  const nextSrc = encodedMediaSrc(images[(index + 1) % images.length].src);

  return (
    <div className="hero-bg-slideshow" aria-hidden="true">
      <div
        className={`hero-bg-slide ${front === 0 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${currentSrc})` }}
      />
      <div
        className={`hero-bg-slide ${front === 1 ? 'active' : ''}`}
        style={{ backgroundImage: `url(${nextSrc})` }}
      />
    </div>
  );
}
