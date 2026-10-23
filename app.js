/**
 * ADITYA TAMAKUWALA — CYBERSECURITY SOC DEFENSE COMMAND CENTER
 * Advanced Interactive Suite:
 * 1. 3D Cyber Threat Globe & Attack Vector Canvas (Interactive Parabolic Arc Math & Rotation)
 * 2. Web Audio API Cyber Synthesizer (Zero external audio, synthesized in browser)
 * 3. Live SOC Incident Simulation Center (Real-time telemetry, risk meter gauge & auto-mitigation)
 * 4. Interactive MITRE ATT&CK Matrix Explorer (Technique blueprints & Wazuh XML inspector)
 * 5. Architectural Blueprint Modal Engine (Interactive SVG Data Flow Pipelines)
 * 6. Tactical Cockpit Controller (DEFCON Modes, Theme Switcher & Deck Tabs)
 * 7. Live Defense Node Constellation Canvas
 * 8. Terminal v2.0, Clipboard Handlers & Toast Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveCyberBackground();
  initThreatGlobeCanvas();
  initCockpitControls();
  initIncidentSimulator();
  initMitreExplorer();
  initBlueprintModal();
  initInteractiveScrollEngine();
  initScrollReveal();
  initInteractive3DTilt();
  initSkillsFilter();
  initTerminal();
  initContactForm();
  initClipboardHandlers();
  initMobileNavigation();
  initInteractiveHoverSounds();
  initCreativePreloader();
  initCustomMagneticCursor();
  initProjectHoverPreview();
  initThreeSentinelCanvas();
  initLiveISTClock();
});

/* ==========================================================================
   1. WEB AUDIO API SYNTHESIZER (Sci-Fi Sound FX)
   ========================================================================== */
let audioCtx = null;
let isAudioEnabled = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playCyberSound(type) {
  if (!isAudioEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  if (type === 'blip') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.05);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === 'alarm') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(880, now + 0.2);
    osc.frequency.linearRampToValueAtTime(440, now + 0.4);
    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.45);
  } else if (type === 'mitigation') {
    // 2-tone success chime
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.07, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.25);
    });
  } else if (type === 'click') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1200, now);
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.02);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.02);
  } else if (type === 'radar') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.12);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  } else if (type === 'keystroke') {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(600 + Math.random() * 200, now);
    gain.gain.setValueAtTime(0.02, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.015);
  }
}

function initInteractiveHoverSounds() {
  const interactiveEls = document.querySelectorAll(
    'button, .nav-link, .sector-dot, .mitre-tech-card, .scenario-btn, .cmd-chip, .filter-btn, .project-card, .about-card, .contact-card'
  );
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (isAudioEnabled) playCyberSound('blip');
    });
  });
}

/* ==========================================================================
   2. FULL-SCREEN SCROLL-INTERACTIVE 3D THREAT GLOBE BACKGROUND ENGINE
   ========================================================================== */
