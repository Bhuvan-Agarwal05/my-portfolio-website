import { useEffect, useRef } from "react";

const backendSkills = [
  { name: "C# / .NET", pct: 95 },
  { name: "TypeScript", pct: 90 },
  { name: "Go", pct: 85 },
  { name: "Node.js", pct: 88 },
  { name: "Java", pct: 80 },
];

const cloudItems = [
  { name: "AWS Ecosystem", verified: true },
  { name: "Terraform (IaC)", verified: false },
  { name: "Docker / K8s", verified: false },
  { name: "Azure DevOps", verified: false },
];

const architectureItems = [
  "Microservices", "RESTful APIs", "OAuth2 / AuthN",
  "Event-Sourcing", "Domain Driven Design", "CQRS Pattern",
  "API Gateway", "Service Mesh",
];

const databases = [
  { category: "Relational", name: "PostgreSQL" },
  { category: "NoSQL", name: "MongoDB" },
  { category: "Caching", name: "Redis" },
  { category: "Streaming", name: "Kafka" },
];

const manifesto = [
  {
    icon: "bolt",
    title: "Performance over Convenience",
    text: "I believe in writing code that respects the hardware. Every millisecond saved in a distributed system is a victory for scalability.",
  },
  {
    icon: "security",
    title: "Architecture First",
    text: "Rigor in initial design prevents technical debt. I prioritize strong typing, solid principles, and automated testability over rapid prototyping.",
  },
  {
    icon: "sync",
    title: "Constant Evolution",
    text: "The toolkit is never final. I treat every project as an opportunity to refine methodologies and integrate more resilient infrastructure.",
  },
];

const productionCode = `public class ArchitecturalRigor 
{
    // Philosophy: If it's not observable, it's not production-ready.
    public async Task<Result> ExecuteCriticalTask(Guid correlationId) 
    {
        using var activity = telemetry.Start("critical_path");
        try 
        {
            return await pipeline.ProcessAsync(correlationId);
        }
        catch (Exception ex) 
        {
            logger.LogError(ex, "Architectural failure at {Id}", correlationId);
            throw;
        }
    }
}`;

