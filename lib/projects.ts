import type { ProjectTier, WorkProject } from "./project-types";

const tierOrder: ProjectTier[] = ["flagship", "fellowship", "professional", "portfolio"];

export const workProjects: WorkProject[] = [
  {
    id: "shipshape",
    title: "ShipShape",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "Performance and accessibility audit of a U.S. Treasury open-source project management tool.",
    description:
      "Audited and improved a TypeScript monorepo: k6 API load testing, PostgreSQL query tuning, Vite bundle analysis, WebSocket stress testing, and WCAG 2.1 AA accessibility remediation across a React frontend.",
    whatItShows:
      "performance auditing, query optimization, bundle analysis, load testing, accessibility remediation, senior engineering judgment",
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Yjs",
      "Docker",
      "Playwright",
    ],
    liveUrl: "https://ship-app-production-fd9d.up.railway.app/dashboard",
    repoUrl: "https://github.com/robin-raq/shapeShip",
  },
  {
    id: "legacylens",
    title: "LegacyLens",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "RAG pipeline that makes COBOL and Fortran codebases queryable in plain English.",
    description:
      "LegacyLens chunks legacy source files with syntax awareness, generates embeddings, stores them in Pinecone, retrieves with reranking, and returns answers with file and line references through a public query UI.",
    whatItShows:
      "RAG pipeline design, vector search, retrieval reranking, domain-specific chunking, FastAPI deployment",
    stack: [
      "Python",
      "Pinecone",
      "OpenAI Embeddings",
      "FastAPI",
      "COBOL/Fortran parsing",
    ],
    liveUrl: "https://legacylens-production-fd39.up.railway.app/",
    repoUrl: "https://github.com/robin-raq/legacyLens",
  },
  {
    id: "agentforge",
    title: "AgentForge",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "A production-oriented AI agent with tool calling, structured orchestration, and an eval suite.",
    description:
      "AgentForge implements a clinical domain agent with a typed tool registry, multi-step orchestration, response verification, conversation memory, and an adversarial evaluation suite. Instrumented for latency, cost, and error tracking across each agent call.",
    whatItShows:
      "tool orchestration, evaluation-driven development, cost and latency tracing, structured output validation, production agent design",
    stack: [
      "TypeScript",
      "Node.js",
      "OpenAI API",
      "Evaluation framework",
      "Observability",
    ],
    liveUrl: "https://agent-production-6f7a.up.railway.app/",
    repoUrl: "https://github.com/robin-raq/agentforge-clinical-agent",
  },
  {
    id: "collabboard",
    title: "CollabBoard",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "Real-time collaborative whiteboard with multiplayer state and an AI agent that responds to natural language.",
    description:
      "CollabBoard supports infinite pan/zoom canvas, shape primitives, and live multiplayer via WebSockets. An AI board agent interprets natural language commands to create and move elements on the canvas.",
    whatItShows:
      "real-time shared state, Canvas API, WebSockets multiplayer, AI agent integration, product interaction design",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "WebSockets",
      "Canvas API",
    ],
    liveUrl: "https://collabboard.raqdrobinson.com/",
    repoUrl: "https://github.com/robin-raq/collabbboard-mvp",
  },
  {
    id: "chatbridge",
    title: "ChatBridge",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "Real-time chat session UI with persistent rooms, deployed on Railway.",
    stack: ["TypeScript", "React", "Node.js", "WebSockets"],
    liveUrl:
      "https://chatbridge-production.up.railway.app/session/96b8d04b-e031-4336-b444-645f0630afaf",
    repoUrl: "https://github.com/robin-raq/chatbox",
  },
  {
    id: "massmutual-calculators",
    title: "Financial planning tools",
    tier: "professional",
    groupLabel: "MassMutual | Fullstack Developer",
    summary:
      "Supported the rebuild of MassMutual's public-facing financial calculators used by customers at scale.",
    description:
      "Contributed to a React and TypeScript overhaul: reusable component architecture, REST API integration, WCAG 2.1 AA accessibility, CI/CD pipelines, automated testing, and remediation of over 2,400 security vulnerabilities across the platform.",
    whatItShows:
      "production frontend development, accessibility compliance, component architecture, testing practices, security remediation",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Jest",
      "CI/CD",
      "Accessibility",
    ],
    liveUrl: "https://www.massmutual.com/financial-wellness/calculators",
  },
  {
    id: "oh-sheet",
    title: "Oh Sheet",
    tier: "flagship",
    groupLabel: "Live AI product",
    summary: "Paste a YouTube link and get engraved piano sheet music.",
    description:
      "Oh Sheet runs a five stage pipeline that pulls audio, transcribes it, arranges it for piano, and exports PDF, MusicXML, and MIDI files. Built with FastAPI, Celery, Redis, Docker, Railway, and ML transcription tools.",
    whatItShows:
      "AI pipeline design, async processing, external API integration, fallback handling, and production deployment.",
    caseStudyUrl: "/projects/oh-sheet/",
    imageSrc: "/projects/oh-sheet-home.png",
    imageAlt: "Oh Sheet home screen: paste a YouTube link to get piano sheet music",
    stack: [
      "Python 3.12",
      "FastAPI",
      "Celery",
      "Redis",
      "yt-dlp",
      "Docker",
      "Railway",
      "AGPL-3.0",
    ],
    liveUrl: "https://ohsheet-production-2026.up.railway.app",
    repoUrl: "https://github.com/Oh-Sheet-Team/oh-sheet",
  },
  {
    id: "tunechat",
    title: "TuneChat",
    tier: "flagship",
    groupLabel: "Live AI product",
    summary: "TuneChat is a multiplayer piano room in the browser.",
    description:
      "Players can join a shared room, view the same score, practice with a virtual piano, and stay synced through Socket.io. Built with Node, Express, Socket.io, Tone.js, OpenSheetMusicDisplay, and vanilla JavaScript.",
    whatItShows:
      "real time collaboration, shared state, browser audio interaction, music notation rendering, and product focused UI.",
    caseStudyUrl: "/projects/tunechat/",
    imageSrc: "/projects/tunechat-room.png",
    imageAlt: "TuneChat room with sheet music, chat, and a playable piano keyboard",
    stack: [
      "Node.js",
      "Express",
      "Socket.io",
      "Vanilla JS",
      "Vite",
      "Tone.js",
      "OpenSheetMusicDisplay",
      "tcalgo",
      "MuseScore CLI",
    ],
    liveUrl: "https://tunechat.raqdrobinson.com",
  },
  {
    id: "dobble",
    title: "Dobble",
    tier: "portfolio",
    groupLabel: "Earlier work",
    summary:
      "Online Dobble-style card game: find the matching symbol between cards.",
    stack: ["JavaScript", "Ruby on Rails"],
    liveUrl: "https://robin-raq.github.io/Dobl-frontend-/",
    repoUrl: "https://github.com/robin-raq/Dobl-frontend-",
  },
];

export function getOrderedProjects(): WorkProject[] {
  return [...workProjects].sort(
    (a, b) =>
      tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier) ||
      workProjects.indexOf(a) - workProjects.indexOf(b),
  );
}
