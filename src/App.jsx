import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const styles = `
  :root {
    --primary: #a8e8ff;
    --primary-dim: #3cd7ff;
    --secondary: #7dffa2;
    --secondary-fixed: #62ff96;
    --accent-warm: #FFD24D;
    --surface: #131313;
    --surface-deep: #0A0C12;
    --surface-container: #201f1f;
    --surface-container-low: #1c1b1b;
    --surface-container-high: #2a2a2a;
    --surface-container-highest: #353534;
    --surface-container-lowest: #0e0e0e;
    --surface-bright: #393939;
    --on-surface: #e5e2e1;
    --on-surface-variant: #bbc9cf;
    --outline: #859398;
    --outline-variant: #3c494e;
    --glass-stroke: rgba(255,255,255,0.12);
    --primary-container: #00d4ff;
    --on-primary: #003642;
    --on-secondary: #003918;
    --tertiary: #bce4ff;
    --on-tertiary-container: #005677;
    --error: #ffb4ab;
    --on-error: #690005;
    --error-container: #93000a;
    --secondary-container: #05e777;
    --on-secondary-container: #00622e;
    --on-primary-container: #00586b;
  }

  .glass-card {
    background: rgba(18, 18, 18, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-stroke);
    transition: all 0.3s ease;
  }
  .glass-card:hover {
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.15);
  }
  .glass-panel {
    background: rgba(18, 18, 18, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-stroke);
    transition: all 0.4s ease;
  }
  .glass-panel:hover {
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.15);
  }
  .glow-text { text-shadow: 0 0 10px rgba(168, 232, 255, 0.4); }
  .glow-dot { box-shadow: 0 0 10px var(--primary); }
  .glow-dot-green { box-shadow: 0 0 10px var(--secondary); }

  .font-mono { font-family: 'JetBrains Mono', monospace; }
  .font-display { font-family: 'Inter', sans-serif; }

  .nav-blur {
    background: rgba(19, 19, 19, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-stroke);
  }

  .grid-overlay {
    background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
  }
  .dot-grid {
    background-image: radial-gradient(#a8e8ff 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .timeline-line {
    background: linear-gradient(to bottom, #a8e8ff, #7dffa2, transparent);
  }

  .terminal-cursor {
    display: inline-block;
    width: 8px;
    height: 18px;
    background-color: var(--primary);
    animation: blink 1s step-end infinite;
    vertical-align: middle;
  }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

  .terminal-window {
    background: linear-gradient(180deg, #121212 0%, #050505 100%);
  }

  .scanline-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(168, 232, 255, 0.02) 50%);
    background-size: 100% 4px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .group:hover .scanline-overlay { opacity: 1; }

  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .skill-bar { transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1); }

  @keyframes pulse-border {
    0%, 100% { border-color: var(--glass-stroke); }
    50% { border-color: var(--primary); }
  }
  .active-glow { animation: pulse-border 2s infinite ease-in-out; }

  .code-block {
    background: #050505;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  input:focus, textarea:focus { outline: none !important; box-shadow: none !important; }
  input, textarea { background: transparent; border: none; color: var(--on-surface); font-family: 'JetBrains Mono', monospace; font-size: 14px; width: 100%; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
`;

export default function App() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "experience": return <Experience />;
      case "skills": return <Skills />;
      case "contact": return <Contact />;
      default: return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0A0C12" }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>{renderPage()}</main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
