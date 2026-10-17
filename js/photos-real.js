/* Bureau of Lost Timelines — REAL Photos (Local) */
(function () {
  'use strict';
  if (!window.BLT_DATA) return;

  const realPhotos = [
    { url: "assets/images/myanmar/shwedagon.jpg", cap: "SHWEDAGON PAGODA · YANGON", my: "ရွှေတိဂုံဘုရား · ရန်ကုန်", marker: "real", markerText: "🟢 REAL PHOTO", desc: "Shwedagon Pagoda, Yangon. Real landmark. Wikimedia Commons." },
    { url: "assets/images/myanmar/bagan.jpg", cap: "BAGAN · TEMPLE PLAIN", my: "ပုဂံ · ဘုရား ကွင်းပြင်", marker: "real", markerText: "🟢 REAL PHOTO", desc: "Bagan temple plain. Real archaeological site." },
    { url: "assets/images/myanmar/ubein.jpg", cap: "U BEIN BRIDGE · AMARAPURA", my: "ဦးပိန် တံတား · အမရပူရ", marker: "real", markerText: "🟢 REAL PHOTO", desc: "U Bein teak bridge. World's longest teak footbridge." },
    { url: "assets/images/myanmar/kyaiktiyo.jpg", cap: "KYAIKTIYO · GOLDEN ROCK", my: "ကျိုက်ထီးရိုး · ရွှေကျောက်တုံး", marker: "real", markerText: "🟢 REAL PHOTO", desc: "Kyaiktiyo Pagoda (Golden Rock). Real pilgrimage site." },
    { url: "assets/images/myanmar/inle.jpg", cap: "INLE LAKE · SHAN STATE", my: "အင်းလေးကန် · ရှမ်းပြည်နယ်", marker: "real", markerText: "🟢 REAL PHOTO", desc: "Inle Lake, Shan State. Real lake." },
    { url: "assets/images/myanmar/popa.jpg", cap: "MOUNT POPA · MAGWAY", my: "ပုပ္ပားတောင် · မကွေး", marker: "real", markerText: "🟢 REAL PHOTO", desc: "Mount Popa. Real pilgrimage site for 37 Nats." },
    { url: "assets/images/myanmar/mrauku.jpg", cap: "MRAUK U · RAKHINE", my: "မြောက်ဦး · ရခိုင်", marker: "real", markerText: "🟢 REAL PHOTO", desc: "Mrauk U archaeological site. Real ancient capital." },
    { url: "assets/images/myanmar/inwa.jpg", cap: "NANMYIN TOWER · INWA", my: "နန်းမြို့ မျှော်စင် · အင်းဝ", marker: "real", markerText: "🟢 REAL PHOTO", desc: "Nanmyin Watchtower, Inwa. Leaning tower from 1838 earthquake." }
  ];

  window.BLT_DATA.photos = window.BLT_DATA.photos.concat(realPhotos);
})();
