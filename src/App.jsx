import { useState, useRef } from "react";
import Header from "./components/Header.jsx";
import UploadCard from "./components/UploadCard.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import RoastResult from "./components/RoastResult.jsx";
import { roastCV } from "./utils/roast.js";

export default function App() {
  const [cvText, setCvText] = useState("");
  const [fileName, setFileName] = useState("");
  const [pdfBase64, setPdfBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      return;
    }
    setError("");
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(",")[1];
      setPdfBase64(base64);
      setCvText("");
    };
    reader.readAsDataURL(file);
  };

  const handleRoast = async () => {
    if (!cvText.trim() && !pdfBase64) {
      setError("Please upload your CV or paste the text.");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    const { data, error: roastError } = await roastCV({ cvText, pdfBase64 });

    if (roastError) {
      setError(roastError);
    } else {
      setResult(data);
    }
    setLoading(false);
  };

  const reset = () => {
    setResult(null);
    setCvText("");
    setFileName("");
    setPdfBase64("");
    setError("");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#E8E8E8" }}>
      <Header />
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 20px" }}>
        {!loading && !result && (
          <UploadCard
            cvText={cvText}
            setCvText={setCvText}
            fileName={fileName}
            setPdfBase64={setPdfBase64}
            setFileName={setFileName}
            handleFile={handleFile}
            handleRoast={handleRoast}
            error={error}
          />
        )}
        {loading && <LoadingScreen />}
        {result && <RoastResult result={result} reset={reset} />}
      </main>
    </div>
  );
}
