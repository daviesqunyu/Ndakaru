import { getSupabase, SUPABASE_CONFIGURED, MEDIA_TABLE, MEDIA_BUCKET } from './supabaseClient';

const DB_NAME = 'ndakaru-media';
const DB_VERSION = 1;
const STORE_ITEMS = 'items';
const STORE_BLOBS = 'blobs';

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_ITEMS)) {
        db.createObjectStore(STORE_ITEMS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_BLOBS)) {
        db.createObjectStore(STORE_BLOBS);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function txDone(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export function detectType(file) {
  if (file.type.startsWith('video/')) return 'video';
  if (file.type.startsWith('image/')) return 'image';
  const ext = file.name.split('.').pop().toLowerCase();
  if (['mp4', 'mov', 'webm', 'avi', 'mkv', 'm4v'].includes(ext)) return 'video';
  return 'image';
}

export function guessTitle(file) {
  return file.name
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .slice(0, 80) || 'Untitled';
}

async function localAdd({ file, title, category }) {
  const id = `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const type = detectType(file);
  const db = await openDb();
  const tx = db.transaction([STORE_ITEMS, STORE_BLOBS], 'readwrite');
  tx.objectStore(STORE_BLOBS).put(file, id);
  tx.objectStore(STORE_ITEMS).put({
    id, title, category, type,
    size: file.size,
    created_at: new Date().toISOString(),
  });
  await txDone(tx);
  db.close();
  return { id, title, category, type, size: file.size, created_at: new Date().toISOString(), src: null, local: true };
}

async function localList() {
  const db = await openDb();
  const tx = db.transaction([STORE_ITEMS, STORE_BLOBS], 'readonly');
  const itemsReq = tx.objectStore(STORE_ITEMS).getAll();
  const blobStore = tx.objectStore(STORE_BLOBS);
  const items = await new Promise((resolve) => { itemsReq.onsuccess = () => resolve(itemsReq.result || []); });
  for (const item of items) {
    const req = blobStore.get(item.id);
    const blob = await new Promise((resolve) => { req.onsuccess = () => resolve(req.result || null); });
    if (blob) item.src = URL.createObjectURL(blob);
  }
  db.close();
  return items;
}

async function localRemove(id) {
  const db = await openDb();
  const tx = db.transaction([STORE_ITEMS, STORE_BLOBS], 'readwrite');
  tx.objectStore(STORE_ITEMS).delete(id);
  tx.objectStore(STORE_BLOBS).delete(id);
  await txDone(tx);
  db.close();
}

async function remoteAdd({ file, title, category }) {
  const supabase = await getSupabase();
  const type = detectType(file);
  const safeName = file.name.replace(/[^\w.-]+/g, '-');
  const path = `${Date.now()}-${safeName}`;
  const { error: upErr } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  });
  if (upErr) throw upErr;
  const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path);
  const row = { title, category, type, path, src: data.publicUrl, size: file.size };
  const { data: inserted, error: dbErr } = await supabase
    .from(MEDIA_TABLE)
    .insert(row)
    .select()
    .single();
  if (dbErr) throw dbErr;
  return { ...inserted, local: false };
}

async function remoteList() {
  const supabase = await getSupabase();
  const { data, error } = await supabase
    .from(MEDIA_TABLE)
    .select('id, title, category, type, src, size, created_at')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data || []).map((r) => ({ ...r, local: false }));
}

async function remoteRemove(item) {
  const supabase = await getSupabase();
  if (item.path) {
    await supabase.storage.from(MEDIA_BUCKET).remove([item.path]);
  }
  await supabase.from(MEDIA_TABLE).delete().eq('id', item.id);
}

export async function listMedia() {
  if (SUPABASE_CONFIGURED) return remoteList();
  return localList();
}

export async function addMedia(payload) {
  if (SUPABASE_CONFIGURED) return remoteAdd(payload);
  return localAdd(payload);
}

export async function removeMedia(item) {
  if (!item.local && SUPABASE_CONFIGURED) return remoteRemove(item);
  return localRemove(item.id);
}
