/** Grouped skills aligned with resume — single source for the Skills section. */
export const skillGroups = [
  {
    // Leads the list to mirror the 2026 resume: AI-first development is
    // the differentiator, so it's the first thing scanners see.
    label: "AI-First Development",
    items: [
      "Claude Code & Cursor (daily)",
      "Anthropic Claude & OpenAI APIs",
      "LLM agents & tool orchestration",
      "MCP",
      "RAG",
      "LangGraph",
      "Langfuse / LangSmith",
      "Evaluation & red teaming",
      "AI-generated code validation",
    ],
  },
  {
    label: "Languages",
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "SQL",
      "Ruby",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Sass",
      "Vite",
      "TipTap",
      "Yjs (CRDTs)",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Redis",
    ],
  },
  {
    label: "Data & AI",
    items: [
      "PostgreSQL",
      "Sequelize",
      "Pinecone",
      "ChromaDB",
      "Embeddings pipelines",
    ],
  },
  {
    label: "DevOps",
    items: ["AWS", "Docker", "Terraform", "CI/CD", "pnpm workspaces"],
  },
  {
    label: "Testing",
    items: [
      "Playwright (E2E)",
      "Jest",
      "React Testing Library",
      "k6",
      "autocannon",
    ],
  },
  {
    label: "Practices",
    items: [
      "Agile / Scrum",
      "TDD",
      "Performance optimization",
      "WCAG 2.1 AA accessibility",
    ],
  },
] as const;
