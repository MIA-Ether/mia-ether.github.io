(() => {
  "use strict";
  const root = document.documentElement;
  const $ = (s, scope = document) => scope.querySelector(s);
  const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];

  const text = {
    zh: {
      navWork: "作品", navSignals: "信号", navAbout: "关于", navConnect: "连接",
      status: "LIVE FROM GUANGZHOU · CN", heroCopy: "08 / BUILDER IN PROGRESS.<br>探索 AI、工具、市场与公开表达。", scroll: "向下探索",
      aboutKicker: "故事刚开始", statement: "不是专家。<br><em>只是好奇心</em>太重。", aboutCopy: "我是 MIA_Ether，一个在广州的 08 后 Builder。写点代码，做点小东西，追逐有趣的系统，再把学到的东西公开记录。这里是我的成长存档。", meta: "学习 / 构建 / 分享",
      workKicker: "精选作品", workTitle: "一边摸索，<br>一边做出来。", projectOne: "把预算、专业和使用场景变成可执行购机建议的 CLI。", projectTwo: "面向 AI 角色和 Live2D 伙伴的实时情绪与表演 SDK。", projectThree: "用本地 Ollama 把微信群导出内容整理成可检索的复盘报告。", projectFour: "支持微信数据解密、分析、年度总结和聊天记录导出的工具。", projectFive: "一键清理《三角洲行动》、Unreal Engine 与 NVIDIA 缓存的便携脚本。", projectSix: "帮助创作者公开构建、保持真实表达并持续增长的 X Skill。", inProgress: "正在构建", ongoing: "持续实验",
      signalKicker: "当前信号", signalTitle: "现在让我<br>着迷的东西。", signalOne: "AI 工具、创作工作流，以及真正有用的小产品。", signalTwo: "叙事、规则、风险和人的行为如何一起变化。", signalThree: "项目、想法和不完美的过程——都发在 X。",
      xCopy: "X 上有最新版本的我：工具、市场、奇怪想法和构建日志。", xCta: "关注这段旅程 ↗", connectKicker: "开放频道", connectTitle: "一起把事情<br>做得<em>响亮。</em>", friendCopy: "想交换友情链接？欢迎来 X 找我。",
    },
    en: {
      navWork: "WORK", navSignals: "SIGNALS", navAbout: "ABOUT", navConnect: "CONNECT",
      status: "LIVE FROM GUANGZHOU · CN", heroCopy: "08 / BUILDER IN PROGRESS.<br>Exploring AI, tools, markets and ideas in public.", scroll: "SCROLL TO EXPLORE",
      aboutKicker: "THE START", statement: "Not an expert.<br><em>Just too curious</em> to stay still.", aboutCopy: "I am MIA_Ether, an 08-born builder based in Guangzhou. I make small things, chase interesting systems, and turn what I learn into public notes. This is the archive of the climb.", meta: "LEARN / BUILD / SHARE",
      workKicker: "SELECTED WORK", workTitle: "Things I make<br>while figuring it out.", projectOne: "A CLI that turns budget, major, and use case into practical buying advice.", projectTwo: "A real-time emotion and performance SDK for AI characters and Live2D companions.", projectThree: "A local Ollama assistant that turns exported WeChat groups into searchable reports.", projectFour: "A WeChat data toolkit for decryption, analysis, annual summaries, and exports.", projectFive: "A portable script for clearing Delta Force, Unreal Engine, and NVIDIA caches.", projectSix: "An X growth skill for building in public with an authentic, repeatable rhythm.", inProgress: "IN PROGRESS", ongoing: "ONGOING",
      signalKicker: "CURRENT SIGNALS", signalTitle: "What has my<br>attention now.", signalOne: "AI tools, creative workflows, and tiny products with actual utility.", signalTwo: "How narratives, rules, risk, and human behavior move together.", signalThree: "Projects, ideas, and the messy parts — shared on X.",
      xCopy: "The most current version of me lives on X: tools, markets, random thoughts, and build logs.", xCta: "FOLLOW THE JOURNEY ↗", connectKicker: "OPEN CHANNELS", connectTitle: "Let’s make<br>something <em>loud.</em>", friendCopy: "Want to exchange links? Come say hi on X.",
    },
  };
  const setLanguage = (lang) => {
    const active = text[lang] ? lang : "zh";
    root.lang = active === "zh" ? "zh-CN" : "en";
    root.dataset.lang = active;
    $$('[data-i18n]').forEach((el) => { if (text[active][el.dataset.i18n]) el.innerHTML = text[active][el.dataset.i18n]; });
    $("#lang").textContent = active === "zh" ? "EN" : "中";
    localStorage.setItem("mia-language", active);
  };
  setLanguage(localStorage.getItem("mia-language") || "zh");
  $("#lang").addEventListener("click", () => setLanguage(root.dataset.lang === "zh" ? "en" : "zh"));
  root.dataset.theme = localStorage.getItem("mia-theme") || "dark";
  $("#theme").addEventListener("click", () => { root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark"; localStorage.setItem("mia-theme", root.dataset.theme); });

  const nav = $("#nav"), menu = $("#menu");
  menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
  $$("a", nav).forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));
  const progress = $("#progress"), header = $("#topbar");
  const onScroll = () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`; header.classList.toggle("scrolled", scrollY > 30); };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  $("#top").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  const reveal = new IntersectionObserver((entries, observer) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
  $$(".reveal").forEach((el) => reveal.observe(el));
  $$(".hero .reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), 240 + i * 130));

  if (!matchMedia("(hover: none), (pointer: coarse)").matches) {
    const cursor = $("#cursor");
    addEventListener("pointermove", (event) => { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; });
    $$("a, button, .work-card, .signal").forEach((el) => { el.addEventListener("mouseenter", () => cursor.classList.add("hot")); el.addEventListener("mouseleave", () => cursor.classList.remove("hot")); });
  }

  const canvas = $("#universe");
  if (canvas && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d"); let width, height, dots = [], pointer = { x: -1000, y: -1000 };
    const resize = () => { width = canvas.width = innerWidth * devicePixelRatio; height = canvas.height = innerHeight * devicePixelRatio; canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`; ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); dots = Array.from({ length: Math.min(105, Math.floor(innerWidth / 12)) }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, r: Math.random() * 1.6 + .3 })); };
    addEventListener("resize", resize); addEventListener("pointermove", (event) => { pointer.x = event.clientX; pointer.y = event.clientY; }); resize();
    const draw = () => { ctx.clearRect(0, 0, innerWidth, innerHeight); dots.forEach((dot, i) => { dot.x += dot.vx; dot.y += dot.vy; if (dot.x < 0 || dot.x > innerWidth) dot.vx *= -1; if (dot.y < 0 || dot.y > innerHeight) dot.vy *= -1; const pd = Math.hypot(dot.x - pointer.x, dot.y - pointer.y); if (pd < 150) { dot.x += (dot.x - pointer.x) * .006; dot.y += (dot.y - pointer.y) * .006; } ctx.fillStyle = i % 7 === 0 ? "#ff6eac" : "#84ffcb"; ctx.globalAlpha = .62; ctx.beginPath(); ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2); ctx.fill(); for (let j = i + 1; j < dots.length; j++) { const other = dots[j], d = Math.hypot(dot.x - other.x, dot.y - other.y); if (d < 118) { ctx.strokeStyle = i % 8 === 0 ? "#ff6eac" : "#84ffcb"; ctx.globalAlpha = .12 * (1 - d / 118); ctx.beginPath(); ctx.moveTo(dot.x, dot.y); ctx.lineTo(other.x, other.y); ctx.stroke(); } } }); ctx.globalAlpha = 1; requestAnimationFrame(draw); };
    draw();
  }
})();
