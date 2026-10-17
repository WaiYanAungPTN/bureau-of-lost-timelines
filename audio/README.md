# Audio Files — Bureau of Lost Timelines

## အသုံးပြုနိုင်သော နည်းလမ်း ၃ ခု

### နည်းလမ်း ၁ — Web Audio API (အလိုအလျောက်)
`js/audio.js` တွင် Web Audio API ဖြင့် hum ကို အလိုအလျောက် generate လုပ်ပါသည်။
File မလိုအပ်ပါ။ `🔊 AMBIENCE ON` နှိပ်ရုံပါ။

### နည်းလမ်း ၂ — `generate-ambience.html` ဖြင့်
1. `audio/generate-ambience.html` ကို browser ဖွင့်ပါ
2. "▶ START" နှိပ်ပါ
3. "⏺ RECORD 30s" နှိပ်ပါ
4. "⏬ DOWNLOAD" နှိပ်ပါ
5. `ambience.webm` ကို `audio/ambience.mp3` အဖြစ် ပြောင်းပါ (optional)
6. `index.html` ထဲ `<source src="audio/ambience.mp3">` စစ်ပါ

### နည်းလမ်း ၃ — ကိုယ်ပိုင် Audio File
1. ကိုယ်ပိုင် ambient sound (rain, hum, wind) ရှိပါက
2. `audio/ambience.mp3` အမည်ဖြင့် သိမ်းပါ
3. Website ကို reload လုပ်ပါ

## Trailer Music
1. `audio/generate-music.html` ဖွင့်ပါ
2. "▶ START" → "⏺ RECORD 60s" → "⏬ DOWNLOAD"
3. `trailer-music.webm` ကို `audio/trailer-ambience.mp3` အမည်ဖြင့် သိမ်းပါ
4. `intro.html` ထဲ `<audio>` tag က ရှာတွေ့ပါမည်

## အကြံပြုချက်
- **Format**: .mp3 (အကောင်းဆုံး), .webm, .ogg
- **Length**: 30–60 စက္ကန့် (loop အတွက်)
- **Volume**: -20dB ခန့် (နောက်ခံ)
- **Style**: low hum, static, distant wind, ticking clock
