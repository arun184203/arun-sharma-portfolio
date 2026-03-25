import { ChevronDown, Code, Rocket, Target, Zap } from "lucide-react";
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

const timeline = [
  {
    age: "Age 13",
    event: "Started coding in Python",
    status: "done",
    icon: "🐍",
  },
  {
    age: "Age 14",
    event: "Built first game with Pygame",
    status: "done",
    icon: "🎮",
  },
  {
    age: "Age 14",
    event: "Explored Arduino & hardware",
    status: "done",
    icon: "⚡",
  },
  { age: "Age 15", event: "Built AI/ML projects", status: "done", icon: "🧠" },
  {
    age: "Age 16",
    event: "Launch first SaaS MVP",
    status: "target",
    icon: "🚀",
  },
  { age: "Age 18", event: "Scale to $10K/month", status: "target", icon: "📈" },
  { age: "Age 20", event: "Reach $1M milestone", status: "target", icon: "💰" },
];

const values = [
  { title: "Execution over Excuses", icon: Target, color: "#20D3E7" },
  { title: "Build Fast, Break Things", icon: Zap, color: "#a855f7" },
  { title: "Think Big, Act Bigger", icon: Rocket, color: "#20D3E7" },
  { title: "Code Every Day", icon: Code, color: "#a855f7" },
];

