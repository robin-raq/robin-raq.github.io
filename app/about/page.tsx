import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior full stack and applied AI engineer — five-plus years of production software across financial services, healthcare, government, and enterprise. React, TypeScript, Node.js, Python, AI systems.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About me"
        description="Senior full stack and applied AI engineer — systems thinking from business problem to measurable results."
      />
      <div className="max-w-2xl space-y-4 text-[13px] leading-relaxed text-term-body">
        <p>
          Senior full stack and applied AI engineer with more than five years
          of experience building production software across financial
          services, healthcare, government, and enterprise environments. I
          combine deep React and TypeScript expertise with backend development
          in Node.js and Python, API design, relational data systems,
          automated testing, cloud delivery, and production reliability.
        </p>
        <p>
          At MassMutual, I delivered customer facing financial applications
          used at scale, led technical implementation across product and
          design teams, contributed to a zero downtime platform
          modernization, improved development velocity through reusable
          component architecture, and helped remediate more than 2,400
          security vulnerabilities. My MS in Industrial Engineering shapes how
          I approach software: I look beyond an isolated feature to understand
          the full workflow, identify bottlenecks, and design systems that
          improve both the product and the way the organization operates.
        </p>
        <p>
          Through the Gauntlet AI Fellowship, I have been shipping deployed AI
          applications on intensive, weeklong delivery cycles. My work
          includes agentic workflows, RAG systems, structured tool calling,
          evaluation harnesses, adversarial testing, and observability for
          latency, cost, reliability, and failure analysis. I use Claude Code,
          Cursor, and AI coding agents daily while applying rigorous testing
          and human review to the software they help produce.
        </p>
        <p>
          I am strongest in ambiguous environments where I can move quickly
          from a business problem to a technical plan, working software, and
          measurable results. I communicate clearly with engineers, product
          leaders, clients, and nontechnical stakeholders, and I bring high
          ownership, curiosity, and energy to the teams I join.
        </p>
        <p>
          Best suited for Senior Software Engineer, Forward Deployed
          Engineer, Full Stack AI Engineer, Applied AI Engineer, or hands on
          technical lead opportunities where strong execution, systems
          thinking, and direct business impact matter.
        </p>
      </div>
    </>
  );
}
