import { personalInfo } from "@/app/data/portfolio";
import { MapPinIcon, DownloadIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-40 dark:opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-sm text-muted mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.shortName}</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-muted mb-6">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted leading-relaxed mb-8">
          {personalInfo.tagline}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 text-sm text-muted mb-10">
          <MapPinIcon />
          <span>
            {personalInfo.location} / {personalInfo.currentWork}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface hover:-translate-y-0.5"
          >
            <DownloadIcon />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted/50 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-muted/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
