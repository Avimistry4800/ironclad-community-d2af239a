import hyperImg from "@/assets/program-hypertrophy.jpg";
import shredImg from "@/assets/program-shred.jpg";
import perfImg from "@/assets/program-performance.jpg";

const PROGRAMS = [
  {
    no: "01",
    code: "HYPERTROPHY",
    goal: "Muscle Gain",
    img: hyperImg,
    desc: "Periodized progressive overload. 4-day upper/lower split, hypertrophy rep ranges, structured deloads. Includes macro-tracking, weekly check-ins, and accessory programming targeting lagging musculature.",
    schedule: ["Mon · Upper Push", "Tue · Lower Pull", "Thu · Upper Pull", "Fri · Lower Push"],
    intensity: 4,
    duration: "12 wk",
    sessions: "4 / wk",
    group: "1:6",
    outcome: "+8–14 lb LBM",
  },
  {
    no: "02",
    code: "SHRED",
    goal: "Fat Loss",
    img: shredImg,
    desc: "Metabolic conditioning meets calculated deficit. HIIT circuits, anaerobic intervals, fasted morning cardio protocols. Nutrition coaching with macro adjustments based on weekly biometric data.",
    schedule: ["Mon · MetCon", "Tue · HIIT 30", "Wed · Fasted LISS", "Fri · Glycolytic", "Sat · Conditioning"],
    intensity: 5,
    duration: "10 wk",
    sessions: "5 / wk",
    group: "1:8",
    outcome: "−4–8% body fat",
  },
  {
    no: "03",
    code: "PERFORMANCE",
    goal: "General Fitness",
    img: perfImg,
    desc: "Athletic preparation: mobility, plyometrics, strength endurance, stability. Designed for recreational athletes and weekend warriors who need balanced capacity across all energy systems.",
    schedule: ["Mon · Strength", "Wed · Power", "Fri · Conditioning", "Sun · Mobility"],
    intensity: 3,
    duration: "Ongoing",
    sessions: "3–4 / wk",
    group: "1:10",
    outcome: "+22% VO₂ max",
  },
];

export const Programs = () => {
  return (
    <section id="programs" className="relative bg-background py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary block mb-3">
              ⊹ Programs · By Goal
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Choose your<br />
              <span className="text-primary">target outcome.</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-sm text-silver leading-relaxed">
            Every program is periodized over a measurable cycle, with weekly accountability, biometrics,
            and adjustments. We don't run classes. We run protocols.
          </p>
        </div>

        {/* Three columns */}
        <div className="grid lg:grid-cols-3 gap-px bg-silver/15 border border-silver/15">
          {PROGRAMS.map((p) => (
            <article key={p.code} className="group bg-background p-6 md:p-8 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-7xl md:text-8xl text-stroke leading-none">{p.no}</span>
                <span className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim">
                  {p.goal}
                </span>
              </div>
              <div className="aspect-[4/5] overflow-hidden mb-5 -mx-6 md:-mx-8 md:mx-0">
                <img
                  src={p.img}
                  alt={`${p.code} program — ${p.goal}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="font-display text-3xl md:text-4xl uppercase">
                {p.code}
              </h3>

              <p className="mt-3 font-body text-[13px] text-silver leading-relaxed">{p.desc}</p>

              {/* Intensity meter */}
              <div className="mt-5 flex items-center gap-2">
                <span className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim w-16">
                  Intensity
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className={`h-2 w-6 ${i <= p.intensity ? "bg-primary" : "bg-elevated border border-silver/20"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Weekly schedule */}
              <div className="mt-5 border-t border-silver/15 pt-4">
                <div className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim mb-2">
                  Weekly Split
                </div>
                <ul className="space-y-1">
                  {p.schedule.map((s) => (
                    <li key={s} className="font-condensed text-xs uppercase tracking-wider text-silver flex items-center gap-2">
                      <span className="text-primary">›</span> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#book"
                className="mt-6 inline-flex items-center justify-between border-t border-silver/30 pt-4 font-condensed text-sm uppercase tracking-[0.2em] text-primary hover:text-primary-glow transition-colors"
              >
                Enroll in {p.code} <span>→</span>
              </a>
            </article>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-12 border border-silver/15">
          <div className="grid grid-cols-5 gap-px bg-silver/15">
            {["Program", "Duration", "Sessions / Wk", "Group Size", "Target Outcome"].map((h) => (
              <div key={h} className="bg-elevated p-3 font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim">
                {h}
              </div>
            ))}
            {PROGRAMS.map((p) => (
              <div key={p.code} className="contents">
                <div className="bg-background p-4 font-display text-xl uppercase text-foreground">{p.code}</div>
                <div className="bg-background p-4 font-condensed text-sm uppercase text-silver">{p.duration}</div>
                <div className="bg-background p-4 font-condensed text-sm uppercase text-silver">{p.sessions}</div>
                <div className="bg-background p-4 font-condensed text-sm uppercase text-silver">{p.group}</div>
                <div className="bg-background p-4 font-condensed text-sm uppercase text-primary">{p.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
