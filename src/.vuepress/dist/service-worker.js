/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f539f0c7886778f8fe584a810c278f4a"
  },
  {
    "url": "assets/css/0.styles.1a73d831.css",
    "revision": "a5d951d3ca66aacfffb7df4d7ecb64da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c7446d15.js",
    "revision": "4cc3906bfb4930d52c068652ee14a802"
  },
  {
    "url": "assets/js/11.e90a5f48.js",
    "revision": "483c78c6490e8a542b1875fcc5d5bfa3"
  },
  {
    "url": "assets/js/12.ff464747.js",
    "revision": "4c2326c2889acb2ff7d1f4339e1a6e7c"
  },
  {
    "url": "assets/js/13.298362a2.js",
    "revision": "f64df7348e9671e1f8fb5934e7575700"
  },
  {
    "url": "assets/js/14.7ddbed0e.js",
    "revision": "ea7026ea59b24f986206b1ab25c1af81"
  },
  {
    "url": "assets/js/15.d7f2dc23.js",
    "revision": "0b035c462d7295a0dec117c7cc3fa0cf"
  },
  {
    "url": "assets/js/16.5eeca475.js",
    "revision": "272e6875d1d24f48441ec8338dd5c6e1"
  },
  {
    "url": "assets/js/17.108adfce.js",
    "revision": "8491f6da4fc9cfebf637d2f45fd6650f"
  },
  {
    "url": "assets/js/18.c288c11e.js",
    "revision": "0fdb93fa4a8d4ccda682cbb836a3fd74"
  },
  {
    "url": "assets/js/19.fe212b41.js",
    "revision": "f450bbfb0afd113562268405122ebdbf"
  },
  {
    "url": "assets/js/2.bb380ba9.js",
    "revision": "309fde06da7ae8b41c7fe2284ffa36d8"
  },
  {
    "url": "assets/js/3.2a36c184.js",
    "revision": "2c9a257878e96d9c8be816dbefb7b922"
  },
  {
    "url": "assets/js/4.943120f4.js",
    "revision": "eac63e1e1b5e6749ed5a5a7a64bab62a"
  },
  {
    "url": "assets/js/5.48227fae.js",
    "revision": "4e63f6d4c035017969112af52ce22ca8"
  },
  {
    "url": "assets/js/6.c09c7787.js",
    "revision": "251f60bcb74247d06430d416f59ebf83"
  },
  {
    "url": "assets/js/7.01d0381f.js",
    "revision": "50288ad9169bc19dc4d96d19648d7d71"
  },
  {
    "url": "assets/js/8.0e1b576c.js",
    "revision": "e8439015a00f0ddabb933162d25f22a6"
  },
  {
    "url": "assets/js/9.93329651.js",
    "revision": "3e4017a6b22a41528a4552ca37997cf0"
  },
  {
    "url": "assets/js/app.35350f8e.js",
    "revision": "ef98f09b7cbb579d5a684c8c24e7e838"
  },
  {
    "url": "config/index.html",
    "revision": "82d740f5227507b8aea6ac96988c600d"
  },
  {
    "url": "faq/index.html",
    "revision": "99478bf666a7154ffd6e1d6f776042ee"
  },
  {
    "url": "faq/using-vue.html",
    "revision": "0be85d750d102b40c67b91efbdc364ba"
  },
  {
    "url": "guide/index.html",
    "revision": "dd6b5569159400746e131c693bede608"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "9535d3023784a884c3da2b871fabf683"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "7871b289e5be0eecee79d412abde8792"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "de8cd1e3c2a7b01965f255a4f84d300c"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "41fabbaea1ba6f06e95cada9275cb68f"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "c4a8eb6f964b1813193dc44dd2898be2"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "695bdee2e0ab9985b224c6012f2b505e"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "8672771cbfaa82e8aec57c7b5c7c2963"
  },
  {
    "url": "images/empaer-logo-3.png",
    "revision": "9f30e9359e50aecfccb0cbffab0fd532"
  },
  {
    "url": "index.html",
    "revision": "b99fe8254f02eae9fd5b8265acee89b4"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "7f290a85ad13cc04998c588dd0acc3cc"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "4fb829f5e670aa4bfd766b0af394e48c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
