import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  percent: number;
  delay?: number;
}

export default function SkillBar({ name, percent, delay = 0 }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percent), delay);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent, delay]);

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: 13,
            color: "#A7B1C6",
            letterSpacing: "0.05em",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: 11,
            color: "#20D3E7",
            fontWeight: 700,
          }}
        >
          {percent}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 6,
          background: "rgba(255,255,255,0.06)",
          borderRadius: 9999,
          overflow: "visible",
          position: "relative",
        }}
      >
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
