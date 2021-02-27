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
    "revision": "83ada39d6b3c1f91ef2e0dbccf3ceac5"
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
    "url": "assets/js/11.efc1f607.js",
    "revision": "9b0ea28cb2cb4e17acabd2069e6c690e"
  },
  {
    "url": "assets/js/12.834e75e1.js",
    "revision": "27a4f42fad121ec6a54223fb926ac888"
  },
  {
    "url": "assets/js/13.037cb981.js",
    "revision": "4e548e26f711a2663ffe462af2c2e5d2"
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
    "url": "assets/js/16.94fa6e16.js",
    "revision": "4faa75874e8e6f61e2bbad3222d79c11"
  },
  {
    "url": "assets/js/17.be87d6ec.js",
    "revision": "4085ec87e2f6785e51d2f5917cd12e23"
  },
  {
    "url": "assets/js/18.293978dc.js",
    "revision": "9d7000ad52809206da48758a4731f261"
  },
  {
    "url": "assets/js/19.11fe092f.js",
    "revision": "c827a8051754cfea6808bc29b6d23256"
  },
  {
    "url": "assets/js/2.46f708bc.js",
    "revision": "fa7bc35137f7dde4f0196c783173bdad"
  },
  {
    "url": "assets/js/20.bd14c3b3.js",
    "revision": "934b53e1f5b43e8dde5654d99299c9e2"
  },
  {
    "url": "assets/js/21.d9f7cbad.js",
    "revision": "348cb0f0e4463f39b653efe86136b030"
  },
  {
    "url": "assets/js/22.ae105341.js",
    "revision": "0fe07dfaf85ed8d69b81c94bf83daca0"
  },
  {
    "url": "assets/js/23.606d7fe8.js",
    "revision": "58a37ed0c3ee3915d6cc2f0c939d1426"
  },
  {
    "url": "assets/js/24.870036a5.js",
    "revision": "b99b407aa62bd401b60b7010a4297952"
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
    "url": "assets/js/27.fdd09f5d.js",
    "revision": "a27498d51667aae893bd3f899bd28d46"
  },
  {
    "url": "assets/js/28.8d74c510.js",
    "revision": "738881e237907c35ef26a6e85eee7a2b"
  },
  {
    "url": "assets/js/29.6c8a66c3.js",
    "revision": "8de6145f04e93a2aad503095e7a20c7c"
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
    "url": "assets/js/app.84cfc9eb.js",
    "revision": "955bc44679d5aebb97ee279845096159"
  },
  {
    "url": "config/index.html",
    "revision": "b86a0f22ac2ea0ef9e78ddc3225a940a"
  },
  {
    "url": "en/faq/index.html",
    "revision": "7febf01d43e06971b383da1330356edb"
  },
  {
    "url": "en/faq/using-vue.html",
    "revision": "77afcfee10c83e8f83815ecabb7989ed"
  },
  {
    "url": "en/index.html",
    "revision": "a5dbf03301b35b05635c467ca110a681"
  },
  {
    "url": "faq/akcii-vs-bankovsky-deposit.html",
    "revision": "44545389bfa263567c157d1a5da56e98"
  },
  {
    "url": "faq/hranenie-i-vyvod-akcii.html",
    "revision": "82b1f0d27d18f547776b82c0f4fd289d"
  },
  {
    "url": "faq/index.html",
    "revision": "6e3db4ae52a5304e9f024315893532b2"
  },
  {
    "url": "faq/kak-investirovat-nalichnye-v-kryptu.html",
    "revision": "0bfd2c75ad4c845c7ad4cab595305040"
  },
  {
    "url": "faq/kak-poluchit-investicii.html",
    "revision": "7d86f6cd45709b17f929ca97d413b48b"
  },
  {
    "url": "faq/luchshee-vremya-dlya-investicii.html",
    "revision": "fa1d53c9a7933308dc395821d4f3f6b3"
  },
  {
    "url": "faq/mejdunarodnye-investicii.html",
    "revision": "e66cb0268c8d51600fc801d9ef4a9623"
  },
  {
    "url": "faq/perspectivy.html",
    "revision": "87b9c5c75a30675af08562c977c08349"
  },
  {
    "url": "faq/pochemu-vygodno-investirovat-v-empaer.html",
    "revision": "a87318d854b71c5cc87754740e964f05"
  },
  {
    "url": "faq/vip-investicii.html",
    "revision": "f55cb1252dd491c118e630bae7d29b79"
  },
  {
    "url": "faq/zachita-investicii.html",
    "revision": "a8fef61abbe8e40b6d2ef4b1bf712dba"
  },
  {
    "url": "guide/index.html",
    "revision": "dba3d5a541fb366fa4da5cce5aeef5d5"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "76b18da0d1b70dff58c2f4c0d5c6bab7"
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
    "revision": "7ef4e32d98f7d75b5c5a3afc06c6a635"
  },
  {
    "url": "logo.png",
    "revision": "ba07313eda132736c2a8f0c3e9a48b2a"
  },
  {
    "url": "roadmap/index.html",
    "revision": "036be4ef81d90179ac423f88b1fafe40"
  },
  {
    "url": "roadmap/using-vue.html",
    "revision": "053c8d08595aa75523d9de57ed6d1c37"
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
