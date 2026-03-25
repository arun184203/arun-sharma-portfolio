import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          return 100;
        }
        return p + 2;
      });
    }, 36);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#050611",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Animated grid bg */}
      <div
        className="cyber-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.5 }}
      />

      {/* Logo monogram */}
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          border: "2px solid rgba(32,211,231,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
          boxShadow:
            "0 0 30px rgba(32,211,231,0.4), 0 0 60px rgba(32,211,231,0.15)",
          position: "relative",
        }}
      >
        <span
          className="neon-text-cyan"
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: 28,
            fontWeight: 800,
          }}
        >
          AS
        </span>
        {/* Orbiting ring */}
        <div
          style={{
            position: "absolute",
            inset: -8,
            borderRadius: "50%",
            border: "1px solid rgba(168,85,247,0.4)",
            animation: "spin 3s linear infinite",
          }}
        />
      </div>

      <p
        style={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: 11,
          letterSpacing: "0.3em",
          color: "#7E89A6",
          marginBottom: 24,
          textTransform: "uppercase",
        }}
      >
        Initializing System...
      </p>

      {/* Progress bar */}
      <div
        style={{
          width: 280,
          height: 2,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 9999,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, #20D3E7, #A855F7)",
            borderRadius: 9999,
            boxShadow: "0 0 8px rgba(32,211,231,0.8)",
            transition: "width 0.05s linear",
          }}
        />
      </div>

      <p
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: 12,
          color: "#7E89A6",
          marginTop: 12,
        }}
      >
        {progress}%
      </p>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
