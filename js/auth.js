/* Bureau of Lost Timelines — Auth v2 (11-Tier Roles) */
(function () {
  'use strict';

  const NS = 'blt:auth:';
  const KEYS = {
    users: NS + 'users',
    session: NS + 'session',
    editorIds: NS + 'editor_ids',
    pendingVerifies: NS + 'pending_verifies',
    notifications: NS + 'notifications',
    badges: NS + 'badges'
  };

  const ROLES = {
    MEMBER:           { level: 0,  xp: 0,     label: 'MEMBER',           my: 'အဖွဲ့ဝင်',          auto: true },
    PERMANENT_MEMBER: { level: 1,  xp: 50,    label: 'PERMANENT MEMBER', my: 'အမြဲတမ်းအဖွဲ့ဝင်',  auto: true },
    SENIOR:           { level: 2,  xp: 150,   label: 'SENIOR',           my: 'စီနီယာ',            auto: true },
    AGENT:            { level: 3,  xp: 300,   label: 'AGENT',            my: 'အေးဂျင့်',           auto: true },
    SENIOR_AGENT:     { level: 4,  xp: 600,   label: 'SENIOR AGENT',     my: 'စီနီယာ အေးဂျင့်',   auto: true },
    TEAM_LEADER:      { level: 5,  xp: 1000,  label: 'TEAM LEADER',      my: 'အဖွဲ့ခေါင်းဆောင်',   auto: true },
    ADMINISTRATOR:    { level: 6,  xp: 1500,  label: 'ADMINISTRATOR',    my: 'အုပ်ချုပ်သူ',        auto: true },
    ADVISOR:          { level: 7,  xp: 2000,  label: 'ADVISOR',          my: 'အကြံပေးအဖွဲ့ဝင်',   auto: true },
    EDITOR:           { level: 8,  xp: 99999, label: 'EDITOR',           my: 'မှတ်တမ်းထိန်း',     auto: false },
    CHAIRMAN:         { level: 9,  xp: 99999, label: 'CHAIRMAN',         my: 'Chairman',          auto: false },
    OWNER:            { level: 10, xp: 99999, label: 'OWNER',            my: 'Owner',             auto: false }
  };

  const XP_REWARDS = {
    REGISTER: 10,
    EMAIL_VERIFIED: 20,
    LOGIN_DAILY: 5,
    MISSION_COMPLETE: 25,
    SUBMISSION: 15,
    SUBMISSION_APPROVED: 50,
    SUBMISSION_REJECTED: -10,
    EDITOR_APPROVAL: 20,
    VAULT_ACCESS: 5,
    BADGE_EARNED: 30,
    AVATAR_UPLOAD: 10
  };

  function get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch (e) { return fallback; }
  }
  function set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch (e) { return false; }
  }

  function getUsers() { return get(KEYS.users, []); }
  function saveUsers(u) { return set(KEYS.users, u); }
  function getEditorIds() { return get(KEYS.editorIds, []); }
  function saveEditorIds(ids) { return set(KEYS.editorIds, ids); }
  function getSession() { return get(KEYS.session, null); }
  function saveSession(id) {
    if (id) set(KEYS.session, { id, at: Date.now() });
    else localStorage.removeItem(KEYS.session);
  }

  function hashPassword(pass, salt) {
    let hash = 0;
    const str = pass + '::' + salt;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
    }
    return hash.toString(36);
  }
  function makeSalt() { return Math.random().toString(36).slice(2, 12); }

  function findUserByEmail(email) {
    return getUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
  }
  function findUserById(id) { return getUsers().find(u => u.id === id); }

  function register(email, password, displayName) {
    if (!email || !password) return { ok: false, error: 'Email and password required' };
    if (password.length < 6) return { ok: false, error: 'Password must be ≥ 6 characters' };
    if (findUserByEmail(email)) return { ok: false, error: 'Email already registered' };

    const salt = makeSalt();
    const verifyCode = Math.random().toString(36).slice(2, 8).toUpperCase();
    const user = {
      id: 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      email: email.trim(),
      displayName: (displayName || email.split('@')[0]).trim(),
      salt,
      passwordHash: hashPassword(password, salt),
      role: 'MEMBER',
      xp: 0,
      emailVerified: false,
      verifyCode,
      avatar: null,
      avatarColor: randomColor(),
      createdAt: Date.now(),
      lastLogin: null,
      lastDailyBonus: null,
      badges: [],
      completedMissions: [],
      submissionCount: 0,
      approvedCount: 0,
      bio: ''
    };

    const users = getUsers();
    users.push(user);
    saveUsers(users);

    const pending = get(KEYS.pendingVerifies, {});
    pending[email] = { code: verifyCode, at: Date.now() };
    set(KEYS.pendingVerifies, pending);

    addXP(user.id, XP_REWARDS.REGISTER, 'Registration bonus');
    return { ok: true, user: findUserById(user.id), verifyCode };
  }

  function verifyEmail(userId, code) {
    const user = findUserById(userId);
    if (!user) return { ok: false, error: 'User not found' };
    if (user.emailVerified) return { ok: false, error: 'Already verified' };

    const pending = get(KEYS.pendingVerifies, {});
    const entry = pending[user.email];
    if (!entry || entry.code !== code.toUpperCase()) {
      return { ok: false, error: 'Invalid verification code' };
    }

    updateUser(userId, { emailVerified: true });
    delete pending[user.email];
    set(KEYS.pendingVerifies, pending);
    addXP(userId, XP_REWARDS.EMAIL_VERIFIED, 'Email verified');

    return { ok: true };
  }

  function resendCode(userId) {
    const user = findUserById(userId);
    if (!user) return { ok: false, error: 'User not found' };
    const code = Math.random().toString(36).slice(2, 8).toUpperCase();
    const pending = get(KEYS.pendingVerifies, {});
    pending[user.email] = { code, at: Date.now() };
    set(KEYS.pendingVerifies, pending);
    return { ok: true, code };
  }

  function login(email, password) {
    const user = findUserByEmail(email);
    if (!user) return { ok: false, error: 'Account not found' };
    if (hashPassword(password, user.salt) !== user.passwordHash) {
      return { ok: false, error: 'Incorrect password' };
    }

    const today = new Date().toDateString();
    if (user.lastDailyBonus !== today) {
      addXP(user.id, XP_REWARDS.LOGIN_DAILY, 'Daily login bonus');
      updateUser(user.id, { lastDailyBonus: today });
    }
    updateUser(user.id, { lastLogin: Date.now() });
    saveSession(user.id);
    return { ok: true, user: findUserById(user.id) };
  }

  function logout() { saveSession(null); return { ok: true }; }

  function getCurrentUser() {
    const s = getSession();
    if (!s) return null;
    return findUserById(s.id);
  }

  function updateUser(id, patch) {
    const users = getUsers();
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return false;
    users[idx] = { ...users[idx], ...patch };
    saveUsers(users);
    return true;
  }

  function addXP(userId, amount, reason) {
    const user = findUserById(userId);
    if (!user) return null;

    const newXP = Math.max(0, user.xp + amount);
    const newRole = calculateAutoRole(newXP, user.role);
    const patch = { xp: newXP };

    let promoted = false;
    if (newRole !== user.role && shouldAutoPromote(user.role, newRole)) {
      patch.role = newRole;
      promoted = true;
    }
    updateUser(userId, patch);

    const log = get(NS + 'xp_log', []);
    log.unshift({ userId, amount, reason, at: Date.now(), total: newXP });
    set(NS + 'xp_log', log.slice(0, 200));

    if (promoted && window.BLT_NOTIF) {
      window.BLT_NOTIF.push(userId, {
        type: 'promotion',
        title: 'Promoted to ' + ROLES[newRole].label,
        my: ROLES[newRole].my + ' သို့ ရာထူးတိုးမြှင့်ခံရသည်',
        icon: '⬆'
      });
    }

    if (window.BLT_BADGES) {
      window.BLT_BADGES.checkAndAward(userId);
    }

    return { xp: newXP, role: patch.role || user.role, promoted, newRole: patch.role };
  }

  function getXPLog() { return get(NS + 'xp_log', []); }

  function calculateAutoRole(xp, currentRole) {
    const current = ROLES[currentRole] || ROLES.MEMBER;
    if (current.level >= ROLES.EDITOR.level) return currentRole;

    if (xp >= ROLES.ADVISOR.xp) return 'ADVISOR';
    if (xp >= ROLES.ADMINISTRATOR.xp) return 'ADMINISTRATOR';
    if (xp >= ROLES.TEAM_LEADER.xp) return 'TEAM_LEADER';
    if (xp >= ROLES.SENIOR_AGENT.xp) return 'SENIOR_AGENT';
    if (xp >= ROLES.AGENT.xp) return 'AGENT';
    if (xp >= ROLES.SENIOR.xp) return 'SENIOR';
    if (xp >= ROLES.PERMANENT_MEMBER.xp) return 'PERMANENT_MEMBER';
    return 'MEMBER';
  }

  function shouldAutoPromote(oldRole, newRole) {
    const oldLevel = (ROLES[oldRole] || ROLES.MEMBER).level;
    const newLevel = (ROLES[newRole] || ROLES.MEMBER).level;
    return newLevel > oldLevel && newLevel <= ROLES.ADVISOR.level;
  }

  function randomColor() {
    const colors = ['#33ff66', '#7dffa5', '#33ccff', '#ffaa33', '#aa55ff', '#ff5555'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function appointEditor(userId, byUserId) {
    const by = findUserById(byUserId);
    if (!by || !['CHAIRMAN', 'OWNER'].includes(by.role)) {
      return { ok: false, error: 'Only Chairman or Owner can appoint editors' };
    }
    const editors = getEditorIds();
    if (editors.length >= 3 && !editors.includes(userId)) {
      return { ok: false, error: 'Max 3 editors. Remove one first.' };
    }
    if (!editors.includes(userId)) {
      editors.push(userId);
      saveEditorIds(editors);
    }
    updateUser(userId, { role: 'EDITOR', appointedAt: Date.now(), appointedBy: byUserId });

    if (window.BLT_NOTIF) {
      window.BLT_NOTIF.push(userId, {
        type: 'appointment',
        title: 'Appointed as EDITOR',
        my: 'သင့်ကို မှတ်တမ်းထိန်း (Editor) အဖြစ် ခန့်အပ်ခံရသည်',
        icon: '📝'
      });
    }
    return { ok: true };
  }

  function removeEditor(userId, byUserId) {
    const by = findUserById(byUserId);
    if (!by || !['CHAIRMAN', 'OWNER'].includes(by.role)) {
      return { ok: false, error: 'Only Chairman or Owner can remove editors' };
    }
    const editors = getEditorIds().filter(id => id !== userId);
    saveEditorIds(editors);
    updateUser(userId, { role: 'ADVISOR' });

    if (window.BLT_NOTIF) {
      window.BLT_NOTIF.push(userId, {
        type: 'removal',
        title: 'Editor role removed',
        my: 'မှတ်တမ်းထိန်း ရာထူးမှ ဖယ်ရှားခံရသည်',
        icon: '⚠'
      });
    }
    return { ok: true };
  }

  function appointChairman(userId, byUserId) {
    const by = findUserById(byUserId);
    if (!by || by.role !== 'OWNER') {
      return { ok: false, error: 'Only Owner can appoint Chairman' };
    }
    getUsers().forEach(u => {
      if (u.role === 'CHAIRMAN' && u.id !== userId) {
        updateUser(u.id, { role: 'EDITOR' });
      }
    });
    updateUser(userId, { role: 'CHAIRMAN', appointedAt: Date.now() });

    if (window.BLT_NOTIF) {
      window.BLT_NOTIF.push(userId, {
        type: 'appointment',
        title: 'Appointed as CHAIRMAN',
        my: 'သင့်ကို Chairman အဖြစ် ခန့်အပ်ခံရသည်',
        icon: '👑'
      });
    }
    return { ok: true };
  }

  function can(user, action) {
    if (!user) return action === 'view_public';
    const role = user.role;
    const lvl = (ROLES[role] || ROLES.MEMBER).level;

    switch (action) {
      case 'view_public':         return true;
      case 'view_classified':     return lvl >= ROLES.AGENT.level;
      case 'submit':              return lvl >= ROLES.PERMANENT_MEMBER.level && user.emailVerified;
      case 'create_mission':      return lvl >= ROLES.SENIOR.level;
      case 'assign_mission':      return lvl >= ROLES.ADMINISTRATOR.level;
      case 'mentor':              return lvl >= ROLES.SENIOR_AGENT.level;
      case 'advise':              return lvl >= ROLES.ADVISOR.level;
      case 'review':              return ['EDITOR', 'CHAIRMAN', 'OWNER'].includes(role);
      case 'approve':             return ['EDITOR', 'CHAIRMAN', 'OWNER'].includes(role);
      case 'appoint_editor':      return ['CHAIRMAN', 'OWNER'].includes(role);
      case 'appoint_chairman':    return role === 'OWNER';
      case 'admin':               return ['CHAIRMAN', 'OWNER'].includes(role);
      case 'owner_only':          return role === 'OWNER';
      default:                    return false;
    }
  }

  function ensureOwnerExists() {
    const users = getUsers();
    if (!users.some(u => u.role === 'OWNER')) {
      const salt = makeSalt();
      const owner = {
        id: 'u_owner',
        email: 'owner@blt.archive',
        displayName: 'DIRECTOR 0',
        salt,
        passwordHash: hashPassword('director0', salt),
        role: 'OWNER',
        xp: 99999,
        emailVerified: true,
        avatar: null,
        avatarColor: '#33ff66',
        createdAt: Date.now(),
        lastLogin: null,
        badges: ['FOUNDER'],
        completedMissions: [],
        submissionCount: 0,
        approvedCount: 0,
        bio: 'Founder of the Bureau. Last seen 1988.'
      };
      users.push(owner);
      saveUsers(users);
      console.log('%c[BUREAU] Owner created: owner@blt.archive / director0',
        'color:#33ff66;font-weight:bold;');
    }
  }

  window.BLT_AUTH = {
    ROLES, XP_REWARDS, KEYS,
    register, login, logout, verifyEmail, resendCode,
    getCurrentUser, findUserById, findUserByEmail, updateUser,
    addXP, getXPLog, calculateAutoRole,
    appointEditor, removeEditor, appointChairman,
    getEditorIds, saveEditorIds, can,
    getUsers, ensureOwnerExists,
    get, set
  };

  ensureOwnerExists();
})();
