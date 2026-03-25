import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    id: 1,
    name: "Python Excellence",
    issuer: "Programming Hub",
    category: "Python",
    image:
      "/assets/uploads/img_20260325_100453-019d235b-db2e-7574-973d-4ca8c4492661-3.jpg",
  },
  {
    id: 2,
    name: "Python for AI",
    issuer: "Programming Hub",
    category: "Python",
    image:
      "/assets/uploads/img_20260325_100815-019d235b-ddf0-7547-97ee-ff6f17e517e9-4.jpg",
  },
  {
    id: 3,
    name: "Python Programming",
    issuer: "Programming Hub",
    category: "Python",
    image:
      "/assets/uploads/img_20260325_100649-019d235b-e18f-755f-98ed-e04aa4720e53-8.jpg",
  },
  {
    id: 4,
    name: "JavaScript",
    issuer: "Programming Hub",
    category: "Web",
    image:
      "/assets/uploads/img_20260325_100739-019d235b-d8d1-77e1-af15-b0595be043c2-2.jpg",
  },
  {
    id: 5,
    name: "HTML",
    issuer: "Programming Hub",
    category: "Web",
    image:
      "/assets/uploads/img_20260325_100847-019d235b-e065-7795-be5b-2c64f86ed70a-5.jpg",
  },
  {
    id: 6,
    name: "Unity Game Development",
    issuer: "Programming Hub",
    category: "Game Dev",
    image:
      "/assets/uploads/img_20260325_095804-019d235b-d3bc-77c9-bc74-3e65bc86f73e-1.jpg",
  },
  {
    id: 7,
    name: "C# (C Sharp)",
    issuer: "Programming Hub",
    category: "C# / C++",
    image:
      "/assets/uploads/img_20260325_095912-019d235b-e09b-72cf-bff9-97855ae38d29-6.jpg",
  },
  {
    id: 8,
    name: "C++",
    issuer: "Programming Hub",
    category: "C# / C++",
    image:
      "/assets/uploads/img_20260325_100035-019d235b-e0a9-7432-8294-62882c7608a3-7.jpg",
  },
];

const filterTabs = ["All", "Python", "Web", "Game Dev", "C# / C++"];

