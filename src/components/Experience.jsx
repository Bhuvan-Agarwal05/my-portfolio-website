import { useEffect } from "react";

const experiences = [
  {
    role: "Developer II",
    company: "Korn Ferry",
    period: "2022 — Present",
    status: "Current",
    statusColor: "#a8e8ff",
    dotColor: "#a8e8ff",
    description: "Pioneering technical leadership for global talent acquisition platforms. Orchestrated a massive optimization effort resulting in a <strong style=\"color:#7dffa2\">30% reduction in response latency</strong> across core microservices. Managing cloud infrastructure scaling and mentorship of junior engineers.",
    tags: ["#TypeScript", "#NodeJS", "#AWS_Lambda", "#Redis"],
    code: `async function optimizeLatency() {\n  // Reduced TTFB by 120ms\n  const cache = await Redis.connect();\n  return cache.pipe(stream);\n}`,
    side: "right",
  },
  {
    role: "Associate Consultant",
    company: "Korn Ferry",
    period: "2020 — 2022",
    dotColor: "#7dffa2",
    description: "Focused on the development of secure, scalable RESTful APIs within the .NET ecosystem. Engineered critical middleware components for cross-platform data synchronization. Reduced deployment errors by 15% through enhanced automated unit testing suites.",
    tags: ["#C_Sharp", "#.NET_Core", "#SQL_Server", "#UnitTesting"],
    proficiency: "Expert Proficiency",
    side: "left",
  },
  {
    role: "Systems Engineer",
    company: "TCS",
    period: "2018 — 2020",
    dotColor: "#859398",
    description: "Owned end-to-end delivery of complex ETL pipelines for Fortune 500 financial clients. Managed data transformation for datasets exceeding 5TB/month. Specialized in optimizing legacy stored procedures and streamlining data lake ingestion processes.",
    tags: ["#Python", "#ETL", "#Hadoop", "#Oracle"],
    side: "right",
  },
];

const recommendations = [
  {
    initials: "JD", bg: "#00d4ff", text: "#00586b",
    name: "John Doe", title: "Principal Architect",
    quote: "Bhuvan's ability to bridge the gap between complex architectural requirements and clean, performant code is unparalleled. He was instrumental in our cloud migration strategy.",
  },
  {
    initials: "AS", bg: "#05e777", text: "#00622e",
    name: "Anita Sharma", title: "Lead Product Manager",
    quote: "A rare engineer who truly understands the business impact of technical decisions. His work on response latency directly correlated with an 8% increase in user retention.",
  },
  {
    initials: "MK", bg: "#393939", text: "#e5e2e1",
    name: "Marcus King", title: "Senior Backend Dev",
    quote: "Bhuvan doesn't just write code; he crafts systems. His obsession with optimization and clean patterns makes him a top-tier teammate. His mentorship helped me level up significantly.",
  },
  {
    initials: "SC", bg: "rgba(168,232,255,0.2)", text: "#a8e8ff",
    name: "Sarah Chen", title: "VP of Engineering",
    quote: "Bhuvan brought a level of architectural rigor to Korn Ferry that helped us stabilize our most critical global platforms. His technical leadership is exceptional.",
  },
];

function CodeBlock({ code }) {
  const lines = code.split("\n");
  return (
    <div className="code-block" style={{ padding: "16px", borderRadius: "4px" }}>
      <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
        {["#ff5555", "#ffbd2e", "#27c93f"].map((c, i) => (
          <div key={i} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c + "80" }} />
        ))}
      </div>
      <pre style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "13px", lineHeight: 1.6,
        color: "#bbc9cf", overflowX: "auto", margin: 0,
      }}>
        <code>
          {lines.map((line, i) => {
            const colorized = line
              .replace(/(async|const|return|await)/g, `<span style="color:#7dffa2">$1</span>`)
              .replace(/(\/\/.+)/g, `<span style="color:#859398">$1</span>`)
              .replace(/(".*?"|'.*?')/g, `<span style="color:#FFD24D">$1</span>`);
            return (
              <div key={i} dangerouslySetInnerHTML={{ __html: colorized || "\u00A0" }} />
            );
          })}
        </code>
      </pre>
    </div>
  );
}

