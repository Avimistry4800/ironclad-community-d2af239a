import { useState } from "react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";
import coach4 from "@/assets/coach-4.jpg";
import coach5 from "@/assets/coach-5.jpg";
import coach6 from "@/assets/coach-6.jpg";

const COACHES = [
  {
    img: coach1, name: "Marcus Rourke", role: "Founder · Head Coach",
    years: 16, certs: ["NSCA-CSCS", "Westside Method L2", "USAW-2", "PN Nutrition L1"],
    spec: ["Powerlifting", "Strength Bias", "Programming"],
    bio: "Former competitive powerlifter (945 raw total). Built NYC Iron in 2014 after 8 years coaching collegiate athletes. Specializes in long-arc strength periodization for intermediate-to-advanced lifters.",
    prs: ["DL 705", "SQ 615", "BP 425"],
  },
  {
    img: coach2, name: "Sloane Vance", role: "Conditioning Lead",
    years: 11, certs: ["NASM-CPT", "PN-L2", "RKC Kettlebell", "CrossFit L3"],
    spec: ["Conditioning", "Fat Loss", "Female Performance"],
    bio: "Ex-D1 rower. Designs NYC Iron's metabolic protocols and runs the SHRED program. Trained 400+ women through measurable composition change without crash dieting.",
    prs: ["2k Row 6:48", "Murph 38:12"],
  },
  {
    img: coach3, name: "Damon Okafor", role: "Performance Coach",
    years: 9, certs: ["NSCA-CSCS", "FRC Mobility Specialist", "EXOS Phase 3"],
    spec: ["Athletic Prep", "Plyometrics", "Return-to-Sport"],
    bio: "Former pro rugby. Now bridges general-pop training with elite athletic prep. Owns the PERFORMANCE program and post-injury reconditioning.",
    prs: ["Vert 38\"", "40yd 4.51"],
  },
  {
    img: coach4, name: "Ayame Tanaka", role: "Mobility & Movement",
    years: 8, certs: ["FRC Specialist", "FR Specialist", "PRI L1", "RYT-500"],
    spec: ["Mobility", "Joint Health", "Movement Quality"],
    bio: "Background in physical therapy and movement integration. Leads NYC Iron's mobility curriculum and works 1-on-1 with athletes battling chronic restrictions.",
    prs: ["Front Split", "Stand-to-Stand Bridge"],
  },
  {
    img: coach5, name: "Jakob Volkov", role: "Powerlifting Coach",
    years: 13, certs: ["IPF Level 2", "NSCA-CSCS", "Westside L1"],
    spec: ["Powerlifting", "Raw Strength", "Meet Prep"],
    bio: "IPF national-level competitor. Programs for NYC Iron's raw lifters and runs quarterly meet-prep blocks. No-nonsense execution with athletes targeting elite totals.",
    prs: ["DL 760", "SQ 705", "BP 485"],
  },
  {
    img: coach6, name: "Isabel Reyes", role: "Hypertrophy Coach",
    years: 7, certs: ["NASM-CPT", "PN-L2", "PHD-CPPS"],
    spec: ["Hypertrophy", "Bodybuilding", "Nutrition"],
    bio: "NPC bikini competitor turned coach. Specializes in evidence-based hypertrophy and contest prep. Owns NYC Iron's HYPERTROPHY block and macro coaching.",
    prs: ["NPC Top 5 · 2x"],
  },
];

export const Coaches = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="coaches" className="relative bg-surface py-24 md:py-32 border-y border-silver/15">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary block mb-3">
              ⊹ The Coaches · 6 Specialists
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Real coaches.<br />
              <span className="text-stroke">Real credentials.</span>
            </h2>
          </div>
          <div className="font-condensed text-xs uppercase tracking-[0.2em] text-silver-dim">
            Combined experience: <span className="text-primary text-base">64 years</span> · 47 active certifications
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-silver/15 border border-silver/15">
          {COACHES.map((c, i) => {
            const isOpen = open === i;
            return (
              <article
                key={c.name}
                className={`bg-background relative ${isOpen ? "lg:col-span-3 sm:col-span-2" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="block w-full text-left group"
                  aria-expanded={isOpen}
                >
                  <div className={`grid ${isOpen ? "md:grid-cols-2" : ""} gap-0`}>
                    <div className={`aspect-[4/5] ${isOpen ? "md:aspect-auto" : ""} overflow-hidden`}>
                      <img
                        src={c.img}
                        alt={`${c.name}, ${c.role}`}
                        loading="lazy"
                        width={800}
                        height={1024}
                        className="h-full w-full object-cover grayscale duotone-orange group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className={`p-5 md:p-6 ${isOpen ? "md:p-10" : ""}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-condensed text-[10px] uppercase tracking-[0.3em] text-primary">
                          {String(i + 1).padStart(2, "0")} / 06
                        </span>
                        <span className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim">
                          {c.years} yrs
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl uppercase leading-tight">{c.name}</h3>
                      <p className="font-condensed text-[11px] uppercase tracking-[0.2em] text-silver mt-1">
                        {c.role}
                      </p>

                      {!isOpen && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {c.spec.slice(0, 2).map((s) => (
                            <span key={s} className="font-condensed text-[10px] uppercase tracking-wider px-2 py-1 border border-silver/25 text-silver">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      {isOpen && (
                        <div className="mt-5 grid gap-5 animate-fade-in">
                          <p className="font-body text-sm text-silver leading-relaxed">{c.bio}</p>
                          <div className="grid grid-cols-2 gap-5 border-t border-silver/15 pt-5">
                            <div>
                              <div className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim mb-2">
                                Certifications
                              </div>
                              <ul className="space-y-1">
                                {c.certs.map((cert) => (
                                  <li key={cert} className="font-condensed text-xs uppercase tracking-wider text-foreground flex gap-2">
                                    <span className="text-primary">▸</span> {cert}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="font-condensed text-[10px] uppercase tracking-[0.25em] text-silver-dim mb-2">
                                Specialties · PRs
                              </div>
                              <ul className="space-y-1">
                                {[...c.spec, ...c.prs].map((s) => (
                                  <li key={s} className="font-condensed text-xs uppercase tracking-wider text-silver flex gap-2">
                                    <span className="text-primary">▸</span> {s}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
