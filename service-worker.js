const CACHE_NAME = "geheime-missionen-v19";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./avatars/avatar_01.png",
  "./avatars/avatar_02.png",
  "./avatars/avatar_03.png",
  "./avatars/avatar_04.png",
  "./avatars/avatar_05.png",
  "./avatars/avatar_06.png",
  "./avatars/avatar_07.png",
  "./avatars/avatar_08.png",
  "./avatars/avatar_09.png",
  "./avatars/avatar_10.png",
  "./avatars/avatar_11.png",
  "./avatars/avatar_12.png",
  "./avatars/avatar_13.png",
  "./avatars/avatar_14.png",
  "./avatars/avatar_15.png",
  "./avatars/avatar_16.png",
  "./avatars/avatar_17.png",
  "./avatars/avatar_18.png",
  "./avatars/avatar_19.png",
  "./avatars/avatar_20.png",
  "./avatars/avatar_21.png",
  "./avatars/avatar_22.png",
  "./avatars/avatar_23.png",
  "./avatars/avatar_24.png",
  "./avatars/avatar_25.png",
  "./avatars/avatar_26.png",
  "./avatars/avatar_27.png",
  "./avatars/avatar_28.png",
  "./avatars/avatar_29.png",
  "./avatars/avatar_30.png",
  "./avatars/avatar_31.png",
  "./avatars/avatar_32.png",
  "./avatars/avatar_33.png",
  "./avatars/avatar_34.png",
  "./avatars/avatar_35.png",
  "./avatars/avatar_36.png",
  "./avatars/avatar_37.png",
  "./avatars/avatar_38.png",
  "./avatars/avatar_39.png",
  "./avatars/avatar_40.png",
  "./avatars/avatar_41.png",
  "./avatars/avatar_42.png",
  "./avatars/avatar_43.png",
  "./avatars/avatar_44.png",
  "./avatars/avatar_45.png",
  "./avatars/avatar_46.png",
  "./avatars/avatar_47.png",
  "./avatars/avatar_48.png",
  "./avatars/avatar_49.png",
  "./avatars/avatar_50.png",
  "./avatars/avatar_51.png",
  "./avatars/avatar_52.png",
  "./avatars/avatar_53.png",
  "./avatars/avatar_54.png",
  "./avatars/avatar_55.png",
  "./avatars/avatar_56.png",
  "./avatars/avatar_57.png",
  "./avatars/avatar_58.png",
  "./avatars/avatar_59.png",
  "./avatars/avatar_60.png",
  "./avatars/avatar_61.png",
  "./avatars/avatar_62.png",
  "./avatars/avatar_63.png",
  "./avatars/avatar_64.png",
  "./avatars/avatar_65.png",
  "./avatars/avatar_66.png",
  "./avatars/avatar_67.png",
  "./avatars/avatar_68.png",
  "./avatars/avatar_69.png",
  "./avatars/avatar_70.png",
  "./avatars/avatar_71.png",
  "./avatars/avatar_72.png"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
