import { useEffect, useRef, useState } from "react";

const codeLines = [
  { text: "async function optimizeCluster() {", color: "#a8e8ff" },
  { text: "  // Initialize worker pool", color: "#859398" },
  { text: "  const pool = new WorkerPool({", color: "#a8e8ff" },
  { text: "    min: 5,  max: 50,", color: "#FFD24D" },
  { text: "    strategy: 'LIFO'", color: "#FFD24D" },
  { text: "  });", color: "#a8e8ff" },
  { text: "", color: "" },
  { text: "  // Balancing load across instances", color: "#859398" },
  { text: "  pool.on('peak', () => {", color: "#a8e8ff" },
  { text: "    await cloud.provision(", color: "#a8e8ff" },
  { text: "      'aws-ec2-high-mem'", color: "#FFD24D" },
  { text: "    );", color: "#a8e8ff" },
  { text: "    console.log(", color: "#a8e8ff" },
  { text: "      \"Infrastructure scaling...\"", color: "#7dffa2" },
  { text: "    );", color: "#a8e8ff" },
  { text: "  });", color: "#a8e8ff" },
  { text: "}", color: "#a8e8ff" },
];

const stats = [
  { value: "5+", label: "Years Experience", bar: 85, color: "#a8e8ff", type: "bar" },
  { value: "3+", label: "Core Roles", dots: 3, color: "#a8e8ff", type: "dots" },
  { value: "10+", label: "Global Recommendations", initials: ["JD", "AS", "MK", "+7"], color: "#7dffa2", type: "avatars" },
];

const expertise = [
  {
    icon: "terminal", title: "Backend", accent: "#a8e8ff",
    skills: [
      { name: "Node.js", accent: "#7dffa2" }, { name: "Go", accent: "#7dffa2" },
      { name: ".NET", accent: "#7dffa2" }, { name: "TypeScript" }, { name: "Python" },
    ],
  },
  {
    icon: "cloud", title: "Cloud & DevOps", accent: "#FFD24D",
    skills: [
      { name: "AWS", accent: "#FFD24D" }, { name: "Docker", accent: "#FFD24D" },
      { name: "Terraform", accent: "#FFD24D" }, { name: "Kubernetes" }, { name: "CI/CD" },
    ],
  },
  {
    icon: "database", title: "Databases", accent: "#7dffa2",
    skills: [
      { name: "PostgreSQL", accent: "#a8e8ff" }, { name: "MongoDB", accent: "#a8e8ff" },
      { name: "Redis", accent: "#a8e8ff" }, { name: "Elasticsearch" }, { name: "DynamoDB" },
    ],
  },
];

