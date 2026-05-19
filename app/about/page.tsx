import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Systems-minded engineer — Industrial Engineering background, React, Next.js, TypeScript, AI/RAG, and socially responsible tech.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About me"
        description="Systems-minded software engineer — technology that is well-engineered and socially responsible."
      />
      <div className="max-w-2xl space-y-4 text-[13px] leading-relaxed text-term-body">
        <p>
          I&apos;m a systems-minded software engineer focused on building
          technology that is both well-engineered and socially responsible. With
          a background in Industrial Engineering and ~5 years of experience
          across frontend and full stack development, I care deeply about
          building performant, maintainable, accessible systems that create
          meaningful real-world impact.
        </p>
        <p>
          My work spans everything from enterprise financial platforms and
          scalable frontend systems to AI-powered applications, RAG pipelines,
          and agentic workflows. Technically, I specialize in React, Next.js,
          TypeScript, data visualization, and accessibility, while also
          enjoying backend and infrastructure work across Node.js, Ruby on
          Rails, Python, AWS, and CI/CD systems.
        </p>
        <p>
          What defines my approach is curiosity and interdisciplinarity.
          I&apos;m drawn to exploratory environments where engineers collaborate
          closely across technical and non-technical domains to solve ambiguous
          problems thoughtfully. The work I&apos;m most proud of includes
          contributing to civic technology that expanded voter access and
          helping build systems designed with long-term reliability, usability,
          and impact in mind.
        </p>
        <p>
          Outside of engineering, I DJ and collaborate on community-focused
          creative and technology projects. I&apos;m also part of the{" "}
          <a
            href="https://outintech.com/digital-corps/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-term-bright underline decoration-green-800/60 hover:text-[var(--term-link-hover)]"
          >
            Out in Tech Digital Corps
          </a>
          , contributing web products for LGBTQ+ nonprofits and activist
          organizations.
        </p>
        <p>
          Currently based in Brooklyn and especially interested in thoughtful
          work at the intersection of AI, science, climate, healthcare, civic
          technology, and creative tools.
        </p>
      </div>
    </>
  );
}
