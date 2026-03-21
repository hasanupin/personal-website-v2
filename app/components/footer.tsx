export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Moh Hasanudin Muslim. Built with
          Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
