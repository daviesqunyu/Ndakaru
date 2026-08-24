import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { addMedia, removeMedia, guessTitle, listMedia } from '../lib/mediaStore';
import { SUPABASE_CONFIGURED } from '../lib/supabaseClient';
import './Studio.css';

const CATEGORIES = ['Bricks', 'Construction', 'Team', 'Site', 'Warehouse', 'General'];
const PIN_KEY = 'ndakaru-studio-unlocked';

function formatSize(bytes) {
  if (!bytes && bytes !== 0) return '';
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0; let n = bytes;
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i += 1; }
  return `${n.toFixed(n < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
}

export default function Studio() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(PIN_KEY) === '1');
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');

  const [items, setItems] = useState([]);
  const [queue, setQueue] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!unlocked) return;
    listMedia().then(setItems).catch(() => setItems([]));
  }, [unlocked]);

  const unlock = (e) => {
    e.preventDefault();
    const expected = import.meta.env.VITE_STUDIO_PIN || 'ndakaru2026';
    if (pin === expected) {
      sessionStorage.setItem(PIN_KEY, '1');
      setUnlocked(true);
    } else {
      setPinError('Wrong passcode. Try again.');
    }
  };

  const enqueue = useCallback((fileList) => {
    const files = Array.from(fileList);
    setQueue((q) => [...q, ...files.map((file) => ({
      file,
      title: guessTitle(file),
      category: 'General',
      id: `${file.name}-${file.size}-${Math.random().toString(36).slice(2, 7)}`,
      status: 'ready',
    }))]);
  }, []);

  const updateQueued = (id, patch) => {
    setQueue((q) => q.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const uploadAll = async () => {
    setBusy(true);
    for (const entry of queue) {
      if (entry.status === 'done') continue;
      try {
        updateQueued(entry.id, { status: 'uploading', error: '' });
        const saved = await addMedia({ file: entry.file, title: entry.title.trim() || guessTitle(entry.file), category: entry.category });
        setItems((list) => [...list, saved]);
        updateQueued(entry.id, { status: 'done' });
      } catch (err) {
        updateQueued(entry.id, { status: 'error', error: err.message || 'Upload failed' });
      }
    }
    setBusy(false);
    setTimeout(() => setQueue((q) => q.filter((i) => i.status !== 'done')), 1500);
  };

  const removeItem = async (item) => {
    await removeMedia(item).catch(() => {});
    setItems((list) => list.filter((i) => i.id !== item.id));
  };

  if (!unlocked) {
    return (
      <div className="studio-page">
        <div className="container studio-gate">
          <h1>Media Studio</h1>
          <p className="studio-gate-desc">Enter the studio passcode to upload photos and videos.</p>
          <form onSubmit={unlock} className="studio-gate-form">
            <input
              type="password"
              value={pin}
              onChange={(e) => { setPin(e.target.value); setPinError(''); }}
              placeholder="Passcode"
              autoFocus
              aria-label="Studio passcode"
            />
            <button type="submit" className="btn-page">Unlock</button>
          </form>
          {pinError && <p className="studio-error">{pinError}</p>}
          <Link to="/" className="studio-back">Back to site</Link>
        </div>
      </div>
    );
  }

  const pendingCount = queue.filter((q) => q.status === 'ready' || q.status === 'error').length;

  return (
    <div className="studio-page">
      <div className="container">
        <header className="studio-header">
          <div>
            <h1>Media Studio</h1>
            <p>Post photos and videos straight to the site — any size.</p>
          </div>
          <span className={`studio-mode ${SUPABASE_CONFIGURED ? 'studio-mode--live' : ''}`}>
            {SUPABASE_CONFIGURED ? '● Supabase connected' : '○ Preview mode'}
          </span>
        </header>

        {!SUPABASE_CONFIGURED && (
          <div className="studio-banner">
            Preview mode: uploads stay on this device until Supabase is connected.
            Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code>, run the SQL in <code>supabase/schema.sql</code>, and every device will see new media instantly.
          </div>
        )}

        <div
          className={`studio-dropzone ${dragOver ? 'studio-dropzone--over' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); enqueue(e.dataTransfer.files); }}
          onClick={() => inputRef.current?.click()}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); inputRef.current?.click(); } }}
        >
          <span className="studio-dropzone-icon" aria-hidden>⬆</span>
          <strong>Drop photos or videos here</strong>
          <span>or tap to browse — images and videos of any size</span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*,video/*"
            multiple
            hidden
            onChange={(e) => { enqueue(e.target.files); e.target.value = ''; }}
          />
        </div>

        {queue.length > 0 && (
          <section className="studio-queue">
            <div className="studio-section-head">
              <h2>Upload queue ({pendingCount} pending)</h2>
              <button type="button" className="btn-page" onClick={uploadAll} disabled={busy || pendingCount === 0}>
                {busy ? 'Uploading…' : `Upload ${pendingCount || ''}`}
              </button>
            </div>
            <ul className="studio-queue-list">
              {queue.map((entry) => (
                <li key={entry.id} className={`studio-queue-item studio-queue-item--${entry.status}`}>
                  <span className="studio-thumb" aria-hidden>{entry.file.type.startsWith('video/') ? '▶' : '🖼'}</span>
                  <div className="studio-queue-fields">
                    <input
                      value={entry.title}
                      onChange={(e) => updateQueued(entry.id, { title: e.target.value })}
                      placeholder="Title"
                      disabled={entry.status !== 'ready'}
                      aria-label="Media title"
                    />
                    <select
                      value={entry.category}
                      onChange={(e) => updateQueued(entry.id, { category: e.target.value })}
                      disabled={entry.status !== 'ready'}
                      aria-label="Category"
                    >
                      {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <span className="studio-size">{formatSize(entry.file.size)}</span>
                  </div>
                  <span className={`studio-status studio-status--${entry.status}`}>
                    {entry.status === 'uploading' ? 'Uploading…' : entry.status === 'done' ? 'Posted ✓' : entry.status === 'error' ? entry.error : 'Ready'}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="studio-library">
          <div className="studio-section-head">
            <h2>Posted media ({items.length})</h2>
          </div>
          {items.length === 0 ? (
            <p className="studio-empty">Nothing posted yet. Your uploads will appear here.</p>
          ) : (
            <ul className="studio-library-list">
              {items.map((item) => (
                <li key={item.id} className="studio-library-item">
                  <span className="studio-thumb" aria-hidden>{item.type === 'video' ? '▶' : '🖼'}</span>
                  <div className="studio-library-meta">
                    <strong>{item.title}</strong>
                    <span>{item.category}{item.size ? ` · ${formatSize(item.size)}` : ''}{item.local ? ' · this device only' : ''}</span>
                  </div>
                  <button type="button" className="studio-delete" onClick={() => removeItem(item)} aria-label={`Delete ${item.title}`}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
