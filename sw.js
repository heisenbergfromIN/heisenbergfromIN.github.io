// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


// version: Coming soon!

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
                '/site.js',
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

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});