import { experiences } from "@/app/data/portfolio";
import { Section, TechList } from "./section";

/**
 * The densest block on the page, and the one a hiring reader came for: period and
 * location sit in a mono column so the timeline can be scanned without reading a word
 * of prose. No cards, no center rail, no icons.
 */
export function Experience() {
  return (
    <Section id="experience" label="experience">
      <ol>
        {experiences.map((exp) => (
          <li
            key={exp.company}
            className="border-t border-rule py-8 first:border-t-0 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-x-6"
          >
            <div className="font-mono text-sm text-muted">
              <p>{exp.period}</p>
              <p className="mt-1">{exp.location}</p>
            </div>

            <div className="mt-3 sm:mt-0">
              <h3 className="font-semibold">{exp.role}</h3>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {exp.company}
              </a>

              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{exp.description}</p>

              <ul className="mt-4 max-w-2xl space-y-2">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="font-mono text-muted">
                      &middot;
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <TechList items={exp.technologies} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
