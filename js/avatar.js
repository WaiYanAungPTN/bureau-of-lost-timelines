/* Bureau of Lost Timelines — Avatar Upload */
(function () {
  'use strict';

  function setAvatar(userId, dataUrl) {
    if (!dataUrl || dataUrl.length > 500000) {
      return { ok: false, error: 'Image too large (max ~400KB)' };
    }
    const user = window.BLT_AUTH.findUserById(userId);
    if (!user) return { ok: false, error: 'User not found' };

    window.BLT_AUTH.updateUser(userId, { avatar: dataUrl });
    window.BLT_AUTH.addXP(userId, window.BLT_AUTH.XP_REWARDS.AVATAR_UPLOAD, 'Avatar uploaded');
    if (window.BLT_BADGES) window.BLT_BADGES.checkAndAward(userId);
    return { ok: true };
  }

  function removeAvatar(userId) {
    window.BLT_AUTH.updateUser(userId, { avatar: null });
    return { ok: true };
  }

  function renderAvatar(container, user) {
    if (!container || !user) return;
    if (user.avatar) {
      container.innerHTML = `<img src="${user.avatar}" alt="avatar">`;
      container.classList.add('has-img');
    } else {
      container.textContent = (user.displayName || '?').charAt(0).toUpperCase();
      container.style.color = user.avatarColor || '#33ff66';
      container.classList.remove('has-img');
    }
  }

  function initUploadModal(user) {
    const modal = document.createElement('div');
    modal.className = 'avatar-modal show';
    modal.id = 'avatarModal';
    modal.innerHTML = `
      <div class="avatar-modal-inner">
        <button class="avatar-modal-close" id="avatarClose">✕</button>
        <h3>UPLOAD AVATAR</h3>
        <p class="avatar-hint">ပရိုဖိုင် ဓာတ်ပုံ တင်ပါ (max 400KB)</p>
        <div class="avatar-preview" id="avatarPreview">?</div>
        <input type="file" id="avatarFile" accept="image/*" class="avatar-file">
        <label for="avatarFile" class="avatar-file-label">📁 Choose Image</label>
        <div class="avatar-actions">
          <button class="avatar-btn" id="avatarSave" disabled>SAVE AVATAR</button>
          ${user.avatar ? '<button class="avatar-btn danger" id="avatarRemove">REMOVE</button>' : ''}
        </div>
        <div class="avatar-error" id="avatarError"></div>
      </div>
    `;
    document.body.appendChild(modal);

    let pendingData = null;
    const preview = modal.querySelector('#avatarPreview');
    const fileInput = modal.querySelector('#avatarFile');
    const saveBtn = modal.querySelector('#avatarSave');
    const errorEl = modal.querySelector('#avatarError');

    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 500000) {
        errorEl.textContent = '⚠ File too large (max 400KB)';
        return;
      }
      const reader = new FileReader();
      reader.onload = ev => {
        pendingData = ev.target.result;
        preview.innerHTML = `<img src="${pendingData}" alt="preview">`;
        saveBtn.disabled = false;
        errorEl.textContent = '';
      };
      reader.readAsDataURL(file);
    });

    saveBtn.addEventListener('click', () => {
      if (!pendingData) return;
      const res = setAvatar(user.id, pendingData);
      if (!res.ok) { errorEl.textContent = '⚠ ' + res.error; return; }
      alert('✓ Avatar saved!');
      modal.remove();
      window.location.reload();
    });

    modal.querySelector('#avatarClose').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', e => {
      if (e.target === modal) modal.remove();
    });

    const removeBtn = modal.querySelector('#avatarRemove');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        if (!confirm('Remove avatar?')) return;
        removeAvatar(user.id);
        modal.remove();
        window.location.reload();
      });
    }
  }

  window.BLT_AVATAR = { setAvatar, removeAvatar, renderAvatar, initUploadModal };
})();
