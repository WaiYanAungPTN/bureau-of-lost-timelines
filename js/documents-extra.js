/* Bureau of Lost Timelines — Extended Documents */
(function () {
  'use strict';
  if (!window.BLT_DATA) return;

  const extraFiles = [
    {
      id: "MM-REAL-01", title: "Shwedagon Pagoda · Temporal Stability Report", my: "ရွှေတိဂုံ ဘုရား · အချိန်တည်ငြိမ်မှု အစီရင်ခံစာ",
      meta: "VERIFIED · 🟢 REAL", cls: "status-active", marker: "real",
      body: "The Shwedagon Pagoda (Yangon) has been continuously documented since the 6th century CE. Bureau temporal monitoring stations report 'minimal drift' at this location — one of only 3 sites in Myanmar where readings remain within acceptable parameters. Public records confirm the pagoda's existence. The 'temporal stability' interpretation is Bureau fiction.",
      bodyMy: "ရွှေတိဂုံဘုရားသည် ၆ ရာစုကတည်းက မှတ်တမ်းတင်ခံခဲ့သည်။ ဌာန၏ အချိန်စောင့်ကြည့်ရေး စခန်းများက ဤနေရာတွင် 'drift အနည်းဆုံး' ဖြစ်သည်ဟု အစီရင်ခံသည်။"
    },
    {
      id: "MM-REAL-02", title: "Mount Popa · The 37 Nats", my: "ပုပ္ပားတောင် · နတ် ၃၇ ပါး",
      meta: "VERIFIED · 🟡 FOLKLORE", cls: "status-sealed", marker: "folklore",
      body: "Mount Popa (Magway Region) is home to the Mahagiri Nat shrine — a real pilgrimage site. Burmese tradition documents 37 Nats (spirits) who are honored here. Bureau files claim '3 additional Nats' — these are fictional additions. The 37 documented Nats remain central to Burmese folk religion.",
      bodyMy: "ပုပ္ပားတောင်သည် မဟာဂီရိ နတ်ကွန်းတည်ရှိရာ ဖြစ်သည် — အမှန်တကယ် ဘုရားဖူးနေရာ။"
    },
    {
      id: "MM-FICT-01", title: "The Yangon Inversion · Field Report", my: "ရန်ကုန် ဇောက်ထိုးမှု · ကွင်းဆင်း အစီရင်ခံစာ",
      meta: "SEALED · 🔴 FICTION", cls: "status-sealed", marker: "fiction",
      body: "Agent Soe Min's report on the 'Inverted City' beneath Yangon (2015). Describes a duplicate city, upside down, hanging from an invisible ceiling 400m below ground. No physical evidence exists. Entirely fictional.",
      bodyMy: "အေးဂျင့် Soe Min ၏ ရန်ကုန်အောက်ရှိ 'ဇောက်ထိုးမြို့' အစီရင်ခံစာ (၂၀၁၅)။"
    },
    {
      id: "MM-FICT-02", title: "The 1983 Storm · Chroma Record", my: "၁၉၈၃ မုန်တိုင်း · အရောင် မှတ်တမ်း",
      meta: "ERASED · 🔴 FICTION", cls: "status-erased", marker: "fiction",
      body: "Bureau documentation of the 1983 'remembering storm' — a rainstorm that allegedly carried memories of an erased timeline. Weather records show no unusual storm in 1983. This document is entirely fictional.",
      bodyMy: "၁၉၈၃ 'မှတ်မိနေသော မိုး' ၏ ဌာန မှတ်တမ်း။"
    },
    {
      id: "MM-FICT-03", title: "Subject Zero · Facility-9 Interview #47", my: "ဘာသာရပ် သုည · စက်ရုံ-၉ အင်တာဗျူး #47",
      meta: "REDACTED · 🔴 FICTION", cls: "status-redacted", marker: "fiction",
      body: "[REDACTED] Subject Zero's 47th interview, conducted at Facility-9. Subject claims to hear 'voices from erased timelines.' All Facility-9 records are fictional.",
      bodyMy: "[ဖျောက်ထားသည်] စက်ရုံ-၉ တွင် ပြုလုပ်ခဲ့သော ဘာသာရပ် သုည၏ ၄၇ ကြိမ်မြောက် အင်တာဗျူး။"
    },
    {
      id: "MM-FICT-04", title: "The 13th Hour Watch · Roster", my: "၁၃ နာရီမြောက် စောင့်ကြည့်မှု · စာရင်း",
      meta: "SEALED · 🔴 FICTION", cls: "status-sealed", marker: "fiction",
      body: "Roster of the '13th Hour Watch' — 13 Bureau employees who gather nightly at 03:33. Contains 13 redacted names. The 13th Hour Watch does not exist in Bureau records — this is invented lore.",
      bodyMy: "'၁၃ နာရီမြောက် စောင့်ကြည့်မှု' စာရင်း — ည ၀၃:၃၃ တွင် စုရုံးသော ဌာန ဝန်ထမ်း ၁၃ ဦး။"
    },
    {
      id: "MM-FICT-05", title: "The Alley That Eats Memories · Case File", my: "မှတ်ဉာဏ် စားသော လမ်းကြား · အမှုဖိုင်",
      meta: "ACTIVE · 🔴 FICTION", cls: "status-active", marker: "fiction",
      body: "Case file on the 'memory-eating alley' on 32nd Street, Yangon. No alley matching this description exists on 32nd Street. Entirely fictional.",
      bodyMy: "ရန်ကုန်မြို့ ၃၂ လမ်းရှိ 'မှတ်ဉာဏ် စားသော လမ်းကြား' အမှုဖိုင်။"
    },
    {
      id: "MM-FICT-06", title: "Bureau Constitution · Article 13", my: "ဌာန ဖွဲ့စည်းပုံ · အပိုဒ် ၁၃",
      meta: "SEALED · 🔴 FICTION", cls: "status-sealed", marker: "fiction",
      body: "Article 13 of the Bureau Constitution — sealed since 1947. Final line of Article 12: 'Whoever opens Article 13 will no longer be a member of the Bureau.' Article 13 does not exist. Fictional.",
      bodyMy: "ဌာန ဖွဲ့စည်းပုံ အပိုဒ် ၁၃ — ၁၉၄၇ ကတည်းက တံဆိပ်ခတ်ထားသည်။"
    },
    {
      id: "MM-FICT-07", title: "Document 0 · The Prophecy", my: "စာရွက်စာတမ်း 0 · ကြိုတင်ခန့်မှန်းချက်",
      meta: "REDACTED · 🔴 FICTION", cls: "status-redacted", marker: "fiction",
      body: "Single-page document dated 1946. Predicts 23 events, 19 of which have occurred 'as written.' Document 0 does not exist in any archive. Entirely fictional.",
      bodyMy: "၁၉၄၆ ရက်စွဲတပ်ထားသော စာမျက်နှာ တစ်ခုတည်း စာရွက်စာတမ်း။"
    },
    {
      id: "MM-FICT-08", title: "The 1943 Erasure · Original Timeline", my: "၁၉၄၃ ဖျက်ပစ်မှု · မူလ timeline",
      meta: "ERASED · 🔴 FICTION", cls: "status-erased", marker: "fiction",
      body: "Bureau's most-classified document: the 'original timeline' was allegedly erased in 1943. No evidence supports this claim. It is the Bureau's foundational fiction.",
      bodyMy: "ဌာန၏ အလျှို့ဝှက်ဆုံး စာရွက်စာတမ်း: 'မူလ timeline' ကို ၁၉၄၃ တွင် ဖျက်ပစ်ခဲ့သည်ဟု ဆိုသည်။"
    },
    {
      id: "MM-FICT-09", title: "The Reversed Birth · Subject 0x25", my: "ပြောင်းပြန် မွေးဖွားမှု · ဘာသာရပ် 0x25",
      meta: "SEALED · 🔴 FICTION", cls: "status-sealed", marker: "fiction",
      body: "Documentation of Hnin Wai (b. 1993), who allegedly 'remembers dying 4 years before her birth.' No medical evidence supports reincarnation. Fictional case study.",
      bodyMy: "Hnin Wai (၁၉၉၃ မွေး) ၏ မှတ်တမ်း — 'မမွေးမီ ၄ နှစ်က သေဆုံးခဲ့သည်' ဟု မှတ်မိသည်ဟု ဆိုသည်။"
    },
    {
      id: "MM-FICT-10", title: "Chroma Keepers · Testimony File", my: "Chroma Keepers · သက်သေခံချက် ဖိုင်",
      meta: "SEALED · 🔴 FICTION", cls: "status-sealed", marker: "fiction",
      body: "Interviews with 7 'Chroma Keepers' — people who claim to remember a color 'removed from reality in 1962.' Fictional group with no documented members.",
      bodyMy: "'၁၉၆၂ တွင် reality မှ ဖယ်ရှားခံခဲ့ရသော အရောင်' ကို မှတ်မိသည်ဟု ဆိုသော 'Chroma Keepers' ၇ ဦးနှင့် အင်တာဗျူး။"
    },
    {
      id: "MM-FICT-11", title: "The Three Sisters · Memory Split", my: "ညီမ သုံးဦး · မှတ်ဉာဏ် ခွဲခြမ်းမှု",
      meta: "SEALED · 🔴 FICTION", cls: "status-sealed", marker: "fiction",
      body: "Medical documentation of Ma Thida, Ma Mya, and Ma Nilar — three sisters from Dawei who each allegedly remember one-third of their shared childhood. Fictional case study.",
      bodyMy: "ထားဝယ်မြို့မှ ညီမ သုံးဦး — Ma Thida၊ Ma Mya၊ Ma Nilar။"
    }
  ];

  window.BLT_DATA.files = window.BLT_DATA.files.concat(extraFiles);
})();