export default function CertificatesSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [lightboxName, setLightboxName] = useState<string>("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImg(null);
    };
    if (lightboxImg) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxImg]);

  const filtered =
    activeFilter === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <section
      id="certificates"
      ref={ref}
      style={{
        padding: "96px 24px",
        position: "relative",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.03) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Title */}
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div
            className="neon-divider"
            style={{ marginBottom: 16, maxWidth: 200, margin: "0 auto 16px" }}
          />
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 12,
              letterSpacing: "0.3em",
              color: "#8B5CF6",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Verified Skills
          </p>
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: "#EAF0FF",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            CERTIFICATIO<span className="neon-text-cyan">NS</span>
          </h2>
          <div
            className="neon-divider"
            style={{ marginTop: 16, maxWidth: 200, margin: "16px auto 0" }}
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
            marginBottom: 48,
          }}
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveFilter(tab)}
              data-ocid="certificates.tab"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "7px 20px",
                borderRadius: 9999,
                border:
                  activeFilter === tab
                    ? "1px solid #20D3E7"
                    : "1px solid rgba(32,211,231,0.2)",
                background:
                  activeFilter === tab
                    ? "rgba(32,211,231,0.12)"
                    : "rgba(32,211,231,0.03)",
                color: activeFilter === tab ? "#20D3E7" : "#7E89A6",
                cursor: "pointer",
                boxShadow:
                  activeFilter === tab
                    ? "0 0 12px rgba(32,211,231,0.3)"
                    : "none",
                transition: "all 0.25s ease",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.map((cert, i) => (
            <button
              key={cert.id}
              type="button"
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} ${
                visible ? "visible" : ""
              }`}
              onClick={() => {
                setLightboxImg(cert.image);
                setLightboxName(cert.name);
              }}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              data-ocid={`certificates.item.${i + 1}`}
              style={{
                background: "rgba(8, 12, 32, 0.8)",
                border:
                  hoveredId === cert.id
                    ? "1px solid rgba(32,211,231,0.7)"
                    : "1px solid rgba(32,211,231,0.2)",
                borderRadius: 12,
                overflow: "hidden",
                cursor: "pointer",
                padding: 0,
                textAlign: "left",
                transform:
                  hoveredId === cert.id
                    ? "translateY(-4px) scale(1.02)"
                    : "translateY(0) scale(1)",
                boxShadow:
                  hoveredId === cert.id
                    ? "0 8px 32px rgba(32,211,231,0.2), 0 0 0 1px rgba(32,211,231,0.1)"
                    : "0 4px 16px rgba(0,0,0,0.4)",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              {/* Certificate image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "66%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform:
                      hoveredId === cert.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      hoveredId === cert.id
                        ? "rgba(32,211,231,0.08)"
                        : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  {hoveredId === cert.id && (
                    <div
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        color: "#20D3E7",
                        textTransform: "uppercase",
                        background: "rgba(5,6,17,0.85)",
                        padding: "6px 16px",
                        borderRadius: 4,
                        border: "1px solid rgba(32,211,231,0.4)",
                      }}
                    >
                      View Certificate
                    </div>
                  )}
                </div>
              </div>

              {/* Card info */}
              <div style={{ padding: "16px 20px" }}>
                <p
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    color: "#EAF0FF",
                    margin: "0 0 6px",
                  }}
                >
                  {cert.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: 11,
                      color: "#7E89A6",
                      margin: 0,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {cert.issuer}
                  </p>
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: 4,
                      border: "1px solid rgba(139,92,246,0.4)",
                      color: "#8B5CF6",
                      background: "rgba(139,92,246,0.1)",
                    }}
                  >
                    {cert.category}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Count badge */}
        <div
          className={`reveal reveal-delay-4 ${visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 13,
              color: "#7E89A6",
              letterSpacing: "0.05em",
            }}
          >
            Showing{" "}
            <span style={{ color: "#20D3E7", fontWeight: 600 }}>
              {filtered.length}
            </span>{" "}
            of{" "}
            <span style={{ color: "#20D3E7", fontWeight: 600 }}>
              {certificates.length}
            </span>{" "}
            certifications
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <dialog
          open
          aria-label={`Certificate: ${lightboxName}`}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5,6,17,0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            backdropFilter: "blur(8px)",
            border: "none",
            maxWidth: "100vw",
            maxHeight: "100vh",
            width: "100vw",
            height: "100vh",
          }}
          data-ocid="certificates.modal"
        >
          {/* Backdrop close area */}
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setLightboxImg(null)}
            style={{
              position: "absolute",
              inset: 0,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 0,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: 14,
                letterSpacing: "0.12em",
                color: "#20D3E7",
                marginBottom: 20,
                textTransform: "uppercase",
                textShadow: "0 0 12px rgba(32,211,231,0.6)",
              }}
            >
              {lightboxName}
            </p>
            <div
              style={{
                maxWidth: "90vw",
                maxHeight: "78vh",
                border: "1px solid rgba(32,211,231,0.4)",
                borderRadius: 8,
                overflow: "hidden",
                boxShadow:
                  "0 0 60px rgba(32,211,231,0.15), 0 20px 60px rgba(0,0,0,0.8)",
              }}
            >
              <img
                src={lightboxImg}
                alt={lightboxName}
                style={{
                  display: "block",
                  maxWidth: "90vw",
                  maxHeight: "78vh",
                  objectFit: "contain",
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              data-ocid="certificates.close_button"
              style={{
                marginTop: 24,
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#7E89A6",
                background: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4,
                padding: "8px 24px",
                cursor: "pointer",
              }}
            >
              Close · Esc
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
}
