import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { MainNav } from "@/components/MainNav";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

/** Canonical public URL — CI sets this; default is user-site root (see deploy workflow). */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://robin-raq.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl),
  title: {
    default: "Raq Robinson | Senior Fullstack Engineer",
    template: "%s | Raq Robinson",
  },
  description:
    "Fullstack engineer building secure, scalable, user-centered apps — React, TypeScript, Node.js, AI systems, and enterprise financial tools.",
  openGraph: {
    title: "Raq Robinson | Senior Fullstack Engineer",
    description:
      "Portfolio: GauntletAI fellowship work, MassMutual, and selected projects.",
    url: siteUrl,
    siteName: "Raq Robinson",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full font-mono antialiased`}
      suppressHydrationWarning
    >
      <body className="crt-scanlines relative min-h-screen bg-term-bg p-3 text-term-fg sm:p-6">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:border focus:border-[var(--term-focus)] focus:bg-term-surface focus:px-3 focus:py-2 focus:text-term-bright focus:outline-none"
        >
          Skip to content
        </a>
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-6xl flex-col gap-4 lg:flex-row lg:gap-5">
          <Sidebar />
          <div className="term-panel flex min-h-[calc(100vh-2rem)] flex-1 flex-col overflow-hidden rounded-sm">
            <div className="term-titlebar flex shrink-0 items-center gap-2 px-3 py-2">
              <span aria-hidden className="text-term-dim">
                ●
              </span>
              <span className="term-glow font-semibold tracking-[0.2em]">
                PORTFOLIO.EXE — FULLSTACK.EXPLORER
              </span>
            </div>
            <pre
              className="term-rule shrink-0 overflow-x-auto border-b border-term px-3 py-1 text-[10px] text-term-dim sm:text-[11px]"
              aria-hidden
            >
              ═══════════════════════════════════════════════════════════════
            </pre>
            <div className="border-b border-term bg-term-bg px-3 py-2">
              <p className="mb-2 text-[10px] uppercase tracking-widest text-term-dim opacity-80">
                SYSTEM READY — ROUTES INDEXED — STATIC EXPORT ONLINE
              </p>
              <MainNav />
            </div>
            <div
              id="main"
              className="relative mx-2 mb-2 mt-2 flex flex-1 flex-col rounded-sm border border-term bg-term-inset p-4 sm:mx-3 sm:mb-3 sm:p-6"
            >
              <div className="flex flex-1 flex-col">{children}</div>
              <footer className="mt-10 border-t border-dashed border-term pt-4 text-center text-[10px] text-term-dim">
                © {new Date().getFullYear()} Raq Robinson · EOF
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
