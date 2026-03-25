import { Github, Mail } from "lucide-react";
import type { PageId } from "../App";

interface FooterProps {
  currentPage: PageId;
  navigateTo: (page: PageId) => void;
}

export default function Footer({
  currentPage: _currentPage,
  navigateTo,
}: FooterProps) {
  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const pageLinks: { label: string; page: PageId }[] = [
    { label: "Home", page: "home" },
    { label: "Projects & Innovations", page: "projects" },
    { label: "About & Vision", page: "about" },
  ];

  const sectionLinks = ["About", "Skills", "Projects", "Vision", "Contact"];

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(32,211,231,0.1)",
        padding: "48px 24px 24px",
        background: "rgba(5,6,17,0.95)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 32,
            marginBottom: 32,
          }}
          className="md:grid-cols-3 grid-cols-1"
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: 18,
                fontWeight: 800,
                color: "#20D3E7",
                textShadow: "0 0 15px rgba(32,211,231,0.5)",
                letterSpacing: "0.1em",
                margin: "0 0 12px",
              }}
            >
              ARUN SHARMA
            </p>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 13,
                color: "#7E89A6",
                lineHeight: 1.6,
                maxWidth: 200,
                margin: 0,
              }}
            >
              15-year-old tech entrepreneur building AI, SaaS, and games.
            </p>
          </div>

          {/* Pages */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "#7E89A6",
                textTransform: "uppercase",
                margin: "0 0 4px",
              }}
            >
              Pages
            </p>
            {pageLinks.map(({ label, page }) => (
              <button
                key={page}
                type="button"
                onClick={() => navigateTo(page)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 13,
                  color: "#7E89A6",
                  textAlign: "left",
                  padding: 0,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#20D3E7";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#7E89A6";
                }}
                data-ocid="footer.link"
              >
                {label}
              </button>
            ))}
            <div
              style={{
                height: 1,
                background: "rgba(139,92,246,0.2)",
                margin: "4px 0",
              }}
            />
            {sectionLinks.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => {
                  navigateTo("home");
                  setTimeout(() => scrollTo(link), 300);
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 12,
                  color: "#596070",
                  textAlign: "left",
                  padding: 0,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#20D3E7";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#596070";
                }}
                data-ocid="footer.link"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social */}
          <div>
            <p
              style={{
                fontFamily: "Orbitron, sans-serif",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "#7E89A6",
                textTransform: "uppercase",
                margin: "0 0 16px",
              }}
            >
              Connect
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                {
                  icon: Mail,
                  href: "mailto:arunsharma012007@gmail.com",
                  label: "Email",
                },
                {
                  icon: Github,
                  href: "https://github.com/arun184203",
                  label: "GitHub",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    color: "#7E89A6",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(32,211,231,0.5)";
                    el.style.color = "#20D3E7";
                    el.style.boxShadow = "0 0 10px rgba(32,211,231,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(139,92,246,0.25)";
                    el.style.color = "#7E89A6";
                    el.style.boxShadow = "none";
                  }}
                  data-ocid="footer.link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="neon-divider" />

        {/* Copyright */}
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 12,
              color: "#7E89A6",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Arun Sharma. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 12,
              color: "#7E89A6",
              margin: 0,
            }}
          >
            Built with &#x2764;&#xfe0f; using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#20D3E7", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
