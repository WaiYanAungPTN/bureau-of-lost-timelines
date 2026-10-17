/* Bureau of Lost Timelines — Badges Page */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const A = window.BLT_AUTH;
    const B = window.BLT_BADGES;
    const user = A.getCurrentUser();
    if (!user) { window.location.href = 'auth.html'; return; }

    B.checkAndAward(user.id);
    const earned = B.getEarned(user.id);
    const allBadges = Object.values(B.BADGES);
    const stats = B.getStats(user.id);

    document.getElementById('badgeProgress').style.width = stats.pct + '%';
    document.getElementById('badgeCount').textContent = stats.earned + ' / ' + stats.total + ' (' + stats.pct + '%)';

    const grid = document.getElementById('badgesGrid');
    if (!grid) return;
    grid.innerHTML = allBadges.map(b => {
      const has = earned.includes(b.id);
      const isSecret = b.secret && !has;
      return `
        <div class="badge-card ${has ? 'earned' : 'locked'}">
          ${b.secret ? '<div class="badge-secret">🔒 SECRET</div>' : ''}
          <div class="badge-icon">${isSecret ? '❓' : b.icon}</div>
          <div class="badge-title">${isSecret ? '???' : b.title}</div>
          <div class="badge-my">${isSecret ? 'လျှို့ဝှက်' : b.my}</div>
          <div class="badge-desc">${isSecret ? 'Hidden achievement' : b.desc}</div>
          <div class="badge-desc-my">${isSecret ? '' : (b.descMy || '')}</div>
          <div class="badge-status">${has ? '✓ EARNED' : '🔒 LOCKED'}</div>
        </div>
      `;
    }).join('');
  });
})();
