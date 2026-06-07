export default function Footer({ setActivePage }) {
  const links = [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Email", href: "mailto:bhuvan@v1.dev" },
  ];

  return (
    <footer style={{
      width: "100%",
      padding: "24px",
      background: "#0A0C12",
      borderTop: "1px solid rgba(255,255,255,0.12)",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }} className="footer-inner">
        <button
          onClick={() => setActivePage("home")}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px", fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#e5e2e1",
            background: "none", border: "none",
            cursor: "pointer",
          }}
        >
          BHUVAN.DEV
        </button>

        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "13px", color: "#859398",
          textAlign: "center",
        }}>
          © {new Date().getFullYear()} Bhuvan Agarwal. Built with Architectural Rigor.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
          {links.map((link, i) => (
            <>
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "13px", color: "#859398",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => e.target.style.color = "#a8e8ff"}
                onMouseLeave={e => e.target.style.color = "#859398"}
              >
                {link.label}
              </a>
              {i < links.length - 1 && (
                <span key={`dot-${i}`} style={{
                  width: "4px", height: "4px",
                  borderRadius: "50%", background: "#859398",
                  display: "inline-block",
                }} />
              )}
            </>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-inner { flex-direction: row !important; justify-content: space-between !important; }
        }
      `}</style>
    </footer>
  );
}
