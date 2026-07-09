import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getOrderedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  // No page title: the homepage carries the site-wide positioning
  // default ("Raq Robinson — Applied AI Software Engineer")
  // instead of wasting the strongest title tag on "Home".
  description:
    "Applied AI software engineer in Brooklyn building products end to end — LLM agents, RAG pipelines, real-time collaboration, React/TypeScript, Python, Node.js.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const flagship = getOrderedProjects().filter((p) => p.tier === "flagship");

  return (
    <div className="flex flex-1 flex-col">
      <header className="mb-8">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ boot --welcome
        </p>
        <h1 className="term-glow text-3xl font-bold tracking-tight text-term-bright sm:text-4xl">
          Raq Robinson
        </h1>
        <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.14em] text-term-teal">
          Applied AI Software Engineer
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-term-body">
          I build AI-powered products end to end — from LLM agents and audio ML
          pipelines to real-time collaboration and the design systems that tie
          them together. Brooklyn, NY. Currently: two live music-AI apps that
          work as one ecosystem.
        </p>
      </header>

      <section aria-labelledby="featured-heading" className="mb-8">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ query --section=flagship
        </p>
        <h2
          id="featured-heading"
          className="term-glow mb-1 text-xl font-semibold text-term-bright"
        >
          Two live apps, one shared design system
        </h2>
        <p className="mb-4 max-w-2xl text-[13px] leading-relaxed text-term-body">
          <span className="text-term-bright">Oh Sheet</span> turns any song
          into engraved piano sheet music with a five-stage AI pipeline;{" "}
          <span className="text-term-bright">TuneChat</span>{" "}
          is where you play
          it — multiplayer piano rooms with synced scores. Oh Sheet publishes
          its output straight into TuneChat rooms, and both share the
          &ldquo;Warm Vinyl&rdquo; design system.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {flagship.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section
        aria-label="Next step"
        className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
      >
        <Link
          href="/projects"
          className="term-btn-active term-btn inline-flex w-fit items-center justify-center rounded-sm px-4 py-2 text-[12px] font-semibold uppercase tracking-wide no-underline"
        >
          [All projects]
        </Link>
        <Link
          href="/about"
          className="term-btn inline-flex w-fit items-center justify-center rounded-sm px-4 py-2 text-[12px] font-semibold uppercase tracking-wide no-underline"
        >
          [About me — full bio]
        </Link>
      </section>
    </div>
  );
}
