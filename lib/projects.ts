import type { ProjectTier, WorkProject } from "./project-types";

const tierOrder: ProjectTier[] = ["flagship", "fellowship", "professional", "portfolio"];

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
      "Supported full overhaul of public-facing financial calculators: React + TypeScript, reusable components, REST APIs, WCAG 2.1 AA, CI/CD, and automated testing for customer-facing tools at scale.",
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
    summary:
      "Paste a YouTube link, get engraved piano sheet music. A five-stage AI pipeline (ingest → transcribe → arrange → humanize → engrave) built on FastAPI + Celery, with ML transcription, cover-search fallbacks, and PDF/MusicXML/MIDI delivery. Live on Railway; feeds its scores into TuneChat rooms.",
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
    summary:
      "Multiplayer piano rooms in the browser: play together live over Socket.io (phase-aware legato wire protocol), read the same score via OpenSheetMusicDisplay, follow a piano-roll waterfall, and practice with variable-speed playback. Its PyTorch transcription engine also powers Oh Sheet.",
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
