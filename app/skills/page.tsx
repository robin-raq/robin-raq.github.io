import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SkillsPanel } from "@/components/SkillsPanel";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "TypeScript, React, Next.js, Python, Node.js, LLM agents, RAG, vector search, WebSockets, PostgreSQL, Redis, Docker, CI/CD, and testing practices.",
  alternates: { canonical: "/skills/" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Skills"
        description="Stack and practices I use to ship production systems — aligned with my resume."
      />
      <SkillsPanel />
    </>
  );
}
