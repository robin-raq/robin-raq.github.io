import type { ProjectTier, WorkProject } from "./project-types";

const tierOrder: ProjectTier[] = ["fellowship", "professional", "portfolio"];

export const workProjects: WorkProject[] = [
  {
    id: "shipshape",
    title: "ShipShape",
    tier: "fellowship",
    groupLabel: "GauntletAI | AI Engineering Fellow",
    summary:
      "Production audit and optimization of the U.S. Department of the Treasury’s open-source project management tool: TypeScript monorepo, API performance (k6), PostgreSQL query tuning, bundle efficiency, and accessibility.",
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
      "RAG pipeline over legacy COBOL/Fortran: syntax-aware chunking, embeddings, Pinecone vector search, retrieval with reranking, and a public query UI with file/line references.",
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
      "Production-oriented domain agent with tool registry, orchestration, verification, conversation memory, evaluation suite, and observability (tracing, latency, token usage).",
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
      "Real-time collaborative whiteboard with infinite pan/zoom, shapes, WebSockets multiplayer, and an AI board agent driven by natural language commands.",
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
      "Real-time chat / session UI deployed on Railway (paired with the chatbox codebase).",
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
      "Led full overhaul of public-facing financial calculators: React + TypeScript, reusable components, REST APIs, WCAG 2.1 AA, CI/CD, and automated testing for customer-facing tools at scale.",
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
    tier: "portfolio",
    groupLabel: "Independent product",
    summary:
      "YouTube-to-engraved piano sheet workflow: FastAPI orchestrator with Celery + Redis workers, yt-dlp + FFmpeg ingest, transcription handoff to TuneChat, proxied PDF / MusicXML / MIDI delivery, and a Redis cache for duplicate submissions. Single-container Railway monolith with a feature-flagged YouTube-only mode (custom domain pending).",
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
    tier: "portfolio",
    groupLabel: "Independent product",
    summary:
      "Real-time collaborative piano room + transcription engine: Socket.io multi-user note streaming (phase-aware legato/staccato wire protocol), Tone.js synthesis, OpenSheetMusicDisplay, and a tcalgo (PyTorch piano transcription) + MuseScore CLI pipeline turning uploads into engraved sheets. Powers Oh Sheet's transcription backend.",
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
  {
    id: "hot-play",
    title: "Hot Play",
    tier: "portfolio",
    groupLabel: "Earlier work",
    summary:
      "YouTube-integrated Slack-style app for sharing and discussing music by genre.",
    stack: ["React", "Ruby on Rails"],
    liveUrl: "https://www.loom.com/share/4d50e0e68b004e8aafd0ee955836fb5d",
    liveLabel: "Watch demo",
    repoUrl: "https://github.com/robin-raq/hot-play",
  },
  {
    id: "nurture",
    title: "Nurture Plant Shop",
    tier: "portfolio",
    groupLabel: "Earlier work",
    summary:
      "Single-page ecommerce experience for browsing and learning about houseplants.",
    stack: ["React", "Ruby on Rails"],
    liveUrl: "https://www.loom.com/share/a7f9d086ba9e4b0d916cc452b142e9cc",
    liveLabel: "Watch demo",
    repoUrl: "https://github.com/robin-raq/nurture-frontend",
  },
];

export function getOrderedProjects(): WorkProject[] {
  return [...workProjects].sort(
    (a, b) =>
      tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier) ||
      workProjects.indexOf(a) - workProjects.indexOf(b),
  );
}
