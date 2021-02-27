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
    "revision": "329482570ff7f6ce4657eb0c06bbaf83"
  },
  {
    "url": "admin/index.html",
    "revision": "7e4a054304c7fba20e2e565149d121af"
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
    "url": "assets/js/12.abddcbf2.js",
    "revision": "dde9e5789ee7f7ba44523dc406cfe864"
  },
  {
    "url": "assets/js/13.60175b48.js",
    "revision": "ff7e940f8637812c40abfdba09371952"
  },
  {
    "url": "assets/js/14.38d49c44.js",
    "revision": "f1de24896b744647953038a21a7eadc6"
  },
  {
    "url": "assets/js/15.2a87bbef.js",
    "revision": "f40b3081239dbfbf8fa5d8e3c55c8bd5"
  },
  {
    "url": "assets/js/16.82207a1c.js",
    "revision": "5bdf8dd9054ed46788c53e77b77c900a"
  },
  {
    "url": "assets/js/17.ce30c05b.js",
    "revision": "982724445edf11e71cc0c4153101567e"
  },
  {
    "url": "assets/js/18.293978dc.js",
    "revision": "9d7000ad52809206da48758a4731f261"
  },
  {
    "url": "assets/js/19.02c3be8e.js",
    "revision": "942b01ad76fae8c1e7c197e143a5b0d2"
  },
  {
    "url": "assets/js/2.46f708bc.js",
    "revision": "fa7bc35137f7dde4f0196c783173bdad"
  },
  {
    "url": "assets/js/20.b2596643.js",
    "revision": "8ffa9ba75dd9a83de19cb90d0002f4eb"
  },
  {
    "url": "assets/js/21.da8a9da6.js",
    "revision": "7ec0ce8c24d6ab37c6e37559cf203c91"
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
    "url": "assets/js/app.26cebe47.js",
    "revision": "834af95ebc3c8d6c6c84ec991dc11fce"
  },
  {
    "url": "config/index.html",
    "revision": "1cab3c063e03ee732e4eb3427236539e"
  },
  {
    "url": "en/faq/index.html",
    "revision": "031703c574a75bf9561ff29a2a22c364"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "cd124616a79f6010f1fc8bd4f08fa050"
  },
  {
    "url": "en/index.html",
    "revision": "d094377b98cbe0e2801085cc355c942a"
  },
  {
    "url": "faq/akcii-vs-bankovsky-deposit.html",
    "revision": "31ab417abed89b5d7bf682e29e8f660f"
  },
  {
    "url": "faq/hranenie-i-vyvod-akcii.html",
    "revision": "317c3a20c688432ab9eb31823df80333"
  },
  {
    "url": "faq/index.html",
    "revision": "d0ab78a87ee318d9f32f23af105b1315"
  },
  {
    "url": "faq/kak-investirovat-nalichnye-v-kryptu.html",
    "revision": "7b6d4dca30687ff14ed49b472f81311c"
  },
  {
    "url": "faq/kak-poluchit-investicii.html",
    "revision": "4ea057437e5c9a8fa7e4e3f7d22c4be8"
  },
  {
    "url": "faq/luchshee-vremya-dlya-investicii.html",
    "revision": "98aacd7934e48fa6fbda7b9bfebcb9d4"
  },
  {
    "url": "faq/mejdunarodnye-investicii.html",
    "revision": "31dd3fceb58e91274528305c9438370f"
  },
  {
    "url": "faq/perspectivy.html",
    "revision": "0e1fad496eb868d089ac6e8fa243c158"
  },
  {
    "url": "faq/pochemu-vygodno-investirovat-v-empaer.html",
    "revision": "6c92dbe88feed9b0b40b3ea5587ade80"
  },
  {
    "url": "faq/vip-investicii.html",
    "revision": "0d71838e616ed2f1150d1908ac39b026"
  },
  {
    "url": "faq/zachita-investicii.html",
    "revision": "3f1225984948d7488a86e4b0ee77ac6f"
  },
  {
    "url": "guide/index.html",
    "revision": "75e13143fa2055c29e098602efa9d682"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "003f4dd1558f21a99b0359baca5feed0"
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
    "revision": "0daf6e412bdb607a9f62232cc14d3365"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "991594d0b997c75eeeba7bdb66eb0716"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "baa154475f2d5130cdebe6ae0fcf36f6"
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
