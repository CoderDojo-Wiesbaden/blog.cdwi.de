//https://developers.google.com/web/fundamentals/primers/service-workers/

var CACHE_ASSETS = "assets-cache-v1";
var urlsToCache = [
  /*"/public/css/hyde.css",
  "/public/css/poole.css",
  "/public/css/custom.css"*/
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_ASSETS)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

/*
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response.
            var responseToCache = response.clone();

            caches.open(CACHE_ASSETS)
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});
*/