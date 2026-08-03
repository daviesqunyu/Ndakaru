import { useEffect, useRef } from 'react';
import { encodedMediaSrc } from '../data/gallery';
import './MediaLightbox.css';

/**
 * Full-screen lightbox for viewing gallery images and playing videos.
 * Works on all devices (click/tap to open and close, keyboard, touch).
 */
export default function MediaLightbox({ item, onClose }) {
  const videoRef = useRef(null);
  const isVideo = item?.type === 'video';

  useEffect(() => {
    if (!item) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  useEffect(() => {
    if (item && isVideo && videoRef.current) {
      videoRef.current.focus?.();
      videoRef.current.play().catch(() => {});
    }
  }, [item, isVideo]);

  if (!item) return null;

  const src = encodedMediaSrc(item.src);

  return (
    <div
      className="media-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        type="button"
        className="media-lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div className="media-lightbox-content" onClick={(e) => e.stopPropagation()}>
        {isVideo ? (
          <video
            ref={videoRef}
            src={src}
            controls
            playsInline
            autoPlay
            className="media-lightbox-video"
            aria-label={item.title}
            onEnded={() => {}}
          />
        ) : (
          <img
            src={src}
            alt={item.title}
            className="media-lightbox-img"
            loading="eager"
          />
        )}
        <p className="media-lightbox-caption">{item.title}</p>
      </div>
    </div>
  );
}
