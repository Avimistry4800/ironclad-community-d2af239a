import { useState } from "react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
type Slot = { time: string; prog: "H" | "S" | "P"; coach: string; spots: number };

const SCHEDULE: Record<string, Slot[]> = {
  Mon: [
    { time: "06:00", prog: "H", coach: "Rourke", spots: 2 },
    { time: "07:00", prog: "S", coach: "Vance", spots: 4 },
    { time: "12:00", prog: "P", coach: "Okafor", spots: 6 },
    { time: "17:30", prog: "H", coach: "Reyes", spots: 0 },
    { time: "18:30", prog: "H", coach: "Volkov", spots: 1 },
  ],
  Tue: [
    { time: "06:00", prog: "S", coach: "Vance", spots: 3 },
    { time: "07:00", prog: "P", coach: "Tanaka", spots: 5 },
    { time: "12:00", prog: "H", coach: "Reyes", spots: 2 },
    { time: "18:00", prog: "S", coach: "Vance", spots: 0 },
  ],
  Wed: [
    { time: "06:00", prog: "P", coach: "Okafor", spots: 4 },
    { time: "12:00", prog: "S", coach: "Vance", spots: 3 },
    { time: "17:30", prog: "P", coach: "Tanaka", spots: 6 },
    { time: "18:30", prog: "H", coach: "Volkov", spots: 2 },
  ],
  Thu: [
    { time: "06:00", prog: "H", coach: "Rourke", spots: 1 },
    { time: "07:00", prog: "P", coach: "Okafor", spots: 4 },
    { time: "17:30", prog: "S", coach: "Vance", spots: 2 },
    { time: "18:30", prog: "H", coach: "Reyes", spots: 5 },
  ],
  Fri: [
    { time: "06:00", prog: "S", coach: "Vance", spots: 3 },
    { time: "12:00", prog: "H", coach: "Volkov", spots: 0 },
    { time: "17:30", prog: "P", coach: "Tanaka", spots: 4 },
    { time: "18:30", prog: "S", coach: "Vance", spots: 6 },
  ],
  Sat: [
    { time: "08:00", prog: "S", coach: "Vance", spots: 2 },
    { time: "09:30", prog: "P", coach: "Okafor", spots: 5 },
    { time: "11:00", prog: "H", coach: "Rourke", spots: 3 },
  ],
  Sun: [
    { time: "09:00", prog: "P", coach: "Tanaka", spots: 8 },
    { time: "10:30", prog: "P", coach: "Tanaka", spots: 6 },
  ],
};

const PROG_META = {
  H: { name: "Hypertrophy", color: "bg-primary text-primary-foreground" },
  S: { name: "Shred", color: "bg-foreground text-background" },
  P: { name: "Performance", color: "bg-elevated text-primary border border-primary/40" },
};

export const Schedule = () => {
  const [filter, setFilter] = useState<"ALL" | "H" | "S" | "P">("ALL");
  const [activeDay, setActiveDay] = useState("Mon");

  return (
    <section id="schedule" className="relative bg-surface py-24 md:py-32 border-y border-silver/15">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary block mb-3">
              ⊹ Weekly Schedule · This Week
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              Pick a slot.<br />
              <span className="text-primary">Show up.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["ALL", "H", "S", "P"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-condensed text-[11px] uppercase tracking-[0.2em] px-3 py-2 border transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-silver/30 text-silver hover:border-primary hover:text-primary"
                }`}
              >
                {f === "ALL" ? "All Programs" : PROG_META[f].name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile day tabs */}
        <div className="md:hidden flex overflow-x-auto gap-2 mb-4 -mx-6 px-6 pb-2">
          {DAYS.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDay(d)}
              className={`flex-shrink-0 font-condensed text-xs uppercase tracking-[0.2em] px-4 py-2 border ${
                activeDay === d ? "bg-primary text-primary-foreground border-primary" : "border-silver/30 text-silver"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-7 gap-px bg-silver/15 border border-silver/15">
          {DAYS.map((d) => (
            <div key={d} className="bg-background">
              <div className="font-condensed text-[11px] uppercase tracking-[0.25em] text-silver-dim p-3 border-b border-silver/15">
                {d}
              </div>
              <div className="p-2 space-y-2 min-h-[280px]">
                {SCHEDULE[d]
                  .filter((s) => filter === "ALL" || s.prog === filter)
                  .map((s, i) => (
                    <SlotCard key={i} slot={s} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile single day */}
        <div className="md:hidden bg-background border border-silver/15">
          <div className="p-4 space-y-2">
            {SCHEDULE[activeDay]
              .filter((s) => filter === "ALL" || s.prog === filter)
              .map((s, i) => (
                <SlotCard key={i} slot={s} />
              ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-condensed text-[10px] uppercase tracking-[0.2em] text-silver-dim">
          <span><span className="inline-block h-2 w-2 bg-primary mr-2 align-middle" /> Hypertrophy</span>
          <span><span className="inline-block h-2 w-2 bg-foreground mr-2 align-middle" /> Shred</span>
          <span><span className="inline-block h-2 w-2 border border-primary mr-2 align-middle" /> Performance</span>
        </div>
      </div>
    </section>
  );
};

const SlotCard = ({ slot }: { slot: Slot }) => {
  const meta = PROG_META[slot.prog];
  const full = slot.spots === 0;
  return (
    <a
      href="#book"
      className={`block p-2.5 ${meta.color} ${full ? "opacity-40 grayscale" : "hover:scale-[1.02]"} transition-transform`}
    >
      <div className="font-display text-base leading-none">{slot.time}</div>
      <div className="font-condensed text-[9px] uppercase tracking-wider mt-1 opacity-80">{slot.coach}</div>
      <div className="font-condensed text-[9px] uppercase tracking-wider mt-0.5 opacity-80">
        {full ? "Full" : `${slot.spots} spots`}
      </div>
    </a>
  );
};
