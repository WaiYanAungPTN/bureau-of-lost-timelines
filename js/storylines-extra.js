/* Bureau of Lost Timelines — Storylines ARC 12-21 */
(function () {
  'use strict';
  if (!window.BLT_STORYLINES) return;

  const extra = [
    {
      id: "arc-mirror-war", cat: "timeline",
      tag: "ARC 12 · TIMELINE ERASURE",
      title: "The Mirror War", my: "မှန်စစ်ပွဲ",
      excerpt: "In 1968, two timelines fought a war across a shared boundary. Both sides erased the other's victories.",
      excerptMy: "၁၉၆၈ ခုနှစ်တွင် timeline နှစ်ခုသည် မျှဝေထားသော နယ်နိမိတ်တစ်လျှောက် စစ်ပွဲဆင်နွှဲခဲ့သည်။",
      date: "1968", marker: "fiction",
      chars: ["General Aung Kyaw", "Director 0", "The Boundary Keepers"],
      fragments: ["[FRAGMENT 0xM-A]\n'စစ်ပွဲက ပြီးသွားတယ်။ ဒါပေမယ့် ဘယ်သူ အောင်ခဲ့လဲဆိုတာ ဘယ်သူမှ မသိဘူး။'"],
      narrative: `
        <h4>THE BOUNDARY</h4>
        <p>In 1968, the Bureau discovered two adjacent timelines shared a spatial boundary. Their histories diverged in 1943 during a decisive battle.</p>
        <p class="my">၁၉၆၈ ခုနှစ်တွင် ဌာနသည် ကပ်လျက် timeline နှစ်ခု ဖြတ်ကျော်နိုင်သော နယ်နိမိတ်တစ်ခုကို မျှဝေထားသည်ကို ရှာဖွေတွေ့ရှိခဲ့သည်။</p>
        <h4>THE OUTCOME</h4>
        <p>Both timelines still exist. Neither won. But both have lost the memory of the war itself.</p>
        <p class="my">timeline နှစ်ခုလုံး တည်ရှိနေဆဲ။ မည်သူမှ မအောင်ခဲ့ပါ။</p>
      `
    },
    {
      id: "arc-rain-that-remembers", cat: "timeline",
      tag: "ARC 13 · TIMELINE ERASURE",
      title: "The Rain That Remembers", my: "မှတ်မိနေသော မိုး",
      excerpt: "A rainstorm that fell in 1983 carries the memories of a timeline that never existed.",
      excerptMy: "၁၉၈၃ ခုနှစ်တွင် ရွာခဲ့သော မိုးတစ်ခုသည် မည်သည့်အခါမှ မတည်ရှိခဲ့သော timeline တစ်ခု၏ မှတ်ဉာဏ်များကို သယ်ဆောင်ထားသည်။",
      date: "1983", marker: "fiction",
      chars: ["The 4,000", "Dr. Khin Maung", "The Remembering Storm"],
      fragments: ["[FIELD NOTE — 1983]\n'မိုးက မှတ်မိနေတယ်လို့ ကျွန်တော် ထင်တယ်။'"],
      narrative: `
        <h4>THE STORM</h4>
        <p>On August 12, 1983, an unusual rainstorm passed over Southeast Asia. 4,000 people reported the same experience.</p>
        <p class="my">၁၉၈၃ ခုနှစ် သြဂုတ်လ ၁၂ ရက်တွင် အရှေ့တောင် အာရှအပေါ် ပုံမှန်မဟုတ်သော မိုးသက်မုန်တိုင်း ဖြတ်သန်းခဲ့သည်။</p>
        <h4>THE MEMORY</h4>
        <p>The memory is always the same: a tea shop, a woman laughing, a clock tower showing 13:00.</p>
        <p class="my">မှတ်ဉာဏ်က အမြဲတမ်း တူညီသည်: လက်ဖက်ရည်ဆိုင်၊ ရယ်နေသော အမျိုးသမီးတစ်ဦး၊ နာရီ ၁၃:၀၀ ပြနေသော နာရီမျှော်စင်။</p>
      `
    },
    {
      id: "arc-inverted-city", cat: "places",
      tag: "ARC 14 · LOST PLACE",
      title: "The Inverted City", my: "ဇောက်ထိုး မြို့",
      excerpt: "Beneath Yangon, there is a second Yangon — built upside down.",
      excerptMy: "ရန်ကုန်မြို့အောက်တွင် ဒုတိယ ရန်ကုန်မြို့တစ်မြို့ ရှိသည် — ဇောက်ထိုး တည်ဆောက်ထားသည်။",
      date: "2015", marker: "fiction",
      chars: ["Agent Soe Min", "Agent Thandar Win", "The Inverted Citizens"],
      fragments: ["[AGENT LOG — SOE MIN]\n'ကျွန်တော် အောက်ကို ကြည့်လိုက်တယ်။ မြို့တစ်မြို့ ရှိတယ်။'"],
      narrative: `
        <h4>THE DISCOVERY</h4>
        <p>In 2015, Bureau ground-penetrating radar detected a "mirror city" at 400 meters depth. But this city was an <em>inversion</em>.</p>
        <p class="my">၂၀၁၅ ခုနှစ်တွင် ဌာန၏ ground-penetrating radar သည် အနက် ၄၀၀ မီတာတွင် "မှန်မြို့" တစ်မြို့ကို ရှာဖွေတွေ့ရှိခဲ့သည်။</p>
        <h4>THE WARNING</h4>
        <p>The Inverted Citizens' message: <em>"Stop erasing. Every time you erase a timeline, you make us heavier."</em></p>
        <p class="my">ဇောက်ထိုး နိုင်ငံသားများ၏ မက်ဆေ့ချ်: <em>"ဖျက်ပစ်တာကို ရပ်ပါ။"</em></p>
      `
    },
    {
      id: "arc-last-train", cat: "places",
      tag: "ARC 15 · LOST PLACE",
      title: "The Last Train from Nowhere", my: "ဘယ်ကမှ မဟုတ်သော နောက်ဆုံး ရထား",
      excerpt: "A train arrives at Yangon Central Station every night at 03:33.",
      excerptMy: "ရန်ကုန် ဗဟိုဘူတာသို့ နေ့စဉ် ည ၃:၃၃ တွင် ရထားတစ်စီး ရောက်လာသည်။",
      date: "2012–present", marker: "fiction",
      chars: ["The 12 Passengers", "Station Master U Kyaw", "The 03:33 Train"],
      fragments: ["[STATION LOG — 2019-06-14]\n'ရထား ရောက်လာတယ်။ ဒါပေမယ့် ရထားလမ်းပေါ်မှာ မရှိဘူး။'"],
      narrative: `
        <h4>THE TRAIN</h4>
        <p>Since 2012, a train has arrived at Yangon Central Station every night at 03:33. It appears on no schedule. Its destination board reads: <strong>နောက်ဆုံးဘူတာ</strong>.</p>
        <p class="my">၂၀၁၂ ခုနှစ်ကတည်းက ရထားတစ်စီးသည် ရန်ကုန် ဗဟိုဘူတာသို့ နေ့စဉ် ည ၃:၃၃ တွင် ရောက်လာသည်။</p>
        <h4>THE PASSENGERS</h4>
        <p>Twelve people have boarded the train since 2012. All disappeared before the doors closed.</p>
        <p class="my">၂၀၁၂ ခုနှစ်ကတည်းက လူ ၁၂ ဦး ရထားပေါ် တက်ခဲ့သည်။</p>
      `
    },
    {
      id: "arc-floor-13", cat: "observers",
      tag: "ARC 16 · OBSERVER",
      title: "The Thirteenth Floor", my: "ထပ် ၁၃",
      excerpt: "Bureau Headquarters has 12 floors. Employees sometimes arrive on Floor 13.",
      excerptMy: "ဌာန ဌာနချုပ်တွင် ထပ် ၁၂ ခု ရှိသည်။ ဝန်ထမ်းများသည် ရံဖန်ရံခါ ထပ် ၁၃ သို့ ရောက်သည်။",
      date: "ongoing", marker: "fiction",
      chars: ["Floor 13 Staff", "The Elevator", "HR Department"],
      fragments: ["[MEMO FROM HR]\n'ထပ် ၁၃ ဝန်ထမ်းများသည် အခြား ဝန်ထမ်းများနှင့် တွေ့ဆုံခွင့် မရှိပါ။'"],
      narrative: `
        <h4>THE FLOOR</h4>
        <p>Bureau Headquarters was designed with 12 floors. Yet employees occasionally arrive on a 13th floor.</p>
        <p class="my">ဌာန ဌာနချုပ်ကို ထပ် ၁၂ ခုဖြင့် ဒီဇိုင်းရေးဆွဲခဲ့သည်။ သို့သော် ဝန်ထမ်းများသည် ထပ် ၁၃ သို့ ရံဖန်ရံခါ ရောက်သည်။</p>
        <h4>THE RULE</h4>
        <p>Bureau Rule 13: <em>"If you arrive on Floor 13, do not speak. Do not look at the staff. Turn around and leave."</em></p>
        <p class="my">ဌာန စည်းမျဉ်း ၁၃: <em>"ထပ် ၁၃ သို့ ရောက်ပါက စကား မပြောရ။"</em></p>
      `
    },
    {
      id: "arc-doppelganger", cat: "observers",
      tag: "ARC 17 · OBSERVER",
      title: "The Doppelgänger Program", my: "Doppelgänger အစီအစဉ်",
      excerpt: "Every Bureau employee has a doppelgänger living in an adjacent timeline.",
      excerptMy: "ဌာန ဝန်ထမ်းတိုင်းတွင် doppelgänger တစ်ဦး ရှိသည်။",
      date: "1995–present", marker: "fiction",
      chars: ["Agent Nilar", "Agent Nilar (2)", "The Doppelgänger Committee"],
      fragments: ["[REPORT — AGENT NILAR]\n'ကျွန်မကိုယ်ကျွန်မ ကို တွေ့ခဲ့တယ်။'"],
      narrative: `
        <h4>THE PHENOMENON</h4>
        <p>The Bureau discovered in 1995 that most individuals have a "temporal doppelgänger" — a version of themselves living in an adjacent timeline.</p>
        <p class="my">၁၉၉၅ ခုနှစ်တွင် ဌာနသည် လူအများစုတွင် "temporal doppelgänger" တစ်ဦး ရှိသည်ကို ရှာဖွေတွေ့ရှိခဲ့သည်။</p>
        <h4>THE RULE</h4>
        <p>When two doppelgängers meet, one must be "resolved." The Bureau has never successfully predicted which outcome will occur.</p>
        <p class="my">doppelgänger နှစ်ဦး တွေ့သောအခါ တစ်ဦးကို "ဖြေရှင်းရ" မည်။</p>
      `
    },
    {
      id: "arc-photograph-that-moves", cat: "memory",
      tag: "ARC 18 · MEMORY",
      title: "The Photograph That Moves", my: "ရွေ့နေသော ဓာတ်ပုံ",
      excerpt: "A single photograph changes every time it is viewed.",
      excerptMy: "ဓာတ်ပုံတစ်ပုံသည် ကြည့်တိုင်း ပြောင်းလဲနေသည်။",
      date: "2020", marker: "fiction",
      chars: ["The Photograph", "Dr. Aung Ko", "Bureau Photo Lab"],
      fragments: ["[ANALYSIS LOG]\n'ဓာတ်ပုံ #1 — ကြည့်ချိန် ၁၄:၀၀\nလူ ၇ ဦး ပါဝင်သည်။'"],
      narrative: `
        <h4>THE PHOTOGRAPH</h4>
        <p>Recovered from a corrupted server backup in 2020, Photograph #1 shows a room in Bureau Headquarters. There are 7 people.</p>
        <p class="my">၂၀၂၀ ခုနှစ်တွင် ပျက်စီးနေသော ဆာဗာ backup တစ်ခုမှ ရှာဖွေတွေ့ရှိခဲ့သည်။</p>
        <h4>THE CHANGE</h4>
        <p>First view: all 7 seated. Second view: one standing. Third view: two missing. Fourth view: one of the missing is looking directly at the camera.</p>
        <p class="my">ပထမအကြိမ် ကြည့်သောအခါ လူ ၇ ဦးလုံး ထိုင်နေကြသည်။ ၁၅ မိနစ်အကြာ ထပ်ကြည့်သောအခါ ၁ ဦး မတ်တတ်ရပ်နေသည်။</p>
      `
    },
    {
      id: "arc-forgotten-language", cat: "memory",
      tag: "ARC 19 · MEMORY",
      title: "The Forgotten Language", my: "မေ့သွားသော ဘာသာစကား",
      excerpt: "In 2016, a 6-year-old child began speaking a language that died out 12,000 years ago.",
      excerptMy: "၂၀၁၆ ခုနှစ်တွင် အသက် ၆ နှစ် ကလေးတစ်ဦးသည် လွန်ခဲ့သော နှစ် ၁၂,၀၀၀ က ကွယ်ပျောက်သွားသော ဘာသာစကားဖြင့် စတင် ပြောဆိုခဲ့သည်။",
      date: "2016", marker: "fiction",
      chars: ["The Child (Ma Thiri)", "Dr. U Win Maung", "The Proto-Speakers"],
      fragments: ["[TRANSCRIPT — SESSION 4]\n'ကလေးက ပြောတယ်: \"အမေ၊ မိုးရွာတော့မယ်။\"'"],
      narrative: `
        <h4>THE CHILD</h4>
        <p>Ma Thiri was 6 years old when she began speaking a language her parents did not recognize.</p>
        <p class="my">Ma Thiri သည် အသက် ၆ နှစ်တွင် မိဘများ မမှတ်မိနိုင်သော ဘာသာစကားဖြင့် စတင် ပြောဆိုခဲ့သည်။</p>
        <h4>THE MESSAGE</h4>
        <p>Her statements were <em>warnings</em>. She spoke of "the ones who came before us."</p>
        <p class="my">သူမ၏ ပြောဆိုချက်များသည် <em>သတိပေးချက်များ</em> ဖြစ်သည်။</p>
      `
    },
    {
      id: "arc-protocol-13", cat: "deep",
      tag: "ARC 20 · DEEP ARCHIVE",
      title: "Protocol 13", my: "ပရိုတိုကော ၁၃",
      excerpt: "The Bureau has a standing protocol to be activated if the 13th Month ever returns.",
      excerptMy: "ဌာနတွင် ၁၃ လမြောက် ပြန်ပေါ်လာပါက စတင်အသုံးပြုရမည့် အမြဲတမ်း ပရိုတိုကော ရှိသည်။",
      date: "1988–present", marker: "fiction",
      chars: ["Director 0", "The Protocol Vault", "The 12 Agents"],
      fragments: ["[PROTOCOL 13 — SEALED]\n'ပရိုတိုကော ၁၃ ကို ဖွင့်ရန် အခြေအနေ ၃ ခု:'"],
      narrative: `
        <h4>THE SEALED DOCUMENT</h4>
        <p>Protocol 13 is the Bureau's highest classification document. No one currently employed has read it in full.</p>
        <p class="my">ပရိုတိုကော ၁၃ သည် ဌာန၏ အမြင့်ဆုံး လျှို့ဝှက်အဆင့် စာရွက်စာတမ်း ဖြစ်သည်။</p>
        <h4>THE ACTIVATION</h4>
        <p>In 2023, three of the protocol's activation conditions were triggered simultaneously.</p>
        <p class="my">၂၀၂၃ ခုနှစ်တွင် ပရိုတိုကော၏ စတင်အသုံးပြုရေး အခြေအနေ ၃ ခုကို တစ်ပြိုင်နက် ဖြစ်ပေါ်စေခဲ့သည်။</p>
      `
    },
    {
      id: "arc-last-archivist", cat: "deep",
      tag: "ARC 21 · DEEP ARCHIVE",
      title: "The Last Archivist", my: "နောက်ဆုံး မှတ်တမ်းထိန်းသိမ်းသူ",
      excerpt: "There is one person in the Bureau who remembers every erased timeline.",
      excerptMy: "ဌာနတွင် ဖျက်ပစ်ခံခဲ့ရသော timeline တိုင်းကို မှတ်မိသော လူတစ်ဦး ရှိသည်။",
      date: "1947–present", marker: "fiction",
      chars: ["The Archivist", "Director 0", "Every Erased Timeline"],
      fragments: ["[UNFILED NOTE — FOUND IN VAULT 0]\n'ကျွန်မက နာမည် မရှိတဲ့သူ။'"],
      narrative: `
        <h4>THE UNRECORDED</h4>
        <p>There is one employee who exists in no record, on no payroll, in no organizational chart. She is known only as "The Archivist."</p>
        <p class="my">ဌာနတွင် မှတ်တမ်း မရှိသော ဝန်ထမ်းတစ်ဦး ရှိသည်။</p>
        <h4>THE WARNING</h4>
        <p>In 2024, the Archivist said only one sentence: <em>"I am running out of room."</em></p>
        <p class="my">၂၀၂၄ ခုနှစ်တွင် မှတ်တမ်းထိန်းသိမ်းသူက စာကြောင်းတစ်ကြောင်းတည်းသာ ဆိုခဲ့သည်: <em>"ငါ့မှာ နေရာ ကုန်တော့မယ်။"</em></p>
      `
    }
  ];

  window.BLT_STORYLINES.stories = window.BLT_STORYLINES.stories.concat(extra);
})();
