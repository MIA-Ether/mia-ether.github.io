(() => {
  "use strict";
  const root = document.documentElement;
  const $ = (s, scope = document) => scope.querySelector(s);
  const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];

  // 新增六国语言文本：中文、英文、日语、西班牙语、法语、德语
  const text = {
    zh: {
      navWork: "作品", navSignals: "信号", navAbout: "关于", navConnect: "联系",
      status: "广州 · 实时动态", heroCopy: "08 / 持续开发中.<br>探索AI、工具、市场与创意项目。", scroll: "向下滑动",
      aboutKicker: "开篇", statement: "算不上专家。<br>只是好奇心停不下来。", aboutCopy: "我是MIA_Ether，08年广州创作者。写代码、搭建工具、研究各类系统，公开记录所有学习过程，这里是我的成长存档。", meta: "学习 / 开发 / 分享",
      workKicker: "精选项目", workTitle: "一边摸索，一边落地。", projectOne: "根据预算、用途生成装机配置命令行工具。", projectTwo: "AI虚拟角色实时情绪渲染SDK。", projectThree: "Ollama本地微信聊天复盘检索工具。", projectFour: "微信数据解密、年度汇总导出工具箱。", projectFive: "三角洲/虚幻/N卡缓存清理便携脚本。", projectSix: "创作者公开成长运营方法。", inProgress: "开发中", ongoing: "持续迭代",
      signalKicker: "当下关注", signalTitle: "现在让我深耕的领域。", signalOne: "AI工具、创作工作流、实用小型产品。", signalTwo: "叙事、规则、风险与用户行为逻辑。", signalThree:  "项目碎碎念全发X平台。",
      xCopy: "X更新最快，包含工具、思路、开发日志。", xCta: "前往主页 ↗", connectKicker: "开放渠道", connectTitle: "一起做出亮眼作品。", friendCopy: "互换友链？欢迎X私信我。", langBtn: "EN"
    },
    en: {
      navWork: "WORK", navSignals: "SIGNALS", navAbout: "ABOUT", navConnect: "CONNECT",
      status: "LIVE FROM GUANGZHOU", heroCopy: "08 / BUILDER IN PROGRESS.<br>Exploring AI, tools, markets & projects.", scroll: "SCROLL DOWN",
      aboutKicker: "THE START", statement: "Not an expert.<br>Just endlessly curious.", aboutCopy: "I'm MIA_Ether, an 08-born builder based in Guangzhou. I code, build tools, study systems & document all my progress publicly. This archive tracks my growth.", meta: "LEARN / BUILD / SHARE",
      workKicker: "SELECTED WORK", workTitle: "Built while experimenting.", projectOne: "CLI tool to generate PC builds by budget & use case.", projectTwo: "Real-time emotion SDK for AI Live2D avatars.", projectThree: "Local Ollama chat log analyzer for WeChat groups.", projectFour: "WeChat decrypt & annual report toolkit.", projectFive: "Cache cleaner script for Delta/Unreal/NVIDIA.", projectSix: "Public creator growth workflow.", inProgress: "IN PROGRESS", ongoing: "ONGOING",
      signalKicker: "CURRENT FOCUS", signalTitle: "What I’m deep into now.", signalOne: "AI tools, creative pipelines, practical mini products.", signalTwo: "Narratives, risk, human market behavior.", signalThree: "All project logs posted on X.",
      xCopy: "My latest updates on X: tools, ideas, build logs.", xCta: "FOLLOW ME ↗", connectKicker: "LINKS", connectTitle: "Let’s build something standout.", friendCopy: "Link swap? Message me on X.", langBtn: "日本語"
    },
    ja: {
      navWork: "作品", navSignals: "シグナル", navAbout: "私について", navConnect: "連絡先",
      status: "広州より配信中", heroCopy: "08 / 開発進行中<br>AI・ツール・市場・プロジェクトを探求", scroll: "下へスクロール",
      aboutKicker: "序章", statement: "専門家ではない。<br>好奇心だけが尽きない。", aboutCopy: "MIA_Ether、08年生まれ広州の開発者。コードを書き、ツールを作成、システムを研究、学びを公開記録するアーカイブサイトです。", meta: "学習 / 開発 / 共有",
      workKicker: "厳選プロジェクト", workTitle: "試行錯誤しながら制作", projectOne: "予算と用途からPC構成を生成CLIツール", projectTwo: "AIキャラリアルタイム感情SDK", projectThree: "ローカルOllama WeChatチャット分析ツール", projectFour: "WeChatデータ復号・年間レポートツール", projectFive: "ゲーム・グラボキャッシュクリーナースクリプト", projectSix: "クリエイター公開成長メソッド", inProgress: "開発中", ongoing: "継続更新",
      signalKicker: "今注目", signalTitle: "現在掘り下げている分野", signalOne: "AIツール、創作フロー、実用小製品", signalTwo: "物語・リスク・市場人間行動", signalThree: "全プロジェクト記録をXに投稿",
      xCopy: "Xに最新のツール・考え・開発ログがあります", xCta: "フォローする ↗", connectKicker: "外部リンク", connectTitle: "輝くものを共に作ろう", friendCopy: "相互リンク希望はXからDMください。", langBtn: "Esp"
    },
    es: {
      navWork: "PROYECTOS", navSignals: "SEÑALES", navAbout: "SOBRE MÍ", navConnect: "CONTACTO",
      status: "EN DIRECTO DESDE GUANGZHOU", heroCopy: "08 / EN DESARROLLO.<br>Explorando IA, herramientas, mercados y proyectos.", scroll: "DESPLÁZATE ABAJO",
      aboutKicker: "EL COMIENZO", statement: "No soy experto.<br>Solo tengo curiosidad infinita.", aboutCopy: "Soy MIA_Ether, un desarrollador nacido en 08 residente en Guangzhou. Escribo código, construyo herramientas y documento todo mi aprendizaje públicamente.", meta: "APRENDER / CREAR / COMPARTIR",
      workKicker: "TRABAJOS SELECCIONADOS", workTitle: "Creado mientras experimento.", projectOne: "Herramienta CLI para armar PC según presupuesto.", projectTwo: "SDK de emociones en tiempo real para personajes IA.", projectThree: "Analizador de chats de WeChat con Ollama local.", projectFour: "Herramienta de descifrado y reportes de WeChat.", projectFive: "Script limpiador de cachés de videojuegos.", projectSix: "Metodología de crecimiento para creadores.", inProgress: "EN DESARROLLO", ongoing: "ACTUALIZACIÓN CONTINUA",
      signalKicker: "FOCO ACTUAL", signalTitle: "Áreas en las que profundizo ahora.", signalOne: "Herramientas IA, flujos creativos, mini productos útiles.", signalTwo: "Narrativa, riesgo, comportamiento de mercado humano.", signalThree: "Todos mis registros en X.",
      xCopy: "Mis últimas novedades en X: herramientas e ideas.", xCta: "SÍGUEME ↗", connectKicker: "ENLACES", connectTitle: "Creemos algo destacado juntos.", friendCopy: "¿Intercambio enlaces? Escríbeme por X.", langBtn: "FR"
    },
    fr: {
      navWork: "TRAVAUX", navSignals: "SIGNALES", navAbout: "À PROPOS", navConnect: "CONTACT",
      status: "DIRECT DE GUANGZHOU", heroCopy: "08 / EN COURS DE DÉV.<br>Explorer l'IA, outils, marchés et projets.", scroll: "FAITES DÉFILER",
      aboutKicker: "DÉBUT", statement: "Pas un expert.<br>Juste une curiosité sans fin.", aboutCopy: "Je suis MIA_Ether, développeur né en 08 à Guangzhou. Je code, crée des outils et documente tout mon apprentissage en public.", meta: "APPRENDRE / CRÉER / PARTAGER",
      workKicker: "PROJETS SÉLECTIONNÉS", workTitle: "Réalisés en expérimentant.", projectOne: "Outil CLI de configuration PC selon budget.", projectTwo: "SDK d'émotions temps réel pour personnages IA.", projectThree: "Analyseur de discussions WeChat avec Ollama local.", projectFour: "Outil de décryptage & bilans WeChat.", projectFive: "Script nettoyant cache jeux & GPU.", projectSix: "Méthode de croissance créateur.", inProgress: "EN DÉVELOPPEMENT", ongoing: "MAJ PERMANENTE",
      signalKicker: "ACTUEL", signalTitle: "Ce sur quoi je travaille aujourd'hui.", signalOne: "Outils IA, flux créatifs, petits outils utiles.", signalTwo: "Récits, risques, comportements marchands humains.", signalThree: "Tous mes logs sur X.",
      xCopy: "Mes dernières nouveautés sur X.", xCta: "ME SUIVRE ↗", connectKicker: "LIENS", connectTitle: "Construisons quelque chose remarquable ensemble.", friendCopy: "Échange de liens ? Message-moi sur X.", langBtn: "DE"
    },
    de: {
      navWork: "PROJEKTE", navSignals: "SIGNALE", navAbout: "ÜBER MICH", navConnect: "KONTAKT",
      status: "LIVE AUS GUANGZHOU", heroCopy: "08 / IN ENTWICKLUNG.<br>Erkundung von KI, Tools, Märkten & Projekten.", scroll: "RUNTER SCROLLEN",
      aboutKicker: "DER ANFANG", statement: "Kein Experte.<br>Nur endlos neugierig.", aboutCopy: "Ich bin MIA_Ether, ein 08 geborener Entwickler aus Guangzhou. Ich programmiere, baue Tools und dokumentiere meinen gesamten Lernweg öffentlich.", meta: "LERNEN / BAUEN / TEILEN",
      workKicker: "AUSGEWÄHLTE ARBEITEN", workTitle: "Entstanden durch Experimente.", projectOne: "CLI-Tool für PC-Konfiguration nach Budget.", projectTwo: "Echtzeit-Emotions-SDK für KI-Avatare.", projectThree: "Lokaler Ollama WeChat Chat-Analyser.", projectFour: "WeChat Entschlüsselungs & Jahresreport Tool.", projectFive: "Cache-Reiniger Skript für Spiele & Grafikkarten.", projectSix: "Wachstums-Methode für Creator.", inProgress: "IN ENTWICKLUNG", ongoing: "LAUFENDE UPDATES",
      signalKicker: "AKTUELLER FOKUS", signalTitle: "Worauf ich mich jetzt vertiefe.", signalOne: "KI-Tools, kreative Workflows, praktische Mini-Produkte.", signalTwo: "Erzählungen, Risiken, menschliches Marktverhalten.", signalThree: "Alle Projektlogs auf X.",
      xCopy: "Neueste Updates auf X: Tools & Ideen.", xCta: "FOLGE MIR ↗", connectKicker: "LINKS", connectTitle: "Lass uns etwas Herausragendes bauen.", friendCopy: "Linktausch? Schreib mir auf X.", langBtn: "中文"
    }
  };

  // 语言切换顺序循环：zh → en → ja → es → fr → de
  const langOrder = ["zh", "en", "ja", "es", "fr", "de"];
  function switchNextLang() {
    const curr = root.dataset.lang || "zh";
    const idx = langOrder.indexOf(curr);
    const nextIdx = (idx + 1) % langOrder.length;
    const nextLang = langOrder[nextIdx];
    setLanguage(nextLang);
  }

  const setLanguage = (lang) => {
    const active = text[lang] ? lang : "zh";
    root.lang = active === "zh" ? "zh-CN" : active;
    root.dataset.lang = active;
    $$('[data-i18n]').forEach((el) => {
      if (text[active][el.dataset.i18n]) el.innerHTML = text[active][el.dataset.i18n];
    });
    $("#lang").textContent = text[active].langBtn;
    $("#lang").setAttribute("aria-label", `切换语言 / Switch Language`);
    localStorage.setItem("mia-language", active);
  };

  // 初始化语言
  setLanguage(localStorage.getItem("mia-language") || "zh");
  // 替换原切换逻辑，循环六国语言
  $("#lang").addEventListener("click", switchNextLang);

  // 下面原有代码完全保留，不用修改
  root.dataset.theme = localStorage.getItem("mia-theme") || "dark";
  $("#theme").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("mia-theme", root.dataset.theme);
  });
  const nav = $("#nav"), menu = $("#menu");
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
  $$("a", nav).forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));
  const progress = $("#progress"), header = $("#topbar");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
    header.classList.toggle("scrolled", scrollY > 30);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  $("#top").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  const reveal = new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }), { threshold: .12 });
  $$(".reveal").forEach((el) => reveal.observe(el));
  $$(".hero .reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), 240 + i * 130));
  if (!matchMedia("(hover: none), (pointer: coarse)").matches) {
    const cursor = $("#cursor");
    addEventListener("pointermove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });
    $$("a, button, .work-card, .signal").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("hot"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hot"));
    });
  }
  const canvas = $("#universe");
  if (canvas && !matchMedia("(prefers-reduced-motion: reduce)")) {
    const ctx = canvas.getContext("canvas");
    let width, height, dots = [], pointer = { x: -1000, y: -1000 };
    const resize = () => {
      width = canvas.width = innerWidth * devicePixelRatio;
      height = canvas.height = innerHeight * devicePixelRatio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      dots = Array.from({ length: Math.min(105, Math.floor(innerWidth / 12)) }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: (Math.random() - .5) * .25,
        vy: (Math.random() - .25),
        r: Math.random() * 1.6 + .3
      }));
    };
    addEventListener("resize", resize);
    addEventListener("pointermove", (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    });
    resize();
    const draw = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      dots.forEach((dot, i) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > innerWidth) dot.vx *= -1;
        if (dot.y < 0 || dot.y > innerHeight) dot.vy *= -1;
        const pd = Math.hypot(dot.x - pointer.x, dot.y - pointer.y);
        if (pd < 150) {
          dot.x += (dot.x - pointer.x) * .006;
          dot.y += (dot.y - pointer.y) * .006;
        }
        ctx.fillStyle = i % 7 === 0 ? "#ff6eac" : "#84ffcb";
        ctx.globalAlpha = .62;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const other = dots[j], d = Math.hypot(dot.x - other.x, dot.y - other.y);
          if (d < 118) {
            ctx.strokeStyle = i % 8 === 0 ? "#ff6eac" : "#84ffcb";
            ctx.globalAlpha = .12 * (1 - d / 118);
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };
    draw();
  }
})();