export default function AboutVisionPage({ navigateTo }: Props) {
  const storyReveal = useReveal();
  const timelineReveal = useReveal();
  const manifestoReveal = useReveal();
  const valuesReveal = useReveal();

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
        data-ocid="about.section"
      >
        <ParticleCanvas />
        <div
          className="cyber-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.4 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.08) 0%, transparent 70%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 12,
              letterSpacing: "0.4em",
              color: "#a855f7",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            — Arun Sharma —
          </p>
          <h1
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "clamp(22px, 4vw, 52px)",
              fontWeight: 900,
              letterSpacing: "0.06em",
              lineHeight: 1.15,
              margin: "0 0 24px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#EAF0FF" }}>THE MIND</span>
            <br />
            <span className="neon-text-cyan">BEHIND THE CODE</span>
          </h1>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(14px, 1.8vw, 20px)",
              color: "#A7B1C6",
              marginBottom: 48,
              letterSpacing: "0.06em",
            }}
          >
            15. Developer. Entrepreneur. Future Millionaire.
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
              className="btn-neon-purple"
              onClick={() => navigateTo("projects")}
              style={{
                padding: "12px 28px",
                borderRadius: 9999,
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
              data-ocid="about.secondary_button"
            >
              View Projects
            </button>
          </div>
        </div>

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
          <ChevronDown size={20} color="#a855f7" />
        </div>
      </section>

      {/* ── My Story ── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            ref={storyReveal.ref}
            className={`reveal ${storyReveal.visible ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: 64 }}
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
              Origin Story
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
              MY <span className="neon-text-cyan">STORY</span>
            </h2>
            <div
              className="neon-divider"
              style={{ maxWidth: 200, margin: "16px auto 0" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Stats */}
            <div
              className={`reveal ${storyReveal.visible ? "visible" : ""}`}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              {[
                { label: "Age", value: "15", color: "#20D3E7" },
                { label: "Country", value: "India", color: "#a855f7" },
                { label: "Mission", value: "Build & Scale", color: "#20D3E7" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  style={{
                    background: "rgba(15,20,45,0.7)",
                    border: `1px solid ${color}30`,
                    borderRadius: 16,
                    padding: "24px 32px",
                    borderLeft: `3px solid ${color}`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.3em",
                      color: "#7E89A6",
                      textTransform: "uppercase",
                      margin: "0 0 8px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 28,
                      fontWeight: 800,
                      color,
                      margin: 0,
                      textShadow: `0 0 15px ${color}60`,
                    }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Story text */}
            <div
              className={`reveal reveal-delay-2 ${storyReveal.visible ? "visible" : ""}`}
            >
              <div
                className="glass-card"
                style={{ borderRadius: 20, padding: "40px" }}
              >
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 15,
                    color: "#A7B1C6",
                    lineHeight: 2,
                    margin: 0,
                  }}
                >
                  I started coding at 13 with a single goal — to build
                  technology that matters. While most kids my age scroll social
                  media, I&apos;m building AI apps, games, and hardware
                  projects. By 20, I plan to launch my first successful SaaS
                  product, scale it globally, and earn my first million. This
                  portfolio isn&apos;t just a website — it&apos;s a blueprint.
                </p>
                <div
                  style={{
                    marginTop: 28,
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    "Python",
                    "JavaScript",
                    "TensorFlow",
                    "Arduino",
                    "React",
                    "Pygame",
                  ].map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div
            ref={timelineReveal.ref}
            className={`reveal ${timelineReveal.visible ? "visible" : ""}`}
            style={{ textAlign: "center", marginBottom: 64 }}
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
              The Path
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
              JOURNEY <span className="neon-text-cyan">MAP</span>
            </h2>
            <div
              className="neon-divider"
              style={{ maxWidth: 200, margin: "16px auto 0" }}
            />
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 20,
                top: 0,
                bottom: 0,
                width: 2,
                background:
                  "linear-gradient(180deg, #20D3E7, #a855f7, rgba(139,92,246,0.1))",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {timeline.map(({ age, event, status, icon }, i) => (
                <div
                  key={`${age}-${event}`}
                  className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${timelineReveal.visible ? "visible" : ""}`}
                  style={{
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start",
                    paddingLeft: 8,
                  }}
                  data-ocid={`about.item.${i + 1}`}
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background:
                        status === "done" ? "#20D3E7" : "rgba(139,92,246,0.3)",
                      border:
                        status === "done"
                          ? "2px solid #20D3E7"
                          : "2px solid rgba(139,92,246,0.6)",
                      boxShadow:
                        status === "done"
                          ? "0 0 12px rgba(32,211,231,0.7)"
                          : "0 0 8px rgba(139,92,246,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 4,
                      fontSize: 12,
                      zIndex: 1,
                    }}
                  >
                    {status === "done" ? "✓" : ""}
                  </div>

                  <div
                    style={{
                      flex: 1,
                      background:
                        status === "target"
                          ? "rgba(139,92,246,0.06)"
                          : "rgba(32,211,231,0.04)",
                      border:
                        status === "target"
                          ? "1px dashed rgba(139,92,246,0.3)"
                          : "1px solid rgba(32,211,231,0.15)",
                      borderRadius: 12,
                      padding: "16px 20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ fontSize: 18 }}>{icon}</span>
                      <span
                        style={{
                          fontFamily: "Orbitron, sans-serif",
                          fontSize: 11,
                          color: status === "done" ? "#20D3E7" : "#a855f7",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                        }}
                      >
                        {age}
                      </span>
                      {status === "target" && (
                        <span
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontSize: 10,
                            color: "#a855f7",
                            background: "rgba(139,92,246,0.15)",
                            border: "1px solid rgba(139,92,246,0.3)",
                            borderRadius: 9999,
                            padding: "1px 8px",
                          }}
                        >
                          Target
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: 14,
                        color: status === "done" ? "#EAF0FF" : "#A7B1C6",
                        margin: 0,
                        fontWeight: status === "done" ? 600 : 400,
                      }}
                    >
                      {event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto ── */}
      <section
        ref={manifestoReveal.ref}
        style={{
          padding: "96px 24px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, transparent, rgba(139,92,246,0.04), transparent)",
          borderTop: "1px solid rgba(139,92,246,0.15)",
          borderBottom: "1px solid rgba(139,92,246,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className={`reveal ${manifestoReveal.visible ? "visible" : ""}`}
          style={{
            maxWidth: 900,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 12,
              letterSpacing: "0.4em",
              color: "#a855f7",
              textTransform: "uppercase",
              marginBottom: 32,
            }}
          >
            My Manifesto
          </p>
          <blockquote style={{ margin: 0 }}>
            <p
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: "clamp(18px, 2.5vw, 30px)",
                fontWeight: 700,
                lineHeight: 1.6,
                color: "#EAF0FF",
                margin: 0,
              }}
            >
              <span className="neon-text-cyan">
                &ldquo;Code is not just a skill
              </span>
              <span style={{ color: "#A7B1C6" }}>
                {" "}
                — it&apos;s a weapon. Every line I write is a step toward
                building an empire. I don&apos;t chase trends, I build them.
              </span>
              <span
                style={{
                  color: "#a855f7",
                  textShadow: "0 0 10px rgba(168,85,247,0.6)",
                }}
              >
                {" "}
                The future belongs to those who build it.&rdquo;
              </span>
            </p>
          </blockquote>
          <div
            style={{ marginTop: 32, display: "flex", justifyContent: "center" }}
          >
            <span
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: 12,
                letterSpacing: "0.3em",
                color: "#7E89A6",
                textTransform: "uppercase",
              }}
            >
              — Arun Sharma, Age 15
            </span>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            ref={valuesReveal.ref}
            className={`reveal ${valuesReveal.visible ? "visible" : ""}`}
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
              What I Live By
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
              CORE <span className="neon-text-cyan">VALUES</span>
            </h2>
            <div
              className="neon-divider"
              style={{ maxWidth: 200, margin: "16px auto 0" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
            }}
          >
            {values.map(({ title, icon: Icon, color }, i) => (
              <div
                key={title}
                className={`reveal reveal-delay-${i + 1} ${valuesReveal.visible ? "visible" : ""}`}
                style={{
                  background: "rgba(15,20,45,0.7)",
                  border: `1px solid ${color}25`,
                  borderRadius: 16,
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    `${color}60`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 0 20px ${color}15`;
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    `${color}25`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                }}
                data-ocid={`about.card.${i + 1}`}
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
                    margin: "0 auto 20px",
                  }}
                >
                  <Icon size={24} color={color} />
                </div>
                <h3
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#EAF0FF",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {title}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`reveal ${valuesReveal.visible ? "visible" : ""}`}
            style={{ textAlign: "center", marginTop: 64 }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 15,
                color: "#7E89A6",
                marginBottom: 24,
              }}
            >
              Ready to build something great together?
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
                  padding: "12px 28px",
                  borderRadius: 9999,
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                data-ocid="about.primary_button"
              >
                Contact Me
              </button>
              <button
                type="button"
                className="btn-neon-purple"
                onClick={() => navigateTo("projects")}
                style={{
                  padding: "12px 28px",
                  borderRadius: 9999,
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                data-ocid="about.secondary_button"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
