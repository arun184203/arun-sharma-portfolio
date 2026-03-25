import { useEffect, useRef, useState } from "react";
import SkillBar from "./SkillBar";

const skillsLeft = [
  { name: "Python", percent: 90 },
  { name: "JavaScript", percent: 65 },
  { name: "Game Development", percent: 70 },
  { name: "Web Development", percent: 72 },
];

const skillsRight = [
  { name: "AI & Machine Learning", percent: 60 },
  { name: "Arduino / ESP32", percent: 75 },
  { name: "Hardware Integration", percent: 70 },
  { name: "Ethical Hacking", percent: 55 },
];

export default function SkillsSection() {
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
      id="skills"
      ref={ref}
      style={{
        padding: "96px 24px",
        position: "relative",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(32,211,231,0.02) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Title */}
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: 64 }}
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
              color: "#20D3E7",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Expertise
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
            SKILL<span className="neon-text-cyan">S</span>
          </h2>
          <div
            className="neon-divider"
            style={{ marginTop: 16, maxWidth: 200, margin: "16px auto 0" }}
          />
        </div>

        {/* Skill bars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 64px",
          }}
          className="md:grid-cols-2 grid-cols-1"
        >
          <div className={`reveal reveal-delay-1 ${visible ? "visible" : ""}`}>
            <p
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "#7E89A6",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Programming
            </p>
            {skillsLeft.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                percent={s.percent}
                delay={i * 100}
              />
            ))}
          </div>
          <div className={`reveal reveal-delay-2 ${visible ? "visible" : ""}`}>
            <p
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "#7E89A6",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Technologies
            </p>
            {skillsRight.map((s, i) => (
              <SkillBar
                key={s.name}
                name={s.name}
                percent={s.percent}
                delay={i * 100 + 200}
              />
            ))}
          </div>
        </div>

        {/* Advanced interests */}
        <div
          className={`reveal reveal-delay-3 ${visible ? "visible" : ""}`}
          style={{ marginTop: 48, textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#7E89A6",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            Advanced Interests
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {[
              "Linux",
              "Ethical Hacking",
              "Game Engine Dev",
              "Programming Language Design",
              "PCB Design",
              "Processor Architecture",
              "AI Research",
              "SaaS Development",
            ].map((tag) => (
              <span
                key={tag}
                className="tag-chip"
                style={{ fontSize: 12, padding: "6px 16px" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
