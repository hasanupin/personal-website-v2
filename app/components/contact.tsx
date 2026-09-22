import { personalInfo, socialLinks } from "@/app/data/portfolio";
import { Section } from "./section";

/** Every link is labelled with its destination, so there is nothing to guess at and
 *  no icon standing in for an address. */
export function Contact() {
  return (
    <Section id="contact" label="contact">
      <p className="max-w-2xl leading-relaxed">
        If you are hiring for payroll, HR, or fintech work in Southeast Asia, or you have a
        system that has outgrown its first design, write to me. I read everything and reply to
        anything specific.
      </p>

      <dl className="mt-8 divide-y divide-rule">
        {socialLinks.map((link) => (
          <div
            key={link.name}
            className="py-3 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-x-6"
          >
            <dt className="font-mono text-sm text-muted">{link.name.toLowerCase()}</dt>
            <dd className="mt-1 sm:mt-0">
              <a
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex min-h-11 items-center font-mono text-sm underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent sm:min-h-0"
              >
                {link.handle}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <a
        href={`mailto:${personalInfo.email}`}
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 font-mono text-sm text-accent-contrast transition-opacity hover:opacity-90"
      >
        Write to me
      </a>
    </Section>
  );
}
