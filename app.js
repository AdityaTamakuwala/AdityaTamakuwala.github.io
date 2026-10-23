/**
 * ADITYA TAMAKUWALA — CYBERSECURITY & THREAT INTEL PORTFOLIO
 * Interactive Terminal, Canvas Effects, Filtering, and Toast Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initMatrixCanvas();
  initSkillsFilter();
  initTerminal();
  initContactForm();
  initClipboardHandlers();
  initMobileNavigation();
  initScrollSpy();
});

/* ==========================================================================
   1. CYBER BACKGROUND / DIGITAL PARTICLES CANVAS
   ========================================================================== */
function initMatrixCanvas() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Digital characters (Hex, binary, cyber symbols)
  const characters = '0123456789ABCDEF!@#$%^&*<>[]{}//';
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(6, 9, 15, 0.08)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00f2fe';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // Color variation (Cyan and Emerald green)
      if (Math.random() > 0.85) {
        ctx.fillStyle = '#00ff88';
      } else {
        ctx.fillStyle = '#00f2fe';
      }

      ctx.fillText(text, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 50);
}

/* ==========================================================================
   2. SKILLS FILTERING
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
   3. INTERACTIVE SOC CYBER TERMINAL
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
      btn.addEventListener('click', (e) => {
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
        resLine.innerHTML = `<span class="text-orange">Permission denied: Incident will be logged in Wazuh SIEM!</span>`;
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
   4. CLIPBOARD COPY & TOAST NOTIFICATION ENGINE
   ========================================================================== */
function initClipboardHandlers() {
  const copyButtons = document.querySelectorAll('[data-copy], #quick-copy-email');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy') || btn.getAttribute('data-email') || 'adityatamakuwala72@gmail.com';

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied: ${textToCopy} 🚀`);
      }).catch(err => {
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
   5. CONTACT FORM HANDLER
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
   6. MOBILE NAVIGATION
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

/* ==========================================================================
   7. SCROLL SPY FOR ACTIVE NAVIGATION LINK
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
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
