import { useEffect, useRef, useState } from "react";

type Category =
  | "All"
  | "Linux Terminal"
  | "Coding"
  | "Desktop Setup"
  | "Cloud & DevOps"
  | "Portfolio & Web"
  | "Study & Misc";

const screenshots = [
  {
    src: "/assets/uploads/screenshot_20260123_082103-019d2396-e77d-779e-b4f3-f03c61ee9c53-1.png",
    category: "Linux Terminal" as Category,
    label: "Linux Terminal",
  },
  {
    src: "/assets/uploads/unexpeted-019d2396-eb0c-776a-9ba1-73467c621a7e-3.png",
    category: "Coding" as Category,
    label: "Python Code",
  },
  {
    src: "/assets/uploads/code_game-019d2396-eb7a-7318-bb66-8c21d95fff00-4.png",
    category: "Coding" as Category,
    label: "Pygame Code",
  },
  {
    src: "/assets/uploads/screenshot_20260123_082010-019d2396-eeb3-72a0-90f7-cc79363aee06-5.png",
    category: "Linux Terminal" as Category,
    label: "Neofetch",
  },
  {
    src: "/assets/uploads/screenshot_20260123_081712-019d2396-efd2-733a-a6be-11aca2399126-6.png",
    category: "Desktop Setup" as Category,
    label: "KDE Plasma",
  },
  {
    src: "/assets/uploads/screenshot_20260317_220818-019d2396-f06f-7028-8784-6e9da98c52ae-7.png",
    category: "Cloud & DevOps" as Category,
    label: "Google Cloud",
  },
  {
    src: "/assets/uploads/ui-019d2396-f120-723d-a913-84957b06fb31-8.png",
    category: "Portfolio & Web" as Category,
    label: "Portfolio Builder",
  },
  {
    src: "/assets/uploads/screenshot_20260225_224647-019d2396-f141-73ff-9ae3-b7f49436beea-9.png",
    category: "Study & Misc" as Category,
    label: "Study Setup",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Linux Terminal",
  "Coding",
  "Desktop Setup",
  "Cloud & DevOps",
  "Portfolio & Web",
  "Study & Misc",
];

const categoryColors: Record<Category, string> = {
  All: "#20D3E7",
  "Linux Terminal": "#20D3E7",
  Coding: "#A855F7",
  "Desktop Setup": "#22c55e",
  "Cloud & DevOps": "#f59e0b",
  "Portfolio & Web": "#ec4899",
  "Study & Misc": "#60a5fa",
};

export default function ExplorationSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered =
    activeCategory === "All"
      ? screenshots
      : screenshots.filter((s) => s.category === activeCategory);

  return (
    <section
      id="exploration"
      ref={ref}
      style={{
        padding: "96px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div
        className={`reveal ${visible ? "visible" : ""}`}
        style={{ textAlign: "center", marginBottom: 48 }}
      >
        <p
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: 12,
            letterSpacing: "0.3em",
            color: "#20D3E7",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Digital Workspace
        </p>
        <h2
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 800,
            color: "#EAF0FF",
            letterSpacing: "0.05em",
            margin: "0 0 16px",
          }}
        >
          AREA OF <span className="neon-text-cyan">EXPLORATION</span>
        </h2>
        <p
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: 15,
            color: "#7E89A6",
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          A glimpse into my digital workspace
        </p>
        <div
          className="neon-divider"
          style={{ maxWidth: 120, margin: "24px auto 0" }}
        />
      </div>

      {/* Filter tabs */}
      <div
        className={`reveal reveal-delay-1 ${visible ? "visible" : ""}`}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          marginBottom: 40,
        }}
        data-ocid="exploration.tab"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              padding: "8px 18px",
              borderRadius: 9999,
              cursor: "pointer",
              letterSpacing: "0.05em",
              transition: "all 0.25s ease",
              border:
                activeCategory === cat
                  ? `1px solid ${categoryColors[cat]}`
                  : "1px solid rgba(255,255,255,0.1)",
              background:
                activeCategory === cat
                  ? `rgba(${cat === "All" || cat === "Linux Terminal" ? "32,211,231" : cat === "Coding" ? "168,85,247" : cat === "Desktop Setup" ? "34,197,94" : cat === "Cloud & DevOps" ? "245,158,11" : cat === "Portfolio & Web" ? "236,72,153" : "96,165,250"},0.15)`
                  : "rgba(255,255,255,0.04)",
              color: activeCategory === cat ? categoryColors[cat] : "#7E89A6",
              boxShadow:
                activeCategory === cat
                  ? `0 0 12px ${categoryColors[cat]}40`
                  : "none",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className={`reveal reveal-delay-2 ${visible ? "visible" : ""}`}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {filtered.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            className="glass-card"
            onClick={() => setLightbox(shot.src)}
            data-ocid={`exploration.item.${i + 1}`}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
              border: `1px solid ${categoryColors[shot.category]}30`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              background: "transparent",
              padding: 0,
              textAlign: "left",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
              e.currentTarget.style.boxShadow = `0 8px 30px ${categoryColors[shot.category]}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                aspectRatio: "16/9",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={shot.src}
                alt={shot.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
              />
              {/* Hover overlay */}
              <div
                className="exploration-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(180deg, transparent 40%, ${categoryColors[shot.category]}33 100%)`,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  padding: 12,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 11,
                    color: "#EAF0FF",
                    letterSpacing: "0.1em",
                    textShadow: "0 0 10px rgba(0,0,0,0.8)",
                    textTransform: "uppercase",
                  }}
                >
                  Click to expand
                </span>
              </div>
            </div>
            {/* Category badge */}
            <div
              style={{
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 13,
                  color: "#A7B1C6",
                  fontWeight: 600,
                }}
              >
                {shot.label}
              </span>
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 10,
                  color: categoryColors[shot.category],
                  background: `${categoryColors[shot.category]}15`,
                  border: `1px solid ${categoryColors[shot.category]}40`,
                  borderRadius: 9999,
                  padding: "2px 10px",
                  letterSpacing: "0.05em",
                  fontWeight: 700,
                }}
              >
                {shot.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <dialog
          aria-modal="true"
          data-ocid="exploration.modal"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            backdropFilter: "blur(8px)",
          }}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            data-ocid="exploration.close_button"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "rgba(32,211,231,0.1)",
              border: "1px solid rgba(32,211,231,0.3)",
              borderRadius: "50%",
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#20D3E7",
              fontSize: 20,
              fontWeight: 700,
              transition: "all 0.2s ease",
            }}
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Fullscreen screenshot"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 12,
              objectFit: "contain",
              boxShadow:
                "0 0 40px rgba(32,211,231,0.2), 0 0 80px rgba(168,85,247,0.1)",
              border: "1px solid rgba(32,211,231,0.2)",
            }}
          />
        </dialog>
      )}

      <style>{`
        .exploration-overlay { opacity: 0 !important; }
        button.glass-card:hover .exploration-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
