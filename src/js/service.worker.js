importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js',
);

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precache(['/']);
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
