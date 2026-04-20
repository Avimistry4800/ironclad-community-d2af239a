import { useRef, useState } from "react";
import t1 from "@/assets/transformation-1.jpg";
import t2 from "@/assets/transformation-2.jpg";
import { Counter } from "./Counter";

const STORIES = [
  { name: "Daniel K.", age: 34, dur: "16 wk", weight: "−28 lb", bf: "−9.4%", lift: "DL +145", quote: "First time in my life I'm not guessing. The plan is the plan." },
  { name: "Priya S.", age: 29, dur: "12 wk", weight: "−14 lb", bf: "−6.1%", lift: "SQ +85", quote: "Showed up scared. Left with my first 200 lb deadlift." },
  { name: "Marco T.", age: 41, dur: "24 wk", weight: "+18 lb", bf: "−2.3%", lift: "BP +95", quote: "I came in plateaued for two years. They saw it in one session." },
  { name: "Lena R.", age: 26, dur: "20 wk", weight: "−22 lb", bf: "−8.0%", lift: "DL +120", quote: "It's not a gym. It's a system. And I needed a system." },
  { name: "Jordan B.", age: 38, dur: "10 wk", weight: "−11 lb", bf: "−4.5%", lift: "SQ +60", quote: "Sustainable. Brutal. Worth every minute." },
  { name: "Aisha N.", age: 31, dur: "18 wk", weight: "+9 lb LBM", bf: "−3.1%", lift: "BP +35", quote: "I built strength I didn't know was possible." },
  { name: "Ethan W.", age: 45, dur: "14 wk", weight: "−19 lb", bf: "−7.2%", lift: "DL +110", quote: "Best decision I've made in my forties." },
  { name: "Camille D.", age: 27, dur: "22 wk", weight: "−26 lb", bf: "−10.1%", lift: "SQ +95", quote: "FORGE doesn't make excuses. So I stopped making them too." },
];

export const Stories = () => {
  const [pos, setPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section id="stories" className="relative bg-background py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary block mb-3">
              ⊹ Member Transformations · Real Data
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              The receipts.<br />
              <span className="text-primary">No edits.</span>
            </h2>
          </div>
        </div>

        {/* Featured before/after slider */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-px bg-silver/15 border border-silver/15 mb-px">
          <div
            ref={sliderRef}
            className="relative aspect-[4/3] overflow-hidden bg-elevated cursor-ew-resize select-none touch-none"
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          >
            <img src={t1} alt="Athlete before transformation" className="absolute inset-0 h-full w-full object-cover grayscale" loading="lazy" width={1024} height={1280} />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <img src={t2} alt="Athlete after transformation" className="h-full w-full object-cover grayscale contrast-125" loading="lazy" width={1024} height={1280} />
            </div>
            <div className="absolute inset-y-0 w-px bg-primary" style={{ left: `${pos}%`, boxShadow: "0 0 20px hsl(var(--primary))" }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center bg-primary text-primary-foreground font-display text-lg">
                ⇆
              </div>
            </div>
            <div className="absolute top-4 left-4 font-condensed text-xs uppercase tracking-[0.25em] text-silver bg-background/70 backdrop-blur px-2 py-1">
              Week 0
            </div>
            <div className="absolute top-4 right-4 font-condensed text-xs uppercase tracking-[0.25em] text-primary bg-background/70 backdrop-blur px-2 py-1">
              Week 24
            </div>
          </div>
          <div className="bg-background p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="font-condensed text-[10px] uppercase tracking-[0.3em] text-primary mb-3">
                Featured Case · #00478
              </div>
              <h3 className="font-display text-4xl md:text-5xl uppercase leading-none">Daniel K.</h3>
              <p className="font-condensed text-xs uppercase tracking-[0.2em] text-silver mt-2">
                34 · Hypertrophy → Shred · 24 weeks
              </p>
              <p className="font-body text-sm text-silver leading-relaxed mt-6 italic">
                "Came in deconditioned and skeptical. Left with a deadlift PR, a wardrobe I had to replace,
                and the first sustainable training habit of my adult life."
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8 border-t border-silver/15 pt-6">
              <Metric label="Weight" value="−28 lb" />
              <Metric label="Body Fat" value="−9.4%" />
              <Metric label="Deadlift" value="+145" />
            </div>
          </div>
        </div>

        {/* Member grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-silver/15 border-x border-b border-silver/15">
          {STORIES.map((s) => (
            <article key={s.name} className="bg-background p-5 hover:bg-elevated transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-2xl">{s.name}</span>
                <span className="font-condensed text-[10px] uppercase tracking-wider text-silver-dim">{s.age}</span>
              </div>
              <div className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim mb-3">
                {s.dur}
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-b border-silver/15 py-3 mb-3">
                <MiniMetric label="WT" value={s.weight} />
                <MiniMetric label="BF" value={s.bf} />
                <MiniMetric label="LIFT" value={s.lift} />
              </div>
              <p className="font-body text-xs text-silver italic leading-snug">"{s.quote}"</p>
            </article>
          ))}
        </div>

        {/* Stat wall */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-silver/15 border border-silver/15">
          <BigStat end={3400} suffix="+" label="Athletes Coached" />
          <BigStat end={48000} suffix=" lb" label="Aggregate Body Fat Lost" />
          <BigStat end={92} suffix="%" label="Stick With Program" />
          <BigStat end={1240000} suffix=" lb" label="Combined PR Gains" />
        </div>
      </div>
    </section>
  );
};

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="font-display text-2xl md:text-3xl text-primary">{value}</div>
    <div className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim mt-1">{label}</div>
  </div>
);
const MiniMetric = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="font-condensed text-[9px] uppercase tracking-wider text-silver-dim">{label}</div>
    <div className="font-display text-sm text-foreground">{value}</div>
  </div>
);
const BigStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => (
  <div className="bg-background p-6 md:p-8">
    <div className="font-display text-4xl md:text-6xl text-foreground leading-none">
      <Counter end={end} suffix={suffix} />
    </div>
    <div className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim mt-3">
      {label}
    </div>
  </div>
);
