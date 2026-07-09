import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior full stack and applied AI engineer with five-plus years of production software across financial services, healthcare, government, and enterprise. React, TypeScript, Node.js, Python, AI systems.",
  alternates: { canonical: "/about/" },
};

const sectionHeading =
  "mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-term-teal";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About me"
        description="Senior full stack and applied AI engineer. Five-plus years of production software across financial services, healthcare, government, and enterprise."
      />
      <div className="max-w-2xl space-y-8 text-[13px] leading-relaxed text-term-body">

        <section>
          <h2 className={sectionHeading}>:: what I do</h2>
          <p>
            I build AI-powered software from product concept to shipped application. My work spans LLM agents, ML pipelines, real-time collaboration systems, React and TypeScript frontends, and Python backends. I care about the system design underneath the feature, and I hold that standard whether I am writing the code myself or reviewing what an AI tool generated.
          </p>
        </section>

        <section>
          <h2 className={sectionHeading}>:: where I have done it</h2>
          <p>
            At MassMutual, I worked on public-facing financial calculators used at scale: React and TypeScript, reusable component architecture, REST API integration, WCAG 2.1 AA accessibility, CI/CD, and remediation of over 2,400 security vulnerabilities. My MS in Industrial Engineering shapes how I approach software: I look at the full workflow, identify bottlenecks, and design for the system rather than the isolated feature.
          </p>
          <p className="mt-3">
            Through the GauntletAI Fellowship, I shipped deployed AI applications on intensive weekly cycles: agentic workflows, RAG systems, structured tool calling, evaluation harnesses, adversarial testing, and production observability for latency, cost, and failure analysis. I use Claude Code and Cursor daily and apply rigorous testing and human review to everything AI tools help produce.
          </p>
        </section>

        <section>
          <h2 className={sectionHeading}>:: how I think</h2>
          <p>
            I start from the problem, not the tool. I move quickly from a business requirement to a technical plan, working software, and measurable results. I communicate clearly with engineers, product teams, and nontechnical stakeholders, and I bring high ownership, curiosity, and energy to the teams I join.
          </p>
        </section>

        <section>
          <h2 className={sectionHeading}>:: what I am looking for</h2>
          <p>
            Best suited for Senior Software Engineer, Forward Deployed Engineer, Full Stack AI Engineer, Applied AI Engineer, or hands-on technical lead roles where strong execution, systems thinking, and direct business impact matter. Brooklyn, NY. Open to remote.
          </p>
        </section>

      </div>
    </>
  );
}
