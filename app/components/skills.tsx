import { skillCategories } from "@/app/data/portfolio";
import { Section } from "./section";

/**
 * A definition list, not five identical cards: the category is a label, the stack is
 * the value. Nothing here carries enough weight to deserve a card of its own.
 */
export function Skills() {
  return (
    <Section id="skills" label="skills">
      <dl className="divide-y divide-rule">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="py-4 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-x-6"
          >
            <dt className="font-mono text-sm text-muted">{category.name}</dt>
            <dd className="mt-2 font-mono text-sm sm:mt-0">
              {category.skills.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
