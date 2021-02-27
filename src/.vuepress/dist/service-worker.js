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
    "revision": "6d582f34a0e08453c1d213c7f7024902"
  },
  {
    "url": "admin/index.html",
    "revision": "790d4a084438b6422c5756d20b35ab03"
  },
  {
    "url": "assets/css/0.styles.a18a57b8.css",
    "revision": "ee4a4ba18027641f8286b5c3167d7945"
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
    "url": "assets/js/15.19d758dd.js",
    "revision": "0fc54255d72ae9e0571260a7b0db4ab8"
  },
  {
    "url": "assets/js/16.94fa6e16.js",
    "revision": "4faa75874e8e6f61e2bbad3222d79c11"
  },
  {
    "url": "assets/js/17.516dd85e.js",
    "revision": "fb1435b0d486aef1ef9631509c5ce230"
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
    "url": "assets/js/20.6299ccf6.js",
    "revision": "3c9fe5f62eca62524f3850988fb611f0"
  },
  {
    "url": "assets/js/21.356e4281.js",
    "revision": "94d9a2282e376ea24207e515cdd9326a"
  },
  {
    "url": "assets/js/22.b61818b1.js",
    "revision": "abd5e063bf0b786f067df60901ad8aa0"
  },
  {
    "url": "assets/js/23.606d7fe8.js",
    "revision": "58a37ed0c3ee3915d6cc2f0c939d1426"
  },
  {
    "url": "assets/js/24.4134210b.js",
    "revision": "34827f70ca8f138f387c2ad7bac6584d"
  },
  {
    "url": "assets/js/25.e6661f2d.js",
    "revision": "ab97edc44f8fae1fa2c3a70a9c5facc4"
  },
  {
    "url": "assets/js/26.608b4365.js",
    "revision": "2a04d4b8265d84735f8dd6cfd7fe364c"
  },
  {
    "url": "assets/js/27.fdd09f5d.js",
    "revision": "a27498d51667aae893bd3f899bd28d46"
  },
  {
    "url": "assets/js/28.8d74c510.js",
    "revision": "738881e237907c35ef26a6e85eee7a2b"
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
    "url": "assets/js/30.6089ff9c.js",
    "revision": "95b45568ece570afe237b51bea0f1041"
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
    "url": "assets/js/9.43044b08.js",
    "revision": "40449c969a0eefc2618219f0a88b5534"
  },
  {
    "url": "assets/js/app.27f153b6.js",
    "revision": "009b618abb0ced9a7511dab947c93635"
  },
  {
    "url": "config/index.html",
    "revision": "b65a72a6865bfdb66fc2e82ff2517be0"
  },
  {
    "url": "en/faq/index.html",
    "revision": "34624ba99504bee35cb7c04a47b59255"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "cddf6214a47cb534c5067dabcb20cce6"
  },
  {
    "url": "en/index.html",
    "revision": "3461f7e1d19c95aca98120b53ad6ee67"
  },
  {
    "url": "faq/akcii-vs-bankovsky-deposit.html",
    "revision": "10ce23baa64c2f2df5b9bfb91eee86ff"
  },
  {
    "url": "faq/hranenie-i-vyvod-akcii.html",
    "revision": "7b8a3baedf81ea4c2d59bdd327a8646a"
  },
  {
    "url": "faq/index.html",
    "revision": "384607d96fcbd4eab029489950136c26"
  },
  {
    "url": "faq/kak-investirovat-nalichnye-v-kryptu.html",
    "revision": "0a08ad4a72f3975b671c0b90a21bfd98"
  },
  {
    "url": "faq/kak-poluchit-investicii.html",
    "revision": "48b04cce85b2167937bd4556df673bdb"
  },
  {
    "url": "faq/luchshee-vremya-dlya-investicii.html",
    "revision": "065399c2e5c61a57472740d355db3c47"
  },
  {
    "url": "faq/mejdunarodnye-investicii.html",
    "revision": "48402fbb0edf3bb27b8d8bf8cc52968d"
  },
  {
    "url": "faq/perspectivy.html",
    "revision": "5959a64971ee886ec4dfa3a8cac30f60"
  },
  {
    "url": "faq/pochemu-vygodno-investirovat-v-empaer.html",
    "revision": "9f1d71f5526ea1adaada9684269bc4a5"
  },
  {
    "url": "faq/vip-investicii.html",
    "revision": "9bb16a4eb71013a46c751c3f99324a03"
  },
  {
    "url": "faq/zachita-investicii.html",
    "revision": "b8be885c5ee16e9c3c3955efa7469406"
  },
  {
    "url": "guide/index.html",
    "revision": "8c9b248cf88714d0daf81b94257057ff"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "32e2da0cf358aa7adf46b080b929271b"
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
    "revision": "2b25e031fae799f09dfbc9c830e0d204"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "0f5c08e48fc88953661eefa7a83bd711"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "724780b82d9a698733c0c15a2116e45d"
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
