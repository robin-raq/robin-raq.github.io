import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectsPanel } from "@/components/ProjectsPanel";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Shipped AI products: Oh Sheet (audio-to-sheet-music AI pipeline) and TuneChat (real-time collaborative music rooms), plus GauntletAI fellowship builds and MassMutual work.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Recent fellowship and professional work first; filter by category or browse everything."
      />
      <ProjectsPanel />
    </>
  );
}