function initThreatGlobeCanvas() {
  const canvas = document.getElementById('bg-threat-globe-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = window.innerWidth;
  let height = window.innerHeight;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // 9 SECTOR WAYPOINTS (Scroll Choreography)
  const sectorWaypoints = [
    {
      id: 'hero',
      name: '01 // WAR ROOM HQ',
      target: 'BENGALURU DEFENSE HUB',
      xRatio: 0.68,
      yRatio: 0.50,
      scale: 1.10,
      rotY: 0.35,
      rotX: 0.22,
      zoomText: '1.10x [WAR ROOM]'
    },
    {
      id: 'simulator',
      name: '02 // THREAT HUNT',
      target: 'INGRESS VECTORS // ST. PETERSBURG',
      xRatio: 0.30,
      yRatio: 0.52,
      scale: 1.55,
      rotY: 1.18,
      rotX: 0.32,
      zoomText: '1.55x [DEEP SCAN]'
    },
    {
      id: 'mitre',
      name: '03 // MITRE TTPs',
      target: 'GLOBAL THREAT HORIZON',
      xRatio: 0.78,
      yRatio: 0.48,
      scale: 0.82,
      rotY: 2.15,
      rotX: 0.16,
      zoomText: '0.82x [ORBITAL VISTA]'
    },
    {
      id: 'about',
      name: '04 // DEFENSE PILLARS',
      target: 'SENTINEL FOUNDATION CORE',
      xRatio: 0.50,
      yRatio: 0.54,
      scale: 1.25,
      rotY: 3.12,
      rotX: 0.20,
      zoomText: '1.25x [CORE AURA]'
    },
    {
      id: 'skills',
      name: '05 // DEFENSE STACK',
      target: 'TELEMETRY SENSOR ARSENAL',
      xRatio: 0.80,
      yRatio: 0.42,
      scale: 0.95,
      rotY: 4.10,
      rotX: 0.26,
      zoomText: '0.95x [ARSENAL SENSORS]'
    },
    {
      id: 'projects',
      name: '06 // REPOSITORIES',
      target: 'PRODUCTION ASSET NODES',
      xRatio: 0.26,
      yRatio: 0.52,
      scale: 1.40,
      rotY: 5.00,
      rotX: 0.18,
      zoomText: '1.40x [PRODUCTION DEPLOYMENTS]'
    },
    {
      id: 'experience',
      name: '07 // TRACK RECORD',
      target: 'OPERATIONAL ENGAGEMENTS',
      xRatio: 0.74,
      yRatio: 0.50,
      scale: 1.05,
      rotY: 5.75,
      rotX: 0.22,
      zoomText: '1.05x [TACTICAL TIMELINE]'
    },
    {
      id: 'terminal',
      name: '08 // SOC TERMINAL',
      target: 'SECURE KERNEL PROMPT',
      xRatio: 0.50,
      yRatio: 0.50,
      scale: 1.30,
      rotY: 6.35,
      rotX: 0.15,
      zoomText: '1.30x [TERMINAL MATRIX]'
    },
    {
      id: 'contact',
      name: '09 // SECURE UPLINK',
      target: 'BENGALURU DEFENSE HUB (12.97°N, 77.59°E)',
      xRatio: 0.50,
      yRatio: 0.50,
      scale: 1.75,
      rotY: Math.PI * 2 + 0.38,
      rotX: 0.22,
      zoomText: '1.75x [BENGALURU TARGET LOCK]'
    }
  ];

  // DOM HUD Readout Elements
  const hudZoom = document.getElementById('hud-globe-zoom');
  const hudSector = document.getElementById('hud-globe-sector');
  const hudTarget = document.getElementById('hud-globe-target');
  const hudVector = document.getElementById('hud-globe-vector');
  const floatZoom = document.getElementById('float-globe-zoom');
  const floatSector = document.getElementById('float-globe-sector');

  // Dynamic state
  let currentX = width * 0.68;
  let currentY = height * 0.50;
  let currentScale = 1.10;
  let currentRotY = 0.35;
  let currentRotX = 0.22;

  let targetX = currentX;
  let targetY = currentY;
  let targetScale = currentScale;
  let targetRotY = currentRotY;
  let targetRotX = currentRotX;

  let currentSectorName = '01 // WAR ROOM HQ';
  let currentSectorTarget = 'BENGALURU DEFENSE HUB';
  let currentSectorZoom = '1.10x [WAR ROOM]';

  // Manual interactive modifiers
  let manualZoomOffset = 0;
  let manualRotY = 0;
  let manualRotX = 0;
  let dragVelY = 0;
  let dragVelX = 0;
  let isDragging = false;
  let lastMouse = { x: 0, y: 0 };
  let autoOrbit = true;
  let autoOrbitAngle = 0;
  let alertFlare = 0; // 0 to 1 during threat surge
  let arcSpeed = 0.009;
  let lockedOnBengaluru = false;

  // Mouse Parallax
  let mouseParallaxX = 0;
  let mouseParallaxY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseParallaxX = (e.clientX / width - 0.5) * 0.22;
    mouseParallaxY = (e.clientY / height - 0.5) * 0.18;

    if (!isDragging) return;
    const dx = e.clientX - lastMouse.x;
    const dy = e.clientY - lastMouse.y;
    dragVelY = dx * 0.005;
    dragVelX = dy * 0.005;
    manualRotY += dragVelY;
    manualRotX += dragVelX;
    manualRotX = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, manualRotX));
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
  });

  // Global & Viewfinder Drag Listeners
  function startDrag(e) {
    // Avoid dragging when clicking on buttons, links, inputs
    if (e.target.closest('button, a, input, textarea, select, .interactive-card, pre, code')) return;
    isDragging = true;
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
    document.body.classList.add('globe-dragging');
  }

  function endDrag() {
    if (isDragging) {
      isDragging = false;
      document.body.classList.remove('globe-dragging');
    }
  }

  window.addEventListener('mousedown', startDrag);
  window.addEventListener('mouseup', endDrag);

  const viewfinder = document.querySelector('.globe-viewfinder-lens');
  if (viewfinder) {
    viewfinder.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      startDrag(e);
    });
  }

  // Camera Control Actions
  function lockBengaluru() {
    lockedOnBengaluru = true;
    manualRotY = 0;
    manualRotX = 0;
    targetRotY = Math.PI * 2 + 0.38;
    targetRotX = 0.22;
    manualZoomOffset = 0.45;
    targetX = width * 0.5;
    targetY = height * 0.5;
    if (hudTarget) hudTarget.textContent = 'LOCKED: BENGALURU (12.97°N, 77.59°E)';
    setTimeout(() => { lockedOnBengaluru = false; }, 3500);
  }

  function zoomIn() {
    manualZoomOffset = Math.min(1.2, manualZoomOffset + 0.25);
  }

  function zoomOut() {
    manualZoomOffset = Math.max(-0.55, manualZoomOffset - 0.25);
  }

  function toggleOrbit() {
    autoOrbit = !autoOrbit;
    const btn1 = document.getElementById('cam-toggle-spin');
    const btn2 = document.getElementById('float-toggle-spin');
    const activeColor = autoOrbit ? 'var(--accent-cyan)' : 'var(--text-muted)';
    if (btn1) btn1.style.color = activeColor;
    if (btn2) btn2.style.color = activeColor;
  }

  function triggerThreatSurge() {
    alertFlare = 1.0;
    arcSpeed = 0.024;
    setTimeout(() => { arcSpeed = 0.009; }, 4000);
    if (hudVector) hudVector.innerHTML = '<span class="text-red">⚠ THREAT SURGE: 6 VECTORS INTERCEPTED</span>';
    setTimeout(() => {
      if (hudVector) hudVector.innerHTML = '185.220.101.5 &rarr; <strong class="text-cyan">MITRE T1110</strong>';
    }, 4500);
  }

  // Bind Buttons
  const camLockBlr = document.getElementById('cam-focus-blr');
  const floatLockBlr = document.getElementById('float-lock-blr');
  if (camLockBlr) camLockBlr.addEventListener('click', lockBengaluru);
  if (floatLockBlr) floatLockBlr.addEventListener('click', lockBengaluru);

  const camZoomIn = document.getElementById('cam-zoom-in');
  const floatZoomIn = document.getElementById('float-zoom-in');
  if (camZoomIn) camZoomIn.addEventListener('click', zoomIn);
  if (floatZoomIn) floatZoomIn.addEventListener('click', zoomIn);

  const camZoomOut = document.getElementById('cam-zoom-out');
  const floatZoomOut = document.getElementById('float-zoom-out');
  if (camZoomOut) camZoomOut.addEventListener('click', zoomOut);
  if (floatZoomOut) floatZoomOut.addEventListener('click', zoomOut);

  const camToggleSpin = document.getElementById('cam-toggle-spin');
  const floatToggleSpin = document.getElementById('float-toggle-spin');
  if (camToggleSpin) camToggleSpin.addEventListener('click', toggleOrbit);
  if (floatToggleSpin) floatToggleSpin.addEventListener('click', toggleOrbit);

  const camSimSurge = document.getElementById('cam-sim-surge');
  if (camSimSurge) camSimSurge.addEventListener('click', triggerThreatSurge);

  // Hook into Incident Simulator
  const executeBtn = document.getElementById('execute-sim-btn');
  if (executeBtn) {
    executeBtn.addEventListener('click', () => {
      triggerThreatSurge();
    });
  }

  // Geo Coordinates Database
  const bengaluru = { lat: 12.97, lon: 77.59, name: 'Bengaluru SOC Hub (23BCE010)' };

  const threatSources = [
    { lat: 41.8, lon: 123.4, name: 'East Asia Threat Cluster', ip: '221.192.199.4', mitre: 'T1059.001', payload: 'PowerShell Obfuscation', color: '#ff3366' },
    { lat: 59.9, lon: 30.3, name: 'St. Petersburg Botnet Node', ip: '185.220.101.5', mitre: 'T1110', payload: 'SSH Brute-Force', color: '#ff3366' },
    { lat: 50.1, lon: 8.6, name: 'Frankfurt Tor Exit Relay', ip: '194.26.29.112', mitre: 'T1071', payload: 'C2 Beaconing', color: '#ffaa00' },
    { lat: 37.3, lon: -121.8, name: 'Silicon Valley Ingress', ip: '104.244.42.1', mitre: 'T1190', payload: 'API Gateway Ingestion', color: '#00f2fe' },
    { lat: 51.5, lon: -0.12, name: 'London Financial Proxy', ip: '82.165.197.1', mitre: 'T1566', payload: 'Spearphishing Relay', color: '#ff5500' },
    { lat: -33.8, lon: 151.2, name: 'Sydney Telemetry Node', ip: '139.130.4.5', mitre: 'T1027', payload: 'SCA Dependency Vulnerability', color: '#9d4edd' }
  ];

  // Continental Tactical Landmarks Point Cloud
  const tacticalLandNodes = [
    { lat: 12.97, lon: 77.59 }, { lat: 19.07, lon: 72.87 }, { lat: 28.61, lon: 77.20 }, { lat: 13.08, lon: 80.27 },
    { lat: 22.57, lon: 88.36 }, { lat: 17.38, lon: 78.48 }, { lat: 35.67, lon: 139.65 }, { lat: 39.90, lon: 116.40 },
    { lat: 31.23, lon: 121.47 }, { lat: 37.56, lon: 126.97 }, { lat: 1.35, lon: 103.82 }, { lat: 22.31, lon: 114.16 },
    { lat: 51.50, lon: -0.12 }, { lat: 48.85, lon: 2.35 }, { lat: 50.11, lon: 8.68 }, { lat: 52.37, lon: 4.90 },
    { lat: 52.52, lon: 13.40 }, { lat: 41.90, lon: 12.49 }, { lat: 40.41, lon: -3.70 }, { lat: 59.93, lon: 30.33 },
    { lat: 55.75, lon: 37.61 }, { lat: 37.77, lon: -122.41 }, { lat: 40.71, lon: -74.00 }, { lat: 47.60, lon: -122.33 },
    { lat: 41.87, lon: -87.62 }, { lat: 30.26, lon: -97.74 }, { lat: 34.05, lon: -118.24 }, { lat: 43.65, lon: -79.38 },
    { lat: -33.86, lon: 151.20 }, { lat: -37.81, lon: 144.96 }, { lat: 25.20, lon: 55.27 }, { lat: 30.04, lon: 31.23 },
    { lat: -23.55, lon: -46.63 }, { lat: -34.60, lon: -58.38 }
  ];

  // Helper 3D math functions
  function latLonTo3D(lat, lon, r) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return {
      x: -(r * Math.sin(phi) * Math.cos(theta)),
      z: r * Math.sin(phi) * Math.sin(theta),
      y: r * Math.cos(phi)
    };
  }

  function project3D(point, rX, rY, cx, cy, rBase) {
    // Rotate Y
    let x1 = point.x * Math.cos(rY) + point.z * Math.sin(rY);
    let z1 = -point.x * Math.sin(rY) + point.z * Math.cos(rY);

    // Rotate X
    let y2 = point.y * Math.cos(rX) - z1 * Math.sin(rX);
    let z2 = point.y * Math.sin(rX) + z1 * Math.cos(rX);

    // Perspective projection
    const fov = 650;
    const perspective = fov / (fov + z2);
    return {
      x: cx + x1 * perspective,
      y: cy - y2 * perspective,
      z: z2,
      visible: z2 > -rBase * 0.18,
      scale: perspective
    };
  }

  // Scroll Progress Tracking & Waypoint Interpolation
  function updateScrollChoreography() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    ) - window.innerHeight;

    // Map each sector to absolute document position
    const waypoints = sectorWaypoints.map(wp => {
      const el = document.getElementById(wp.id);
      const top = el ? (el.getBoundingClientRect().top + scrollY) : 0;
      return { ...wp, top };
    });

    // Find current waypoint slice
    let from = waypoints[0];
    let to = waypoints[0];
    let progress = 0;

    for (let i = 0; i < waypoints.length; i++) {
      if (scrollY >= waypoints[i].top - window.innerHeight * 0.35) {
        from = waypoints[i];
        to = waypoints[Math.min(i + 1, waypoints.length - 1)];
      }
    }

    if (from !== to) {
      const span = to.top - from.top;
      if (span > 0) {
        progress = Math.max(0, Math.min(1, (scrollY - from.top + window.innerHeight * 0.35) / span));
      }
    }

    // Cosine smoothstep easing
    const easeP = 0.5 - 0.5 * Math.cos(progress * Math.PI);

    // Responsive width adjustments: Center on mobile
    const isMobile = width < 992;
    const fromXRatio = isMobile ? 0.50 : from.xRatio;
    const toXRatio = isMobile ? 0.50 : to.xRatio;

    targetX = width * (fromXRatio + (toXRatio - fromXRatio) * easeP);
    targetY = height * (from.yRatio + (to.yRatio - from.yRatio) * easeP);
    targetScale = from.scale + (to.scale - from.scale) * easeP;
    targetRotY = from.rotY + (to.rotY - from.rotY) * easeP;
    targetRotX = from.rotX + (to.rotX - from.rotX) * easeP;

    currentSectorName = easeP < 0.5 ? from.name : to.name;
    currentSectorTarget = easeP < 0.5 ? from.target : to.target;
    currentSectorZoom = (targetScale + manualZoomOffset).toFixed(2) + 'x [' + (easeP < 0.5 ? from.zoomText.split('[')[1].replace(']', '') : to.zoomText.split('[')[1].replace(']', '')) + ']';

    // Update HUD readouts
    if (hudZoom) hudZoom.textContent = currentSectorZoom;
    if (hudSector) hudSector.textContent = currentSectorName;
    if (hudTarget && !lockedOnBengaluru) hudTarget.textContent = currentSectorTarget;
    if (floatZoom) floatZoom.textContent = (targetScale + manualZoomOffset).toFixed(2) + 'x';
    if (floatSector) floatSector.textContent = currentSectorName.split('//')[0].trim();
  }

  window.addEventListener('scroll', updateScrollChoreography, { passive: true });
  updateScrollChoreography();

  let arcProgress = 0;

  // Main Render Loop
  function renderGlobe() {
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Physics Lerping (0.07 lerp coefficient for silky smooth motion)
    currentX += (targetX - currentX) * 0.07;
    currentY += (targetY - currentY) * 0.07;
    currentScale += (targetScale - currentScale) * 0.07;
    currentRotY += (targetRotY - currentRotY) * 0.07;
    currentRotX += (targetRotX - currentRotX) * 0.07;

    // Momentum damping for drag
    if (!isDragging) {
      dragVelY *= 0.92;
      dragVelX *= 0.92;
      manualRotY += dragVelY;
      manualRotX += dragVelX;
    }

    if (autoOrbit && !isDragging && !lockedOnBengaluru) {
      autoOrbitAngle += 0.0035;
    }

    if (alertFlare > 0) {
      alertFlare = Math.max(0, alertFlare - 0.015);
    }

    arcProgress = (arcProgress + arcSpeed) % 1;

    // Base globe radius scaled to screen size and zoom
    const baseRadius = Math.min(width, height) * 0.38;
    const effectiveRadius = Math.max(80, baseRadius * (currentScale + manualZoomOffset));
    const effectiveRotY = currentRotY + autoOrbitAngle + manualRotY + mouseParallaxX;
    const effectiveRotX = currentRotX + manualRotX + mouseParallaxY;
    const cx = currentX;
    const cy = currentY;

    // 1. Outer Atmospheric Corona & Glow
    const glowRadius = effectiveRadius * 1.25;
    const glow = ctx.createRadialGradient(cx, cy, effectiveRadius * 0.55, cx, cy, glowRadius);
    if (alertFlare > 0.05) {
      // Crimson threat alert glow
      glow.addColorStop(0, 'rgba(255, 30, 80, ' + (0.15 * alertFlare) + ')');
      glow.addColorStop(0.7, 'rgba(255, 51, 102, ' + (0.28 * alertFlare) + ')');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    } else {
      // Sleek cyan / emerald atmospheric aura
      glow.addColorStop(0, 'rgba(0, 242, 254, 0.04)');
      glow.addColorStop(0.65, 'rgba(0, 242, 254, 0.12)');
      glow.addColorStop(0.9, 'rgba(0, 255, 136, 0.06)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    }
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, glowRadius, 0, Math.PI * 2);
    ctx.fill();

    // 2. Planet Shaded Body Disk (Dark cyber sphere with edge rim)
    const bodyGrad = ctx.createRadialGradient(cx - effectiveRadius * 0.25, cy - effectiveRadius * 0.25, effectiveRadius * 0.1, cx, cy, effectiveRadius);
    bodyGrad.addColorStop(0, 'rgba(5, 12, 26, 0.88)');
    bodyGrad.addColorStop(0.8, 'rgba(3, 8, 18, 0.92)');
    bodyGrad.addColorStop(1, alertFlare > 0.1 ? 'rgba(255, 51, 102, 0.3)' : 'rgba(0, 242, 254, 0.25)');
    ctx.fillStyle = bodyGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, effectiveRadius, 0, Math.PI * 2);
    ctx.fill();

    // 3. Latitude Parallels (Wireframe Grid)
    const latStep = 15;
    for (let lat = -75; lat <= 75; lat += latStep) {
      const isEquator = lat === 0;
      ctx.beginPath();
      let first = true;
      for (let lon = 0; lon <= 360; lon += 6) {
        const p3d = latLonTo3D(lat, lon, effectiveRadius);
        const proj = project3D(p3d, effectiveRotX, effectiveRotY, cx, cy, effectiveRadius);
        if (proj.visible) {
          if (first) { ctx.moveTo(proj.x, proj.y); first = false; }
          else { ctx.lineTo(proj.x, proj.y); }
        } else {
          first = true;
        }
      }
      ctx.strokeStyle = isEquator
        ? (alertFlare > 0.1 ? 'rgba(255, 51, 102, 0.45)' : 'rgba(0, 242, 254, 0.42)')
        : (alertFlare > 0.1 ? 'rgba(255, 51, 102, 0.16)' : 'rgba(0, 242, 254, 0.14)');
      ctx.lineWidth = isEquator ? 1.6 : 0.9;
      ctx.stroke();
    }

    // 4. Longitude Meridians (Wireframe Grid)
    for (let lon = 0; lon < 360; lon += 24) {
      ctx.beginPath();
      let first = true;
      for (let lat = -90; lat <= 90; lat += 5) {
        const p3d = latLonTo3D(lat, lon, effectiveRadius);
        const proj = project3D(p3d, effectiveRotX, effectiveRotY, cx, cy, effectiveRadius);
        if (proj.visible) {
          if (first) { ctx.moveTo(proj.x, proj.y); first = false; }
          else { ctx.lineTo(proj.x, proj.y); }
        } else {
          first = true;
        }
      }
      ctx.strokeStyle = alertFlare > 0.1 ? 'rgba(255, 51, 102, 0.16)' : 'rgba(0, 242, 254, 0.14)';
      ctx.lineWidth = 0.9;
      ctx.stroke();
    }

    // 5. Continental Dot-Matrix Landmarks
    tacticalLandNodes.forEach((node) => {
      const node3d = latLonTo3D(node.lat, node.lon, effectiveRadius);
      const nodeProj = project3D(node3d, effectiveRotX, effectiveRotY, cx, cy, effectiveRadius);
      if (nodeProj.visible && nodeProj.z > 0) {
        ctx.beginPath();
        ctx.arc(nodeProj.x, nodeProj.y, 1.8 * nodeProj.scale, 0, Math.PI * 2);
        ctx.fillStyle = alertFlare > 0.1 ? 'rgba(255, 100, 140, 0.6)' : 'rgba(0, 242, 254, 0.55)';
        ctx.fill();
      }
    });

    // 6. Project Defense Hub: Bengaluru, India (12.97°N, 77.59°E)
    const hub3d = latLonTo3D(bengaluru.lat, bengaluru.lon, effectiveRadius);
    const hubProj = project3D(hub3d, effectiveRotX, effectiveRotY, cx, cy, effectiveRadius);

    if (hubProj.visible) {
      // Emerald Core Node
      ctx.beginPath();
      ctx.arc(hubProj.x, hubProj.y, 6.5 * hubProj.scale, 0, Math.PI * 2);
      ctx.fillStyle = '#00ff88';
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Concentric Radar Waves
      const tNow = Date.now() * 0.0035;
      for (let rIdx = 0; rIdx < 3; rIdx++) {
        const ringScale = ((tNow + rIdx * 0.33) % 1);
        const ringRadius = (10 + ringScale * 26) * hubProj.scale;
        const ringAlpha = (1 - ringScale) * 0.65;
        ctx.beginPath();
        ctx.arc(hubProj.x, hubProj.y, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 255, 136, ' + ringAlpha + ')';
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }

      // Tactical Reticle Callout (When node is clearly in front)
      if (hubProj.z > effectiveRadius * 0.2) {
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.7)';
        ctx.lineWidth = 1;
        // Crosshair box
        const boxSize = 14 * hubProj.scale;
        ctx.strokeRect(hubProj.x - boxSize / 2, hubProj.y - boxSize / 2, boxSize, boxSize);

        // Leader line to HUD tag
        const tagX = hubProj.x + 35 * hubProj.scale;
        const tagY = hubProj.y - 25 * hubProj.scale;
        ctx.beginPath();
        ctx.moveTo(hubProj.x + boxSize / 2, hubProj.y - boxSize / 2);
        ctx.lineTo(tagX, tagY);
        ctx.lineTo(tagX + 85, tagY);
        ctx.stroke();

        ctx.font = '600 ' + Math.round(10 * Math.max(0.85, hubProj.scale)) + 'px "JetBrains Mono", monospace';
        ctx.fillStyle = '#00ff88';
        ctx.fillText('BENGALURU HUB', tagX + 4, tagY - 4);
        ctx.font = '500 ' + Math.round(8.5 * Math.max(0.85, hubProj.scale)) + 'px "JetBrains Mono", monospace';
        ctx.fillStyle = '#00f2fe';
        ctx.fillText('12.97°N, 77.59°E', tagX + 4, tagY + 11);
      }
    }

    // 7. Attack Vectors & 3D Parabolic Ballistic Arcs
    threatSources.forEach((threat, idx) => {
      const src3d = latLonTo3D(threat.lat, threat.lon, effectiveRadius);
      const srcProj = project3D(src3d, effectiveRotX, effectiveRotY, cx, cy, effectiveRadius);

      if (srcProj.visible) {
        // Adversary Origin Beacon
        ctx.beginPath();
        ctx.arc(srcProj.x, srcProj.y, 4.5 * srcProj.scale, 0, Math.PI * 2);
        ctx.fillStyle = alertFlare > 0.1 ? '#ff0055' : threat.color;
        ctx.shadowColor = alertFlare > 0.1 ? '#ff0055' : threat.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Expanding hazard pulse
        const hazardRadius = (7 + Math.sin(Date.now() * 0.006 + idx) * 3) * srcProj.scale;
        ctx.beginPath();
        ctx.arc(srcProj.x, srcProj.y, hazardRadius, 0, Math.PI * 2);
        ctx.strokeStyle = alertFlare > 0.1 ? 'rgba(255, 0, 85, 0.45)' : 'rgba(255, 51, 102, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Arced 3D Trajectory to Bengaluru Hub
      if (srcProj.visible && hubProj.visible) {
        ctx.beginPath();
        ctx.moveTo(srcProj.x, srcProj.y);

        // Control point: Arched in 3D space above the globe
        const midLat = (threat.lat + bengaluru.lat) / 2;
        const midLon = (threat.lon + bengaluru.lon) / 2;
        const mid3d = latLonTo3D(midLat, midLon, effectiveRadius * 1.38);
        const midProj = project3D(mid3d, effectiveRotX, effectiveRotY, cx, cy, effectiveRadius);

        ctx.quadraticCurveTo(midProj.x, midProj.y, hubProj.x, hubProj.y);
        ctx.strokeStyle = alertFlare > 0.1 ? 'rgba(255, 51, 102, 0.55)' : 'rgba(255, 51, 102, 0.30)';
        ctx.lineWidth = alertFlare > 0.1 ? 1.8 : 1.2;
        ctx.stroke();

        // Traveling Photon Packet Train
        const t = (arcProgress + idx * 0.18) % 1;
        const px = (1 - t) * (1 - t) * srcProj.x + 2 * (1 - t) * t * midProj.x + t * t * hubProj.x;
        const py = (1 - t) * (1 - t) * srcProj.y + 2 * (1 - t) * t * midProj.y + t * t * hubProj.y;

        // Packet Head
        ctx.beginPath();
        ctx.arc(px, py, (alertFlare > 0.1 ? 4.5 : 3.2), 0, Math.PI * 2);
        ctx.fillStyle = alertFlare > 0.1 ? '#ff3366' : '#00f2fe';
        ctx.shadowColor = alertFlare > 0.1 ? '#ff3366' : '#00f2fe';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Packet Trail
        const tTrail = Math.max(0, t - 0.04);
        const tx = (1 - tTrail) * (1 - tTrail) * srcProj.x + 2 * (1 - tTrail) * tTrail * midProj.x + tTrail * tTrail * hubProj.x;
        const ty = (1 - tTrail) * (1 - tTrail) * srcProj.y + 2 * (1 - tTrail) * tTrail * midProj.y + tTrail * tTrail * hubProj.y;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.strokeStyle = alertFlare > 0.1 ? 'rgba(255, 51, 102, 0.8)' : 'rgba(0, 242, 254, 0.7)';
        ctx.lineWidth = 2.4;
        ctx.stroke();
      }
    });

    ctx.restore();
    requestAnimationFrame(renderGlobe);
  }

  requestAnimationFrame(renderGlobe);
}

