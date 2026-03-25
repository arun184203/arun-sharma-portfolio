import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { PageId } from "../App";

const homeLinks = [
  "About",
  "Skills",
  "Certificates",
  "Projects",
  "Vision",
  "Contact",
];

interface NavBarProps {
  currentPage: PageId;
  navigateTo: (page: PageId) => void;
}

export default function NavBar({ currentPage, navigateTo }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePageNav = (page: PageId) => {
    setMenuOpen(false);
    navigateTo(page);
  };

  const pageLinks: { label: string; page: PageId }[] = [
    { label: "Home", page: "home" },
    { label: "Projects & Innovations", page: "projects" },
    { label: "About & Vision", page: "about" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(5, 6, 17, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(32,211,231,0.1)" : "none",
        transition: "all 0.3s ease",
        maxWidth: "100vw",
      }}
    >
      {/* Logo */}
      <button
        type="button"
        onClick={() => handlePageNav("home")}
        style={{
          fontFamily: "Orbitron, sans-serif",
          fontSize: 20,
          fontWeight: 800,
          color: "#20D3E7",
          textShadow: "0 0 15px rgba(32,211,231,0.7)",
          background: "none",
          border: "none",
          cursor: "pointer",
          letterSpacing: "0.1em",
        }}
        data-ocid="nav.link"
      >
        AS
      </button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex" style={{ gap: 4, alignItems: "center" }}>
        {pageLinks.map(({ label, page }) => (
          <button
            key={page}
            type="button"
            className="nav-link"
            onClick={() => handlePageNav(page)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 12px",
              color: currentPage === page ? "#20D3E7" : undefined,
            }}
            data-ocid="nav.link"
          >
            {label}
          </button>
        ))}
        {currentPage === "home" && (
          <>
            <div
              style={{
                width: 1,
                height: 16,
                background: "rgba(139,92,246,0.4)",
                margin: "0 8px",
              }}
            />
            {homeLinks.map((link) => (
              <button
                key={link}
                type="button"
                className="nav-link"
                onClick={() => scrollTo(link)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "4px 8px",
                  color: "#7E89A6",
                }}
                data-ocid="nav.link"
              >
                {link}
              </button>
            ))}
          </>
        )}
      </nav>

      {/* CTA */}
      <button
        type="button"
        className="btn-neon-purple hidden md:flex"
        onClick={() => {
          if (currentPage === "home") {
            scrollTo("Contact");
          } else {
            handlePageNav("home");
            setTimeout(() => scrollTo("Contact"), 300);
          }
        }}
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: 13,
          letterSpacing: "0.08em",
          padding: "8px 20px",
          borderRadius: 9999,
          cursor: "pointer",
        }}
        data-ocid="nav.primary_button"
      >
        Get in Touch
      </button>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          color: "#20D3E7",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        data-ocid="nav.toggle"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "rgba(5, 6, 17, 0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(32,211,231,0.2)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {pageLinks.map(({ label, page }) => (
            <button
              key={page}
              type="button"
              className="nav-link"
              onClick={() => handlePageNav(page)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: 16,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textAlign: "left",
                color: currentPage === page ? "#20D3E7" : undefined,
              }}
              data-ocid="nav.link"
            >
              {label}
            </button>
          ))}
          {currentPage === "home" && (
            <>
              <div style={{ height: 1, background: "rgba(139,92,246,0.3)" }} />
              {homeLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  className="nav-link"
                  onClick={() => scrollTo(link)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: 14,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    textAlign: "left",
                    color: "#7E89A6",
                  }}
                  data-ocid="nav.link"
                >
                  {link}
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </header>
  );
}
