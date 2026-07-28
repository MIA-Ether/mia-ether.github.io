/**
 * MIA_Ether Portfolio v4
 * Theme · Lang · Terminal · Filters · Cursor · Progress · Particles · Radar
 */
(() => {
  "use strict";

  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- i18n ---------- */
  const dict = {
    zh: {
      navProjects: "Projects", navSkills: "Skills", navLab: "Lab", navBlog: "Blog", navConnect: "Connect",
      heroBadge: "STATUS // ONLINE", heroSub: "Builder / Creator · Based in Guangzhou",
      btnTerminal: "打开终端", btnProjects: "项目",
      aboutTitle: "About", aboutLead: "我在数据、智能与想象的交界处做事。",
      aboutP1: "目前在广州读书（广外），日常在代码、数据和声音之间切换。喜欢把技术用在真正让自己兴奋的事情上——无论是分析数字、写小工具，还是做电子音乐、挖漫画世界观。",
      aboutP2: "不急着贴单一标签。更在意持续做、持续记录、把想象变成能跑的东西。",
      projectsTitle: "Projects", projectsDesc: "已经上线的，和正在路上的。",
      proj1Desc: "大学生购机避坑 CLI。按场景、预算、设备类型生成配置建议。",
      proj2Desc: "数据与决策相关的小实验。用代码把抽象变具体。",
      proj3Desc: "AI 辅助创作与跨界小工具。技术只是素材的一部分。",
      skillsTitle: "Skills", skillsDesc: "当前信号强度 — 仍在升级中。",
      labTitle: "Lab", labDesc: "侧信道。代码碰到其他频率的地方。",
      labMusic: "电子音乐", labMusicDesc: "EDM / 电子向。节奏与氛围的实验场。",
      labAnime: "二次元", labAnimeDesc: "叙事与视觉。世界观是另一种系统。",
      labAI: "AI 实验场", labAIDesc: "生成与协作。模型是工具不是魔法。",
      labData: "数据速写", labDataDesc: "小数据、小图表、小结论。",
      labExp: "随机实验", labExpDesc: "跨界试错：代码 × 声音 × 图像。",
      musicLabel: "// NOW LISTENING", musicTitle: "网易云音乐", musicDesc: "歌单与日常循环 · 点进去听我在听什么", musicBtn: "打开主页 →",
      blogTitle: "Blog", blogDesc: "笔记、日志与短写。陆续上线。",
      blog1Title: "Building in public — 第一次提交", blog1Desc: "个人主页上线与一些想法。更多短文将放在这里或外链。",
      blog2Title: "更多文章加载中…", blog2Desc: "技术笔记 · 学习日志 · 赛博碎碎念",
      pathTitle: "Path", path1Title: "Boot", path1Desc: "入学 · 打基础 · 做小工具 · 公开记录",
      path2Title: "Explore", path2Desc: "数据与 AI 项目 · 对接真实场景 · 输出作品",
      path3Title: "Ship", path3Desc: "作品集 · 协作与开源 · 把喜欢变成能力",
      connectTitle: "Connect", connectDesc: "在网络的各个节点找到我。",
    },
    en: {
      navProjects: "Projects", navSkills: "Skills", navLab: "Lab", navBlog: "Blog", navConnect: "Connect",
      heroBadge: "STATUS // ONLINE", heroSub: "Builder / Creator · Based in Guangzhou",
      btnTerminal: "Open Terminal", btnProjects: "Projects",
      aboutTitle: "About", aboutLead: "I build things at the edge of data, intelligence and imagination.",
      aboutP1: "Based in Guangzhou (GDUFS). I switch between code, data and sound. I like using tech on things that actually excite me — analysis, small tools, electronic music, anime worlds.",
      aboutP2: "No rush to wear a single label. What matters is shipping, logging, and turning imagination into something that runs.",
      projectsTitle: "Projects", projectsDesc: "Things I ship and things I’m building toward.",
      proj1Desc: "CLI tool for student PC builds. Scene + budget + device type → config advice.",
      proj2Desc: "Small experiments on data and decisions. Make the abstract concrete.",
      proj3Desc: "AI-assisted creation and cross-border tools. Tech is only part of the material.",
      skillsTitle: "Skills", skillsDesc: "Current signal strength — still leveling up.",
      labTitle: "Lab", labDesc: "Side signals. Where code meets other frequencies.",
      labMusic: "Electronic Music", labMusicDesc: "EDM / electronic. Lab for rhythm and atmosphere.",
      labAnime: "Anime & Manga", labAnimeDesc: "Narrative and visuals. Worldbuilding as system design.",
      labAI: "AI Playground", labAIDesc: "Generation and collaboration. Models are tools, not magic.",
      labData: "Data Sketches", labDataDesc: "Small data, small charts, small conclusions.",
      labExp: "Experiments", labExpDesc: "Cross-border tries: code × sound × image.",
      musicLabel: "// NOW LISTENING", musicTitle: "NetEase Cloud Music", musicDesc: "Playlists and daily loops · hear what I’m on", musicBtn: "Open Profile →",
      blogTitle: "Blog", blogDesc: "Notes, logs and short writes. Coming online.",
      blog1Title: "Building in public — first commit", blog1Desc: "Site launch and a few thoughts. More posts here or linked out.",
      blog2Title: "More posts loading…", blog2Desc: "Tech notes · learning logs · cyber fragments",
      pathTitle: "Path", path1Title: "Boot", path1Desc: "Start school · foundations · small tools · public logs",
      path2Title: "Explore", path2Desc: "Data & AI projects · real scenarios · ship work",
      path3Title: "Ship", path3Desc: "Portfolio · collab & OSS · turn liking into capability",
      connectTitle: "Connect", connectDesc: "Find me across the network.",
    },
  };

  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    const t = dict[lang] || dict.zh;
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] != null) el.textContent = t[key];
    });
    const label = $("#langLabel");
    if (label) label.textContent = lang === "zh" ? "EN" : "中";
    localStorage.setItem("mia-lang", lang);
  }

  const savedLang = localStorage.getItem("mia-lang") || "zh";
  applyLang(savedLang);

  $("#langToggle")?.addEventListener("click", () => {
    applyLang(root.getAttribute("data-lang") === "zh" ? "en" : "zh");
  });

  /* ---------- Theme ---------- */
  const savedTheme = localStorage.getItem("mia-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", savedTheme || (prefersLight ? "light" : "dark"));

  function toggleTheme() {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("mia-theme", next);
  }
  $("#themeToggle")?.addEventListener("click", toggleTheme);

  /* ---------- Scroll progress + header ---------- */
  const progress = $("#scrollProgress");
  const header = $(".site-header");
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = p + "%";
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const navBtn = $(".nav-toggle");
  const navLinks = $(".nav-links");
  navBtn?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("open");
    navBtn.setAttribute("aria-expanded", String(!!open));
  });
  navLinks?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navBtn?.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Logo menu ---------- */
  const logoMenu = $("#logoMenu");
  $("#logoBtn")?.addEventListener("click", () => {
    logoMenu.hidden = false;
  });
  $("#logoMenuClose")?.addEventListener("click", () => {
    logoMenu.hidden = true;
  });
  logoMenu?.addEventListener("click", (e) => {
    if (e.target === logoMenu) logoMenu.hidden = true;
  });
  $$(".logo-menu-item[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const act = btn.getAttribute("data-action");
      logoMenu.hidden = true;
      if (act === "terminal") openTerminal();
      if (act === "theme") toggleTheme();
      if (act === "lang") applyLang(root.getAttribute("data-lang") === "zh" ? "en" : "zh");
    });
  });

  /* ---------- Terminal ---------- */
  const termOverlay = $("#terminalOverlay");
  const termBody = $("#terminalBody");
  const termInput = $("#terminalInput");

  const termHelp = `commands: help · whoami · about · skills · links · clear · exit`;

  function termPrint(html) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = html;
    termBody.appendChild(line);
    termBody.scrollTop = termBody.scrollHeight;
  }

  function openTerminal() {
    termOverlay.hidden = false;
    termBody.innerHTML = "";
    termPrint(`<span class="t-muted">MIA_Ether shell v0.4 — type <span class="t-cyan">help</span></span>`);
    termPrint(`<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ whoami`);
    termPrint(`MIA_Ether — builder / creator. Data · AI · Sound · Code. Guangzhou.`);
    setTimeout(() => termInput?.focus(), 50);
  }

  function closeTerminal() {
    termOverlay.hidden = true;
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    termPrint(`<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ ${escapeHtml(raw)}`);
    if (!cmd) return;
    if (cmd === "help") termPrint(`<span class="t-muted">${termHelp}</span>`);
    else if (cmd === "whoami") termPrint(`MIA_Ether · Builder / Creator · Guangzhou (GDUFS)`);
    else if (cmd === "about") {
      termPrint(`Exploring data, AI, finance-curious tools and creative tech.`);
      termPrint(`Also: electronic music, anime/manga, random experiments.`);
    } else if (cmd === "skills") termPrint(`Python · Data · AI tools · CLI · Creative / Sound — still leveling.`);
    else if (cmd === "links") {
      termPrint(`GitHub  https://github.com/MIA-Ether`);
      termPrint(`X       https://x.com/MIA03ther`);
      termPrint(`Bili    https://space.bilibili.com/451863946`);
      termPrint(`Music   https://music.163.com/#/user/home?id=13872715631`);
    } else if (cmd === "clear") termBody.innerHTML = "";
    else if (cmd === "exit" || cmd === "q") closeTerminal();
    else termPrint(`<span class="t-pink">command not found:</span> ${escapeHtml(cmd)} — try help`);
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  $("#termBtn")?.addEventListener("click", openTerminal);
  $("#openTermHero")?.addEventListener("click", openTerminal);
  $("#terminalClose")?.addEventListener("click", closeTerminal);
  termOverlay?.addEventListener("click", (e) => {
    if (e.target === termOverlay) closeTerminal();
  });
  termInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      runCommand(termInput.value);
      termInput.value = "";
    }
    if (e.key === "Escape") closeTerminal();
  });

  /* ---------- Project filters ---------- */
  const filterBar = $("#filterBar");
  filterBar?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", filterBar).forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.getAttribute("data-filter");
    $$(".project-card").forEach((card) => {
      const tags = (card.getAttribute("data-tags") || "").split(/\s+/);
      const show = f === "all" || tags.includes(f);
      card.classList.toggle("hidden", !show);
    });
  });

  /* ---------- Skill bars animate on view ---------- */
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          $$(".skill-fill").forEach((el) => {
            const p = el.getAttribute("data-p") || "0";
            el.style.setProperty("--w", p + "%");
            el.classList.add("animated");
          });
          skillObserver.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  const skillsSec = $("#skills");
  if (skillsSec) skillObserver.observe(skillsSec);

  /* ---------- Reveal ---------- */
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
  );
  $$(".project-card, .lab-card, .timeline-item, .contact-card, .blog-item, .music-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)";
    revealObs.observe(el);
  });
  const style = document.createElement("style");
  style.textContent = `.visible{opacity:1!important;transform:none!important}`;
  document.head.appendChild(style);

  /* ---------- Custom cursor (desktop only) ---------- */
  const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;
  if (!isTouch) {
    document.body.classList.add("has-custom-cursor");
    const dot = $("#cursorDot");
    const ring = $("#cursorRing");
    let x = 0, y = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      if (dot) {
        dot.style.left = x + "px";
        dot.style.top = y + "px";
      }
    });
    function loopRing() {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      requestAnimationFrame(loopRing);
    }
    loopRing();
    $$("a, button, .project-card, .lab-card, .contact-card, .filter-btn").forEach((el) => {
      el.addEventListener("mouseenter", () => ring?.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring?.classList.remove("hover"));
    });
  }

  /* ---------- Particles ---------- */
  const canvas = $("#particles");
  if (canvas && !isTouch && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let w, h, particles;
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    function init() {
      resize();
      particles = Array.from({ length: Math.min(48, Math.floor(w / 30)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const accent = getComputedStyle(root).getPropertyValue("--accent").trim() || "#00e8ff";
      ctx.fillStyle = accent;
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.globalAlpha = 0.35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = accent;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    init();
    draw();
    window.addEventListener("resize", init);
  }
})();