/* ==========================================================================
   3. TACTICAL COCKPIT CONTROLLER (DEFCON, THEME & DECK TABS)
   ========================================================================== */
function initCockpitControls() {
  const root = document.documentElement;

  // 1. DEFCON Switcher
  const defconToggle = document.getElementById('defcon-toggle');
  const defconBadge = document.getElementById('defcon-badge');
  let currentDefcon = 4;

  const defconLabels = {
    4: 'LEVEL 4 // GUARDED',
    3: 'LEVEL 3 // ELEVATED',
    2: 'LEVEL 2 // HIGH ALERT',
    1: 'LEVEL 1 // CRITICAL'
  };

  if (defconToggle && defconBadge) {
    defconToggle.addEventListener('click', () => {
      currentDefcon = currentDefcon === 1 ? 4 : currentDefcon - 1;
      root.setAttribute('data-defcon', currentDefcon);

      defconBadge.className = `defcon-badge defcon-${currentDefcon}`;
      defconBadge.textContent = defconLabels[currentDefcon];

      const telemEl = document.getElementById('cockpit-telemetry');
      const sirenEl = document.getElementById('defcon-siren');

      if (currentDefcon === 1) {
        if (sirenEl) sirenEl.style.display = 'inline-block';
        if (telemEl) {
          telemEl.classList.add('defcon-alert-telem');
          telemEl.innerHTML = `
            <span class="siren-icon pulse-siren" id="defcon-siren">🚨</span>
            <span class="telem-chip alert-chip"><span class="pulse-dot-red"></span> DEFCON 1: <strong>EMERGENCY ACTIVE</strong></span>
            <span class="telem-divider">|</span>
            <span class="telem-metric">INGEST: <strong class="text-orange">148.9k eps</strong></span>
            <span class="telem-divider">|</span>
            <span class="telem-metric">THREAT LEVEL: <strong class="text-red">CRITICAL BREACH</strong></span>
            <span class="telem-divider">|</span>
            <span class="telem-metric">CONTAINMENT: <strong class="text-red">AUTO-LOCKDOWN</strong></span>
          `;
        }
        playCyberSound('alarm');
        showToast('🚨 DEFCON 1 CRITICAL ALERT: Red alert triggered! Containment engaged.');
      } else {
        if (telemEl && telemEl.classList.contains('defcon-alert-telem')) {
          telemEl.classList.remove('defcon-alert-telem');
          telemEl.innerHTML = `
            <span class="siren-icon" id="defcon-siren" style="display:none;" aria-hidden="true">🚨</span>
            <span class="telem-chip"><span class="pulse-dot"></span> TITANSOC: <strong>ONLINE</strong></span>
            <span class="telem-divider">|</span>
            <span class="telem-metric">INGEST: <strong class="text-cyan">24.2k eps</strong></span>
            <span class="telem-divider">|</span>
            <span class="telem-metric">DEFENSE NODES: <strong class="text-green">5/5 ARMED</strong></span>
            <span class="telem-divider">|</span>
            <span class="telem-metric">SIEM: <strong class="text-purple">WAZUH 4.x + ELK 8.13</strong></span>
          `;
        }
        playCyberSound('blip');
        showToast(`DEFCON status set to: ${defconLabels[currentDefcon]}`);
      }
    });
  }

  // 2. Audio Synthesizer Toggle
  const audioBtn = document.getElementById('audio-synth-btn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      isAudioEnabled = !isAudioEnabled;
      audioBtn.classList.toggle('active', isAudioEnabled);
      const audioText = audioBtn.querySelector('.audio-text');
      const audioIcon = audioBtn.querySelector('.audio-icon');

      if (isAudioEnabled) {
        getAudioContext();
        audioText.textContent = 'AUDIO: ON';
        audioIcon.textContent = '🔊';
        playCyberSound('mitigation');
        showToast('🔊 Web Audio Synthesizer enabled: Interface sound effects active!');
      } else {
        audioText.textContent = 'AUDIO: OFF';
        audioIcon.textContent = '🔇';
        showToast('🔇 Audio muted');
      }
    });
  }

  // 3. Theme Palette Picker
  const paletteBtns = document.querySelectorAll('.palette-btn');
  paletteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-set-theme');
      root.setAttribute('data-theme', theme);
      paletteBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      playCyberSound('click');
      showToast(`Tactical visual HUD updated: [${theme.toUpperCase()}]`);
    });
  });

  // 4. War Room Deck Tabs (Globe vs Holo)
  const deckTabs = document.querySelectorAll('.deck-tab');
  const deckViews = document.querySelectorAll('.deck-view');

  deckTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      deckTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const viewId = tab.getAttribute('data-deck-view');

      deckViews.forEach(v => {
        if (v.id === `deck-view-${viewId}`) {
          v.classList.add('active');
        } else {
          v.classList.remove('active');
        }
      });
      playCyberSound('blip');
    });
  });
}

/* ==========================================================================
   4. LIVE SOC INCIDENT SIMULATION CENTER
   ========================================================================== */
