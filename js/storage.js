/* Bureau of Lost Timelines — Local Storage Helper */
(function () {
  'use strict';

  const NS = 'blt:';
  const KEYS = {
    customFiles: NS + 'custom_files',
    customNews: NS + 'custom_news',
    customPhotos: NS + 'custom_photos',
    customStories: NS + 'custom_stories',
    vaultCode: NS + 'vault_code',
    adminPass: NS + 'admin_pass',
    audioOn: NS + 'audio_on'
  };

  function get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }
  function remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }

  window.BLT_STORAGE = {
    KEYS,
    getFiles: () => get(KEYS.customFiles, []),
    getNews: () => get(KEYS.customNews, []),
    getPhotos: () => get(KEYS.customPhotos, []),
    getStories: () => get(KEYS.customStories, []),
    getVaultCode: () => get(KEYS.vaultCode, null),
    getAdminPass: () => get(KEYS.adminPass, 'admin123'),
    setFiles: (v) => set(KEYS.customFiles, v),
    setNews: (v) => set(KEYS.customNews, v),
    setPhotos: (v) => set(KEYS.customPhotos, v),
    setStories: (v) => set(KEYS.customStories, v),
    setVaultCode: (v) => set(KEYS.vaultCode, v),
    setAdminPass: (v) => set(KEYS.adminPass, v),
    getAudioOn: () => get(KEYS.audioOn, false),
    setAudioOn: (v) => set(KEYS.audioOn, v),

    mergedFiles: () => {
      const base = window.BLT_DATA ? window.BLT_DATA.files : [];
      return [...base, ...get(KEYS.customFiles, [])];
    },
    mergedNews: () => {
      const base = window.BLT_DATA ? window.BLT_DATA.news : [];
      return [...base, ...get(KEYS.customNews, [])];
    },
    mergedPhotos: () => {
      const base = window.BLT_DATA ? window.BLT_DATA.photos : [];
      return [...base, ...get(KEYS.customPhotos, [])];
    },
    mergedStories: () => {
      const base = window.BLT_STORYLINES ? window.BLT_STORYLINES.stories : [];
      return [...base, ...get(KEYS.customStories, [])];
    },
    effectiveVaultCode: () => {
      const custom = get(KEYS.vaultCode, null);
      return custom !== null ? custom : (window.BLT_DATA ? window.BLT_DATA.vaultCode : '07');
    },

    clearAll: () => {
      Object.values(KEYS).forEach(k => remove(k));
    }
  };
})();
