/**
 * MIA_Ether — Personal Universe v2
 * Theme · Lang · Terminal · Filters · Cursor · Progress · Stardust · GitHub API
 */
(() => {
  "use strict";

  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ========== i18n ==========
  const dict = {
    en: {
      navAbout: "About", navBuilding: "Building", navProjects: "Projects", navLab: "Lab", navGitHub: "GitHub",
      heroKicker: "STATUS // ONLINE", heroTagline: "AI · Quant · Agents",
      heroSub: "Builder in progress · Based in Guangzhou",
      heroCtaExplore: "Explore", heroCtaProjects: "Projects", heroCtaGithub: "GitHub",
      aboutTitle: "About", aboutLead: "Who is MIA_Ether",
      aboutP1: "I work at the intersection of AI, quant research, and agent engineering. Most of my current work is built in public.",
      aboutP2: "Right now I care about turning curiosity into systems that run: research → plan → code → test → review → iterate.",
      identityAI: "AI", identityAINote: "Models, tools, interfaces",
      identityQuant: "Quant", identityQuantNote: "Markets, data, risk",
      identityAgents: "Agents", identityAgentsNote: "Workflows, automation, review",
      buildingTitle: "Currently Building", buildingDesc: "A live research and paper-trading workbench focused on BTC/ETH.",
      pipeMarket: "Market Data", pipeHint: "live / historical",
      pipeStrategy: "Strategy", pipeHint2: "rules / regimes",
      pipeRisk: "Risk", pipeHint3: "limits / drawdown",
      pipeExecution: "Execution", pipeHint4: "paper / simulation",
      pipePortfolio: "Portfolio", pipeHint5: "exposure / review",
      pipeWorkbench: "Workbench", pipeHint6: "tests / iterations",
      featuredTitle: "Featured Project", featuredDesc: "The most active public project right now.",
      featuredMeta: "BTC / ETH · Quantitative Research · Backtesting · Paper Trading",
      featuredBadge: "122 Tests Passing",
      featuredBody: "Research, backtest, and review quant strategies with a disciplined risk-first workflow. This repo contains core modules for market data, strategies, execution, portfolio, and risk.",
      featTagBacktest: "Backtesting", featTagPaper: "Paper Trading", featTagRisk: "Risk",
      featTagPortfolio: "Portfolio", featTagResearch: "Quant Research",
      featuredCta: "View Repository", featuredNote: "Not live trading. Not financial advice.",
      projectsTitle: "All Projects", projectsDesc: "Public repositories from GitHub, sorted by recently updated.",
      filterAll: "All", loading: "Loading repositories…",
      activityTitle: "GitHub Activity", activityRepos: "Public Repositories", activityStars: "Stars",
      activityForks: "Forks", activityUpdated: "Latest Update",
      labTitle: "Agent Engineering", labDesc: "This is how I work with agents.",
      wfResearch: "Research", wfPlan: "Plan", wfCode: "Code", wfTest: "Test", wfReview: "Review", wfIterate: "Iterate",
      labNote: "I use tools like Hermes Agent and GLM-5.2 as part of that loop, not as a replacement for judgment.",
      contactTitle: "Contact", contactDesc: "Connect across the web.",
      footerConnect: "Connect"
    },
    zh: {
      navAbout: "关于", navBuilding: "构建中", navProjects: "项目", navLab: "实验室", navGitHub: "GitHub",
      heroKicker: "状态 // 在线", heroTagline: "AI · 量化 · Agent",
      heroSub: "持续构建中 · 来自广州",
      heroCtaExplore: "探索", heroCtaProjects: "项目", heroCtaGithub: "GitHub",
      aboutTitle: "关于", aboutLead: "MIA_Ether 是谁",
      aboutP1: "在 AI、量化研究和 Agent 工程的交叉领域工作。当前大部分工作都是公开的。",
      aboutP2: "现在最关心的是把好奇心变成能跑起来的系统：研究 → 计划 → 编码 → 测试 → 评审 → 迭代。",
      identityAI: "AI", identityAINote: "模型、工具、界面",
      identityQuant: "量化", identityQuantNote: "市场、数据、风险",
      identityAgents: "Agent", identityAgentsNote: "工作流、自动化、评审",
      buildingTitle: "当前构建", buildingDesc: "专注于 BTC/ETH 的实时研究与量化交易工作台。",
      pipeMarket: "市场数据", pipeHint: "实时 / 历史",
      pipeStrategy: "策略", pipeHint2: "规则 / 机制",
      pipeRisk: "风控", pipeHint3: "限制 / 回撤",
      pipeExecution: "执行", pipeHint4: "模拟 / 仿真",
      pipePortfolio: "投资组合", pipeHint5: "敞口 / 复盘",
      pipeWorkbench: "工作台", pipeHint6: "测试 / 迭代",
      featuredTitle: "精选项目", featuredDesc: "当前最活跃的公开项目。",
      featuredMeta: "BTC / ETH · 量化研究 · 回测 · 模拟交易",
      featuredBadge: "122 测试通过",
      featuredBody: "以严格的风控优先流程研究、回测和评审量化策略。该仓库包含市场数据、策略、执行、投资组合和风控的核心模块。",
      featTagBacktest: "回测", featTagPaper: "模拟交易", featTagRisk: "风控",
      featTagPortfolio: "投资组合", featTagResearch: "量化研究",
      featuredCta: "查看仓库", featuredNote: "非实盘交易。不构成投资建议。",
      projectsTitle: "所有项目", projectsDesc: "来自 GitHub 的公开仓库，按最近更新排序。",
      filterAll: "全部", loading: "正在加载仓库…",
      activityTitle: "GitHub 活动", activityRepos: "公开仓库", activityStars: "Stars",
      activityForks: "Forks", activityUpdated: "最近更新",
      labTitle: "Agent 工程", labDesc: "这是我使用 Agent 的方式。",
      wfResearch: "研究", wfPlan: "计划", wfCode: "编码", wfTest: "测试", wfReview: "评审", wfIterate: "迭代",
      labNote: "我使用 Hermes Agent 和 GLM-5.2 等工具作为该循环的一部分，而非替代判断。",
      contactTitle: "联系", contactDesc: "在网络上建立连接。",
      footerConnect: "连接"
    },
    ru: {
      navAbout: "Обо мне", navBuilding: "Разработка", navProjects: "Проекты", navLab: "Лаборатория", navGitHub: "GitHub",
      heroKicker: "СТАТУС // ОНЛАЙН", heroTagline: "AI · Кванты · Агенты",
      heroSub: "В процессе · Гуанчжоу",
      heroCtaExplore: "Исследовать", heroCtaProjects: "Проекты", heroCtaGithub: "GitHub",
      aboutTitle: "Обо мне", aboutLead: "Кто такой MIA_Ether",
      aboutP1: "Работаю на стыке AI, количественных исследований и агентной инженерии. Большая часть текущей работы публична.",
      aboutP2: "Сейчас главное — превратить любопытство в работающие системы: исследование → план → код → тест → обзор → итерация.",
      identityAI: "AI", identityAINote: "Модели, инструменты, интерфейсы",
      identityQuant: "Кванты", identityQuantNote: "Рынки, данные, риски",
      identityAgents: "Агенты", identityAgentsNote: "Workflows, автоматизация, обзор",
      buildingTitle: "Сейчас в работе", buildingDesc: "Жоя исследовательская и папер-трейдинговая платформа для BTC/ETH.",
      pipeMarket: "Данные рынка", pipeHint: "живые / исторические",
      pipeStrategy: "Стратегия", pipeHint2: "правила / режимы",
      pipeRisk: "Риск", pipeHint3: "лимиты / просадка",
      pipeExecution: "Исполнение", pipeHint4: "папер / симуляция",
      pipePortfolio: "Портфель", pipeHint5: "экспозиция / обзор",
      pipeWorkbench: "Workbench", pipeHint6: "тесты / итерации",
      featuredTitle: "Избранный проект", featuredDesc: "Самый активный публичный проект сейчас.",
      featuredMeta: "BTC / ETH · Количественные исследования · Бэктестинг · Папер-трейдинг",
      featuredBadge: "122 теста пройдены",
      featuredBody: "Исследование, бэктестинг и обзор квантовых стратегий с дисциплинированным workflow. Репозиторий содержит модули для данных, стратегий, исполнения, портфеля и рисков.",
      featTagBacktest: "Бэктестинг", featTagPaper: "Папер-трейдинг", featTagRisk: "Риск",
      featTagPortfolio: "Портфель", featTagResearch: "Квант-исследования",
      featuredCta: "Открыть репозиторий", featuredNote: "Не живой трейдинг. Не финансовый совет.",
      projectsTitle: "Все проекты", projectsDesc: "Публичные репозитории из GitHub, отсортированные по дате обновления.",
      filterAll: "Все", loading: "Загрузка репозиториев…",
      activityTitle: "Активность GitHub", activityRepos: "Публичные репозитории", activityStars: "Звёзды",
      activityForks: "Форки", activityUpdated: "Последнее обновление",
      labTitle: "Агентная инженерия", labDesc: "Как я работаю с агентами.",
      wfResearch: "Исследование", wfPlan: "План", wfCode: "Код", wfTest: "Тест", wfReview: "Обзор", wfIterate: "Итерация",
      labNote: "Использую Hermes Agent и GLM-5.2 как часть цикла, а не замену суждения.",
      contactTitle: "Контакты", contactDesc: "Связь через сеть.",
      footerConnect: "Связь"
    },
    it: {
      navAbout: "Chi sono", navBuilding: "In costruzione", navProjects: "Progetti", navLab: "Lab", navGitHub: "GitHub",
      heroKicker: "STATO // ONLINE", heroTagline: "AI · Quant · Agenti",
      heroSub: "In costruzione · Guangzhou",
      heroCtaExplore: "Esplora", heroCtaProjects: "Progetti", heroCtaGithub: "GitHub",
      aboutTitle: "Chi sono", aboutLead: "Chi è MIA_Ether",
      aboutP1: "Lavoro all'intersezione tra AI, ricerca quantitativa e agent engineering. La maggior parte del mio lavoro è pubblica.",
      aboutP2: "Ora mi interesso a trasformare la curiosità in sistemi che funzionano: ricerca → piano → codice → test → review → iterare.",
      identityAI: "AI", identityAINote: "Modelli, strumenti, interfacce",
      identityQuant: "Quant", identityQuantNote: "Mercati, dati, rischio",
      identityAgents: "Agenti", identityAgentsNote: "Workflows, automazione, review",
      buildingTitle: "In costruzione", buildingDesc: "Un workbench live per ricerca e paper trading su BTC/ETH.",
      pipeMarket: "Dati di mercato", pipeHint: "live / storici",
      pipeStrategy: "Strategia", pipeHint2: "regole / regimi",
      pipeRisk: "Rischio", pipeHint3: "limiti / drawdown",
      pipeExecution: "Esecuzione", pipeHint4: "paper / simulazione",
      pipePortfolio: "Portafoglio", pipeHint5: "esposizione / review",
      pipeWorkbench: "Workbench", pipeHint6: "test / iterazioni",
      featuredTitle: "Progetto in evidenza", featuredDesc: "Il progetto pubblico più attivo ora.",
      featuredMeta: "BTC / ETH · Ricerca quantitativa · Backtesting · Paper Trading",
      featuredBadge: "122 test superati",
      featuredBody: "Ricerca, backtest e review di strategie quant con un workflow risk-first. Il repo contiene moduli per dati, strategie, esecuzione, portafoglio e rischio.",
      featTagBacktest: "Backtesting", featTagPaper: "Paper Trading", featTagRisk: "Rischio",
      featTagPortfolio: "Portafoglio", featTagResearch: "Ricerca Quant",
      featuredCta: "Vedi repository", featuredNote: "Non trading live. Non consulenza finanziaria.",
      projectsTitle: "Tutti i progetti", projectsDesc: "Repository pubblici da GitHub, ordinati per aggiornamento.",
      filterAll: "Tutti", loading: "Caricamento repository…",
      activityTitle: "Attività GitHub", activityRepos: "Repository pubblici", activityStars: "Stelle",
      activityForks: "Fork", activityUpdated: "Ultimo aggiornamento",
      labTitle: "Agent Engineering", labDesc: "Come lavoro con gli agenti.",
      wfResearch: "Ricerca", wfPlan: "Piano", wfCode: "Codice", wfTest: "Test", wfReview: "Review", wfIterate: "Iterare",
      labNote: "Uso Hermes Agent e GLM-5.2 come parte del ciclo, non come sostituto al giudizio.",
      contactTitle: "Contatti", contactDesc: "Connettiti attraverso il web.",
      footerConnect: "Connetti"
    },
    es: {
      navAbout: "Sobre mí", navBuilding: "En construcción", navProjects: "Proyectos", navLab: "Lab", navGitHub: "GitHub",
      heroKicker: "ESTADO // EN LÍNEA", heroTagline: "AI · Quant · Agentes",
      heroSub: "En construcción · Guangzhou",
      heroCtaExplore: "Explorar", heroCtaProjects: "Proyectos", heroCtaGithub: "GitHub",
      aboutTitle: "Sobre mí", aboutLead: "Quién es MIA_Ether",
      aboutP1: "Trabajo en la intersección de AI, investigación cuantitativa e ingeniería de agentes. La mayor parte de mi trabajo es público.",
      aboutP2: "Ahora me interesa convertir la curiosidad en sistemas que funcionan: investigación → plan → código → prueba → revisión → iterar.",
      identityAI: "AI", identityAINote: "Modelos, herramientas, interfaces",
      identityQuant: "Quant", identityQuantNote: "Mercados, datos, riesgo",
      identityAgents: "Agentes", identityAgentsNote: "Workflows, automatización, revisión",
      buildingTitle: "En construcción", buildingDesc: "Un workbench en vivo para investigación y paper trading en BTC/ETH.",
      pipeMarket: "Datos de mercado", pipeHint: "en vivo / históricos",
      pipeStrategy: "Estrategia", pipeHint2: "regímenes / reglas",
      pipeRisk: "Riesgo", pipeHint3: "límites / drawdown",
      pipeExecution: "Ejecución", pipeHint4: "paper / simulación",
      pipePortfolio: "Portafolio", pipeHint5: "exposición / revisión",
      pipeWorkbench: "Workbench", pipeHint6: "pruebas / iteraciones",
      featuredTitle: "Proyecto destacado", featuredDesc: "El proyecto público más activo ahora.",
      featuredMeta: "BTC / ETH · Investigación cuantitativa · Backtesting · Paper Trading",
      featuredBadge: "122 pruebas pasadas",
      featuredBody: "Investiga, backtestea y revisa estrategias cuant con un workflow risk-first. El repo contiene módulos para datos, estrategias, ejecución, portafolio y riesgo.",
      featTagBacktest: "Backtesting", featTagPaper: "Paper Trading", featTagRisk: "Riesgo",
      featTagPortfolio: "Portafolio", featTagResearch: "Investigación Cuant",
      featuredCta: "Ver repositorio", featuredNote: "No trading en vivo. No consejo financiero.",
      projectsTitle: "Todos los proyectos", projectsDesc: "Repositorios públicos de GitHub, ordenados por actualización.",
      filterAll: "Todos", loading: "Cargando repositorios…",
      activityTitle: "Actividad GitHub", activityRepos: "Repositorios públicos", activityStars: "Estrellas",
      activityForks: "Forks", activityUpdated: "Última actualización",
      labTitle: "Ingeniería de Agentes", labDesc: "Cómo trabajo con agentes.",
      wfResearch: "Investigación", wfPlan: "Plan", wfCode: "Código", wfTest: "Prueba", wfReview: "Revisión", wfIterate: "Iterar",
      labNote: "Uso Hermes Agent y GLM-5.2 como parte del ciclo, no como reemplazo del juicio.",
      contactTitle: "Contacto", contactDesc: "Conecta a través de la web.",
      footerConnect: "Conectar"
    },
    ja: {
      navAbout: "について", navBuilding: "構築中", navProjects: "プロジェクト", navLab: "ラボ", navGitHub: "GitHub",
      heroKicker: "ステータス // オンライン", heroTagline: "AI · クオント · エージェント",
      heroSub: "構築中 · 広州",
      heroCtaExplore: "探索", heroCtaProjects: "プロジェクト", heroCtaGithub: "GitHub",
      aboutTitle: "について", aboutLead: "MIA_Ether とは",
      aboutP1: "AI、クオンタティブリサーチ、エージェントエンジニアリングの交差点で働いています。現在の作業の大部分は公開されています。",
      aboutP2: "今は好奇心を動くシステムに変えることに興味があります：リサーチ → 計画 → コード → テスト → レビュー → 反復。",
      identityAI: "AI", identityAINote: "モデル、ツール、インターフェース",
      identityQuant: "クオント", identityQuantNote: "市場、データ、リスク",
      identityAgents: "エージェント", identityAgentsNote: "ワークフロー、自動化、レビュー",
      buildingTitle: "現在構築中", buildingDesc: "BTC/ETH に特化したライブリサーチとペーパートレーディングのワークベンチ。",
      pipeMarket: "市場データ", pipeHint: "ライブ / 履歴",
      pipeStrategy: "ストラテジー", pipeHint2: "ルール / レジーム",
      pipeRisk: "リスク", pipeHint3: "リミット / ドローダウン",
      pipeExecution: "実行", pipeHint4: "ペーパー / シミュレーション",
      pipePortfolio: "ポートフォリオ", pipeHint5: "エクスポージャー / レビュー",
      pipeWorkbench: "ワークベンチ", pipeHint6: "テスト / 反復",
      featuredTitle: "注目プロジェクト", featuredDesc: "現在最も活発な公開プロジェクト。",
      featuredMeta: "BTC / ETH · クオンタティブリサーチ · バックテスト · ペーパートレーディング",
      featuredBadge: "122 テスト合格",
      featuredBody: "規律あるリスクファーストのワークフローでクオントストラテジーをリサーチ、バックテスト、レビュー。このリポジトリには、市場データ、ストラテジー、実行、ポートフォリオ、リスクのコアモジュールが含まれています。",
      featTagBacktest: "バックテスト", featTagPaper: "ペーパートレーディング", featTagRisk: "リスク",
      featTagPortfolio: "ポートフォリオ", featTagResearch: "クオントリサーチ",
      featuredCta: "リポジトリを見る", featuredNote: "ライブトレーディングではありません。財務アドバイスではありません。",
      projectsTitle: "すべてのプロジェクト", projectsDesc: "GitHub の公開リポジトリ、更新順。",
      filterAll: "すべて", loading: "リポジトリを読み込み中…",
      activityTitle: "GitHub アクティビティ", activityRepos: "公開リポジトリ", activityStars: "スター",
      activityForks: "フォーク", activityUpdated: "最終更新",
      labTitle: "エージェントエンジニアリング", labDesc: "エージェントとの働き方。",
      wfResearch: "リサーチ", wfPlan: "計画", wfCode: "コード", wfTest: "テスト", wfReview: "レビュー", wfIterate: "反復",
      labNote: "Hermes Agent や GLM-5.2 を判断の代わりではなく、ループの一部として使用しています。",
      contactTitle: "コンタクト", contactDesc: "ウェブでつながる。",
      footerConnect: "つながる"
    },
    pt: {
      navAbout: "Sobre", navBuilding: "Em construção", navProjects: "Projetos", navLab: "Lab", navGitHub: "GitHub",
      heroKicker: "STATUS // ONLINE", heroTagline: "AI · Quant · Agentes",
      heroSub: "Em construção · Guangzhou",
      heroCtaExplore: "Explorar", heroCtaProjects: "Projetos", heroCtaGithub: "GitHub",
      aboutTitle: "Sobre", aboutLead: "Quem é MIA_Ether",
      aboutP1: "Trabalho na interseção de AI, pesquisa quantitativa e engenharia de agentes. A maior parte do meu trabalho é pública.",
      aboutP2: "Agora me interesso em transformar curiosidade em sistemas que funcionam: pesquisa → plano → código → teste → revisão → iterar.",
      identityAI: "AI", identityAINote: "Modelos, ferramentas, interfaces",
      identityQuant: "Quant", identityQuantNote: "Mercados, dados, risco",
      identityAgents: "Agentes", identityAgentsNote: "Workflows, automação, revisão",
      buildingTitle: "Em construção", buildingDesc: "Um workbench ao vivo para pesquisa e paper trading em BTC/ETH.",
      pipeMarket: "Dados de mercado", pipeHint: "ao vivo / históricos",
      pipeStrategy: "Estratégia", pipeHint2: "regras / regimes",
      pipeRisk: "Risco", pipeHint3: "limites / drawdown",
      pipeExecution: "Execução", pipeHint4: "paper / simulação",
      pipePortfolio: "Portfólio", pipeHint5: "exposição / revisão",
      pipeWorkbench: "Workbench", pipeHint6: "testes / iterações",
      featuredTitle: "Projeto em destaque", featuredDesc: "O projeto público mais ativo agora.",
      featuredMeta: "BTC / ETH · Pesquisa Quantitativa · Backtesting · Paper Trading",
      featuredBadge: "122 testes passando",
      featuredBody: "Pesquiste, backteste e revise estratégias quant com um workflow risk-first. O repo contém módulos para dados, estratégias, execução, portfólio e risco.",
      featTagBacktest: "Backtesting", featTagPaper: "Paper Trading", featTagRisk: "Risco",
      featTagPortfolio: "Portfólio", featTagResearch: "Pesquisa Quant",
      featuredCta: "Ver repositório", featuredNote: "Não é trading ao vivo. Não é conselho financeiro.",
      projectsTitle: "Todos os projetos", projectsDesc: "Repositórios públicos do GitHub, ordenados por atualização.",
      filterAll: "Todos", loading: "Carregando repositórios…",
      activityTitle: "Atividade GitHub", activityRepos: "Repositórios públicos", activityStars: "Estrelas",
      activityForks: "Forks", activityUpdated: "Última atualização",
      labTitle: "Engenharia de Agentes", labDesc: "Como trabalho com agentes.",
      wfResearch: "Pesquisa", wfPlan: "Plano", wfCode: "Código", wfTest: "Teste", wfReview: "Revisão", wfIterate: "Iterar",
      labNote: "Uso Hermes Agent e GLM-5.2 como parte do ciclo, não como substituto do julgamento.",
      contactTitle: "Contato", contactDesc: "Conecte-se pela web.",
      footerConnect: "Conectar"
    },
    ko: {
      navAbout: "소개", navBuilding: "구축 중", navProjects: "프로젝트", navLab: "랩", navGitHub: "GitHub",
      heroKicker: "상태 // 온라인", heroTagline: "AI · 퀀트 · 에이전트",
      heroSub: "구축 중 · 광저우",
      heroCtaExplore: "탐색", heroCtaProjects: "프로젝트", heroCtaGithub: "GitHub",
      aboutTitle: "소개", aboutLead: "MIA_Ether 는 누구인가",
      aboutP1: "AI, 퀀트 연구, 에이전트 엔지니어링의 교차점에서 일하고 있습니다. 현재 작업의 대부분은 공개되어 있습니다.",
      aboutP2: "지금은 호기심을 작동하는 시스템으로 바꾸는 데 관심이 있습니다: 연구 → 계획 → 코드 → 테스트 → 리뷰 → 반복.",
      identityAI: "AI", identityAINote: "모델, 도구, 인터페이스",
      identityQuant: "퀀트", identityQuantNote: "시장, 데이터, 리스크",
      identityAgents: "에이전트", identityAgentsNote: "워크플로우, 자동화, 리뷰",
      buildingTitle: "현재 구축 중", buildingDesc: "BTC/ETH 중심의 라이브 리서치 및 페이퍼 트레이딩 워크벤치.",
      pipeMarket: "시장 데이터", pipeHint: "라이브 / 과거",
      pipeStrategy: "전략", pipeHint2: "규칙 / 레짐",
      pipeRisk: "리스크", pipeHint3: "한도 / 드로다운",
      pipeExecution: "실행", pipeHint4: "페이퍼 / 시뮬레이션",
      pipePortfolio: "포트폴리오", pipeHint5: "노출 / 리뷰",
      pipeWorkbench: "워크벤치", pipeHint6: "테스트 / 반복",
      featuredTitle: "추천 프로젝트", featuredDesc: "현재 가장 활발한 공개 프로젝트.",
      featuredMeta: "BTC / ETH · 퀀트 연구 · 백테스트 · 페이퍼 트레이딩",
      featuredBadge: "122 테스트 통과",
      featuredBody: "규율 있는 리스크 퍼스트 워크플로우로 퀀트 전략을 연구, 백테스트, 리뷰합니다. 이 저장소에는 시장 데이터, 전략, 실행, 포트폴리오, 리스크의 코어 모듈이 포함되어 있습니다.",
      featTagBacktest: "백테스트", featTagPaper: "페이퍼 트레이딩", featTagRisk: "리스크",
      featTagPortfolio: "포트폴리오", featTagResearch: "퀀트 연구",
      featuredCta: "저장소 보기", featuredNote: "라이브 트레이딩이 아닙니다. 금융 조언이 아닙니다.",
      projectsTitle: "모든 프로젝트", projectsDesc: "GitHub 공개 저장소, 업데이트순.",
      filterAll: "모두", loading: "저장소 로딩 중…",
      activityTitle: "GitHub 활동", activityRepos: "공개 저장소", activityStars: "스타",
      activityForks: "포크", activityUpdated: "최근 업데이트",
      labTitle: "에이전트 엔지니어링", labDesc: "에이전트와 일하는 방법.",
      wfResearch: "연구", wfPlan: "계획", wfCode: "코드", wfTest: "테스트", wfReview: "리뷰", wfIterate: "반복",
      labNote: "Hermes Agent와 GLM-5.2를 판단의 대체가 아닌 루프의 일부로 사용합니다.",
      contactTitle: "연락처", contactDesc: "웹에서 연결하세요.",
      footerConnect: "연결"
    },
    fr: {
      navAbout: "À propos", navBuilding: "En construction", navProjects: "Projets", navLab: "Lab", navGitHub: "GitHub",
      heroKicker: "STATUT // EN LIGNE", heroTagline: "AI · Quant · Agents",
      heroSub: "En construction · Guangzhou",
      heroCtaExplore: "Explorer", heroCtaProjects: "Projets", heroCtaGithub: "GitHub",
      aboutTitle: "À propos", aboutLead: "Qui est MIA_Ether",
      aboutP1: "Je travaille à l'intersection de la AI, de la recherche quantitative et de l'ingénierie des agents. La majeure partie de mon travail est publique.",
      aboutP2: "Maintenant je m'intéresse à transformer la curiosité en systèmes qui fonctionnent : recherche → plan → code → test → revue → itérer.",
      identityAI: "AI", identityAINote: "Modèles, outils, interfaces",
      identityQuant: "Quant", identityQuantNote: "Marchés, données, risque",
      identityAgents: "Agents", identityAgentsNote: "Workflows, automatisation, revue",
      buildingTitle: "En construction", buildingDesc: "Un workbench live pour la recherche et le paper trading sur BTC/ETH.",
      pipeMarket: "Données de marché", pipeHint: "live / historiques",
      pipeStrategy: "Stratégie", pipeHint2: "règles / régimes",
      pipeRisk: "Risque", pipeHint3: "limites / drawdown",
      pipeExecution: "Exécution", pipeHint4: "paper / simulation",
      pipePortfolio: "Portefeuille", pipeHint5: "exposition / revue",
      pipeWorkbench: "Workbench", pipeHint6: "tests / itérations",
      featuredTitle: "Projet vedette", featuredDesc: "Le projet public le plus actif en ce moment.",
      featuredMeta: "BTC / ETH · Recherche quantitative · Backtesting · Paper Trading",
      featuredBadge: "122 tests réussis",
      featuredBody: "Recherchez, backtestez et révisez des stratégies quant avec un workflow risk-first. Le repo contient des modules pour les données, stratégies, exécution, portefeuille et risque.",
      featTagBacktest: "Backtesting", featTagPaper: "Paper Trading", featTagRisk: "Risque",
      featTagPortfolio: "Portefeuille", featTagResearch: "Recherche Quant",
      featuredCta: "Voir le repo", featuredNote: "Pas de trading live. Pas de conseil financier.",
      projectsTitle: "Tous les projets", projectsDesc: "Dépôts publics de GitHub, triés par mise à jour.",
      filterAll: "Tous", loading: "Chargement des dépôts…",
      activityTitle: "Activité GitHub", activityRepos: "Dépôts publics", activityStars: "Étoiles",
      activityForks: "Forks", activityUpdated: "Dernière mise à jour",
      labTitle: "Ingénierie des Agents", labDesc: "Comment je travaille avec les agents.",
      wfResearch: "Recherche", wfPlan: "Plan", wfCode: "Code", wfTest: "Test", wfReview: "Revue", wfIterate: "Itérer",
      labNote: "J'utilise Hermes Agent et GLM-5.2 comme partie du cycle, pas comme remplacement du jugement.",
      contactTitle: "Contact", contactDesc: "Connectez-vous via le web.",
      footerConnect: "Connecter"
    }
  };

  const langNames = { en: "EN", zh: "中", ru: "RU", it: "IT", es: "ES", ja: "JA", pt: "PT", ko: "KO", fr: "FR" };

  function applyLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : lang);
    const t = dict[lang] || dict.en;
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] != null) el.textContent = t[key];
    });
    const label = $("#langLabel");
    if (label) label.textContent = langNames[lang] || "EN";
    $$(".lang-option").forEach((b) => b.classList.toggle("active", b.getAttribute("data-lang") === lang));
    localStorage.setItem("mia-lang", lang);
  }

  // Lang panel
  const langPanel = $("#langPanel");
  const langToggle = $("#langToggle");
  langToggle?.addEventListener("click", () => {
    const expanded = langToggle.getAttribute("aria-expanded") === "true";
    langToggle.setAttribute("aria-expanded", String(!expanded));
    langPanel.hidden = expanded;
  });
  langPanel?.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-option");
    if (!btn) return;
    applyLang(btn.getAttribute("data-lang"));
    langPanel.hidden = true;
    langToggle.setAttribute("aria-expanded", "false");
  });
  document.addEventListener("click", (e) => {
    if (langPanel && !langPanel.hidden && !langPanel.contains(e.target) && e.target !== langToggle && !langToggle.contains(e.target)) {
      langPanel.hidden = true;
      langToggle.setAttribute("aria-expanded", "false");
    }
  });

  applyLang(localStorage.getItem("mia-lang") || "en");

  // ========== Theme ==========
  const savedTheme = localStorage.getItem("mia-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", savedTheme || (prefersLight ? "light" : "dark"));

  function toggleTheme() {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("mia-theme", next);
  }
  $("#themeToggle")?.addEventListener("click", toggleTheme);

  // ========== Scroll progress + header ==========
  const progress = $("#scrollProgress");
  const header = $(".site-header");
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
    if (progress) progress.style.width = p + "%";
    if (header) header.classList.toggle("solid", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ========== Mobile nav ==========
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

  // ========== Terminal ==========
  const termOverlay = $("#terminalOverlay");
  const termBody = $("#terminalBody");
  const termInput = $("#terminalInput");
  const termHelp = "commands: help · whoami · about · skills · links · clear · exit";

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
    termPrint('<span class="t-muted">MIA_Ether shell — type <span class="t-cyan">help</span></span>');
    termPrint('<span class="t-green">mia@ether</span>:<span class="t-cyan">~</span>$ whoami');
    termPrint("MIA_Ether · 08 · builder in progress · Guangzhou · AI / tools / ideas");
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
    else if (cmd === "whoami") termPrint("MIA_Ether · born 2008 · builder in progress · based in Guangzhou");
    else if (cmd === "about") {
      termPrint("AI tools · market curiosity · public building · creative experiments.");
      termPrint("Public notes on X: @MIA03ther");
    } else if (cmd === "skills") termPrint("Python · data · quant/trading · AI tools · content");
    else if (cmd === "links") {
      termPrint("X       https://x.com/MIA03ther");
      termPrint("GitHub  https://github.com/MIA-Ether");
    } else if (cmd === "clear") termBody.innerHTML = "";
    else if (cmd === "exit" || cmd === "q") closeTerminal();
    else termPrint(`<span class="t-pink">unknown:</span> ${escapeHtml(cmd)} — try help`);
  }

  $("#termBtn")?.addEventListener("click", openTerminal);
  $("#terminalClose")?.addEventListener("click", closeTerminal);
  termOverlay?.addEventListener("click", (e) => { if (e.target === termOverlay) closeTerminal(); });
  termInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { runCommand(termInput.value); termInput.value = ""; }
    if (e.key === "Escape") closeTerminal();
  });

  // ========== Filter bar ==========
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

  // ========== Scroll reveal ==========
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

  function setupReveal() {
    $$(".section .contact-card, .section .featured-card, .section .activity-panel, .section .identity-item, .section .pipeline-node, .section .workflow-step").forEach((el) => {
      if (!el.classList.contains("reveal")) el.classList.add("reveal");
      revealObs.observe(el);
    });
  }
  setupReveal();

  // ========== Custom cursor ==========
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
    $$("a, button, .project-card, .contact-card, .filter-btn, .identity-item, .pipeline-node, .workflow-step").forEach((el) => {
      el.addEventListener("mouseenter", () => ring?.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring?.classList.remove("hover"));
    });
  }

  // ========== Hero parallax ==========
  const heroSection = $("#hero");
  const heroMist = $(".hero-mist");
  const depthStars = $$(".depth-star");
  if (!reduceMotion) {
    document.addEventListener("mousemove", (e) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      if (heroMist) heroMist.style.transform = `translateX(calc(-50% + ${cx * 25}px)) translateY(${cy * 12}px)`;
      depthStars.forEach((star, i) => {
        const factor = (i + 1) * 10;
        star.style.transform = `translate(${cx * factor}px, ${cy * factor}px)`;
      });
    });
  }

  // ========== Stardust Particle System ==========
  const canvas = $("#stardust");
  if (canvas && !isTouch && !reduceMotion) {
    const ctx = canvas.getContext("2d");
    let W, H, particles = [];
    const mouse = { x: -1000, y: -1000 };

    const layers = [
      { count: 0, speed: 0.02, size: [0.4, 1.2], alpha: [0.15, 0.45] },
      { count: 0, speed: 0.05, size: [0.8, 2.2], alpha: [0.25, 0.65] },
      { count: 0, speed: 0.1, size: [1.2, 3.5], alpha: [0.4, 1.0] }
    ];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      layers[0].count = Math.min(180, Math.floor(W * H / 10000));
      layers[1].count = Math.min(100, Math.floor(W * H / 18000));
      layers[2].count = Math.min(50, Math.floor(W * H / 35000));

      particles = [];
      layers.forEach((layer, li) => {
        for (let i = 0; i < layer.count; i++) {
          particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: layer.size[0] + Math.random() * (layer.size[1] - layer.size[0]),
            a: layer.alpha[0] + Math.random() * (layer.alpha[1] - layer.alpha[0]),
            vx: (Math.random() - 0.5) * layer.speed * 60,
            vy: (Math.random() - 0.5) * layer.speed * 60,
            layer: li,
            twinkle: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.01 + Math.random() * 0.03
          });
        }
      });
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const accent = getComputedStyle(root).getPropertyValue("--accent").trim() || "#b9c2ff";
      const accent2 = getComputedStyle(root).getPropertyValue("--accent-2").trim() || "#ff7dc7";

      // Nebula glow in hero area
      const heroH = H * 0.75;
      const grad = ctx.createRadialGradient(W * 0.5, heroH * 0.25, 0, W * 0.5, heroH * 0.25, W * 0.65);
      grad.addColorStop(0, "rgba(185, 194, 255, 0.025)");
      grad.addColorStop(0.35, "rgba(158, 232, 255, 0.015)");
      grad.addColorStop(0.65, "rgba(255, 125, 199, 0.01)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, heroH);

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.twinkle += p.twinkleSpeed;
        const twinkle = 0.5 + 0.5 * Math.sin(p.twinkle);

        p.x += p.vx * 0.016;
        p.y += p.vy * 0.016;

        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        // Mouse interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = ((150 - dist) / 150) * 0.35;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        const alpha = p.a * twinkle;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.layer === 2 ? accent2 : accent;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // Glow for larger particles
        if (p.r > 2) {
          ctx.globalAlpha = alpha * 0.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw connections (same layer only, limited checks)
      ctx.lineWidth = 0.5;
      const maxConn = Math.min(particles.length, 120);
      for (let i = 0; i < maxConn; i++) {
        for (let j = i + 1; j < maxConn; j++) {
          if (particles[i].layer !== particles[j].layer) continue;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.globalAlpha = 0.05 * (1 - d / 90);
            ctx.strokeStyle = accent;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    document.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    resize();
    draw();
    window.addEventListener("resize", resize);
  }

  // ========== GitHub API ==========
  const GITHUB_USER = "MIA-Ether";
  const API_BASE = `https://api.github.com/users/${GITHUB_USER}`;

  function categorizeRepo(repo) {
    const name = repo.name.toLowerCase();
    const desc = (repo.description || "").toLowerCase();
    const topics = (repo.topics || []).join(" ").toLowerCase();
    const lang = (repo.language || "").toLowerCase();
    const text = name + " " + desc + " " + topics + " " + lang;

    if (text.includes("ai") || text.includes("agent") || text.includes("llm") || text.includes("ml") || text.includes("model") || text.includes("gpt") || text.includes("neural")) return "AI";
    if (text.includes("quant") || text.includes("trading") || text.includes("btc") || text.includes("eth") || text.includes("crypto") || text.includes("market") || text.includes("backtest")) return "QUANT";
    if (text.includes("tool") || text.includes("cli") || text.includes("util") || text.includes("helper")) return "TOOLS";
    if (text.includes("web") || text.includes("site") || text.includes("blog") || text.includes("page") || text.includes("html") || text.includes("css") || text.includes("frontend")) return "WEB";
    return "OTHER";
  }

  async function fetchGitHubData() {
    const statusEl = $("#projectsStatus");
    const gridEl = $("#projectGrid");

    try {
      const [reposRes, userRes] = await Promise.all([
        fetch(`${API_BASE}/repos?sort=updated&per_page=100`),
        fetch(API_BASE)
      ]);

      if (!reposRes.ok || !userRes.ok) throw new Error("API error");

      const repos = await reposRes.json();
      const user = await userRes.json();

      // Activity stats
      const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
      const totalForks = repos.reduce((s, r) => s + r.forks_count, 0);
      $("#activityRepos").textContent = user.public_repos;
      $("#activityStars").textContent = totalStars;
      $("#activityForks").textContent = totalForks;

      if (repos.length > 0) {
        const latest = new Date(repos[0].updated_at);
        $("#activityUpdated").textContent = latest.toLocaleDateString();
      }

      // Render projects
      gridEl.innerHTML = "";
      repos.forEach((repo) => {
        const card = document.createElement("article");
        card.className = "project-card";
        const tags = categorizeRepo(repo);
        card.setAttribute("data-tags", tags);

        const desc = repo.description || "No description";
        const lang = repo.language || "";
        const stars = repo.stargazers_count;
        const forks = repo.forks_count;

        card.innerHTML = `
          <div class="project-top">
            <h3 class="project-title"><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
          </div>
          <p class="project-desc">${escapeHtml(desc)}</p>
          <div class="project-meta">
            ${lang ? `<span>${escapeHtml(lang)}</span>` : ""}
            <span>★ ${stars}</span>
            <span>⑂ ${forks}</span>
          </div>
        `;
        gridEl.appendChild(card);
      });

      // Re-setup reveal for new cards
      $$(".project-card", gridEl).forEach((el) => {
        el.classList.add("reveal");
        revealObs.observe(el);
      });

      if (statusEl) statusEl.textContent = `${repos.length} repositories loaded`;

      // Draw activity chart
      drawActivityChart(repos.slice(0, 10));

    } catch (err) {
      if (statusEl) statusEl.textContent = "Failed to load repositories";
      if (gridEl) gridEl.innerHTML = `<p class="projects-error" style="color:var(--text-muted);grid-column:1/-1;text-align:center;padding:2rem 0">Unable to load GitHub repositories. <a href="https://github.com/${GITHUB_USER}" target="_blank" rel="noopener" style="color:var(--accent)">View on GitHub →</a></p>`;
    }
  }

  function drawActivityChart(topRepos) {
    const chartCanvas = $("#activityCanvas");
    if (!chartCanvas) return;
    const cctx = chartCanvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = chartCanvas.parentElement.getBoundingClientRect();
    chartCanvas.width = rect.width * dpr;
    chartCanvas.height = 220 * dpr;
    cctx.scale(dpr, dpr);
    const w = rect.width;
    const h = 220;

    cctx.clearRect(0, 0, w, h);
    if (topRepos.length === 0) return;

    const accent = getComputedStyle(root).getPropertyValue("--accent").trim() || "#b9c2ff";
    const accent2 = getComputedStyle(root).getPropertyValue("--accent-2").trim() || "#ff7dc7";
    const muted = getComputedStyle(root).getPropertyValue("--text-muted").trim() || "#5f6484";

    const maxStars = Math.max(...topRepos.map(r => r.stargazers_count), 1);
    const barW = Math.min(40, (w - 40) / topRepos.length - 8);
    const startX = 20;

    topRepos.forEach((repo, i) => {
      const x = startX + i * (barW + 8);
      const barH = (repo.stargazers_count / maxStars) * (h - 50);
      const y = h - 30 - barH;

      // Bar
      const grad = cctx.createLinearGradient(x, y, x, h - 30);
      grad.addColorStop(0, accent);
      grad.addColorStop(1, accent2);
      cctx.fillStyle = grad;
      cctx.globalAlpha = 0.7;
      cctx.beginPath();
      // Use roundRect if available, otherwise regular rect
      if (cctx.roundRect) {
        cctx.roundRect(x, y, barW, barH, [4, 4, 0, 0]);
      } else {
        cctx.rect(x, y, barW, barH);
      }
      cctx.fill();

      // Label
      cctx.globalAlpha = 0.6;
      cctx.fillStyle = muted;
      cctx.font = "9px " + getComputedStyle(root).getPropertyValue("--mono");
      cctx.textAlign = "center";
      const label = repo.name.length > 8 ? repo.name.slice(0, 7) + "…" : repo.name;
      cctx.fillText(label, x + barW / 2, h - 14);

      // Value
      if (repo.stargazers_count > 0) {
        cctx.globalAlpha = 0.8;
        cctx.fillStyle = accent;
        cctx.font = "8px " + getComputedStyle(root).getPropertyValue("--mono");
        cctx.fillText("★" + repo.stargazers_count, x + barW / 2, y - 5);
      }
    });
    cctx.globalAlpha = 1;
  }

  fetchGitHubData();
})();
