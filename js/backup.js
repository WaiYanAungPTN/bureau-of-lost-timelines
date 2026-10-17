/* Bureau of Lost Timelines — Backup & Restore */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const A = window.BLT_AUTH;
    const user = A.getCurrentUser();
    if (!user) { window.location.href = 'auth.html'; return; }

    if (!['CHAIRMAN', 'OWNER'].includes(user.role)) {
      const gate = document.getElementById('backupGate');
      if (gate) gate.style.display = 'block';
      return;
    }
    const gate = document.getElementById('backupGate');
    const content = document.getElementById('backupContent');
    if (gate) gate.style.display = 'none';
    if (content) content.style.display = 'block';

    renderStats();

    document.getElementById('exportFull').addEventListener('click', () => exportData('full'));
    document.getElementById('exportUsers').addEventListener('click', () => exportData('users'));
    document.getElementById('exportContent').addEventListener('click', () => exportData('content'));

    let pendingImport = null;
    document.getElementById('importFile').addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        try {
          const data = JSON.parse(ev.target.result);
          pendingImport = data;
          const summary = summarize(data);
          document.getElementById('importPreview').innerHTML = `
            <div class="import-summary">
              <div>✓ Valid backup file</div>
              <div>Users: ${summary.users}</div>
              <div>Files: ${summary.files}</div>
              <div>News: ${summary.news}</div>
              <div>Photos: ${summary.photos}</div>
              <div>Stories: ${summary.stories}</div>
              <div>Submissions: ${summary.submissions}</div>
              <div>Exported: ${summary.exportedAt || 'unknown'}</div>
            </div>
          `;
          document.getElementById('importConfirm').disabled = false;
        } catch (err) {
          document.getElementById('importPreview').innerHTML = `<div style="color:#ff5555;">⚠ Invalid file: ${err.message}</div>`;
          pendingImport = null;
          document.getElementById('importConfirm').disabled = true;
        }
      };
      reader.readAsText(file);
    });

    document.getElementById('importConfirm').addEventListener('click', () => {
      if (!pendingImport) return;
      if (!confirm('⚠ WARNING: This will overwrite ALL current data. Continue?')) return;
      if (!confirm('Are you ABSOLUTELY sure?')) return;
      restoreData(pendingImport);
      alert('✓ Data restored! Reloading...');
      location.reload();
    });

    document.getElementById('resetAll').addEventListener('click', () => {
      if (!confirm('⚠ Delete ALL data?')) return;
      if (prompt('Type "DELETE ALL" to confirm:') !== 'DELETE ALL') {
        alert('Cancelled');
        return;
      }
      Object.keys(localStorage).forEach(k => {
        if (k.startsWith('blt:')) localStorage.removeItem(k);
      });
      alert('All data cleared. Reloading...');
      location.reload();
    });
  });

  function renderStats() {
    const A = window.BLT_AUTH;
    const S = window.BLT_STORAGE;
    const SUB = window.BLT_SUBMISSIONS;
    const stats = {
      users: A.getUsers().length,
      files: S.getFiles().length,
      news: S.getNews().length,
      photos: S.getPhotos().length,
      stories: S.getStories().length,
      submissions: SUB ? SUB.getAll().length : 0
    };
    const el = document.getElementById('backupStats');
    if (!el) return;
    el.innerHTML = `
      <div class="stat-grid">
        ${Object.entries(stats).map(([k, v]) => `
          <div class="stat-item">
            <div class="stat-item-val">${v}</div>
            <div class="stat-item-label">${k.toUpperCase()}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  function gatherAll() {
    const A = window.BLT_AUTH;
    const S = window.BLT_STORAGE;
    const SUB = window.BLT_SUBMISSIONS;
    return {
      meta: {
        app: 'Bureau of Lost Timelines',
        version: '2.0',
        exportedAt: new Date().toISOString(),
        exportedBy: A.getCurrentUser().email
      },
      auth: {
        users: A.getUsers(),
        editorIds: A.getEditorIds(),
        xpLog: A.getXPLog(),
        notifications: A.get('blt:auth:notifications', {}),
        badges: A.get('blt:auth:badges', {}),
        pendingVerifies: A.get('blt:auth:pending_verifies', {})
      },
      content: {
        files: S.getFiles(),
        news: S.getNews(),
        photos: S.getPhotos(),
        stories: S.getStories(),
        missions: window.BLT_MISSIONS ? window.BLT_MISSIONS.getCustomMissions() : []
      },
      submissions: SUB ? SUB.getAll() : [],
      missionProgress: A.get('blt:missions:progress', {})
    };
  }

  function exportData(type) {
    const all = gatherAll();
    let data = all;
    let filename = 'blt-backup-';

    if (type === 'users') {
      data = { meta: all.meta, auth: all.auth };
      filename += 'users-';
    } else if (type === 'content') {
      data = { meta: all.meta, content: all.content, submissions: all.submissions };
      filename += 'content-';
    } else {
      filename += 'full-';
    }

    filename += new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-') + '.json';

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    alert('✓ Exported: ' + filename);
  }

  function summarize(data) {
    return {
      users: (data.auth && data.auth.users || []).length,
      files: (data.content && data.content.files || []).length,
      news: (data.content && data.content.news || []).length,
      photos: (data.content && data.content.photos || []).length,
      stories: (data.content && data.content.stories || []).length,
      submissions: (data.submissions || []).length,
      exportedAt: data.meta && data.meta.exportedAt
    };
  }

  function restoreData(data) {
    const A = window.BLT_AUTH;
    if (data.auth) {
      if (data.auth.users) A.set('blt:auth:users', data.auth.users);
      if (data.auth.editorIds) A.set('blt:auth:editor_ids', data.auth.editorIds);
      if (data.auth.xpLog) A.set('blt:auth:xp_log', data.auth.xpLog);
      if (data.auth.notifications) A.set('blt:auth:notifications', data.auth.notifications);
      if (data.auth.badges) A.set('blt:auth:badges', data.auth.badges);
      if (data.auth.pendingVerifies) A.set('blt:auth:pending_verifies', data.auth.pendingVerifies);
    }
    if (data.content) {
      const S = window.BLT_STORAGE;
      if (data.content.files) S.setFiles(data.content.files);
      if (data.content.news) S.setNews(data.content.news);
      if (data.content.photos) S.setPhotos(data.content.photos);
      if (data.content.stories) S.setStories(data.content.stories);
      if (data.content.missions && window.BLT_MISSIONS) {
        window.BLT_MISSIONS.saveCustomMissions(data.content.missions);
      }
    }
    if (data.submissions) A.set('blt:submissions:list', data.submissions);
    if (data.missionProgress) A.set('blt:missions:progress', data.missionProgress);
  }
})();
