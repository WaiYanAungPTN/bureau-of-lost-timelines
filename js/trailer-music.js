/* Bureau of Lost Timelines — Trailer Music Generator */
(function () {
  'use strict';

  let ctx = null;
  let masterGain = null;
  let isPlaying = false;
  let scheduledNodes = [];

  function createContext() {
    if (ctx) return ctx;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      console.warn('[BLT Music] Web Audio API not supported');
      return null;
    }
    ctx = new AudioCtx();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.15;
    masterGain.connect(ctx.destination);
    return ctx;
  }

  function startDrone() {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 55;
    gain.gain.value = 0.4;
    osc.connect(gain).connect(masterGain);
    osc.start();
    scheduledNodes.push(osc);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.value = 82.5;
    gain2.gain.value = 0.2;
    osc2.connect(gain2).connect(masterGain);
    osc2.start();
    scheduledNodes.push(osc2);
  }

  function schedulePulse(startTime, count) {
    for (let i = 0; i < count; i++) {
      const t = startTime + i * 4.0;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(60, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.8);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.6, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.8);
      osc.connect(gain).connect(masterGain);
      osc.start(t);
      osc.stop(t + 0.9);
    }
  }

  function scheduleSweep(startTime, duration) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, startTime);
    osc.frequency.exponentialRampToValueAtTime(800, startTime + duration);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.08, startTime + duration * 0.5);
    gain.gain.linearRampToValueAtTime(0, startTime + duration);
    osc.connect(gain).connect(masterGain);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }

  function createNoiseSource() {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400;

    const gain = ctx.createGain();
    gain.gain.value = 0.04;

    noise.connect(filter).connect(gain).connect(masterGain);
    noise.start();
    scheduledNodes.push(noise);
  }

  function scheduleBell(startTime) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = 440;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.15, startTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 3);
    osc.connect(gain).connect(masterGain);
    osc.start(startTime);
    osc.stop(startTime + 3.1);
  }

  function start() {
    if (isPlaying) return;
    if (!createContext()) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    startDrone();
    createNoiseSource();
    schedulePulse(now + 2, 15);
    scheduleSweep(now + 10, 8);
    scheduleSweep(now + 30, 10);
    scheduleSweep(now + 55, 12);
    scheduleBell(now + 15);
    scheduleBell(now + 25);
    scheduleBell(now + 42);
    scheduleBell(now + 58);

    isPlaying = true;
  }

  function stop() {
    if (!isPlaying) return;
    if (masterGain) {
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 2);
    }
    setTimeout(() => {
      scheduledNodes.forEach(node => {
        try { node.stop(); } catch (e) {}
      });
      scheduledNodes = [];
      if (ctx) {
        try { ctx.close(); } catch (e) {}
        ctx = null;
        masterGain = null;
      }
      isPlaying = false;
    }, 2100);
  }

  function setVolume(vol) {
    if (masterGain) {
      masterGain.gain.linearRampToValueAtTime(vol, ctx.currentTime + 0.1);
    }
  }

  window.BLT_MUSIC = { start, stop, setVolume, isPlaying: () => isPlaying };
})();
