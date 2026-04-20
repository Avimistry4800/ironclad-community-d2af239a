import barbellImg from "@/assets/equipment-barbell.jpg";
import platesImg from "@/assets/equipment-plates.jpg";
import chalkImg from "@/assets/equipment-chalk.jpg";
import rackImg from "@/assets/equipment-rack.jpg";

const EQUIPMENT_L = [
  "Rogue Monster Lite Racks ×8",
  "Eleiko IPF Comp Bars ×6",
  "Rogue Ohio Power Bar ×4",
  "Eleiko Calibrated Plates",
  "Concept2 RowErg ×6",
  "Concept2 BikeErg ×4",
  "Assault AirRunner ×2",
  "Rogue Monster Rig",
];
const EQUIPMENT_R = [
  "Iron Bull Strength Belts",
  "SBD Knee Sleeves Stock",
  "Versa Gripps · Lifting Straps",
  "Rogue Echo Bumper Plates",
  "Kabuki Trap Bar HD",
  "York Hex Dumbbells 5–125",
  "Sorinex Glute-Ham Devs ×3",
  "On-site Recovery + Sauna",
];

export const Facility = () => {
  return (
    <section className="relative bg-background py-24 md:py-32 border-t border-silver/15">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="font-condensed text-xs uppercase tracking-[0.3em] text-primary block mb-3">
              ⊹ Facility · 8,400 sq ft
            </span>
            <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">
              The tools<br />
              <span className="text-stroke">that earn</span> <span className="text-primary">respect.</span>
            </h2>
          </div>
          <p className="max-w-md font-body text-sm text-silver leading-relaxed">
            Commercial-grade strength equipment, top-tier conditioning machines, and on-site recovery.
            Maintained weekly. No waiting. No compromises.
          </p>
        </div>

        {/* Photo mosaic */}
        <div className="grid grid-cols-6 grid-rows-2 gap-px bg-silver/15 border border-silver/15 h-[60vh] min-h-[400px]">
          <div className="col-span-3 row-span-2 overflow-hidden">
            <img src={rackImg} alt="Squat racks in dark industrial gym" className="h-full w-full object-cover grayscale hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="col-span-3 row-span-1 overflow-hidden">
            <img src={platesImg} alt="Stacked weight plates" className="h-full w-full object-cover grayscale hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="col-span-2 row-span-1 overflow-hidden">
            <img src={barbellImg} alt="Barbell knurling close-up" className="h-full w-full object-cover grayscale hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img src={chalkImg} alt="Chalk bowl on bench" className="h-full w-full object-cover grayscale hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={1024} />
          </div>
        </div>

        {/* Equipment list */}
        <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-8 border-t border-silver/15 pt-10">
          <div>
            <div className="font-condensed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              ⊹ Strength Floor
            </div>
            <ul className="divide-y divide-silver/10">
              {EQUIPMENT_L.map((e, i) => (
                <li key={e} className="py-2 flex items-center justify-between font-condensed text-sm uppercase tracking-wider text-silver">
                  <span><span className="text-silver-dim mr-3">{String(i + 1).padStart(2, "0")}</span>{e}</span>
                  <span className="text-primary">●</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-condensed text-[10px] uppercase tracking-[0.3em] text-primary mb-4">
              ⊹ Accessories & Recovery
            </div>
            <ul className="divide-y divide-silver/10">
              {EQUIPMENT_R.map((e, i) => (
                <li key={e} className="py-2 flex items-center justify-between font-condensed text-sm uppercase tracking-wider text-silver">
                  <span><span className="text-silver-dim mr-3">{String(i + 9).padStart(2, "0")}</span>{e}</span>
                  <span className="text-primary">●</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
