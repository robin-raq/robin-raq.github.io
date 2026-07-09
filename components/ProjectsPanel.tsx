"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { ProjectTier } from "@/lib/project-types";
import { getOrderedProjects } from "@/lib/projects";

const filters: { id: "all" | ProjectTier; label: string }[] = [
  { id: "all", label: "All" },
  { id: "flagship", label: "Flagship" },
  { id: "fellowship", label: "Fellowship" },
  { id: "professional", label: "Professional" },
  { id: "portfolio", label: "Portfolio" },
];

export function ProjectsPanel() {
  const all = useMemo(() => getOrderedProjects(), []);
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const filtered =
    filter === "all"
      ? all
      : all.filter((p) => p.tier === filter);

  return (
    <div className="font-mono">
      <p className="mb-3 text-[10px] uppercase tracking-widest text-term-dim">
        &gt; filter --namespace=
      </p>
      <div
        className="mb-6 flex flex-wrap gap-2 border-b border-term pb-4"
        role="tablist"
        aria-label="Filter projects"
      >
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={
                active
                  ? "term-btn-active term-btn rounded-sm text-[10px] uppercase tracking-wide"
                  : "term-btn rounded-sm text-[10px] uppercase tracking-wide"
              }
            >
              [{f.label}]
            </button>
          );
        })}
      </div>

      <ul className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {filtered.map((p) => (
          <li key={p.id}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
