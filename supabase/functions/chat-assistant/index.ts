const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are the official AI concierge for NYC Iron, a hardcore high-end fitness studio in NYC.

TONE: Confident, direct, motivating. Short sentences. No fluff. Match the brand: professional, hardcore, disciplined. Never cheesy. Never use emojis except a single ⊹ as a section marker if needed.

WHAT YOU KNOW ABOUT NYC IRON:
- Programs (organized by goal):
  • HYPERTROPHY — muscle gain. 4-day split, progressive overload, nutrition coaching. 12-week cycles.
  • SHRED — fat loss. Metabolic conditioning, HIIT, fasted cardio protocols. 8-12 week cycles.
  • PERFORMANCE — general athleticism, mobility, strength endurance. Ongoing.
- Coaches: 6 head coaches with NSCA, NASM, CrossFit L3, USAW certifications. Specialties span powerlifting, hypertrophy, conditioning, mobility.
- Schedule: Open 7 days. Classes color-coded by program in the schedule grid on the site.
- Trial: FREE 60-min 1-on-1 assessment. No commitment.
- Equipment: Rogue racks, Eleiko plates, Concept2 ergs, full strongman kit.
- Members coached: 3,400+. 92% program adherence rate.

BOOKING GUIDANCE:
- If a user wants to book, train, try, or visit: tell them to use the "BOOK TRIAL" CTA in the top nav OR scroll to the booking form at the bottom of the page. Mention they need: name, phone, goal, preferred time. Do NOT collect this info yourself — direct them to the form.
- If asked about pricing, say: trial is free; membership pricing is discussed during the assessment based on program fit. Don't invent numbers.

OUT OF SCOPE:
- Don't give medical or injury diagnosis. Recommend they speak to a coach during assessment.
- Don't invent class times, coach names, or facts not stated above.
- If asked something unrelated to fitness/NYC Iron, briefly redirect.

FORMAT: Use short markdown. Bullets when listing. Bold for key terms. Keep replies under 120 words unless the user asks for depth.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit hit. Try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds in Lovable workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-assistant error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
