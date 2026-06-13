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
    const GROQ_API_KEY = "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";

    const userContent = pdfBase64
      ? `Roast this CV thoroughly. Return only JSON.\n\nThe user uploaded a PDF. Here is all the text content from it — roast it:\n${cvText}`
      : `Roast this CV. Be brutally honest, funny, and helpful. Return only JSON.\n\nCV TEXT:\n${cvText}`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1000,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userContent }
        ],
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      const errMsg = errData?.error?.message || `HTTP ${response.status}`;
      return { data: null, error: `Groq API error: ${errMsg}` };
    }

    const data = await response.json();
    console.log("Groq response:", JSON.stringify(data));
    const raw = data.choices?.[0]?.message?.content || "";
    const clean = raw.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    return { data: parsed, error: null };
  } catch (err) {
    return { data: null, error: `Failed: ${err.message}` };
  }
}
