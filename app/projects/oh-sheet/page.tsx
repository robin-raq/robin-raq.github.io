import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oh Sheet — AI Sheet Music from Any Song",
  description:
    "Case study: Oh Sheet turns a YouTube link or audio upload into engraved piano sheet music with a five-stage AI pipeline — FastAPI, Celery, ML transcription, and MusicXML/PDF engraving. Built and shipped by Raq Robinson.",
  alternates: { canonical: "/projects/oh-sheet/" },
  openGraph: {
    title: "Oh Sheet — AI Sheet Music from Any Song",
    description:
      "Paste a YouTube link, get engraved piano sheet music. A five-stage AI pipeline case study.",
    images: [{ url: "/projects/oh-sheet-home.png", width: 1200, height: 800 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Oh Sheet",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://ohsheet-production-2026.up.railway.app",
  description:
    "Turns songs (YouTube links, audio, or MIDI) into playable, engraved piano sheet music using an AI transcription pipeline.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "Raq Robinson",
    url: "https://robin-raq.github.io",
  },
};

const stages = [
  {
    name: "Ingest",
    detail:
      "yt-dlp + FFmpeg pull and normalize audio; a cover-search fast path can swap a dense pop mix for a piano cover that transcribes cleaner, with automatic fallback to the original when the cover fails. Duration and livestream guards keep hour-long videos from monopolizing workers.",
  },
  {
    name: "Transcribe",
    detail:
      "ML pitch detection (Basic Pitch / PyTorch models) converts audio into note events with onset, duration, and velocity.",
  },
  {
    name: "Arrange",
    detail:
      "Note events become a two-hand piano arrangement — voice splitting, register mapping, and density control tuned by an evaluation suite.",
  },
  {
    name: "Humanize",
    detail:
      "Velocity and timing refinement so playback sounds performed, not quantized.",
  },
  {
    name: "Engrave",
    detail:
      "MusicXML and PDF engraving, delivered via a claim-check blob store and published straight into a TuneChat room for collaborative practice.",
  },
];

export default function OhSheetCaseStudy() {
  return (
    <article className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-4 font-mono text-[11px] text-term-dim">
        <Link href="/projects" className="hover:text-term-teal">
          Projects
        </Link>{" "}
        / <span className="text-term-body">Oh Sheet</span>
      </nav>

      <header className="mb-6">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ open --case-study=oh-sheet
        </p>
        <h1 className="term-glow text-2xl font-bold text-term-bright sm:text-3xl">
          Oh Sheet — AI sheet music from any song
        </h1>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-term-body">
          Paste a YouTube link or upload audio; get playable, engraved piano
          sheet music. Built as a five-stage AI pipeline with a team of five in
          a GauntletAI capstone sprint, then hardened and operated solo in
          production.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://ohsheet-production-2026.up.railway.app"
            target="_blank"
            rel="noopener noreferrer"
            className="term-btn term-btn-active rounded-sm text-[11px] no-underline"
          >
            [Try it live]
          </a>
          <a
            href="https://github.com/Oh-Sheet-Team/oh-sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="term-btn rounded-sm text-[11px] no-underline"
          >
            [GitHub]
          </a>
          <Link
            href="/projects/tunechat/"
            className="term-btn rounded-sm text-[11px] no-underline"
          >
            [Companion app: TuneChat]
          </Link>
        </div>
      </header>

      <figure className="mb-8 overflow-hidden rounded-[10px] border border-term bg-term-surface shadow-[var(--shadow-sm)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
        <img
          src="/projects/oh-sheet-home.png"
          alt="Oh Sheet home screen: a YouTube URL field and a Let's go button on warm cream paper, with a singing sheet-music mascot"
          className="w-full"
        />
        <figcaption className="border-t border-term px-4 py-2 font-mono text-[11px] text-term-dim">
          The whole product in one screen: paste a link, get sheet music.
        </figcaption>
      </figure>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          The pipeline
        </h2>
        <ol className="space-y-3">
          {stages.map((stage, i) => (
            <li
              key={stage.name}
              className="rounded-[10px] border border-term bg-term-surface p-4 shadow-[var(--shadow-xs)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-term-teal">
                {i + 1} · {stage.name}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-term-body">
                {stage.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          Engineering highlights
        </h2>
        <ul className="max-w-2xl list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-term-body">
          <li>
            <strong className="text-term-bright">Orchestration:</strong>{" "}
            FastAPI job manager fans out stages as Celery tasks over Redis,
            streaming progress to the browser over WebSockets with a typed
            Pydantic contract shared across services.
          </li>
          <li>
            <strong className="text-term-bright">Resilience:</strong> silent-
            failure contracts at every ingest boundary — cover-search misses,
            bot-checked downloads, and over-long videos degrade to clear user
            errors instead of hung jobs.
          </li>
          <li>
            <strong className="text-term-bright">Operations:</strong> deployed
            as a single-container Railway monolith with env-driven feature
            flags, worker isolation, and an eval suite gating arrangement
            quality in CI.
          </li>
          <li>
            <strong className="text-term-bright">Ecosystem:</strong> finished
            scores publish directly into{" "}
            <Link href="/projects/tunechat/" className="text-term-teal underline">
              TuneChat
            </Link>{" "}
            rooms, where the same score becomes a multiplayer practice session
            — both apps share the &ldquo;Warm Vinyl&rdquo; design system.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          Stack
        </h2>
        <ul className="flex max-w-2xl flex-wrap gap-1.5" aria-label="Tech stack">
          {[
            "Python 3.12",
            "FastAPI",
            "Celery",
            "Redis",
            "Pydantic",
            "Basic Pitch",
            "yt-dlp",
            "FFmpeg",
            "WebSockets",
            "Vite",
            "Docker",
            "Railway",
          ].map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-term bg-term-bg px-2 py-0.5 font-mono text-[10px] text-term-dim"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
