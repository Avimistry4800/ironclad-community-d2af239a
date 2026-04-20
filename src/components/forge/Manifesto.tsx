const TICKER = ["Strength", "Discipline", "Community", "No Shortcuts", "Earn It", "Show Up"];

export const Manifesto = () => {
  return (
    <section className="relative bg-background border-y border-silver/15 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="container relative">
        <div className="max-w-5xl">
          <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary block mb-6">
            ⊹ The Manifesto · 001
          </span>
          <blockquote className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-silver">
            "We are not a gym. We are a workshop —{" "}
            <span className="text-foreground">where weak signals are forged into</span>{" "}
            <span className="text-primary">unbreakable systems.</span>"
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="font-condensed text-xs uppercase tracking-[0.25em] text-primary">
              Marcus Rourke · Founder & Head Coach
            </span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 marquee border-y border-silver/15 py-5">
        <div className="marquee-track font-display text-3xl md:text-5xl uppercase tracking-tight whitespace-nowrap">
          {[...TICKER, ...TICKER, ...TICKER].map((w, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className={i % 2 === 0 ? "text-foreground" : "text-stroke"}>{w}</span>
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
