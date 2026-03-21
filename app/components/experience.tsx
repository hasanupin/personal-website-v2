import { experiences } from "@/app/data/portfolio";
import { ScrollReveal } from "./scroll-reveal";
import { BriefcaseIcon, MapPinIcon } from "./icons";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.company}
              animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={i * 150}
            >
              <div
                className={`relative mb-12 last:mb-0 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:pr-12 md:ml-0"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 ${
                    i % 2 === 0
                      ? "left-2 md:left-auto md:-right-2"
                      : "left-2 md:-left-2"
                  }`}
                />

                {/* Card */}
                <div className="ml-10 md:ml-0 rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:shadow-lg">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light font-medium transition-colors"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <div className="text-right text-sm text-muted">
                      <div className="flex items-center gap-1">
                        <BriefcaseIcon />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPinIcon />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted mb-4">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary-bg px-3 py-1 text-xs font-medium text-primary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
