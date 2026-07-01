import { Link, useRouterState } from "@tanstack/react-router";
import { profile } from "@/lib/portfolio-data";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-display text-lg tracking-tight">
          Mercer<span className="text-muted-foreground">.studio</span>
        </Link>
        <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] md:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative transition-opacity hover:opacity-60 ${
                  active ? "" : "text-muted-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground" />
                )}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 border border-foreground px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground hover:text-background md:inline-flex"
        >
          Available — Q3
          <span className="size-1.5 rounded-full bg-foreground" />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center md:px-10">
        <div>© 2026 Mercer Studio. All rights reserved.</div>
        <div className="flex gap-6">
          <span>Designed & built in Brooklyn</span>
          <span>v 4.2</span>
        </div>
      </div>
    </footer>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      ( {index} ) — {label}
    </p>
  );
}
