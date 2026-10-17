/* Bureau of Lost Timelines — Base Storylines */
window.BLT_STORYLINES = {
  categories: [
    { id: "all",       label: "ALL" },
    { id: "timeline",  label: "TIMELINE ERASURES" },
    { id: "places",    label: "LOST PLACES" },
    { id: "observers", label: "OBSERVERS" },
    { id: "memory",    label: "MEMORY" },
    { id: "deep",      label: "DEEP ARCHIVE" }
  ],
  stories: [
    {
      id: "arc-0x7F", cat: "timeline",
      tag: "ARC 01 · TIMELINE ERASURE",
      title: "The 0x7F Incident", my: "0x7F ဖြစ်ရပ်",
      excerpt: "A timeline was terminated in 2019 after 40 years of creative stagnation. 4.2 billion minds were migrated. 126,000 still remember what was lost.",
      excerptMy: "နှစ် ၄၀ ကြာ ဖန်တီးနိုင်စွမ်း ဆုံးရှုံးပြီးနောက် ၂၀၁၉ ခုနှစ်တွင် timeline တစ်ခုကို ရပ်ဆိုင်းခဲ့သည်။",
      date: "2019-11-04", marker: "fiction",
      chars: ["Director 0", "Subject Zero", "The Dreamers of Yangon"],
      fragments: [
        "[FRAGMENT 0x7F-A]\n'ကျွန်တော် အိပ်မက်ထဲမှာ မြို့တစ်မြို့ကို မြင်တယ်။\nအဲဒီမြို့မှာ လူတွေ ပြုံးနေကြတယ်။\nဒါပေမယ့် သူတို့ ဘာမှ မဖန်တီးကြဘူး။'\n— Dreamer #4, Yangon"
      ],
      narrative: `
        <h4>BACKGROUND</h4>
        <p>Timeline 0x7F diverged from the baseline in 1979. Its defining characteristic was not war or disaster — it was <em>perfection</em>. Within four decades, poverty, disease, and conflict were eliminated. But so was art, invention, and ambition.</p>
        <p class="my">Timeline 0x7F သည် baseline မှ ၁၉၇၉ ခုနှစ်တွင် ကွဲထွက်ခဲ့သည်။ ၎င်း၏ ထူးခြားချက်မှာ <em>ပြီးပြည့်စုံမှု</em> ဖြစ်သည်။</p>
        <h4>THE DECISION</h4>
        <p>In October 2019, the Bureau's Ethics Committee voted 7-2 to terminate 0x7F. The stated reason: <em>"A timeline without creation is a timeline without humanity."</em></p>
        <p class="my">၂၀၁၉ ခုနှစ် အောက်တိုဘာလတွင် ဌာန၏ ကျင့်ဝတ်ကော်မတီက 0x7F ကို ရပ်ဆိုင်းရန် ၇-၂ မဲဖြင့် ဆုံးဖြတ်ခဲ့သည်။</p>
        <h4>AFTERMATH</h4>
        <p>4.2 billion consciousness streams were migrated over 72 hours. 126,000 subjects retained residual echoes — fragments of memories from a life they never lived.</p>
        <p class="my">သတိစီးကြောင်း ၄.၂ ဘီလီယံကို နာရီ ၇၂ အတွင်း ရွှေ့ပြောင်းခဲ့သည်။</p>
      `
    },
    {
      id: "arc-war-twice", cat: "timeline",
      tag: "ARC 02 · TIMELINE ERASURE",
      title: "The War That Ended Twice", my: "နှစ်ကြိမ် ပြီးဆုံးသွားသော စစ်ပွဲ",
      excerpt: "A regional conflict concluded in 1978 — and again in 1979. The second ending overwrote the first. A nation was erased both times.",
      excerptMy: "ဒေသတွင်း စစ်ပွဲတစ်ခုသည် ၁၉၇၈ ခုနှစ်တွင် ပြီးဆုံးခဲ့သည် — ပြီးတော့ ၁၉၇၉ ခုနှစ်တွင် ထပ်မံပြီးဆုံးခဲ့သည်။",
      date: "1978-1979", marker: "fiction",
      chars: ["U Thant Zin", "Agent Hla Myint", "The Lost Nation"],
      fragments: [
        "[FRAGMENT - 1978]\n'စစ်ပွဲ ပြီးသွားပြီ။ ငါတို့ အိမ်ပြန်နိုင်ပြီ။\nဒါပေမယ့် ငါတို့ ဘယ်ကို ပြန်ရမှာလဲ။'"
      ],
      narrative: `
        <h4>THE FIRST ENDING (1978)</h4>
        <p>A small island nation — population 400,000 — was caught between two larger powers. When the war ended in 1978, the nation was "administratively dissolved" as part of the peace treaty.</p>
        <p class="my">လူဦးရေ ၄၀၀,၀၀၀ ရှိသော ကျွန်းနိုင်ငံငယ်လေးတစ်ခုသည် အင်အားကြီးနိုင်ငံနှစ်ခုကြား ညပ်နေခဲ့သည်။</p>
        <h4>THE SECOND ENDING (1979)</h4>
        <p>One year later, a different timeline's version of the war ended. The Bureau chose to keep the 1979 version as baseline. The 1978 version was erased.</p>
        <p class="my">တစ်နှစ်အကြာတွင် အခြား timeline တစ်ခုမှ စစ်ပွဲ version တစ်ခု ပြီးဆုံးခဲ့သည်။</p>
      `
    },
    {
      id: "arc-forgot-name", cat: "places",
      tag: "ARC 03 · LOST PLACE",
      title: "The City That Forgot Its Name", my: "နာမည်ကို မေ့သွားသော မြို့",
      excerpt: "A city exists on no map, remembered by 12 people. All 12 dream of the same clock tower — one with 13 hours.",
      excerptMy: "မြေပုံပေါ်တွင် မရှိသော မြို့တစ်မြို့ရှိသည်။ လူ ၁၂ ဦးက မှတ်မိနေသည်။",
      date: "2016", marker: "fiction",
      chars: ["Agent Kyaw Swar", "The 12 Dreamers", "The Clock Tower"],
      fragments: [
        "[FRAGMENT 0x42-A]\n'ကျွန်တော် နာရီကို ကြည့်လိုက်တယ်။ ၁၃:၀၀ ဖြစ်နေတယ်။'\n— Agent Kyaw Swar, missing since 2016"
      ],
      narrative: `
        <h4>THE DREAM</h4>
        <p>Twelve people across Myanmar, Thailand, and India share an identical recurring dream: a small city square, a clock tower with thirteen positions on its face, and a sky that never changes color.</p>
        <p class="my">မြန်မာ၊ ထိုင်း၊ အိန္ဒိယတစ်လျှောက် လူ ၁၂ ဦးသည် တစ်ထပ်တည်းတူသော ထပ်ခါတလဲလဲ အိပ်မက်ကို မက်နေကြသည်။</p>
        <h4>THE SEARCH</h4>
        <p>In 2016, the Bureau dispatched three agents to locate the city. Agent Kyaw Swar's final transmission: <em>"The clock — it's not broken. The day has more hours here."</em></p>
        <p class="my">၂၀၁၆ ခုနှစ်တွင် ဌာနမှ အေးဂျင့် ၃ ဦးကို မြို့ကို ရှာဖွေရန် စေလွှတ်ခဲ့သည်။</p>
      `
    },
    {
      id: "arc-25hour", cat: "places",
      tag: "ARC 04 · LOST PLACE",
      title: "The 25th Hour", my: "၂၅ နာရီမြောက်",
      excerpt: "In 2014, 47 people reported experiencing an extra hour. Eleven have since vanished.",
      excerptMy: "၂၀၁၄ ခုနှစ်တွင် လူ ၄၇ ဦးက နာရီတစ်နာရီ ပိုရခဲ့သည်ဟု တိုင်ခဲ့သည်။",
      date: "2014", marker: "fiction",
      chars: ["The 47", "The Missing 11", "Timeline Fragments"],
      fragments: ["[FRAGMENT 0x25-A]\n'ကျွန်တော် နာရီကို ကြည့်တယ်။ ၃:၀၀ ဖြစ်နေတယ်။'"],
      narrative: `
        <h4>THE REPORTS</h4>
        <p>Between March and September 2014, 47 individuals across 14 countries reported a "missing hour" that they experienced but could not account for.</p>
        <p class="my">၂၀၁၄ ခုနှစ် မတ်လမှ စက်တင်ဘာလအတွင်း နိုင်ငံ ၁၄ နိုင်ငံမှ လူ ၄၇ ဦးက "ပျောက်နေသော နာရီ" ကို တိုင်ခဲ့သည်။</p>
        <h4>THE MISSING</h4>
        <p>Eleven of the 47 disappeared between 2015 and 2018. Their last known locations form a perfect circle — centered on an uninhabited island in the Andaman Sea.</p>
        <p class="my">၄၇ ဦးအနက် ၁၁ ဦးသည် ၂၀၁၅ မှ ၂၀၁၈ အတွင်း ပျောက်ကွယ်သွားခဲ့သည်။</p>
      `
    },
    {
      id: "arc-subject-zero", cat: "observers",
      tag: "ARC 05 · OBSERVER",
      title: "Subject Zero / The Listener", my: "ဘာသာရပ် သုည / နားထောင်သူ",
      excerpt: "One person can hear conversations from timelines that no longer exist.",
      excerptMy: "လူတစ်ဦးသည် မရှိတော့သော timeline များမှ စကားပြောသံများကို ကြားနိုင်သည်။",
      date: "2021", marker: "fiction",
      chars: ["Subject Zero", "Facility-9 Staff", "The Watchers"],
      fragments: ["[INTERVIEW #47 - 2021]\n'ကျွန်တော် နားထောင်နေတယ်။\nတစ်ချိန်တည်းမှာ စကားသံ ၄ သန်းလောက် ကြားနေရတယ်။'"],
      narrative: `
        <h4>ORIGIN</h4>
        <p>Subject Zero was identified in 2016 after he walked into a police station in Mandalay and asked to be arrested. He claimed he could "hear the dead timelines."</p>
        <p class="my">Subject Zero ကို ၂၀၁၆ ခုနှစ်တွင် ဖော်ထုတ်ခဲ့သည် — မန္တလေးမြို့ ရဲစခန်းတစ်ခုသို့ ဝင်ပြီး အဖမ်းခံလိုသည်ဟု ပြောခဲ့ပြီးနောက်။</p>
        <h4>THE WARNING</h4>
        <p>In 2018, Subject Zero provided his first coherent warning: <em>"There is something outside the timelines. It watches the Bureau. It has always watched."</em></p>
        <p class="my">၂၀၁၈ ခုနှစ်တွင် Subject Zero က ပထမဆုံး ရှင်းလင်းသော သတိပေးချက်ကို ပေးခဲ့သည်။</p>
      `
    },
    {
      id: "arc-static", cat: "observers",
      tag: "ARC 06 · OBSERVER",
      title: "The Watcher in the Static", my: "Static ထဲမှ စောင့်ကြည့်သူ",
      excerpt: "Every morning at 03:33, an unknown symbol appears on a CCTV camera.",
      excerptMy: "နေ့စဉ် နံနက် ၃:၃၃ တွင် CCTV ကင်မရာတွင် မသိသော သင်္ကေတတစ်ခု ပေါ်လာသည်။",
      date: "2018", marker: "fiction",
      chars: ["Agent Aye Chan", "The Translators", "The Symbol"],
      fragments: ["[PARTIAL TRANSLATION - 2018]\n'[ကျွန်ုပ်တို့] ... ကြည့်ရှုနေသည် ... [သင်တို့] ... မသိပါ ...'"],
      narrative: `
        <h4>THE ROOM</h4>
        <p>Sub-level 4 of Bureau Headquarters contains a sealed room that has not been opened since 1988. Its CCTV still functions.</p>
        <p class="my">ဌာန ဌာနချုပ်၏ အောက်ထပ် ၄ တွင် ၁၉၈၈ ကတည်းက မဖွင့်ခဲ့သော အခန်းတစ်ခန်း ရှိသည်။</p>
        <h4>THE TRANSLATORS</h4>
        <p>Seven translators were assigned between 2018 and 2020. All seven reported hearing "whispering." Three were hospitalized.</p>
        <p class="my">၂၀၁၈ မှ ၂၀၂၀ အတွင်း ဘာသာပြန်သူ ၇ ဦးကို တာဝန်ပေးခဲ့သည်။ ၃ ဦး ဆေးရုံတင်ခံခဲ့ရသည်။</p>
      `
    },
    {
      id: "arc-tuesday", cat: "memory",
      tag: "ARC 07 · MEMORY",
      title: "The Tuesday That Never Existed", my: "မဖြစ်ခဲ့ဖူးသော အင်္ဂါနေ့",
      excerpt: "230 people in Yangon remember a Tuesday in March 2017 that never happened.",
      excerptMy: "ရန်ကုန်မြို့မှ လူ ၂၃၀ က ၂၀၁၇ ခုနှစ် မတ်လအတွင်း အင်္ဂါနေ့တစ်နေ့ကို မှတ်မိနေသည်။",
      date: "2017-03", marker: "fiction",
      chars: ["The 230", "The Tea Shop", "Bureau Investigators"],
      fragments: ["[WITNESS #114]\n'ကျွန်တော် အဲဒီနေ့ကို မှတ်မိတယ်။\nကျွန်တော် လက်ဖက်ရည်ဆိုင်မှာ ထိုင်နေတယ်။'"],
      narrative: `
        <h4>THE ANOMALY</h4>
        <p>In 2023, a Bureau field agent noticed a pattern: multiple unrelated individuals describing Tuesday, March 14, 2017 — a day that did not exist.</p>
        <p class="my">၂၀၂၃ ခုနှစ်တွင် ဌာနမှ ကွင်းဆင်း အေးဂျင့်တစ်ဦးက ရန်ကုန်မြို့မှ လူများစွာက တိကျသော နေ့တစ်နေ့ကို ဖော်ပြနေကြသည်ကို သတိထားမိသည်။</p>
        <h4>THE SHOP</h4>
        <p>All 230 remember the same tea shop. None can locate it.</p>
        <p class="my">၂၃၀ ဦးလုံး တူညီသော လက်ဖက်ရည်ဆိုင်ကို မှတ်မိနေကြသည်။ မည်သူမှ ရှာမတွေ့ပါ။</p>
      `
    },
    {
      id: "arc-two-childhoods", cat: "memory",
      tag: "ARC 08 · MEMORY",
      title: "The Man With Two Childhoods", my: "ကလေးဘဝ နှစ်ခုရှိသူ",
      excerpt: "A man from Mawlamyine remembers two mothers, two fathers, and six siblings.",
      excerptMy: "မော်လမြိုင်မြို့မှ အမျိုးသားတစ်ဦးသည် မိခင်နှစ်ဦး၊ ဖခင်နှစ်ဦး ရှိသည်ဟု မှတ်မိသည်။",
      date: "2021", marker: "fiction",
      chars: ["Anomaly 0x33-118", "Bureau Psych Team"],
      fragments: ["[INTERVIEW 0x33-118]\n'ကျွန်တော့်အမေ နှစ်ယောက်ရှိတယ်။'"],
      narrative: `
        <h4>THE SUBJECT</h4>
        <p>Anomaly 0x33-118 is a 34-year-old man from Mawlamyine who attempted to apply for two national ID cards with different family names.</p>
        <p class="my">Anomaly 0x33-118 သည် မော်လမြိုင်မြို့မှ အသက် ၃၄ နှစ် အမျိုးသားတစ်ဦး ဖြစ်သည်။</p>
        <h4>THE THEORY</h4>
        <p>The Bureau believes he is a "quantum superposition" — a consciousness existing in two timelines simultaneously.</p>
        <p class="my">ဌာနက သူသည် "quantum superposition" ဖြစ်သည်ဟု ယုံကြည်သည်။</p>
      `
    },
    {
      id: "arc-children-tomorrow", cat: "memory",
      tag: "ARC 09 · MEMORY",
      title: "The Children Who Remember Tomorrow", my: "မနက်ဖြန်ကို မှတ်မိနေသော ကလေးများ",
      excerpt: "0.01% of children born after 2020 can recall future events.",
      excerptMy: "၂၀၂၀ ခုနှစ်နောက်ပိုင်း မွေးဖွားသော ကလေးများအနက် ၀.၀၁% သည် အနာဂတ်ဖြစ်ရပ်များကို မှတ်မိနေကြသည်။",
      date: "2020-2024", marker: "fiction",
      chars: ["The Children", "Bureau Child Services"],
      fragments: ["[CASE FILE CH-047]\n'ကျွန်တော် နောက်နှစ် ဇန်နဝါရီမှာ သေမယ်။'"],
      narrative: `
        <h4>THE PATTERN</h4>
        <p>Beginning in 2022, Bureau field offices received reports of children — ages 3-7 — who spoke of "before" and "after" in ways that did not match their age.</p>
        <p class="my">၂၀၂၂ ခုနှစ်မှ စတင်၍ ဌာန ကွင်းဆင်းရုံးများသည် ကလေးများ၏ အစီရင်ခံစာများကို လက်ခံရရှိခဲ့သည်။</p>
        <h4>THE MEETINGS</h4>
        <p>These children report meeting each other in dreams. A room with green walls and a clock tower.</p>
        <p class="my">ဤကလေးများသည် အိပ်မက်ထဲတွင် တစ်ဦးနှင့်တစ်ဦး တွေ့ဆုံကြသည်ဟု တိုင်ကြသည်။</p>
      `
    },
    {
      id: "arc-director-zero", cat: "deep",
      tag: "ARC 10 · DEEP ARCHIVE",
      title: "Director 0's Last Entry", my: "Director 0 ၏ နောက်ဆုံး မှတ်တမ်း",
      excerpt: "The Bureau's founder wrote one final entry in 1988. He was not lost — he was trapped.",
      excerptMy: "ဌာန တည်ထောင်သူသည် ၁၉၈၈ ခုနှစ်တွင် နောက်ဆုံး မှတ်တမ်းတစ်ခုကို ရေးသားခဲ့သည်။",
      date: "1988", marker: "fiction",
      chars: ["Director 0", "The 12 Agents", "The 13th Month"],
      fragments: ["[DIRECTOR 0 - FINAL ENTRY]\n'timeline တွေက ကျွန်တော်တို့ကို စောင့်ကြည့်နေတာ။'"],
      narrative: `
        <h4>THE FOUNDER</h4>
        <p>Director 0 founded the Bureau in 1947. His final act was to sign the order that erased the 13th Month.</p>
        <p class="my">Director 0 — အတိအကျ နာမည် မသိ — သည် ၁၉၄၇ ခုနှစ်တွင် ဌာနကို တည်ထောင်ခဲ့သည်။</p>
        <h4>THE TRUTH</h4>
        <p>Director 0 was not lost. He was <em>contained</em> within the 13th Month. He has been trapped inside for 36 years.</p>
        <p class="my">Director 0 ပျောက်ကွယ်သွားခြင်း မဟုတ်ပါ။ သူသည် ၎င်းအတွင်း <em>ချုပ်နှောင်ခံ</em> ခဲ့ရခြင်း ဖြစ်သည်။</p>
      `
    },
    {
      id: "arc-founding-lie", cat: "deep",
      tag: "ARC 11 · DEEP ARCHIVE",
      title: "The Bureau's Founding Lie", my: "ဌာန၏ တည်ထောင်မှု မုသား",
      excerpt: "The Bureau claims it was founded in 1952. It was actually founded in 1947.",
      excerptMy: "ဌာနက ၁၉၅၂ ခုနှစ်တွင် တည်ထောင်ခဲ့သည်ဟု ဆိုသည်။ အမှန်တကယ် ၁၉၄၇ ခုနှစ်တွင် ဖြစ်သည်။",
      date: "1947", marker: "fiction",
      chars: ["Director 0", "The Founders", "Timeline 0x00"],
      fragments: ["[INTERNAL MEMO #0001 - 1947]\n'ကျွန်ုပ်တို့သည် လူသားများကို ပိုကောင်းသော ကမ္ဘာတစ်ခု ပေးခဲ့သည်။'"],
      narrative: `
        <h4>THE OFFICIAL STORY</h4>
        <p>According to all public records, the Bureau was founded in 1952.</p>
        <p class="my">လူသိရှင်ကြား မှတ်တမ်းများအရ ဌာနကို ၁၉၅၂ ခုနှစ်တွင် တည်ထောင်ခဲ့သည်။</p>
        <h4>THE TRUTH</h4>
        <p>In 1947, a group discovered they could observe and influence alternate timelines. The first timeline they erased was one where World War II never occurred.</p>
        <p class="my">၁၉၄၇ ခုနှစ်တွင် အုပ်စုတစ်စုက အခြား timeline များကို စောင့်ကြည့်နိုင်သည်ကို ရှာဖွေတွေ့ရှိခဲ့သည်။</p>
      `
    }
  ]
};