function initIncidentSimulator() {
  const scenarioBtns = document.querySelectorAll('.scenario-btn');
  const titleEl = document.getElementById('sim-scenario-title');
  const descEl = document.getElementById('sim-scenario-desc');
  const archLabel = document.getElementById('sim-arch-label');
  const mitreLabel = document.getElementById('sim-mitre-label');
  const mitigationLabel = document.getElementById('sim-mitigation-label');
  const riskFill = document.getElementById('risk-fill');
  const riskBadge = document.getElementById('risk-score-badge');
  const executeBtn = document.getElementById('execute-sim-btn');
  const terminalBody = document.getElementById('sim-terminal-body');

  const scenarios = {
    ransomware: {
      title: 'Ransomware Privilege Escalation via Windows Sysmon',
      desc: 'Simulating unauthorized process injection into lsass.exe, triggering Sysmon Event ID 1 (Process Creation) and Wazuh detection rule ID 100201.',
      arch: 'Wazuh SIEM + Microsoft Sysmon',
      mitre: 'T1059.001 (PowerShell) & T1055 (Process Injection)',
      mitigation: 'Process Quarantined & Node Network Isolated',
      risk: 96,
      logs: [
        '[EVENT_ID: 1] Sysmon Process Creation: powershell.exe -enc JABzAD0ATgBlAHcALQBPAGIAag... parent: cmd.exe (PID: 4920)',
        '[TELEMETRY] Wazuh Agent 003 (Windows-Target) streaming event to Wazuh Manager 4.x...',
        '[RULE MATCH: 100201] Level 10 Alert: Suspicious Encoded PowerShell Execution (MITRE T1059.001)',
        '[ANALYSIS] Process attempted memory dump on lsass.exe (MITRE T1003)',
        '[ACTION] Wazuh Active Response triggered: auto-quarantine process PID 4920',
        '[STATUS] Threat contained in 0.42 seconds. Incident ticket #INC-8924 generated.'
      ]
    },
    banking: {
      title: 'Banking Botnet Ingestion & Firewall Drop (BankSec-TIP)',
      desc: 'Simulating high-velocity threat indicator ingestion from AlienVault OTX & AbuseIPDB into MongoDB, indexing into Elasticsearch, and auto-enforcing firewall block rules.',
      arch: 'BankSec-TIP (ELK Stack + MongoDB 7.0 + PyMongo)',
      mitre: 'T1110 (Brute Force) & T1071 (Standard App Protocol)',
      mitigation: 'Firewall Policy Rule Injected: DROP CIDR /24',
      risk: 92,
      logs: [
        '[OSINT INGEST] AlienVault OTX API returned 42 malicious pulse hashes',
        '[ABUSE_IPDB] Query IP 185.220.101.5: 100% Abuse Confidence Score reported by 182 reporters',
        '[MONGODB] Normalizing IOC document into collections.threat_indicators: { type: "IPv4", risk: 92 }',
        '[FILEBEAT] Streaming normalized blocked event to Elasticsearch 8.13.0 cluster (banksec-tip-logs)',
        '[KIBANA ALERT] Alert rule triggered: 5+ Critical IPs indexed in 10 minutes',
        '[FIREWALL ENGINE] iptables -A INPUT -s 185.220.101.5 -j DROP deployed successfully.'
      ]
    },
    iac: {
      title: 'DevSecOps Infrastructure-as-Code Leak (Checkov & OWASP ZAP)',
      desc: 'Detecting unencrypted S3 bucket and open security group (0.0.0.0/0) in Terraform template, failing the CI/CD pipeline before AWS production merge.',
      arch: 'GitHub Actions + Checkov IaC + OWASP ZAP DAST',
      mitre: 'T1190 (Exploit Public-Facing Application)',
      mitigation: 'Pipeline Gate BLOCKED (Checkov Policy Failed)',
      risk: 88,
      logs: [
        '[CI/CD] Pull Request #14 opened: infra/terraform/storage.tf',
        '[CHECKOV SCAN] Scanning 14 Terraform resources...',
        '[FAILED] CKV_AWS_20: S3 Bucket has an ACL allowing public read access!',
        '[FAILED] CKV_AWS_260: Security group allows ingress from 0.0.0.0/0 to port 22',
        '[DAST] OWASP ZAP container initialized for dynamic staging check...',
        '[GATE BLOCKED] GitHub Actions workflow failed. Merge rejected until IaC remediation.'
      ]
    },
    biometrics: {
      title: 'Biometric Anti-Spoofing & Geo-Fencing Violation',
      desc: 'Simulating photo presentation attack on attendance camera with GPS coordinate outside authorized campus boundary polygon.',
      arch: 'Smart Attendance System (OpenCV + Flask + SHA-256)',
      mitre: 'T1078 (Valid Accounts / Presentation Attack)',
      mitigation: 'Biometric Spoof Flagged & Intrusion Logged',
      risk: 75,
      logs: [
        '[CAMERA] Video feed active: User facial landmarks extracted (68 points)',
        '[LIVENESS] Eye Aspect Ratio (EAR) analyzed over 30 frames: ZERO blinks detected',
        '[ALERT] Presentation attack detected: Static photograph or screen presentation rejected',
        '[GEO-FENCING] Mock GPS verification: Coordinates [13.0827, 80.2707] outside authorized geofence radius',
        '[SECURITY LAYER] SHA-256 protected dashboard updated: Unauthorized intrusion attempt logged.'
      ]
    }
  };

  let activeKey = 'ransomware';

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeKey = btn.getAttribute('data-scenario');
      const sc = scenarios[activeKey];

      titleEl.textContent = sc.title;
      descEl.textContent = sc.desc;
      archLabel.textContent = sc.arch;
      mitreLabel.textContent = sc.mitre;
      mitigationLabel.textContent = 'STANDBY // READY';
      mitigationLabel.className = 'value text-cyan';

      riskFill.style.width = '0%';
      riskBadge.textContent = '0 / 100 [SAFE]';
      riskBadge.className = 'risk-score-badge badge-green';

      terminalBody.innerHTML = `<div class="telem-line text-muted">[00:00:00] Scenario [${activeKey.toUpperCase()}] loaded. Click 'Execute Incident Simulation' to run.</div>`;
      playCyberSound('click');
    });
  });

  // Execute Simulation
  let isSimulating = false;
  if (executeBtn) {
    executeBtn.addEventListener('click', () => {
      if (isSimulating) return;
      isSimulating = true;
      executeBtn.disabled = true;
      playCyberSound('alarm');

      const sc = scenarios[activeKey];
      terminalBody.innerHTML = '';

      // 1. Animate Risk Gauge
      riskFill.style.width = `${sc.risk}%`;
      riskBadge.textContent = `${sc.risk} / 100 [CRITICAL THREAT]`;
      riskBadge.className = 'risk-score-badge badge-red';
      mitigationLabel.textContent = 'INCIDENT ACTIVE // MITIGATING...';
      mitigationLabel.className = 'value text-orange';

      // 2. Stream Logs
      let lineIdx = 0;
      const interval = setInterval(() => {
        if (lineIdx < sc.logs.length) {
          const line = document.createElement('div');
          line.className = 'telem-line';
          const text = sc.logs[lineIdx];

          if (text.includes('[ALERT]') || text.includes('[RULE MATCH') || text.includes('[FAILED]')) {
            line.innerHTML = `<span class="text-orange">${escapeHtml(text)}</span>`;
          } else if (text.includes('[ACTION]') || text.includes('[STATUS]') || text.includes('successfully')) {
            line.innerHTML = `<span class="text-green">${escapeHtml(text)}</span>`;
          } else {
            line.innerHTML = `<span class="text-cyan">${escapeHtml(text)}</span>`;
          }

          terminalBody.appendChild(line);
          terminalBody.scrollTop = terminalBody.scrollHeight;
          playCyberSound('click');
          lineIdx++;
        } else {
          clearInterval(interval);
          isSimulating = false;
          executeBtn.disabled = false;
          mitigationLabel.textContent = sc.mitigation;
          mitigationLabel.className = 'value text-green';
          playCyberSound('mitigation');
          showToast(`Incident contained successfully: ${sc.mitigation}`);
        }
      }, 450);
    });
  }
}

/* ==========================================================================
   5. INTERACTIVE MITRE ATT&CK MATRIX EXPLORER
   ========================================================================== */
function initMitreExplorer() {
  const cards = document.querySelectorAll('.mitre-tech-card');
  const inspId = document.getElementById('insp-tech-id');
  const inspName = document.getElementById('insp-tech-name');
  const inspDesc = document.getElementById('insp-tech-desc');
  const inspSensor = document.getElementById('insp-sensor');
  const inspRepo = document.getElementById('insp-repo');
  const inspCode = document.getElementById('insp-rule-code');

  const mitreDB = {
    T1059: {
      id: 'TECHNIQUE T1059: Command and Scripting Interpreter',
      name: 'Adversary PowerShell Execution & Process Tampering',
      desc: 'Adversaries abuse command and script interpreters to execute arbitrary commands, download secondary payloads, and bypass traditional signature-based antiviruses.',
      sensor: 'Microsoft Sysmon (Event ID 1: Process Creation, Event ID 3: Network Connect)',
      repo: 'AdityaTamakuwala/cybersecurity-soc-home-lab',
      code: `<rule id="100201" level="10">
  <if_group>sysmon_process_creation</if_group>
  <field name="win.eventdata.image">powershell.exe|cmd.exe</field>
  <field name="win.eventdata.commandLine">-enc|-EncodedCommand|bypass</field>
  <description>Suspicious Encoded PowerShell Execution Detected via Sysmon</description>
  <mitre><id>T1059.001</id></mitre>
</rule>`
    },
    T1190: {
      id: 'TECHNIQUE T1190: Exploit Public-Facing Application',
      name: 'Dynamic Web Application Exploitation (SQLi, XSS, RCE)',
      desc: 'Adversaries scan public endpoints for known unpatched flaws in web applications or API gateways to gain initial foothold or compromise server processes.',
      sensor: 'OWASP ZAP Dynamic Scanning Engine + Docker Container Logs',
      repo: 'AdityaTamakuwala/ecommerce-enterprise-devsecops-pipeline',
      code: `- name: OWASP ZAP DAST Baseline Scan
  uses: zaproxy/action-baseline@v0.12.0
  with:
    token: \${{ secrets.GITHUB_TOKEN }}
    docker_name: 'ghcr.io/zaproxy/zaproxy:stable'
    target: 'http://localhost:3000'
    rules_file_name: '.zap/rules.tsv'
    cmd_options: '-a'`
    },
    T1566: {
      id: 'TECHNIQUE T1566: Phishing & Malicious IOC Indicators',
      name: 'External Threat Feed Correlation & OSINT Aggregation',
      desc: 'Adversaries distribute malicious domains and IP addresses to harvest credentials or deploy droppers.',
      sensor: 'AlienVault OTX & AbuseIPDB REST Feeds Ingestion',
      repo: 'AdityaTamakuwala/BankSec-TIP',
      code: `def score_ip(ioc_data):
    abuse_score = ioc_data.get('abuseConfidenceScore', 0)
    otx_pulses = len(ioc_data.get('pulse_info', {}).get('pulses', []))
    risk_score = min(100, int((abuse_score * 0.7) + (otx_pulses * 3)))
    return risk_score`
    },
    T1204: {
      id: 'TECHNIQUE T1204: User Execution',
      name: 'Malicious Binary Execution Detection',
      desc: 'An adversary relies on a user executing a malicious attachment, script, or downloaded executable.',
      sensor: 'Windows Security Event Logs + Wazuh Agent',
      repo: 'AdityaTamakuwala/cybersecurity-soc-home-lab',
      code: `<rule id="100205" level="8">
  <if_sid>100201</if_sid>
  <field name="win.eventdata.parentImage">explorer.exe</field>
  <description>Suspicious Script Spawned Directly by User Shell</description>
  <mitre><id>T1204.002</id></mitre>
</rule>`
    },
    T1547: {
      id: 'TECHNIQUE T1547: Boot or Logon Autostart Execution',
      name: 'Persistence via Registry Run Keys',
      desc: 'Adversaries modify Windows Registry run keys to achieve persistence across system reboots.',
      sensor: 'Sysmon Event ID 12, 13 (Registry Event) & Wazuh FIM',
      repo: 'AdityaTamakuwala/cybersecurity-soc-home-lab',
      code: `<sysmon>
  <RuleGroup name="RegistryPersistence">
    <RegistryEvent onmatch="include">
      <TargetObject condition="contains">\\CurrentVersion\\Run</TargetObject>
    </RegistryEvent>
  </RuleGroup>
</sysmon>`
    },
    T1053: {
      id: 'TECHNIQUE T1053: Scheduled Task / Job',
      name: 'Scheduled Task Creation Telemetry',
      desc: 'Adversaries abuse task scheduling utilities like schtasks.exe to execute programs at designated intervals.',
      sensor: 'Sysmon Event ID 1 & Windows Security Event 4698',
      repo: 'AdityaTamakuwala/cybersecurity-soc-home-lab',
      code: `<rule id="100210" level="9">
  <if_group>sysmon_process_creation</if_group>
  <field name="win.eventdata.image">schtasks.exe</field>
  <field name="win.eventdata.commandLine">/create</field>
  <description>Suspicious Scheduled Task Created</description>
  <mitre><id>T1053.005</id></mitre>
</rule>`
    },
    T1070: {
      id: 'TECHNIQUE T1070: Indicator Removal on Host',
      name: 'Log Clearing & Anti-Forensics Detection',
      desc: 'Adversaries attempt to clear event logs using wevtutil or delete log files to evade detection.',
      sensor: 'Windows Event ID 1102 (The audit log was cleared)',
      repo: 'AdityaTamakuwala/cybersecurity-soc-home-lab',
      code: `<rule id="100215" level="12">
  <field name="win.system.eventID">1102</field>
  <description>CRITICAL: Security Audit Log Cleared by Operator</description>
  <mitre><id>T1070.001</id></mitre>
</rule>`
    },
    T1027: {
      id: 'TECHNIQUE T1027: Obfuscated Files or Information',
      name: 'Encoding and Entropy Analysis',
      desc: 'Adversaries attempt to conceal payloads using XOR, Base64, or custom packers.',
      sensor: 'AlienVault OTX Malicious Hash Database',
      repo: 'AdityaTamakuwala/BankSec-TIP',
      code: `db.threat_indicators.createIndex({ "sha256": 1 }, { unique: true });
db.threat_indicators.aggregate([
  { $match: { "tags": "obfuscated" } },
  { $sort: { "risk_score": -1 } }
]);`
    },
    T1110: {
      id: 'TECHNIQUE T1110: Brute Force',
      name: 'SSH & RDP Password Guessing Detection',
      desc: 'Adversaries systematically guess passwords to gain unauthorized administrative access.',
      sensor: 'AbuseIPDB Threat Stream + Elasticsearch SIEM Rule',
      repo: 'AdityaTamakuwala/BankSec-TIP',
      code: `{
  "trigger": { "schedule": { "interval": "1m" } },
  "input": {
    "search": {
      "request": {
        "indices": ["threat-ioc-*"],
        "body": { "query": { "range": { "risk_score": { "gte": 95 } } } }
      }
    }
  }
}`
    },
    T1003: {
      id: 'TECHNIQUE T1003: OS Credential Dumping',
      name: 'LSASS Memory Extraction Defense',
      desc: 'Adversaries attempt to dump plaintext credentials or NTLM hashes from memory.',
      sensor: 'Sysmon Event ID 10 (ProcessAccess)',
      repo: 'AdityaTamakuwala/cybersecurity-soc-home-lab',
      code: `<sysmon>
  <ProcessAccess onmatch="include">
    <TargetImage condition="is">C:\\Windows\\System32\\lsass.exe</TargetImage>
    <GrantedAccess condition="is">0x1010</GrantedAccess>
  </ProcessAccess>
</sysmon>`
    },
    T1071: {
      id: 'TECHNIQUE T1071: Application Layer Protocol',
      name: 'Firewall Policy Ingress/Egress Rule Enforcement',
      desc: 'Adversaries communicate using standard HTTP/HTTPS/DNS to blend C2 traffic with normal usage.',
      sensor: 'BankSec-TIP Firewall Policy Engine',
      repo: 'AdityaTamakuwala/BankSec-TIP',
      code: `def enforce_firewall_drop(ip_address):
    rule = f"iptables -I FORWARD -s {ip_address} -j DROP"
    subprocess.run(shlex.split(rule), check=True)
    logger.info(f"Blocked malicious C2 host: {ip_address}")`
    },
    T1571: {
      id: 'TECHNIQUE T1571: Non-Standard Port',
      name: 'Anomalous Port Traffic Inspection',
      desc: 'Adversaries communicate across atypical ports to evade perimeter egress inspection.',
      sensor: 'Elasticsearch Log Mapping & Kibana Visualizer',
      repo: 'AdityaTamakuwala/BankSec-TIP',
      code: `PUT _index_template/threat_ioc_template
{
  "index_patterns": ["threat-ioc-*"],
  "template": {
    "mappings": {
      "properties": {
        "dest_port": { "type": "integer" },
        "risk_score": { "type": "short" }
      }
    }
  }
}`
    }
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const techKey = card.getAttribute('data-tech');
      const data = mitreDB[techKey];

      if (data) {
        inspId.textContent = data.id;
        inspName.textContent = data.name;
        inspDesc.textContent = data.desc;
        inspSensor.textContent = data.sensor;
        inspRepo.textContent = data.repo;
        inspCode.textContent = data.code;
        playCyberSound('click');
      }
    });
  });
}

