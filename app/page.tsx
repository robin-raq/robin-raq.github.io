import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getOrderedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  // No page title: the homepage carries the site-wide default
  // ("Raq Robinson Applied AI Software Engineer")
  // instead of wasting the strongest title tag on "Home".
  description:
    "Applied AI software engineer in Brooklyn. I build shipped AI products: agentic systems, ML pipelines, pricing workflows, real-time collaboration, and accessible frontend platforms. React, TypeScript, Python, Node.js.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const flagship = getOrderedProjects().filter((p) => p.tier === "flagship");

  return (
    <div className="flex flex-1 flex-col">
      <header className="mb-8">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ boot
        </p>
        <h1 className="term-glow text-3xl font-bold tracking-tight text-term-bright sm:text-4xl">
          Raq Robinson
        </h1>
        <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.14em] text-term-teal">
          Applied AI Software Engineer
        </p>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-term-body">
          I build AI powered products from idea to shipped app.
        </p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-term-body">
          My recent work spans agentic systems, pricing workflows, audio ML
          pipelines, real time collaboration, and accessible frontend
          platforms. I care about making complex technology feel usable,
          reliable, and clear.
        </p>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-term-body">
          I use AI tools heavily, but I do not treat generated code as
          finished code. I validate the work with tests, evals, failure mode
          coverage, and live product review.
        </p>
      </header>

      <section aria-label="Status" className="mb-8">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ status
        </p>
        <ul className="space-y-1 font-mono text-[12px] text-term-body">
          {[
            "Shipped AI products and full stack prototypes",
            "Agent workflows, ML pipelines, and real time systems",
            "Evaluation, testing, and failure mode coverage",
            "Accessible frontend systems and design systems",
            "Production deployment with Docker, Railway, FastAPI, Node, Redis, and WebSockets",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-px shrink-0 text-term-teal" aria-hidden>&gt;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how-i-work-heading" className="mb-8">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ query how_i_work
        </p>
        <h2
          id="how-i-work-heading"
          className="term-glow mb-3 text-xl font-semibold text-term-bright"
        >
          How I work
        </h2>
        <p className="mb-3 max-w-xl text-[13px] leading-relaxed text-term-body">
          In practice, that means I own the quality of the output, not just the prompt.
        </p>
        <ol className="max-w-xl space-y-1.5 font-mono text-[12px] text-term-body">
          {[
            "Turn the product goal into requirements and failure cases",
            "Build the smallest testable version",
            "Add evals, unit tests, and manual review gates",
            "Instrument latency, cost, errors, and edge cases where relevant",
            "Ship, inspect the live app, and document what changed",
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-3">
              <span className="shrink-0 font-mono text-[10px] text-term-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="featured-heading" className="mb-8">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ query featured_system
        </p>
        <h2
          id="featured-heading"
          className="term-glow mb-1 text-xl font-semibold text-term-bright"
        >
          Two connected music AI products
        </h2>
        <p className="mb-2 max-w-2xl text-[13px] leading-relaxed text-term-body">
          <span className="text-term-bright">Oh Sheet</span> turns songs into
          engraved piano sheet music.{" "}
          <span className="text-term-bright">TuneChat</span> turns those
          scores into multiplayer practice rooms.
        </p>
        <p className="mb-4 max-w-2xl text-[13px] leading-relaxed text-term-body">
          Together, they show how I build full stack AI products: pipeline
          orchestration, async jobs, fallback handling, real time state,
          browser audio, product UX, and shared design systems.
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
          [About me]
        </Link>
        <a
          href="/resume.pdf"
          download="Raq_Robinson_Resume.pdf"
          className="term-btn inline-flex w-fit items-center justify-center rounded-sm px-4 py-2 text-[12px] font-semibold uppercase tracking-wide no-underline"
        >
          [Download resume]
        </a>
      </section>
    </div>
  );
}
