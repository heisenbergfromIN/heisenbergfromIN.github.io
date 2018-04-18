// version: Coming soon!
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/img/cover.webp',
                '/img/adwords-logo.webp',
                '/img/analytics-logo.webp',
                '/img/bootstrap-stack.webp',
                '/img/datadriven-cover.webp',
                '/img/holisticmarketing-cover.webp',
                '/img/madwanetures-cover.webp',
                '/img/mobilefirst-cover.webp',
                '/img/my photo.webp',
                '/img/nanodegree-certificate.webp',
                '/img/projects.webp',
                '/img/tbtc-cover.webp',
                '/img/uxfirst-cover.webp',
                '/img/spacedout-brand.png',
                '/js/site.js',
                '/js/bootstrap.bundle.min.js',
                '/js/lazyload.min.js',
                '/js/jquery-3.3.1.min.js',
                '/js/fontawesome-all.min.js',
                '/js/smooth-scrolling.js',
                '/css/bootstrap.min.css',
            ]);
        })
    );
});