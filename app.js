/**
 * ADITYA TAMAKUWALA — CYBERSECURITY & THREAT INTEL PORTFOLIO
 * High-Performance Interactive Cyber Engine:
 * 1. Live Defense Node Constellation Canvas (Cursor Attraction, Shockwave Sonar, Parallax Scroll)
 * 2. Interactive Scrolling Engine (Top Laser Progress Bar, Floating Sector HUD & Minimap Rail)
 * 3. Dynamic Cursor Spotlight (Ambient Radial Mesh Tracker)
 * 4. 3D Card Parallax Tilt & Specular Glare
 * 5. Scroll-Triggered Staggered Reveal Engine
 * 6. Interactive SOC Cyber Terminal & Filter Matrix
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveCyberBackground();
  initCursorSpotlight();
  initInteractiveScrollEngine();
  initScrollReveal();
  initInteractive3DTilt();
  initSkillsFilter();
  initTerminal();
  initContactForm();
  initClipboardHandlers();
  initMobileNavigation();
});

/* ==========================================================================
   1. LIVE CYBER DEFENSE NODE & SONAR BACKGROUND CANVAS
   ========================================================================== */
function initLiveCyberBackground() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Mouse & Scroll reactive vectors
  const mouse = {
    x: width / 2,
    y: height / 2,
    isActive: false,
    radius: 170
  };

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
  });

  window.addEventListener('mouseleave', () => {
    mouse.isActive = false;
  });

  // Sonar Shockwave shockwaves array
  const shockwaves = [];
  window.addEventListener('click', (e) => {
    // Only trigger if click is on ambient canvas or general page background
    shockwaves.push({
      x: e.clientX,
      y: e.clientY,
      radius: 5,
      maxRadius: Math.min(width, height) * 0.45,
      speed: 7,
      alpha: 0.85
    });
  });

  window.addEventListener('scroll', () => {
    const newScrollY = window.pageYOffset;
    scrollVelocity = (newScrollY - scrollY) * 0.25;
    scrollY = newScrollY;
  });

  // Cyber Defense Nodes
  const nodeCount = Math.floor(Math.min(width, 1600) / 18);
  const nodes = [];
  const palette = ['#00f2fe', '#00ff88', '#9d4edd', '#38bdf8'];

  function initNodes() {
    nodes.length = 0;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
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

  // Animation Loop
  function render() {
    // Soft trailing clear for ambient cyber trails
    ctx.fillStyle = 'rgba(6, 9, 15, 0.22)';
    ctx.fillRect(0, 0, width, height);

    // Smoothly decay scroll velocity
    targetScrollY += (scrollY - targetScrollY) * 0.1;
    scrollVelocity *= 0.94;

    // 1. Process Shockwaves
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

      // Outer ripple
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 20), 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 255, 136, ${Math.max(0, sw.alpha * 0.6)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Shockwave physical push on nodes
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

    // 2. Update and Draw Nodes
    const len = nodes.length;
    for (let i = 0; i < len; i++) {
      const node = nodes[i];

      // Natural Drift + Scroll Parallax
      node.x += node.vx;
      node.y += node.vy - scrollVelocity * 0.25;

      // Wrap around canvas edges
      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;

      // Mouse Proximity Attraction & Force Field
      if (mouse.isActive) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x += (dx / dist) * force * 1.5;
          node.y += (dy / dist) * force * 1.5;

          // Glowing laser telemetry filament to mouse
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${(1 - dist / mouse.radius) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Node Pulse
      node.pulseVal += node.pulseSpeed;
      const currentAlpha = node.alpha + Math.sin(node.pulseVal) * 0.25;

      // Draw Node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.globalAlpha = Math.max(0.15, Math.min(1, currentAlpha));
      ctx.shadowColor = node.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Connect nearby nodes with defense network wires
      for (let j = i + 1; j < len; j++) {
        const nodeB = nodes[j];
        const dx = node.x - nodeB.x;
        const dy = node.y - nodeB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const connectionMaxDist = 135;

        if (dist < connectionMaxDist) {
          const wireAlpha = (1 - dist / connectionMaxDist) * 0.28;
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
   2. DYNAMIC CURSOR SPOTLIGHT TRACKER
   ========================================================================== */
function initCursorSpotlight() {
  const root = document.documentElement;
  window.addEventListener('mousemove', (e) => {
    root.style.setProperty('--cursor-x', `${e.clientX}px`);
    root.style.setProperty('--cursor-y', `${e.clientY}px`);
  });
}

/* ==========================================================================
   3. INTERACTIVE SCROLL PROGRESS, SECTOR HUD & MINIMAP RAIL
   ========================================================================== */
function initInteractiveScrollEngine() {
  const progressBar = document.getElementById('scroll-progress-bar');
  const sectorHudText = document.getElementById('hud-sector-text');
  const sectorHudPct = document.getElementById('hud-sector-pct');
  const sectorDots = document.querySelectorAll('.cyber-sector-nav .sector-dot');

  // Sectors mapping
  const sectors = [
    { id: 'hero', code: '01', name: 'TELEMETRY HQ', icon: '📡' },
    { id: 'about', code: '02', name: 'DEFENSE PILLARS', icon: '🛡️' },
    { id: 'skills', code: '03', name: 'DEFENSE MATRIX', icon: '📊' },
    { id: 'projects', code: '04', name: 'OPERATIONS & REPOS', icon: '💻' },
    { id: 'experience', code: '05', name: 'TRACK RECORD', icon: '⚡' },
    { id: 'terminal', code: '06', name: 'SOC TERMINAL', icon: '⌨️' },
    { id: 'contact', code: '07', name: 'SECURE UPLINK', icon: '📬' }
  ];

  function updateScrollState() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPos = window.pageYOffset;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollPos / docHeight) * 100)) : 0;

    // 1. Update Laser Bar
    if (progressBar) {
      progressBar.style.width = `${pct}%`;
    }

    // 2. Update Percentage Pill
    if (sectorHudPct) {
      sectorHudPct.textContent = `${Math.round(pct)}%`;
    }

    // 3. Detect Active Sector
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

    // 4. Update HUD text
    if (sectorHudText) {
      sectorHudText.textContent = `SECTOR ${activeSector.code} // ${activeSector.name}`;
    }

    // 5. Update Minimap Rail Active Dot
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

  // Smooth scroll click handler for minimap dots
  sectorDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   4. SCROLL-TRIGGERED STAGGERED REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const revealTargets = document.querySelectorAll(
    '.about-card, .skill-card, .project-card, .timeline-item, .contact-card, .terminal-window, .section-header'
  );

  revealTargets.forEach(el => {
    el.classList.add('scroll-reveal');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    // Fallback
    revealTargets.forEach(el => el.classList.add('revealed'));
  }
}

/* ==========================================================================
   5. 3D INTERACTIVE CARD PARALLAX TILT & SPECULAR GLARE
   ========================================================================== */
function initInteractive3DTilt() {
  // Select target cards
  const tiltCards = document.querySelectorAll(
    '.cyber-card, .about-card, .skill-card, .project-card, .timeline-card, .terminal-window'
  );

  tiltCards.forEach(card => {
    card.setAttribute('data-tilt', 'true');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7.5;
      const rotateY = ((x - centerX) / centerX) * 7.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

/* ==========================================================================
   6. SKILLS FILTERING
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
    });
  });
}

/* ==========================================================================
   7. INTERACTIVE SOC CYBER TERMINAL
   ========================================================================== */
function initTerminal() {
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const quickChips = document.querySelectorAll('.cmd-chip');
  const navTerminalTrigger = document.getElementById('nav-terminal-trigger');
  const heroTerminalBtn = document.getElementById('hero-terminal-btn');

  // Focus trigger from nav / hero
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
      });
    }
  });

  // Quick Chips
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

  function executeCommand(cmd) {
    const rawCmd = cmd.trim();
    const parts = rawCmd.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    // Append user command line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-line';
    cmdLine.innerHTML = `<span class="term-green">root@aditya-soc</span>:<span class="term-cyan">~</span>$ <span class="term-command">${escapeHtml(rawCmd)}</span>`;
    terminalOutput.appendChild(cmdLine);

    // Response generator
    const resLine = document.createElement('div');
    resLine.className = 'term-output';

    switch (mainCmd) {
      case 'help':
        resLine.innerHTML = `
Available Commands:
  • <span class="highlight-cyan">whoami</span>        - Display operator profile and credentials
  • <span class="highlight-cyan">cat skills</span>    - List defensive security, SIEM & tech competencies
  • <span class="highlight-cyan">fetch projects</span> - Display public repositories and descriptions
  • <span class="highlight-cyan">ioc-scan &lt;ip&gt;</span>   - Simulate an IOC threat lookup via OSINT intelligence
  • <span class="highlight-cyan">status</span>        - Display active SIEM & telemetry pipeline health
  • <span class="highlight-cyan">contact</span>       - Get direct contact channels (Email, LinkedIn, GitHub)
  • <span class="highlight-cyan">clear</span>         - Clear the terminal screen
        `;
        break;

      case 'whoami':
        resLine.innerHTML = `
<strong class="text-white">Aditya Tamakuwala</strong> | ID: 23BCE010
Role: Cybersecurity Analyst &amp; Threat Intelligence Specialist
Location: Bengaluru, Karnataka / India
Education: B.Tech Computer Science &amp; Engineering (2023 - Present)
Internship: Threat Intelligence &amp; SIEM Intern @ Infotact Technical Internship (Finance &amp; Banking Track)
Specialties: Wazuh SIEM, Windows Sysmon, ELK Stack, Threat Feeds Aggregation, DevSecOps.
        `;
        break;

      case 'cat':
        if (arg === 'skills' || arg === 'competencies') {
          resLine.innerHTML = `
[+] Core Technical Competencies:
  1. SIEM &amp; XDR: Wazuh Manager/Agent, Elasticsearch 8.x, Kibana, Filebeat
  2. Threat Telemetry: Microsoft Sysmon, MITRE ATT&amp;CK, Windows Event Logs
  3. OSINT &amp; Threat Feeds: AlienVault OTX, AbuseIPDB, VirusTotal, Shodan
  4. DevSecOps: OWASP ZAP (DAST), Checkov (IaC), Docker, GitHub Actions CI/CD
  5. Programming: Python 3.10+ (PyMongo, elasticsearch-py, Flask, OpenCV), JS/TS
          `;
        } else {
          resLine.innerHTML = `cat: ${escapeHtml(arg || '')}: No such file or directory. Try: <span class="highlight-cyan">cat skills</span>`;
        }
        break;

      case 'skills':
        resLine.innerHTML = `
[+] Technical Stack:
  - SIEM / Monitoring: Wazuh 4.x, Elasticsearch, Kibana, Filebeat
  - Endpoint Visibility: Microsoft Sysmon (Process, Network, File Integrity)
  - Threat Intel: AlienVault OTX, AbuseIPDB, VirusTotal, Shodan, MITRE ATT&CK
  - DevSecOps: OWASP ZAP, Checkov, Docker Containerization, GitHub Actions
  - Languages: Python, JavaScript, TypeScript, Bash, SQL, C/C++
        `;
        break;

      case 'fetch':
      case 'projects':
        resLine.innerHTML = `
[+] GitHub Repositories for @AdityaTamakuwala:
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
[+] Querying OSINT intelligence for target: <span class="highlight-cyan">${escapeHtml(targetIp)}</span>...
[✓] AlienVault OTX: Flagged in 14 pulses (Tor Exit Node / Scanner)
[✓] AbuseIPDB: 100% Abuse Confidence Score (Port scanning / SSH brute-force)
[✓] VirusTotal: 12/89 Security Vendors flagged as Malicious
[⚡] Action Taken: Auto-streamed to BankSec-TIP Firewall Engine -> BLOCKED
[⚡] Ingestion: Filebeat log shipper -> Elasticsearch index: <span class="highlight-green">threat-ioc-logs-2026</span>
        `;
        break;

      case 'status':
        resLine.innerHTML = `
[+] SYSTEM STATUS: ALL CHANNELS NOMINAL
  • Wazuh SIEM Manager: Active (PID: 1024)
  • Sysmon Telemetry Stream: Ingesting Event IDs 1, 3, 7, 11
  • Elasticsearch Node: Cluster Status GREEN (8.13.0)
  • Career Availability: Open for SOC Analyst &amp; Threat Intelligence roles
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

      case 'date':
        resLine.innerHTML = new Date().toUTCString();
        break;

      case 'sudo':
        resLine.innerHTML = `<span class="text-orange">Permission denied: Incident logged in Wazuh SIEM!</span>`;
        break;

      default:
        resLine.innerHTML = `Command not recognized: '<span class="highlight-orange">${escapeHtml(mainCmd)}</span>'. Type <span class="highlight-cyan">'help'</span> for available commands.`;
        break;
    }

    terminalOutput.appendChild(resLine);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
}

/* ==========================================================================
   8. CLIPBOARD COPY & TOAST NOTIFICATION ENGINE
   ========================================================================= */
function initClipboardHandlers() {
  const copyButtons = document.querySelectorAll('[data-copy], #quick-copy-email');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy') || btn.getAttribute('data-email') || 'adityatamakuwala72@gmail.com';

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied: ${textToCopy} 🚀`);
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
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

/* ==========================================================================
   9. CONTACT FORM HANDLER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Construct mailto link
    const mailtoUrl = `mailto:adityatamakuwala72@gmail.com?subject=${encodeURIComponent(subject + ' - via Portfolio')}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    showToast(`Dispatching email to adityatamakuwala72@gmail.com...`);

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  });
}

/* ==========================================================================
   10. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }
}

/* Helper function to sanitize user strings */
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
