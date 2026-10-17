/* Bureau of Lost Timelines — Global Search */
(function () {
  'use strict';

  let allItems = [];

  function stripHtml(html) {
    const div = document.createElement('div');
    div.innerHTML = html || '';
    return div.textContent || div.innerText || '';
  }

  function buildIndex() {
    allItems = [];
    const S = window.BLT_STORAGE;
    if (!S) return;

    S.mergedFiles().forEach(f => {
      allItems.push({
        type: 'file', category: 'FILES',
        title: f.title, my: f.my,
        body: stripHtml(f.body) + ' ' + stripHtml(f.bodyMy),
        open: () => window.BLT_OPEN_FILE && window.BLT_OPEN_FILE(f)
      });
    });

    S.mergedNews().forEach(n => {
      allItems.push({
        type: 'news', category: 'NEWS',
        title: n.title, my: n.my,
        body: stripHtml(n.body),
        open: () => window.BLT_GOTO_PANEL && window.BLT_GOTO_PANEL('news')
      });
    });

    S.mergedPhotos().forEach(p => {
      allItems.push({
        type: 'photo', category: 'PHOTOS',
        title: p.cap, my: p.my,
        body: p.cap + ' ' + p.my,
        open: () => window.BLT_GOTO_PANEL && window.BLT_GOTO_PANEL('photos')
      });
    });

    S.mergedStories().forEach(s => {
      allItems.push({
        type: 'story', category: 'STORYLINES',
        title: s.title, my: s.my,
        body: stripHtml(s.excerpt) + ' ' + stripHtml(s.narrative || ''),
        open: () => window.BLT_OPEN_STORY && window.BLT_OPEN_STORY(s.id)
      });
    });
  }

  function highlight(text, query) {
    if (!query) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return text.slice(0, idx) +
      '<mark>' + text.slice(idx, idx + query.length) + '</mark>' +
      text.slice(idx + query.length);
  }

  function snippet(text, query, maxLen = 90) {
    if (!text) return '';
    const lower = text.toLowerCase();
    const q = query.toLowerCase();
    let idx = lower.indexOf(q);
    if (idx === -1) idx = 0;
    const start = Math.max(0, idx - 20);
    let s = text.slice(start, start + maxLen);
    if (start > 0) s = '…' + s;
    if (start + maxLen < text.length) s = s + '…';
    return highlight(s, query);
  }

  function runSearch(rawQuery) {
    const q = rawQuery.trim();
    const container = document.getElementById('searchResults');
    if (!container) return;
    if (!q) {
      container.classList.remove('show');
      container.innerHTML = '';
      return;
    }
    buildIndex();
    const lower = q.toLowerCase();

    const results = allItems.filter(item =>
      (item.title && item.title.toLowerCase().includes(lower)) ||
      (item.my && item.my.toLowerCase().includes(lower)) ||
      (item.body && item.body.toLowerCase().includes(lower))
    );

    if (!results.length) {
      container.innerHTML = `<div class="sr-empty">No records found for "<strong>${q}</strong>"<br>မှတ်တမ်း မတွေ့ပါ</div>`;
      container.classList.add('show');
      return;
    }

    const groups = {};
    results.forEach(r => {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    });

    let html = '';
    Object.keys(groups).forEach(cat => {
      html += `<div class="sr-category">${cat} · ${groups[cat].length}</div>`;
      groups[cat].slice(0, 8).forEach(item => {
        html += `
          <div class="sr-item" data-idx="${allItems.indexOf(item)}">
            <div class="sr-title">${highlight(item.title || '', q)}</div>
            <div class="sr-my">${highlight(item.my || '', q)}</div>
            <div class="sr-snippet">${snippet(item.body || '', q)}</div>
          </div>
        `;
      });
    });
    container.innerHTML = html;
    container.classList.add('show');

    container.querySelectorAll('.sr-item').forEach(el => {
      el.addEventListener('click', () => {
        const item = allItems[parseInt(el.dataset.idx, 10)];
        if (item && typeof item.open === 'function') item.open();
        container.classList.remove('show');
        const input = document.getElementById('globalSearch');
        if (input) input.value = '';
      });
    });
  }

  function init() {
    const input = document.getElementById('globalSearch');
    const clearBtn = document.getElementById('searchClear');
    const container = document.getElementById('searchResults');
    if (!input) return;

    let debounce;
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => runSearch(input.value), 180);
    });

    input.addEventListener('focus', () => {
      if (input.value.trim()) runSearch(input.value);
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        container.classList.remove('show');
        input.focus();
      });
    }

    document.addEventListener('click', e => {
      if (!e.target.closest('.search-bar-wrap')) {
        container.classList.remove('show');
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') container.classList.remove('show');
    });

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        input.focus();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
