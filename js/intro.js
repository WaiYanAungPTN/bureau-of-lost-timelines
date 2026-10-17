/* Bureau of Lost Timelines — Trailer Intro */
(function () {
  'use strict';

  const SCENES = [
    { num: 1, duration: 5000 },
    { num: 2, duration: 6000 },
    { num: 3, duration: 5000 },
    { num: 4, duration: 6000 },
    { num: 5, duration: 5500 },
    { num: 6, duration: 0 }
  ];

  let currentScene = 0;
  let sceneTimer = null;
  let progressInterval = null;
  let startTime = 0;
  let totalDuration = SCENES.slice(0, 5).reduce((a, s) => a + s.duration, 0);

  function goToArchive() {
    clearTimers();
    const stage = document.getElementById('introStage');
    if (stage) {
      stage.style.transition = 'opacity 0.6s';
      stage.style.opacity = '0';
    }
    setTimeout(() => { window.location.href = 'index.html'; }, 700);
  }

  function clearTimers() {
    if (sceneTimer) clearTimeout(sceneTimer);
    if (progressInterval) clearInterval(progressInterval);
  }

  function showScene(index) {
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(s => s.classList.remove('active'));
    if (scenes[index]) scenes[index].classList.add('active');

    currentScene = index;

    if (SCENES[index].duration > 0) {
      sceneTimer = setTimeout(() => {
        if (currentScene + 1 < SCENES.length) showScene(currentScene + 1);
      }, SCENES[index].duration);
    } else {
      const fill = document.getElementById('introProgressFill');
      if (fill) fill.style.width = '100%';
      const skip = document.getElementById('introSkip');
      if (skip) skip.textContent = 'SKIP →';
    }
  }

  function startProgress() {
    startTime = Date.now();
    progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);
      const fill = document.getElementById('introProgressFill');
      if (fill) fill.style.width = pct + '%';
      if (pct >= 100) clearInterval(progressInterval);
    }, 50);
  }

  function initCanvas() {
    const canvas = document.getElementById('introCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(51, 255, 102, ${p.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

  function initTitleGlitch() {
    const title = document.getElementById('titleGlitch');
    if (!title) return;
    const original = title.innerHTML;
    const chars = '▓▒░█@#$%&*';

    setInterval(() => {
      if (Math.random() > 0.85) {
        const glitched = original.split('').map(c =>
          Math.random() < 0.06 && c !== ' ' && c !== '<' && c !== '>' && c !== 'b' && c !== 'r'
            ? chars[Math.floor(Math.random() * chars.length)]
            : c
        ).join('');
        title.innerHTML = glitched;
        setTimeout(() => { title.innerHTML = original; }, 100);
      }
    }, 2000);
  }

  document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    initTitleGlitch();

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('skip') === '1') {
      window.location.href = 'index.html';
      return;
    }

    if (sessionStorage.getItem('blt_intro_seen') === '1') {
      window.location.href = 'index.html';
      return;
    }

    showScene(0);
    startProgress();

    const enterBtn = document.getElementById('enterBtn');
    if (enterBtn) enterBtn.addEventListener('click', () => {
      sessionStorage.setItem('blt_intro_seen', '1');
      goToArchive();
    });
    const skipBtn = document.getElementById('skipBtn');
    if (skipBtn) skipBtn.addEventListener('click', () => {
      sessionStorage.setItem('blt_intro_seen', '1');
      goToArchive();
    });
    const introSkip = document.getElementById('introSkip');
    if (introSkip) introSkip.addEventListener('click', () => {
      sessionStorage.setItem('blt_intro_seen', '1');
      goToArchive();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        sessionStorage.setItem('blt_intro_seen', '1');
        goToArchive();
      }
      if (e.key === ' ') {
        if (currentScene + 1 < SCENES.length) {
          clearTimeout(sceneTimer);
          showScene(currentScene + 1);
        }
      }
    });

    const scene6 = document.querySelector('.scene-6');
    if (scene6) scene6.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') return;
      sessionStorage.setItem('blt_intro_seen', '1');
      goToArchive();
    });
  });
})();
