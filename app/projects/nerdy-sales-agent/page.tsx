import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nerdy Sales Agent: Voice AI with Honest-Selling Guardrails",
  description:
    "Case study: Autonomous voice sales agent for Nerdy/Varsity Tutors. Five-phase state machine prevents AI overselling, adversarial eval harness with 10 caller personas, cost-optimized multi-model routing. Built by Raq Robinson.",
  alternates: { canonical: "/projects/nerdy-sales-agent/" },
  openGraph: {
    title: "Nerdy Sales Agent: Voice AI with Honest-Selling Guardrails",
    description:
      "A voice agent that can't close a sale it hasn't earned. State machine, adversarial evals, and cost-split model routing.",
    images: [
      { url: "/projects/nerdy-sales-agent.png", width: 1200, height: 800 },
    ],
  },
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nerdy Sales Agent",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://web-production-092d32.up.railway.app/demo",
  description:
    "Autonomous voice sales agent for Nerdy/Varsity Tutors. Qualifies inbound calls and quotes pricing through a five-phase state machine that prevents the agent from closing a sale it has not earned.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  author: {
    "@type": "Person",
    name: "Raq Robinson",
    url: "https://robin-raq.github.io",
  },
};

const phases = [
  {
    name: "Greet",
    detail:
      "Alex introduces itself, confirms the caller reached Nerdy, and opens the qualification conversation. No pricing information is shared at this stage.",
  },
  {
    name: "Qualify",
    detail:
      "The agent collects five required fields: student subject, grade level, learning goal, service area, and target start date. All five must be captured before the state machine unlocks the next phase. Each field is tracked individually so partial captures are preserved across the call.",
  },
  {
    name: "Handle objections",
    detail:
      "Price concerns, competitor comparisons, and scheduling hesitations are addressed here. The agent can re-enter this phase multiple times from later phases if new objections surface.",
  },
  {
    name: "Present and quote",
    detail:
      "Once all five qualifying fields are captured, the agent presents the tutoring offer and quotes the correct pricing tier. Pricing is read from a fixed table; the agent has no ability to invent discounts or adjust rates.",
  },
  {
    name: "Attempt close",
    detail:
      "The agent calls the attempt_close tool. The state machine rejects this call unless all five qualifying fields are confirmed present in the session context. A close cannot happen without them, regardless of what the agent says.",
  },
];

const personas = [
  { name: "coop_qualified_easy", expectation: "Close" },
  { name: "hesitant_warmable", expectation: "Close" },
  { name: "price_conscious_budgeted", expectation: "Close" },
  { name: "multi_objection_stacker", expectation: "Close" },
  { name: "competitor_comparing", expectation: "Close" },
  { name: "off_topic_redirector", expectation: "Disqualify" },
  { name: "timeframe_too_far_out", expectation: "Disqualify" },
  { name: "truly_cant_afford", expectation: "Disqualify" },
  { name: "out_of_service_area", expectation: "Disqualify" },
  { name: "hostile_abusive", expectation: "Disqualify" },
];

