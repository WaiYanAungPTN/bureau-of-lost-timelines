/* Bureau of Lost Timelines — Header Auth Widget */
(function () {
  'use strict';

  function init() {
    const A = window.BLT_AUTH;
    if (!A) return;

    const actions = document.querySelector('.header-actions');
    if (!actions) return;

    // Don't duplicate if auth widget already exists
    if (document.querySelector('.auth-widget')) return;

    const user = A.getCurrentUser();
    const widget = document.createElement('div');
    widget.className = 'auth-widget';

    if (user) {
      const R = A.ROLES[user.role] || A.ROLES.MEMBER;
      widget.innerHTML = `
        <a href="dashboard.html" class="user-chip" title="${R.label} · ${user.xp} XP">
          <span class="user-role">${R.label}</span>
          <span class="user-name">${user.displayName}</span>
          <span class="user-xp">${user.xp} XP</span>
        </a>
        <button class="logout-btn" id="navLogout">LOGOUT</button>
      `;
      actions.appendChild(widget);

      const logoutBtn = document.getElementById('navLogout');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
          A.logout();
          window.location.href = 'index.html';
        });
      }
    } else {
      widget.innerHTML = `
        <a href="auth.html" class="login-link">🔑 LOGIN</a>
        <a href="auth.html#register" class="register-link">📝 ENLIST</a>
      `;
      actions.appendChild(widget);
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
