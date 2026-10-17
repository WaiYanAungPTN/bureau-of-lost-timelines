/* Bureau of Lost Timelines — Extended Photos */
(function () {
  'use strict';
  if (!window.BLT_DATA) return;

  const extraPhotos = [
    { url: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=70", cap: "SHWEDAGON · TEMPORAL ANCHOR", my: "ရွှေတိဂုံ · အချိန်ကျောက်ဆူး", marker: "real", markerText: "🟢 REAL", desc: "Shwedagon Pagoda, Yangon. Real landmark. Source: Wikimedia Commons (CC BY-SA)." },
    { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=70", cap: "INVERTED CITY · SUB-YANGON", my: "ဇောက်ထိုး မြို့ · ရန်ကုန်အောက်", marker: "fiction", markerText: "🔴 FICTION", desc: "Reconstruction of the 'Inverted City' beneath Yangon. Fictional." },
    { url: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=600&q=70", cap: "MOUNT POPA · NAT SHRINE", my: "ပုပ္ပားတောင် · နတ်ကွန်း", marker: "folklore", markerText: "🟡 FOLKLORE", desc: "Mount Popa is a real pilgrimage site for the 37 Nats." },
    { url: "https://images.unsplash.com/photo-1600010882491-b7bb2f5e2c48?w=600&q=70", cap: "BAGAN · ANCIENT OBSERVATORY", my: "ပုဂံ · ရှေးခေတ် နက္ခတ်တာရာ", marker: "real", markerText: "🟢 REAL", desc: "Bagan's temples include structures with astronomical alignments." },
    { url: "https://images.unsplash.com/photo-1544735580-6c5a59e5c12f?w=600&q=70", cap: "KYAIKTIYO · GOLDEN ROCK", my: "ကျိုက်ထီးရိုး · ရွှေကျောက်တုံး", marker: "folklore", markerText: "🟡 FOLKLORE", desc: "The Golden Rock balances on a strand of Buddha's hair — real Burmese legend." },
    { url: "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&q=70", cap: "THE REMEMBERING STORM · 1983", my: "မှတ်မိနေသော မိုး · ၁၉၈၃", marker: "fiction", markerText: "🔴 FICTION", desc: "Photo alleged to show the 1983 'remembering rainstorm.' Fictional." },
    { url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=70", cap: "U BEIN · 1.2km TEMPORAL SPAN", my: "ဦးပိန် · ၁.၂ ကီလိုမီတာ", marker: "real", markerText: "🟢 REAL", desc: "U Bein Bridge — world's oldest teak footbridge." },
    { url: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=70", cap: "INWA · THE WATCHING TOWER", my: "အင်းဝ · စောင့်ကြည့်မျှော်စင်", marker: "folklore", markerText: "🟡 FOLKLORE", desc: "Inwa's leaning Nanmyin watchtower. Real landmark, local legend." },
    { url: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&q=70", cap: "32ND STREET ALLEY · YANGON", my: "၃၂ လမ်း လမ်းကြား · ရန်ကုန်", marker: "fiction", markerText: "🔴 FICTION", desc: "Alleged 'memory-eating alley.' Fictional." },
    { url: "https://images.unsplash.com/photo-1591280106613-8c2c0a3c3c15?w=600&q=70", cap: "MRAUK U · FORGOTTEN CAPITAL", my: "မြောက်ဦး · မေ့ပျောက်သော မြို့တော်", marker: "real", markerText: "🟢 REAL", desc: "Mrauk U (Rakhine State) — real 15th-century capital." },
    { url: "https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?w=600&q=70", cap: "FACILITY-9 · CONTAINMENT", my: "စက်ရုံ-၉ · ထိန်းသိမ်းမှု", marker: "fiction", markerText: "🔴 FICTION", desc: "Reconstruction of Facility-9. No such facility exists." }
  ];

  window.BLT_DATA.photos = window.BLT_DATA.photos.concat(extraPhotos);
})();
