/* Bureau of Lost Timelines — Notifications */
(function () {
  'use strict';

  const KEY = 'blt:auth:notifications';

  function getAll(userId) {
    const all = window.BLT_AUTH.get(KEY, {});
    return all[userId] || [];
  }

  function saveAll(all) {
    window.BLT_AUTH.set(KEY, all);
  }

  function push(userId, notif) {
    const all = window.BLT_AUTH.get(KEY, {});
    if (!all[userId]) all[userId] = [];
    const item = {
      id: 'n_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
      type: notif.type || 'info',
      title: notif.title || '',
      my: notif.my || '',
      icon: notif.icon || '🔔',
      link: notif.link || null,
      at: Date.now(),
      read: false
    };
    all[userId].unshift(item);
    all[userId] = all[userId].slice(0, 50);
    saveAll(all);
    return item;
  }

  function markRead(userId, notifId) {
    const all = window.BLT_AUTH.get(KEY, {});
    if (!all[userId]) return;
    const n = all[userId].find(x => x.id === notifId);
    if (n) n.read = true;
    saveAll(all);
  }

  function markAllRead(userId) {
    const all = window.BLT_AUTH.get(KEY, {});
    if (!all[userId]) return;
    all[userId].forEach(n => n.read = true);
    saveAll(all);
  }

  function unreadCount(userId) {
    return getAll(userId).filter(n => !n.read).length;
  }

  function clear(userId) {
    const all = window.BLT_AUTH.get(KEY, {});
    all[userId] = [];
    saveAll(all);
  }

  function renderBell() {
    const user = window.BLT_AUTH.getCurrentUser();
    if (!user) return;

    const actions = document.querySelector('.header-actions');
    if (!actions || document.getElementById('notifBell')) return;

    const count = unreadCount(user.id);
    const bell = document.createElement('button');
    bell.id = 'notifBell';
    bell.className = 'notif-bell' + (count > 0 ? ' has-unread' : '');
    bell.innerHTML = `🔔 ${count > 0 ? `<span class="notif-count">${count}</span>` : ''}`;
    actions.appendChild(bell);

    const panel = document.createElement('div');
    panel.id = 'notifPanel';
    panel.className = 'notif-panel';
    actions.appendChild(panel);

    bell.addEventListener('click', (e) => {
      e.stopPropagation();
      panel.classList.toggle('show');
      renderPanel(user);
    });

    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && e.target !== bell) {
        panel.classList.remove('show');
      }
    });
  }

  function renderPanel(user) {
    const panel = document.getElementById('notifPanel');
    if (!panel) return;
    const items = getAll(user.id);
    if (!items.length) {
      panel.innerHTML = `<div class="notif-empty">No notifications<br><span style="font-family:'Padauk',sans-serif;">အသိပေးချက် မရှိပါ</span></div>`;
      return;
    }
    panel.innerHTML = `
      <div class="notif-header">
        <span>NOTIFICATIONS</span>
        <button class="notif-clear" id="notifClearAll">MARK ALL READ</button>
      </div>
      <div class="notif-list">
        ${items.slice(0, 20).map(n => `
          <div class="notif-item ${n.read ? 'read' : 'unread'}" data-id="${n.id}">
            <div class="notif-icon">${n.icon}</div>
            <div class="notif-body">
              <div class="notif-title">${n.title}</div>
              <div class="notif-my">${n.my}</div>
              <div class="notif-time">${timeAgo(n.at)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    panel.querySelectorAll('.notif-item').forEach(el => {
      el.addEventListener('click', () => {
        markRead(user.id, el.dataset.id);
        el.classList.remove('unread');
        el.classList.add('read');
        renderBell();
      });
    });
    const clearBtn = document.getElementById('notifClearAll');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        markAllRead(user.id);
        renderBell();
        renderPanel(user);
      });
    }
  }

  function timeAgo(ts) {
    const diff = Date.now() - ts;
    const s = Math.floor(diff / 1000);
    if (s < 60) return 'just now';
    const m = Math.floor(s / 60);
    if (m < 60) return m + 'm ago';
    const h = Math.floor(m / 60);
    if (h < 24) return h + 'h ago';
    return Math.floor(h / 24) + 'd ago';
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(renderBell, 100);
  });

  window.BLT_NOTIF = { push, getAll, markRead, markAllRead, unreadCount, clear, renderBell };
})();
