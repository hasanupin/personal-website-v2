import { personalInfo } from "@/app/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p>Next.js, Tailwind CSS, IBM Plex</p>
      </div>
    </footer>
  );
}
