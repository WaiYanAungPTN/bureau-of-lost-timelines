/* Bureau of Lost Timelines — Submit Form */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const A = window.BLT_AUTH;
    const user = A.getCurrentUser();
    if (!user) { window.location.href = 'auth.html'; return; }

    if (!A.can(user, 'submit')) {
      alert('You must be at least PERMANENT_MEMBER rank with verified email to submit.');
      window.location.href = 'dashboard.html';
      return;
    }

    const typeSel = document.getElementById('subType');
    const categoryRow = document.getElementById('categoryRow');
    const mediaRow = document.getElementById('mediaRow');

    function toggleFields() {
      const t = typeSel.value;
      categoryRow.style.display = t === 'story' ? 'block' : 'none';
      mediaRow.style.display = t === 'photo' ? 'block' : 'none';
    }
    typeSel.addEventListener('change', toggleFields);
    toggleFields();

    let pendingImg = null;
    const fileInput = document.getElementById('subMediaFile');
    if (fileInput) {
      fileInput.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) { alert('Max 2MB'); return; }
        const reader = new FileReader();
        reader.onload = ev => {
          pendingImg = ev.target.result;
          document.getElementById('subMediaUrl').value = '(uploaded)';
        };
        reader.readAsDataURL(file);
      });
    }

    document.getElementById('submitBtn').addEventListener('click', () => {
      const result = document.getElementById('submitResult');
      result.textContent = '';

      const data = {
        type: typeSel.value,
        title: document.getElementById('subTitle').value.trim(),
        my: document.getElementById('subMy').value.trim(),
        category: document.getElementById('subCategory').value,
        excerpt: document.getElementById('subExcerpt').value.trim(),
        content: document.getElementById('subContent').value.trim(),
        contentMy: document.getElementById('subContentMy').value.trim(),
        mediaUrl: pendingImg || document.getElementById('subMediaUrl').value.trim(),
        tags: document.getElementById('subTags').value.split(',').map(t => t.trim()).filter(Boolean)
      };

      if (!data.title) { result.textContent = '⚠ Title required'; return; }
      if (!data.content && data.type !== 'photo') { result.textContent = '⚠ Content required'; return; }
      if (data.type === 'photo' && !data.mediaUrl) { result.textContent = '⚠ Image required'; return; }

      const res = window.BLT_SUBMISSIONS.create(user.id, data);
      if (!res.ok) { result.textContent = '⚠ ' + res.error; return; }

      result.innerHTML = `✓ SUBMITTED — ID: ${res.submission.id}<br><span style="font-family:'Padauk',sans-serif;color:#7dffa5;">3 Editors သို့မဟုတ် 1 Chairman မှ အတည်ပြုရန် စောင့်ဆိုင်းနေသည်။</span>`;

      ['subTitle','subMy','subExcerpt','subContent','subContentMy','subMediaUrl','subTags'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      pendingImg = null;

      setTimeout(() => { window.location.href = 'dashboard.html'; }, 2000);
    });
  });
})();
