import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    icon: "🎮",
    title: "Shooter Game",
    description:
      "A feature-rich 2D shooter built with Python + Pygame. Includes enemy AI patterns, laser mechanics, bullet collision detection, and particle effects for explosions.",
    tags: ["Python", "Pygame", "Game Dev", "Physics"],
    accentColor: "#FF4FD8",
  },
  {
    icon: "🧠",
    title: "AI Learning & Experimentation",
    description:
      "Exploring machine learning concepts hands-on — building neural networks, training small models, and applying AI to real-world problems.",
    tags: ["Python", "TensorFlow", "ML", "Neural Nets"],
    accentColor: "#20D3E7",
  },
  {
    icon: "🌐",
    title: "Web Development Projects",
    description:
      "Personal websites, landing pages, and experimental UI projects. Focused on modern design, animations, and responsive layouts.",
    tags: ["React", "HTML/CSS", "JavaScript", "UI/UX"],
    accentColor: "#3B82F6",
  },
  {
    icon: "🤖",
    title: "Hardware Projects",
    description:
      "Building smart systems with Arduino and ESP32 microcontrollers. Projects include sensor arrays, motor drivers, IoT devices, and robotics.",
    tags: ["Arduino", "ESP32", "IoT", "Sensors"],
    accentColor: "#A855F7",
  },
  {
    icon: "🏢",
    title: "Bakasur's Gaming Studio",
    description:
      "Founder and lead developer of a game development studio focused on creating unique, powerful gaming experiences with original mechanics and lore.",
    tags: ["Founder", "Game Design", "Studio", "Leadership"],
    accentColor: "#FF4FD8",
  },
  {
    icon: "📜",
    title: "Programming Language Research",
    description:
      "Deep-dive research into language design theory, compilers, and interpreter architecture. Working toward building a custom programming language.",
    tags: ["Compilers", "Interpreters", "Research", "Theory"],
    accentColor: "#20D3E7",
  },
];

export default function ProjectsSection() {
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
      id="projects"
      ref={ref}
      style={{
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Stars background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(168,85,247,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(32,211,231,0.05) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
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
              color: "#A855F7",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            What I Build
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
            PROJEC<span className="neon-text-cyan">TS</span>
          </h2>
          <div
            className="neon-divider"
            style={{ marginTop: 16, maxWidth: 200, margin: "16px auto 0" }}
          />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`reveal ${visible ? "visible" : ""}`}
              style={{
                transitionDelay: `${i * 0.08}s`,
              }}
              data-ocid={`projects.item.${i + 1}`}
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
