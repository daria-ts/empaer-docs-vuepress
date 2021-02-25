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
    "revision": "1f88efb84914dbf68363edf2e1d33a25"
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
    "url": "assets/js/12.1972e700.js",
    "revision": "27a4f42fad121ec6a54223fb926ac888"
  },
  {
    "url": "assets/js/13.c6e7f023.js",
    "revision": "32480e8f7379ae6f046364eba611f4f9"
  },
  {
    "url": "assets/js/14.7ddbed0e.js",
    "revision": "ea7026ea59b24f986206b1ab25c1af81"
  },
  {
    "url": "assets/js/15.486b917d.js",
    "revision": "eac54eb7521535313147f91ec3795525"
  },
  {
    "url": "assets/js/16.406eef25.js",
    "revision": "dad4271dbc4361ae7ec86c614b8589d0"
  },
  {
    "url": "assets/js/17.e6df04e1.js",
    "revision": "12fb2d2059765855494f3f7c48ffde71"
  },
  {
    "url": "assets/js/18.c0ab389d.js",
    "revision": "1d3eda0d698cb153ff35514fbe3dcae1"
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
    "url": "assets/js/app.a46f5d00.js",
    "revision": "5b3e116612c68815e05105d68375d2fe"
  },
  {
    "url": "config/index.html",
    "revision": "216a4bfae4c8248a6fc863671357e530"
  },
  {
    "url": "faq/index.html",
    "revision": "53a83129015bc4a3f717ae9c10e82494"
  },
  {
    "url": "faq/using-vue.html",
    "revision": "e175a22c39535b64586a8bb4ccfea848"
  },
  {
    "url": "guide/index.html",
    "revision": "2a32377f7cc0ad00a8ea73dd122e62da"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "2f47ebddab0be515edec01654242510e"
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
    "revision": "a0017f4d44ff72858f0dadd4c3e053d9"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "7a640fba7b3241468ed452b580517be2"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "e9f5d6d5372d3c404cc64887211e3e22"
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
