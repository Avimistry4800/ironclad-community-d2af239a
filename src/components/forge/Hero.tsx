import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-athlete.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";
import coach4 from "@/assets/coach-4.jpg";
import coach5 from "@/assets/coach-5.jpg";
import coach6 from "@/assets/coach-6.jpg";
import { Counter } from "./Counter";

const ROSTER = [
  { img: coach1, name: "M. Rourke", spec: "Strength" },
  { img: coach2, name: "S. Vance", spec: "Conditioning" },
  { img: coach3, name: "D. Okafor", spec: "Performance" },
  { img: coach4, name: "A. Tanaka", spec: "Mobility" },
  { img: coach5, name: "J. Volkov", spec: "Powerlifting" },
  { img: coach6, name: "I. Reyes", spec: "Hypertrophy" },
];

export const Hero = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.05)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background pt-16">
      {/* Parallax portrait */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={heroImg}
          alt="Athlete performing a heavy deadlift in a high-contrast black and white gym setting"
          className="h-full w-full object-cover object-[60%_center] md:object-center grayscale"
          width={1600}
          height={1920}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-fade)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent md:to-background/10" />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" />

      {/* Side rail */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
        <span className="font-condensed text-[10px] uppercase tracking-[0.3em] text-silver-dim [writing-mode:vertical-rl] rotate-180">
          Est. 2014 · No Shortcuts
        </span>
      </div>
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
        <span className="font-condensed text-[10px] uppercase tracking-[0.3em] text-silver-dim [writing-mode:vertical-rl]">
          Scroll · Discover the System
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 container flex min-h-[calc(100vh-4rem)] flex-col justify-end pb-10 pt-24">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-6 animate-fade-in">
            <span className="h-px w-12 bg-primary" />
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary">
              Strength Studio · Brooklyn NY
            </span>
          </div>
          <h1 className="font-display text-[18vw] md:text-[14vw] lg:text-[11rem] xl:text-[13rem] uppercase leading-[0.85] clip-reveal">
            Built,<br />
            <span className="text-stroke">Not</span> <span className="text-primary">Born.</span>
          </h1>
          <p className="mt-8 max-w-xl font-body text-base md:text-lg text-silver leading-relaxed animate-fade-in [animation-delay:300ms]">
            We don't sell memberships. We forge athletes. Programmed, coached, and accountable —
            every rep tracked, every milestone earned.
          </p>

          {/* CTA + stat strip */}
          <div className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-6 animate-fade-in [animation-delay:500ms]">
            <a
              href="#book"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-condensed font-bold uppercase tracking-[0.18em] text-sm px-7 py-4 hover:bg-primary-glow transition-colors"
              style={{ boxShadow: "var(--shadow-orange)" }}
            >
              Claim Free Session →
            </a>
            <div className="flex gap-8 md:gap-12 text-foreground">
              <Stat value={11} suffix="" label="Years Operating" />
              <Stat value={3400} suffix="+" label="Athletes Trained" />
              <Stat value={47} suffix="" label="Combined Certs" />
            </div>
          </div>
        </div>

        {/* Coach roster strip */}
        <div className="mt-14 border-t border-silver/15 pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-condensed text-[11px] uppercase tracking-[0.3em] text-silver-dim">
              The Coaching Roster
            </span>
            <a href="#coaches" className="font-condensed text-[11px] uppercase tracking-[0.2em] text-silver hover:text-primary transition-colors">
              Meet the team →
            </a>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {ROSTER.map((c) => (
              <a key={c.name} href="#coaches" className="group block">
                <div className="aspect-square overflow-hidden bg-elevated">
                  <img
                    src={c.img}
                    alt={`Coach ${c.name}, ${c.spec} specialist`}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover grayscale duotone-orange group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-2">
                  <div className="font-condensed text-xs uppercase tracking-wider text-foreground">{c.name}</div>
                  <div className="font-condensed text-[10px] uppercase tracking-wider text-silver-dim">{c.spec}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => (
  <div>
    <div className="font-display text-4xl md:text-5xl text-foreground leading-none">
      <Counter end={value} suffix={suffix} />
    </div>
    <div className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim mt-1">{label}</div>
  </div>
);
