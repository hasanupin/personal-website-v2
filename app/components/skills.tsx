import { skillCategories } from "@/app/data/portfolio";
import { skillIcons } from "./icons";
import { ScrollReveal } from "./scroll-reveal";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = skillIcons[category.icon];
            return (
              <ScrollReveal key={category.name} delay={i * 100}>
                <div className="group rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 h-full">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-bg text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {Icon && <Icon />}
                    </div>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-surface border border-border px-3 py-1.5 text-sm text-muted font-mono transition-colors hover:text-foreground hover:border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
