import Link from "next/link";
import type { WorkProject } from "@/lib/project-types";

type Props = {
  project: WorkProject;
};

export function ProjectCard({ project }: Props) {
  const liveLabel = project.liveLabel ?? "Live site";
  const hasLinks = Boolean(
    project.liveUrl || project.repoUrl || project.caseStudyUrl,
  );

  return (
    <article className="rounded-[10px] border border-term bg-term-surface p-4 shadow-[var(--shadow-xs)]">
      {project.imageSrc ? (
        <div className="mb-3 overflow-hidden rounded-[6px] border border-term bg-term-inset">
          {/* eslint-disable-next-line @next/next/no-img-element -- external / data URLs; static export */}
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? ""}
            className="max-h-48 w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : null}
      <h3 className="font-mono text-sm font-bold uppercase tracking-wide text-term-bright">
        {project.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-term-body">
        {project.summary}
      </p>
      {hasLinks ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.caseStudyUrl ? (
            <Link
              href={project.caseStudyUrl}
              className="term-btn term-btn-active rounded-sm text-[10px] no-underline"
            >
              [Case study]
            </Link>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="term-btn rounded-sm text-[10px] no-underline"
            >
              [{liveLabel}]
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="term-btn rounded-sm text-[10px] no-underline"
            >
              [GitHub]
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      ) : null}
      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-term bg-term-bg px-2 py-0.5 font-mono text-[10px] text-term-dim"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
