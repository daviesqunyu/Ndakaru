const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const SUPABASE_URL = url || '';
export const MEDIA_TABLE = 'site_media';
export const MEDIA_BUCKET = 'media';

export const SUPABASE_CONFIGURED = Boolean(url && key);

let clientPromise = null;

export function getSupabase() {
  if (!SUPABASE_CONFIGURED) return Promise.resolve(null);
  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then(({ createClient }) =>
      createClient(url, key)
    );
  }
  return clientPromise;
}
