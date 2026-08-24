import { useEffect, useState, useCallback } from 'react';
import { GALLERY_MEDIA } from '../data/gallery';
import { listMedia } from '../lib/mediaStore';

export default function useMedia() {
  const [uploaded, setUploaded] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const items = await listMedia();
      setUploaded(items);
    } catch {
      setUploaded([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { media: [...GALLERY_MEDIA, ...uploaded], uploaded, loading, refresh };
}
