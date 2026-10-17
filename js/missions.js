/* Bureau of Lost Timelines — Missions */
(function () {
  'use strict';

  const NS = 'blt:missions:';
  const KEYS = {
    missions: NS + 'list',
    progress: NS + 'progress'
  };

  const DEFAULT_MISSIONS = [
    {
      id: 'm_001', title: 'First Contact', my: 'ပထမဆုံး ထိတွေ့မှု',
      desc: 'Complete your profile and read 3 archived storylines.',
      descMy: 'သင့် profile ကို ပြည့်စုံစေပြီး ဇာတ်လမ်း ၃ ခုကို ဖတ်ပါ။',
      xp: 30, minRole: 'MEMBER', type: 'onboarding'
    },
    {
      id: 'm_002', title: 'Initiate Ritual', my: 'စတင်ခြင်း ထုံးတမ်း',
      desc: 'Verify your email to gain full access.',
      descMy: 'အီးမေးလ် အတည်ပြုပြီး အပြည့်အဝ ဝင်ရောက်ခွင့် ရယူပါ။',
      xp: 40, minRole: 'MEMBER', type: 'onboarding'
    },
    {
      id: 'm_003', title: 'Vault Investigator', my: 'Vault စုံစမ်းသူ',
      desc: 'Access the classified vault and document what you find.',
      descMy: 'လျှို့ဝှက် Vault သို့ ဝင်ရောက်ပြီး တွေ့ရှိချက်များကို မှတ်တမ်းတင်ပါ။',
      xp: 50, minRole: 'MEMBER', type: 'investigate'
    },
    {
      id: 'm_004', title: 'Field Report', my: 'ကွင်းဆင်း အစီရင်ခံစာ',
      desc: 'Submit your first storyline, news article, or photograph.',
      descMy: 'သင့် ပထမဆုံး ဇာတ်လမ်း၊ သတင်း သို့မဟုတ် ဓာတ်ပုံကို တင်သွင်းပါ။',
      xp: 75, minRole: 'PERMANENT_MEMBER', type: 'submit'
    },
    {
      id: 'm_005', title: 'Deep Investigator', my: 'နက်ရှိုင်းသော စုံစမ်းသူ',
      desc: 'Submit 3 items and get at least 1 approved.',
      descMy: 'အချက် ၃ ခု တင်သွင်းပြီး အနည်းဆုံး ၁ ခု အတည်ပြုခံရပါ။',
      xp: 150, minRole: 'AGENT', type: 'submit'
    },
    {
      id: 'm_006', title: 'Timeline Analyst', my: 'Timeline သုံးသပ်သူ',
      desc: 'Create a complete storyline with fragments and characters.',
      descMy: 'အပိုင်းအစများနှင့် ဇာတ်ကောင်များ ပါဝင်သော ဇာတ်လမ်း တည်ဆောက်ပါ။',
      xp: 200, minRole: 'SENIOR_AGENT', type: 'create'
    },
    {
      id: 'm_007', title: 'Senior Fieldwork', my: 'အကြီးတန်း ကွင်းဆင်းလုပ်ငန်း',
      desc: 'Get 5 submissions approved.',
      descMy: 'တင်သွင်းချက် ၅ ခု အတည်ပြုခံရပါ။',
      xp: 300, minRole: 'SENIOR_AGENT', type: 'submit'
    },
    {
      id: 'm_008', title: 'Team Architect', my: 'အဖွဲ့ ဗိသုကာသူ',
      desc: 'Create 3 custom missions for other agents.',
      descMy: 'အခြား အေးဂျင့်များအတွက် တာဝန် ၃ ခု ဖန်တီးပါ။',
      xp: 400, minRole: 'TEAM_LEADER', type: 'create'
    },
    {
      id: 'm_009', title: 'Administrator Protocol', my: 'အုပ်ချုပ်သူ ပရိုတိုကော',
      desc: 'Assign 5 missions to junior members and see them completed.',
      descMy: 'အငယ်တန်း အဖွဲ့ဝင် ၅ ဦးကို တာဝန် ပေးပြီး ပြီးမြောက်အောင် ကြည့်ပါ။',
      xp: 500, minRole: 'ADMINISTRATOR', type: 'manage'
    },
    {
      id: 'm_010', title: "Advisor's Wisdom", my: 'အကြံပေး၏ ဉာဏ်',
      desc: 'Contribute 10 approved submissions to the archive.',
      descMy: 'အတည်ပြုခံရသော တင်သွင်းချက် ၁၀ ခု ပံ့ပိုးပါ။',
      xp: 800, minRole: 'ADVISOR', type: 'submit'
    }
  ];

  function getMissions() {
    try {
      const custom = JSON.parse(localStorage.getItem(KEYS.missions) || '[]');
      return [...DEFAULT_MISSIONS, ...custom];
    } catch (e) { return [...DEFAULT_MISSIONS]; }
  }

  function getCustomMissions() {
    try { return JSON.parse(localStorage.getItem(KEYS.missions) || '[]'); }
    catch (e) { return []; }
  }

  function saveCustomMissions(list) {
    localStorage.setItem(KEYS.missions, JSON.stringify(list));
  }

  function getProgress(userId) {
    try {
      const all = JSON.parse(localStorage.getItem(KEYS.progress) || '{}');
      return all[userId] || {};
    } catch (e) { return {}; }
  }

  function saveProgress(userId, progress) {
    try {
      const all = JSON.parse(localStorage.getItem(KEYS.progress) || '{}');
      all[userId] = progress;
      localStorage.setItem(KEYS.progress, JSON.stringify(all));
    } catch (e) {}
  }

  function markChecklistItem(userId, missionId, checkId) {
    const progress = getProgress(userId);
    if (!progress[missionId]) progress[missionId] = { items: {}, completed: false };
    progress[missionId].items[checkId] = true;
    saveProgress(userId, progress);
  }

  function completeMission(userId, missionId) {
    const A = window.BLT_AUTH;
    const user = A.findUserById(userId);
    if (!user) return { ok: false, error: 'User not found' };

    const mission = getMissions().find(m => m.id === missionId);
    if (!mission) return { ok: false, error: 'Mission not found' };

    const roleLevel = (A.ROLES[user.role] || A.ROLES.MEMBER).level;
    const minLevel = (A.ROLES[mission.minRole] || A.ROLES.MEMBER).level;
    if (roleLevel < minLevel) {
      return { ok: false, error: 'Rank too low: ' + mission.minRole + ' required' };
    }

    const progress = getProgress(userId);
    if (progress[missionId] && progress[missionId].completed) {
      return { ok: false, error: 'Mission already completed' };
    }

    progress[missionId] = progress[missionId] || { items: {} };
    progress[missionId].completed = true;
    progress[missionId].completedAt = Date.now();
    saveProgress(userId, progress);

    const completed = user.completedMissions || [];
    if (!completed.includes(missionId)) completed.push(missionId);
    A.updateUser(userId, { completedMissions: completed });

    const xpResult = A.addXP(userId, mission.xp, 'Mission: ' + mission.title);

    return { ok: true, xp: mission.xp, newTotal: xpResult.xp, promoted: xpResult.promoted, newRole: xpResult.role };
  }

  function isCompleted(userId, missionId) {
    const progress = getProgress(userId);
    return progress[missionId] && progress[missionId].completed === true;
  }

  function createMission(data, userId) {
    const A = window.BLT_AUTH;
    const user = A.findUserById(userId);
    if (!user || !A.can(user, 'create_mission')) {
      return { ok: false, error: 'Insufficient permission' };
    }
    const custom = getCustomMissions();
    const mission = {
      id: 'm_custom_' + Date.now().toString(36),
      title: data.title,
      my: data.my || '',
      desc: data.desc || '',
      descMy: data.descMy || '',
      xp: parseInt(data.xp, 10) || 50,
      minRole: data.minRole || 'MEMBER',
      type: 'custom',
      createdBy: userId,
      createdAt: Date.now()
    };
    custom.push(mission);
    saveCustomMissions(custom);
    return { ok: true, mission };
  }

  window.BLT_MISSIONS = {
    getMissions, getCustomMissions, saveCustomMissions,
    getProgress, markChecklistItem, completeMission, isCompleted,
    createMission, DEFAULT_MISSIONS
  };
})();
