import { useEffect, useState } from "react";

const roles = [
  "TECH VISIONARY",
  "AI INNOVATOR",
  "ENTREPRENEUR",
  "GAME DEVELOPER",
  "AI ENTHUSIAST",
  "FUTURE CEO",
];

export default function TypingAnimation() {
  const [display, setDisplay] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 40);
      } else {
        setDeleting(false);
        setRoleIdx((r) => (r + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <span
      style={{
        fontFamily: "Orbitron, sans-serif",
        fontSize: "clamp(14px, 2vw, 18px)",
        letterSpacing: "0.15em",
        color: "#20D3E7",
        textShadow: "0 0 10px rgba(32,211,231,0.7)",
      }}
    >
      {display}
      <span className="cursor-blink" style={{ color: "#A855F7" }}>
        |
      </span>
    </span>
  );
}
