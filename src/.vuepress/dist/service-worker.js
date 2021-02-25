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
    "revision": "5c41de4b19b3030bc1a5319fa3e12f32"
  },
  {
    "url": "assets/css/0.styles.af7b3124.css",
    "revision": "5ba91241f68f7bd95fe074547a25a204"
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
    "url": "assets/js/15.4d46a352.js",
    "revision": "0e993011bca7aab3945ab0b79aeebadf"
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
    "url": "assets/js/5.2738a2d0.js",
    "revision": "7f295d50c135ace549f4f2b90a6f3719"
  },
  {
    "url": "assets/js/6.bebf70db.js",
    "revision": "8aa3e077391d34acf403c6e50f388eef"
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
    "url": "assets/js/app.3fe8861e.js",
    "revision": "5522133ccb9845c2b535be0fc73728ec"
  },
  {
    "url": "config/index.html",
    "revision": "d86bb3adb7ae3d91309d6b7a0fc4c991"
  },
  {
    "url": "en/faq/index.html",
    "revision": "12d434e11a0f689aaeb65bf6a2e40742"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "cf9ce1b71ec9b72a306feda8f2bfc6e7"
  },
  {
    "url": "en/index.html",
    "revision": "ba724512198cdfb159a2930fabf1f431"
  },
  {
    "url": "faq/index.html",
    "revision": "854d869b40d29ded1a3731ea9e4f81d4"
  },
  {
    "url": "faq/using-vue.html",
    "revision": "64c2eedae8e12e94dd0547bd2e31cd7f"
  },
  {
    "url": "guide/index.html",
    "revision": "0d0bb5640d89c838a66be79bafa16a8d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "0f0081702d756c7bdd1c49d47322faea"
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
    "revision": "3a84cea41a7679e806971b4fe1462ad4"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "30bb0cb813ae19d4c9d3bc813c5e7016"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "19d33575f18ed42596e6098663585e04"
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
