// ========================================
// SERVICE WORKER - PWA OFFLINE
// ========================================

const CACHE_NAME = 'checklist-escritor-v2';

// Arquivos para cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-72.png',
  '/icons/icon-96.png',
  '/icons/icon-128.png',
  '/icons/icon-144.png',
  '/icons/icon-152.png',
  '/icons/icon-192.png',
  '/icons/icon-384.png',
  '/icons/icon-512.png'
];

// Instalar Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto e arquivos salvos');
        return cache.addAll(urlsToCache);
      })
  );
  // Força o service worker a ativar imediatamente
  self.skipWaiting();
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
  // Tomar controle de todas as páginas imediatamente
  return self.clients.claim();
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
        return fetch(event.request).then(function(response) {
          // Verificar se é uma resposta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clonar a resposta
          const responseToCache = response.clone();
          
          // Adicionar ao cache
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(function() {
        // Se estiver offline e não tiver no cache, retornar página offline
        return caches.match('/index.html');
      })
  );
});
