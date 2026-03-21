import { projects } from "@/app/data/portfolio";
import { ScrollReveal } from "./scroll-reveal";
import { ExternalLinkIcon, GithubIcon } from "./icons";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className="group flex flex-col h-full rounded-2xl border border-border bg-surface-elevated transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 overflow-hidden">
                {/* Color bar */}
                <div className="h-1 bg-gradient-to-r from-primary to-purple-500" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary-bg px-3 py-1 text-xs font-medium text-primary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
                      >
                        <ExternalLinkIcon />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Source
                      </a>
                    )}
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
