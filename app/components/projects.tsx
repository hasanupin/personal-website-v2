import { projects } from "@/app/data/portfolio";
import { Section, TechList } from "./section";

/**
 * Two weights, because the work has two weights: shipped platforms carry a full entry,
 * smaller internal systems carry a line. Six identical cards would flatten that difference.
 * Nothing links to a "demo" that a visitor cannot open.
 */
const platforms = projects.filter((p) => p.companyUrl);
const other = projects.filter((p) => !p.companyUrl);

export function Projects() {
  return (
    <Section id="projects" label="projects">
      <ol className="divide-y divide-rule">
        {platforms.map((project) => (
          <li key={project.title} className="py-8 first:pt-0">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">{project.description}</p>
            <div className="mt-4">
              <TechList items={project.technologies} />
            </div>
            <a
              href={project.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-mono text-sm text-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {project.companyUrl?.replace("https://", "")}
            </a>
          </li>
        ))}
      </ol>

      <h3 className="mt-10 border-t border-rule pt-8 font-mono text-sm text-muted">
        other work
      </h3>
      <ul className="mt-5 space-y-6">
        {other.map((project) => (
          <li key={project.title} className="sm:grid sm:grid-cols-[1fr_auto] sm:gap-x-6">
            <div className="max-w-2xl">
              <h4 className="font-medium">{project.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <p className="mt-2 font-mono text-xs text-muted">
                {project.technologies.join(", ")}
              </p>
            </div>
            <p className="mt-2 font-mono text-xs text-muted sm:mt-1 sm:text-right">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {project.githubUrl.replace("https://", "")}
                </a>
              ) : (
                "client-owned, not public"
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
