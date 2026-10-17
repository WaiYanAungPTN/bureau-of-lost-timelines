/* Bureau of Lost Timelines — Title Glitch Effect */
(function () {
  'use strict';

  const title = document.getElementById('siteTitle');
  if (!title) return;

  const original = title.textContent;
  const glitchChars = "▓▒░█@#$%&*";
  const GLITCH_PROB = 0.08;
  const INTERVAL_MS = 2000;
  const GLITCH_DURATION = 150;

  setInterval(() => {
    if (Math.random() > 0.15) return;
    const glitched = original.split('')
      .map(c => Math.random() < GLITCH_PROB
        ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
        : c)
      .join('');
    title.textContent = glitched;
    setTimeout(() => { title.textContent = original; }, GLITCH_DURATION);
  }, INTERVAL_MS);
})();
