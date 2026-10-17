/* Bureau of Lost Timelines — Leaderboard */
(function () {
  'use strict';

  let sortBy = 'xp';

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lb-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.lb-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        sortBy = tab.dataset.sort;
        render();
      });
    });
    render();
  });

  function render() {
    const A = window.BLT_AUTH;
    const me = A.getCurrentUser();
    let users = A.getUsers().filter(u => u.role !== 'OWNER');

    users.sort((a, b) => {
      if (sortBy === 'xp') return (b.xp || 0) - (a.xp || 0);
      if (sortBy === 'approved') return (b.approvedCount || 0) - (a.approvedCount || 0);
      if (sortBy === 'badges') return (b.badges || []).length - (a.badges || []).length;
      if (sortBy === 'missions') return (b.completedMissions || []).length - (a.completedMissions || []).length;
      return 0;
    });

    const list = document.getElementById('lbList');
    if (!list) return;
    if (!users.length) {
      list.innerHTML = '<div style="text-align:center;padding:40px;color:#228844;font-family:\'Padauk\',sans-serif;">ဝန်ထမ်း မရှိသေးပါ။</div>';
      return;
    }

    list.innerHTML = users.slice(0, 50).map((u, i) => {
      const R = A.ROLES[u.role] || A.ROLES.MEMBER;
      const isMe = me && me.id === u.id;
      const rank = i + 1;
      const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '#' + rank;
      const badgesCount = (u.badges || []).length;

      return `
        <div class="lb-row ${isMe ? 'me' : ''} ${rank <= 3 ? 'top-' + rank : ''}">
          <div class="lb-rank">${medal}</div>
          <div class="lb-avatar" style="color:${u.avatarColor || '#33ff66'}">
            ${u.avatar ? `<img src="${u.avatar}" alt="">` : (u.displayName || '?').charAt(0).toUpperCase()}
          </div>
          <div class="lb-info">
            <div class="lb-name">${u.displayName}${isMe ? ' <span class="me-badge">YOU</span>' : ''}</div>
            <div class="lb-role">${R.label} · ${R.my}</div>
          </div>
          <div class="lb-stats">
            <div class="lb-stat"><span>${u.xp || 0}</span>XP</div>
            <div class="lb-stat"><span>${u.approvedCount || 0}</span>APP</div>
            <div class="lb-stat"><span>${badgesCount}</span>🏅</div>
          </div>
        </div>
      `;
    }).join('');
  }
})();
