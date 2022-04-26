'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4cb9173f3f2ae8e9cc320b948516c826",
"docker-compose.yaml": "08e266c1eaf94401b6e1f7203d18e635",
"index.html": "b9b382e763bf95d00077f0ad049c5289",
"/": "b9b382e763bf95d00077f0ad049c5289",
"main.dart.js": "8ae5387c39699348ac0c383948682cd5",
"README.md": "f0ef7081e1539ac00ef5b761b4fb01b3",
"favicon.png": "6aa82d08592ea3abcbc43e4b12862803",
"icons/Icon-192.png": "60579573bc8ad41708a23e4939648769",
"icons/Icon-512.png": "41eae4a77ac408f5e2b4b9ee685cc6de",
"manifest.json": "6e52a8fe7811fb8b9fe511f19210d360",
".git/config": "6a8484d391634434e79e6cd59ecf1081",
".git/objects/61/1dbab81454147983e31adf7336ac6618260b37": "8f6f2ba1753c68367bedb53f14205a4a",
".git/objects/0d/84bbd0c654ddd8ef3e88d5ee31b03c6a3b0cd2": "181352fafab5ee77d6c677dfaa5f0d87",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/26cdcadfcec1b210c9068ee37cbb856bd021fa": "a49febbc89febf40fab1c3aaa29503e7",
".git/objects/6f/21f7d504fe5f82ee848e4e71f1f07ae728a3d5": "7c59e5bacf0a9860dde05809e72c82a3",
".git/objects/03/9172327e09d873bfd76014b61b3d662889e692": "eb75cfd08a8f061f6e5bd817470a6fdc",
".git/objects/9b/867c914d3c37b739fe45c80270a2e7e0560fcd": "60c65306ec5de6923529531ad5563d24",
".git/objects/35/33481dcb39ec0c33c539be8b2b20f644060c7b": "384830d7ea73b3c375b25c602f0aa544",
".git/objects/3d/92dd47146dd4553944372ac18b3fb515d5f50a": "70b7c50e68b8efff1cd0e715d9ec3507",
".git/objects/0b/aa4c50338f867300efb9d13ddbb98cc19f0a09": "14fa56bb404c9764b0e40b372ef39088",
".git/objects/94/df46d3b4f2bd6c5602af4e5eb38290d756f6ec": "be59fea00f26034968699549db90ebd0",
".git/objects/0e/8619265fee421d24ba1e35c003737147d5cae1": "323e811933dd00da33f23402f5deacb1",
".git/objects/60/18d7a6fe4c3deea3c8fdcc4bf786ce75e031ee": "c72602b19e81a50d8a965328770179e8",
".git/objects/34/585660cc38d1f00551981502e65f2930c30875": "1d3b254494a9805ec6610d908f73256a",
".git/objects/5a/4fd7871b1d476079cb7ccf3e5c060339c6a873": "de4e6de1c30d91b9f8070c6497745a10",
".git/objects/ac/30106441761151a03788fad2e56e94e34cde07": "b5bfc509d730ca98e0e51cc2cf384cd4",
".git/objects/ad/028d27baf76fffd0b068815e1af45dd5758f8f": "b105d683b09a0c203321468200101a22",
".git/objects/df/18ac4870bb0fe85b721f97f029bf649f0aae7a": "a0abc575404d65e4080c60dae7dc49ca",
".git/objects/d1/9432fcef8373f8acae16f6a4d3b280bd754723": "17bedd65a96d7d02e6ae11a202420eda",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/5000764a21626e824aa94af771ee104f2ce15d": "fad16182aaefbfc5a4672c3551edcccb",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/df0a3ddc1f74a074bc7315504892ce23cbd352": "4c26aca4107974434adb103be5bdedee",
".git/objects/fc/22214c673519cb1bc316f97683e45ac8a70be9": "a6fea8274fd421072f9d37617f7a9e08",
".git/objects/f2/f7261c0d85caa77286b15e3bd47d6689b7fc91": "e13f1cc84189aa520762b6a0c1aad028",
".git/objects/ed/76ed778eba8a4cff6299bb3da85b7df7b18379": "b982f36354c011c06977177447aa697f",
".git/objects/c6/e31fe04e1aab041b6e54842aea96c1de7a70ae": "6b3ccd8347df502064869c4982a8e1d1",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/29/47701d0fa45b389a4395676f7cbb2178115ed9": "56113c32a391ec9bc4b19ff304a7e5ae",
".git/objects/80/2992c4220de19a90767f3000a79a31b98d0df7": "5946049aa48586ca19765edee8b07049",
".git/objects/1a/7a84ab0f7731cab61b544139f9abadeabd8139": "ea8960a19a784c73722cc21bbcdff11f",
".git/objects/28/7d0b56dbf8e41c8f143b4b96d8cc24efda85ca": "65f5b062c90bb62032a7e119102470b5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/9cb45c3c8777e322c5779e5d44e0d5aa4f3c1b": "32e8495d1930e79d08578cd713e03890",
".git/objects/21/c0073fd1f1d76a2fd1d119bcb138fab730c742": "0fff27d3e0b657663b61ac5cd9e83b47",
".git/objects/88/f5fb376a2b622c49c22aa8389993d253c418f2": "1025569a4170a501a9dc7be831f5bc24",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/e8ebd79ae46561f283bdb93419f6e63088c8c0": "32aaef7bd84e51d51f4bb93007ab9416",
".git/objects/31/0d4806e3776f77a981c83038aff663d19fa1ae": "fdc642f2889f9d9933ae3464cabcecda",
".git/objects/5b/346e6f0865c31c736942409734a865571eb6fc": "eb95046b73c989f1b27c538926401e82",
".git/objects/52/7c8ffb1425cc92e0e11a96e245d8be0367ce3b": "93704987e9b803d6296d6665e95b54d5",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/2da77402e25ea9babbbf933d6ef4995c541bc8": "fbd2ddca48d180ff0c754520a0b534e6",
".git/objects/a0/409cbb13311633194ef54de8a8b9de8ad51171": "4970e2f82facefb419aabdc5406e9903",
".git/objects/a9/2e27d8767032a9a6507db7999526c8bd15f10d": "7726533bbd3ca208cce5d49e2fafcf2d",
".git/objects/d5/05a570d60c83d6c0a5a94e66fa23e4a6d52501": "ae39321709cff38941b06f3e5b65fb35",
".git/objects/d2/955749812944ffd5d6cfd30e9f456128c5acba": "8124e46df4ef0c3d29806574a711805c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/493106c685d18bafd52507726ef449c391d855": "521eaee28f8452dff504c017e429e2a9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/de37f8edc17bc87ca6fcfbf49e57a8ea76c826": "6584a9be53dfe087705705a1cf439932",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e1/68faa711571b23430708074680a29ca44e6205": "b91de278c86aef5b60da5b15d357f29c",
".git/objects/cd/3331dfcb123459af69455ea62d0733a0e32a93": "87687f993890a409d5bafde2dd1dfa96",
".git/objects/fa/221907959ff80c45ab1252974942a781b30f2b": "d6e43f77ee2686841a6505fb248eb101",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e0/0a5c167d56de265be0eab42e2f3f0a44616cb6": "b6a8fb99ed76aec1244dfd3277f00ae7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/657381ea112df7da370470447ddd40f9461d70": "a8af0c956807e0464bdec4a7f65b0ef4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1e/0d123b87e93ebd10163ccdf9d5976f5b2edd46": "fd66155eb1aafeaf301593f20a9914cb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/7a2061f8e623eec7581a1385d9be7f4c1e9be3": "c1cfa6c908c7e932a8d58cab011b01c9",
".git/objects/76/8f50a3c51c1e3293bc36e987c611b575ca4211": "d6f2341b23a2360278dbdde172eed0c5",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/2e/28bd2b623345c1abc602395813230303134bba": "a4429f402bf7a347104438385fc47336",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "15ee8e83af662fe1c168689920dc5759",
".git/logs/refs/heads/main": "006f72f36f4b1b16ffff67bfbb47d6c9",
".git/logs/refs/remotes/origin/main": "fc877d703f69921c047054f0fe3b6007",
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
".git/refs/heads/main": "adf9550fb566df7d6f9111eda0cf64ca",
".git/refs/remotes/origin/main": "adf9550fb566df7d6f9111eda0cf64ca",
".git/index": "45d870d650400f3a25bb83d12d22fa16",
".git/COMMIT_EDITMSG": "e51624b7f43895c9d4b8b09bf0d24b0b",
".git/FETCH_HEAD": "8ac5b1ad96a96010adbabb42ae498382",
"assets/AssetManifest.json": "2b513f14ae39d4f2eb3d39dfcf67d727",
"assets/NOTICES": "ba320c40e51a838cd2113b3704ca3a6f",
"assets/FontManifest.json": "5c4dbe465a229896b2eee137c63129eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/fonts/MsMadi-Regular.ttf": "ba7186ad4ffffa10d0c79138ad46d456",
"assets/assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
