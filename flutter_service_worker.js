'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4cb9173f3f2ae8e9cc320b948516c826",
"docker-compose.yaml": "08e266c1eaf94401b6e1f7203d18e635",
"index.html": "4f944353d481d1fca0c485c61966c51c",
"/": "4f944353d481d1fca0c485c61966c51c",
"main.dart.js": "3583c38a223ef7c82243ea6a08fc8465",
"README.md": "f0ef7081e1539ac00ef5b761b4fb01b3",
"favicon.png": "6aa82d08592ea3abcbc43e4b12862803",
"icons/Icon-192.png": "60579573bc8ad41708a23e4939648769",
"icons/Icon-512.png": "41eae4a77ac408f5e2b4b9ee685cc6de",
"manifest.json": "6e52a8fe7811fb8b9fe511f19210d360",
".git/config": "cc91634feff6fe6082fb5e045b35cbf5",
".git/objects/pack/pack-9fbbab6d158c9107d50ab07910901a6f1adbabde.pack": "4f5d5b8f63ef1f2f539610ab40ee4187",
".git/objects/pack/pack-9fbbab6d158c9107d50ab07910901a6f1adbabde.idx": "603b6915884a809aa40847eedecc12bd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c83eeb6cb474583b1a6f9ee067b8b41",
".git/logs/refs/heads/main": "6c83eeb6cb474583b1a6f9ee067b8b41",
".git/logs/refs/remotes/origin/HEAD": "6c83eeb6cb474583b1a6f9ee067b8b41",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "d005f35f8377bf8d87d9827724cd0729",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "90beaa95a8c54e7c24c11c121599a878",
".git/packed-refs": "8544b4fe51098bf824f135f41b553731",
"assets/AssetManifest.json": "58c652b7278930d5fdc963daa6186474",
"assets/NOTICES": "c8e0c36c2d4eb97797bec3e7fc98a475",
"assets/FontManifest.json": "5c4dbe465a229896b2eee137c63129eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/shrimpbackground2.jpg": "60c62e5ca7e10ecf8cfc4263332118b6",
"assets/assets/rawshrimps.jpg": "b60834b7f139ca8b83aff51cbd8db2aa",
"assets/assets/bannershrimp.webp": "be9f1ff68c0838274051745019a0f108",
"assets/assets/shrimpdish.png": "193988a1884c28a9511fa0dbaa6a6da9",
"assets/assets/prod3.jpg": "8ad31af96942ad37ab7d321546814bc6",
"assets/assets/logoaquarium.png": "0e06480a1c76660e602f8027289725c0",
"assets/assets/shrimpdish2.png": "00f2f2ae5076c5fcdf2d5d6db0f25d5d",
"assets/assets/prod2.jpg": "200da9e8548c6b556cac1c6270255d95",
"assets/assets/fonts/MsMadi-Regular.ttf": "ba7186ad4ffffa10d0c79138ad46d456",
"assets/assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/prod1.jpg": "c9fddcaa8889648afb9a69c3c5d9140b",
"assets/assets/prod5.jpg": "430f7801ae7e67895883dbc09a5dc939",
"assets/assets/prod4.jpg": "f01e201d233ed47c1cef955638777e45",
"assets/assets/prod6.jpg": "c1cb1f750bfac4b3dea824d56c89883b",
"assets/assets/prod7.jpg": "72dcd6e0df99dd4de2bc084abf9cb837",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
