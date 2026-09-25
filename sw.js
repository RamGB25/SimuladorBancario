const CACHE_NAME = 'simulador-bancario-v4';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './src/Simulador-icon.png',
    './src/casa.png',
    './src/valor.png',
    './src/ingreso.png',
    './src/mensualidad.png',
    './src/informacion.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
