import Link from "next/link";
import { PROFILE_AVATAR_SRC } from "@/lib/avatar";

const GITHUB = "https://github.com/robin-raq";
const LINKEDIN = "https://www.linkedin.com/in/robinsonraquel/";

const linkClass =
  "mt-0.5 block text-term-bright underline decoration-[var(--term-teal)]/60 underline-offset-2 hover:text-[var(--term-link-hover)]";

export function Sidebar() {
  return (
    <aside className="term-panel flex w-full shrink-0 flex-col overflow-hidden rounded-sm lg:w-72">
      <div className="term-titlebar px-3 py-2">
        <span className="text-[10px] tracking-[0.25em]">
          USER@PORTFOLIO:~$
        </span>
      </div>
      <pre
        className="term-rule border-b border-term px-2 py-1 text-[9px] text-term-dim sm:text-[10px]"
        aria-hidden
      >
        ═══════════════════════
      </pre>
      <div className="flex flex-1 flex-col p-4">
        <Link
          href="/"
          className="mx-auto block outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
        >
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[rgba(var(--term-glow-rgb),0.38)] bg-term-surface shadow-[0_0_22px_rgba(var(--term-glow-rgb),0.14)]">
            {/* eslint-disable-next-line @next/next/no-img-element -- next/image omits basePath in static HTML; GitHub Pages needs publicPath() */}
            <img
              src={PROFILE_AVATAR_SRC}
              alt="Raq Robinson"
              width={112}
              height={112}
              className="h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </Link>

        <div className="mt-4 text-center">
          <p className="term-glow text-base font-bold tracking-wide text-term-bright">
            Raq Robinson
          </p>
          <p className="mt-2 inline-block rounded border border-term bg-term-bg px-2 py-1 font-mono text-[10px] text-term-fg">
            {"{ applied_ai_software_engineer }"}
          </p>
        </div>

        <ul className="mt-6 space-y-3 text-[11px] leading-snug">
          <li>
            <p className="font-semibold uppercase tracking-wider text-term-dim">
              :: email
            </p>
            <a href="mailto:raqrobinson.dev@gmail.com" className={linkClass}>
              raqrobinson.dev
              <wbr />@gmail.com
            </a>
          </li>
          <li>
            <p className="font-semibold uppercase tracking-wider text-term-dim">
              :: linkedin
            </p>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className={`truncate ${linkClass}`}
            >
              linkedin.com/in/robinsonraquel
            </a>
          </li>
          <li>
            <p className="font-semibold uppercase tracking-wider text-term-dim">
              :: github
            </p>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className={`truncate ${linkClass}`}
            >
              github.com/robin-raq
            </a>
          </li>
          <li>
            <p className="font-semibold uppercase tracking-wider text-term-dim">
              :: location
            </p>
            <p className="mt-0.5 text-term-fg">Brooklyn, NY</p>
          </li>
          <li>
            <p className="font-semibold uppercase tracking-wider text-term-dim">
              :: resume
            </p>
            <a
              href="/resume.pdf"
              download="Raq_Robinson_Resume.pdf"
              className={linkClass}
            >
              Download PDF
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
