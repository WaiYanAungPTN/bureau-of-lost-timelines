/* Bureau of Lost Timelines — Missions Page */
(function () {
  'use strict';

  let currentFilter = 'available';

  function init() {
    const A = window.BLT_AUTH;
    const user = A.getCurrentUser();
    if (!user) { window.location.href = 'auth.html'; return; }

    document.querySelectorAll('.mf-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mf-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        render(user);
      });
    });
    render(user);
  }

  function render(user) {
    const M = window.BLT_MISSIONS;
    const A = window.BLT_AUTH;
    const list = document.getElementById('missionsList');
    if (!list) return;
    const all = M.getMissions();

    let filtered = all;
    if (currentFilter === 'available') {
      filtered = all.filter(m => {
        if (M.isCompleted(user.id, m.id)) return false;
        const roleLevel = (A.ROLES[user.role] || { level: 0 }).level;
        const minLevel = (A.ROLES[m.minRole] || { level: 0 }).level;
        return roleLevel >= minLevel;
      });
    } else if (currentFilter === 'completed') {
      filtered = all.filter(m => M.isCompleted(user.id, m.id));
    }

    if (!filtered.length) {
      list.innerHTML = '<div class="empty-note">No missions in this category.</div>';
      return;
    }

    list.innerHTML = filtered.map(m => {
      const done = M.isCompleted(user.id, m.id);
      const roleLevel = (A.ROLES[user.role] || { level: 0 }).level;
      const minLevel = (A.ROLES[m.minRole] || { level: 0 }).level;
      const locked = roleLevel < minLevel;

      return `
        <div class="mission-card ${done ? 'done' : ''} ${locked ? 'locked' : ''}">
          <div class="mission-header">
            <div class="mission-title">${m.title}</div>
            <div class="mission-xp">+${m.xp} XP</div>
          </div>
          <div class="mission-my">${m.my}</div>
          <div class="mission-desc">${m.desc}</div>
          <div class="mission-desc-my">${m.descMy || ''}</div>
          <div class="mission-footer">
            <span class="mission-role">MIN: ${m.minRole}</span>
            ${done ? '<span class="mission-badge done">✓ COMPLETED</span>' :
              locked ? '<span class="mission-badge locked">🔒 LOCKED</span>' :
              `<button class="mission-complete-btn" data-id="${m.id}">COMPLETE →</button>`}
          </div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.mission-complete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const res = M.completeMission(user.id, btn.dataset.id);
        if (!res.ok) { alert('⚠ ' + res.error); return; }
        alert(`✅ Mission complete! +${res.xp} XP${res.promoted ? '\n\n🎉 PROMOTED TO ' + A.ROLES[res.newRole].label : ''}`);
        window.location.reload();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
