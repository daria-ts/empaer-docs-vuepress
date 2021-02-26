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
    "revision": "2d64aba4cf6c0190d8a1e6c50a9facea"
  },
  {
    "url": "assets/css/0.styles.33a12587.css",
    "revision": "53a489febc475b3b3e7b0bedae9b55d6"
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
    "url": "assets/js/11.974e74f8.js",
    "revision": "53d22ba881f05599ffd0896c4ceaa901"
  },
  {
    "url": "assets/js/12.834e75e1.js",
    "revision": "27a4f42fad121ec6a54223fb926ac888"
  },
  {
    "url": "assets/js/13.04514e48.js",
    "revision": "b84ddd1e84a4cbfb86a4e9580d694913"
  },
  {
    "url": "assets/js/14.6df659cf.js",
    "revision": "174c1861a551c69bf162af2f927c2cf4"
  },
  {
    "url": "assets/js/15.97227045.js",
    "revision": "7bd377755910d88d5d26d4661d1f026b"
  },
  {
    "url": "assets/js/16.6291dec3.js",
    "revision": "4fe1001e78eabb001d01b6d437fe0430"
  },
  {
    "url": "assets/js/17.89f3d254.js",
    "revision": "12fb2d2059765855494f3f7c48ffde71"
  },
  {
    "url": "assets/js/18.b4141572.js",
    "revision": "1d3eda0d698cb153ff35514fbe3dcae1"
  },
  {
    "url": "assets/js/19.1e92325c.js",
    "revision": "7129f549fc809c1042f162372fe5e2e5"
  },
  {
    "url": "assets/js/2.bb380ba9.js",
    "revision": "309fde06da7ae8b41c7fe2284ffa36d8"
  },
  {
    "url": "assets/js/20.2a1a9590.js",
    "revision": "a4c4da6d9932d87a0c5ab331342b396e"
  },
  {
    "url": "assets/js/21.2c7960f9.js",
    "revision": "4e1d8e29f3efaeaac4fec8bc87de82b0"
  },
  {
    "url": "assets/js/22.d6f5568c.js",
    "revision": "69f0b0c45c1eb0f72c2605a9bb6c87b5"
  },
  {
    "url": "assets/js/3.2a36c184.js",
    "revision": "2c9a257878e96d9c8be816dbefb7b922"
  },
  {
    "url": "assets/js/4.2fdb957c.js",
    "revision": "147caea4c80e9b9fd86c07583472ceec"
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
    "url": "assets/js/9.1ffb3871.js",
    "revision": "c267be80dd6d953668dfd222df78f446"
  },
  {
    "url": "assets/js/app.9aef1bb7.js",
    "revision": "ffcfa910c606e16b8a492aec2f97cd95"
  },
  {
    "url": "config/index.html",
    "revision": "6be89cace291cc3c0f024f0251db44d9"
  },
  {
    "url": "en/faq/index.html",
    "revision": "d0c4d962262ff1ebf8249376b1a2a48c"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "18815cbc9d483671b346ad04e23a37dd"
  },
  {
    "url": "en/index.html",
    "revision": "1364ae99c3cf5cf822c8c0b62c4d600f"
  },
  {
    "url": "faq/index.html",
    "revision": "965e2a5951dd413f1560ca150dfe6f1a"
  },
  {
    "url": "faq/using-vue.html",
    "revision": "d558706e6e0338718a78fca5777ada76"
  },
  {
    "url": "guide/index.html",
    "revision": "01203a32a5c1eebd1f8d04824aaf038f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7e55cba3a30dd3c2c29c511d93004d6c"
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
    "revision": "f85dfbf65e15aec26c7d49093572e59a"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "dbf90ef236df2a9523327fb00ed95006"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "d4e2a404953970d0876ff5cf9103d17f"
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
