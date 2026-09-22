import { education } from "@/app/data/portfolio";
import { Section } from "./section";

/** One entry, so it gets one entry: the same row shape as Experience, at a fraction
 *  of the height. Giving a single degree a full card would overstate it. */
export function Education() {
  return (
    <Section id="education" label="education">
      <div className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-x-6">
        <p className="font-mono text-sm text-muted">{education.period}</p>
        <div className="mt-3 sm:mt-0">
          <h3 className="font-semibold">{education.degree}</h3>
          <p className="font-mono text-sm text-muted">{education.institution}</p>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">{education.description}</p>
        </div>
      </div>
    </Section>
  );
}
