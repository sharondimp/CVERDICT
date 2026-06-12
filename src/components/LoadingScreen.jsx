export default function LoadingScreen() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "24px",
          fontWeight: 800,
          marginBottom: "12px",
        }}
      >
        Reading your CV...
      </div>
      <div
        style={{
          fontSize: "15px",
          color: "#6B6B6B",
          marginBottom: "32px",
          lineHeight: 1.6,
        }}
      >
        Our HR roaster is taking notes.
        <br />
        Brace yourself. 😬
      </div>
      <div
        style={{
          fontSize: "32px",
          letterSpacing: "10px",
          color: "#D72638",
          animation: "pulse 1.2s infinite",
        }}
      >
        ● ● ●
      </div>
    </div>
  );
}
