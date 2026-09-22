"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { navLinks, personalInfo } from "@/app/data/portfolio";

/** Matches the navbar height plus the sections' scroll-margin-top in globals.css. */
const NAV_LINE = 80;

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // The accent on a nav item marks a real state: the section being read. That is the
  // topmost one under the navbar, except at the foot of the page, where the last
  // sections fit inside the final viewport and can never reach the top of the screen.
  useEffect(() => {
    const ids = navLinks.map(({ href }) => href.slice(1));
    let queued = false;

    const pick = () => {
      queued = false;
      const boxes = ids
        .map((id) => ({ id, box: document.getElementById(id)?.getBoundingClientRect() }))
        .filter((s): s is { id: string; box: DOMRect } => Boolean(s.box));

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (atBottom) {
        // The last sections share one scroll position, so only the hash says which
        // one the reader actually asked for.
        const inView = boxes.filter(
          ({ box }) => box.bottom > NAV_LINE && box.top < window.innerHeight
        );
        const asked = inView.find(({ id }) => id === window.location.hash.slice(1));
        setActiveSection((asked ?? inView[inView.length - 1])?.id ?? "");
        return;
      }

      const crossing = boxes.find(({ box }) => box.top <= NAV_LINE && box.bottom > NAV_LINE);
      setActiveSection(crossing?.id ?? "");
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(pick);
    };

    pick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const linkClass = (href: string) =>
    `font-mono text-sm transition-colors ${
      activeSection === href.slice(1)
        ? "text-accent"
        : "text-muted hover:text-foreground"
    }`;

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-rule bg-background">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#hero"
            className="inline-flex min-h-11 items-center font-mono text-sm font-medium"
          >
            {personalInfo.shortName.toLowerCase()}
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="inline-flex min-h-11 items-center font-mono text-sm text-muted transition-colors hover:text-foreground"
            >
              {isOpen ? "close" : "menu"}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-nav"
          className="border-t border-rule bg-background px-5 pb-3 shadow-lg md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex min-h-11 items-center ${linkClass(link.href)}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/** Labelled in words rather than a sun/moon glyph: the page states its data in mono
 *  text, and a text control is unambiguous for screen readers too. */
function ThemeToggle({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${next} theme`}
      className="inline-flex min-h-11 items-center font-mono text-sm text-muted transition-colors hover:text-foreground md:min-h-0"
    >
      {next}
    </button>
  );
}
