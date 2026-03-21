import { socialLinks, personalInfo } from "@/app/data/portfolio";
import { ScrollReveal } from "./scroll-reveal";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto" />
          <p className="max-w-lg mx-auto text-muted mb-10 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out!
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-in-up" delay={200}>
          {/* Email CTA */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 mb-10"
          >
            <MailIcon className="w-5 h-5" />
            Say Hello
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.icon === "mail" ? undefined : "_blank"}
                  rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated text-muted transition-all hover:text-primary hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg"
                  aria-label={link.name}
                >
                  {Icon && <Icon />}
                </a>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