export default function Home({ setActivePage }) {
  const terminalRef = useRef(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= codeLines.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "96px",
          overflow: "hidden",
        }}
      >
        {/* Background glows */}
        <div style={{
          position: "absolute", top: 0, left: "25%",
          width: "500px", height: "500px",
          background: "rgba(168,232,255,0.05)", filter: "blur(120px)",
          borderRadius: "50%", zIndex: 0, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, right: "25%",
          width: "400px", height: "400px",
          background: "rgba(125,255,162,0.05)", filter: "blur(100px)",
          borderRadius: "50%", zIndex: 0, pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1200px", margin: "0 auto", padding: "0 24px",
          display: "grid", gridTemplateColumns: "1fr", gap: "48px",
          alignItems: "center", width: "100%", position: "relative", zIndex: 1,
        }} className="hero-grid">
          {/* Left Column */}
          <div style={{ maxWidth: "680px" }}>
            {/* Status Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 12px", background: "rgba(168,232,255,0.1)",
              border: "1px solid rgba(168,232,255,0.2)", borderRadius: "999px",
              marginBottom: "24px",
            }}>
              <span className="animate-pulse" style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#7dffa2", display: "inline-block",
              }} />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px", color: "#a8e8ff",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                Available for architectural challenges
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 800,
              lineHeight: 1.05, letterSpacing: "-0.02em",
              color: "#e5e2e1", marginBottom: "24px",
            }}>
              Bhuvan{" "}
              <span className="glow-text" style={{ color: "#a8e8ff" }}>Agarwal</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              color: "#bbc9cf", maxWidth: "520px", fontSize: "18px",
              fontWeight: 500, lineHeight: 1.6, marginBottom: "40px",
            }}>
              Full Stack Software Engineer | Building Scalable Backend Systems &amp;
              High-Performance Web Applications. Specializing in distributed architecture
              and resilient cloud infrastructures.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              <button
                onClick={() => setActivePage("experience")}
                style={{
                  background: "#a8e8ff", color: "#003642",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px", letterSpacing: "0.1em", fontWeight: 700,
                  padding: "16px 32px", borderRadius: "4px", border: "none",
                  cursor: "pointer", transition: "box-shadow 0.3s, transform 0.1s",
                }}
                onMouseEnter={e => e.target.style.boxShadow = "0 0 30px rgba(168,232,255,0.3)"}
                onMouseLeave={e => e.target.style.boxShadow = "none"}
                onMouseDown={e => e.target.style.transform = "scale(0.95)"}
                onMouseUp={e => e.target.style.transform = "scale(1)"}
              >
                View Experience
              </button>
              <button
                onClick={() => setActivePage("contact")}
                style={{
                  background: "transparent", color: "#e5e2e1",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px", letterSpacing: "0.1em", fontWeight: 700,
                  padding: "16px 32px", borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  cursor: "pointer", transition: "background 0.3s, transform 0.1s",
                }}
                onMouseEnter={e => e.target.style.background = "#393939"}
                onMouseLeave={e => e.target.style.background = "transparent"}
                onMouseDown={e => e.target.style.transform = "scale(0.95)"}
                onMouseUp={e => e.target.style.transform = "scale(1)"}
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div style={{ position: "relative" }} ref={terminalRef}>
            <div
              className="glass-card"
              style={{
                borderRadius: "12px", overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                transform: "rotate(2deg)",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "rotate(0deg)"}
              onMouseLeave={e => e.currentTarget.style.transform = "rotate(2deg)"}
            >
              {/* Terminal Header */}
              <div style={{
                background: "#353534", padding: "12px 16px",
                display: "flex", alignItems: "center", gap: "8px",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  {["#ff5555", "#ffbd2e", "#27c93f"].map((c, i) => (
                    <div key={i} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c + "80" }} />
                  ))}
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                  color: "#859398", marginLeft: "8px",
                }}>
                  scale_handler.ts
                </span>
              </div>
              {/* Code */}
              <div style={{
                padding: "24px", background: "#050505",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px", lineHeight: 1.6,
                minHeight: "280px",
              }}>
                {codeLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} style={{ color: line.color || "#bbc9cf", whiteSpace: "pre" }}>
                    {line.text || "\u00A0"}
                  </div>
                ))}
                {visibleLines < codeLines.length && (
                  <span className="terminal-cursor" />
                )}
              </div>
            </div>

            {/* Floating badge */}
            <div className="glass-card" style={{
              position: "absolute", bottom: "-24px", right: "-24px",
              padding: "16px", borderRadius: "8px",
              borderColor: "rgba(168,232,255,0.2)",
              display: "flex", alignItems: "center", gap: "12px",
            }}>
              <div style={{
                padding: "8px", background: "rgba(125,255,162,0.1)",
                borderRadius: "4px",
              }}>
                <span className="material-symbols-outlined" style={{ color: "#7dffa2" }}>bolt</span>
              </div>
              <div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "10px", color: "#859398",
                  textTransform: "uppercase", letterSpacing: "0.1em",
                }}>
                  Latency Reduction
                </div>
                <div style={{ fontSize: "22px", fontWeight: 700, color: "#7dffa2" }}>-40%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section style={{ padding: "48px 24px", position: "relative", zIndex: 10 }}>
        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {stats.map((stat, i) => (
            <div key={i} className="glass-card fade-in" style={{
              padding: "32px", borderRadius: "12px",
              animationDelay: `${i * 0.1}s`,
            }}>
              <div style={{
                fontSize: "40px", fontWeight: 800, color: stat.color,
                marginBottom: "8px", transition: "transform 0.3s",
              }} className="stat-value">
                {stat.value}
              </div>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px", color: "#859398",
                textTransform: "uppercase", letterSpacing: "0.15em",
              }}>
                {stat.label}
              </div>
              <div style={{ marginTop: "16px" }}>
                {stat.type === "bar" && (
                  <div style={{ height: "4px", background: "#201f1f", borderRadius: "999px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${stat.bar}%`, background: "linear-gradient(to right, #a8e8ff, #7dffa2)", borderRadius: "999px" }} />
                  </div>
                )}
                {stat.type === "dots" && (
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[...Array(4)].map((_, j) => (
                      <div key={j} style={{
                        height: "4px", flex: 1, borderRadius: "999px",
                        background: j < stat.dots ? "#a8e8ff" : "#201f1f",
                      }} />
                    ))}
                  </div>
                )}
                {stat.type === "avatars" && (
                  <div style={{ display: "flex", gap: "-8px" }}>
                    {stat.initials.map((init, j) => (
                      <div key={j} style={{
                        width: "32px", height: "32px", borderRadius: "50%",
                        border: "2px solid #0A0C12",
                        background: "#2a2a2a",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "9px", fontWeight: 700, color: "#bbc9cf",
                        marginLeft: j > 0 ? "-8px" : "0",
                      }}>
                        {init}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Expertise */}
      <section style={{ padding: "120px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#e5e2e1", marginBottom: "16px" }}>
              Core Expertise
            </h2>
            <p style={{ color: "#859398", maxWidth: "512px" }}>
              A balanced stack engineered for performance, maintainability, and horizontal scalability.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}>
            {expertise.map((cat, i) => (
              <div key={i} className="fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "4px",
                    background: `${cat.accent}1a`,
                    border: `1px solid ${cat.accent}33`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span className="material-symbols-outlined" style={{ color: cat.accent }}>{cat.icon}</span>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#e5e2e1" }}>{cat.title}</h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.skills.map((skill, j) => (
                    <span key={j} style={{
                      padding: "6px 12px",
                      background: "#1c1b1b",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "2px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px", color: "#bbc9cf",
                      display: "inline-flex", alignItems: "center", gap: "8px",
                    }}>
                      {skill.accent && (
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: skill.accent, flexShrink: 0 }} />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section style={{
        padding: "120px 24px",
        background: "#0e0e0e",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="dot-grid" style={{
          position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "space-between",
            alignItems: "flex-end", marginBottom: "64px", gap: "16px",
          }}>
            <div>
              <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#e5e2e1", marginBottom: "8px" }}>
                Featured Experience
              </h2>
              <p style={{ color: "#859398" }}>Impact-driven engineering for global organizations.</p>
            </div>
            <button
              onClick={() => setActivePage("experience")}
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                letterSpacing: "0.1em", color: "#a8e8ff",
                background: "none", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "8px",
                transition: "gap 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.gap = "16px"}
              onMouseLeave={e => e.currentTarget.style.gap = "8px"}
            >
              SEE FULL CAREER
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          {/* Experience Card */}
          <div className="glass-card" style={{
            borderRadius: "16px", overflow: "hidden",
            display: "grid", gridTemplateColumns: "1fr",
          }} className="exp-card">
            <div style={{
              display: "grid", gridTemplateColumns: "1fr",
            }} className="exp-inner-grid">
              {/* Left Panel */}
              <div style={{
                padding: "32px",
                background: "#2a2a2a",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }} className="exp-left">
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
                  letterSpacing: "0.2em", color: "#a8e8ff",
                  textTransform: "uppercase", marginBottom: "16px",
                }}>
                  CURRENT ROLE
                </div>
                <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#e5e2e1", marginBottom: "4px" }}>
                  Developer II
                </h3>
                <p style={{ color: "#7dffa2", fontWeight: 500, marginBottom: "24px" }}>Korn Ferry</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { icon: "calendar_today", text: "2022 - Present" },
                    { icon: "location_on", text: "Remote / Global" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span className="material-symbols-outlined" style={{ color: "#859398", fontSize: "16px", marginTop: "2px" }}>
                        {item.icon}
                      </span>
                      <span style={{ color: "#bbc9cf", fontSize: "14px" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel */}
              <div style={{ padding: "32px 48px", background: "rgba(10,12,18,0.4)" }} className="exp-right">
                <h4 style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
                  letterSpacing: "0.2em", color: "#859398",
                  textTransform: "uppercase", marginBottom: "24px",
                }}>
                  Key Contributions
                </h4>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "24px 32px", marginBottom: "32px",
                }}>
                  {[
                    "Modernized critical legacy recruitment systems by migrating to microservices, improving throughput by 3x.",
                    "Reduced API latency by 45% through strategic implementation of multi-layer Redis caching and query optimization.",
                    "Engineered a custom internal CLI tool used by 40+ developers to automate cloud deployment pipelines.",
                    "Mentored 4 junior engineers, establishing a standardized code review protocol that cut bug frequency by 20%.",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px" }}>
                      <span style={{ color: "#a8e8ff", fontWeight: 700, flexShrink: 0 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p style={{ color: "#bbc9cf", lineHeight: 1.6, fontSize: "15px" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                  <h4 style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: "11px",
                    letterSpacing: "0.2em", color: "#859398",
                    textTransform: "uppercase", marginBottom: "16px",
                  }}>
                    Technology Palette
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {[".NET Core", "Azure", "CosmosDB", "Docker", "React"].map((tech) => (
                      <span key={tech} style={{
                        padding: "4px 8px",
                        background: "rgba(57,57,57,0.2)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "2px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px", letterSpacing: "0.1em",
                        textTransform: "uppercase", color: "#bbc9cf",
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid { grid-template-columns: 7fr 5fr !important; }
          .exp-inner-grid { grid-template-columns: 4fr 8fr !important; }
        }
        @media (min-width: 1024px) {
          .exp-left { border-bottom: none !important; border-right: 1px solid rgba(255,255,255,0.12) !important; }
        }
        .stat-value:hover { transform: scale(1.1); }
      `}</style>
    </div>
  );
}
