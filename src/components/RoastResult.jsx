function getStampColor(scoreStr) {
  const num = parseFloat(scoreStr);
  if (isNaN(num)) return "#D72638";
  if (num >= 7.5) return "#16A34A";
  if (num >= 5) return "#EA580C";
  return "#D72638";
}

export default function RoastResult({ result, reset }) {
  const stampColor = getStampColor(result.score);

  return (
    <div className="fade-up">
      {/* Title */}
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#6B6B6B",
            marginBottom: "8px",
          }}
        >
          The Verdict is in
        </div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-1px",
          }}
        >
          Here's what we found.
        </h2>
      </div>

      {/* Stamp */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div
          className="stamp"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            border: `4px solid ${stampColor}`,
            borderRadius: "50%",
            width: "130px",
            height: "130px",
            boxShadow: `0 0 0 2px ${stampColor}`,
          }}
        >
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "34px",
              fontWeight: 800,
              color: stampColor,
              lineHeight: 1,
            }}
          >
            {result.score}
          </div>
          <div
            style={{
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: stampColor,
              marginTop: "4px",
            }}
          >
            CVerdict
          </div>
        </div>
      </div>

      {/* Verdict line */}
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "18px",
          fontWeight: 800,
          textAlign: "center",
          marginBottom: "32px",
          lineHeight: 1.4,
          borderBottom: "2px solid #D0D0D0",
          paddingBottom: "24px",
          color: "#1A1A1A",
        }}
      >
        "{result.verdict}"
      </div>

      {/* Full Roast */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "2px solid #1A1A1A",
          borderRadius: "4px",
          padding: "28px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#6B6B6B",
            marginBottom: "20px",
          }}
        >
          The Full Roast
        </div>

        {result.sections?.map((s, i) => (
          <div
            key={i}
            style={{
              borderLeft: "4px solid #D72638",
              paddingLeft: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: "15px",
                marginBottom: "8px",
              }}
            >
              {s.emoji} {s.title}
            </div>
            <div style={{ fontSize: "14px", lineHeight: 1.7, color: "#333" }}>
              {s.roast}
            </div>
          </div>
        ))}
      </div>

      {/* Fix It */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "2px solid #1A1A1A",
          borderRadius: "4px",
          padding: "28px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#6B6B6B",
            marginBottom: "16px",
          }}
        >
          Now fix it
        </div>
        <div
          style={{
            backgroundColor: "#FFF8F8",
            border: "2px solid #D72638",
            borderRadius: "4px",
            padding: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "15px",
              color: "#D72638",
              marginBottom: "14px",
            }}
          >
            ✏️ What you need to do
          </div>
          {result.fixes?.map((fix, i) => (
            <div
              key={i}
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#333",
                paddingLeft: "18px",
                position: "relative",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "#D72638",
                  fontWeight: 700,
                }}
              >
                →
              </span>
              {fix}
            </div>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={reset}
        style={{
          backgroundColor: "transparent",
          color: "#1A1A1A",
          border: "2px solid #1A1A1A",
          borderRadius: "4px",
          padding: "14px 24px",
          fontSize: "14px",
          fontWeight: 700,
          fontFamily: "'Syne', sans-serif",
          cursor: "pointer",
          width: "100%",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1A1A1A";
          e.currentTarget.style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#1A1A1A";
        }}
      >
        🔁 Roast Another CV
      </button>

      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "#6B6B6B",
          marginTop: "16px",
        }}
      >
        Share your verdict and fix that CV! 💪
      </p>
    </div>
  );
}
