/* Bureau of Lost Timelines — Submissions */
(function () {
  'use strict';

  const NS = 'blt:submissions:';
  const KEY = NS + 'list';

  function getAll() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch (e) { return []; }
  }
  function save(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
  }

  function create(userId, data) {
    const A = window.BLT_AUTH;
    const user = A.findUserById(userId);
    if (!user) return { ok: false, error: 'Not logged in' };

    const list = getAll();
    const sub = {
      id: 'sub_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
      authorId: userId,
      authorName: user.displayName,
      type: data.type,
      title: data.title || 'Untitled',
      my: data.my || '',
      content: data.content || '',
      contentMy: data.contentMy || '',
      mediaUrl: data.mediaUrl || '',
      category: data.category || 'deep',
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      status: 'pending',
      approvals: [],
      rejections: [],
      createdAt: Date.now(),
      reviewedAt: null
    };
    list.unshift(sub);
    save(list);

    A.updateUser(userId, { submissionCount: (user.submissionCount || 0) + 1 });
    A.addXP(userId, A.XP_REWARDS.SUBMISSION, 'Submission: ' + sub.title);

    return { ok: true, submission: sub };
  }

  function getByAuthor(userId) {
    return getAll().filter(s => s.authorId === userId);
  }

  function getPending() {
    return getAll().filter(s => s.status === 'pending');
  }

  function getApproved() {
    return getAll().filter(s => s.status === 'approved');
  }

  function getByStatus(status) {
    return getAll().filter(s => s.status === status);
  }

  function approve(subId, reviewerId) {
    const A = window.BLT_AUTH;
    const reviewer = A.findUserById(reviewerId);
    if (!reviewer || !A.can(reviewer, 'approve')) {
      return { ok: false, error: 'Insufficient permission' };
    }
    const list = getAll();
    const sub = list.find(s => s.id === subId);
    if (!sub) return { ok: false, error: 'Submission not found' };
    if (sub.status === 'approved') return { ok: false, error: 'Already approved' };

    if (['CHAIRMAN', 'OWNER'].includes(reviewer.role)) {
      sub.status = 'approved';
      sub.approvals.push({ byId: reviewerId, byRole: reviewer.role, at: Date.now(), decisive: true });
      sub.reviewedAt = Date.now();
      save(list);
      finalizeApproval(sub);
      return { ok: true, decisive: true };
    }

    if (sub.approvals.some(a => a.byId === reviewerId)) {
      return { ok: false, error: 'You already approved this' };
    }
    sub.approvals.push({ byId: reviewerId, byRole: reviewer.role, at: Date.now() });

    if (sub.approvals.length >= 3) {
      sub.status = 'approved';
      sub.reviewedAt = Date.now();
      save(list);
      finalizeApproval(sub);
      return { ok: true, decisive: true, approvals: sub.approvals.length };
    }

    save(list);
    A.addXP(reviewerId, A.XP_REWARDS.EDITOR_APPROVAL, 'Reviewed submission');
    return { ok: true, approvals: sub.approvals.length, needed: 3 };
  }

  function reject(subId, reviewerId, reason) {
    const A = window.BLT_AUTH;
    const reviewer = A.findUserById(reviewerId);
    if (!reviewer || !A.can(reviewer, 'approve')) {
      return { ok: false, error: 'Insufficient permission' };
    }
    const list = getAll();
    const sub = list.find(s => s.id === subId);
    if (!sub) return { ok: false, error: 'Submission not found' };

    sub.status = 'rejected';
    sub.rejections.push({ byId: reviewerId, byRole: reviewer.role, at: Date.now(), reason: reason || '' });
    sub.reviewedAt = Date.now();
    save(list);

    A.addXP(sub.authorId, A.XP_REWARDS.SUBMISSION_REJECTED, 'Submission rejected: ' + sub.title);

    if (window.BLT_NOTIF) {
      window.BLT_NOTIF.push(sub.authorId, {
        type: 'rejection',
        title: 'Submission rejected',
        my: 'တင်သွင်းချက် ပယ်ချခံရသည်: ' + sub.title,
        icon: '✕'
      });
    }
    return { ok: true };
  }

  function finalizeApproval(sub) {
    const A = window.BLT_AUTH;
    A.addXP(sub.authorId, A.XP_REWARDS.SUBMISSION_APPROVED, 'Submission approved: ' + sub.title);

    const author = A.findUserById(sub.authorId);
    if (author) {
      A.updateUser(author.id, { approvedCount: (author.approvedCount || 0) + 1 });
    }

    if (window.BLT_NOTIF) {
      window.BLT_NOTIF.push(sub.authorId, {
        type: 'approval',
        title: 'Submission approved!',
        my: 'တင်သွင်းချက် အတည်ပြုခံရသည်: ' + sub.title,
        icon: '✓'
      });
    }

    if (!window.BLT_STORAGE) return;
    const S = window.BLT_STORAGE;

    if (sub.type === 'story') {
      const stories = S.getStories();
      stories.push({
        id: 'arc-approved-' + sub.id,
        cat: sub.category || 'deep',
        tag: 'APPROVED · ' + sub.authorName,
        title: sub.title,
        my: sub.my,
        date: new Date(sub.createdAt).getFullYear().toString(),
        excerpt: sub.excerpt || sub.content.slice(0, 150),
        narrative: sub.content,
        chars: sub.tags || [],
        fragments: []
      });
      S.setStories(stories);
    } else if (sub.type === 'news') {
      const news = S.getNews();
      news.push({
        title: sub.title,
        my: sub.my,
        body: sub.content,
        date: 'ARCHIVE DATE: ' + new Date(sub.createdAt).toISOString().slice(0, 10)
      });
      S.setNews(news);
    } else if (sub.type === 'photo') {
      const photos = S.getPhotos();
      photos.push({
        url: sub.mediaUrl,
        cap: sub.title,
        my: sub.my
      });
      S.setPhotos(photos);
    } else if (sub.type === 'document' || sub.type === 'file') {
      const files = S.getFiles();
      files.push({
        id: 'APP-' + sub.id.slice(-6).toUpperCase(),
        title: sub.title,
        my: sub.my,
        meta: 'STATUS: ARCHIVED',
        cls: 'status-sealed',
        body: sub.content,
        bodyMy: sub.contentMy
      });
      S.setFiles(files);
    }
  }

  window.BLT_SUBMISSIONS = {
    getAll, getByAuthor, getPending, getApproved, getByStatus,
    create, approve, reject
  };
})();
