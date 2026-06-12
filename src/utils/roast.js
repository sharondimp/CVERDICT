const SYSTEM_PROMPT = `You are a brutally honest but genuinely helpful HR professional and career coach.
You roast CVs/resumes with sharp wit and real insight. You're like that one friend who works in recruitment
and will actually tell you the truth. Be funny, be direct, but always be useful.

Scoring guide:
- 0–4: Seriously bad. Major red flags.
- 5–6: Average. Gets ignored by recruiters.
- 7–8: Good. A few tweaks needed.
- 9–10: Excellent. Ready to impress.

ALWAYS respond with ONLY valid JSON in this exact format, no preamble, no markdown backticks:
{
  "score": "X/10",
  "verdict": "One savage but true sentence summary of this CV",
  "sections": [
    {
      "title": "First Impression",
      "emoji": "👀",
      "roast": "What a recruiter thinks in the first 6 seconds"
    },
    {
      "title": "The Cringe Check",
      "emoji": "😬",
      "roast": "Buzzwords, clichés, red flags spotted"
    },
    {
      "title": "Gap Interrogation",
      "emoji": "🕵️",
      "roast": "Missing info, vague dates, unexplained gaps or thin experience"
    },
    {
      "title": "Skills Reality Check",
      "emoji": "🎯",
      "roast": "Are these skills actually impressive or just padding?"
    }
  ],
  "fixes": [
    "Specific actionable fix 1",
    "Specific actionable fix 2",
    "Specific actionable fix 3",
    "Specific actionable fix 4",
    "Specific actionable fix 5"
  ]
}`;

export async function roastCV({ cvText, pdfBase64 }) {
  try {
    let messages;

    if (pdfBase64) {
      messages = [
        {
          role: "user",
          content: [
            {
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: pdfBase64,
              },
            },
            {
              type: "text",
              text: "Roast this CV. Be brutally honest, funny, and helpful. Return only JSON.",
            },
          ],
        },
      ];
    } else {
      messages = [
        {
          role: "user",
          content: `Roast this CV. Be brutally honest, funny, and helpful. Return only JSON.\n\nCV TEXT:\n${cvText}`,
        },
      ];
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    const data = await response.json();
    const raw = data.content?.map((b) => b.text || "").join("") || "";
    const clean = raw.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    return { data: parsed, error: null };
  } catch (err) {
    console.error("Roast error:", err);
    return { data: null, error: "Something went wrong. Please try again." };
  }
}
