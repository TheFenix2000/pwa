const CACHE_NAME = "pwa-cache-v1";
const ASSETS = [
    "index.html",
    "map.html",
    "sos.html",
    "assets/css/styles.css",
    "assets/js/map.js",
    "assets/js/sos.js",
    "assets/images/icon-192.png",
    "assets/images/icon-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
