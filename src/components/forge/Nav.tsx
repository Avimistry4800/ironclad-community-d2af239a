import { useEffect, useState } from "react";

const LINKS = [
  { id: "programs", label: "Programs" },
  { id: "coaches", label: "Coaches" },
  { id: "stories", label: "Stories" },
  { id: "schedule", label: "Schedule" },
  { id: "book", label: "Book" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-silver/20" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center border border-silver/40 group-hover:border-primary transition-colors">
            <span className="font-display text-xl text-foreground group-hover:text-primary transition-colors">N</span>
          </span>
          <span className="font-display text-xl tracking-wider hidden sm:inline">NYC IRON</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-condensed text-sm uppercase tracking-[0.18em] text-silver hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden lg:flex items-center font-condensed text-[11px] uppercase tracking-[0.2em] text-silver-dim ticker-dot">
            Open · 47 athletes in session
          </span>
          <a
            href="#book"
            className="bg-primary text-primary-foreground font-condensed font-bold uppercase tracking-[0.18em] text-xs px-5 py-2.5 hover:bg-primary-glow transition-colors"
            style={{ boxShadow: "var(--shadow-orange)" }}
          >
            Book Trial
          </a>
        </div>
      </div>
    </header>
  );
};
