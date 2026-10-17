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
        alpha: Math.random() * 0.5
