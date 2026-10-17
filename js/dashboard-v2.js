/* Bureau of Lost Timelines — Dashboard v2 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const A = window.BLT_AUTH;
    const M = window.BLT_MISSIONS;
    const SUB = window.BLT_SUBMISSIONS;
    const B = window.BLT_BADGES;

    const user = A.getCurrentUser();
    if (!user) { window.location.href = 'auth.html'; return; }

    B.checkAndAward(user.id);
    const fresh = A.findUserById(user.id);
    const R = A.ROLES[fresh.role] || A.ROLES.MEMBER;

    // Avatar
    if (window.BLT_AVATAR) {
      window.BLT_AVATAR.renderAvatar(document.getElementById('avatar'), fresh);
      const editBtn = document.getElementById('avatarEdit');
      if (editBtn) editBtn.addEventListener('click', () => {
        window.BLT_AVATAR.initUploadModal(fresh);
      });
    }

    // Profile
    document.getElementById('profileName').textContent = fresh.displayName;
    document.getElementById('profileEmail').textContent = fresh.email + (fresh.emailVerified ? ' ✓' : ' (unverified)');
    document.getElementById('roleBadge').textContent = R.label;
    document.getElementById('roleMy').textContent = R.my;

    // XP bar
    const nextRole = getNextRole(fresh.role, fresh.xp);
    const currentXP = fresh.xp;
    const nextXP = nextRole ? A.ROLES[nextRole].xp : currentXP;
    const prevXP = R.xp;
    const pct = nextRole ? Math.min(100, ((currentXP - prevXP) / (nextXP - prevXP)) * 100) : 100;
    document.getElementById('xpFill').style.width = pct + '%';
    document.getElementById('xpText').textContent = nextRole
      ? `${currentXP} / ${nextXP} XP → ${A.ROLES[nextRole].label}`
      : `${currentXP} XP · MAX RANK`;

    // Stats
    document.getElementById('statSubmissions').textContent = fresh.submissionCount || 0;
    document.getElementById('statApproved').textContent = fresh.approvedCount || 0;
    document.getElementById('statMissions').textContent = (fresh.completedMissions || []).length;
    document.getElementById('statBadges').textContent = (fresh.badges || []).length;

    // Badge progress
    const bstats = B.getStats(fresh.id);
    document.getElementById('dashBadgeFill').style.width = bstats.pct + '%';
    document.getElementById('dashBadgeText').textContent = bstats.earned + ' / ' + bstats.total + ' (' + bstats.pct + '%)';

    // Verify banner
    if (!fresh.emailVerified) {
      const banner = document.getElementById('verifyBanner');
      if (banner) banner.style.display = 'block';
    }

    // Show links
    if (A.can(fresh, 'review')) {
      const link = document.getElementById('reviewLink');
      if (link) link.style.display = 'inline-block';
    }
    if (['CHAIRMAN', 'OWNER'].includes(fresh.role)) {
      const link = document.getElementById('backupLink');
      if (link) link.style.display = 'inline-block';
    }

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', () => {
      A.logout();
      window.location.href = 'index.html';
    });

    renderMissions(fresh, M);
    renderSubmissions(fresh, SUB);
    renderActivity(fresh);
  });

  function getNextRole(role, xp) {
    const A = window.BLT_AUTH;
    const current = A.ROLES[role];
    if (!current || current.level >= A.ROLES.ADVISOR.level) return null;
    const order = ['PERMANENT_MEMBER', 'SENIOR', 'AGENT', 'SENIOR_AGENT', 'TEAM_LEADER', 'ADMINISTRATOR', 'ADVISOR'];
    for (const r of order) {
      if (xp < A.ROLES[r].xp) return r;
    }
    return null;
  }

  function renderMissions(user, M) {
    const wrap = document.getElementById('dashMissions');
    if (!wrap) return;
    const all = M.getMissions();
    const A = window.BLT_AUTH;
    const available = all.filter(m => {
      const roleLevel = (A.ROLES[user.role] || { level: 0 }).level;
      const minLevel = (A.ROLES[m.minRole] || { level: 0 }).level;
      return roleLevel >= minLevel && !M.isCompleted(user.id, m.id);
    }).slice(0, 4);

    if (!available.length) {
      wrap.innerHTML = '<div style="color:#228844;font-size:12px;font-family:\'Padauk\',sans-serif;">တာဝန် အားလုံး ပြီးစီးပါပြီ။</div>';
      return;
    }
    wrap.innerHTML = available.map(m => `
      <div class="mission-mini">
        <div class="mm-status">ACTIVE</div>
        <div class="mm-title">${m.title}</div>
        <div class="mm-my">${m.my}</div>
        <div class="mm-xp">+${m.xp} XP</div>
      </div>
    `).join('');
  }

  function renderSubmissions(user, SUB) {
    const wrap = document.getElementById('dashSubmissions');
    if (!wrap) return;
    const subs = SUB.getByAuthor(user.id).slice(0, 5);
    if (!subs.length) {
      wrap.innerHTML = '<div style="color:#228844;font-size:12px;font-family:\'Padauk\',sans-serif;">တင်သွင်းချက် မရှိသေးပါ။ <a href="submit.html" style="color:#33ff66;">တင်သွင်းပါ →</a></div>';
      return;
    }
    wrap.innerHTML = subs.map(s => `
      <div class="submission-row">
        <div class="sr-title">[${s.type.toUpperCase()}] ${s.title}</div>
        <div class="sr-status ${s.status}">${s.status.toUpperCase()}${s.status === 'pending' ? ' (' + s.approvals.length + '/3)' : ''}</div>
      </div>
    `).join('');
  }

  function renderActivity(user) {
    const wrap = document.getElementById('dashActivity');
    if (!wrap) return;
    const log = window.BLT_AUTH.getXPLog().filter(l => l.userId === user.id).slice(0, 15);
    if (!log.length) {
      wrap.innerHTML = '<div style="color:#228844;font-size:12px;font-family:\'Padauk\',sans-serif;">မှတ်တမ်း မရှိသေးပါ။</div>';
      return;
    }
    wrap.innerHTML = log.map(l => `
      <div class="activity-row">
        <span class="ar-reason">${l.reason}</span>
        <span class="ar-amount">${l.amount > 0 ? '+' : ''}${l.amount} XP</span>
      </div>
    `).join('');
  }
})();
