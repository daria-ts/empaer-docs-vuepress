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
    "revision": "801b9f65a1a1bbfb1278cb5db312b5cd"
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
    "url": "assets/js/11.3b7ee340.js",
    "revision": "bf2e9542cf601c03338b12451e0a2f5c"
  },
  {
    "url": "assets/js/12.1579d895.js",
    "revision": "1b8e027c5ac5e46613409a69b1f3f50a"
  },
  {
    "url": "assets/js/13.60175b48.js",
    "revision": "ff7e940f8637812c40abfdba09371952"
  },
  {
    "url": "assets/js/14.17aac29f.js",
    "revision": "f31141f61fd10cac4f394cbc61fc754d"
  },
  {
    "url": "assets/js/15.a5cd2020.js",
    "revision": "d89f1d5a33d456a763d95bcda414e877"
  },
  {
    "url": "assets/js/16.df7410fe.js",
    "revision": "e8af226677d6919e339b9595a7081800"
  },
  {
    "url": "assets/js/17.5e934e73.js",
    "revision": "dc98c847d761dfaab6b8ef2dac6aea70"
  },
  {
    "url": "assets/js/18.3b2bf0eb.js",
    "revision": "b998d24d8960506ed687d260bd28170c"
  },
  {
    "url": "assets/js/19.b3ee6fdd.js",
    "revision": "43e4fde7d60903ed43c5661e68018e6e"
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
    "url": "assets/js/22.b61818b1.js",
    "revision": "abd5e063bf0b786f067df60901ad8aa0"
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
    "url": "assets/js/26.4a6005d5.js",
    "revision": "a790ce33cc17c796864139550785c0be"
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
    "url": "assets/js/29.65bf39e8.js",
    "revision": "586e6304ead30d10ecb51fbd9bc148e3"
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
    "url": "assets/js/app.30191cdf.js",
    "revision": "e169a0239b2c3aaa6c6b8081065bdb0f"
  },
  {
    "url": "config/index.html",
    "revision": "9d5238a343d7f11a7b3bd503ee76cd79"
  },
  {
    "url": "en/faq/index.html",
    "revision": "b319251bfb3c46a93b1a54b05c714b8a"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "51e200300dfc81a44778a542cd54a79b"
  },
  {
    "url": "en/index.html",
    "revision": "bd14377ea49c58c1b9abac55bd24db8e"
  },
  {
    "url": "faq/akcii-vs-bankovsky-deposit.html",
    "revision": "b2c45f1a80c67742e599be2f7923d00a"
  },
  {
    "url": "faq/hranenie-i-vyvod-akcii.html",
    "revision": "69c0e82f1bc26eb3fb9fe89d973dc98d"
  },
  {
    "url": "faq/index.html",
    "revision": "57b269eb4ea5c6bd02b62ef7b0fcc4e4"
  },
  {
    "url": "faq/kak-investirovat-nalichnye-v-kryptu.html",
    "revision": "5fb8c7673d005cb5eacf5d35fc546683"
  },
  {
    "url": "faq/kak-poluchit-investicii.html",
    "revision": "08364c7e9c9c59c9da07e270d4e9d7a7"
  },
  {
    "url": "faq/luchshee-vremya-dlya-investicii.html",
    "revision": "be93038beea2e7c7f331cd91821e338d"
  },
  {
    "url": "faq/mejdunarodnye-investicii.html",
    "revision": "c3f5c849437ff5a47607e9aa857920c2"
  },
  {
    "url": "faq/perspectivy.html",
    "revision": "ea41c2f35e9488a68155833fa7646af5"
  },
  {
    "url": "faq/pochemu-vygodno-investirovat-v-empaer.html",
    "revision": "a045d287ddf70e3200e31a57d12ef6e8"
  },
  {
    "url": "faq/vip-investicii.html",
    "revision": "9d0326eeff13fb69996de5e870f0b5c0"
  },
  {
    "url": "faq/zachita-investicii.html",
    "revision": "d927f4c57455cd4998c01e4c82a956ff"
  },
  {
    "url": "guide/index.html",
    "revision": "5a4c9232f7e287270fdae6c0d839c19e"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "958a799cdf2043911a8ae6d671c6987a"
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
    "revision": "5ac7cc673aa038907947ef6caff7a0c7"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "c11f361025fa3146b1eaa216db19eeda"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "598a3b38858880f0d81d4eed36d80c19"
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
