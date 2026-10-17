/* Bureau of Lost Timelines — Admin Panel */
(function () {
  'use strict';
  const S = window.BLT_STORAGE;

  function initLogin() {
    const input = document.getElementById('adminPassInput');
    const btn = document.getElementById('adminLoginBtn');
    const login = document.getElementById('adminLogin');
    const dash = document.getElementById('adminDashboard');
    if (!input || !btn) return;

    function attempt() {
      if (input.value === S.getAdminPass()) {
        login.style.display = 'none';
        dash.style.display = 'block';
        input.value = '';
        initDashboard();
      } else {
        alert('ACCESS DENIED — INVALID PASSWORD');
        input.value = '';
        input.focus();
      }
    }
    btn.addEventListener('click', attempt);
    input.addEventListener('keypress', e => { if (e.key === 'Enter') attempt(); });
  }

  function initTabs() {
    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
      });
    });
  }

  function renderFileList() {
    const list = document.getElementById('fileAdminList');
    if (!list) return;
    const custom = S.getFiles();
    if (!custom.length) {
      list.innerHTML = '<div class="empty-note">No custom files yet.</div>';
      return;
    }
    list.innerHTML = custom.map((f, i) => `
      <div class="admin-item">
        <div class="item-info">
          <div class="item-title">${f.id} · ${f.title}</div>
          <div class="item-my">${f.my || ''}</div>
          <div class="item-meta">${f.meta || 'STATUS: ACTIVE'}</div>
        </div>
        <div class="item-actions">
          <button class="view" data-idx="${i}" data-type="file">VIEW</button>
          <button class="delete" data-idx="${i}" data-type="file">DELETE</button>
        </div>
      </div>
    `).join('');
    attachActions(list);
  }

  function addFile() {
    const val = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    if (!val('f-title')) { alert('Title required'); return; }
    const files = S.getFiles();
    files.push({
      id: val('f-id') || '0x' + Math.random().toString(16).slice(2, 6).toUpperCase(),
      title: val('f-title'),
      my: val('f-my'),
      meta: val('f-meta') || 'STATUS: ACTIVE',
      cls: val('f-cls') || 'status-active',
      body: val('f-body'),
      bodyMy: val('f-bodymy')
    });
    S.setFiles(files);
    ['f-id','f-title','f-my','f-meta','f-body','f-bodymy'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    renderFileList();
    alert('File added ✓');
  }

  function renderNewsList() {
    const list = document.getElementById('newsAdminList');
    if (!list) return;
    const custom = S.getNews();
    if (!custom.length) {
      list.innerHTML = '<div class="empty-note">No custom news yet.</div>';
      return;
    }
    list.innerHTML = custom.map((n, i) => `
      <div class="admin-item">
        <div class="item-info">
          <div class="item-title">${n.title}</div>
          <div class="item-my">${n.my || ''}</div>
          <div class="item-meta">${n.date || '—'}</div>
        </div>
        <div class="item-actions">
          <button class="delete" data-idx="${i}" data-type="news">DELETE</button>
        </div>
      </div>
    `).join('');
    attachActions(list);
  }

  function addNews() {
    const val = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    if (!val('n-title')) { alert('Title required'); return; }
    const news = S.getNews();
    news.push({
      title: val('n-title'),
      my: val('n-my'),
      body: val('n-body'),
      date: val('n-date') ? 'ARCHIVE DATE: ' + val('n-date') : 'ARCHIVE DATE: UNKNOWN'
    });
    S.setNews(news);
    ['n-title','n-my','n-date','n-body'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    renderNewsList();
    alert('News added ✓');
  }

  function renderPhotoList() {
    const list = document.getElementById('photoAdminList');
    if (!list) return;
    const custom = S.getPhotos();
    if (!custom.length) {
      list.innerHTML = '<div class="empty-note">No custom photos yet.</div>';
      return;
    }
    list.innerHTML = custom.map((p, i) => `
      <div class="admin-item">
        <div class="item-info">
          <div class="item-title">${p.cap}</div>
          <div class="item-my">${p.my || ''}</div>
          <div class="item-meta">${p.url.startsWith('data:') ? 'UPLOADED (base64)' : p.url.slice(0, 50) + '…'}</div>
        </div>
        <div class="item-actions">
          <button class="delete" data-idx="${i}" data-type="photo">DELETE</button>
        </div>
      </div>
    `).join('');
    attachActions(list);
  }

  let pendingPhotoData = null;
  function initPhotoUpload() {
    const fileInput = document.getElementById('p-file');
    const preview = document.getElementById('photoPreview');
    if (!fileInput) return;
    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 2 * 1024 * 1024) { alert('File too large (max 2MB)'); return; }
      const reader = new FileReader();
      reader.onload = ev => {
        pendingPhotoData = ev.target.result;
        if (preview) preview.innerHTML = `<img src="${pendingPhotoData}" alt="preview">`;
        const urlEl = document.getElementById('p-url');
        if (urlEl) urlEl.value = '';
      };
      reader.readAsDataURL(file);
    });
  }

  function addPhoto() {
    const url = (document.getElementById('p-url') || {}).value || '';
    const finalUrl = pendingPhotoData || url.trim();
    if (!finalUrl) { alert('URL or upload required'); return; }
    const photos = S.getPhotos();
    photos.push({
      url: finalUrl,
      cap: (document.getElementById('p-cap') || {}).value || 'UNNAMED RECORD',
      my: (document.getElementById('p-my') || {}).value || ''
    });
    S.setPhotos(photos);
    ['p-url','p-cap','p-my'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    const preview = document.getElementById('photoPreview');
    if (preview) preview.innerHTML = '';
    const fileInput = document.getElementById('p-file');
    if (fileInput) fileInput.value = '';
    pendingPhotoData = null;
    renderPhotoList();
    alert('Photo added ✓');
  }

  function renderStoryList() {
    const list = document.getElementById('storyAdminList');
    if (!list) return;
    const custom = S.getStories();
    if (!custom.length) {
      list.innerHTML = '<div class="empty-note">No custom storylines yet.</div>';
      return;
    }
    list.innerHTML = custom.map((s, i) => `
      <div class="admin-item">
        <div class="item-info">
          <div class="item-title">${s.tag} · ${s.title}</div>
          <div class="item-my">${s.my || ''}</div>
          <div class="item-meta">${s.cat} · ${s.date || '—'}</div>
        </div>
        <div class="item-actions">
          <button class="delete" data-idx="${i}" data-type="story">DELETE</button>
        </div>
      </div>
    `).join('');
    attachActions(list);
  }

  function addStory() {
    const val = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    if (!val('s-title')) { alert('Title required'); return; }
    const stories = S.getStories();
    stories.push({
      id: val('s-id') || 'arc-custom-' + Date.now(),
      cat: val('s-cat') || 'deep',
      tag: val('s-tag') || 'ARC CUSTOM',
      title: val('s-title'),
      my: val('s-my'),
      date: val('s-date') || '—',
      excerpt: val('s-excerpt'),
      narrative: val('s-narrative'),
      chars: val('s-chars') ? val('s-chars').split(',').map(x => x.trim()).filter(Boolean) : [],
      fragments: []
    });
    S.setStories(stories);
    ['s-id','s-tag','s-title','s-my','s-date','s-excerpt','s-narrative','s-chars'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    renderStoryList();
    alert('Storyline added ✓');
  }

  function initSettings() {
    const saveVault = document.getElementById('saveVaultBtn');
    if (saveVault) saveVault.addEventListener('click', () => {
      const v = document.getElementById('set-vault').value.trim();
      if (!v) { alert('Vault code cannot be empty'); return; }
      S.setVaultCode(v);
      document.getElementById('set-vault').value = '';
      alert('Vault code updated ✓');
    });

    const saveAdmin = document.getElementById('saveAdminBtn');
    if (saveAdmin) saveAdmin.addEventListener('click', () => {
      const v = document.getElementById('set-admin').value.trim();
      if (v.length < 4) { alert('Admin password must be ≥ 4 chars'); return; }
      S.setAdminPass(v);
      document.getElementById('set-admin').value = '';
      alert('Admin password updated ✓');
    });

    const resetAll = document.getElementById('resetAllBtn');
    if (resetAll) resetAll.addEventListener('click', () => {
      if (confirm('⚠ Are you sure? All custom data will be permanently deleted.')) {
        S.clearAll();
        alert('All custom data cleared. Reloading...');
        location.reload();
      }
    });
  }

  function attachActions(list) {
    list.querySelectorAll('.delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const type = btn.dataset.type;
        if (!confirm('Delete this item?')) return;
        if (type === 'file') { const v = S.getFiles(); v.splice(idx, 1); S.setFiles(v); renderFileList(); }
        if (type === 'news') { const v = S.getNews(); v.splice(idx, 1); S.setNews(v); renderNewsList(); }
        if (type === 'photo') { const v = S.getPhotos(); v.splice(idx, 1); S.setPhotos(v); renderPhotoList(); }
        if (type === 'story') { const v = S.getStories(); v.splice(idx, 1); S.setStories(v); renderStoryList(); }
      });
    });
    list.querySelectorAll('.view').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.idx, 10);
        const f = S.getFiles()[idx];
        if (f) alert(`${f.title}\n\n${f.body || ''}\n\n${f.bodyMy || ''}`);
      });
    });
  }

  function initDashboard() {
    renderFileList();
    renderNewsList();
    renderPhotoList();
    renderStoryList();

    const addFileBtn = document.getElementById('addFileBtn');
    if (addFileBtn) addFileBtn.addEventListener('click', addFile);

    const addNewsBtn = document.getElementById('addNewsBtn');
    if (addNewsBtn) addNewsBtn.addEventListener('click', addNews);

    const addPhotoBtn = document.getElementById('addPhotoBtn');
    if (addPhotoBtn) addPhotoBtn.addEventListener('click', addPhoto);

    const addStoryBtn = document.getElementById('addStoryBtn');
    if (addStoryBtn) addStoryBtn.addEventListener('click', addStory);

    initPhotoUpload();
    initSettings();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initLogin();
    initTabs();
  });
})();
