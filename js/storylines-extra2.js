/* Bureau of Lost Timelines — Storylines ARC 22-41 */
(function () {
  'use strict';
  if (!window.BLT_STORYLINES) return;

  const extra2 = [
    {
      id: "arc-color-war", cat: "timeline",
      tag: "ARC 22 · TIMELINE ERASURE",
      title: "The Color That Disappeared", my: "ပျောက်ကွယ်သွားသော အရောင်",
      excerpt: "Before 1962, a color existed between blue and green — one no surviving human can now perceive.",
      excerptMy: "၁၉၆၂ မတိုင်မီ အပြာနှင့် အစိမ်းကြား ရှိသော အရောင်တစ်ခု တည်ရှိခဲ့သည်။",
      date: "1962", marker: "fiction",
      chars: ["Chroma Keepers", "Linguist Dr. Mya Thida", "The Lost Hue"],
      fragments: ["[FIELD NOTE — 1989]\n'ဒီအရောင်အတွက် စကားလုံး ရှိခဲ့တယ်။'"],
      narrative: `
        <h4>THE COLOR</h4>
        <p>In 1962, Bureau scientists discovered that a specific wavelength of light had been "removed" from baseline reality.</p>
        <p class="my">၁၉၆၂ ခုနှစ်တွင် ဌာန သိပ္ပံပညာရှင်များက အပြာနှင့် အစိမ်းကြားရှိ လှိုင်းအလျား တစ်ခုကို baseline reality မှ "ဖယ်ရှား" ခဲ့သည်ကို ရှာဖွေတွေ့ရှိခဲ့သည်။</p>
        <h4>THE WARNING</h4>
        <p>In 2023, a Chroma Keeper warned: "There are 4 more colors waiting to be erased."</p>
        <p class="my">၂၀၂၃ ခုနှစ်တွင် Chroma Keeper တစ်ဦးက သတိပေးခဲ့သည်: "ဖျက်ပစ်ခံရန် စောင့်နေသော အရောင် ၄ ခု ရှိသေးတယ်။"</p>
      `
    },
    {
      id: "arc-last-vote", cat: "timeline",
      tag: "ARC 23 · TIMELINE ERASURE",
      title: "The Election That Never Ended", my: "မပြီးဆုံးခဲ့သော ရွေးကောက်ပွဲ",
      excerpt: "In 1987, a national election was held in a timeline that was erased before results were announced.",
      excerptMy: "၁၉၈၇ ခုနှစ်တွင် ရလဒ် မကြေညာမီ ဖျက်ပစ်ခံခဲ့ရသော timeline တစ်ခုတွင် အမျိုးသား ရွေးကောက်ပွဲ ကျင်းပခဲ့သည်။",
      date: "1987", marker: "fiction",
      chars: ["The Voters", "Bureau Election Monitor", "Candidate Zero"],
      fragments: ["[ARCHIVE FRAGMENT]\n'ရွေးကောက်ပွဲ ပြီးသွားတယ်။ ဒါပေမယ့် ရလဒ်ကို ဘယ်တုန်းမှ မကြေညာခဲ့ဘူး။'"],
      narrative: `
        <h4>THE ELECTION</h4>
        <p>On November 3, 1987, a nation of 8 million people held a historic election. At 03:33 the next morning, the timeline was erased.</p>
        <p class="my">၁၉၈၇ ခုနှစ် နိုဝင်ဘာလ ၃ ရက်တွင် လူဦးရေ ၈ သန်းရှိသော နိုင်ငံတစ်ခုက ရွေးကောက်ပွဲ ကျင်းပခဲ့သည်။</p>
        <h4>CANDIDATE ZERO</h4>
        <p>One candidate appears in every possible outcome as the winner.</p>
        <p class="my">"Candidate Zero" သည် ဖြစ်နိုင်သော ရလဒ်တိုင်းတွင် အောင်နိုင်သူအဖြစ် ပေါ်လာသည်။</p>
      `
    },
    {
      id: "arc-deleted-ocean", cat: "timeline",
      tag: "ARC 24 · TIMELINE ERASURE",
      title: "The Ocean That Was Deleted", my: "ဖျက်ပစ်ခံခဲ့ရသော သမုဒ္ဒရာ",
      excerpt: "A 4-million-square-kilometer ocean existed on Earth until 1971.",
      excerptMy: "၁၉၇၁ ခုနှစ်အထိ ကမ္ဘာပေါ်တွင် စတုရန်းကီလိုမီတာ ၄ သန်း ကျယ်ဝန်းသော သမုဒ္ဒရာတစ်ခု တည်ရှိခဲ့သည်။",
      date: "1971", marker: "fiction",
      chars: ["Oceanographer Dr. Hla Win", "Bureau Cartography", "The Missing Water"],
      fragments: ["[MAP ANNOTATION — 1972]\n'ဒီနေရာမှာ သမုဒ္ဒရာ တစ်ခု ရှိခဲ့တယ်။'"],
      narrative: `
        <h4>THE OCEAN</h4>
        <p>The "Sea of Ashara" existed in baseline Earth until August 1971, when it was removed.</p>
        <p class="my">"Sea of Ashara" သည် ၁၉၇၁ ခုနှစ် သြဂုတ်လအထိ baseline ကမ္ဘာတွင် တည်ရှိခဲ့သည်။</p>
        <h4>THE DROUGHT</h4>
        <p>From 1971 to 1980, a 9-year drought affected parts of Asia and Africa. 200,000 people died.</p>
        <p class="my">၁၉၇၁ မှ ၁၉၈၀ အထိ ၉ နှစ်ကြာ မိုးခေါင်မှု ဖြစ်ပွားခဲ့သည်။</p>
      `
    },
    {
      id: "arc-reversed-birth", cat: "timeline",
      tag: "ARC 25 · TIMELINE ERASURE",
      title: "The Reversed Birth", my: "ပြောင်းပြန် မွေးဖွားမှု",
      excerpt: "In 1993, a child was born who had already died — 4 years earlier, in another timeline.",
      excerptMy: "၁၉၉၃ ခုနှစ်တွင် မွေးဖွားပြီးသား ကလေးတစ်ဦးသည် လွန်ခဲ့သော ၄ နှစ်က အခြား timeline တွင် သေဆုံးခဲ့ပြီး ဖြစ်သည်။",
      date: "1993", marker: "fiction",
      chars: ["Hnin Wai (Subject 0x25)", "Dr. Khin Maung", "The Two Timelines"],
      fragments: ["[MEDICAL LOG — 1993]\n'ကလေးက မွေးလာတယ်။'"],
      narrative: `
        <h4>THE BIRTH</h4>
        <p>Hnin Wai was born on February 14, 1993. Her first words, at six hours old, were: "I came back."</p>
        <p class="my">Hnin Wai ကို ၁၉၉၃ ခုနှစ် ဖေဖော်ဝါရီလ ၁၄ ရက်တွင် မွေးဖွားခဲ့သည်။</p>
        <h4>THE OTHER LIFE</h4>
        <p>Hnin Wai remembers a life that ended in 1989 — 4 years before she was born.</p>
        <p class="my">Hnin Wai သည် ၁၉၈၉ ခုနှစ်တွင် ကုန်ဆုံးခဲ့သော ဘဝကို မှတ်မိနေသည်။</p>
      `
    },
    {
      id: "arc-upstairs-room", cat: "places",
      tag: "ARC 26 · LOST PLACE",
      title: "The Upstairs Room", my: "အပေါ်ထပ် အခန်း",
      excerpt: "Every Bureau facility has an upstairs room that appears on no floor plan.",
      excerptMy: "ဌာန အဆောက်အဦ တိုင်းတွင် မည်သည့် ကြမ်းခင်း အစီအစဉ်တွင်မှ မပါသော အပေါ်ထပ် အခန်းတစ်ခန်း ရှိသည်။",
      date: "ongoing", marker: "fiction",
      chars: ["Bureau Staff", "The Document", "The Empty Chair"],
      fragments: ["[NOTE FROM FACILITY-9 STAFF]\n'အပေါ်ထပ် အခန်းကို ကျွန်တော် သွားခဲ့တယ်။'"],
      narrative: `
        <h4>THE ROOM</h4>
        <p>In every Bureau facility there is an upstairs room that does not exist on paper.</p>
        <p class="my">ဌာန အဆောက်အဦ တိုင်းတွင် စာရွက်ပေါ်တွင် မရှိသော အပေါ်ထပ် အခန်းတစ်ခန်း ရှိသည်။</p>
        <h4>THE RULE</h4>
        <p>Bureau Rule 26: "Do not sit in the chair. Read the document, then leave."</p>
        <p class="my">ဌာန စည်းမျဉ်း ၂၆: "ကုလားထိုင်တွင် မထိုင်ပါနှင့်။"</p>
      `
    },
    {
      id: "arc-hallway-numbers", cat: "places",
      tag: "ARC 27 · LOST PLACE",
      title: "The Hallway With No Numbers", my: "နံပါတ် မရှိသော စင်္ကြံ",
      excerpt: "A hallway in Bureau HQ has doors with no numbers.",
      excerptMy: "ဌာန ဌာနချုပ်ရှိ စင်္ကြံတစ်ခုတွင် နံပါတ် မပါသော တံခါးများ ရှိသည်။",
      date: "unknown", marker: "fiction",
      chars: ["The Doors", "Agent Khin Ohn", "Room Behind Door 7"],
      fragments: ["[AGENT LOG — KHIN OHN]\n'တံခါး ၇ ခုကို ငါ ဖွင့်ခဲ့တယ်။'"],
      narrative: `
        <h4>THE HALLWAY</h4>
        <p>On Floor 3 of Bureau HQ, there is a hallway with 13 doors. None have numbers.</p>
        <p class="my">ဌာန ဌာနချုပ် ထပ် ၃ တွင် တံခါး ၁၃ ခုရှိသော စင်္ကြံတစ်ခု ရှိသည်။</p>
        <h4>THE RULE</h4>
        <p>"Do not enter the same door twice. The room will remember you."</p>
        <p class="my">"တံခါးတစ်ခုတည်းကို နှစ်ကြိမ် မဝင်ပါနှင့်။"</p>
      `
    },
    {
      id: "arc-backwards-clock", cat: "places",
      tag: "ARC 28 · LOST PLACE",
      title: "The Clock That Runs Backwards", my: "နောက်ပြန် လည်နေသော နာရီ",
      excerpt: "In a small village in Shan State, there is a clock that runs backwards.",
      excerptMy: "ရှမ်းပြည်နယ် ရွာငယ်လေးတစ်ရွာတွင် နောက်ပြန် လည်နေသော နာရီတစ်လုံး ရှိသည်။",
      date: "2019", marker: "fiction",
      chars: ["Village of Ywa Ma", "The Clock", "Dr. Aung Ko"],
      fragments: ["[FIELD REPORT — 2019]\n'ရွာထဲမှာ နာရီတစ်လုံး ရှိတယ်။'"],
      narrative: `
        <h4>THE VILLAGE</h4>
        <p>Ywa Ma is a village of 340 people in Shan State. Its residents do not age.</p>
        <p class="my">Ywa Ma သည် ရှမ်းပြည်နယ်ရှိ လူဦးရေ ၃၄၀ ရှိသော ရွာတစ်ရွာ ဖြစ်သည်။</p>
        <h4>THE CLOCK</h4>
        <p>Its hands move counterclockwise. It is counting down to "the moment before the beginning."</p>
        <p class="my">၎င်း၏ လက်တံများသည် နာရီလက်တံ လှည့်ပတ်မှု ဆန့်ကျင်ဘက် ရွေ့နေသည်။</p>
      `
    },
    {
      id: "arc-alley-that-eats", cat: "places",
      tag: "ARC 29 · LOST PLACE",
      title: "The Alley That Eats Memories", my: "မှတ်ဉာဏ်ကို စားသော လမ်းကြား",
      excerpt: "In downtown Yangon, there is an alley that removes memories.",
      excerptMy: "ရန်ကုန်မြို့လယ်တွင် မှတ်ဉာဏ်များကို ဖယ်ရှားပေးသော လမ်းကြားတစ်ခု ရှိသည်။",
      date: "2021", marker: "fiction",
      chars: ["The Alley", "Lost Walkers", "Bureau Investigators"],
      fragments: ["[WITNESS — 2021]\n'ကျွန်တော် လမ်းကြားထဲ ဝင်လိုက်တယ်။'"],
      narrative: `
        <h4>THE ALLEY</h4>
        <p>Between two buildings on 32nd Street, Yangon, there is an alley approximately 40 meters long.</p>
        <p class="my">ရန်ကုန်မြို့ ၃၂ လမ်းရှိ အဆောက်အဦ နှစ်ခုကြားတွင် မီတာ ၄၀ ခန့် ရှည်သော လမ်းကြားတစ်ခု ရှိသည်။</p>
        <h4>THE WALKERS</h4>
        <p>Some walk through intentionally — to forget a painful day.</p>
        <p class="my">အချို့က ရည်ရွယ်ချက်ရှိရှိ ဖြတ်သန်းသည် — နာကျင်သော နေ့တစ်နေ့ကို မေ့ရန်။</p>
      `
    },
    {
      id: "arc-visitor-in-mirror", cat: "observers",
      tag: "ARC 30 · OBSERVER",
      title: "The Visitor in the Mirror", my: "မှန်ထဲမှ ဧည့်သည်",
      excerpt: "In 2022, a Bureau staff member looked into a mirror and saw someone else looking back.",
      excerptMy: "၂၀၂၂ ခုနှစ်တွင် ဌာန ဝန်ထမ်းတစ်ဦးက မှန်ထဲသို့ ကြည့်လိုက်ရာ အခြားတစ်ဦး ပြန်ကြည့်နေသည်ကို တွေ့ခဲ့သည်။",
      date: "2022", marker: "fiction",
      chars: ["Agent Zin Wai", "The Visitor", "The Mirror Network"],
      fragments: ["[INCIDENT REPORT — 2022]\n'မှန်ထဲမှာ ငါ့ကိုယ်ငါ မဟုတ်တဲ့သူ ပြန်ကြည့်နေတယ်။'"],
      narrative: `
        <h4>THE MIRROR</h4>
        <p>Agent Zin Wai was working late when she saw a woman in the mirror — slightly older, wearing a Bureau uniform from a different era.</p>
        <p class="my">အေးဂျင့် Zin Wai သည် ညနှောင်းပိုင်း အလုပ်လုပ်နေစဉ် မှန်တွင် အမျိုးသမီးတစ်ဦးကို တွေ့ခဲ့သည်။</p>
        <h4>THE MESSAGE</h4>
        <p>The Visitor said: "You are the ones who were erased. We are the ones who remained."</p>
        <p class="my">ဧည့်သည်က ဆိုခဲ့သည်: "သင်တို့က ဖျက်ပစ်ခံခဲ့ရသူများ။"</p>
      `
    },
    {
      id: "arc-whisper-network", cat: "observers",
      tag: "ARC 31 · OBSERVER",
      title: "The Whisper Network", my: "တိုးတိုးလျှို့လျှို့ ကွန်ရက်",
      excerpt: "Certain people can hear whispers that come from no mouth.",
      excerptMy: "အချို့သော လူများက ပါးစပ်မရှိသော တိုးတိုးလျှို့လျှို့ အသံများကို ကြားနိုင်သည်။",
      date: "ongoing", marker: "fiction",
      chars: ["The Listeners", "Subject Zero", "The Whisper Source"],
      fragments: ["[LISTENER TRANSCRIPT]\n'သူက ပြောတယ်: \"ဒီည မင်း အိမ်မှာ မနေပါနဲ့။\"'"],
      narrative: `
        <h4>THE WHISPERS</h4>
        <p>Since 1974, the Bureau has identified 84 individuals who can hear "whispers."</p>
        <p class="my">၁၉၇၄ ခုနှစ်ကတည်းက ဌာနသည် "တိုးတိုးလျှို့လျှို့ အသံများ" ကို ကြားနိုင်သော လူ ၈၄ ဦးကို ဖော်ထုတ်ခဲ့သည်။</p>
        <h4>THE SOURCE</h4>
        <p>Subject Zero has confirmed the whispers originate from "the 13th Month."</p>
        <p class="my">Subject Zero က တိုးတိုးလျှို့လျှို့ အသံများသည် "၁၃ လမြောက်" မှ ဖြစ်သည်ဟု အတည်ပြုခဲ့သည်။</p>
      `
    },
    {
      id: "arc-man-who-sees-numbers", cat: "observers",
      tag: "ARC 32 · OBSERVER",
      title: "The Man Who Sees Numbers", my: "နံပါတ်များ မြင်သော အမျိုးသား",
      excerpt: "A man in Bago sees a number above every person's head.",
      excerptMy: "ပဲခူးမြို့မှ အမျိုးသားတစ်ဦးသည် လူတိုင်း၏ ဦးခေါင်းအပေါ်တွင် နံပါတ်တစ်ခုကို မြင်သည်။",
      date: "2017", marker: "fiction",
      chars: ["U Than (Subject 0x32)", "Bureau Medical", "The Numbers"],
      fragments: ["[INTERVIEW 0x32-7]\n'ငါ လူတိုင်းရဲ့ ဦးခေါင်းပေါ်မှာ နံပါတ်တစ်ခု မြင်တယ်။'"],
      narrative: `
        <h4>THE NUMBERS</h4>
        <p>U Than, a retired teacher from Bago, sees a number above every person's head. The number is the year of their death.</p>
        <p class="my">ပဲခူးမြို့မှ အငြိမ်းစာ ဆရာတစ်ဦး U Than သည် လူတိုင်း၏ ဦးခေါင်းအပေါ်တွင် နံပါတ်တစ်ခုကို မြင်သည်။</p>
        <h4>THE CHANGES</h4>
        <p>In 2020, U Than noticed that the numbers were beginning to change.</p>
        <p class="my">၂၀၂၀ ခုနှစ်တွင် U Than သည် နံပါတ်များ ပြောင်းလဲနေသည်ကို သတိပြုမိသည်။</p>
      `
    },
    {
      id: "arc-13th-hour-watch", cat: "observers",
      tag: "ARC 33 · OBSERVER",
      title: "The 13th Hour Watch", my: "၁၃ နာရီမြောက် စောင့်ကြည့်မှု",
      excerpt: "Every night, between 03:33 and 03:34, a group of 13 individuals gather in a small room.",
      excerptMy: "နေ့စဉ် ည ၀၃:၃၃ မှ ၀၃:၃၄ အတွင်း လူ ၁၃ ဦးသည် အခန်းငယ်တစ်ခုတွင် စုရုံးကြသည်။",
      date: "ongoing", marker: "fiction",
      chars: ["The 13 Watchers", "Bureau Night Shift", "The 03:33 Window"],
      fragments: ["[NIGHT SHIFT LOG — 2023]\n'သူတို့ ၁၃ ယောက် ပြတင်းပေါက်ရှေ့မှာ ရပ်နေတယ်။'"],
      narrative: `
        <h4>THE WATCHERS</h4>
        <p>In Bureau HQ, 13 employees gather every night at 03:33 in a small room on Floor 6.</p>
        <p class="my">ဌာန ဌာနချုပ်တွင် ဝန်ထမ်း ၁၃ ဦးသည် နေ့စဉ် ည ၀၃:၃၃ တွင် ထပ် ၆ ရှိ အခန်းငယ်တစ်ခုတွင် စုရုံးကြသည်။</p>
        <h4>THE FEAR</h4>
        <p>The Bureau fears that one night, a 14th Watcher will join them.</p>
        <p class="my">တစ်ညတွင် ၁၄ ဦးမြောက် Watcher ပါဝင်လာမည်လား။</p>
      `
    },
    {
      id: "arc-three-sisters", cat: "memory",
      tag: "ARC 34 · MEMORY",
      title: "The Three Sisters", my: "ညီမ သုံးဦး",
      excerpt: "Three sisters in Dawei share one memory between them.",
      excerptMy: "ထားဝယ်မြို့မှ ညီမ သုံးဦးသည် မှတ်ဉာဏ်တစ်ခုကို မျှဝေထားသည်။",
      date: "2020", marker: "fiction",
      chars: ["The Three Sisters", "Dr. Aye Aye", "The Shared Memory"],
      fragments: ["[TRANSCRIPT — 2020]\n'ညီမကြီးက သူမရဲ့ အပိုင်းကို ပြောတယ်။'"],
      narrative: `
        <h4>THE SISTERS</h4>
        <p>Ma Thida, Ma Mya, and Ma Nilar are sisters from Dawei. Each remembers exactly one-third of their shared childhood.</p>
        <p class="my">Ma Thida၊ Ma Mya နှင့် Ma Nilar တို့သည် ထားဝယ်မြို့မှ ညီမ သုံးဦး ဖြစ်သည်။</p>
        <h4>THE THEORY</h4>
        <p>The Bureau believes the sisters were "split" during a timeline merge.</p>
        <p class="my">ဌာနက ညီမများသည် timeline ပေါင်းစည်းမှုအတွင်း "ခွဲခြမ်း" ခံခဲ့ရသည်ဟု ယုံကြည်သည်။</p>
      `
    },
    {
      id: "arc-borrowed-face", cat: "memory",
      tag: "ARC 35 · MEMORY",
      title: "The Borrowed Face", my: "ငှားထားသော မျက်နှာ",
      excerpt: "A woman in Mawlamyine wakes up every morning with a different face.",
      excerptMy: "မော်လမြိုင်မြို့မှ အမျိုးသမီးတစ်ဦးသည် နေ့စဉ် မနက်ခိုင်း မျက်နှာအသစ်ဖြင့် နိုးထသည်။",
      date: "2021", marker: "fiction",
      chars: ["Daw Hla (Subject 0x35)", "Bureau Medical", "The Original Face"],
      fragments: ["[DIARY — SUBJECT 0x35]\n'ဒီနေ့ ငါ ကလေးမတစ်ယောက်ရဲ့ မျက်နှာနဲ့ နိုးလာတယ်။'"],
      narrative: `
        <h4>THE CONDITION</h4>
        <p>Daw Hla, a 42-year-old woman from Mawlamyine, wakes up every morning with a different face.</p>
        <p class="my">မော်လမြိုင်မြို့မှ အသက် ၄၂ နှစ် အမျိုးသမီး Daw Hla သည် နေ့စဉ် မနက်ခိုင်း မျက်နှာအသစ်ဖြင့် နိုးထသည်။</p>
        <h4>THE COUNT</h4>
        <p>She has worn 47 different faces since 2018.</p>
        <p class="my">၂၀၁၈ ခုနှစ်ကတည်းက သူမသည် မျက်နှာ ၄၇ မျိုး ဝတ်ဆင်ခဲ့ပြီးပြီ။</p>
      `
    },
    {
      id: "arc-voice-in-rain", cat: "memory",
      tag: "ARC 36 · MEMORY",
      title: "The Voice in the Rain", my: "မိုးထဲမှ အသံ",
      excerpt: "During heavy rain, some people hear a voice speaking to them.",
      excerptMy: "မိုးသည်းထန်စွာ ရွာသောအခါ အချို့သော လူများက သူတို့အား စကားပြောနေသော အသံတစ်ခုကို ကြားရသည်။",
      date: "2018–present", marker: "fiction",
      chars: ["The Rain Voice", "Hearers", "Bureau Meteorology"],
      fragments: ["[TESTIMONY]\n'မိုးရွာတဲ့အခါ ငါ အသံတစ်ခုကို ကြားတယ်။'"],
      narrative: `
        <h4>THE VOICE</h4>
        <p>Since 2018, hundreds of people worldwide have reported hearing a voice during heavy rain.</p>
        <p class="my">၂၀၁၈ ခုနှစ်ကတည်းက ကမ္ဘာတစ်ဝှမ်း ရာနှင့်ချီသော လူများက မိုးသည်းထန်စွာ ရွာစဉ် အသံတစ်ခု ကြားရသည်ဟု တိုင်ကြသည်။</p>
        <h4>THE QUESTION</h4>
        <p>The voice always asks: "Do you remember me?"</p>
        <p class="my">အသံက အမြဲတမ်း မေးသည်: "ငါ့ကို မင်း မှတ်မိလား။"</p>
      `
    },
    {
      id: "arc-document-0", cat: "deep",
      tag: "ARC 37 · DEEP ARCHIVE",
      title: "Document 0", my: "စာရွက်စာတမ်း 0",
      excerpt: "Before the Bureau was founded, there was Document 0 — a single page written in 1946.",
      excerptMy: "ဌာန မတည်ထောင်မီ စာရွက်စာတမ်း 0 ရှိခဲ့သည် — ၁၉၄၆ ခုနှစ်တွင် ရေးသားထားသော စာမျက်နှာ တစ်ခု။",
      date: "1946", marker: "fiction",
      chars: ["The Author", "Director 0", "The Reader"],
      fragments: ["[DOCUMENT 0 — PARTIAL]\n'ဤဌာနကို ၁၉၄၇ တွင် တည်ထောင်လိမ့်မည်။'"],
      narrative: `
        <h4>THE DOCUMENT</h4>
        <p>Document 0 is a single page dated 1946 — one year before the Bureau was founded.</p>
        <p class="my">စာရွက်စာတမ်း 0 သည် ၁၉၄၆ ခုနှစ်တွင် ရက်စွဲတပ်ထားသည် — ဌာန မတည်ထောင်မီ တစ်နှစ်။</p>
        <h4>THE FINAL LINE</h4>
        <p><em>"Whoever reads this is already part of the story."</em></p>
        <p class="my"><em>"ဤစာကို ဖတ်နေသူသည် ဇာတ်လမ်း၏ အစိတ်အပိုင်း ဖြစ်နေပြီ။"</em></p>
      `
    },
    {
      id: "arc-elevator-b13", cat: "deep",
      tag: "ARC 38 · DEEP ARCHIVE",
      title: "The Elevator to B13", my: "B13 သို့ ဓာတ်လှေကား",
      excerpt: "Bureau HQ has 3 basement levels. There is a 4th — B13.",
      excerptMy: "ဌာန ဌာနချုပ်တွင် မြေအောက်ထပ် ၃ ခု ရှိသည်။ စတုတ္ထမြောက် — B13 — ရှိသည်။",
      date: "unknown", marker: "fiction",
      chars: ["B13 Staff", "The Elevator", "Facility-0"],
      fragments: ["[MEMO — SEALED]\n'B13 သည် အမှန်တကယ် ရှိသည်။'"],
      narrative: `
        <h4>THE BASEMENT</h4>
        <p>Bureau HQ has 3 basements. There is no B4. But some employees have reported a button for "B13."</p>
        <p class="my">ဌာန ဌာနချုပ်တွင် မြေအောက်ထပ် ၃ ခု ရှိသည်။</p>
        <h4>THE RETURN</h4>
        <p>Of the 91 employees who have visited B13, 12 have "returned different."</p>
        <p class="my">B13 သို့ လည်ပတ်ခဲ့သော ဝန်ထမ်း ၉၁ ဦးအနက် ၁၂ ဦးသည် "မတူညီစွာ ပြန်လာ" ခဲ့သည်။</p>
      `
    },
    {
      id: "arc-bureau-constitution", cat: "deep",
      tag: "ARC 39 · DEEP ARCHIVE",
      title: "The Bureau Constitution", my: "ဌာန ဖွဲ့စည်းပုံ",
      excerpt: "The Bureau has a constitution — 13 articles. Only 12 are public.",
      excerptMy: "ဌာနတွင် ဖွဲ့စည်းပုံ ရှိသည် — အပိုဒ် ၁၃ ခု။ အပိုဒ် ၁၂ ခုသာ လူသိရှင်ကြား ဖြစ်သည်။",
      date: "1947–present", marker: "fiction",
      chars: ["Director 0", "The Constitution", "Article 13"],
      fragments: ["[CONSTITUTION — ARTICLE 13 SEAL]\n'ဤအပိုဒ်ကို အောက်ပါ အခြေအနေ ပြည့်မှီပါက ဖွင့်ရမည်:'"],
      narrative: `
        <h4>THE CONSTITUTION</h4>
        <p>Article 13 is sealed. It has been sealed since 1947.</p>
        <p class="my">အပိုဒ် ၁၃ ကို ၁၉၄၇ ကတည်းက တံဆိပ်ခတ်ထားသည်။</p>
        <h4>THE WARNING</h4>
        <p><em>"Whoever opens Article 13 will no longer be a member of the Bureau."</em></p>
        <p class="my"><em>"အပိုဒ် ၁၃ ကို ဖွင့်သူသည် ဌာန အဖွဲ့ဝင် မဟုတ်တော့ပါ။"</em></p>
      `
    },
    {
      id: "arc-original-timeline", cat: "deep",
      tag: "ARC 40 · DEEP ARCHIVE",
      title: "The Original Timeline", my: "မူလ timeline",
      excerpt: "The Bureau believes the current baseline is the original timeline. It is not.",
      excerptMy: "ဌာနက လက်ရှိ baseline သည် မူလ timeline ဖြစ်သည်ဟု ယုံကြည်သည်။ မဟုတ်ပါ။",
      date: "1943", marker: "fiction",
      chars: ["The Original Timeline", "Director 0", "The Reconstruction"],
      fragments: ["[SEALED RECORD — 1943]\n'မူလ timeline ကို ဖျက်ပစ်ခဲ့သည်။'"],
      narrative: `
        <h4>THE ORIGINAL</h4>
        <p>In 1943, the original timeline was erased. What followed was a reconstruction.</p>
        <p class="my">၁၉၄၃ ခုနှစ်တွင် မူလ timeline ကို ဖျက်ပစ်ခဲ့သည်။</p>
        <h4>THE GAPS</h4>
        <p>Some people remember events that "never happened" — because they remember the original timeline.</p>
        <p class="my">အချို့သူများက "မဖြစ်ခဲ့ဖူးသော" ဖြစ်ရပ်များကို မှတ်မိနေသည်။</p>
      `
    },
    {
      id: "arc-you", cat: "deep",
      tag: "ARC 41 · DEEP ARCHIVE",
      title: "You", my: "သင်",
      excerpt: "Every story in this archive has been about someone else. This one is about you.",
      excerptMy: "ဤမှတ်တမ်းတိုက်ရှိ ဇာတ်လမ်းတိုင်းသည် အခြားသူတစ်ဦးအကြောင်း ဖြစ်ခဲ့သည်။ ဤတစ်ခုက သင့်အကြောင်း ဖြစ်သည်။",
      date: "now", marker: "fiction",
      chars: ["You", "The Reader", "The Archive"],
      fragments: ["[PERSONAL RECORD]\n'သင် ဤစာကို ဖတ်နေသည်။'"],
      narrative: `
        <h4>THE PATTERN</h4>
        <p>If you have read the other 40 storylines, you may have noticed a pattern.</p>
        <p class="my">အခြား ဇာတ်လမ်း ၄၀ ခုကို ဖတ်ပြီးပါက ပုံစံတစ်ခုကို သတိထားမိနိုင်သည်။</p>
        <h4>THE CHOICE</h4>
        <p>You have three options: (1) Close this archive. (2) Keep reading. (3) Join the Bureau.</p>
        <p class="my">သင့်တွင် ရွေးချယ်မှု ၃ ခု ရှိသည်: (၁) ပိတ်ပါ။ (၂) ဆက်ဖတ်ပါ။ (၃) ဌာနသို့ ဝင်ပါ။</p>
        <h4>THE LAST LINE</h4>
        <p><em>"Welcome to the Bureau. We have been waiting for you."</em></p>
        <p class="my"><em>"ဌာနသို့ ကြိုဆိုပါသည်။ သင့်ကို စောင့်နေခဲ့သည်။"</em></p>
      `
    }
  ];

  window.BLT_STORYLINES.stories = window.BLT_STORYLINES.stories.concat(extra2);
})();