function SkillBar({ name, pct, delay = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && barRef.current) {
            setTimeout(() => {
              if (barRef.current) barRef.current.style.width = `${pct}%`;
            }, delay);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement.parentElement);
    return () => observer.disconnect();
  }, [pct, delay]);

  return (
    <div className="skill-item" style={{ marginBottom: "16px" }}
      onMouseEnter={e => { const bar = e.currentTarget.querySelector(".skill-fill"); if (bar) bar.style.boxShadow = "0 0 15px rgba(168,232,255,0.6)"; }}
      onMouseLeave={e => { const bar = e.currentTarget.querySelector(".skill-fill"); if (bar) bar.style.boxShadow = "none"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px", letterSpacing: "0.1em",
          color: "#e5e2e1", fontWeight: 700,
        }}>{name}</span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px", color: "#a8e8ff",
        }}>{pct}%</span>
      </div>
      <div style={{
        height: "4px", width: "100%",
        background: "#201f1f", borderRadius: "999px", overflow: "hidden",
      }}>
        <div
          className="skill-fill"
          ref={barRef}
          style={{
            height: "100%", width: "0%",
            background: "linear-gradient(to right, #a8e8ff, #7dffa2)",
            borderRadius: "999px",
            transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".skill-fade").forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const codeLines = productionCode.split("\n").map(line => {
    let colored = line
      .replace(/(public|class|async|Task|using|var|try|catch|throw|return)/g,
        `<span style="color:#a8e8ff">$1</span>`)
      .replace(/(ArchitecturalRigor|ExecuteCriticalTask|Result|Guid|Exception)/g,
        `<span style="color:#7dffa2">$1</span>`)
      .replace(/(\/\/.+)/g,
        `<span style="color:#859398">$1</span>`)
      .replace(/(".*?")/g,
        `<span style="color:#FFD24D">$1</span>`);
    return colored;
  });

  return (
    <div style={{ paddingTop: "128px", paddingBottom: "120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", overflow: "hidden" }}>

        {/* Header */}
        <section style={{ marginBottom: "80px" }} className="skill-fade">
          <p style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
            color: "#a8e8ff", marginBottom: "16px",
            letterSpacing: "0.2em", textTransform: "uppercase",
          }}>
            ENGINEERING CORE
          </p>
          <h1 style={{
            fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 800,
            lineHeight: 1, letterSpacing: "-0.02em",
            color: "#e5e2e1", marginBottom: "24px",
          }}>
            The Technical{" "}
            <br />
            <span className="glow-text" style={{ color: "#a8e8ff", fontStyle: "italic" }}>Toolkit.</span>
          </h1>
          <p style={{ maxWidth: "640px", color: "#bbc9cf", fontSize: "16px", lineHeight: 1.6 }}>
            A high-performance stack curated through 5+ years of software engineering, focusing on
            scalable distributed systems, cloud-native architecture, and rigorous type safety.
          </p>
        </section>

        {/* Bento Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "24px",
        }} className="bento-grid">

          {/* Backend & Languages — span 8 */}
          <div className="glass-card skill-fade bento-8" style={{
            gridColumn: "span 12",
            padding: "24px",
            position: "relative", overflow: "hidden",
            borderRadius: "4px",
          }}>
            <div className="scanline-overlay" />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <span className="material-symbols-outlined" style={{ color: "#a8e8ff" }}>terminal</span>
              <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#e5e2e1" }}>Backend &amp; Languages</h3>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "32px 48px",
            }}>
              <div>
                {backendSkills.slice(0, 3).map((s, i) => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 100} />
                ))}
              </div>
              <div>
                {backendSkills.slice(3).map((s, i) => (
                  <SkillBar key={s.name} name={s.name} pct={s.pct} delay={(i + 3) * 100} />
                ))}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                  {["RUST (EXPLORING)", "PYTHON"].map(tag => (
                    <span key={tag} style={{
                      padding: "4px 12px",
                      background: "#201f1f",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "999px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px", color: "#bbc9cf",
                      display: "inline-flex", alignItems: "center", gap: "6px",
                    }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7dffa2" }} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cloud — span 4 */}
          <div className="glass-card skill-fade bento-4" style={{
            gridColumn: "span 12",
            padding: "24px",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            borderRadius: "4px",
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <span className="material-symbols-outlined" style={{ color: "#a8e8ff" }}>cloud</span>
                <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#e5e2e1" }}>Cloud</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {cloudItems.map((item) => (
                  <div key={item.name} style={{
                    padding: "12px", background: "#1c1b1b",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    cursor: "default", transition: "border-color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "#a8e8ff"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                  >
                    <span style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px", letterSpacing: "0.1em",
                      color: "#e5e2e1", fontWeight: 700,
                    }}>{item.name}</span>
                    {item.verified && (
                      <span className="material-symbols-outlined" style={{
                        color: "#7dffa2", fontSize: "18px",
                        fontVariationSettings: "'FILL' 1",
                      }}>verified</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              marginTop: "32px", paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.12)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px", color: "#bbc9cf",
              fontStyle: "italic",
            }}>
              Reliability is not an afterthought; it is built into the pipeline.
            </div>
          </div>

          {/* Architecture — span 6 */}
          <div className="glass-card skill-fade bento-6" style={{
            gridColumn: "span 12",
            padding: "24px",
            position: "relative", overflow: "hidden",
            borderRadius: "4px",
          }}>
            <div style={{
              position: "absolute", top: 0, right: 0,
              padding: "16px", pointerEvents: "none",
            }}>
              <span className="material-symbols-outlined" style={{
                color: "rgba(168,232,255,0.08)",
                fontSize: "80px", transform: "rotate(12deg)", display: "block",
              }}>architecture</span>
            </div>
            <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#e5e2e1", marginBottom: "24px" }}>
              Architecture
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {architectureItems.map((item) => (
                <div key={item} style={{
                  padding: "8px 16px",
                  background: "#353534",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px", letterSpacing: "0.1em",
                  color: "#e5e2e1", cursor: "default",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#a8e8ff"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {item}
                </div>
              ))}
            </div>
            <p style={{
              marginTop: "32px", color: "#bbc9cf",
              fontSize: "14px", lineHeight: 1.7,
            }}>
              Deep expertise in designing distributed systems that prioritize low latency and
              eventual consistency across multi-region deployments.
            </p>
          </div>

          {/* Databases — span 6 */}
          <div className="glass-card skill-fade bento-6" style={{
            gridColumn: "span 12",
            padding: "24px", borderRadius: "4px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <span className="material-symbols-outlined" style={{ color: "#a8e8ff" }}>database</span>
              <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#e5e2e1" }}>Persistence</h3>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}>
              {databases.map((db) => (
                <div key={db.name} style={{ group: true }}
                  onMouseEnter={e => { const line = e.currentTarget.querySelector(".db-line"); if (line) line.style.background = "#a8e8ff"; }}
                  onMouseLeave={e => { const line = e.currentTarget.querySelector(".db-line"); if (line) line.style.background = "rgba(255,255,255,0.12)"; }}
                >
                  <p style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px", color: "#bbc9cf",
                    textTransform: "uppercase", letterSpacing: "0.15em",
                    marginBottom: "4px",
                  }}>
                    {db.category}
                  </p>
                  <h4 style={{ fontSize: "22px", fontWeight: 700, color: "#a8e8ff" }}>{db.name}</h4>
                  <div className="db-line" style={{
                    width: "100%", height: "2px",
                    background: "rgba(255,255,255,0.12)",
                    marginTop: "8px",
                    transition: "background 0.3s",
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Manifesto */}
        <section style={{
          marginTop: "120px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "24px", alignItems: "center",
        }} className="manifesto-grid">

          {/* Visual */}
          <div className="glass-card skill-fade" style={{
            padding: "0", overflow: "hidden",
            aspectRatio: "16/9", position: "relative",
            borderRadius: "4px",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, #0A0C12 0%, #201f1f 50%, #0A0C12 100%)",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at 30% 50%, rgba(168,232,255,0.08) 0%, transparent 60%)",
            }} />
            {/* Fake code visual */}
            <div style={{
              position: "absolute", inset: "24px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px", lineHeight: 1.8, color: "#3c494e",
              overflow: "hidden",
            }}>
              {["const loadBalancer = new DistributedSystem({", "  nodes: 12, failover: 'auto',", "  region: 'us-east-1',", "});", "", "await service.initialize();", "monitor.watch('latency', threshold);"].map((line, i) => (
                <div key={i} style={{
                  color: i % 3 === 0 ? "#1c4a5a" : i % 3 === 1 ? "#1a5c30" : "#3c494e",
                }}>{line || "\u00A0"}</div>
              ))}
            </div>
            {/* Overlay gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, #0A0C12 0%, transparent 60%)",
            }} />
            {/* Bottom badge */}
            <div style={{
              position: "absolute", bottom: "24px", left: "24px",
              display: "flex", alignItems: "center", gap: "16px",
            }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                border: "1px solid #a8e8ff",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(19,19,19,0.5)", backdropFilter: "blur(8px)",
              }}>
                <span className="material-symbols-outlined" style={{
                  color: "#a8e8ff",
                  fontVariationSettings: "'FILL' 1",
                }}>terminal</span>
              </div>
              <div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#e5e2e1" }}>VSC-2024</p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "#859398" }}>Active Environment</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="skill-fade">
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px", color: "#a8e8ff",
              textTransform: "uppercase", letterSpacing: "0.2em",
              display: "block", marginBottom: "16px",
            }}>
              ENGINEERING PHILOSOPHY
            </span>
            <h2 className="glow-text" style={{
              fontSize: "32px", fontWeight: 700,
              color: "#e5e2e1", marginBottom: "24px",
            }}>
              The Tech Manifesto
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {manifesto.map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "16px" }}>
                  <div style={{ paddingTop: "2px", flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: "#7dffa2" }}>{item.icon}</span>
                  </div>
                  <p style={{ color: "#bbc9cf", lineHeight: 1.7, fontSize: "15px" }}>
                    <strong style={{ color: "#e5e2e1" }}>{item.title}:</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Code Callout */}
        <section style={{ marginTop: "120px" }} className="skill-fade">
          <div style={{
            background: "#050505",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "8px",
            overflow: "hidden",
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            <div style={{
              background: "#201f1f",
              padding: "8px 16px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
            }}>
              <div style={{ display: "flex", gap: "8px" }}>
                {[["#ffb4ab", "#690005"], ["#FFD24D", "#8a6d00"], ["#7dffa2", "#00622e"]].map(([bg, col], i) => (
                  <div key={i} style={{ width: "12px", height: "12px", borderRadius: "50%", background: bg + "66" }} />
                ))}
              </div>
              <span style={{
                fontSize: "10px", color: "#859398",
                letterSpacing: "0.15em", textTransform: "uppercase",
              }}>
                production_ready.cs
              </span>
            </div>
            <div style={{ padding: "32px", overflowX: "auto" }}>
              <pre style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px", lineHeight: 1.8,
                color: "#bbc9cf", margin: 0,
              }}>
                <code>
                  {codeLines.map((line, i) => (
                    <div key={i} dangerouslySetInnerHTML={{ __html: line || "\u00A0" }} />
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .bento-8 { grid-column: span 8 !important; }
          .bento-4 { grid-column: span 4 !important; }
          .bento-6 { grid-column: span 6 !important; }
          .manifesto-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
