/**
 * MIA_Ether Portfolio — Theme · Lang · Terminal · Filters · Cursor · Progress · Particles
 */
(() => {
  "use strict";

  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const dict = {
    zh: {
      navProjects: "Projects", navSkills: "Stack", navNow: "Now", navLab: "Lab", navBlog: "Notes", navConnect: "Connect",
      heroBadge: "STATUS // ONLINE",
      heroSub: "08 · Builder in progress · Based in Guangzhou",
      role1: "AI Explorer", role2: "Builder", role3: "Public Learner",
      btnTerminal: "终端",
      aboutTitle: "About",
      aboutLead: "08 年出生，刚毕业。在 AI、工具、市场与内容之间持续试错。",
      aboutP1: "Based in Guangzhou。会写一点代码、做一点 AI 实验、关注市场，也把看到的工具和想法公开记录下来。",
      aboutP2: "还在路上，但会持续构建、持续学习，把好奇心变成真正能跑起来的东西。",
      projectsTitle: "Projects", projectsDesc: "做过的，正在做的，以及下一件想做出来的事。",
      proj1Desc: "购机配置 CLI。按场景与预算生成建议，把信息差压小一点。",
      proj2Desc: "交易与量化相关的小实验：数据、规则、回测思路与风控记录。",
      proj3Desc: "AI 辅助创作与自媒体工具链。把输出效率和技术栈绑在一起。",
      nowTitle: "Now", nowDesc: "现在正在好奇、学习和构建的东西。", nowUpdated: "UPDATED · AUG 2026",
      nowAI: "AI & Tools", nowAIDesc: "探索 AI 工具、工作流和真正有用的小产品。",
      nowMarkets: "Markets", nowMarketsDesc: "观察市场、规则、叙事与风险如何一起变化。",
      nowPublic: "Build in Public", nowPublicDesc: "把项目进度、思考和发现发在 X 上。",
      skillsTitle: "Stack & Signals", skillsDesc: "正在积累的工具、方向和信号。",
      labTitle: "Lab", labDesc: "交易之外的频率。",
      labQuant: "Quant Desk", labQuantDesc: "规则、数据与回撤。先活下来再谈收益。",
      labAI: "AI Creation", labAIDesc: "生成、辅助、工作流。模型是工具。",
      labMedia: "Self-Media", labMediaDesc: "把市场与工具讲清楚。公开记录。",
      labMusic: "Sound", labMusicDesc: "电子向与氛围。节奏是另一种系统。",
      labExp: "Experiments", labExpDesc: "代码 × 内容 × 交易想法的交叉试验。",
      blogTitle: "Notes", blogDesc: "公开写的东西，主要在 X。",
      blog1Title: "@MIA03ther", blog1Desc: "市场、工具、认知与日常输出。主阵地。",
      blog2Title: "Long-form loading…", blog2Desc: "更长的笔记会慢慢补在这里或外链。",
      pathTitle: "Path",
      path1Title: "Build", path1Desc: "本科在读 · 交易与量化练习 · AI 与内容输出 · 公开记录",
      path2Title: "Ship", path2Desc: "可复用的小工具与策略笔记 · 更稳定的内容节奏 · 作品集",
      path3Title: "Scale", path3Desc: "把喜欢的方向做成可持续的能力与影响",
      connectTitle: "Connect", connectDesc: "主页之外的节点。",
      friendsTitle: "在互联网上认真做东西的朋友。", friendsDesc: "想交换友链？欢迎在 X 上找我。",
    },
    en: {
      navProjects: "Projects", navSkills: "Stack", navNow: "Now", navLab: "Lab", navBlog: "Notes", navConnect: "Connect",
      heroBadge: "STATUS // ONLINE",
      heroSub: "08 · Builder in progress · Based in Guangzhou",
      role1: "AI Explorer", role2: "Builder", role3: "Public Learner",
      btnTerminal: "Terminal",
      aboutTitle: "About",
      aboutLead: "Born 2008. Fresh out of high school. Learning through AI, tools, markets, and public work.",
      aboutP1: "Based in Guangzhou. I write some code, run AI experiments, watch markets, and share useful tools and ideas in public.",
      aboutP2: "Still early, still building. The goal is to turn curiosity into things that actually run.",
      projectsTitle: "Projects", projectsDesc: "What I have made, what I am building, and what comes next.",
      proj1Desc: "PC build CLI. Scene + budget → config advice.",
      proj2Desc: "Quant / market experiments: data, rules, backtest notes, risk logs.",
      proj3Desc: "AI-assisted creation and media workflows.",
      nowTitle: "Now", nowDesc: "What I am curious about, learning, and building right now.", nowUpdated: "UPDATED · AUG 2026",
      nowAI: "AI & Tools", nowAIDesc: "Exploring AI tools, workflows, and small products that are genuinely useful.",
      nowMarkets: "Markets", nowMarketsDesc: "Watching how markets, rules, narratives, and risk move together.",
      nowPublic: "Build in Public", nowPublicDesc: "Sharing projects, thoughts, and discoveries on X.",
      skillsTitle: "Stack & Signals", skillsDesc: "Tools, directions, and signals I am building up.",
      labTitle: "Lab", labDesc: "Frequencies beyond the desk.",
      labQuant: "Quant Desk", labQuantDesc: "Rules, data, drawdown. Survive first.",
      labAI: "AI Creation", labAIDesc: "Generation and workflows. Models are tools.",
      labMedia: "Self-Media", labMediaDesc: "Explain markets and tools in public.",
      labMusic: "Sound", labMusicDesc: "Electronic / atmosphere. Rhythm as system.",
      labExp: "Experiments", labExpDesc: "Code × content × trading ideas.",
      blogTitle: "Notes", blogDesc: "Public writing — mainly on X.",
      blog1Title: "@MIA03ther", blog1Desc: "Markets, tools, cognition. Main channel.",
      blog2Title: "Long-form loading…", blog2Desc: "Longer notes will land here or via links.",
      pathTitle: "Path",
      path1Title: "Build", path1Desc: "Undergrad · quant practice · AI & media · public logs",
      path2Title: "Ship", path2Desc: "Reusable tools & notes · steadier output · portfolio",
      path3Title: "Scale", path3Desc: "Turn interest into durable capability",
      connectTitle: "Connect", connectDesc: "Nodes beyond this page.",
      friendsTitle: "Friends building on the internet.", friendsDesc: "Want to exchange links? Reach out on X.",
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

  applyLang(localStorage.getItem("mia-lang") || "zh");
  $("#langToggle")?.addEventListener("click", () => {
    applyLang(root.getAttribute("data-lang") === "zh" ? "en" : "zh");
  });

  const savedTheme = localStorage.getItem("mia-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", savedTheme || (prefersLight ? "light" : "dark"));

  function toggleTheme() {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("mia-theme", next);
  }
  $("#themeToggle")?.addEventListener("click", toggleTheme);

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

  const logoMenu = $("#logoMenu");
  $("#logoBtn")?.addEventListener("click", () => { logoMenu.hidden = false; });
  $("#logoMenuClose")?.addEventListener("click", () => { logoMenu.hidden = true; });
  logoMenu?.addEventListener("click", (e) => { if (e.target === logoMenu) logoMenu.hidden = true; });
  $$(".logo-menu-item[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const act = btn.getAttribute("data-action");
      logoMenu.hidden = true;
      if (act === "terminal") openTerminal();
      if (act === "theme") toggleTheme();
      if (act === "lang") applyLang(root.getAttribute("data-lang") === "zh" ? "en" : "zh");
    });
  });

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
    termPrint(`<span class="t-muted">MIA_Ether shell — type <span class="t-cyan">help</span></span>`);
    termPrint(`<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ whoami`);
    termPrint(`MIA_Ether · 08 · builder in progress · Guangzhou · AI / tools / ideas`);
    setTimeout(() => termInput?.focus(), 50);
  }

  function closeTerminal() { termOverlay.hidden = true; }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    termPrint(`<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ ${escapeHtml(raw)}`);
    if (!cmd) return;
    if (cmd === "help") termPrint(`<span class="t-muted">${termHelp}</span>`);
    else if (cmd === "whoami") termPrint(`MIA_Ether · born 2008 · builder in progress · based in Guangzhou`);
    else if (cmd === "about") {
      termPrint(`AI tools · market curiosity · public building · creative experiments.`);
      termPrint(`Public notes on X: @MIA03ther`);
    } else if (cmd === "skills") termPrint(`Python · data · quant/trading · AI tools · content`);
    else if (cmd === "links") {
      termPrint(`X       https://x.com/MIA03ther`);
      termPrint(`GitHub  https://github.com/MIA-Ether`);
    } else if (cmd === "clear") termBody.innerHTML = "";
    else if (cmd === "exit" || cmd === "q") closeTerminal();
    else termPrint(`<span class="t-pink">unknown:</span> ${escapeHtml(cmd)} — try help`);
  }

  $("#termBtn")?.addEventListener("click", openTerminal);
  $("#openTermHero")?.addEventListener("click", openTerminal);
  $("#terminalClose")?.addEventListener("click", closeTerminal);
  termOverlay?.addEventListener("click", (e) => { if (e.target === termOverlay) closeTerminal(); });
  termInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { runCommand(termInput.value); termInput.value = ""; }
    if (e.key === "Escape") closeTerminal();
  });

  const filterBar = $("#filterBar");
  filterBar?.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn", filterBar).forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.getAttribute("data-filter");
    $$(".project-card").forEach((card) => {
      const tags = (card.getAttribute("data-tags") || "").split(/\s+/);
      card.classList.toggle("hidden", !(f === "all" || tags.includes(f)));
    });
  });

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        $$(".skill-fill").forEach((el) => {
          el.style.setProperty("--w", (el.getAttribute("data-p") || "0") + "%");
          el.classList.add("animated");
        });
        skillObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });
  const skillsSec = $("#skills");
  if (skillsSec) skillObserver.observe(skillsSec);

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
  $$(".project-card, .now-card, .lab-card, .timeline-item, .contact-card, .friend-card, .blog-item").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "opacity 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)";
    revealObs.observe(el);
  });
  const style = document.createElement("style");
  style.textContent = `.visible{opacity:1!important;transform:none!important}`;
  document.head.appendChild(style);

  const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;
  if (!isTouch) {
    document.body.classList.add("has-custom-cursor");
    const dot = $("#cursorDot");
    const ring = $("#cursorRing");
    let x = 0, y = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", (e) => {
      x = e.clientX; y = e.clientY;
      if (dot) { dot.style.left = x + "px"; dot.style.top = y + "px"; }
    });
    (function loop() {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (ring) { ring.style.left = rx + "px"; ring.style.top = ry + "px"; }
      requestAnimationFrame(loop);
    })();
    $$("a, button, .project-card, .lab-card, .contact-card, .filter-btn").forEach((el) => {
      el.addEventListener("mouseenter", () => ring?.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring?.classList.remove("hover"));
    });
  }

  const canvas = $("#particles");
  if (canvas && !isTouch && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let w, h, particles;
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: Math.min(48, Math.floor(w / 30)) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
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
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 0.08; ctx.strokeStyle = accent;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
      }
      requestAnimationFrame(draw);
    }
    resize(); draw();
    window.addEventListener("resize", resize);
  }
})();
