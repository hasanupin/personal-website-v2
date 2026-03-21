import { education } from "@/app/data/portfolio";
import { ScrollReveal } from "./scroll-reveal";
import { GraduationCapIcon } from "./icons";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up">
          <div className="max-w-2xl rounded-2xl border border-border bg-surface-elevated p-8 transition-all hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-bg text-primary flex-shrink-0">
                <GraduationCapIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {education.degree}
                </h3>
                <p className="text-primary font-medium mb-1">
                  {education.institution}
                </p>
                <p className="text-sm text-muted mb-3">{education.period}</p>
                <p className="text-sm text-muted leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
