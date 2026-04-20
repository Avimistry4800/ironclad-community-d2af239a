
# High-End Fitness Studio Website — "FORGE"

A hardcore, professional fitness studio site with cinematic black-and-white imagery, neon orange accents, and dense, magazine-style information architecture.

## Visual Direction

**Color system**
- Pure black `#000000` base, dark graphite `#0A0A0A` surfaces, charcoal `#1A1A1A` cards
- Neon orange `#FF4500` as the single ignition accent (CTAs, stat highlights, hover states)
- Metallic silver `#C0C0C0` for borders, dividers, and secondary type
- Subtle noise/grain texture overlay on dark backgrounds for tactile depth

**Typography**
- Headings: Anton or Bebas Neue — oversized, condensed, all-caps, tight tracking
- Sub-heads: Oswald bold, used in stat blocks and section labels
- Body: Inter or IBM Plex Sans — small, dense, high line count per block
- Numerals featured large (year founded, athlete weight, % body fat, hours trained)

**Imagery treatment**
- All photography in high-contrast B&W, deep blacks, blown highlights on sweat and muscle
- Subjects sharp, environments motion-blurred
- Selective neon orange duotone on hover for portraits
- Equipment close-ups (barbell knurling, chalk, leather straps) as texture breaks

**Motion**
- Heavy slab text reveals on scroll (clip-path wipes)
- Marquee ticker for class schedule and member PRs
- Cursor-following spotlight on coach grid
- Subtle parallax on hero portrait

## Page Structure (single-page scroll + anchor nav)

**1. Top bar**
- Logo mark (monogram), nav: Programs / Coaches / Stories / Schedule / Book
- Persistent neon orange "BOOK TRIAL" pill, top-right
- Live status chip: "OPEN — 47 ATHLETES IN SESSION"

**2. Hero**
- Full-bleed B&W portrait of an athlete mid-lift, blurred gym behind
- Massive condensed headline: "BUILT, NOT BORN."
- Sub: studio attitude statement, 2 lines max
- Coach roster strip across bottom: 6 small B&W headshots with names + specialty
- Stat ticker: years operating · members trained · combined coaching certifications

**3. Manifesto band**
- Black band, single oversized quote in silver, small orange attribution
- Marquee underneath: "STRENGTH · DISCIPLINE · COMMUNITY · NO SHORTCUTS"

**4. Programs (organized by goal)**
- Three column dense grid:
  - **HYPERTROPHY** — muscle gain (progressive overload, 4-day split, nutrition coaching)
  - **SHRED** — fat loss (metabolic conditioning, HIIT, fasted cardio protocols)
  - **PERFORMANCE** — general fitness (mobility, athletic prep, strength endurance)
- Each card: large numeral, B&W action photo, 6-line dense description, weekly schedule, intensity meter, "ENROLL" link in orange
- Comparison table below: duration, sessions/week, group size, target outcome

**5. Coach Profiles**
- Grid of 6 coaches, hover swaps B&W → orange duotone
- Click expands inline panel: bio, certifications (NSCA, NASM, CrossFit L3, etc.), specialties, athlete results, social links
- Dense credential list styled like a CV

**6. Member Transformations**
- Before/after slider on featured story, full-bleed B&W
- Carousel of 8+ cases: name, age, duration, key metrics (weight Δ, body fat Δ, lifts Δ), pull-quote
- Stat wall: aggregate results across all members

**7. Facility & Equipment**
- Tight photo mosaic — chalk bowls, plates, racks, ropes
- Equipment list in two dense columns (Rogue, Eleiko, Concept2, etc.)

**8. Schedule**
- Weekly grid, compact, color-coded by program
- Filter by coach / goal / time
- Each slot clickable → reserve

**9. Book a Trial — primary CTA section**
- Black background, oversized "CLAIM YOUR FIRST SESSION" headline
- Inline form: name, phone, goal selector, preferred time
- Orange submit button, large
- Reassurance row: "FREE · 60 MIN · 1-ON-1 ASSESSMENT"

**10. Footer**
- Address, hours, contact, social, newsletter signup
- Large faded monogram watermark
- Member-only login link

## Interactions & Details
- Sticky side rail with section progress indicator
- Numeric counters animate on scroll into view
- Form validation inline, success state confirms booking with calendar add
- Fully responsive: hero portrait reframes on mobile, programs stack, schedule becomes day-tabs

## Out of Scope (this pass)
- Backend booking system (form captures and toasts a confirmation; can wire to Lovable Cloud later)
- Member portal / login auth
- Real photography (will use high-quality placeholder B&W fitness imagery)
