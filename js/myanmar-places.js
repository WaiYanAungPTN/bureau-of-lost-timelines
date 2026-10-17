/* Bureau of Lost Timelines — Myanmar Real-World Places */
(function () {
  'use strict';
  if (!window.BLT_STORYLINES) return;

  const places = [
    {
      id: "mm-shwedagon", cat: "places",
      tag: "MYANMAR · 🟢 REAL LANDMARK",
      title: "Shwedagon Pagoda — The Golden Anchor", my: "ရွှေတိဂုံဘုရား — ရွှေကျောက်ဆူး",
      excerpt: "Yangon's Shwedagon Pagoda is 2,600 years old — the oldest Buddhist stupa in the world.",
      excerptMy: "ရန်ကုန်မြို့ ရွှေတိဂုံဘုရားသည် နှစ် ၂,၆၀၀ သက်တမ်းရှိသည်။",
      date: "c. 600 BCE", marker: "real",
      chars: ["Buddhist Pilgrims", "Bureau Temporal Monitors", "The Golden Stupa"],
      fragments: ["[VERIFIED FACT]\n'ရွှေတိဂုံဘုရားကို ဘီစီ ၆ ရာစုတွင် တည်ခဲ့သည်။'"],
      narrative: `
        <h4>🟢 THE REAL LANDMARK</h4>
        <p>The Shwedagon Pagoda is a genuine historical site in Yangon. It houses relics of four Buddhas.</p>
        <p class="my">ရွှေတိဂုံဘုရားသည် မြန်မာနိုင်ငံ ရန်ကုန်မြို့ရှိ အမှန်တကယ် သမိုင်းဝင် နေရာ ဖြစ်သည်။</p>
        <h4>🔴 THE BUREAU ADDITION</h4>
        <p>The Bureau claims the pagoda is a "temporal anchor point." No evidence supports this.</p>
        <p class="my">ဌာနက ဘုရားသည် "အချိန်ကျောက်ဆူး" ဖြစ်သည်ဟု ဆိုသည်။ ဤအဆိုကို ထောက်ခံသော အထောက်အထား မရှိပါ။</p>
      `
    },
    {
      id: "mm-popa", cat: "places",
      tag: "MYANMAR · 🟡 FOLKLORE",
      title: "Mount Popa — Home of the Nats", my: "ပုပ္ပားတောင် — နတ်များ၏ နေရာ",
      excerpt: "Mount Popa is home to the 37 Nats — real spirits in Burmese folk religion.",
      excerptMy: "ပုပ္ပားတောင်သည် နတ် ၃၇ ပါး၏ နေရာ ဖြစ်သည်။",
      date: "ongoing", marker: "folklore",
      chars: ["The 37 Nats", "Nat Kadaws", "Bureau Field Agents"],
      fragments: ["[VERIFIED FOLKLORE]\n'မြန်မာ ရိုးရာ အရ နတ် ၃၇ ပါး ရှိသည်။'"],
      narrative: `
        <h4>🟡 THE REAL FOLKLORE</h4>
        <p>Mount Popa is the legendary home of the 37 Nats. Nat kadaws still practice their tradition today.</p>
        <p class="my">ပုပ္ပားတောင်သည် နတ် ၃၇ ပါး၏ ဒဏ္ဍာရီ နေရာ ဖြစ်သည်။</p>
        <h4>🔴 THE BUREAU ADDITION</h4>
        <p>Bureau files claim "3 additional Nats" were observed. No evidence exists.</p>
        <p class="my">ဌာန ဖိုင်များက "နတ် ၃ ပါး ထပ်တိုး" ကို မြင်ခဲ့သည်ဟု ဆိုသည်။</p>
      `
    },
    {
      id: "mm-kyaiktiyo", cat: "places",
      tag: "MYANMAR · 🟡 FOLKLORE",
      title: "Kyaiktiyo — The Golden Rock", my: "ကျိုက်ထီးရိုး — ရွှေကျောက်တုံး",
      excerpt: "A gilded boulder balances on a cliff edge at Kyaiktiyo — real.",
      excerptMy: "ကျိုက်ထီးရိုးတွင် ရွှေချထားသော ကျောက်တုံးသည် ချောက်ကမ်းပါးတွင် ဟန်ချက်ညီနေသည်။",
      date: "ongoing", marker: "real",
      chars: ["Pilgrims", "The Rock", "Buddha's Hair"],
      fragments: ["[VERIFIED FACT]\n'ကျိုက်ထီးရိုး ရွှေကျောက်တုံးသည် မွန်ပြည်နယ်တွင် ရှိသည်။'"],
      narrative: `
        <h4>🟢 THE REAL SITE</h4>
        <p>Kyaiktiyo Pagoda is a real Buddhist pilgrimage site. A gilded boulder rests on the edge of a cliff.</p>
        <p class="my">ကျိုက်ထီးရိုး ဘုရားသည် အမှန်တကယ် ဗုဒ္ဓ ဘုရားဖူးနေရာ ဖြစ်သည်။</p>
        <h4>🟡 THE LEGEND</h4>
        <p>Burmese tradition holds that the rock balances on a strand of Buddha's hair — real legend.</p>
        <p class="my">မြန်မာ ထုံးတမ်းအရ ကျောက်တုံးသည် ဗုဒ္ဓ၏ ဆံတော်တစ်မျှင်ပေါ်တွင် တည်သည်ဟု ယုံကြည်သည်။</p>
      `
    },
    {
      id: "mm-bagan", cat: "places",
      tag: "MYANMAR · 🟢 REAL LANDMARK",
      title: "Bagan — The Temple That Remembers", my: "ပုဂံ — မှတ်မိနေသော ဘုရား",
      excerpt: "Bagan contains over 2,000 Buddhist temples built between the 9th and 13th centuries.",
      excerptMy: "ပုဂံတွင် ၉ မှ ၁၃ ရာစုအတွင်း တည်ခဲ့သော ဗုဒ္ဓဘုရား ၂,၀၀၀ ကျော် ရှိသည်။",
      date: "9th–13th c.", marker: "real",
      chars: ["King Anawrahta", "The Temples", "Bureau Archaeologists"],
      fragments: ["[VERIFIED HISTORY]\n'ပုဂံသည် ၁၁ မှ ၁၃ ရာစုအတွင်း မြန်မာနိုင်ငံ၏ မြို့တော် ဖြစ်ခဲ့သည်။'"],
      narrative: `
        <h4>🟢 THE REAL HISTORY</h4>
        <p>Bagan was the capital of the Pagan Kingdom from the 9th to 13th centuries. 2,200 temples survive.</p>
        <p class="my">ပုဂံသည် ၉ မှ ၁၃ ရာစုအတွင်း ပုဂံ နိုင်ငံတော်၏ မြို့တော် ဖြစ်ခဲ့သည်။</p>
        <h4>🔴 THE BUREAU ADDITION</h4>
        <p>Bureau files claim one temple "records every timeline." This is fiction.</p>
        <p class="my">ဌာနက ဘုရားတစ်ဆူက "timeline တိုင်းကို မှတ်တမ်းတင်ထားသည်" ဟု ဆိုသည်။</p>
      `
    },
    {
      id: "mm-inwa", cat: "places",
      tag: "MYANMAR · 🟡 FOLKLORE",
      title: "Inwa's Leaning Tower — The Watcher", my: "အင်းဝ၏ ယိုင်နေသော မျှော်စင်",
      excerpt: "The Nanmyin Watchtower in Inwa leans because of an earthquake in 1838.",
      excerptMy: "အင်းဝ၏ နန်းမြို့ မျှော်စင်သည် ၁၈၃၈ ငလျင်ကြောင့် ယိုင်နေသည်။",
      date: "1838", marker: "folklore",
      chars: ["Inwa Kings", "Local Villagers", "The Watchtower"],
      fragments: ["[VERIFIED LEGEND]\n'ဒေသခံများက မျှော်စင်သည် ကောင်းကင်တွင် တစ်ခုခုကို စောင့်ကြည့်နေသည်ဟု ဆိုကြသည်။'"],
      narrative: `
        <h4>🟢 THE REAL HISTORY</h4>
        <p>Inwa was the capital of Burma four times. The Nanmyin Watchtower was built in 1822.</p>
        <p class="my">အင်းဝသည် ၁၄ မှ ၁၉ ရာစုအတွင်း မြန်မာနိုင်ငံ၏ မြို့တော် ၄ ကြိမ် ဖြစ်ခဲ့သည်။</p>
        <h4>🟡 THE FOLKLORE</h4>
        <p>Local legend says the tower leans because it is "watching something in the sky."</p>
        <p class="my">ဒေသခံ ဒဏ္ဍာရီအရ မျှော်စင်သည် "ကောင်းကင်တွင် တစ်ခုခုကို စောင့်ကြည့်နေသည်။"</p>
      `
    },
    {
      id: "mm-weikza", cat: "observers",
      tag: "MYANMAR · 🟡 FOLKLORE",
      title: "The Weikza — Living Immortals", my: "ဝိဇ္ဇာ — မြင် လျှို့ဝှက် အတတ်သည်",
      excerpt: "Weikza are wizard-saints in Burmese folk Buddhism.",
      excerptMy: "ဝိဇ္ဇာသည် မြန်မာ ရိုးရာ ဗုဒ္ဓဘာသာတွင် လျှို့ဝှက် အတတ်သည် များ ဖြစ်သည်။",
      date: "ongoing", marker: "folklore",
      chars: ["Weikza Masters", "Bureau Field Agents", "Bodawpaya"],
      fragments: ["[VERIFIED FOLKLORE]\n'ဝိဇ္ဇာသည် မြန်မာ ရိုးရာ ယုံကြည်မှုတွင် လျှို့ဝှက် စွမ်းအား ရရှိသူ လူသားများ ဖြစ်သည်။'"],
      narrative: `
        <h4>🟡 THE REAL FOLKLORE</h4>
        <p>Weikza are wizard-saints believed to have gained supernatural powers through alchemy and meditation.</p>
        <p class="my">ဝိဇ္ဇာသည် ဓာတ်ဆေး၊ တရားထိုင်မှုဖြင့် လျှို့ဝှက် စွမ်းအား ရရှိသည်ဟု ယုံကြည်သည်။</p>
        <h4>🔴 THE BUREAU ADDITION</h4>
        <p>Bureau files claim "3 active Weikza are currently monitored." No such arrangement exists.</p>
        <p class="my">ဌာန ဖိုင်များက "ဝိဇ္ဇာ ၃ ဦးကို စောင့်ကြည့်နေသည်" ဟု ဆိုသည်။</p>
      `
    },
    {
      id: "mm-ubein", cat: "places",
      tag: "MYANMAR · 🟢 REAL LANDMARK",
      title: "U Bein Bridge — The 1.2km Time Span", my: "ဦးပိန် တံတား — ၁.၂ ကီလိုမီတာ",
      excerpt: "U Bein Bridge is the world's oldest and longest teak footbridge.",
      excerptMy: "ဦးပိန် တံတားသည် ကမ္ဘာ့ ရှေးအကျဆုံး၊ အရှည်ဆုံး ကျွန်းသစ် ခြေလျင်တံတား ဖြစ်သည်။",
      date: "1851–present", marker: "real",
      chars: ["King Mindon", "Local Monks", "The Bridge"],
      fragments: ["[VERIFIED HISTORY]\n'ဦးပိန် တံတားကို ၁၈၅၁ တွင် တည်ခဲ့သည်။'"],
      narrative: `
        <h4>🟢 THE REAL BRIDGE</h4>
        <p>U Bein Bridge, built in 1851, is a 1.2-kilometer teak footbridge across Taungthaman Lake.</p>
        <p class="my">ဦးပိန် တံတားကို ၁၈၅၁ တွင် တည်ခဲ့သည်။</p>
        <h4>🔴 THE BUREAU ADDITION</h4>
        <p>Bureau files claim "people who cross alone sometimes arrive 2 minutes before they left." Fiction.</p>
        <p class="my">ဌာန ဖိုင်များက "တစ်ဦးတည်း ဖြတ်သူများသည် ၂ မိနစ် စောပြီး ရောက်သည်" ဟု ဆိုသည်။</p>
      `
    },
    {
      id: "mm-kyaukse", cat: "places",
      tag: "MYANMAR · 🟡 FOLKLORE",
      title: "The Kyaukse Elephant Dance", my: "ကျောက်ဆည် ဆင်အက",
      excerpt: "The Kyaukse Elephant Dance is a real annual festival.",
      excerptMy: "ကျောက်ဆည် ဆင်အက ပွဲတော်သည် အမှန်တကယ် နှစ်စဉ် ပွဲတော် ဖြစ်သည်။",
      date: "centuries-old", marker: "folklore",
      chars: ["Kyaukse Dancers", "The Elephant", "The Festival"],
      fragments: ["[VERIFIED TRADITION]\n'ကျောက်ဆည် ဆင်အက ပွဲတော်ကို ရာစုနှစ်များစွာ ကျင်းပခဲ့သည်။'"],
      narrative: `
        <h4>🟢 THE REAL FESTIVAL</h4>
        <p>The Kyaukse Elephant Dance is a real festival held annually in Kyaukse.</p>
        <p class="my">ကျောက်ဆည် ဆင်အက ပွဲတော်သည် အမှန်တကယ် ရာစုနှစ်များစွာ ကျင်းပခဲ့သော ပွဲတော် ဖြစ်သည်။</p>
        <h4>🔴 THE BUREAU ADDITION</h4>
        <p>Bureau files claim "the elephant costume moved on its own." Fiction.</p>
        <p class="my">ဌာနက "ဆင်ဝတ်စုံသည် ကိုယ်တိုင် ရွေ့ခဲ့သည်" ဟု ဆိုသည်။</p>
      `
    },
    {
      id: "mm-mrauku", cat: "places",
      tag: "MYANMAR · 🟢 REAL LANDMARK",
      title: "Mrauk U — The Forgotten Capital", my: "မြောက်ဦး — မေ့ပျောက်သော မြို့တော်",
      excerpt: "Mrauk U was the capital of the Arakan Kingdom from 1430 to 1785.",
      excerptMy: "မြောက်ဦးသည် ၁၄၃၀ မှ ၁၇၈၅ အထိ ရခိုင် နိုင်ငံတော်၏ မြို့တော် ဖြစ်ခဲ့သည်။",
      date: "1430–1785", marker: "real",
      chars: ["Arakan Kings", "The Temples", "Bureau Archaeologists"],
      fragments: ["[VERIFIED HISTORY]\n'မြောက်ဦးသည် ရခိုင် နိုင်ငံတော်၏ မြို့တော် ဖြစ်ခဲ့သည်။'"],
      narrative: `
        <h4>🟢 THE REAL CITY</h4>
        <p>Mrauk U was the capital of the Arakan Kingdom from 1430 to 1785. 700+ temples survive.</p>
        <p class="my">မြောက်ဦးသည် ၁၄၃၀ မှ ၁၇၈၅ အထိ ရခိုင် နိုင်ငံတော်၏ မြို့တော် ဖြစ်ခဲ့သည်။</p>
        <h4>🔴 THE BUREAU ADDITION</h4>
        <p>Bureau files claim "a second Mrauk U exists beneath the first." Fiction.</p>
        <p class="my">ဌာနက "ဒုတိယ မြောက်ဦး ရှိသည်" ဟု ဆိုသည်။</p>
      `
    },
    {
      id: "mm-taungbyone", cat: "observers",
      tag: "MYANMAR · 🟡 FOLKLORE",
      title: "Taungbyone Nat Festival", my: "တောင်ပြုန်း နတ်ပွဲ",
      excerpt: "The Taungbyone Nat Festival is a real annual spirit festival.",
      excerptMy: "တောင်ပြုန်း နတ်ပွဲသည် မြန်မာနိုင်ငံ အကြီးဆုံး နတ်ပွဲတော်များအနက် တစ်ခု ဖြစ်သည်။",
      date: "annual", marker: "folklore",
      chars: ["Nat Kadaws", "The Nats", "Pilgrims"],
      fragments: ["[VERIFIED FESTIVAL]\n'တောင်ပြုန်း နတ်ပွဲကို နှစ်စဉ် သြဂုတ်လတွင် ကျင်းပသည်။'"],
      narrative: `
        <h4>🟢 THE REAL FESTIVAL</h4>
        <p>The Taungbyone Nat Festival is held annually in Taungbyone village in August.</p>
        <p class="my">တောင်ပြုန်း နတ်ပွဲကို နှစ်စဉ် သြဂုတ်လတွင် မန္တလေးအနီး တောင်ပြုန်းရွာတွင် ကျင်းပသည်။</p>
        <h4>🔴 THE BUREAU ADDITION</h4>
        <p>Bureau files claim "in 2014, one Nat was observed arriving in physical form." Fiction.</p>
        <p class="my">ဌာနက "၂၀၁၄ ခုနှစ်တွင် နတ်တစ်ပါးကို ရုပ်ပိုင်းအသွင်ဖြင့် တွေ့ခဲ့သည်" ဟု ဆိုသည်။</p>
      `
    }
  ];

  window.BLT_STORYLINES.stories = window.BLT_STORYLINES.stories.concat(places);
})();
