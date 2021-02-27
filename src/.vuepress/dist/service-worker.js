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
    "revision": "b9200cbec7a682261880c8ed3bfcb701"
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
    "url": "assets/js/11.e90a5f48.js",
    "revision": "483c78c6490e8a542b1875fcc5d5bfa3"
  },
  {
    "url": "assets/js/12.b1516051.js",
    "revision": "4c2326c2889acb2ff7d1f4339e1a6e7c"
  },
  {
    "url": "assets/js/13.9a56f6f7.js",
    "revision": "f64df7348e9671e1f8fb5934e7575700"
  },
  {
    "url": "assets/js/14.e896cad7.js",
    "revision": "e90231c05998ce7f1ae1257bbafd02bf"
  },
  {
    "url": "assets/js/15.eaabcf78.js",
    "revision": "3cacc0a759fc1378cade3f43a8ccdc0e"
  },
  {
    "url": "assets/js/16.df7410fe.js",
    "revision": "e8af226677d6919e339b9595a7081800"
  },
  {
    "url": "assets/js/17.41b2281a.js",
    "revision": "e43dd5ec63ec2a187a601910a4eb9f31"
  },
  {
    "url": "assets/js/18.43740888.js",
    "revision": "b9fcd773f220b3919aab3e9782817d2a"
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
    "url": "assets/js/21.f1d34985.js",
    "revision": "b97c1eb279428e039e2e81dcc175703b"
  },
  {
    "url": "assets/js/22.4cf09f5d.js",
    "revision": "17c090afb10278a60a7564523ec364a6"
  },
  {
    "url": "assets/js/23.b70fbf0d.js",
    "revision": "46ccb99ceb9543802e00e1b0beb59b05"
  },
  {
    "url": "assets/js/24.a82f84e3.js",
    "revision": "dc8aafbc649e2800bd47a00cc6c801c1"
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
    "url": "assets/js/28.d9167e07.js",
    "revision": "9dc9824bfb88b1ab87edb350e6cb668c"
  },
  {
    "url": "assets/js/29.65bf39e8.js",
    "revision": "586e6304ead30d10ecb51fbd9bc148e3"
  },
  {
    "url": "assets/js/3.d0f8d324.js",
    "revision": "90b87222d01f715310b81642096a8d0d"
  },
  {
    "url": "assets/js/30.1d8bb12a.js",
    "revision": "c574cce48ab0ec8650b824916a467a53"
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
    "url": "assets/js/app.1e32fdf0.js",
    "revision": "4712c7134a5ecd3b7a89f25e36693651"
  },
  {
    "url": "config/index.html",
    "revision": "9c88e06eec6d2b5e7a25963de18ace79"
  },
  {
    "url": "en/faq/index.html",
    "revision": "fe34fe5f8c48bc61b44a9bd04522cb27"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "595360761f59d56c5cf7a4cc110d983f"
  },
  {
    "url": "en/index.html",
    "revision": "2af477d8234d400ede94977babd54bcb"
  },
  {
    "url": "faq/akcii-vs-bankovsky-deposit.html",
    "revision": "cc8d44658092732356c50d7868f2f213"
  },
  {
    "url": "faq/hranenie-i-vyvod-akcii.html",
    "revision": "cc1520c9ddd767e892934a9a4d8cc17d"
  },
  {
    "url": "faq/index.html",
    "revision": "1823a51891bbab53c1463064e9c82785"
  },
  {
    "url": "faq/kak-investirovat-nalichnye-v-kryptu.html",
    "revision": "3f6b93acf041313dc5419622ac7cc1a0"
  },
  {
    "url": "faq/kak-poluchit-investicii.html",
    "revision": "24cdf38f0b5efaaa8cae23a744424708"
  },
  {
    "url": "faq/luchshee-vremya-dlya-investicii.html",
    "revision": "72c5b72e915ea39fb41fbbbb4e1c8976"
  },
  {
    "url": "faq/mejdunarodnye-investicii.html",
    "revision": "a66eecde0414583c040c9853d6779880"
  },
  {
    "url": "faq/perspectivy.html",
    "revision": "cd7f629e2d36cbbf449ce975ae605b9b"
  },
  {
    "url": "faq/pochemu-vygodno-investirovat-v-empaer.html",
    "revision": "e24b4a23eafee88f64a0b84c50a98d6b"
  },
  {
    "url": "faq/vip-investicii.html",
    "revision": "6a6de23d884f9944ed6ee42859cb502c"
  },
  {
    "url": "faq/zachita-investicii.html",
    "revision": "002bab73dee15b79d177a2d61791b61d"
  },
  {
    "url": "guide/index.html",
    "revision": "ae11c0583eb201a37558a922468d7811"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "25d4a61a6f34d59a75e3a47ebe275210"
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
    "revision": "d1f4d119ac0d20c7059388776c397ca1"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "90d5c25972efaf8b9c541fcf22cba500"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "5699e9fefad5d91310489d17dcef58eb"
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
