export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "3px solid #1A1A1A",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "28px",
            fontWeight: 800,
            letterSpacing: "-1px",
            color: "#1A1A1A",
          }}
        >
          C<span style={{ color: "#D72638" }}>V</span>erdict
        </div>
        <div
          style={{
            fontSize: "11px",
            color: "#6B6B6B",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Honest. Brutal. Useful.
        </div>
      </div>
      <div style={{ fontSize: "24px" }}>📋</div>
    </header>
  );
}
