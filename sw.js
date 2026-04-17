self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Allow all network traffic to pass through for Supabase queries
  e.respondWith(fetch(e.request));
});
