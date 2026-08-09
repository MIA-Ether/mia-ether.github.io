/** MIA_Ether — personal site interactions */
(() => {
  "use strict";

  const root = document.documentElement;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const copy = {
    zh: {
      navProjects: "Projects", navSkills: "Stack", navNow: "Now", navLab: "Lab", navBlog: "Notes", navConnect: "Connect",
      heroBadge: "STATUS // ONLINE", heroSub: "08 · Builder in progress · Based in Guangzhou",
      role1: "AI Explorer", role2: "Builder", role3: "Public Learner", btnTerminal: "终端",
      aboutTitle: "About", aboutLead: "08 年出生，刚毕业。在 AI、工具、市场与内容之间持续试错。",
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
      labTitle: "Lab", labDesc: "交易之外的频率。", labQuant: "Quant Desk", labQuantDesc: "规则、数据与回撤。先活下来再谈收益。",
      labAI: "AI Creation", labAIDesc: "生成、辅助、工作流。模型是工具。", labMedia: "Self-Media", labMediaDesc: "把市场与工具讲清楚。公开记录。",
      labMusic: "Sound", labMusicDesc: "电子向与氛围。节奏是另一种系统。", labExp: "Experiments", labExpDesc: "代码 × 内容 × 交易想法的交叉试验。",
      blogTitle: "Notes", blogDesc: "公开写的东西，主要在 X。", blog1Title: "@MIA03ther", blog1Desc: "市场、工具、认知与日常输出。主阵地。",
      blog2Title: "Long-form loading…", blog2Desc: "更长的笔记会慢慢补在这里或外链。",
      pathTitle: "Path", path1Title: "Build", path1Desc: "刚毕业 · AI 与工具探索 · 公开记录", path2Title: "Ship", path2Desc: "可复用的小工具、更多作品和更稳定的内容节奏", path3Title: "Scale", path3Desc: "把好奇心做成持续生长的能力与影响",
      connectTitle: "Connect", connectDesc: "主页之外的节点。", friendsTitle: "在互联网上认真做东西的朋友。", friendsDesc: "想交换友链？欢迎在 X 上找我。",
    },
    en: {
      navProjects: "Projects", navSkills: "Stack", navNow: "Now", navLab: "Lab", navBlog: "Notes", navConnect: "Connect",
      heroBadge: "STATUS // ONLINE", heroSub: "08 · Builder in progress · Based in Guangzhou",
      role1: "AI Explorer", role2: "Builder", role3: "Public Learner", btnTerminal: "Terminal",
      aboutTitle: "About", aboutLead: "Born 2008. Fresh out of high school. Learning through AI, tools, markets, and public work.",
      aboutP1: "Based in Guangzhou. I write some code, run AI experiments, watch markets, and share useful tools and ideas in public.",
      aboutP2: "Still early, still building. The goal is to turn curiosity into things that actually run.",
      projectsTitle: "Projects", projectsDesc: "What I have made, what I am building, and what comes next.",
      proj1Desc: "A PC-build CLI. Scenario and budget in; practical recommendations out.",
      proj2Desc: "Small experiments in data, rules, backtesting ideas, and risk notes.",
      proj3Desc: "AI-assisted creation and a personal media workflow.",
      nowTitle: "Now", nowDesc: "What I am curious about, learning, and building right now.", nowUpdated: "UPDATED · AUG 2026",
      nowAI: "AI & Tools", nowAIDesc: "Exploring AI tools, workflows, and small products that are genuinely useful.",
      nowMarkets: "Markets", nowMarketsDesc: "Watching how markets, rules, narratives, and risk move together.",
      nowPublic: "Build in Public", nowPublicDesc: "Sharing projects, thoughts, and discoveries on X.",
      skillsTitle: "Stack & Signals", skillsDesc: "Tools, directions, and signals I am building up.",
      labTitle: "Lab", labDesc: "Frequencies beyond the desk.", labQuant: "Quant Desk", labQuantDesc: "Rules, data, drawdown. Survive first.",
      labAI: "AI Creation", labAIDesc: "Generation and workflows. Models are tools.", labMedia: "Self-Media", labMediaDesc: "Explain markets and tools in public.",
      labMusic: "Sound", labMusicDesc: "Electronic / atmosphere. Rhythm as system.", labExp: "Experiments", labExpDesc: "Code × content × trading ideas.",
      blogTitle: "Notes", blogDesc: "Public writing — mainly on X.", blog1Title: "@MIA03ther", blog1Desc: "Markets, tools, cognition, and daily output.",
      blog2Title: "Long-form loading…", blog2Desc: "Longer notes will land here or via links.",
      pathTitle: "Path", path1Title: "Build", path1Desc: "Fresh out of high school · AI and tools · public notes", path2Title: "Ship", path2Desc: "Reusable tools, more work, and a steadier publishing rhythm", path3Title: "Scale", path3Desc: "Turn curiosity into durable capability and impact",
      connectTitle: "Connect", connectDesc: "Nodes beyond this page.", friendsTitle: "Friends building on the internet.", friendsDesc: "Want to exchange links? Reach out on X.",
    },
  };

  const setLanguage = (lang) => {
    const active = copy[lang] ? lang : "zh";
    root.lang = active === "zh" ? "zh-CN" : "en";
    root.dataset.lang = active;
    $$('[data-i18n]').forEach((element) => {
      const value = copy[active][element.dataset.i18n];
      if (value) element.textContent = value;
    });
    const label = $("#langLabel");
    if (label) label.textContent = active === "zh" ? "EN" : "中";
    localStorage.setItem("mia-lang", active);
  };

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("mia-theme", theme);
  };

  setLanguage(localStorage.getItem("mia-lang") || "zh");
  setTheme(localStorage.getItem("mia-theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  $("#langToggle")?.addEventListener("click", () => setLanguage(root.dataset.lang === "zh" ? "en" : "zh"));
  $("#themeToggle")?.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

  const navLinks = $(".nav-links");
  const navButton = $(".nav-toggle");
  navButton?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("open");
    navButton.setAttribute("aria-expanded", String(Boolean(open)));
  });
  $$("a", navLinks).forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navButton?.setAttribute("aria-expanded", "false");
  }));

  const header = $(".site-header");
  const progress = $("#scrollProgress");
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
    header?.classList.toggle("scrolled", scrollY > 12);
  };
  addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  const filterBar = $("#filterBar");
  filterBar?.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    $$(".filter-btn", filterBar).forEach((item) => item.classList.toggle("active", item === button));
    const filter = button.dataset.filter;
    $$(".project-card").forEach((card) => card.classList.toggle("hidden", filter !== "all" && !card.dataset.tags.split(/\s+/).includes(filter)));
  });

  const reveal = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  }), { threshold: 0.08, rootMargin: "0px 0px -24px" });
  $$(".project-card, .now-card, .lab-card, .timeline-item, .contact-card, .friend-card, .blog-item").forEach((item) => reveal.observe(item));

  const skills = $("#skills");
  const skillObserver = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    $$(".skill-fill").forEach((fill) => fill.style.setProperty("--w", `${fill.dataset.p || 0}%`));
    observer.disconnect();
  }), { threshold: 0.2 });
  if (skills) skillObserver.observe(skills);

  const logoMenu = $("#logoMenu");
  const terminal = $("#terminalOverlay");
  const terminalBody = $("#terminalBody");
  const terminalInput = $("#terminalInput");
  const escape = (text) => text.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const print = (html) => { const line = document.createElement("div"); line.className = "terminal-line"; line.innerHTML = html; terminalBody.append(line); terminalBody.scrollTop = terminalBody.scrollHeight; };
  const closeTerminal = () => { terminal.hidden = true; };
  const openTerminal = () => {
    terminal.hidden = false;
    terminalBody.innerHTML = "";
    print('<span class="t-muted">MIA_Ether shell — type <span class="t-cyan">help</span></span>');
    print('<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ whoami');
    print("MIA_Ether · 08 · builder in progress · Guangzhou · AI / tools / ideas");
    setTimeout(() => terminalInput?.focus(), 20);
  };
  const run = (raw) => {
    const command = raw.trim().toLowerCase();
    print(`<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ ${escape(raw)}`);
    if (!command) return;
    const output = {
      help: '<span class="t-muted">commands: help · whoami · about · skills · links · clear · exit</span>',
      whoami: "MIA_Ether · born 2008 · builder in progress · based in Guangzhou",
      about: "AI tools · market curiosity · public building · creative experiments.",
      skills: "Python · data · AI tools · markets · content · sound",
      links: "X       https://x.com/MIA03ther<br>GitHub  https://github.com/MIA-Ether",
    };
    if (command === "clear") { terminalBody.innerHTML = ""; return; }
    if (command === "exit" || command === "q") { closeTerminal(); return; }
    print(output[command] || `<span class="t-pink">unknown:</span> ${escape(command)} — try help`);
  };
  $("#termBtn")?.addEventListener("click", openTerminal);
  $("#openTermHero")?.addEventListener("click", openTerminal);
  $("#terminalClose")?.addEventListener("click", closeTerminal);
  terminal?.addEventListener("click", (event) => { if (event.target === terminal) closeTerminal(); });
  terminalInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { run(terminalInput.value); terminalInput.value = ""; }
    if (event.key === "Escape") closeTerminal();
  });

  $("#logoBtn")?.addEventListener("click", () => { logoMenu.hidden = false; });
  $("#logoMenuClose")?.addEventListener("click", () => { logoMenu.hidden = true; });
  logoMenu?.addEventListener("click", (event) => { if (event.target === logoMenu) logoMenu.hidden = true; });
  $$(".logo-menu-item[data-action]").forEach((button) => button.addEventListener("click", () => {
    logoMenu.hidden = true;
    if (button.dataset.action === "terminal") openTerminal();
    if (button.dataset.action === "theme") setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    if (button.dataset.action === "lang") setLanguage(root.dataset.lang === "zh" ? "en" : "zh");
  }));
})();
