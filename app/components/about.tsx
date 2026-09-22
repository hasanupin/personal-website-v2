import { experiences, personalInfo, skillCategories } from "@/app/data/portfolio";
import { Section } from "./section";

// Derived from the record below, so the page cannot contradict the timeline.
const firstYear = experiences[experiences.length - 1].period.slice(0, 4);

export function About() {
  return (
    <Section id="about" label="about">
      <div className="max-w-2xl space-y-4 leading-relaxed">
        <p>
          I have been building payroll and HR systems since {firstYear}, for companies in
          Singapore and Indonesia, working remotely from {personalInfo.location}.
        </p>
        <p>
          Most of that work is the part of a product nobody sees: a salary calculation that has
          to be right to the rupiah, statutory rules that differ by country and change every
          year, and a leave balance that has to still reconcile after a policy is edited
          mid-cycle. The interesting problems are in the edge cases, not the dashboard.
        </p>
        <p>
          On a team I spend a fair share of my time in code review and on the testing and
          deployment side, because in payroll a regression is somebody&apos;s pay slip. I work
          across the stack, from Laravel services and MySQL schemas through to the React screens
          on top of them.
        </p>
      </div>

      <dl className="mt-10 grid grid-cols-[8rem_1fr] gap-x-4 gap-y-3 border-t border-rule pt-6 font-mono text-sm">
        <dt className="text-muted">since</dt>
        <dd>{firstYear}</dd>
        <dt className="text-muted">companies</dt>
        <dd>{experiences.length}</dd>
        <dt className="text-muted">payroll markets</dt>
        <dd>ID, MY</dd>
        <dt className="text-muted">core stack</dt>
        <dd>{skillCategories[1].skills.slice(0, 2).join(", ")}, React, MySQL</dd>
      </dl>
    </Section>
  );
}
