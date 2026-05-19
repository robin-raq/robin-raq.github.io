import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Systems-minded engineer — Brooklyn, Industrial Engineering, React/Next.js/TS, AI, civic tech, Out in Tech Digital Corps.",
};

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="mb-8">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ boot --welcome
        </p>
        <h1 className="term-glow font-mono text-2xl font-bold tracking-tight text-term-bright sm:text-3xl">
          <span className="text-term-dim">&gt; </span>
          Raq Robinson
        </h1>
        <pre
          className="term-rule mt-3 max-w-xl overflow-x-auto text-[10px] text-term-muted sm:text-[11px]"
          aria-hidden
        >
          ─────────────────────────────────────────
        </pre>
        <p className="mt-4 max-w-xl text-[13px] leading-relaxed text-term-body">
          Systems-minded engineer · Brooklyn — performant, accessible systems with
          real-world impact; React, Next.js, TypeScript, AI/RAG, and civic and
          socially responsible tech.
        </p>
      </header>

      <section
        aria-label="Next step"
        className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
      >
        <Link
          href="/about"
          className="term-btn-active term-btn term-glow inline-flex w-fit items-center justify-center rounded-sm px-4 py-2 text-[12px] font-semibold uppercase tracking-wide no-underline"
        >
          [About me — full bio]
        </Link>
        <p className="text-[11px] text-term-dim">
          Or choose <span className="text-term-fg">[About]</span> in the nav
          above.
        </p>
      </section>
    </div>
  );
}
