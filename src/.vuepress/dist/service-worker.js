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
    "revision": "b053e8f44299b47267ae7c4ee21fdde8"
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
    "url": "assets/js/11.974e74f8.js",
    "revision": "53d22ba881f05599ffd0896c4ceaa901"
  },
  {
    "url": "assets/js/12.1972e700.js",
    "revision": "27a4f42fad121ec6a54223fb926ac888"
  },
  {
    "url": "assets/js/13.eecffc54.js",
    "revision": "b84ddd1e84a4cbfb86a4e9580d694913"
  },
  {
    "url": "assets/js/14.bf6a9928.js",
    "revision": "a8fc91857f01f1213ae57ae42c6422ea"
  },
  {
    "url": "assets/js/15.2a03bcc5.js",
    "revision": "2542ba0a3df07e0f3f1cf191155535b3"
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
    "url": "assets/js/app.fa4dfd4a.js",
    "revision": "c0c10180c694a4f349bfad255d54db23"
  },
  {
    "url": "config/index.html",
    "revision": "8616d46660deecf2319bf02e076eb0a8"
  },
  {
    "url": "faq/index.html",
    "revision": "d238f577c8808fa33812bbd07e35a3a2"
  },
  {
    "url": "faq/using-vue.html",
    "revision": "60f9ee86dced277b0ca2164339d1b029"
  },
  {
    "url": "guide/index.html",
    "revision": "5db854ac8e51031aa94d0bb0c2d1ebb4"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "992f2fcf326e13142b35b919ba66a75d"
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
    "revision": "4e2e736c5df52114806ac8ed4f187e3e"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "aeb206b83f515038dfb5ffc757c310b9"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "e10c9224802bac80fa0622aa4e7dd857"
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
