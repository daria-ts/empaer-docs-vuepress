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
    "revision": "876db9e07c1471679695a1f5efd679fc"
  },
  {
    "url": "assets/css/0.styles.fc133bfb.css",
    "revision": "1da059c45936838ddd3e641bb0c025d5"
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
    "url": "assets/js/12.b1516051.js",
    "revision": "4c2326c2889acb2ff7d1f4339e1a6e7c"
  },
  {
    "url": "assets/js/13.3797c096.js",
    "revision": "01cdd0b5cb8605223dc4e0b66df32b55"
  },
  {
    "url": "assets/js/14.9e50d421.js",
    "revision": "ac081ec491398da433c76f50faaf9e43"
  },
  {
    "url": "assets/js/15.4bdf6848.js",
    "revision": "f3c97e163dcb64eb45118e956170b9c7"
  },
  {
    "url": "assets/js/16.5539879e.js",
    "revision": "47acf965b9dd2d2ce0c7c851fb44313f"
  },
  {
    "url": "assets/js/17.ef517fb6.js",
    "revision": "a3bbb205226611368eca8a0f7dfefca4"
  },
  {
    "url": "assets/js/18.808f8e77.js",
    "revision": "27da3d630cfd7e83ea1784a9c6f8d8c8"
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
    "url": "assets/js/20.8ebfb16a.js",
    "revision": "4fda66c2859ef638f114b68a9af3bb18"
  },
  {
    "url": "assets/js/21.454d77c2.js",
    "revision": "5a8820fde870d9edb3e827a3635c0335"
  },
  {
    "url": "assets/js/22.c64521bc.js",
    "revision": "2465726e5173b523cd2b99d8d3d84b5c"
  },
  {
    "url": "assets/js/23.91722562.js",
    "revision": "4b9191f7a0599edb174aa5d519d2fd6a"
  },
  {
    "url": "assets/js/24.4134210b.js",
    "revision": "34827f70ca8f138f387c2ad7bac6584d"
  },
  {
    "url": "assets/js/25.4467f700.js",
    "revision": "541ac8ac04a7e1b7722b72cc248fc9f7"
  },
  {
    "url": "assets/js/26.4a6005d5.js",
    "revision": "a790ce33cc17c796864139550785c0be"
  },
  {
    "url": "assets/js/27.65a2979f.js",
    "revision": "89d2533d63f4205d19d21fb894fa37f3"
  },
  {
    "url": "assets/js/28.8d74c510.js",
    "revision": "738881e237907c35ef26a6e85eee7a2b"
  },
  {
    "url": "assets/js/29.4cd06c3a.js",
    "revision": "eccecdd407ea3286747217399877e753"
  },
  {
    "url": "assets/js/3.d0f8d324.js",
    "revision": "90b87222d01f715310b81642096a8d0d"
  },
  {
    "url": "assets/js/30.6089ff9c.js",
    "revision": "95b45568ece570afe237b51bea0f1041"
  },
  {
    "url": "assets/js/31.9c7eed23.js",
    "revision": "7491258fbe75fe15944d16835eab8cd4"
  },
  {
    "url": "assets/js/4.b1fa39d9.js",
    "revision": "9f71894925a330101e0b591dfebdc933"
  },
  {
    "url": "assets/js/5.b31b187a.js",
    "revision": "51b3900b1ef042e60818fc3974129b00"
  },
  {
    "url": "assets/js/6.a750dfd4.js",
    "revision": "d2c3961c43753c9cb6c4a189d2baef1e"
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
    "url": "assets/js/app.0e381045.js",
    "revision": "5d55bca52da91195fcb88ac00ad07ecd"
  },
  {
    "url": "config/index.html",
    "revision": "e4b0c1b92f5d99da140e7b790d9bb97b"
  },
  {
    "url": "en/faq/index.html",
    "revision": "83e567dd8d61b2f5d5fbfda270c75959"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "ede5f29770931cfd84e60d29763df6d9"
  },
  {
    "url": "en/index.html",
    "revision": "207c9e5a29ea4b231972bdb975d4fe80"
  },
  {
    "url": "faq/akcii-vs-bankovsky-deposit.html",
    "revision": "d7b7030e434094a53c5fc31b7d602d17"
  },
  {
    "url": "faq/hranenie-i-vyvod-akcii.html",
    "revision": "c26cceb78600c5f904cf32f7fc4c49c4"
  },
  {
    "url": "faq/index.html",
    "revision": "7b7f97e731db0eba56a98119339428d7"
  },
  {
    "url": "faq/kak-investirovat-nalichnye-v-kryptu.html",
    "revision": "99f269bea18c7c74069cd4781ec42c08"
  },
  {
    "url": "faq/kak-poluchit-investicii.html",
    "revision": "839d92eaac2a9aad2b8bcbde14324e9c"
  },
  {
    "url": "faq/luchshee-vremya-dlya-investicii.html",
    "revision": "01f5977996bfa0a16b6ba8a30f1e80cb"
  },
  {
    "url": "faq/mejdunarodnye-investicii.html",
    "revision": "bb3fe09973bac73c5e63cfb55ea6103b"
  },
  {
    "url": "faq/perspectivy.html",
    "revision": "a265ee08891bae47b61db44b92da3e7c"
  },
  {
    "url": "faq/pochemu-vygodno-investirovat-v-empaer.html",
    "revision": "c433f76172e462122378beece7e8a668"
  },
  {
    "url": "faq/vip-investicii.html",
    "revision": "f5e25025fad5c06286c9b57e6f32399f"
  },
  {
    "url": "faq/zachita-investicii.html",
    "revision": "d21edc1e5e1b18b273a41dd2bdc6607b"
  },
  {
    "url": "guide/index.html",
    "revision": "a9055c1e6f0e9b4ffd43abf53d06e051"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "514e5bb1b7b499cf794670ed2bcf9c28"
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
    "revision": "3ad31e1ff3c1c6fdde3c5c3d945600cc"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "c5fce4ef2c48e039122e7f52327bfce0"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "a9354b281f976a50436941e0dbaf1baf"
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
