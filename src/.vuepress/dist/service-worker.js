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
    "revision": "9d1bd03ce9dfa23a01e106ed4b941a2b"
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
    "url": "assets/js/15.bea051d6.js",
    "revision": "9773dab5031eba65cb5eb2b7f80017b1"
  },
  {
    "url": "assets/js/16.df7410fe.js",
    "revision": "e8af226677d6919e339b9595a7081800"
  },
  {
    "url": "assets/js/17.da7d66fd.js",
    "revision": "330b02170974e0eb65d28e1ebf15f256"
  },
  {
    "url": "assets/js/18.808f8e77.js",
    "revision": "27da3d630cfd7e83ea1784a9c6f8d8c8"
  },
  {
    "url": "assets/js/19.9a850001.js",
    "revision": "14a0740d1d5c814eb543d09e6cb3b0cc"
  },
  {
    "url": "assets/js/2.46f708bc.js",
    "revision": "fa7bc35137f7dde4f0196c783173bdad"
  },
  {
    "url": "assets/js/20.84061ae1.js",
    "revision": "af8fbf7c39212d3f3f6a5287741c3933"
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
    "url": "assets/js/23.b70fbf0d.js",
    "revision": "46ccb99ceb9543802e00e1b0beb59b05"
  },
  {
    "url": "assets/js/24.a82f84e3.js",
    "revision": "dc8aafbc649e2800bd47a00cc6c801c1"
  },
  {
    "url": "assets/js/25.51eeeee8.js",
    "revision": "345f6dc54f40da158d833c3cd192a07a"
  },
  {
    "url": "assets/js/26.608b4365.js",
    "revision": "2a04d4b8265d84735f8dd6cfd7fe364c"
  },
  {
    "url": "assets/js/27.1712984f.js",
    "revision": "922f18f8be8f88802757051f4718afcf"
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
    "url": "assets/js/app.5f577751.js",
    "revision": "67a78551ed8db6faabb3850472ca66d3"
  },
  {
    "url": "config/index.html",
    "revision": "38deea6c4863962347c140d41b975b71"
  },
  {
    "url": "en/faq/index.html",
    "revision": "1fcfc74ef26d4092133163bf0d47e843"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "f40e33f334be0893502be91a80bcf8b8"
  },
  {
    "url": "en/index.html",
    "revision": "a03c8d0c4b44a6ce4281962ee41cd167"
  },
  {
    "url": "faq/akcii-vs-bankovsky-deposit.html",
    "revision": "2f9248c903432c689ab91a0ac92a3bb2"
  },
  {
    "url": "faq/hranenie-i-vyvod-akcii.html",
    "revision": "07aeb76728d6dde6ad18097c92b792e4"
  },
  {
    "url": "faq/index.html",
    "revision": "12c841519022ecda5a76101e71fc2c83"
  },
  {
    "url": "faq/kak-investirovat-nalichnye-v-kryptu.html",
    "revision": "523dac0c1f91920c83eac0417bf1bf22"
  },
  {
    "url": "faq/kak-poluchit-investicii.html",
    "revision": "393af2931f6369aa172f8ca5c26c4072"
  },
  {
    "url": "faq/luchshee-vremya-dlya-investicii.html",
    "revision": "fff64a3e9bd877e72521f3b9105515d9"
  },
  {
    "url": "faq/mejdunarodnye-investicii.html",
    "revision": "71c81d11d63f94247d2eefcbde16983a"
  },
  {
    "url": "faq/perspectivy.html",
    "revision": "5d3bd4ab31f86faf21ab1ba38c44803c"
  },
  {
    "url": "faq/pochemu-vygodno-investirovat-v-empaer.html",
    "revision": "6cc34ae31c0f110ba302933de13e1d45"
  },
  {
    "url": "faq/vip-investicii.html",
    "revision": "38a294b6b79700ad915139222925cffe"
  },
  {
    "url": "faq/zachita-investicii.html",
    "revision": "ac5e248894ed5f3f7906e6b2cbe056e9"
  },
  {
    "url": "guide/index.html",
    "revision": "5b06a8d02f64e533afc93b1b1c8a57d9"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "3a646d44798a93b20bd52a4d60b19ca7"
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
    "revision": "2b1fd8fd3d281806000331624021c70f"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "4350e58bd82b8d1d446319ec9260c53b"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "e681d341ff577113214b17494af12c77"
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
