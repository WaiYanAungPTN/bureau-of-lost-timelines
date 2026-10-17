/* Bureau of Lost Timelines — Role Management */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const A = window.BLT_AUTH;
    const user = A.getCurrentUser();
    if (!user || !A.can(user, 'appoint_editor')) {
      alert('Access denied: Chairman or Owner only');
      window.location.href = 'dashboard.html';
      return;
    }
    render(user);
  });

  function render(me) {
    const A = window.BLT_AUTH;
    const users = A.getUsers();
    const editorIds = A.getEditorIds();
    const slotsEl = document.getElementById('editorSlots');
    if (slotsEl) slotsEl.textContent = editorIds.length + '/3';

    const list = document.getElementById('roleUserList');
    if (!list) return;
    const isOwner = me.role === 'OWNER';

    list.innerHTML = users
      .filter(u => u.role !== 'OWNER')
      .map(u => {
        const R = A.ROLES[u.role] || A.ROLES.MEMBER;
        const isEditor = u.role === 'EDITOR';
        const isChair = u.role === 'CHAIRMAN';

        let actions = '';
        if (isOwner) {
          if (!isChair) actions += `<button class="rc-btn" data-action="chair" data-id="${u.id}">MAKE CHAIRMAN</button>`;
          if (!isEditor && !isChair) actions += `<button class="rc-btn" data-action="editor" data-id="${u.id}">MAKE EDITOR</button>`;
          if (isEditor) actions += `<button class="rc-btn reject" data-action="uneditor" data-id="${u.id}">REMOVE EDITOR</button>`;
        } else {
          if (!isChair && !isEditor) actions += `<button class="rc-btn" data-action="editor" data-id="${u.id}">MAKE EDITOR</button>`;
          if (isEditor) actions += `<button class="rc-btn reject" data-action="uneditor" data-id="${u.id}">REMOVE EDITOR</button>`;
        }

        return `
          <div class="review-card">
            <div class="rc-header">
              <div><span class="rc-type">${R.label}</span><span
