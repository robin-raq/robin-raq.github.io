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
      <p className="font-mono text-[12px] text-term-body">
        <a
          href={resumePdf}
          download="Raq_Robinson_Resume.pdf"
          className="text-term-bright underline decoration-[var(--term-teal)]/60 hover:text-[var(--term-link-hover)]"
        >
          [download] resume.pdf
        </a>
      </p>
      <div className="mt-6 min-h-[65vh] w-full overflow-hidden rounded-[10px] border border-term bg-term-inset shadow-[var(--shadow-xs)]">
        <iframe
          title="Resume PDF"
          src={resumePdf}
          className="h-[65vh] w-full"
        />
      </div>
    </>
  );
}
