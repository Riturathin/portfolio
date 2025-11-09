export const PROJECTS = [
    {
        id: "celigo-integration",
        name: "Integrator.io, Fuse-UI and Trailblazer UI Platform",
        company: "Celigo",
        companyId: "celigo",
        year: 2024,
        category: "Architecture",
        image: "/projects/integrator.png",
        description: `Architected and launched a new React/TypeScript UI platform for Celigo’s
products, enabling scalable, production-ready delivery of web interfaces. Implemented
 comprehensive end-to-end Playwright test automation, cutting
regression defects by 30% and boosting release confidence.
Migrated the core integrator.io application to React Router v6 and TypeScript,
enhancing code maintainability and accelerating developer onboarding by 25%. 
Delivered modular micro-frontend components (e.g. Login and Marketplace
modules) with independent deployment pipelines, accelerating release cycles by
40%. Multi-agent AI architecture integrated deeply into Celigo's codebase and CI/CD pipeline.
A code intelligence agent that runs on every PR ( GitHub Action ). It uses embeddings-
based similarity search using OpenAI to detect functionally similar code across all
repos.Flags the PR with a warning or fails the PR check automatically if duplication
violates the ‘DRY’ standards.`,
        tags: ["React", "Performance", "System Design", "UI Architecture", "Micro-Frontends", "GitLab CI/CD", "Jenkins",
            "Automation", "VRT", "Logrocket"],
    },
    {
        id: "upstox-analytics",
        name: "Stock Analytics Dashboard",
        company: "Upstox",
        companyId: "upstox",
        year: 2023,
        category: "Frontend",
        image: "/projects/upstox.png",
        description: "At Upstox, played a key role in shaping the design system and visual language of the trading platform. Partnered with UX and product teams to craft intuitive, accessible, and high-performance interfaces that empowered millions of users to trade with confidence.",
        tags: ["React", "Recharts", "WebSockets", "Candlestick Charts"],
    },
    {
        id: "lowes-ecommerce",
        name: "Lowe's E-Commerce Customer-Facing website , Pharos Performance Dashboard",
        company: "Lowe's",
        companyId: "lowes",
        year: 2021,
        category: "Architecture",
        image: "/projects/lowes.png",
        description: `Collaborated with UX designers to translate abstract design concepts into
immersive digital experiences. Introduced a scalable micro-frontend
architecture using Webpack Module Federation, decoupling feature development for parallel engineering and faster
releases. Developed the 'fuse-ui' React component library (Storybook-based) to
standardize UI components and design patterns across 10+ engineering teams,
improving reuse and consistency. Built the 'Pharos' performance monitoring dashboard (tracking web-vitals and
P95/P99 latencies) to identify front-end bottlenecks; optimized key metrics and
reduced UI latency by 20%.`,

        tags: ["UI Design", "Prototype", "Animations", "Performance", "Optimization", "Design Systems", "Internal Tools", "Pharos", "Architecture",
            "Web Vitals", "Micro-Frontends"
        ],
    },
    {
        id: "ari",
        name: "ARI Network Services Dealer Portal",
        company: "ARI Network Services",
        companyId: "ari",
        year: 2013,
        category: "Frontend",
        image: "/projects/ari.png",
        description: `Contributed to the ARI Network Services Dealer Portal early in my career, 
        focusing on resolving UI bugs and improving front-end performance. 
        Collaborated closely with senior developers to ensure seamless user 
        experience and code quality across critical customer journeys.`,
        tags: ["jQuery", "Frontend", "Bugfixes"],
    },
    {
        id: "tesco-catalog",
        name: "Tesco website",
        company: "Tesco",
        companyId: "tesco",
        year: 2013,
        category: "Frontend",
        image: "/projects/tesco.png",
        description: "Contributed to the Tesco e-commerce platform early in my career, focusing on resolving UI bugs and improving front-end performance. Collaborated closely with senior developers to ensure seamless user experience and code quality across critical customer journeys.",
        tags: ["jQuery", "Frontend", "Bugfixes"],
    },
];
