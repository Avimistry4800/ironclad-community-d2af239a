export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-silver/15 overflow-hidden">
      {/* Faded monogram */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 font-display text-[40vw] leading-none text-foreground/[0.025] pointer-events-none select-none">
        FORGE
      </div>

      <div className="container relative pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="grid h-10 w-10 place-items-center border border-primary">
                <span className="font-display text-2xl text-primary">F</span>
              </span>
              <span className="font-display text-2xl tracking-wider">FORGE</span>
            </div>
            <p className="font-body text-sm text-silver max-w-md leading-relaxed">
              A high-performance strength studio in Brooklyn. Built around three principles:
              <span className="text-primary"> programmed effort, measurable progress, no shortcuts.</span>
            </p>
            <form className="mt-6 flex max-w-md border border-silver/30 focus-within:border-primary transition-colors">
              <input
                type="email"
                placeholder="Email for the weekly bulletin"
                className="flex-1 bg-transparent px-4 py-3 outline-none font-condensed text-sm uppercase tracking-wider placeholder:text-silver-dim"
              />
              <button
                type="button"
                className="bg-primary text-primary-foreground px-5 font-condensed text-xs uppercase tracking-[0.2em] hover:bg-primary-glow transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <FooterCol title="Studio" items={[
            "284 Kent Avenue",
            "Brooklyn · NY 11249",
            "+1 (718) 555-0148",
            "hello@forge.studio",
          ]} />
          <FooterCol title="Hours" items={[
            "Mon–Fri · 05:30–22:00",
            "Sat · 07:00–18:00",
            "Sun · 08:00–14:00",
            "365 days / year",
          ]} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 border-t border-silver/15 pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-condensed text-[11px] uppercase tracking-[0.2em] text-silver-dim">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">YouTube</a>
            <a href="#" className="hover:text-primary">Strava</a>
            <a href="#" className="hover:text-primary">Members Login →</a>
          </div>
          <div className="font-condensed text-[11px] uppercase tracking-[0.2em] text-silver-dim md:text-right">
            © 2026 FORGE Strength Co. · Built, not born.
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <div className="font-condensed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
      {title}
    </div>
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="font-condensed text-sm uppercase tracking-wider text-silver">{i}</li>
      ))}
    </ul>
  </div>
);
