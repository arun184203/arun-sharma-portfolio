import ParticleCanvas from "./ParticleCanvas";
import TypingAnimation from "./TypingAnimation";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: 64,
      }}
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Gradient overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(32,211,231,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Cyber grid overlay */}
      <div
        className="cyber-grid"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
        className="md:grid-cols-2 grid-cols-1"
      >
        {/* Left: Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Typing role */}
          <div
            style={{
              background: "rgba(32,211,231,0.08)",
              border: "1px solid rgba(32,211,231,0.2)",
              borderRadius: 4,
              padding: "8px 16px",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#20D3E7",
                boxShadow: "0 0 6px rgba(32,211,231,1)",
                display: "inline-block",
                animation: "blink 1s step-end infinite",
              }}
            />
            <TypingAnimation />
          </div>

          {/* Main headline */}
          <div>
            <h1
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                color: "#EAF0FF",
                margin: 0,
              }}
            >
              BUILDING
              <br />
              <span className="gradient-text">THE FUTURE</span>
              <br />
              WITH CODE
            </h1>
          </div>

          {/* Name */}
          <p
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(13px, 1.5vw, 16px)",
              letterSpacing: "0.3em",
              color: "#20D3E7",
              textShadow: "0 0 10px rgba(32,211,231,0.5)",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            ARUN SHARMA
          </p>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(16px, 2vw, 24px)",
              color: "#EAF0FF",
              margin: 0,
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            Crafting the Digital Future.
          </p>

          {/* Description */}
          <p
            style={{
              color: "#A7B1C6",
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 480,
              margin: 0,
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            15-year-old tech entrepreneur from India. Mastering AI, game
            engines, SaaS, and hardware. On a mission to build the future and
            reach millionaire status before 20.
          </p>

          {/* CTA Buttons */}
          <div
            style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}
          >
            <button
              type="button"
              className="btn-neon-cyan"
              onClick={scrollToProjects}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 14,
                letterSpacing: "0.1em",
                padding: "12px 28px",
                borderRadius: 9999,
                cursor: "pointer",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
              data-ocid="hero.primary_button"
            >
              Explore Projects
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 14,
                letterSpacing: "0.1em",
                padding: "12px 28px",
                borderRadius: 9999,
                cursor: "pointer",
                fontWeight: 600,
                textTransform: "uppercase",
                background: "transparent",
                border: "1px solid rgba(168,85,247,0.4)",
                color: "#A7B1C6",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.color = "#A855F7";
                (e.target as HTMLButtonElement).style.borderColor =
                  "rgba(168,85,247,0.8)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.color = "#A7B1C6";
                (e.target as HTMLButtonElement).style.borderColor =
                  "rgba(168,85,247,0.4)";
              }}
              data-ocid="hero.secondary_button"
            >
              Contact Me
            </button>
          </div>

          {/* Stats row */}
          <div
            style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 8 }}
          >
            {[
              { label: "Age", value: "15" },
              { label: "Projects", value: "12+" },
              { label: "Focus", value: "AI + SaaS" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#20D3E7",
                    textShadow: "0 0 10px rgba(32,211,231,0.5)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 11,
                    color: "#7E89A6",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="hidden md:flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Glow behind image */}
          <div
            style={{
              position: "absolute",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(32,211,231,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <div
            className="scanline-container"
            style={{
              border: "1px solid rgba(32,211,231,0.3)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow:
                "0 0 30px rgba(32,211,231,0.2), 0 0 60px rgba(168,85,247,0.1)",
              animation: "float 4s ease-in-out infinite",
              position: "relative",
            }}
          >
            <img
              src="/assets/arun-photo.jpg"
              alt="Arun Sharma - Tech Entrepreneur"
              style={{
                width: "100%",
                maxWidth: 380,
                display: "block",
              }}
            />
            {/* HUD overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(5,6,17,0.8) 100%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: 16,
                right: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontSize: 10,
                  color: "#20D3E7",
                  letterSpacing: "0.2em",
                }}
              >
                ID: ARUN_SHARMA
              </span>
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 10,
                  color: "#7E89A6",
                }}
              >
                INDIA &ndash; AGE 15
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: 10,
            color: "#7E89A6",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Scroll Down
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background:
              "linear-gradient(180deg, rgba(32,211,231,0.8), transparent)",
            animation: "pulse-neon 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
