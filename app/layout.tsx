import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Outfit } from "next/font/google";
import { MainNav } from "@/components/MainNav";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

// Warm Vinyl type system (shared with Oh Sheet + TuneChat): Fraunces
// for display, Outfit for UI/body, JetBrains Mono kept for the
// terminal-flavored labels and chips.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "800"],
});

/** Canonical public URL — CI sets this; default is user-site root (see deploy workflow). */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://robin-raq.github.io";

const positioning = "Raq Robinson | Applied AI Software Engineer";
const siteDescription =
  "Applied AI software engineer in Brooklyn, NY. I build shipped AI products using LLM systems, audio ML pipelines, real-time collaboration, React, TypeScript, Python, and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl),
  title: {
    default: positioning,
    template: "%s | Raq Robinson",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: positioning,
    description: siteDescription,
    url: siteUrl,
    siteName: "Raq Robinson",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Raq Robinson, Applied AI Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: positioning,
    description: siteDescription,
    images: ["/og.png"],
  },
};

// Person schema: powers the knowledge-panel-style rich result for name
// searches — the highest-intent query a job seeker's portfolio gets.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raq Robinson",
  url: siteUrl,
  jobTitle: "Applied AI Software Engineer",
  email: "mailto:raqrobinson.dev@gmail.com",
  description: siteDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/robin-raq",
    "https://www.linkedin.com/in/robinsonraquel/",
  ],
  knowsAbout: [
    "Full-stack development",
    "AI agents and LLM systems",
    "Retrieval-augmented generation (RAG)",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "Real-time collaboration systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${outfit.variable} ${fraunces.variable} h-full font-sans antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-term-bg p-3 text-term-fg sm:p-6">
        <script
          type="application/ld+json"
          // Build-time-constant object (no user input). `<` is escaped
          // so no string value can ever close the script tag early —
          // the standard JSON-LD hardening from the Next.js docs.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
                PORTFOLIO.EXE :: FULLSTACK.EXPLORER
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
                SYSTEM READY | ROUTES INDEXED | STATIC EXPORT ONLINE
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
