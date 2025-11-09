// src/data/skillsData.js
export const SKILL_CATEGORIES = [
  "Frontend",
  "Backend",
  "Design",
  "DevOps & CI/CD",
  "Testing",
  "Architecture & Process",
  "AI & ML",
  "Soft",
];

export const SKILLS = [
  // Frontend
  { id: "js", name: "JavaScript (ES6+)", category: "Frontend", level: 96, tags: ["es6", "async", "dom"] },
  { id: "react", name: "React", category: "Frontend", level: 95, tags: ["hooks", "concurrency"] },
  { id: "redux", name: "Redux", category: "Frontend", level: 88, tags: ["state", "toolkit"] },
  { id: "ts", name: "TypeScript", category: "Frontend", level: 92, tags: ["types", "generics"] },
  { id: "htmlcss", name: "HTML / CSS / Responsive UI", category: "Frontend", level: 94, tags: ["accessibility", "responsive"] },

  // Backend
  { id: "node", name: "Node.js", category: "Backend", level: 86, tags: ["express", "server"] },
  { id: "graphql", name: "GraphQL", category: "Backend", level: 82, tags: ["schema", "apollo"] },
  { id: "apollo", name: "Apollo Client", category: "Backend", level: 82, tags: ["cache", "queries"] },

  // Architecture
  { id: "microfront", name: "Micro-Frontends (Module Federation)", category: "Architecture & Process", level: 84, tags: ["module-federation", "appshell"] },
  { id: "perf", name: "Performance Optimization", category: "Architecture & Process", level: 90, tags: ["web-vitals", "lighthouse"] },
  { id: "web-vitals", name: "Web Vitals", category: "Architecture & Process", level: 86, tags: ["lcp", "cls", "fid"] },
  { id: "lighthouse", name: "Lighthouse", category: "Architecture & Process", level: 88, tags: ["audit", "performance"] },

  // Design
  { id: "designsystem", name: "Design Systems", category: "Design", level: 92, tags: ["tokens", "components"] },

  // DevOps
  { id: "docker", name: "Docker", category: "DevOps & CI/CD", level: 82, tags: ["containers"] },
  { id: "jenkins", name: "Jenkins", category: "DevOps & CI/CD", level: 76, tags: ["pipelines"] },
  { id: "gitlab", name: "GitLab", category: "DevOps & CI/CD", level: 80, tags: ["ci", "git"] },
  { id: "cicd", name: "CI/CD", category: "DevOps & CI/CD", level: 88, tags: ["automation"] },
  { id: "webpack", name: "Webpack", category: "DevOps & CI/CD", level: 78, tags: ["bundler", "loaders"] },

  // Testing
  { id: "playwright", name: "Playwright (E2E)", category: "Testing", level: 78, tags: ["e2e"] },
  { id: "jest", name: "Jest", category: "Testing", level: 80, tags: ["unit", "mocks"] },
  { id: "tdd", name: "TDD", category: "Testing", level: 80, tags: ["tests-first"] },
  { id: "vrt", name: "Visual Regression Testing", category: "Testing", level: 75, tags: ["percy", "chromatic"] },

  // AI & ML
  { id: "ai", name: "Artificial Intelligence", category: "AI & ML", level: 70, tags: ["ml", "models"] },
  { id: "genai", name: "Generative AI", category: "AI & ML", level: 72, tags: ["gpt", "diffusion"] },
  { id: "agentic", name: "Agentic AI", category: "AI & ML", level: 68, tags: ["agents", "automation"] },

  // Soft
  { id: "arch-thinking", name: "UI Architecture", category: "Soft", level: 94, tags: ["systems", "scalability"] },
  { id: "team", name: "Team Management", category: "Soft", level: 88, tags: ["leadership"] },
  { id: "ind-contrib", name: "Individual Contributor", category: "Soft", level: 95, tags: ["hands-on"] },
  { id: "mentoring", name: "Mentorship", category: "Soft", level: 90, tags: ["coaching"] },
  { id: "agile", name: "Agile / Scrum", category: "Soft", level: 88, tags: ["process"] },
];
