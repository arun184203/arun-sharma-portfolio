import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "96px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="md:grid-cols-2 grid-cols-1"
      >
        {/* Left */}
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <div>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 12,
                letterSpacing: "0.3em",
                color: "#20D3E7",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              {/* About Me */}
              About Me
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 800,
                color: "#EAF0FF",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              MEET <span className="neon-text-cyan">ARUN</span>
            </h2>
          </div>

          <div className="neon-divider" />

          <p
            style={{
              color: "#A7B1C6",
              lineHeight: 1.8,
              fontSize: 15,
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            I&apos;m a 15-year-old self-taught developer and tech entrepreneur
            from India, on a relentless mission to become a
            &quot;God-level&quot; tech expert. I don&apos;t just learn
            technology &mdash; I build with it.
          </p>
          <p
            style={{
              color: "#A7B1C6",
              lineHeight: 1.8,
              fontSize: 15,
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            From writing Python game engines to experimenting with AI models,
            from soldering Arduino circuits to designing web applications
            &mdash; I live at the intersection of hardware and software. My
            goal: build transformative SaaS products, launch startups, and reach
            millionaire status before age 20.
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "Age", value: "15" },
              { label: "Projects", value: "12+" },
              { label: "Studio", value: "Founded" },
              { label: "Location", value: "India" },
            ].map((s) => (
              <div key={s.label} className="stat-pill">
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 11,
                    color: "#7E89A6",
                    letterSpacing: "0.1em",
                  }}
                >
                  {s.label}:{" "}
                </span>
                <span
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 11,
                    color: "#20D3E7",
                    fontWeight: 700,
                  }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile card */}
        <div
          className={`reveal reveal-delay-2 ${visible ? "visible" : ""}`}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="glass-card"
            style={{
              borderRadius: 16,
              padding: 4,
              maxWidth: 360,
              width: "100%",
              boxShadow: "0 0 30px rgba(168,85,247,0.15)",
            }}
          >
            <img
              src="/assets/arun-photo.jpg"
              alt="Arun Sharma Profile"
              style={{ width: "100%", borderRadius: 12, display: "block" }}
            />
            <div style={{ padding: "16px 20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#EAF0FF",
                      margin: 0,
                    }}
                  >
                    Arun Sharma
                  </p>
                  <p
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: 12,
                      color: "#7E89A6",
                      margin: 0,
                    }}
                  >
                    Tech Entrepreneur &middot; Developer &middot; Founder
                  </p>
                </div>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#20D3E7",
                    boxShadow: "0 0 8px rgba(32,211,231,1)",
                    animation: "blink 2s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
