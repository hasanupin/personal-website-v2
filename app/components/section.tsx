import { sectionIndex } from "@/app/data/portfolio";

/**
 * The repeated frame: a sticky monospace rail carrying the section index and slug,
 * with the content column beside it. The rail stays in view while a section is read,
 * so the reader always knows where they are. Hero is the one section that skips it.
 */
export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-rule">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20 md:grid md:grid-cols-[6rem_1fr] md:gap-x-10">
        <h2 className="mb-8 flex items-baseline gap-2 font-mono text-sm md:sticky md:top-24 md:mb-0 md:flex-col md:items-start md:gap-1 md:self-start">
          <span className="text-accent">{sectionIndex(`#${id}`)}</span>
          <span className="text-muted">{label}</span>
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

/** Inline stack token. 2px radius, never a pill (DESIGN.md radius scale). */
export function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5 font-mono text-xs text-muted">
      {items.map((item) => (
        <li key={item} className="rounded-sm bg-surface px-2 py-1">
          {item}
        </li>
      ))}
    </ul>
  );
}
