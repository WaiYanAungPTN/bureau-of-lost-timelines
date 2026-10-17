/* Bureau of Lost Timelines — Review Queue */
(function () {
  'use strict';

  let currentStatus = 'pending';

  document.addEventListener('DOMContentLoaded', () => {
    const A = window.BLT_AUTH;
    const user = A.getCurrentUser();
    if (!user) { window.location.href = 'auth.html'; return; }

    if (!A.can(user, 'review')) {
      alert('Access denied: Editor+ required');
      window.location.href = 'dashboard.html';
      return;
    }

    if (A.can(user, 'appoint_editor')) {
      const link = document.getElementById('manageRolesLink');
      if (link) link.style.display = 'inline-block';
    }

    document.querySelectorAll('.rt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.rt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStatus = btn.dataset.status;
        render(user);
      });
    });

    render(user);
  });

  function render(user) {
    const SUB = window.BLT_SUBMISSIONS;
    const list = document.getElementById('reviewList');
    if (!list) return;
    const pending = SUB.getByStatus('pending');
    const countEl = document.getElementById('countPending');
    if (countEl) countEl.textContent = pending.length;

    const items = SUB.getByStatus(currentStatus);
    if (!items.length) {
      list.innerHTML = `<div class="empty-note">No ${currentStatus} submissions.</div>`;
      return;
    }

    const A = window.BLT_AUTH;
    const isChair = ['CHAIRMAN', 'OWNER'].includes(user.role);

    list.innerHTML = items.map(sub => {
      const alreadyApproved = sub.approvals.some(a => a.byId === user.id);
      const needed = isChair ? 1 : 3;
      const progress = isChair ? 1 : sub.approvals.length;

      return `
        <div class="review-card">
          <div class="rc-header">
            <div>
              <span class="rc-type">${sub.type.toUpperCase()}</span>
              <span class="rc-title">${sub.title}</span>
            </div>
            <span class="rc-status ${sub.status}">${sub.status.toUpperCase()}</span>
          </div>
          <div class="rc-my">${sub.my || ''}</div>
          <div class="rc-meta">By <strong>${sub.authorName}</strong> · ${new Date(sub.createdAt).toLocaleString()}</div>
          <div class="rc-excerpt">${(sub.excerpt || sub.content || '').slice(0, 300)}${(sub.content || '').length > 300 ? '…' : ''}</div>
          ${sub.mediaUrl ? `<img class="rc-image" src="${sub.mediaUrl}" onerror="this.style.display='none'">` : ''}

          ${currentStatus === 'pending' ? `
            <div class="rc-progress">
              <div class="rc-progress-label">Approvals: ${progress}/${needed} ${isChair ? '(instant)' : '(needs 3 editors)'}</div>
              <div class="rc-progress-bar"><div class="rc-progress-fill" style="width:${Math.min(100, (progress/needed)*100)}%"></div></div>
              ${sub.approvals.length ? `<div class="rc-approvers">Approved by: ${sub.approvals.map(a => a.byRole).join(', ')}</div>` : ''}
            </div>
            <div class="rc-actions">
              <button class="rc-btn approve" data-id="${sub.id}" ${alreadyApproved ? 'disabled' : ''}>
                ${alreadyApproved ? '✓ YOU APPROVED' : '✓ APPROVE'}
              </button>
              <button class="rc-btn reject" data-id="${sub.id}">✕ REJECT</button>
              <button class="rc-btn view" data-id="${sub.id}">VIEW FULL</button>
            </div>
          ` : `
            <div class="rc-reviewed">Reviewed: ${new Date(sub.reviewedAt).toLocaleString()}</div>
          `}
        </div>
      `;
    }).join('');

    list.querySelectorAll('.rc-btn.approve').forEach(btn => {
      btn.addEventListener('click', () => {
        const res = SUB.approve(btn.dataset.id, user.id);
        if (!res.ok) { alert('⚠ ' + res.error); return; }
        if (res.decisive) alert('✓ PUBLISHED to main archive');
        else alert(`✓ Approval recorded (${res.approvals}/3)`);
        render(user);
      });
    });

    list.querySelectorAll('.rc-btn.reject').forEach(btn => {
      btn.addEventListener('click', () => {
        const reason = prompt('Reason for rejection (optional):') || '';
        const res = SUB.reject(btn.dataset.id, user.id, reason);
        if (!res.ok) { alert('⚠ ' + res.error); return; }
        alert('✕ Rejected');
        render(user);
      });
    });

    list.querySelectorAll('.rc-btn.view').forEach(btn => {
      btn.addEventListener('click', () => {
        const sub = SUB.getAll().find(s => s.id === btn.dataset.id);
        if (!sub) return;
        alert(`[${sub.type.toUpperCase()}] ${sub.title}\n\n${sub.my || ''}\n\n${sub.content || ''}`);
      });
    });
  }
})();