/* ==========================================================================
   6. ARCHITECTURAL BLUEPRINT MODAL ENGINE
   ========================================================================== */
function initBlueprintModal() {
  const modal = document.getElementById('blueprint-modal');
  const backdrop = document.getElementById('blueprint-backdrop');
  const closeBtn = document.getElementById('bp-close-btn');
  const modalTitle = document.getElementById('bp-modal-title');
  const modalBody = document.getElementById('bp-modal-body');
  const triggers = document.querySelectorAll('.open-blueprint-trigger');

  const blueprints = {
    banksec: {
      title: 'BankSec-TIP: Finance Threat Intelligence Architecture',
      svg: `
      <svg viewBox="0 0 800 240" class="bp-svg-diagram">
        <defs>
          <linearGradient id="cyanGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00f2fe"/><stop offset="100%" stop-color="#00c3ff"/></linearGradient>
          <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00ff88"/><stop offset="100%" stop-color="#10b981"/></linearGradient>
        </defs>
        <!-- Nodes -->
        <rect x="20" y="30" width="130" height="60" rx="8" fill="#091326" stroke="#00f2fe" stroke-width="1.5"/>
        <text x="85" y="55" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">OSINT Feeds</text>
        <text x="85" y="75" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">AlienVault/AbuseIPDB</text>

        <path d="M 150 60 L 210 60" stroke="#00f2fe" stroke-width="2" marker-end="url(#arrow)"/>

        <rect x="210" y="30" width="130" height="60" rx="8" fill="#091326" stroke="#00f2fe" stroke-width="1.5"/>
        <text x="275" y="55" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">MongoDB 7.0</text>
        <text x="275" y="75" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">IOC Normalizer</text>

        <path d="M 340 60 L 400 60" stroke="#00f2fe" stroke-width="2"/>

        <rect x="400" y="30" width="140" height="60" rx="8" fill="#091326" stroke="#00ff88" stroke-width="1.5"/>
        <text x="470" y="55" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Elasticsearch 8.x</text>
        <text x="470" y="75" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Indexed IOC Clusters</text>

        <path d="M 540 60 L 600 60" stroke="#00ff88" stroke-width="2"/>

        <rect x="600" y="30" width="140" height="60" rx="8" fill="#091326" stroke="#00ff88" stroke-width="1.5"/>
        <text x="670" y="55" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Kibana SIEM</text>
        <text x="670" y="75" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Real-Time Visualizer</text>

        <!-- Lower Pipeline to Firewall -->
        <path d="M 275 90 L 275 160 L 400 160" stroke="#ff3366" stroke-width="2" stroke-dasharray="4"/>

        <rect x="400" y="130" width="140" height="60" rx="8" fill="#1a0a10" stroke="#ff3366" stroke-width="1.5"/>
        <text x="470" y="155" fill="#ff3366" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Firewall Engine</text>
        <text x="470" y="175" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">iptables Auto-Drop</text>
      </svg>`,
      specs: [
        { title: 'ELK SIEM Stack', text: 'Elasticsearch 8.13, Kibana SIEM visualization, and Filebeat log shipper containerized via Docker Compose.' },
        { title: 'Normalization Pipeline', text: 'PyMongo integration deduplicating AlienVault OTX, VirusTotal, and AbuseIPDB feeds with risk scoring algorithm.' },
        { title: 'Automated Thresholds', text: 'Kibana alert rules triggering on 5+ critical IPs indexed within 10 minutes.' }
      ]
    },
    soclab: {
      title: 'Cybersecurity SOC Home Lab: Wazuh SIEM & Sysmon Telemetry',
      svg: `
      <svg viewBox="0 0 800 240" class="bp-svg-diagram">
        <!-- VirtualBox Host -->
        <rect x="20" y="20" width="760" height="200" rx="10" fill="#050a14" stroke="#00f2fe" stroke-width="1" stroke-dasharray="6"/>
        <text x="40" y="45" fill="#00f2fe" font-size="12" font-family="monospace" font-weight="bold">VirtualBox Isolated Host Network</text>

        <!-- Endpoint VM -->
        <rect x="50" y="70" width="190" height="120" rx="8" fill="#0b1324" stroke="#00f2fe" stroke-width="1.5"/>
        <text x="145" y="95" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Windows 10/11 Endpoint</text>
        <rect x="65" y="110" width="160" height="30" rx="4" fill="#060c18" stroke="#38bdf8"/>
        <text x="145" y="130" fill="#38bdf8" font-size="11" font-family="monospace" text-anchor="middle">Microsoft Sysmon</text>
        <text x="145" y="170" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Event IDs 1, 3, 10, 11</text>

        <!-- Telemetry Arrow -->
        <path d="M 240 130 L 450 130" stroke="#00ff88" stroke-width="2.5"/>
        <text x="345" y="120" fill="#00ff88" font-size="10" font-family="monospace" text-anchor="middle">Encrypted Agent Stream (1514/TCP)</text>

        <!-- Wazuh Manager VM -->
        <rect x="450" y="70" width="220" height="120" rx="8" fill="#0b1324" stroke="#00ff88" stroke-width="1.5"/>
        <text x="560" y="95" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Wazuh Manager SIEM/XDR</text>
        <text x="560" y="125" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">XML Rule Engine (100201+)</text>
        <text x="560" y="145" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">MITRE ATT&CK Mapping</text>
        <text x="560" y="165" fill="#00ff88" font-size="10" font-family="monospace" text-anchor="middle">Active Response Automation</text>
      </svg>`,
      specs: [
        { title: 'Isolated Hypervisor', text: 'Dedicated internal virtual network preventing telemetry leak into physical host machine.' },
        { title: 'Sysmon Granularity', text: 'Custom XML configuration capturing parent-child process anomalies, encoded CLI flags, and LSASS access.' },
        { title: 'Incident Response Blueprint', text: 'Step-by-step documentation detailing threat detection, triage, and mitigation reports.' }
      ]
    },
    devsecops: {
      title: 'Enterprise E-Commerce DevSecOps CI/CD Pipeline',
      svg: `
      <svg viewBox="0 0 800 240" class="bp-svg-diagram">
        <!-- Git Workflow -->
        <rect x="30" y="40" width="130" height="60" rx="8" fill="#0b1324" stroke="#00f2fe"/>
        <text x="95" y="65" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Git Commit</text>
        <text x="95" y="85" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Feature Branch</text>

        <path d="M 160 70 L 220 70" stroke="#00f2fe" stroke-width="2"/>

        <rect x="220" y="40" width="140" height="60" rx="8" fill="#0b1324" stroke="#00f2fe"/>
        <text x="290" y="65" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">SAST &amp; SCA</text>
        <text x="290" y="85" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Dependency Scan</text>

        <path d="M 360 70 L 420 70" stroke="#00ff88" stroke-width="2"/>

        <rect x="420" y="40" width="150" height="60" rx="8" fill="#0b1324" stroke="#00ff88"/>
        <text x="495" y="65" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Checkov IaC</text>
        <text x="495" y="85" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Terraform Policy Scan</text>

        <path d="M 570 70 L 630 70" stroke="#00ff88" stroke-width="2"/>

        <rect x="630" y="40" width="140" height="60" rx="8" fill="#0b1324" stroke="#00ff88"/>
        <text x="700" y="65" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">OWASP ZAP</text>
        <text x="700" y="85" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Dynamic DAST Gate</text>
      </svg>`,
      specs: [
        { title: 'Week 3 Lead (IaC)', text: 'Automated Terraform security scans detecting misconfigured security groups and open S3 ACLs.' },
        { title: 'Week 4 Lead (DAST)', text: 'Containerized OWASP ZAP automated baseline attacks verifying OWASP Juice Shop resilience.' },
        { title: 'Policy Gates', text: 'GitHub Actions workflow enforcing zero critical vulnerabilities before production merge.' }
      ]
    },
    smartattendance: {
      title: 'Smart Attendance System: Biometric Anti-Spoofing & Geofence Pipeline',
      svg: `
      <svg viewBox="0 0 800 240" class="bp-svg-diagram">
        <!-- Step 1: Camera Input -->
        <rect x="20" y="35" width="130" height="60" rx="8" fill="#0b1324" stroke="#00f2fe"/>
        <text x="85" y="60" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Camera Feed</text>
        <text x="85" y="80" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">OpenCV Capture</text>

        <path d="M 150 65 L 210 65" stroke="#00f2fe" stroke-width="2"/>

        <!-- Step 2: Facial Landmarks & Blink -->
        <rect x="210" y="35" width="140" height="60" rx="8" fill="#0b1324" stroke="#00f2fe"/>
        <text x="280" y="58" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">EAR Anti-Spoof</text>
        <text x="280" y="78" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Eye-Blink Liveness</text>

        <path d="M 350 65 L 410 65" stroke="#00ff88" stroke-width="2"/>

        <!-- Step 3: Mock GPS Geo-fence -->
        <rect x="410" y="35" width="140" height="60" rx="8" fill="#0b1324" stroke="#00ff88"/>
        <text x="480" y="58" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">GPS Geo-Fence</text>
        <text x="480" y="78" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Haversine Distance</text>

        <path d="M 550 65 L 610 65" stroke="#00ff88" stroke-width="2"/>

        <!-- Step 4: Auth & Intrusion Log -->
        <rect x="610" y="35" width="160" height="60" rx="8" fill="#0b1324" stroke="#00ff88"/>
        <text x="690" y="58" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Flask Security Hub</text>
        <text x="690" y="78" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">SHA-256 Auth &amp; Logger</text>

        <!-- Lower branch: Intrusion Alert -->
        <path d="M 280 95 L 280 160 L 410 160" stroke="#ff3366" stroke-width="2" stroke-dasharray="4"/>
        <rect x="410" y="130" width="140" height="60" rx="8" fill="#1a0a10" stroke="#ff3366"/>
        <text x="480" y="155" fill="#ff3366" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Intrusion Alert</text>
        <text x="480" y="175" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Photo Spoof Blocked</text>
      </svg>`,
      specs: [
        { title: 'Liveness Verification', text: 'Real-time Eye Aspect Ratio (EAR) metric thresholding over 30 continuous frames to defeat static photo presentation attacks.' },
        { title: 'GPS Boundary Verification', text: 'Haversine mathematical formula checking radius boundary polygon before unlocking attendance verification.' },
        { title: 'Intrusion Logger', text: 'Secure SQLite event audit trail with SHA-256 password hash salting and failed presentation alerts.' }
      ]
    },
    rapidcart: {
      title: 'RapidCart Enterprise MERN Architecture & Razorpay Cryptography',
      svg: `
      <svg viewBox="0 0 800 240" class="bp-svg-diagram">
        <!-- Client React UI -->
        <rect x="20" y="35" width="130" height="60" rx="8" fill="#0b1324" stroke="#00f2fe"/>
        <text x="85" y="60" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">React 18 Client</text>
        <text x="85" y="80" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Glassmorphism UI</text>

        <path d="M 150 65 L 210 65" stroke="#00f2fe" stroke-width="2"/>

        <!-- Express API Gateway & RBAC -->
        <rect x="210" y="35" width="140" height="60" rx="8" fill="#0b1324" stroke="#00f2fe"/>
        <text x="280" y="58" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Express Gateway</text>
        <text x="280" y="78" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">JWT / RBAC Scopes</text>

        <path d="M 350 65 L 410 65" stroke="#00ff88" stroke-width="2"/>

        <!-- MongoDB Storage -->
        <rect x="410" y="35" width="140" height="60" rx="8" fill="#0b1324" stroke="#00ff88"/>
        <text x="480" y="58" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">MongoDB Cluster</text>
        <text x="480" y="78" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Transactions &amp; Orders</text>

        <path d="M 550 65 L 610 65" stroke="#00ff88" stroke-width="2"/>

        <!-- Razorpay Cryptographic Verification -->
        <rect x="610" y="35" width="160" height="60" rx="8" fill="#0b1324" stroke="#00ff88"/>
        <text x="690" y="58" fill="#fff" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">Razorpay HMAC</text>
        <text x="690" y="78" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">SHA-256 Webhook Sig</text>

        <!-- Lower branch: AuraMatch AI -->
        <path d="M 280 95 L 280 160 L 410 160" stroke="#9d4edd" stroke-width="2"/>
        <rect x="410" y="130" width="140" height="60" rx="8" fill="#150a24" stroke="#9d4edd"/>
        <text x="480" y="155" fill="#c084fc" font-size="12" font-family="monospace" text-anchor="middle" font-weight="bold">AuraMatch AI</text>
        <text x="480" y="175" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">Style Recommendation</text>
      </svg>`,
      specs: [
        { title: 'Cryptographic Payment Verification', text: 'Server-side validation comparing generated HMAC-SHA256 digests against Razorpay payment webhook signatures before order fulfillment.' },
        { title: 'Role-Based Access Control (RBAC)', text: 'Granular middleware layer segregating Admin catalog/inventory privileges from customer order pipelines.' },
        { title: 'AuraMatch AI Style Lab', text: 'Dynamic recommendation engine with real-time reactive filtering and state management.' }
      ]
    }
  };

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const projKey = btn.getAttribute('data-project');
      const data = blueprints[projKey];

      if (data) {
        modalTitle.textContent = data.title;
        let specsHtml = '<div class="bp-spec-grid">';
        data.specs.forEach(s => {
          specsHtml += `<div class="bp-spec-card"><h5>${escapeHtml(s.title)}</h5><p>${escapeHtml(s.text)}</p></div>`;
        });
        specsHtml += '</div>';

        modalBody.innerHTML = data.svg + specsHtml;
        modal.classList.add('active');
        playCyberSound('blip');
      }
    });
  });

  [backdrop, closeBtn].forEach(el => {
    if (el) {
      el.addEventListener('click', () => {
        modal.classList.remove('active');
        playCyberSound('click');
      });
    }
  });
}

