import { Github, Mail, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(139,92,246,0.3)",
    borderRadius: 8,
    color: "#EAF0FF",
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "arunsharma012007@gmail.com",
      href: "mailto:arunsharma012007@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/arun184203",
      href: "https://github.com/arun184203",
    },
  ];

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "Space Grotesk, sans-serif",
    fontSize: 12,
    color: "#7E89A6",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: 6,
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "96px 24px",
        position: "relative",
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
            style={{ maxWidth: 200, margin: "0 auto 16px" }}
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
            Get In Touch
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
            CONTA<span className="neon-text-cyan">CT</span>
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
            gap: 48,
            alignItems: "start",
          }}
          className="md:grid-cols-2 grid-cols-1"
        >
          {/* Left: Social links */}
          <div className={`reveal ${visible ? "visible" : ""}`}>
            <p
              style={{
                color: "#A7B1C6",
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 32,
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              Have a project idea? Want to collaborate? Or just want to talk
              tech? I&apos;m always open to new connections and opportunities.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {socialLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "14px 20px",
                    background: "rgba(15,20,45,0.6)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    borderRadius: 12,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(32,211,231,0.5)";
                    el.style.background = "rgba(32,211,231,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(139,92,246,0.25)";
                    el.style.background = "rgba(15,20,45,0.6)";
                  }}
                  data-ocid="contact.link"
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(32,211,231,0.1)",
                      border: "1px solid rgba(32,211,231,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} color="#20D3E7" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "Orbitron, sans-serif",
                        fontSize: 10,
                        color: "#7E89A6",
                        letterSpacing: "0.1em",
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: 13,
                        color: "#A7B1C6",
                        margin: 0,
                        marginTop: 2,
                      }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={`reveal reveal-delay-2 ${visible ? "visible" : ""}`}>
            <div
              className="glass-card"
              style={{ borderRadius: 16, padding: "32px" }}
            >
              {sent ? (
                <div
                  style={{ textAlign: "center", padding: "32px 0" }}
                  data-ocid="contact.success_state"
                >
                  <div style={{ fontSize: 48, marginBottom: 16 }}>&#x2705;</div>
                  <p
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: 16,
                      color: "#20D3E7",
                      textShadow: "0 0 10px rgba(32,211,231,0.5)",
                    }}
                  >
                    Message Sent!
                  </p>
                  <p
                    style={{
                      color: "#7E89A6",
                      fontSize: 13,
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(32,211,231,0.6)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(139,92,246,0.3)";
                      }}
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      required
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(32,211,231,0.6)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(139,92,246,0.3)";
                      }}
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" style={labelStyle}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="Tell me about your project or idea..."
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(32,211,231,0.6)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(139,92,246,0.3)";
                      }}
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-neon-cyan"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      padding: "12px",
                      borderRadius: 9999,
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      width: "100%",
                    }}
                    data-ocid="contact.submit_button"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
