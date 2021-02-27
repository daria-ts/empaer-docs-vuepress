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
    "revision": "465df359b5d2d3539aed145ecb06ce47"
  },
  {
    "url": "assets/css/0.styles.765c2914.css",
    "revision": "4d75b26b8af5521d2402310859b18ccf"
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
    "url": "assets/js/14.38d49c44.js",
    "revision": "f1de24896b744647953038a21a7eadc6"
  },
  {
    "url": "assets/js/15.7489aea2.js",
    "revision": "6f4da19bcadc2ff1a170fea8420fe574"
  },
  {
    "url": "assets/js/16.9ead4879.js",
    "revision": "0ce708bfbb72b5897d5cd09919d33016"
  },
  {
    "url": "assets/js/17.75efa5c8.js",
    "revision": "d8f40599c57489c07b260e9361c3fba9"
  },
  {
    "url": "assets/js/18.76ebbe97.js",
    "revision": "f4300e2f0646c5bd40f788730d40e5a9"
  },
  {
    "url": "assets/js/19.2a04f052.js",
    "revision": "d36de06ab530bebbc4b769544e6a1bd7"
  },
  {
    "url": "assets/js/2.46f708bc.js",
    "revision": "fa7bc35137f7dde4f0196c783173bdad"
  },
  {
    "url": "assets/js/20.6299ccf6.js",
    "revision": "3c9fe5f62eca62524f3850988fb611f0"
  },
  {
    "url": "assets/js/21.f1d34985.js",
    "revision": "b97c1eb279428e039e2e81dcc175703b"
  },
  {
    "url": "assets/js/22.ae105341.js",
    "revision": "0fe07dfaf85ed8d69b81c94bf83daca0"
  },
  {
    "url": "assets/js/23.99c7703a.js",
    "revision": "90a547799b02874094d4fe98bade5910"
  },
  {
    "url": "assets/js/24.f0e59334.js",
    "revision": "10be26e24afd49513937071e75e30727"
  },
  {
    "url": "assets/js/25.4467f700.js",
    "revision": "541ac8ac04a7e1b7722b72cc248fc9f7"
  },
  {
    "url": "assets/js/26.6e3597ab.js",
    "revision": "c71f909ee23a694f4ea457d87e7988ad"
  },
  {
    "url": "assets/js/27.65a2979f.js",
    "revision": "89d2533d63f4205d19d21fb894fa37f3"
  },
  {
    "url": "assets/js/28.c322b494.js",
    "revision": "011732934cde1841f442a6057c95d20a"
  },
  {
    "url": "assets/js/29.2bded75b.js",
    "revision": "daf37dfdda15fd45f6b21a082b15f84c"
  },
  {
    "url": "assets/js/3.d0f8d324.js",
    "revision": "90b87222d01f715310b81642096a8d0d"
  },
  {
    "url": "assets/js/30.45fb43ae.js",
    "revision": "21ec0eb82405c3241c5ff227d64bb3c5"
  },
  {
    "url": "assets/js/31.9c7eed23.js",
    "revision": "7491258fbe75fe15944d16835eab8cd4"
  },
  {
    "url": "assets/js/4.4dcd6611.js",
    "revision": "da79a9d634797f1dd35cd1670a18b793"
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
    "url": "assets/js/9.43044b08.js",
    "revision": "40449c969a0eefc2618219f0a88b5534"
  },
  {
    "url": "assets/js/app.b6e0c019.js",
    "revision": "14ff7c18512e48b69bc1d34bf49658f2"
  },
  {
    "url": "config/index.html",
    "revision": "0772bdfae608601186bbaedacb2a6de1"
  },
  {
    "url": "en/faq/index.html",
    "revision": "65f3aaf3586b909b52b5625163d7177e"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "4aecdcb5548e3a21d0c0d6beed548aeb"
  },
  {
    "url": "en/index.html",
    "revision": "babb6d6cbe09001b7c4eb2b6ba79aafd"
  },
  {
    "url": "faq/akcii-vs-bankovsky-deposit.html",
    "revision": "ff0fa443d8cfd652f2a434f9261d0fad"
  },
  {
    "url": "faq/hranenie-i-vyvod-akcii.html",
    "revision": "754ac4e2cf18427a1c6c3524933526f5"
  },
  {
    "url": "faq/index.html",
    "revision": "2769076abdedece58de9c6fedd0747dd"
  },
  {
    "url": "faq/kak-investirovat-nalichnye-v-kryptu.html",
    "revision": "1b478cd0ee8bdc5e1d536eb134b0d9bd"
  },
  {
    "url": "faq/kak-poluchit-investicii.html",
    "revision": "2fe427439189601da1a1f3aeb1af4e03"
  },
  {
    "url": "faq/luchshee-vremya-dlya-investicii.html",
    "revision": "b81445a91f09d6af206bdb6a208ce861"
  },
  {
    "url": "faq/mejdunarodnye-investicii.html",
    "revision": "f231e9a8098e6b3ad96dab046e86f254"
  },
  {
    "url": "faq/perspectivy.html",
    "revision": "cb4985f1ef287717a37f676a6b92a17c"
  },
  {
    "url": "faq/pochemu-vygodno-investirovat-v-empaer.html",
    "revision": "ab761f5d4e7364b33cbe696beba70176"
  },
  {
    "url": "faq/vip-investicii.html",
    "revision": "7b8ac077c8d63bbc940b8e8c4baa9554"
  },
  {
    "url": "faq/zachita-investicii.html",
    "revision": "690f139958d7d7a6898869999b73e026"
  },
  {
    "url": "guide/index.html",
    "revision": "03fd4e3fafc6d4f83d8b4704fbbddc8f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "75e8dc80cefd2e101d78c0172994b7bb"
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
    "revision": "48f7a45e14369ab948491c11f0228dda"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "309df5f4d691cecd3d348f80370f736d"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "4ea4d537982ba295cfd9a93c26311312"
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
