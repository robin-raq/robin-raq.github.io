import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SkillsPanel } from "@/components/SkillsPanel";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "TypeScript, React, Next.js, Python, Node.js, LLM agents, RAG, vector search, WebSockets, PostgreSQL, Redis, Docker, CI/CD, and testing practices. Stack aligned with my 2026 resume.",
  alternates: { canonical: "/skills/" },
};

const coreStrengths = [
  "AI product engineering",
  "React and TypeScript frontend systems",
  "Real-time collaboration systems",
  "Testing, evals, and production quality",
  "Accessibility and design systems",
];

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Skills"
        description="Stack and practices I use to ship production systems, aligned with my 2026 resume."
      />
      <section aria-label="Core strengths" className="mb-8">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ query core_strengths
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {coreStrengths.map((s) => (
            <li
              key={s}
              className="flex items-center gap-2 rounded-sm border border-term bg-term-surface px-3 py-2 font-mono text-[12px] text-term-bright"
            >
              <span className="text-term-teal" aria-hidden>&gt;</span>
              {s}
            </li>
          ))}
        </ul>
      </section>
      <SkillsPanel />
    </>
  );
}
