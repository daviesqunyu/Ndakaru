// Ndakaru Construction PWA - Service Worker (offline cache for home page)
const CACHE_NAME = 'ndakaru-v1';
const urlsToCache = ['/', '/index.html', '/styles.css', '/app.js', '/favicon.svg'];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache.map(function (u) { return new Request(u, { cache: 'reload' }); })).catch(function () {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (names) {
    return Promise.all(names.filter(function (n) { return n !== CACHE_NAME; }).map(function (n) { return caches.delete(n); }));
  }));
  self.clients.claim();
});
