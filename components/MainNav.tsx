"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";

// Normalize path for active-state comparison: trailingSlash:true means
// usePathname() returns "/about/" but nav hrefs are "/about".
const normalize = (p: string) =>
  p === "/" ? "/" : p.replace(/\/?$/, "/");

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="flex flex-wrap items-center gap-2 text-[11px] leading-none"
    >
      <span className="mr-1 text-term-dim">&gt;</span>
      {primaryNav.map((item) => {
        const active = normalize(pathname) === normalize(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active
                ? "term-btn-active term-btn rounded-sm font-semibold uppercase tracking-wide"
                : "term-btn rounded-sm uppercase tracking-wide"
            }
          >
            [{item.label}]
          </Link>
        );
      })}
    </nav>
  );
}