/* ==========================================================================
   7. LIVE DEFENSE NODE CONSTELLATION CANVAS
   ========================================================================== */
function initLiveCyberBackground() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const mouse = { x: width / 2, y: height / 2, isActive: false, radius: 170 };
  let scrollY = window.pageYOffset;
  let targetScrollY = scrollY;
  let scrollVelocity = 0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isActive = true;
    document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
  });

  window.addEventListener('mouseleave', () => { mouse.isActive = false; });

  const shockwaves = [];
  window.addEventListener('click', (e) => {
    shockwaves.push({
      x: e.clientX,
      y: e.clientY,
      radius: 5,
      maxRadius: Math.min(width, height) * 0.45,
      speed: 7,
      alpha: 0.85
    });
    playCyberSound('blip');
  });

  window.addEventListener('scroll', () => {
    const newScrollY = window.pageYOffset;
    scrollVelocity = (newScrollY - scrollY) * 0.25;
    scrollY = newScrollY;
  }, { passive: true });

  const nodeCount = Math.floor(Math.min(width, 1600) / 18);
  const nodes = [];
  const palette = ['#00f2fe', '#00ff88', '#9d4edd', '#38bdf8'];

  function initNodes() {
    nodes.length = 0;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2.2 + 1.2,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: Math.random() * 0.6 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseVal: Math.random() * Math.PI
      });
    }
  }
  initNodes();

  function render() {
    ctx.fillStyle = 'rgba(6, 9, 15, 0.24)';
    ctx.fillRect(0, 0, width, height);

    targetScrollY += (scrollY - targetScrollY) * 0.1;
    scrollVelocity *= 0.94;

    // Shockwaves
    for (let s = shockwaves.length - 1; s >= 0; s--) {
      const sw = shockwaves[s];
      sw.radius += sw.speed;
      sw.alpha -= 0.016;

      ctx.save();
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 242, 254, ${Math.max(0, sw.alpha)})`;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00f2fe';
      ctx.shadowBlur = 15;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 20), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 255, 136, ${Math.max(0, sw.alpha * 0.6)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      for (let n of nodes) {
        const dx = n.x - sw.x;
        const dy = n.y - sw.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (Math.abs(dist - sw.radius) < 35) {
          const force = (35 - Math.abs(dist - sw.radius)) * 0.08;
          n.x += (dx / (dist || 1)) * force * 5;
          n.y += (dy / (dist || 1)) * force * 5;
        }
      }

      if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
        shockwaves.splice(s, 1);
      }
    }

    // Nodes
    const len = nodes.length;
    for (let i = 0; i < len; i++) {
      const node = nodes[i];
      node.x += node.vx;
      node.y += node.vy - scrollVelocity * 0.25;

      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;

      if (mouse.isActive) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x += (dx / dist) * force * 1.5;
          node.y += (dy / dist) * force * 1.5;

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${(1 - dist / mouse.radius) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      node.pulseVal += node.pulseSpeed;
      const currentAlpha = node.alpha + Math.sin(node.pulseVal) * 0.25;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.globalAlpha = Math.max(0.15, Math.min(1, currentAlpha));
      ctx.shadowColor = node.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      for (let j = i + 1; j < len; j++) {
        const nodeB = nodes[j];
        const dx = node.x - nodeB.x;
        const dy = node.y - nodeB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 135;

        if (dist < maxDist) {
          const wireAlpha = (1 - dist / maxDist) * 0.28;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${wireAlpha})`;
          ctx.lineWidth = wireAlpha * 2;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ==========================================================================
   8. INTERACTIVE SCROLL PROGRESS, SECTOR HUD & MINIMAP RAIL
   ========================================================================== */
function initInteractiveScrollEngine() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const sectorHudText = document.getElementById('hud-sector-text');
  const sectorHudPct = document.getElementById('hud-sector-pct');
  const sectorDots = document.querySelectorAll('.cyber-sector-nav .sector-dot');

  const sectors = [
    { id: 'hero', code: '01', name: 'WAR ROOM HQ' },
    { id: 'simulator', code: '02', name: 'INCIDENT SIMULATOR' },
    { id: 'mitre', code: '03', name: 'MITRE ATT&CK MATRIX' },
    { id: 'about', code: '04', name: 'DEFENSE PILLARS' },
    { id: 'skills', code: '05', name: 'DEFENSE STACK' },
    { id: 'projects', code: '06', name: 'OPERATIONS & REPOS' },
    { id: 'experience', code: '07', name: 'TRACK RECORD' },
    { id: 'terminal', code: '08', name: 'SOC TERMINAL' },
    { id: 'contact', code: '09', name: 'SECURE UPLINK' }
  ];

  function updateScrollState() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPos = window.pageYOffset;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollPos / docHeight) * 100)) : 0;

    if (progressBar) progressBar.style.width = `${pct}%`;
    if (sectorHudPct) sectorHudPct.textContent = `${Math.round(pct)}%`;

    let activeSector = sectors[0];
    const threshold = window.innerHeight * 0.35;

    for (let i = 0; i < sectors.length; i++) {
      const el = document.getElementById(sectors[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          activeSector = sectors[i];
        }
      }
    }

    if (sectorHudText) {
      sectorHudText.textContent = `SECTOR ${activeSector.code} // ${activeSector.name}`;
    }

    sectorDots.forEach(dot => {
      if (dot.getAttribute('data-sector') === activeSector.code) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  sectorDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ==========================================================================
   9. SCROLL REVEAL & 3D TILT
   ========================================================================== */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.about-card, .skill-card, .project-card, .timeline-item, .contact-card, .terminal-window, .section-header, .simulator-cockpit, .mitre-matrix-container'
  );

  targets.forEach(el => el.classList.add('scroll-reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

    targets.forEach(el => observer.observe(el));
  } else {
    targets.forEach(el => el.classList.add('revealed'));
  }
}

function initInteractive3DTilt() {
  const tiltCards = document.querySelectorAll(
    '.cyber-card, .about-card, .skill-card, .project-card, .timeline-card, .simulator-cockpit, .mitre-inspector-panel'
  );

  tiltCards.forEach(card => {
    card.setAttribute('data-tilt', 'true');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.012, 1.012, 1.012)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* ==========================================================================
   10. SKILLS FILTERING
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skills-filter-bar .filter-btn');
  const skillCards = document.querySelectorAll('.skills-grid .skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.3s ease';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
      playCyberSound('click');
    });
  });
}

/* ==========================================================================
   11. INTERACTIVE SOC CYBER TERMINAL v2.0
   ========================================================================== */
