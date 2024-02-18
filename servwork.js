self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/',
                'Index.html',
                'styles.css',
                'script.js',
                'Imagenes',
                'Musica'
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    // Activación
});

self.addEventListener('fetch', function (event) {
    // Manejo de solicitudes fetch
});
