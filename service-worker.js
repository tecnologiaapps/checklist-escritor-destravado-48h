const CACHE_NAME = 'escritor-48h-v3';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icone-fase1.png',
  './icone-fase2.png',
  './icone-fase3.png',
  './icone-ponto.png',
  './professor-dashboard.jpg',
  './professor-detalhe.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
