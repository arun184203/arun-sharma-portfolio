import { useEffect, useRef, useState } from "react";

const goals = [
  {
    icon: "🤖",
    text: "Build AI SaaS Products",
    desc: "Autonomous tools that solve real problems at scale",
  },
  {
    icon: "🚀",
    text: "Launch Startups",
    desc: "Turn ideas into companies that generate real revenue",
  },
  {
    icon: "💰",
    text: "Earn Online Through Tech",
    desc: "Build passive income streams through software",
  },
  {
    icon: "⚙️",
    text: "Build Own Game Engine",
    desc: "From scratch, in C++ — full control over every pixel",
  },
  {
    icon: "📜",
    text: "Create Own Programming Language",
    desc: "Design syntax, build compiler, ship to developers",
  },
  {
    icon: "👑",
    text: "Top-Tier Tech Entrepreneur",
    desc: "Recognized globally as a builder and innovator",
  },
  {
    icon: "💎",
    text: "Millionaire by Age 20",
    desc: "Financial freedom through pure tech and execution",
  },
];

export default function VisionSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      id="vision"
      ref={ref}
      style={{
        padding: "96px 24px",
        position: "relative",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(168,85,247,0.04) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Title */}
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 12,
              letterSpacing: "0.3em",
              color: "#A855F7",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            The Master Plan
          </p>
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 800,
              letterSpacing: "0.05em",
              margin: 0,
            }}
          >
            <span className="gradient-text-magenta">FUTURE TECH:</span>{" "}
            <span style={{ color: "#EAF0FF" }}>MY MISSION</span>
          </h2>
          <div
            className="neon-divider"
            style={{ marginTop: 16, maxWidth: 300, margin: "16px auto 0" }}
          />
        </div>

        {/* Goals grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {goals.map((g, i) => (
            <div
              key={g.text}
              className={`vision-card reveal ${visible ? "visible" : ""}`}
              style={{
                padding: "20px 24px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                transitionDelay: `${i * 0.07}s`,
              }}
              data-ocid={`vision.item.${i + 1}`}
            >
              <span style={{ fontSize: 24, flexShrink: 0 }}>{g.icon}</span>
              <div>
                <p
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#EAF0FF",
                    letterSpacing: "0.08em",
                    margin: "0 0 4px",
                  }}
                >
                  {g.text}
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 12,
                    color: "#7E89A6",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission statement */}
        <div
          className={`reveal reveal-delay-4 ${visible ? "visible" : ""}`}
          style={{
            marginTop: 48,
            textAlign: "center",
            padding: "32px",
            background: "rgba(32,211,231,0.04)",
            border: "1px solid rgba(32,211,231,0.15)",
            borderRadius: 16,
          }}
        >
          <p
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(14px, 2vw, 20px)",
              color: "#EAF0FF",
              letterSpacing: "0.05em",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            &ldquo;The goal isn&apos;t just to{" "}
            <span className="neon-text-cyan">learn</span> technology.
            <br />
            The goal is to <span className="neon-text-purple">master</span> it,
            build with it, and{" "}
            <span className="gradient-text">shape the world</span> through
            it.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 13,
              color: "#7E89A6",
              marginTop: 12,
              marginBottom: 0,
              letterSpacing: "0.15em",
            }}
          >
            &mdash; ARUN SHARMA, AGE 15
          </p>
        </div>
      </div>
    </section>
  );
}