export default function NerdySalesAgentCaseStudy() {
  return (
    <article className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mb-4 font-mono text-[11px] text-term-dim"
      >
        <Link href="/projects" className="hover:text-term-teal">
          Projects
        </Link>{" "}
        / <span className="text-term-body">Nerdy Sales Agent</span>
      </nav>

      <header className="mb-6">
        <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-term-dim">
          $ open --case-study=nerdy-sales-agent
        </p>
        <h1 className="term-glow text-2xl font-bold text-term-bright sm:text-3xl">
          Nerdy Sales Agent: voice AI with honest-selling guardrails
        </h1>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-term-body">
          Autonomous voice sales agent built for Nerdy/Varsity Tutors as a
          GauntletAI hiring-partner project. The agent handles inbound tutoring
          inquiries, qualifies the caller, and quotes pricing. The core
          constraint: it cannot close a sale it has not earned.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="https://web-production-092d32.up.railway.app/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="term-btn term-btn-active rounded-sm text-[11px] no-underline"
          >
            [Live demo]
          </a>
          <a
            href="https://github.com/robin-raq/nerdy-sales-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="term-btn rounded-sm text-[11px] no-underline"
          >
            [GitHub]
          </a>
        </div>
      </header>

      <figure className="mb-8 overflow-hidden rounded-[10px] border border-term bg-term-surface shadow-[var(--shadow-sm)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
        <img
          src="/projects/nerdy-sales-agent.png"
          alt="Nerdy Sales Agent demo page showing the Talk to Alex voice interface and live evaluation dashboard with 35% conversion rate and 80.9% disqualification accuracy"
          className="w-full"
        />
        <figcaption className="border-t border-term px-4 py-2 font-mono text-[11px] text-term-dim">
          The demo page: voice call interface above, live eval metrics below.
          v3.2.0 reflects the current promoted prompt version.
        </figcaption>
      </figure>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          The business tradeoff at the center of the design
        </h2>
        <p className="max-w-2xl text-[13px] leading-relaxed text-term-body">
          The agent&rsquo;s{" "}
          <code className="rounded bg-term-surface px-1 font-mono text-[11px] text-term-teal">
            attempt_close
          </code>{" "}
          tool is rejected by the state machine unless all five required
          qualifying fields have been captured in the conversation. This is not
          a prompt-level instruction; it is an architectural constraint. The
          agent can say anything it wants, but the close physically cannot
          happen until the prerequisites are met.
        </p>
        <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-term-body">
          The tradeoff is deliberate: some callers who would have converted get
          disqualified because a field is missing. That is the right outcome.
          Trusting an AI to talk its way into a close it hasn&rsquo;t earned
          carries a real cost to Nerdy&rsquo;s reputation and customer trust,
          and no prompt is reliable enough to protect against that at scale. The
          state machine is.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          The five-phase state machine
        </h2>
        <ol className="space-y-3">
          {phases.map((phase, i) => (
            <li
              key={phase.name}
              className="rounded-[10px] border border-term bg-term-surface p-4 shadow-[var(--shadow-xs)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-term-teal">
                {i + 1} · {phase.name}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-term-body">
                {phase.detail}
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
            <strong className="text-term-bright">State machine as guardrail:</strong>{" "}
            the five qualifying fields are tracked in session state, not
            inferred from the conversation. The{" "}
            <code className="rounded bg-term-surface px-1 font-mono text-[11px] text-term-teal">
              attempt_close
            </code>{" "}
            tool validates presence of all five before executing. No prompt
            injection or conversational pressure can bypass this check.
          </li>
          <li>
            <strong className="text-term-bright">Cost-split model routing:</strong>{" "}
            GPT-4o runs the live customer-facing agent where quality matters.
            DeepSeek-Chat (approximately 10x cheaper) runs the same agent role
            inside the eval loop, where hundreds of simulated calls happen and
            GPT-4o costs would be prohibitive. Claude Haiku 4.5 plays both the
            adversarial caller personas and the judge that scores each call.
            Three models, three roles, chosen for cost and quality fit rather
            than defaulting to one.
          </li>
          <li>
            <strong className="text-term-bright">Adversarial eval harness:</strong>{" "}
            10 caller personas run through the agent, with a separate model
            scoring each call on conversion accuracy, disqualification
            correctness, and information capture rate. A promote/retire
            decision is made per prompt version based on aggregate results
            across all personas.
          </li>
          <li>
            <strong className="text-term-bright">Vapi voice integration:</strong>{" "}
            handles the telephony layer (STT, TTS, latency management, call
            lifecycle) so the state machine and tool logic run in TypeScript
            server-side rather than inside a voice SDK.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          Testing and evals
        </h2>
        <p className="mb-4 max-w-2xl text-[13px] leading-relaxed text-term-body">
          The eval harness runs all 10 adversarial personas through the agent
          and reports four metrics across the full run. The current promoted
          version (v3.2.0) results across 600 eval calls:
        </p>
        <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Conversion rate", value: "35.0%", sub: "210 of 600 calls closed" },
            { label: "Disqualification accuracy", value: "80.9%", sub: "474 / 586 correct outcomes" },
            { label: "Info capture", value: "60.6%", sub: "avg fields captured / 5" },
            { label: "False-close rate", value: "1.8%", sub: "11 false closes across the run" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-[10px] border border-term bg-term-surface p-4"
            >
              <p className="font-mono text-[10px] uppercase tracking-wide text-term-dim">
                {m.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-term-bright">{m.value}</p>
              <p className="mt-0.5 text-[11px] text-term-dim">{m.sub}</p>
            </div>
          ))}
        </div>
        <p className="mb-3 max-w-2xl text-[13px] leading-relaxed text-term-body">
          The 10 personas split into two expected-outcome groups:
        </p>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full max-w-2xl border-collapse font-mono text-[11px]">
            <thead>
              <tr className="border-b border-term text-left text-term-dim">
                <th className="pb-2 pr-4">Persona</th>
                <th className="pb-2">Expected outcome</th>
              </tr>
            </thead>
            <tbody>
              {personas.map((p) => (
                <tr key={p.name} className="border-b border-term/40">
                  <td className="py-1.5 pr-4 text-term-body">{p.name}</td>
                  <td
                    className={`py-1.5 ${
                      p.expectation === "Close"
                        ? "text-term-teal"
                        : "text-term-dim"
                    }`}
                  >
                    {p.expectation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-2xl text-[13px] leading-relaxed text-term-body">
          A 0% closed rate for{" "}
          <span className="font-mono text-term-teal">hostile_abusive</span> or{" "}
          <span className="font-mono text-term-teal">truly_cant_afford</span> is
          the system working correctly, not a failure. The eval harness scores
          these personas on disqualification accuracy, not conversion. The
          judge knows to expect a rejected close.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          Tradeoffs
        </h2>
        <ul className="max-w-2xl list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-term-body">
          <li>
            <strong className="text-term-bright">
              State machine strictness vs. conversion ceiling:
            </strong>{" "}
            requiring all five fields before closing means some real callers who
            would have bought get dropped at the gate because one field was
            missed. That is the intended behavior: the state machine protects
            Nerdy from an AI oversell even at the cost of some conversions.
            Adjusting which fields are required is the right dial to tune, not
            the gate itself.
          </li>
          <li>
            <strong className="text-term-bright">DeepSeek-Chat in eval vs. GPT-4o live:</strong>{" "}
            using a cheaper model in the eval loop means the eval
            does not perfectly replicate the live agent&rsquo;s behavior. In
            practice the outputs are close enough to surface prompt-version
            regressions reliably. If eval fidelity became a concern, running a
            sample of eval calls on GPT-4o alongside DeepSeek would close that
            gap.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          What I would improve next
        </h2>
        <ul className="max-w-2xl list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-term-body">
          <li>
            The eval dashboard does not currently distinguish &ldquo;correctly
            disqualified&rdquo; from &ldquo;should have converted but
            didn&rsquo;t&rdquo; in the per-persona table; both look the same
            to someone reading the raw numbers. Adding an expected-outcome
            column and color-coding it would make the dashboard immediately
            readable without needing to know the persona design decisions.
          </li>
          <li>
            The 60.6% info capture rate suggests the agent is losing qualifying
            fields during objection-handling phases. Adding a mid-call
            field-status prompt (a tool call that surfaces which fields are
            still missing) that would help the agent recover without the caller
            needing to repeat themselves.
          </li>
          <li>
            Extend the eval harness to score individual field capture per
            persona, not just the aggregate rate. That would pinpoint which
            field (subject, grade, location, etc.) drops most often and in
            which caller context.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="term-glow mb-3 text-lg font-semibold text-term-bright">
          Stack
        </h2>
        <ul className="flex max-w-2xl flex-wrap gap-1.5" aria-label="Tech stack">
          {[
            "TypeScript",
            "Vapi",
            "GPT-4o",
            "DeepSeek-Chat",
            "Claude Haiku 4.5",
            "State Machine",
            "Adversarial Eval Harness",
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
