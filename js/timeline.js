/* Bureau of Lost Timelines — Interactive Timeline */
(function () {
  'use strict';

  const EVENTS = [
    { year: "1943", cat: "deep",      title: "The Original Timeline Erased",     my: "မူလ timeline ဖျက်ပစ်ခံရ",         story: "arc-original-timeline" },
    { year: "1946", cat: "deep",      title: "Document 0 Written",               my: "စာရွက်စာတမ်း 0 ရေးသား",          story: "arc-document-0" },
    { year: "1947", cat: "deep",      title: "The Bureau's Founding Lie",        my: "ဌာန၏ တည်ထောင်မှု မုသား",         story: "arc-founding-lie" },
    { year: "1952", cat: "deep",      title: "Public Founding Date",             my: "လူသိရှင်ကြား တည်ထောင်သည့်နေ့",    story: null },
    { year: "1962", cat: "timeline",  title: "Earth-114 Divergence",             my: "ကမ္ဘာ-၁၁၄ ကွဲထွက်မှု",            story: null },
    { year: "1962", cat: "timeline",  title: "The Color Removed",                my: "အရောင် ဖယ်ရှားခံရ",               story: "arc-color-war" },
    { year: "1968", cat: "timeline",  title: "The Mirror War",                   my: "မှန်စစ်ပွဲ",                      story: "arc-mirror-war" },
    { year: "1971", cat: "timeline",  title: "The Ocean Deleted",                my: "သမုဒ္ဒရာ ဖျက်ပစ်ခံရ",             story: "arc-deleted-ocean" },
    { year: "1974", cat: "observers", title: "Whisper Network Discovered",       my: "တိုးတိုးလျှို့လျှို့ ကွန်ရက် ရှာတွေ့", story: "arc-whisper-network" },
    { year: "1978", cat: "timeline",  title: "The War Ends (1st)",               my: "စစ်ပွဲ ပြီးဆုံးမှု (ပထမ)",         story: "arc-war-twice" },
    { year: "1979", cat: "timeline",  title: "The War Ends (2nd)",               my: "စစ်ပွဲ ပြီးဆုံးမှု (ဒုတိယ)",       story: "arc-war-twice" },
    { year: "1983", cat: "timeline",  title: "The Rain That Remembers",          my: "မှတ်မိနေသော မိုး",                 story: "arc-rain-that-remembers" },
    { year: "1987", cat: "timeline",  title: "The Election That Never Ended",    my: "မပြီးဆုံးခဲ့သော ရွေးကောက်ပွဲ",     story: "arc-last-vote" },
    { year: "1988", cat: "deep",      title: "The 13th Month · Director 0 Lost", my: "၁၃ လမြောက် · Director 0 ပျောက်ဆုံး", story: "arc-director-zero" },
    { year: "1993", cat: "timeline",  title: "The Reversed Birth",               my: "ပြောင်းပြန် မွေးဖွားမှု",            story: "arc-reversed-birth" },
    { year: "1994", cat: "places",    title: "Nation Vanishes From Records",     my: "နိုင်ငံတစ်ခု မှတ်တမ်းမှ ပျောက်ကွယ်", story: "arc-war-twice" },
    { year: "1995", cat: "observers", title: "Doppelgänger Program Begins",      my: "Doppelgänger အစီအစဉ် စတင်",       story: "arc-doppelganger" },
    { year: "2011", cat: "timeline",  title: "Earth-114 Oceans Boil",            my: "ကမ္ဘာ-၁၁၄ သမုဒ္ဒရာ ဆူပွက်",        story: null },
    { year: "2012", cat: "places",    title: "The Last Train Arrives",           my: "နောက်ဆုံး ရထား ရောက်လာမှု",      story: "arc-last-train" },
    { year: "2014", cat: "places",    title: "The 25th Hour Reports",            my: "၂၅ နာရီမြောက် တိုင်ကြားချက်များ",    story: "arc-25hour" },
    { year: "2015", cat: "places",    title: "The Inverted City Discovered",     my: "ဇောက်ထိုး မြို့ ရှာဖွေတွေ့ရှိ",    story: "arc-inverted-city" },
    { year: "2016", cat: "places",    title: "Agent Kyaw Swar Missing",          my: "Agent Kyaw Swar ပျောက်ဆုံး",       story: "arc-forgot-name" },
    { year: "2016", cat: "memory",    title: "The Forgotten Language",           my: "မေ့သွားသော ဘာသာစကား",             story: "arc-forgotten-language" },
    { year: "2017", cat: "memory",    title: "The Lost Tuesday",                 my: "မဖြစ်ခဲ့ဖူးသော အင်္ဂါနေ့",          story: "arc-tuesday" },
    { year: "2017", cat: "observers", title: "The Man Who Sees Numbers Found",   my: "နံပါတ်များ မြင်သူ ရှာတွေ့",         story: "arc-man-who-sees-numbers" },
    { year: "2018", cat: "observers", title: "The Watcher's Symbol Appears",     my: "စောင့်ကြည့်သူ၏ သင်္ကေတ ပေါ်ပေါက်",  story: "arc-static" },
    { year: "2018", cat: "observers", title: "Agent Nilar's Merge",              my: "Agent Nilar ပေါင်းစည်းမှု",        story: "arc-doppelganger" },
    { year: "2018", cat: "memory",    title: "The Rain Voice First Reported",    my: "မိုးထဲမှ အသံ ပထမဆုံး တိုင်ခံရ",     story: "arc-voice-in-rain" },
    { year: "2019", cat: "timeline",  title: "Timeline 0x7F Erased",             my: "Timeline 0x7F ဖျက်ပစ်ခံရ",         story: "arc-0x7F" },
    { year: "2019", cat: "places",    title: "The Backwards Clock Village",      my: "နောက်ပြန် နာရီ ရွာ",                story: "arc-backwards-clock" },
    { year: "2019", cat: "observers", title: "The 13th Hour Watch Identified",   my: "၁၃ နာရီမြောက် စောင့်ကြည့်မှု ဖော်ထုတ်", story: "arc-13th-hour-watch" },
    { year: "2020", cat: "memory",    title: "The Three Sisters Examined",       my: "ညီမ သုံးဦး စစ်ဆေးခံရ",             story: "arc-three-sisters" },
    { year: "2020", cat: "memory",    title: "Photograph #1 Recovered",          my: "ဓာတ်ပုံ #1 ပြန်လည်တွေ့ရှိ",        story: "arc-photograph-that-moves" },
    { year: "2021", cat: "observers", title: "Subject Zero Interview #47",       my: "Subject Zero အင်တာဗျူး #47",         story: "arc-subject-zero" },
    { year: "2021", cat: "memory",    title: "Anomaly 0x33-118 Identified",      my: "Anomaly 0x33-118 ဖော်ထုတ်",          story: "arc-two-childhoods" },
    { year: "2021", cat: "places",    title: "The Alley That Eats Memories",     my: "မှတ်ဉာဏ် စားသော လမ်းကြား",          story: "arc-alley-that-eats" },
    { year: "2021", cat: "memory",    title: "Subject 0x35 Identified",          my: "Subject 0x35 ဖော်ထုတ်",              story: "arc-borrowed-face" },
    { year: "2022", cat: "observers", title: "Visitor in the Mirror Incident",   my: "မှန်ထဲမှ ဧည့်သည် အဖြစ်အပျက်",        story: "arc-visitor-in-mirror" },
    { year: "2022", cat: "places",    title: "The Upstairs Room Warning",        my: "အပေါ်ထပ် အခန်း သတိပေးချက်",          story: "arc-upstairs-room" },
    { year: "2023", cat: "timeline",  title: "Chroma Keeper Warning",            my: "Chroma Keeper သတိပေးချက်",           story: "arc-color-war" },
    { year: "2023", cat: "deep",      title: "Protocol 13 Conditions Met",       my: "ပရိုတိုကော ၁၃ အခြေအနေများ",         story: "arc-protocol-13" },
    { year: "2023", cat: "deep",      title: "'They are coming out'",            my: "'သူတို့ ထွက်လာတော့မယ်'",              story: "arc-director-zero" },
    { year: "2024", cat: "deep",      title: "The Archivist Speaks",             my: "မှတ်တမ်းထိန်းသိမ်းသူ စကားပြော",       story: "arc-last-archivist" },
    { year: "2024", cat: "deep",      title: "Article 13 Conditions Monitored",  my: "အပိုဒ် ၁၃ အခြေအနေများ စောင့်ကြည့်",   story: "arc-bureau-constitution" },
    { year: "2024", cat: "deep",      title: "The Reader Reads This",            my: "စာဖတ်သူ ဤစာကို ဖတ်သည်",            story: "arc-you" }
  ];

  function renderTimeline() {
    const container = document.getElementById('timelineEvents');
    if (!container) return;

    // Sort by year (already sorted in array)
    EVENTS.forEach(ev => {
      const div = document.createElement('div');
      div.className = 'tl-event';
      div.dataset.cat = ev.cat;
      div.innerHTML = `
        <div class="tl-year">${ev.year}</div>
        <div class="tl-title">${ev.title}</div>
        <div class="tl-title-my">${ev.my}</div>
        <span class="tl-cat-tag">${ev.cat.toUpperCase()}</span>
      `;
      div.addEventListener('click', () => {
        if (ev.story && window.BLT_OPEN_STORY) {
          window.BLT_OPEN_STORY(ev.story);
        }
      });
      container.appendChild(div);
    });
  }

  document.addEventListener('DOMContentLoaded', renderTimeline);
})();
