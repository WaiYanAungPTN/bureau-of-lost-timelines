/* Bureau of Lost Timelines — Main Application */
(function () {
  'use strict';

  const S = window.BLT_STORAGE;

  /* ===== FILES ===== */
  function renderFiles() {
    const grid = document.getElementById('fileGrid');
    if (!grid) return;
    grid.innerHTML = '';
    S.mergedFiles().forEach(f => {
      const card = document.createElement('div');
      card.className = 'file-card';
      const markerHTML = f.marker ?
        `<div class="file-marker ${f.marker}">${f.marker === 'real' ? '🟢 REAL' : f.marker === 'folklore' ? '🟡 FOLKLORE' : '🔴 FICTION'}</div>` : '';
      card.innerHTML = `
        ${markerHTML}
        <div class="file-id">${f.id || 'CUSTOM'}</div>
        <div class="file-title">${f.title}</div>
        <div class="file-title-my">${f.my || ''}</div>
        <div class="file-meta">
          <span class="${f.cls || 'status-active'}">${f.meta || 'STATUS: ACTIVE'}</span><span>🔒</span>
        </div>`;
      card.addEventListener('click', () => openModal(f.title,
        `${markerHTML}<div style="margin-top:10px;"></div>${f.body || ''}${f.bodyMy ? `<span class="my">${f.bodyMy}</span>` : ''}`
      ));
      grid.appendChild(card);
    });
  }

  window.BLT_OPEN_FILE = function (f) {
    openModal(f.title, `${f.body || ''}${f.bodyMy ? `<span class="my">${f.bodyMy}</span>` : ''}`);
  };

  /* ===== STORYLINES ===== */
  let currentFilter = 'all';

  function renderStorylineFilter() {
    const wrap = document.getElementById('storylineFilter');
    if (!wrap) return;
    wrap.innerHTML = '';
    const cats = window.BLT_STORYLINES.categories;
    cats.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat.id === 'all' ? ' active' : '');
      btn.textContent = cat.label;
      btn.dataset.cat = cat.id;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = cat.id;
        renderStorylines();
      });
      wrap.appendChild(btn);
    });
  }

  function renderStorylines() {
    const grid = document.getElementById('storylineGrid');
    if (!grid) return;
    grid.innerHTML = '';
    S.mergedStories()
      .filter(s => currentFilter === 'all' || s.cat === currentFilter)
      .forEach(s => {
        const card = document.createElement('div');
        card.className = 'storyline-card';
        card.dataset.cat = s.cat;
        const markerHTML = s.marker ?
          `<div class="sl-marker ${s.marker}">${s.markerText || (s.marker === 'real' ? '🟢 REAL' : s.marker === 'folklore' ? '🟡 FOLKLORE' : '🔴 FICTION')}</div>` : '';
        card.innerHTML = `
          ${markerHTML}
          <div class="sl-tag">${s.tag}</div>
          <div class="sl-title">${s.title}</div>
          <div class="sl-title-my">${s.my}</div>
          <div class="sl-excerpt">${s.excerpt}</div>
          <div class="sl-meta">
            <span>${s.date || '—'}</span>
            <span>${(s.chars || []).length} CHARACTERS</span>
          </div>
        `;
        card.addEventListener('click', () => openStory(s.id));
        grid.appendChild(card);
      });
  }

  function openStory(id) {
    const s = S.mergedStories().find(x => x.id === id);
    if (!s) return;
    const fragHTML = s.fragments && s.fragments.length
      ? `<h4>FRAGMENTS</h4>${s.fragments.map(f => `<div class="fragment">${f}</div>`).join('')}`
      : '';
    const charHTML = s.chars && s.chars.length
      ? `<h4>CHARACTERS</h4><div class="char-list">${s.chars.map(c => `<span class="char-chip">${c}</span>`).join('')}</div>`
      : '';
    const markerHTML = s.marker ?
      `<div class="sl-marker ${s.marker}" style="margin-bottom:12px;">${s.markerText || (s.marker === 'real' ? '🟢 REAL' : s.marker === 'folklore' ? '🟡 FOLKLORE' : '🔴 FICTION')}</div>` : '';
    const body = `
      ${markerHTML}
      <p style="color:#7dffa5; font-size:13px; font-family:'Padauk',sans-serif; margin-bottom:12px;">${s.my || ''}</p>
      ${s.narrative || `<p>${s.excerpt || ''}</p>`}
      ${fragHTML}
      ${charHTML}
    `;
    openModal(s.title, body);
  }

  window.BLT_OPEN_STORY = function (id) {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    const btn = document.querySelector('.nav-btn[data-panel="storylines"]');
    if (btn) btn.classList.add('active');
    const panel = document.getElementById('storylines');
    if (panel) panel.classList.add('active');
    setTimeout(() => openStory(id), 80);
  };

  /* ===== NEWS ===== */
  function renderNews() {
    const list = document.getElementById('newsList');
    if (!list) return;
    list.innerHTML = '';
    S.mergedNews().forEach(n => {
      const div = document.createElement('div');
      div.className = 'news-item';
      div.innerHTML = `
        <h3>${n.title}</h3>
        <div class="news-my">${n.my || ''}</div>
        <p>${n.body}</p>
        <div class="date">${n.date || 'ARCHIVE DATE: UNKNOWN'}</div>`;
      list.appendChild(div);
    });
  }

  /* ===== PHOTOS ===== */
  function renderPhotos() {
    const grid = document.getElementById('photoGrid');
    if (!grid) return;
    grid.innerHTML = '';
    S.mergedPhotos().forEach(p => {
      const div = document.createElement('div');
      div.className = 'photo';
      const markerHTML = p.marker ?
        `<div class="photo-marker ${p.marker}">${p.markerText || (p.marker === 'real' ? '🟢 REAL' : p.marker === 'folklore' ? '🟡 FOLKLORE' : '🔴 FICTION')}</div>` : '';
      const descHTML = p.desc ?
        `<div class="photo-desc"><div class="desc-title">${p.cap}</div>${p.desc}</div>` : '';
      div.innerHTML = `
        ${markerHTML}
        <img src="${p.url}" alt="${p.cap}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/400x400/0a0a0a/33ff66?text=NO+SIGNAL'">
        <div class="caption">${p.cap}<div class="caption-my">${p.my || ''}</div></div>
        ${descHTML}
      `;
      grid.appendChild(div);
    });
  }

  /* ===== NAV ===== */
  function initNav() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById(btn.dataset.panel);
        if (panel) panel.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  window.BLT_GOTO_PANEL = function (name) {
    const btn = document.querySelector(`.nav-btn[data-panel="${name}"]`);
    if (btn) btn.click();
  };

  /* ===== VAULT ===== */
  function initVault() {
    const input = document.getElementById('vaultCode');
    const btn = document.getElementById('unlockBtn');
    const secret = document.getElementById('secretContent');
    if (!input || !btn) return;

    function tryUnlock() {
      if (input.value.trim() === S.effectiveVaultCode()) {
        secret.innerHTML = window.BLT_DATA.vaultContent;
        secret.classList.add('show');
        input.value = '';
        const user = window.BLT_AUTH.getCurrentUser();
        if (user) {
          window.BLT_AUTH.addXP(user.id, window.BLT_AUTH.XP_REWARDS.VAULT_ACCESS, 'Vault accessed');
          window.BLT_AUTH.updateUser(user.id, { vaultUnlocked: true });
          if (window.BLT_BADGES) window.BLT_BADGES.checkAndAward(user.id);
        }
      } else {
        secret.classList.remove('show');
        input.value = '';
        alert("ACCESS DENIED — INVALID CODE\nအသုံးပြုခွင့် ငြင်းပယ်ခံရသည်");
      }
    }
    btn.addEventListener('click', tryUnlock);
    input.addEventListener('keypress', e => { if (e.key === 'Enter') tryUnlock(); });
  }

  /* ===== MODAL ===== */
  function openModal(title, body) {
    const modal = document.getElementById('modal');
    if (!modal) return;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = body;
    modal.classList.add('show');
    modal.scrollTop = 0;
  }
  function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.classList.remove('show');
  }
  function initModal() {
    const closeBtn = document.getElementById('modalClose');
    const modal = document.getElementById('modal');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', e => {
      if (e.target.id === 'modal') closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ===== AMBIENCE ===== */
  function initAudio() {
    const btn = document.getElementById('audioToggle');
    const audio = document.getElementById('ambience');
    if (!btn || !audio) return;
    let ctx = null, isOn = false;

    function startGeneratedHum() {
      try {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 58;
        gain.gain.value = 0.02;
        osc.connect(gain).connect(ctx.destination);
        osc.start();
        const osc2 = ctx.createOscillator();
        const g2 = ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.value = 116.5;
        g2.gain.value = 0.008;
        osc2.connect(g2).connect(ctx.destination);
        osc2.start();
      } catch (e) {}
    }
    function stopGeneratedHum() {
      if (ctx) { try { ctx.close(); } catch (e) {} ctx = null; }
    }

    btn.addEventListener('click', () => {
      if (isOn) {
        audio.pause();
        stopGeneratedHum();
      } else {
        audio.play().catch(() => startGeneratedHum());
      }
      isOn = !isOn;
      btn.classList.toggle('on', isOn);
      btn.textContent = isOn ? '🔊 AMBIENCE ON' : '🔇 AMBIENCE OFF';
    });
  }

  /* ===== INIT ===== */
  document.addEventListener('DOMContentLoaded', () => {
    renderFiles();
    renderStorylineFilter();
    renderStorylines();
    renderNews();
    renderPhotos();
    initNav();
    initVault();
    initModal();
    initAudio();
  });
})();
