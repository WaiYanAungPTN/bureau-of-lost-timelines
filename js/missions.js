/* Bureau of Lost Timelines — Missions */
(function () {
  'use strict';

  const NS = 'blt:missions:';
  const KEYS = {
    missions: NS + 'list',
    progress: NS + 'progress'
  };

  const DEFAULT_MISSIONS = [
    {
      id: 'm_001', title: 'First Contact', my: 'ပထမဆုံး ထိတွေ့မှု',
      desc: 'Complete your profile and read
