interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accentColor?: string;
}

export default function ProjectCard({
  icon,
  title,
  description,
  tags,
  accentColor = "#20D3E7",
}: ProjectCardProps) {
  const borderColor = `${accentColor}33`;
  const shadowColor = `${accentColor}22`;

  return (
    <div
      className="glass-card project-card"
      style={{
        borderRadius: 16,
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        cursor: "default",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: "rgba(32,211,231,0.1)",
          border: `1px solid ${borderColor}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          boxShadow: `0 0 10px ${shadowColor}`,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: 14,
          fontWeight: 700,
          color: "#EAF0FF",
          letterSpacing: "0.05em",
          margin: 0,
          lineHeight: 1.4,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "#A7B1C6",
          fontSize: 13,
          lineHeight: 1.7,
          margin: 0,
          flex: 1,
          fontFamily: "Space Grotesk, sans-serif",
        }}
      >
        {description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
