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
    "revision": "5ac3151a6789bd57d82c147145260485"
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
    "url": "assets/js/11.e90a5f48.js",
    "revision": "483c78c6490e8a542b1875fcc5d5bfa3"
  },
  {
    "url": "assets/js/12.976a6881.js",
    "revision": "b724ca5b29de58aab61205d9d795cbff"
  },
  {
    "url": "assets/js/13.9a56f6f7.js",
    "revision": "f64df7348e9671e1f8fb5934e7575700"
  },
  {
    "url": "assets/js/14.17aac29f.js",
    "revision": "f31141f61fd10cac4f394cbc61fc754d"
  },
  {
    "url": "assets/js/15.e7beb8c3.js",
    "revision": "7b0e64b7de9d9d9f64e47c69a6336b32"
  },
  {
    "url": "assets/js/16.bfebc06b.js",
    "revision": "ed8bdeb90a0c589dadcc4d4cb57340bb"
  },
  {
    "url": "assets/js/17.32ea6631.js",
    "revision": "d9efe7c34b91a9e1e4504cf5eb67f510"
  },
  {
    "url": "assets/js/18.a0e4bee9.js",
    "revision": "ad43699f7b3be9eeed78e89f102f9ed4"
  },
  {
    "url": "assets/js/19.2ab243ea.js",
    "revision": "9bd4d77524d1a6d8344ca16ca8a83b85"
  },
  {
    "url": "assets/js/2.bb380ba9.js",
    "revision": "309fde06da7ae8b41c7fe2284ffa36d8"
  },
  {
    "url": "assets/js/20.c5e973b6.js",
    "revision": "d366d9da8cd614d17c3524232ebb944b"
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
    "url": "assets/js/app.8dbc3265.js",
    "revision": "3b8efdebc7f581cd4077d54b559ba019"
  },
  {
    "url": "config/index.html",
    "revision": "1b24d728585b0fdbd22ad428650e3ab4"
  },
  {
    "url": "en/faq/index.html",
    "revision": "f29b9d28e6c5f3a1f57cd8252607283c"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "345bdfd74354a09ef1dd5077dd6df558"
  },
  {
    "url": "en/index.html",
    "revision": "534a139d2ee47810ef91627a3e34aa01"
  },
  {
    "url": "faq/index.html",
    "revision": "adc994c8dd864900bcfc0402cfbaf5ba"
  },
  {
    "url": "faq/using-vue.html",
    "revision": "3fafe2f80dd88fc87dc4e0f313eb716f"
  },
  {
    "url": "guide/index.html",
    "revision": "b0848073ce3d966332fa46b69a0eb141"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "aeabe7c6ff3786e1a84b2f043a60dff4"
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
    "revision": "e8f96bd55db53eb66194ec18b8821994"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "a22140cd792a87550018d73b5642fbef"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "01973135549f356a8da2ab7c050fd687"
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
