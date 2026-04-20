import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const GOALS = ["Muscle Gain", "Fat Loss", "Performance", "Not Sure"];
const TIMES = ["Early Morning", "Lunch", "Evening", "Weekend"];

export const Booking = () => {
  const [form, setForm] = useState({ name: "", phone: "", goal: GOALS[0], time: TIMES[0] });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.phone.trim().length < 7) {
      toast({ title: "Missing details", description: "Add your name and a valid phone." });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Trial requested. We'll call within 24h.",
        description: `${form.name} · ${form.goal} · ${form.time}`,
      });
      setForm({ name: "", phone: "", goal: GOALS[0], time: TIMES[0] });
      setSubmitting(false);
    }, 700);
  };

  return (
    <section id="book" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div>
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary block mb-4">
              ⊹ Book a Trial · Step One
            </span>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.85]">
              Claim<br />
              your <span className="text-primary">first</span><br />
              <span className="text-stroke">session.</span>
            </h2>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <Reassurance n="00" label="Cost" value="Free" />
              <Reassurance n="60" label="Minutes" value="1-on-1" />
              <Reassurance n="01" label="Goal Plan" value="Drafted" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="bg-elevated border border-silver/20 p-6 md:p-10">
            <div className="space-y-5">
              <Field label="Name">
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-transparent border-b border-silver/30 focus:border-primary outline-none py-2 font-condensed text-base uppercase tracking-wider text-foreground placeholder:text-silver-dim"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 (___) ___-____"
                  className="w-full bg-transparent border-b border-silver/30 focus:border-primary outline-none py-2 font-condensed text-base uppercase tracking-wider text-foreground placeholder:text-silver-dim"
                />
              </Field>
              <Field label="Primary Goal">
                <div className="grid grid-cols-2 gap-2">
                  {GOALS.map((g) => (
                    <button
                      type="button"
                      key={g}
                      onClick={() => setForm({ ...form, goal: g })}
                      className={`font-condensed text-xs uppercase tracking-[0.2em] py-3 border transition-colors ${
                        form.goal === g
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-silver/30 text-silver hover:border-primary"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Preferred Time">
                <div className="grid grid-cols-2 gap-2">
                  {TIMES.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setForm({ ...form, time: t })}
                      className={`font-condensed text-xs uppercase tracking-[0.2em] py-3 border transition-colors ${
                        form.time === t
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-silver/30 text-silver hover:border-primary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </Field>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground font-display text-2xl uppercase py-5 hover:bg-primary-glow transition-colors disabled:opacity-60"
                style={{ boxShadow: "var(--shadow-orange)" }}
              >
                {submitting ? "Sending..." : "Reserve My Session →"}
              </button>
              <p className="font-condensed text-[10px] uppercase tracking-[0.2em] text-silver-dim text-center">
                We respond within 24 hours · No spam, no pressure
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label className="block font-condensed text-[10px] uppercase tracking-[0.3em] text-silver-dim mb-2">
      {label}
    </label>
    {children}
  </div>
);
const Reassurance = ({ n, label, value }: { n: string; label: string; value: string }) => (
  <div className="border-t border-silver/20 pt-3">
    <div className="font-display text-3xl text-primary leading-none">{n}</div>
    <div className="font-condensed text-[10px] uppercase tracking-[0.2em] text-silver-dim mt-2">{label}</div>
    <div className="font-condensed text-sm uppercase tracking-wider text-foreground mt-0.5">{value}</div>
  </div>
);
