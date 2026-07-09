import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { publicPath } from "@/lib/publicPath";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Raq Robinson, Applied AI Software Engineer — view online or download the PDF.",
  alternates: { canonical: "/resume/" },
};

export default function ResumePage() {
  const resumePdf = publicPath("/resume.pdf");

  return (
    <>
      <PageHeader
        title="Resume"
        description="AI-first development resume, updated 2026. PDF is the source of truth for applications."
      />
      <div className="flex flex-wrap gap-2 font-mono text-[12px]">
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="term-btn term-btn-active rounded-sm no-underline"
        >
          [open pdf]
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={resumePdf}
          download="Raq_Robinson_Resume.pdf"
          className="term-btn rounded-sm no-underline"
        >
          [download]
        </a>
      </div>
      {/* Pre-rendered page-1 image instead of an <iframe> PDF: iframe
          embeds render blank on iOS Safari / Android Chrome and behave
          inconsistently on desktop. An image previews everywhere; the
          full document is one click away. Regenerate alongside the PDF:
          sips -s format png -Z 1400 public/resume.pdf --out public/resume-preview.png */}
      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the full resume PDF in a new tab"
        className="mt-6 block max-w-2xl overflow-hidden rounded-[10px] border border-term bg-white shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
        <img
          src={publicPath("/resume-preview.png")}
          alt="Resume preview, page 1 of 2: Raq Robinson — summary, technical skills, and professional experience"
          width={1082}
          height={1400}
          className="w-full"
        />
      </a>
      <p className="mt-2 font-mono text-[11px] text-term-dim">
        Page 1 of 2 — open the PDF for the full document.
      </p>
    </>
  );
}
