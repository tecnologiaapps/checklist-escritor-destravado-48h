// ========================================
// SERVICE WORKER - PWA OFFLINE
// ========================================

const CACHE_NAME = 'checklist-escritor-v1';

// Arquivos para cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativar Service Worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar requisições
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Retornar do cache se disponível
        if (response) {
          return response;
        }
        // Caso contrário, buscar da rede
        return fetch(event.request);
      })
  );
});
