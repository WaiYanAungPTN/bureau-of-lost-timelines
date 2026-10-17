/* Bureau of Lost Timelines — Badge System */
(function () {
  'use strict';

  const KEY = 'blt:auth:badges';

  const BADGES = {
    FOUNDER: { id: 'FOUNDER', icon: '👑', title: 'Founder', my: 'တည်ထောင်သူ', desc: 'Created the Bureau', descMy: 'ဌာနကို တည်ထောင်ခဲ့သူ', secret: false },
    FIRST_STEPS: { id: 'FIRST_STEPS', icon: '👣', title: 'First Steps', my: 'ပထမဆုံး ခြေလှမ်း', desc: 'Complete your first mission', descMy: 'ပထမဆုံး တာဝန် ပြီးမြောက်ခဲ့သည်', check: (u) => (u.completedMissions || []).length >= 1 },
    INITIATE: { id: 'INITIATE', icon: '🎖️', title: 'Initiate', my: 'စတင်သူ', desc: 'Verify your email', descMy: 'အီးမေးလ် အတည်ပြုပြီးပြီ', check: (u) => u.emailVerified === true },
    IDENTITY: { id: 'IDENTITY', icon: '🖼️', title: 'Identity', my: 'အထောက်အထား', desc: 'Upload an avatar', descMy: 'ပရိုဖိုင် ဓာတ်ပုံ တင်ပြီးပြီ', check: (u) => !!u.avatar },
    MISSIONARY: { id: 'MISSIONARY', icon: '🎯', title: 'Missionary', my: 'တာဝန်သည်', desc: 'Complete 5 missions', descMy: 'တာဝန် ၅ ခု ပြီးမြောက်ခဲ့သည်', check: (u) => (u.completedMissions || []).length >= 5 },
    MISSION_MASTER: { id: 'MISSION_MASTER', icon: '🏆', title: 'Mission Master', my: 'တာဝန်သခင်', desc: 'Complete all default missions', descMy: 'ပုံမှန် တာဝန်အားလုံး ပြီးမြောက်ခဲ့သည်', check: (u) => {
      const M = window.BLT_MISSIONS;
      if (!M) return false;
      const defaults = M.DEFAULT_MISSIONS;
      return defaults.every(m => (u.completedMissions || []).includes(m.id));
    }},
    FIRST_SUBMISSION: { id: 'FIRST_SUBMISSION', icon: '📤', title: 'First Submission', my: 'ပထမဆုံး တင်သွင်းမှု', desc: 'Submit your first item', descMy: 'ပထမဆုံး အချက် တင်သွင်းခဲ့သည်', check: (u) => (u.submissionCount || 0) >= 1 },
    PUBLISHED: { id: 'PUBLISHED', icon: '📰', title: 'Published', my: 'ထုတ်ဝေပြီး', desc: 'Get 1 submission approved', descMy: 'တင်သွင်းချက် ၁ ခု အတည်ပြုခံရသည်', check: (u) => (u.approvedCount || 0) >= 1 },
    PROLIFIC: { id: 'PROLIFIC', icon: '✍️', title: 'Prolific', my: 'အရေးအသားများသူ', desc: 'Get 5 submissions approved', descMy: 'တင်သွင်းချက် ၅ ခု အတည်ပြုခံရသည်', check: (u) => (u.approvedCount || 0) >= 5 },
    SEEKER: { id: 'SEEKER', icon: '🔍', title: 'Seeker', my: 'ရှာဖွေသူ', desc: 'Unlock the classified vault', descMy: 'လျှို့ဝှက် Vault ကို ဖွင့်ခဲ့သည်', check: (u) => (u.badges || []).includes('SEEKER') || (u.vaultUnlocked === true) },
    CONTRIBUTOR: { id: 'CONTRIBUTOR', icon: '💎', title: 'Contributor', my: 'ပံ့ပိုးသူ', desc: 'Reach 500 XP', descMy: 'XP ၅၀၀ ရောက်ရှိခဲ့သည်', check: (u) => u.xp >= 500 },
    VETERAN: { id: 'VETERAN', icon: '⚔️', title: 'Veteran', my: 'စစ်မှုရင့်', desc: 'Reach 1500 XP', descMy: 'XP ၁၅၀၀ ရောက်ရှိခဲ့သည်', check: (u) => u.xp >= 1500 },
    EDITOR: { id: 'EDITOR', icon: '📝', title: 'Editor', my: 'မှတ်တမ်းထိန်း', desc: 'Appointed as an editor', descMy: 'မှတ်တမ်းထိန်း ခန့်အပ်ခံရသည်', check: (u) => u.role === 'EDITOR' || (u.badges || []).includes('EDITOR') },
    CHAIRMAN: { id: 'CHAIRMAN', icon: '👑', title: 'Chairman', my: 'Chairman', desc: 'Appointed as Chairman', descMy: 'Chairman ခန့်အပ်ခံရသည်', check: (u) => u.role === 'CHAIRMAN' || (u.badges || []).includes('CHAIRMAN') },
    OBSERVER: { id: 'OBSERVER', icon: '👁️', title: 'Observer', my: 'စောင့်ကြည့်သူ', desc: 'Visit the surveillance panel', descMy: 'စောင့်ကြည့်မှု အကန့်ကို ကြည့်ရှုခဲ့သည်', check: (u) => (u.badges || []).includes('OBSERVER') },
    NIGHT_OWL: { id: 'NIGHT_OWL', icon: '🦉', title: 'Night Owl', my: 'ညဘက်ငှက်', desc: 'Visit at 03:33 (the witching hour)', descMy: '၀၃:၃၃ အချိန်တွင် ဝင်ရောက်ခဲ့သည်', secret: true, check: (u) => (u.badges || []).includes('NIGHT_OWL') },
    ARCHIVIST: { id: 'ARCHIVIST', icon: '📚', title: 'Archivist', my: 'မှတ်တမ်းထိန်း', desc: 'Read every default storyline', descMy: 'ပုံမှန် ဇာတ်လမ်းအားလုံး ဖတ်ပြီးပြီ', check: (u) => (u.readStories || []).length >= 21 }
  };

  function getEarned(userId) {
    const all = window.BLT_AUTH.get(KEY, {});
    return all[userId] || [];
  }
  function saveEarned(userId, list) {
    const all = window.BLT_AUTH.get(KEY, {});
    all[userId] = list;
    window.BLT_AUTH.set(KEY, all);
  }

  function award(userId, badgeId) {
    const earned = getEarned(userId);
    if (earned.includes(badgeId)) return false;
    earned.push(badgeId);
    saveEarned(userId, earned);

    const user = window.BLT_AUTH.findUserById(userId);
    if (user) {
      const badges = user.badges || [];
      if (!badges.includes(badgeId)) {
        badges.push(badgeId);
        window.BLT_AUTH.updateUser(userId, { badges });
      }
    }

    window.BLT_AUTH.addXP(userId, window.BLT_AUTH.XP_REWARDS.BADGE_EARNED, 'Badge: ' + badgeId);

    if (window.BLT_NOTIF) {
      const b = BADGES[badgeId];
      window.BLT_NOTIF.push(userId, {
        type: 'badge',
        title: 'Badge earned: ' + (b ? b.title : badgeId),
        my: b ? b.my + ' badge ရရှိသည်' : 'သစ်သော badge ရရှိသည်',
        icon: b ? b.icon : '🎖️'
      });
    }
    return true;
  }

  function checkAndAward(userId) {
    const user = window.BLT_AUTH.findUserById(userId);
    if (!user) return;
    const earned = getEarned(userId);
    Object.values(BADGES).forEach(b => {
      if (earned.includes(b.id)) return;
      if (typeof b.check === 'function' && b.check(user)) {
        award(userId, b.id);
      }
    });
  }

  function hasBadge(userId, badgeId) {
    return getEarned(userId).includes(badgeId);
  }

  function getStats(userId) {
    const earned = getEarned(userId);
    const total = Object.keys(BADGES).length;
    return { earned: earned.length, total, pct: Math.round((earned.length / total) * 100) };
  }

  window.BLT_BADGES = {
    BADGES, getEarned, award, checkAndAward, hasBadge, getStats
  };
})();
