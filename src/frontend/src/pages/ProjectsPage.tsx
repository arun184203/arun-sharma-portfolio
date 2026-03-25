import {
  Brain,
  ChevronDown,
  Cpu,
  Gamepad2,
  Globe,
  Rocket,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { PageId } from "../App";
import ParticleCanvas from "../components/ParticleCanvas";

interface Props {
  navigateTo: (page: PageId) => void;
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
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
  return { ref, visible };
}

const projects = [
  {
    title: "Space Shooter Game",
    tech: "Python + Pygame",
    description:
      "Enemy patterns, lasers, and a full bullet collision system. A polished arcade shooter built from scratch.",
    icon: "🚀",
    color: "#20D3E7",
  },
  {
    title: "AI Chat App",
    tech: "JavaScript + API",
    description:
      "Intelligent chat interface with dynamic AI-powered responses. Real-time conversation with a sleek UI.",
    icon: "🤖",
    color: "#a855f7",
  },
  {
    title: "Arduino + ESP32 Projects",
    tech: "Hardware + Sensors + Motors",
    description:
      "IoT and embedded systems projects — sensors, actuators, wireless comms, and real-world automation.",
    icon: "⚡",
    color: "#20D3E7",
  },
  {
    title: "Web Development Projects",
    tech: "HTML + CSS + JS + React",
    description:
      "UI/UX experiments and full websites. Clean, modern interfaces built with performance in mind.",
    icon: "🌐",
    color: "#a855f7",
  },
];

const skills = [
  { label: "AI & Machine Learning", pct: 85, icon: Brain },
  { label: "Game Development", pct: 75, icon: Gamepad2 },
  { label: "Web Development", pct: 90, icon: Globe },
  { label: "Hardware Integration", pct: 70, icon: Cpu },
];

const futureWork = [
  {
    title: "AI SaaS Products",
    desc: "Scalable AI tools for the masses",
    icon: Brain,
    color: "#20D3E7",
  },
  {
    title: "Game Engine Dev",
    desc: "Custom engines from scratch",
    icon: Gamepad2,
    color: "#a855f7",
  },
  {
    title: "Programming Language",
    desc: "My own language, my own rules",
    icon: Zap,
    color: "#20D3E7",
  },
  {
    title: "Advanced Robotics",
    desc: "Where code meets the physical world",
    icon: Cpu,
    color: "#a855f7",
  },
];

export default function ProjectsPage({ navigateTo }: Props) {
  const featuredReveal = useReveal();
  const gridReveal = useReveal();
  const skillsReveal = useReveal();
  const futureReveal = useReveal();
  const ctaReveal = useReveal();

  const [skillWidths, setSkillWidths] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    if (!skillsReveal.visible) return;
    const t = setTimeout(() => {
      setSkillWidths(skills.map((s) => s.pct));
    }, 200);
    return () => clearTimeout(t);
  }, [skillsReveal.visible]);

  return (
    <div style={{ paddingTop: 64 }}>
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          textAlign: "center",
          padding: "0 24px",
        }}
        data-ocid="projects.section"
      >
        <ParticleCanvas />
        <div
          className="cyber-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.5 }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 12,
              letterSpacing: "0.4em",
              color: "#20D3E7",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            — Portfolio —
          </p>
          <h1
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(28px, 5vw, 64px)",
              fontWeight: 900,
              letterSpacing: "0.06em",
              lineHeight: 1.1,
              margin: "0 0 24px",
              textTransform: "uppercase",
            }}
          >
            <span className="neon-text-cyan">PROJECTS</span>
            <br />
            <span style={{ color: "#EAF0FF" }}>&amp; INNOVATIONS</span>
          </h1>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "#A7B1C6",
              marginBottom: 48,
              letterSpacing: "0.05em",
            }}
          >
            Where Ideas Become Reality
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              className="btn-neon-cyan"
              onClick={() => {
                const el = document.getElementById("featured-project");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "14px 32px",
                borderRadius: 9999,
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
              data-ocid="projects.primary_button"
            >
              <Rocket size={16} /> Explore Projects
            </button>
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
            opacity: 0.6,
            animation: "bounce 2s ease-in-out infinite",
          }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 10,
              color: "#7E89A6",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </p>
          <ChevronDown size={20} color="#20D3E7" />
        </div>
      </section>

      {/* ── Featured Project ── */}
      <section id="featured-project" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            ref={featuredReveal.ref}
            className={`reveal ${featuredReveal.visible ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 12,
                letterSpacing: "0.4em",
                color: "#20D3E7",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              ★ Featured Project
            </p>
            <div
              className="neon-divider"
              style={{ maxWidth: 160, margin: "0 auto" }}
            />
          </div>

          <div
            className={`glass-card reveal reveal-delay-2 ${featuredReveal.visible ? "visible" : ""}`}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
            }}
          >
            {/* Left: image placeholder */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(32,211,231,0.08), rgba(139,92,246,0.12))",
                minHeight: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                borderRight: "1px solid rgba(32,211,231,0.15)",
              }}
            >
              <div
                className="cyber-grid"
                style={{ position: "absolute", inset: 0 }}
              />
              <div
                style={{ position: "relative", zIndex: 1, textAlign: "center" }}
              >
                <div style={{ fontSize: 72, marginBottom: 12 }}>🧠</div>
                <p
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 11,
                    color: "#20D3E7",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    opacity: 0.7,
                  }}
                >
                  AI Image Classifier
                </p>
              </div>
            </div>

            {/* Right: content */}
            <div style={{ padding: "48px 40px" }}>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  color: "#a855f7",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                AI / Machine Learning
              </p>
              <h2
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontSize: "clamp(18px, 2vw, 26px)",
                  fontWeight: 800,
                  color: "#EAF0FF",
                  margin: "0 0 20px",
                  lineHeight: 1.3,
                }}
              >
                AI Image Classifier Web App
              </h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 20,
                }}
              >
                {["TensorFlow", "Flask", "Python", "Neural Networks"].map(
                  (t) => (
                    <span key={t} className="tag-chip">
                      {t}
                    </span>
                  ),
                )}
              </div>

              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 14,
                  color: "#A7B1C6",
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                A full-stack AI application using TensorFlow and Flask that
                classifies images using a trained neural network model. Includes
                a web interface for uploading images and getting predictions.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a
                  href="https://github.com/arun184203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-cyan"
                  style={{
                    padding: "10px 24px",
                    borderRadius: 9999,
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  data-ocid="projects.primary_button"
                >
                  View Code
                </a>
                <button
                  type="button"
                  className="btn-neon-purple"
                  style={{
                    padding: "10px 24px",
                    borderRadius: 9999,
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                  data-ocid="projects.secondary_button"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            ref={gridReveal.ref}
            className={`reveal ${gridReveal.visible ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
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
              All Work
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(22px, 3vw, 36px)",
                fontWeight: 800,
                color: "#EAF0FF",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              PROJECT<span className="neon-text-cyan"> VAULT</span>
            </h2>
            <div
              className="neon-divider"
              style={{ maxWidth: 200, margin: "16px auto 0" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {projects.map((p, i) => (
              <div
                key={p.title}
                className={`glass-card project-card reveal reveal-delay-${i + 1} ${gridReveal.visible ? "visible" : ""}`}
                style={{
                  borderRadius: 16,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
                data-ocid={`projects.item.${i + 1}`}
              >
                <div style={{ fontSize: 36 }}>{p.icon}</div>
                <div>
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: p.color,
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    {p.tech}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      color: "#EAF0FF",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 13,
                    color: "#A7B1C6",
                    lineHeight: 1.7,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {p.description}
                </p>
                <button
                  type="button"
                  className="btn-neon-cyan"
                  style={{
                    padding: "8px 20px",
                    borderRadius: 9999,
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                  data-ocid={`projects.button.${i + 1}`}
                >
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills in Action ── */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            ref={skillsReveal.ref}
            className={`reveal ${skillsReveal.visible ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 12,
                letterSpacing: "0.3em",
                color: "#a855f7",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Applied
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(22px, 3vw, 36px)",
                fontWeight: 800,
                color: "#EAF0FF",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              SKILLS IN <span className="neon-text-cyan">ACTION</span>
            </h2>
            <div
              className="neon-divider"
              style={{ maxWidth: 200, margin: "16px auto 0" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {skills.map(({ label, pct, icon: Icon }, i) => (
              <div
                key={label}
                className={`reveal reveal-delay-${i + 1} ${skillsReveal.visible ? "visible" : ""}`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: "rgba(32,211,231,0.1)",
                        border: "1px solid rgba(32,211,231,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} color="#20D3E7" />
                    </div>
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#EAF0FF",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 13,
                      color: "#20D3E7",
                      fontWeight: 700,
                    }}
                  >
                    {pct}%
                  </span>
                </div>
                <div
                  style={{
                    height: 8,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 9999,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skillWidths[i]}%`, height: "100%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Innovation Lab ── */}
      <section
        style={{
          padding: "0 24px 96px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            ref={futureReveal.ref}
            className={`reveal ${futureReveal.visible ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 12,
                letterSpacing: "0.3em",
                color: "#a855f7",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Coming Next
            </p>
            <h2
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(22px, 3vw, 36px)",
                fontWeight: 800,
                color: "#EAF0FF",
                textTransform: "uppercase",
                margin: "0 0 8px",
              }}
            >
              INNOVATION <span className="neon-text-cyan">LAB</span>
            </h2>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 14,
                color: "#7E89A6",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Building the Future
            </p>
            <div
              className="neon-divider"
              style={{ maxWidth: 200, margin: "16px auto 0" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {futureWork.map(({ title, desc, icon: Icon, color }, i) => (
              <div
                key={title}
                className={`reveal reveal-delay-${i + 1} ${futureReveal.visible ? "visible" : ""}`}
                style={{
                  background: "rgba(15,20,45,0.7)",
                  border: `1px solid ${color}30`,
                  borderRadius: 16,
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    `${color}80`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 0 20px ${color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    `${color}30`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
                data-ocid={`projects.card.${i + 1}`}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon size={24} color={color} />
                </div>
                <h3
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#EAF0FF",
                    margin: "0 0 8px",
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 13,
                    color: "#7E89A6",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        ref={ctaReveal.ref}
        style={{
          padding: "96px 24px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, transparent, rgba(32,211,231,0.03), transparent)",
          borderTop: "1px solid rgba(32,211,231,0.1)",
          borderBottom: "1px solid rgba(32,211,231,0.1)",
        }}
      >
        <div
          className={`reveal ${ctaReveal.visible ? "visible" : ""}`}
          style={{ maxWidth: 700, margin: "0 auto" }}
        >
          <h2
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(22px, 3.5vw, 42px)",
              fontWeight: 900,
              color: "#EAF0FF",
              margin: "0 0 24px",
              lineHeight: 1.2,
            }}
          >
            Let&apos;s Build Something
            <br />
            <span className="neon-text-cyan">Powerful Together</span>
          </h2>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 15,
              color: "#A7B1C6",
              marginBottom: 40,
              lineHeight: 1.8,
            }}
          >
            Open to collaborations, side projects, and bold ideas.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              className="btn-neon-cyan"
              onClick={() => navigateTo("home")}
              style={{
                padding: "14px 32px",
                borderRadius: 9999,
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
              data-ocid="projects.primary_button"
            >
              Contact Me
            </button>
            <a
              href="https://github.com/arun184203"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-purple"
              style={{
                padding: "14px 32px",
                borderRadius: 9999,
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              data-ocid="projects.secondary_button"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
