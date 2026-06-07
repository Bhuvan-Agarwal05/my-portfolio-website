import { useState } from "react";

const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (id) => activePage === id || (id === "experience" && activePage === "home");

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(19, 19, 19, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => setActivePage("home")}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#a8e8ff",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.target.style.opacity = "0.8"}
          onMouseLeave={e => e.target.style.opacity = "1"}
        >
          BHUVAN.DEV
        </button>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.1em",
                fontWeight: isActive(link.id) ? 700 : 500,
                color: isActive(link.id) ? "#a8e8ff" : "#bbc9cf",
                background: "none",
                border: "none",
                borderBottom: isActive(link.id) ? "2px solid #a8e8ff" : "2px solid transparent",
                paddingBottom: "4px",
                cursor: "pointer",
                transition: "color 0.3s, border-color 0.3s",
              }}
              onMouseEnter={e => { if (!isActive(link.id)) e.target.style.color = "#a8e8ff"; }}
              onMouseLeave={e => { if (!isActive(link.id)) e.target.style.color = "#bbc9cf"; }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Resume Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="#resume"
            onClick={e => e.preventDefault()}
            style={{
              background: "#a8e8ff",
              color: "#003642",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              fontWeight: 700,
              padding: "8px 24px",
              borderRadius: "4px",
              textDecoration: "none",
              cursor: "pointer",
              transition: "filter 0.2s, transform 0.1s",
              display: "inline-block",
            }}
            onMouseEnter={e => e.target.style.filter = "brightness(1.15)"}
            onMouseLeave={e => e.target.style.filter = "brightness(1)"}
            onMouseDown={e => e.target.style.transform = "scale(0.95)"}
            onMouseUp={e => e.target.style.transform = "scale(1)"}
          >
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "4px",
              padding: "6px 8px",
              cursor: "pointer",
              color: "#a8e8ff",
              display: "none",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(19, 19, 19, 0.98)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActivePage(link.id); setMenuOpen(false); }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                letterSpacing: "0.1em",
                color: isActive(link.id) ? "#a8e8ff" : "#bbc9cf",
                background: "none",
                border: "none",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
                fontWeight: isActive(link.id) ? 700 : 500,
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