function initTerminal() {
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const quickChips = document.querySelectorAll('.cmd-chip');
  const navTerminalTrigger = document.getElementById('nav-terminal-trigger');
  const heroTerminalBtn = document.getElementById('hero-terminal-btn');

  [navTerminalTrigger, heroTerminalBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        const terminalSection = document.getElementById('terminal');
        if (terminalSection) {
          terminalSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            if (terminalInput) terminalInput.focus();
          }, 600);
        }
        playCyberSound('blip');
      });
    }
  });

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) executeCommand(cmd);
    });
  });

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cmd = terminalInput.value.trim();
      if (cmd) {
        executeCommand(cmd);
        terminalInput.value = '';
      }
    });
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', () => {
      playCyberSound('keystroke');
    });
  }

  function executeCommand(cmd) {
    playCyberSound('click');
    const rawCmd = cmd.trim();
    const parts = rawCmd.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line';
    cmdLine.innerHTML = `<span class="term-green">root@aditya-soc</span>:<span class="term-cyan">~</span>$ <span class="term-command">${escapeHtml(rawCmd)}</span>`;
    terminalOutput.appendChild(cmdLine);

    const resLine = document.createElement('div');
    resLine.className = 'term-output';

    switch (mainCmd) {
      case 'help':
        resLine.innerHTML = `
Available Commands:
  • <span class="highlight-cyan">titansoc</span>      - OS kernel dossier, telemetry & specifications
  • <span class="highlight-cyan">whoami</span>        - Operator dossier and credentials
  • <span class="highlight-cyan">cat skills</span>    - Defensive security, SIEM & tech stack
  • <span class="highlight-cyan">fetch projects</span> - Display public repositories & architecture
  • <span class="highlight-cyan">matrix</span>        - MITRE ATT&CK tactic & technique mapping
  • <span class="highlight-cyan">ioc-scan &lt;ip&gt;</span>   - Run OSINT threat lookup
  • <span class="highlight-cyan">defcon &lt;1-4&gt;</span>   - Set defense readiness level
  • <span class="highlight-cyan">contact</span>       - Channels (Email, LinkedIn, GitHub)
  • <span class="highlight-cyan">clear</span>         - Clear terminal
        `;
        break;

      case 'titansoc':
      case 'sysinfo':
        resLine.innerHTML = `
<strong class="highlight-cyan">TITANSOC OS v2.6 [TACTICAL DEFENSE KERNEL]</strong>
Architecture: Zero-Framework Pure Web Audio &amp; Canvas 3D Engine
Kernel Status: ACTIVE // Security Operations Center Mode
Telemetry Hub: Bengaluru Defense Anchor (12.97° N, 77.59° E)
Operator: Aditya Tamakuwala (Roll: 23BCE010)
Active Modules:
  [✓] 3D Threat Vector Engine (Real-time Parabolic Spherical Math)
  [✓] Breach Incident Simulator (Sysmon + Wazuh + Checkov + CV)
  [✓] MITRE ATT&CK Matrix Blueprint Inspector (Enterprise TA0001-TA0011)
  [✓] Architectural Pipeline Engine (BankSec-TIP, Wazuh SOC, DevSecOps, Biometrics, RapidCart)
Uptime: 99.99% // Defense Ready.
        `;
        break;

      case 'matrix':
      case 'mitre':
        resLine.innerHTML = `
[+] MITRE ATT&CK Enterprise Matrix Coverage:
  • <span class="highlight-cyan">TA0001 Initial Access:</span> T1190 (Exploit Public App), T1566 (Phishing Links)
  • <span class="highlight-cyan">TA0002 Execution:</span> T1059 (Command/Scripting - Sysmon Event 1), T1204 (User Execution)
  • <span class="highlight-cyan">TA0003 Persistence:</span> T1547 (Registry Run Keys), T1053 (Scheduled Tasks)
  • <span class="highlight-cyan">TA0005 Defense Evasion:</span> T1070 (Indicator Removal), T1027 (Obfuscated Payloads)
  • <span class="highlight-cyan">TA0006 Credential Access:</span> T1110 (Brute Force), T1003 (OS Credential Dumping)
  • <span class="highlight-cyan">TA0011 Command & Control:</span> T1071 (App Protocol Drop), T1571 (Non-Standard Port)
Click on any matrix technique in the web interface for full XML detection rules.
        `;
        break;

      case 'whoami':
        resLine.innerHTML = `
<strong class="text-white">Aditya Tamakuwala</strong> | ID: 23BCE010
Role: Cybersecurity Analyst &amp; Threat Intelligence Specialist
Location: Bengaluru, Karnataka / India
Education: B.Tech Computer Science &amp; Engineering (2023 - Present)
Internship: Threat Intelligence &amp; SIEM Intern @ Infotact Technical Internship (Finance Track)
Specialties: Wazuh SIEM, Windows Sysmon, ELK Stack, Threat Feeds Aggregation, DevSecOps.
        `;
        break;

      case 'defcon':
        const lvl = parseInt(arg, 10);
        if ([1, 2, 3, 4].includes(lvl)) {
          document.documentElement.setAttribute('data-defcon', lvl);
          const badge = document.getElementById('defcon-badge');
          if (badge) {
            badge.className = `defcon-badge defcon-${lvl}`;
            badge.textContent = `LEVEL ${lvl} // ${lvl === 1 ? 'CRITICAL' : lvl === 2 ? 'HIGH ALERT' : lvl === 3 ? 'ELEVATED' : 'GUARDED'}`;
          }
          if (lvl === 1) playCyberSound('alarm');
          resLine.innerHTML = `<span class="text-orange">DEFCON readiness switched to LEVEL ${lvl}!</span>`;
        } else {
          resLine.innerHTML = `Usage: defcon &lt;1-4&gt;`;
        }
        break;

      case 'cat':
        if (arg === 'skills') {
          resLine.innerHTML = `
[+] Technical Stack:
  1. SIEM &amp; XDR: Wazuh Manager/Agent, Elasticsearch 8.x, Kibana, Filebeat
  2. Threat Telemetry: Microsoft Sysmon, MITRE ATT&amp;CK, Windows Event Logs
  3. OSINT &amp; Threat Feeds: AlienVault OTX, AbuseIPDB, VirusTotal, Shodan
  4. DevSecOps: OWASP ZAP (DAST), Checkov (IaC), Docker, GitHub Actions CI/CD
  5. Programming: Python 3.10+ (PyMongo, elasticsearch-py, Flask, OpenCV), JS/TS
          `;
        } else {
          resLine.innerHTML = `cat: ${escapeHtml(arg || '')}: File not found. Try: cat skills`;
        }
        break;

      case 'fetch':
      case 'projects':
        resLine.innerHTML = `
[+] Repositories for @AdityaTamakuwala:
  1. <a href="https://github.com/AdityaTamakuwala/BankSec-TIP" target="_blank" class="highlight-cyan">BankSec-TIP</a> — Banking Threat Intelligence Platform (ELK Stack &amp; OSINT)
  2. <a href="https://github.com/AdityaTamakuwala/cybersecurity-soc-home-lab" target="_blank" class="highlight-green">cybersecurity-soc-home-lab</a> — VirtualBox Wazuh SIEM + Sysmon SOC Lab
  3. <a href="https://github.com/AdityaTamakuwala/ecommerce-enterprise-devsecops-pipeline" target="_blank" class="highlight-purple">ecommerce-enterprise-devsecops-pipeline</a> — IaC &amp; DAST Pipeline
  4. <a href="https://github.com/AdityaTamakuwala/Smart-Attendance-System" target="_blank" class="highlight-orange">Smart-Attendance-System</a> — OpenCV Face Recognition &amp; Anti-Spoofing
  5. <a href="https://github.com/AdityaTamakuwala/RapidCart-Platform" target="_blank" class="highlight-cyan">RapidCart-Platform</a> — MERN E-Commerce + Razorpay Security
        `;
        break;

      case 'ioc-scan':
      case 'scan':
        const targetIp = arg || '185.220.101.5';
        resLine.innerHTML = `
[+] Querying OSINT intelligence for: <span class="highlight-cyan">${escapeHtml(targetIp)}</span>...
[✓] AlienVault OTX: Flagged in 14 pulses (Tor Exit Node / Scanner)
[✓] AbuseIPDB: 100% Abuse Confidence Score
[✓] VirusTotal: 12/89 Security Vendors flagged as Malicious
[⚡] Action: Auto-streamed to BankSec-TIP Firewall Engine -> BLOCKED
[⚡] Ingestion: Filebeat -> Elasticsearch: <span class="highlight-green">threat-ioc-logs-2026</span>
        `;
        break;

      case 'contact':
        resLine.innerHTML = `
[+] Direct Contact Channels:
  • Email: <a href="mailto:adityatamakuwala72@gmail.com" class="highlight-cyan">adityatamakuwala72@gmail.com</a>
  • LinkedIn: <a href="https://www.linkedin.com/in/aditya-tamakuwala-122442316" target="_blank" class="highlight-green">linkedin.com/in/aditya-tamakuwala-122442316</a>
  • GitHub: <a href="https://github.com/AdityaTamakuwala" target="_blank" class="highlight-cyan">github.com/AdityaTamakuwala</a>
        `;
        break;

      case 'clear':
        terminalOutput.innerHTML = '';
        return;

      default:
        resLine.innerHTML = `Command not recognized: '${escapeHtml(mainCmd)}'. Type 'help'.`;
        break;
    }

    terminalOutput.appendChild(resLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
}

/* ==========================================================================
   12. CLIPBOARD, CONTACT FORM & MOBILE NAV
   ========================================================================== */
function initClipboardHandlers() {
  const copyButtons = document.querySelectorAll('[data-copy], #quick-copy-email');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy') || btn.getAttribute('data-email') || 'adityatamakuwala72@gmail.com';

      navigator.clipboard.writeText(textToCopy).then(() => {
        playCyberSound('blip');
        showToast(`Copied: ${textToCopy} 🚀`);
      }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        playCyberSound('blip');
        showToast(`Copied: ${textToCopy} 🚀`);
      });
    });
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🛡️</span> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const mailtoUrl = `mailto:adityatamakuwala72@gmail.com?subject=${encodeURIComponent(subject + ' - via Portfolio')}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    playCyberSound('mitigation');
    showToast(`Dispatching email to adityatamakuwala72@gmail.com...`);

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  });
}

function initMobileNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
      playCyberSound('click');
    });

    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

/* ==========================================================================
   13. CREATIVE DEVELOPER PRELOADER (MoncyDev Inspired)
   ========================================================================== */
function initCreativePreloader() {
  const preloader = document.getElementById('preloader');
  const pctEl = document.getElementById('preloader-pct');
  const fillEl = document.getElementById('preloader-bar-fill');
  const statusEl = document.getElementById('preloader-status');
  if (!preloader || !pctEl || !fillEl) return;

  const statuses = [
    'CONNECTING TO TITANSOC SECURE MESH...',
    'INITIALIZING THREE.JS 3D SENTINEL ENGINE...',
    'SYNCHRONIZING TELEMETRY PIPELINES (WAZUH 4.x + ELK)...',
    'VERIFYING MITRE ATT&CK MATRIX BLUEPRINTS...',
    'ARMING DEFENSE NODES (5/5)...',
    'DEFENSE MESH ONLINE // WELCOME'
  ];

  const startTime = performance.now();
  const duration = 1400;

  function update() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(eased * 100);

    pctEl.textContent = `${current}%`;
    fillEl.style.width = `${current}%`;

    const statusIdx = Math.min(statuses.length - 1, Math.floor((current / 100) * statuses.length));
    if (statusEl) statusEl.textContent = statuses[statusIdx];

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      pctEl.textContent = '100%';
      fillEl.style.width = '100%';
      setTimeout(() => {
        preloader.classList.add('loaded');
        playCyberSound('mitigation');
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 900);
      }, 250);
    }
  }

  requestAnimationFrame(update);
}

/* ==========================================================================
   14. FLUID MAGNETIC CUSTOM CURSOR (MoncyDev Style)
   ========================================================================== */
function initCustomMagneticCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const tag = document.getElementById('cursor-tag');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  const interactiveTargets = document.querySelectorAll(
    'a, button, input, textarea, .mitre-tech-card, .project-card, .about-card, .skill-card, .cmd-chip, .scenario-btn, .filter-btn'
  );

  interactiveTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('hovered');
      if (el.closest('.projects-grid')) {
        ring.classList.add('show-tag');
        if (tag) tag.textContent = 'VIEW';
      } else if (el.closest('.hero-visual')) {
        ring.classList.add('show-tag');
        if (tag) tag.textContent = 'DRAG 3D';
      }
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('hovered', 'show-tag');
    });
  });

  const canvasSentinel = document.getElementById('three-sentinel-canvas');
  if (canvasSentinel && canvasSentinel.parentElement) {
    canvasSentinel.parentElement.addEventListener('mouseenter', () => {
      ring.classList.add('hovered', 'show-tag');
      if (tag) tag.textContent = 'ROTATE';
    });
    canvasSentinel.parentElement.addEventListener('mouseleave', () => {
      ring.classList.remove('hovered', 'show-tag');
    });
  }
}

/* ==========================================================================
   15. CURSOR-FOLLOWING PROJECT PREVIEW REVEAL (MoncyDev Signature Reveal)
   ========================================================================== */
function initProjectHoverPreview() {
  const preview = document.getElementById('project-hover-preview');
  const media = document.getElementById('preview-media');
  const badge = document.getElementById('preview-badge');
  const title = document.getElementById('preview-title');
  const metric = document.getElementById('preview-metric');
  if (!preview || !media) return;

  const previewDB = {
    banksec: {
      badge: 'THREAT INTEL PLATFORM',
      title: 'BankSec-TIP',
      metric: 'Elasticsearch 8.13 • MongoDB 7.0 • OSINT Aggregation',
      svg: `
      <svg viewBox="0 0 300 110" fill="none">
        <rect x="10" y="20" width="70" height="35" rx="5" fill="#0b162c" stroke="#00f2fe" stroke-width="1.5"/>
        <text x="45" y="42" fill="#00f2fe" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">OSINT Feeds</text>
        <path d="M 80 37 L 115 37" stroke="#00f2fe" stroke-width="1.5"/>
        <rect x="115" y="20" width="70" height="35" rx="5" fill="#0b162c" stroke="#00ff88" stroke-width="1.5"/>
        <text x="150" y="42" fill="#00ff88" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">MongoDB</text>
        <path d="M 185 37 L 220 37" stroke="#00ff88" stroke-width="1.5"/>
        <rect x="220" y="20" width="70" height="35" rx="5" fill="#0b162c" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="255" y="42" fill="#38bdf8" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">ELK 8.13</text>
        <path d="M 150 55 L 150 85 L 220 85" stroke="#ff3366" stroke-width="1.5" stroke-dasharray="3"/>
        <rect x="220" y="70" width="70" height="30" rx="4" fill="#1e0a12" stroke="#ff3366" stroke-width="1.2"/>
        <text x="255" y="88" fill="#ff3366" font-size="8" font-family="monospace" text-anchor="middle">Firewall Drop</text>
      </svg>`
    },
    soclab: {
      badge: 'BLUE TEAM SOC LAB',
      title: 'Cybersecurity SOC Home Lab',
      metric: 'Wazuh 4.x SIEM • Microsoft Sysmon • MITRE ATT&CK',
      svg: `
      <svg viewBox="0 0 300 110" fill="none">
        <rect x="15" y="25" width="110" height="60" rx="6" fill="#081020" stroke="#00f2fe" stroke-width="1.2"/>
        <text x="70" y="48" fill="#fff" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">Windows Endpoint</text>
        <text x="70" y="65" fill="#38bdf8" font-size="8" font-family="monospace" text-anchor="middle">Sysmon Event IDs</text>
        <path d="M 125 55 L 175 55" stroke="#00ff88" stroke-width="2"/>
        <rect x="175" y="25" width="110" height="60" rx="6" fill="#081020" stroke="#00ff88" stroke-width="1.2"/>
        <text x="230" y="48" fill="#fff" font-size="9" font-family="monospace" text-anchor="middle" font-weight="bold">Wazuh SIEM/XDR</text>
        <text x="230" y="65" fill="#00ff88" font-size="8" font-family="monospace" text-anchor="middle">Active Response</text>
      </svg>`
    },
    devsecops: {
      badge: 'DEVSECOPS CI/CD',
      title: 'Enterprise DevSecOps Pipeline',
      metric: 'Checkov IaC • OWASP ZAP • Docker • GitHub Actions',
      svg: `
      <svg viewBox="0 0 300 110" fill="none">
        <rect x="10" y="35" width="60" height="35" rx="5" fill="#081020" stroke="#00f2fe" stroke-width="1.2"/>
        <text x="40" y="56" fill="#fff" font-size="8" font-family="monospace" text-anchor="middle">Git PR</text>
        <path d="M 70 52 L 105 52" stroke="#00f2fe" stroke-width="1.5"/>
        <rect x="105" y="35" width="80" height="35" rx="5" fill="#081020" stroke="#00ff88" stroke-width="1.2"/>
        <text x="145" y="56" fill="#00ff88" font-size="8" font-family="monospace" text-anchor="middle">Checkov IaC</text>
        <path d="M 185 52 L 220 52" stroke="#00ff88" stroke-width="1.5"/>
        <rect x="220" y="35" width="70" height="35" rx="5" fill="#081020" stroke="#9d4edd" stroke-width="1.2"/>
        <text x="255" y="56" fill="#c084fc" font-size="8" font-family="monospace" text-anchor="middle">OWASP ZAP</text>
      </svg>`
    },
    smartattendance: {
      badge: 'BIOMETRICS & DEFENSE',
      title: 'Smart Attendance System',
      metric: 'OpenCV Eye-Blink EAR • GPS Geo-Fencing • SHA-256',
      svg: `
      <svg viewBox="0 0 300 110" fill="none">
        <rect x="15" y="30" width="80" height="40" rx="5" fill="#081020" stroke="#00f2fe" stroke-width="1.2"/>
        <text x="55" y="54" fill="#00f2fe" font-size="8" font-family="monospace" text-anchor="middle">Face Landmarks</text>
        <path d="M 95 50 L 135 50" stroke="#00ff88" stroke-width="1.5"/>
        <rect x="135" y="30" width="70" height="40" rx="5" fill="#081020" stroke="#00ff88" stroke-width="1.2"/>
        <text x="170" y="54" fill="#00ff88" font-size="8" font-family="monospace" text-anchor="middle">EAR Blink</text>
        <path d="M 205 50 L 240 50" stroke="#00ff88" stroke-width="1.5"/>
        <rect x="240" y="30" width="50" height="40" rx="5" fill="#081020" stroke="#38bdf8" stroke-width="1.2"/>
        <text x="265" y="54" fill="#38bdf8" font-size="8" font-family="monospace" text-anchor="middle">GPS/Auth</text>
      </svg>`
    },
    rapidcart: {
      badge: 'FULL-STACK & CRYPTOGRAPHY',
      title: 'RapidCart Platform',
      metric: 'MERN Stack • Razorpay HMAC-SHA256 • AuraMatch AI',
      svg: `
      <svg viewBox="0 0 300 110" fill="none">
        <rect x="15" y="30" width="75" height="40" rx="5" fill="#081020" stroke="#00f2fe" stroke-width="1.2"/>
        <text x="52" y="54" fill="#00f2fe" font-size="8" font-family="monospace" text-anchor="middle">React 18 Client</text>
        <path d="M 90 50 L 130 50" stroke="#00f2fe" stroke-width="1.5"/>
        <rect x="130" y="30" width="75" height="40" rx="5" fill="#081020" stroke="#00ff88" stroke-width="1.2"/>
        <text x="167" y="54" fill="#00ff88" font-size="8" font-family="monospace" text-anchor="middle">Express / JWT</text>
        <path d="M 205 50 L 240 50" stroke="#00ff88" stroke-width="1.5"/>
        <rect x="240" y="30" width="50" height="40" rx="5" fill="#081020" stroke="#9d4edd" stroke-width="1.2"/>
        <text x="265" y="54" fill="#c084fc" font-size="8" font-family="monospace" text-anchor="middle">HMAC</text>
      </svg>`
    }
  };

  const projectCards = document.querySelectorAll('[data-preview-key]');
  let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
  let isPreviewActive = false;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX + 180;
    targetY = e.clientY - 60;
    if (targetX + 170 > window.innerWidth) targetX = e.clientX - 180;
    if (targetY - 110 < 0) targetY = e.clientY + 110;
    if (targetY + 110 > window.innerHeight) targetY = window.innerHeight - 120;
  });

  function renderPreviewPosition() {
    if (isPreviewActive) {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      preview.style.left = `${currentX}px`;
      preview.style.top = `${currentY}px`;
    }
    requestAnimationFrame(renderPreviewPosition);
  }
  requestAnimationFrame(renderPreviewPosition);

  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const key = card.getAttribute('data-preview-key');
      const data = previewDB[key];
      if (data) {
        badge.textContent = data.badge;
        title.textContent = data.title;
        metric.textContent = data.metric;
        media.innerHTML = data.svg;
        preview.classList.add('active');
        isPreviewActive = true;
      }
    });

    card.addEventListener('mouseleave', () => {
      preview.classList.remove('active');
      isPreviewActive = false;
    });
  });
}

/* ==========================================================================
   16. THREE.JS 3D CYBER SENTINEL WEBGL SCENE
   ========================================================================== */
function initThreeSentinelCanvas() {
  const canvas = document.getElementById('three-sentinel-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const container = canvas.parentElement;
  let width = container.clientWidth || 400;
  let height = container.clientHeight || 340;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 24;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lights
  const ambientLight = new THREE.AmbientLight(0x00f2fe, 0.7);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x00f2fe, 2.5, 60);
  pointLight1.position.set(12, 12, 12);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x00ff88, 2.0, 60);
  pointLight2.position.set(-12, -12, 12);
  scene.add(pointLight2);

  const pointLight3 = new THREE.PointLight(0x9d4edd, 1.8, 50);
  pointLight3.position.set(0, 16, -10);
  scene.add(pointLight3);

  // Sentinel Group
  const sentinelGroup = new THREE.Group();
  scene.add(sentinelGroup);

  // 1. Core Wireframe Icosahedron
  const coreGeo = new THREE.IcosahedronGeometry(4.8, 1);
  const coreMat = new THREE.MeshPhongMaterial({
    color: 0x00f2fe,
    wireframe: true,
    transparent: true,
    opacity: 0.85,
    shininess: 90
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  sentinelGroup.add(coreMesh);

  // 2. Inner Solid Glow Sphere
  const innerGeo = new THREE.SphereGeometry(2.4, 24, 24);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x00ff88,
    wireframe: true,
    transparent: true,
    opacity: 0.55
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  sentinelGroup.add(innerMesh);

  // 3. Orbital Torus Rings
  const ring1Geo = new THREE.TorusGeometry(7.2, 0.08, 16, 100);
  const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.75 });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 3;
  sentinelGroup.add(ring1);

  const ring2Geo = new THREE.TorusGeometry(8.5, 0.06, 16, 100);
  const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x9d4edd, transparent: true, opacity: 0.65 });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.y = Math.PI / 4;
  sentinelGroup.add(ring2);

  // 4. Orbital Satellites
  const satellites = [];
  const satGeo = new THREE.OctahedronGeometry(0.38, 0);
  const satMat = new THREE.MeshLambertMaterial({ color: 0x00ff88, emissive: 0x00ff88, emissiveIntensity: 0.5 });
  for (let i = 0; i < 6; i++) {
    const sat = new THREE.Mesh(satGeo, satMat);
    sentinelGroup.add(sat);
    satellites.push({
      mesh: sat,
      orbitRadius: 7.2,
      speed: 0.015 + i * 0.003,
      angle: (i / 6) * Math.PI * 2
    });
  }

  // 5. Starfield / Particle Constellation
  const particleCount = 1200;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    const r = 10 + Math.random() * 22;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
    particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    particlePositions[i + 2] = r * Math.cos(phi);
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x00f2fe,
    size: 0.14,
    transparent: true,
    opacity: 0.75
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  // Mouse & Drag Interaction
  let targetRotX = 0, targetRotY = 0;
  let curRotX = 0, curRotY = 0;
  let isDragging = false;
  let lastX = 0, lastY = 0;
  let dragVelX = 0, dragVelY = 0;

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) {
      const rect = canvas.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / height) * 2 - 1);
      targetRotY = nx * 0.8;
      targetRotX = -ny * 0.6;
    }
  });

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    dragVelY = dx * 0.008;
    dragVelX = dy * 0.008;
    sentinelGroup.rotation.y += dragVelY;
    sentinelGroup.rotation.x += dragVelX;
    lastX = e.clientX;
    lastY = e.clientY;
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  window.addEventListener('resize', () => {
    width = container.clientWidth || 400;
    height = container.clientHeight || 340;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    if (!isDragging) {
      curRotX += (targetRotX - curRotX) * 0.05;
      curRotY += (targetRotY - curRotY) * 0.05;
      sentinelGroup.rotation.x = curRotX + Math.sin(Date.now() * 0.001) * 0.12;
      sentinelGroup.rotation.y = curRotY + Date.now() * 0.0008;
    }

    coreMesh.rotation.y += 0.004;
    innerMesh.rotation.x -= 0.005;
    ring1.rotation.z += 0.006;
    ring2.rotation.z -= 0.004;
    particles.rotation.y += 0.0003;

    // Update satellites
    satellites.forEach(sat => {
      sat.angle += sat.speed;
      sat.mesh.position.x = Math.cos(sat.angle) * sat.orbitRadius;
      sat.mesh.position.y = Math.sin(sat.angle) * sat.orbitRadius * 0.5;
      sat.mesh.position.z = Math.sin(sat.angle) * sat.orbitRadius * 0.8;
      sat.mesh.rotation.x += 0.03;
      sat.mesh.rotation.y += 0.03;
    });

    renderer.render(scene, camera);
  }

  animate();
}

/* ==========================================================================
   17. LIVE IST CLOCK (BENGALURU, INDIA)
   ========================================================================== */
function initLiveISTClock() {
  const liveClockEl = document.getElementById('live-ist-time');
  const footerClockEl = document.getElementById('footer-ist-time');

  function updateTime() {
    const now = new Date();
    const istString = now.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    if (liveClockEl) liveClockEl.textContent = `${istString} IST`;
    if (footerClockEl) footerClockEl.textContent = `${istString} IST`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}
