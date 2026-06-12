import { useRef } from "react";

export default function UploadCard({
  cvText,
  setCvText,
  fileName,
  handleFile,
  handleRoast,
  setPdfBase64,
  setFileName,
  error,
}) {
  const fileRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  return (
    <>
      {/* Hero */}
      <div style={{ marginBottom: "36px" }}>
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          Your CV deserves
          <br />
          <span style={{ color: "#D72638" }}>the truth.</span>
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#6B6B6B",
            lineHeight: 1.6,
            maxWidth: "480px",
          }}
        >
          Upload your CV and get a brutally honest, no-sugarcoating roast —
          plus real fixes to actually get hired.
        </p>
      </div>

      {/* Card */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "2px solid #1A1A1A",
          borderRadius: "4px",
          padding: "32px",
          marginBottom: "24px",
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
          Step 1 — Upload your CV
        </div>

        {/* Drop Zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileRef.current.click()}
          style={{
            border: "2px dashed #D0D0D0",
            borderRadius: "4px",
            padding: "40px 24px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#E8E8E8",
            marginBottom: "8px",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#1A1A1A")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#D0D0D0")}
        >
          <div style={{ fontSize: "36px", marginBottom: "12px" }}>📄</div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              marginBottom: "6px",
            }}
          >
            Drop your PDF here or click to browse
          </div>
          <div style={{ fontSize: "13px", color: "#6B6B6B" }}>PDF files only</div>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf"
            style={{ display: "none" }}
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </div>

        {fileName && (
          <div
            style={{
              fontSize: "13px",
              color: "#6B6B6B",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            ✅ {fileName} — ready
          </div>
        )}

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "20px 0",
            color: "#6B6B6B",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "#D0D0D0" }} />
          OR PASTE YOUR CV TEXT
          <div style={{ flex: 1, height: "1px", backgroundColor: "#D0D0D0" }} />
        </div>

        {/* Textarea */}
        <textarea
          style={{
            width: "100%",
            minHeight: "160px",
            border: "2px solid #D0D0D0",
            borderRadius: "4px",
            padding: "14px",
            fontSize: "14px",
            fontFamily: "'Inter', sans-serif",
            resize: "vertical",
            backgroundColor: "#E8E8E8",
            color: "#1A1A1A",
            boxSizing: "border-box",
          }}
          placeholder="Paste your CV content here..."
          value={cvText}
          onChange={(e) => {
            setCvText(e.target.value);
            if (e.target.value) {
              setPdfBase64("");
              setFileName("");
            }
          }}
        />

        {error && (
          <div
            style={{
              backgroundColor: "#FFF0F0",
              border: "1px solid #D72638",
              borderRadius: "4px",
              padding: "12px 16px",
              fontSize: "13px",
              color: "#D72638",
              marginTop: "12px",
            }}
          >
            ⚠️ {error}
          </div>
        )}

        <button
          onClick={handleRoast}
          style={{
            backgroundColor: "#1A1A1A",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "4px",
            padding: "16px 32px",
            fontSize: "15px",
            fontWeight: 700,
            fontFamily: "'Syne', sans-serif",
            cursor: "pointer",
            width: "100%",
            marginTop: "20px",
            letterSpacing: "0.5px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D72638")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1A1A1A")}
        >
          🔥 Roast My CV
        </button>
      </div>

      <p style={{ textAlign: "center", fontSize: "12px", color: "#6B6B6B" }}>
        Your CV is never stored. Roasted and gone. 🔥
      </p>
    </>
  );
}
