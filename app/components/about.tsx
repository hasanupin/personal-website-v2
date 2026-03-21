import { personalInfo, stats } from "@/app/data/portfolio";
import { ScrollReveal } from "./scroll-reveal";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <ScrollReveal animation="slide-in-left">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a Full-Stack Software Engineer with over 5 years of
                experience building scalable web applications. Currently based
                in {personalInfo.location}, working remotely for companies in
                Singapore.
              </p>
              <p>
                My expertise spans from backend systems with PHP/Laravel to
                modern frontend applications with React and TypeScript. I&apos;m
                passionate about writing clean, maintainable code and building
                products that make a real impact.
              </p>
              <p>
                I thrive in collaborative environments where I can contribute to
                architecture decisions, mentor team members, and continuously
                learn new technologies. When I&apos;m not coding, I enjoy
                exploring new tech stacks and contributing to the developer
                community.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal animation="slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface-elevated p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
