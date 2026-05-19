const GITHUB = "https://github.com/robin-raq";
const LINKEDIN = "https://www.linkedin.com/in/robinsonraquel/";

const linkClass =
  "text-term-bright underline decoration-green-800/60 hover:text-[var(--term-link-hover)]";

type Props = {
  formAction?: string;
};

/** Spam-resistant contact: prefer Formspree (set NEXT_PUBLIC_CONTACT_FORM_ACTION in env). */
export function ContactSection({ formAction }: Props) {
  const hasForm = Boolean(formAction && formAction.length > 0);

  return (
    <section aria-label="Contact form" className="font-mono">
      <p className="max-w-2xl text-[13px] leading-relaxed text-term-body">
        Prefer GitHub or LinkedIn for a first touch; use the form when it is
        configured with your Formspree (or similar) endpoint.
      </p>

      <ul className="mt-4 flex flex-wrap gap-4 text-[12px]">
        <li>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [GitHub]
          </a>
        </li>
        <li>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            [LinkedIn]
          </a>
        </li>
      </ul>

      {hasForm ? (
        <form
          action={formAction}
          method="POST"
          className="mt-6 max-w-lg space-y-3"
        >
          <input type="hidden" name="_gotcha" tabIndex={-1} autoComplete="off" />
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-term-dim"
            >
              name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="w-full border border-term bg-term-bg px-2 py-1.5 text-sm text-term-bright outline-none focus:ring-1 focus:ring-[var(--term-focus)]/50"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-term-dim"
            >
              email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="w-full border border-term bg-term-bg px-2 py-1.5 text-sm text-term-bright outline-none focus:ring-1 focus:ring-[var(--term-focus)]/50"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-term-dim"
            >
              message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="w-full border border-term bg-term-bg px-2 py-1.5 text-sm text-term-bright outline-none focus:ring-1 focus:ring-[var(--term-focus)]/50"
            />
          </div>
          <button type="submit" className="term-btn term-glow rounded-sm text-[11px] font-semibold">
            [EXEC] Send
          </button>
        </form>
      ) : (
        <p className="mt-4 text-[12px] text-term-dim">
          Form endpoint not set. Export{" "}
          <code className="rounded border border-term bg-term-bg px-1.5 py-0.5 text-[10px] text-term-fg">
            NEXT_PUBLIC_CONTACT_FORM_ACTION
          </code>{" "}
          to enable stdin.
        </p>
      )}
    </section>
  );
}
