import { personalInfo } from "@/app/data/portfolio";

/**
 * The one break from the section frame: no rail, one focal point (the name), and
 * the only generous whitespace on the page. Everything below it is dense by contrast.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto w-full max-w-5xl px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-24"
    >
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
        {personalInfo.name}
      </h1>

      <p className="mt-3 text-lg text-muted sm:text-xl">{personalInfo.title}</p>

      <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
        {personalInfo.tagline}
      </p>

      <dl className="mt-10 grid max-w-md grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 font-mono text-sm">
        <dt className="text-muted">based</dt>
        <dd>{personalInfo.location}</dd>
        <dt className="text-muted">working</dt>
        <dd>{personalInfo.currentWork} (remote)</dd>
        <dt className="text-muted">status</dt>
        <dd>{personalInfo.availability}</dd>
      </dl>

      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 font-mono text-sm text-accent-contrast transition-opacity hover:opacity-90"
        >
          {personalInfo.email}
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-rule px-5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
}
