import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TuneChat — Multiplayer Piano Rooms in the Browser",
  description:
    "Case study: TuneChat is a real-time collaborative music app — multiplayer piano over WebSockets, synced sheet music, a piano-roll waterfall, practice-speed playback, and a PyTorch transcription engine. Built by Raq Robinson.",
  alternates: { canonical: "/projects/tunechat/" },
  openGraph: {
    title: "TuneChat — Multiplayer Piano Rooms in the Browser",
    description:
      "Play piano together live, read the same score, practice at half speed. A real-time systems case study.",
    images: [{ url: "/projects/tunechat-room.png", width: 1200, height: 800 }],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TuneChat",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Web",
  url: "https://tunechat.raqdrobinson.com",
  description:
    "Real-time collaborative piano rooms: multiplayer note streaming, synced scores, piano-roll view, chat with an AI coach, and a transcription pipeline.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "Raq Robinson",
    url: "https://robin-raq.github.io",
  },
};

export default function TuneChatCaseStudy() {
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
        / <span className="text-term-body">TuneChat</span>
      </nav>

      <header className="mb-6">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ open --case-study=tunechat
        </p>
        <h1 className="term-glow text-2xl font-bold text-term-bright sm:text-3xl">
          TuneChat — multiplayer piano rooms in the browser
        </h1>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-term-body">
          Create a room, share the link, and play piano together in real time —
          everyone hears every note, reads the same score, and chats alongside
          an AI coach. TuneChat is the collaborative half of the ecosystem:
          when <Link href="/projects/oh-sheet/" className="text-term-teal underline">Oh Sheet</Link>{" "}
          finishes transcribing a song, the score lands here, ready to practice.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://tunechat.raqdrobinson.com"
            target="_blank"
            rel="noopener noreferrer"
            className="term-btn term-btn-active rounded-sm text-[11px] no-underline"
          >
            [Try it live]
          </a>
          <a
            href="https://github.com/robin-raq/TuneChat"
            target="_blank"
            rel="noopener noreferrer"
            className="term-btn rounded-sm text-[11px] no-underline"
          >
            [GitHub]
          </a>
          <Link
            href="/projects/oh-sheet/"
            className="term-btn rounded-sm text-[11px] no-underline"
          >
            [Companion app: Oh Sheet]
          </Link>
        </div>
      </header>

      <figure className="mb-8 overflow-hidden rounded-[10px] border border-term bg-term-surface shadow-[var(--shadow-sm)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
        <img
          src="/projects/tunechat-room.png"
          alt="TuneChat room showing engraved sheet music, a chat panel, and a playable piano keyboard with QWERTY key hints"
          className="w-full"
        />
        <figcaption className="border-t border-term px-4 py-2 font-mono text-[11px] text-term-dim">
          A room in session: score, chat, and a live keyboard — every note
          broadcast to the room.
        </figcaption>
      </figure>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          Engineering highlights
        </h2>
        <ul className="max-w-2xl list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-term-body">
          <li>
            <strong className="text-term-bright">Phase-aware note protocol:</strong>{" "}
            key-down and key-up travel as attack/release events over Socket.io,
            so remote listeners hear true legato instead of fixed-duration
            staccato — with a backward-compatible legacy payload for older
            clients mid-deploy.
          </li>
          <li>
            <strong className="text-term-bright">Three synced views of one clock:</strong>{" "}
            Tone.js Transport drives audio, the OpenSheetMusicDisplay cursor,
            and a piano-roll waterfall from a single scheduler — which made
            variable-speed practice playback (¼×–1×, pitch-preserving,
            adjustable mid-piece) nearly free.
          </li>
          <li>
            <strong className="text-term-bright">Cost-guarded AI coach:</strong>{" "}
            an in-room @coach powered by Claude, protected by per-room token
            buckets so no burst of sockets can run up API spend.
          </li>
          <li>
            <strong className="text-term-bright">Transcription engine:</strong>{" "}
            a PyTorch piano-transcription + MuseScore CLI pipeline turns
            uploads into engraved scores — the same engine that serves as Oh
            Sheet&rsquo;s backend.
          </li>
          <li>
            <strong className="text-term-bright">Tested end to end:</strong>{" "}
            ~850 tests across client (Vitest) and server (Jest), including the
            wire protocol, playback scheduling, and socket handlers.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          Stack
        </h2>
        <ul className="flex max-w-2xl flex-wrap gap-1.5" aria-label="Tech stack">
          {[
            "Node.js",
            "Express",
            "Socket.io",
            "Vanilla JS",
            "Vite",
            "Tone.js",
            "OpenSheetMusicDisplay",
            "PyTorch",
            "MuseScore CLI",
            "Claude API",
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
