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
    "revision": "14e9947a088c84a410065620e0a71aa2"
  },
  {
    "url": "assets/css/0.styles.340df303.css",
    "revision": "0f4343920dc2df6256bce500726cd834"
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
    "url": "assets/js/11.3b7ee340.js",
    "revision": "bf2e9542cf601c03338b12451e0a2f5c"
  },
  {
    "url": "assets/js/12.976a6881.js",
    "revision": "b724ca5b29de58aab61205d9d795cbff"
  },
  {
    "url": "assets/js/13.037cb981.js",
    "revision": "4e548e26f711a2663ffe462af2c2e5d2"
  },
  {
    "url": "assets/js/14.38d49c44.js",
    "revision": "f1de24896b744647953038a21a7eadc6"
  },
  {
    "url": "assets/js/15.359c5715.js",
    "revision": "008ae884d66adc66e8b0e25de0e59958"
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
    "url": "assets/js/19.e3e19d49.js",
    "revision": "410e6b1d1a7758311674d7628d1d87f4"
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
    "url": "assets/js/21.0afe17bd.js",
    "revision": "6016b9d206a7df21f6400b481a9a7e32"
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
    "url": "assets/js/app.583f9e35.js",
    "revision": "317454fcd00f83941734523c4b21873d"
  },
  {
    "url": "config/index.html",
    "revision": "afc22341eaaff7ea2ff027b555dfb3c3"
  },
  {
    "url": "en/faq/index.html",
    "revision": "7812a84ac3197cc8d5ecb31b9113271c"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "371c7f0fb1b826e3c414934ecc653ccd"
  },
  {
    "url": "en/index.html",
    "revision": "9139ad286847e1b8d0acfb4da0735a1c"
  },
  {
    "url": "faq/index.html",
    "revision": "cb65eb57b413b0b3358d607f8eefa8df"
  },
  {
    "url": "faq/using-vue.html",
    "revision": "30f29a6570eb387cd0429e5b2282e609"
  },
  {
    "url": "guide/index.html",
    "revision": "8e8945a1af4320ab03d2721eaf930b81"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "57b3f8bbdf2dfb941c973c4ea487c067"
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
    "revision": "05e416552994e0d640d98b944e852593"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "dcdd434d9412b1691a68649a2652d2b7"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "0aa68e98bb5062b744b238187a2129b0"
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