export default function Experience() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".exp-panel").forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: "128px", paddingBottom: "120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <header style={{ marginBottom: "96px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <span style={{ height: "4px", width: "48px", background: "#a8e8ff", display: "block" }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
              color: "#a8e8ff", textTransform: "uppercase", letterSpacing: "0.2em",
            }}>
              Curriculum Vitae
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 800,
            lineHeight: 1.1, letterSpacing: "-0.02em", color: "#e5e2e1",
            marginBottom: "24px",
          }}>
            Professional{" "}
            <span style={{ color: "#a8e8ff", fontStyle: "italic" }}>Trajectory</span>
          </h1>
          <p style={{ color: "#bbc9cf", maxWidth: "640px", fontSize: "16px", lineHeight: 1.6 }}>
            A chronological breakdown of my journey through software engineering, from building
            robust ETL pipelines to leading technical strategy for enterprise SaaS solutions.
          </p>
        </header>

        {/* Timeline */}
        <section style={{ position: "relative" }}>
          {/* Vertical line — desktop only */}
          <div className="timeline-visible-line" style={{
            position: "absolute", left: "50%", top: 0, bottom: 0,
            width: "2px", transform: "translateX(-50%)",
            background: "linear-gradient(to bottom, #a8e8ff, #7dffa2, transparent)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "96px" }}>
            {experiences.map((exp, idx) => {
              const isRight = exp.side === "right";
              return (
                <div key={idx} style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }} className="timeline-row">

                  {/* Timeline dot */}
                  <div className="timeline-dot" style={{
                    position: "absolute", left: "50%",
                    width: "16px", height: "16px", borderRadius: "50%",
                    background: exp.dotColor, transform: "translate(-50%, 50px)",
                    boxShadow: `0 0 10px ${exp.dotColor}`,
                    zIndex: 10, top: 0,
                  }} />

                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "24px", width: "100%",
                  }} className="timeline-content">

                    {/* Image placeholder / visual */}
                    <div className={`exp-panel timeline-image-${isRight ? "left" : "right"}`}
                      style={{
                        aspectRatio: "16/9",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "4px",
                        overflow: "hidden",
                        background: "linear-gradient(135deg, #1c1b1b 0%, #0A0C12 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        position: "relative",
                      }}>
                      <div style={{
                        position: "absolute", inset: 0,
                        background: `radial-gradient(ellipse at center, ${exp.dotColor}10 0%, transparent 70%)`,
                      }} />
                      <div style={{ textAlign: "center", zIndex: 1 }}>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "32px", fontWeight: 700,
                          color: exp.dotColor, opacity: 0.4,
                          marginBottom: "8px",
                        }}>
                          {exp.company.split(" ")[0]}
                        </div>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "11px", color: "#859398",
                          letterSpacing: "0.2em", textTransform: "uppercase",
                        }}>
                          {exp.period}
                        </div>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="exp-panel glass-panel group" style={{
                      padding: "24px", position: "relative", overflow: "hidden",
                      borderRadius: "4px",
                    }}>
                      <div className="scanline-overlay" />
                      <div style={{
                        display: "flex", justifyContent: "space-between",
                        alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "8px",
                      }}>
                        <h3 style={{ fontSize: "28px", fontWeight: 700, color: "#e5e2e1" }}>{exp.role}</h3>
                        {exp.status && (
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                            color: exp.statusColor, background: `${exp.statusColor}1a`,
                            padding: "4px 12px", border: `1px solid ${exp.statusColor}33`,
                          }}>
                            {exp.status}
                          </span>
                        )}
                      </div>

                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                        color: "#859398", letterSpacing: "0.1em", marginBottom: "24px",
                      }}>
                        {exp.company} • {exp.period}
                      </div>

                      <p style={{ color: "#bbc9cf", lineHeight: 1.7, marginBottom: "24px", fontSize: "15px" }}
                        dangerouslySetInnerHTML={{ __html: exp.description }} />

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                        {exp.tags.map((tag) => (
                          <span key={tag} style={{
                            fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
                            background: "#201f1f", padding: "4px 12px",
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "#bbc9cf",
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {exp.code && <CodeBlock code={exp.code} />}

                      {exp.proficiency && (
                        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "8px" }}>
                          <div style={{ height: "4px", flex: 1, background: "#201f1f", borderRadius: "2px" }}>
                            <div style={{
                              height: "100%", width: "85%",
                              background: "linear-gradient(to right, #a8e8ff, #7dffa2)",
                              borderRadius: "2px",
                            }} />
                          </div>
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "12px", color: "#7dffa2",
                          }}>
                            {exp.proficiency}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recommendations */}
        <section style={{ marginTop: "120px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#e5e2e1", marginBottom: "16px", textAlign: "center" }}>
              Colleague{" "}
              <span style={{ color: "#7dffa2", fontStyle: "italic" }}>Endorsements</span>
            </h2>
            <div style={{ height: "4px", width: "96px", background: "#7dffa2" }} />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}>
            {recommendations.map((rec, i) => (
              <div key={i} className="glass-panel exp-panel" style={{ padding: "24px", borderRadius: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: rec.bg, color: rec.text,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: "13px", flexShrink: 0,
                  }}>
                    {rec.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#e5e2e1", fontSize: "15px" }}>{rec.name}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "#859398" }}>
                      {rec.title}
                    </div>
                  </div>
                </div>
                <p style={{ color: "#bbc9cf", fontStyle: "italic", lineHeight: 1.7, fontSize: "15px" }}>
                  "{rec.quote}"
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-content { grid-template-columns: 1fr 1fr !important; }
          .timeline-dot { display: block !important; }
          .timeline-visible-line { display: block !important; }
          .timeline-image-left { order: -1; }
          .timeline-image-right { order: 1; }
        }
        @media (max-width: 767px) {
          .timeline-dot { display: none; }
          .timeline-visible-line { display: none; }
        }
      `}</style>
    </div>
  );
}
