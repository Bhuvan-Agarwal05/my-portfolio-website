import { useState, useEffect, useRef } from "react";

const socialLinks = [
  { icon: "code", label: "GitHub", endpoint: "/api/v1/github", href: "https://github.com" },
  { icon: "share", label: "LinkedIn", endpoint: "/api/v1/linkedin", href: "https://linkedin.com" },
  { icon: "terminal", label: "Twitter / X", endpoint: "/api/v1/twitter", href: "https://twitter.com" },
];

export default function Contact() {
  const [step, setStep] = useState("name"); // name | email | message | submit | success
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [lines, setLines] = useState([
    { text: "Initializing secure communication channel...", color: "#bbc9cf" },
    { text: "[SUCCESS] Connection established.", color: "#7dffa2" },
    { text: "Type your credentials to transmit message to Bhuvan Agarwal.", color: "#bbc9cf" },
  ]);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (step === "name" && nameRef.current) nameRef.current.focus();
    if (step === "email" && emailRef.current) emailRef.current.focus();
    if (step === "message" && messageRef.current) messageRef.current.focus();
  }, [step]);

  const handleNameEnter = (e) => {
    if (e.key === "Enter" && form.name.trim()) {
      setLines(prev => [...prev, { text: `➜ Name: ${form.name}`, color: "#e5e2e1" }]);
      setStep("email");
    }
  };

  const handleEmailEnter = (e) => {
    if (e.key === "Enter" && form.email.trim() && /\S+@\S+\.\S+/.test(form.email)) {
      setLines(prev => [...prev, { text: `➜ Email: ${form.email}`, color: "#e5e2e1" }]);
      setStep("message");
    }
  };

  const handleMessageInput = (e) => {
    setForm(prev => ({ ...prev, message: e.target.value }));
    if (e.target.value.trim().length > 10 && step === "message") {
      setStep("submit");
    }
  };

  const handleMessageKey = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") handleSubmit();
  };

  const handleSubmit = () => {
    if (submitting) return;
    setSubmitting(true);
    setTimeout(() => {
      setLines(prev => [
        ...prev,
        { text: "Encrypting payload...", color: "#bbc9cf" },
        { text: "Pushing to origin/main...", color: "#bbc9cf" },
      ]);
      setTimeout(() => setStep("success"), 800);
    }, 1500);
  };

  return (
    <div style={{ minHeight: "100vh", paddingTop: "128px", paddingBottom: "120px", position: "relative", overflow: "hidden" }}>

      {/* Background */}
      <div className="grid-overlay" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />
      <div style={{
        position: "absolute", top: "25%", right: "-80px",
        width: "384px", height: "384px",
        background: "rgba(168,232,255,0.05)", filter: "blur(120px)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "25%", left: "-80px",
        width: "384px", height: "384px",
        background: "rgba(125,255,162,0.05)", filter: "blur(120px)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <section style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 24px", position: "relative", zIndex: 1,
      }}>
        <div style={{
          display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start",
        }} className="contact-layout">

          {/* Left — Hero */}
          <div style={{ marginTop: "48px" }} className="contact-left">
            <span style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: "12px",
              color: "#a8e8ff", textTransform: "uppercase", letterSpacing: "0.2em",
              display: "block", marginBottom: "16px",
            }}>
              Connectivity Protocol
            </span>
            <h1 style={{
              fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800,
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "#e5e2e1", marginBottom: "24px",
            }}>
              Let's build something{" "}
              <span style={{ color: "#7dffa2" }}>robust</span> together.
            </h1>
            <p style={{ color: "#bbc9cf", maxWidth: "420px", marginBottom: "32px", lineHeight: 1.7 }}>
              Currently open to architectural consultation, full-stack lead opportunities,
              and innovative open-source collaborations.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "terminal", text: "bhuvan@v1.dev" },
                { icon: "location_on", text: "San Francisco, CA // Remote" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span className="material-symbols-outlined" style={{ color: "#a8e8ff" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "13px", color: "#bbc9cf" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Code decor */}
            <div style={{
              marginTop: "64px", padding: "16px", borderRadius: "8px",
              background: "#0e0e0e", border: "1px solid rgba(255,255,255,0.12)",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "13px",
              color: "#859398", opacity: 0.7,
            }} className="code-decor-hidden">
              <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(133,147,152,0.2)" }} />
                ))}
              </div>
              {[
                { text: "const contact_init = async () => {", color: "#7dffa2" },
                { text: "  await socket.connect('bhvn.dev');", color: "#859398" },
                { text: "  return new Connection({", color: "#859398" },
                { text: "    secure: true,", color: "#859398" },
                { text: "    lowLatency: true", color: "#859398" },
                { text: "  });", color: "#859398" },
                { text: "};", color: "#7dffa2" },
              ].map((line, i) => (
                <p key={i} style={{ color: line.color, margin: "2px 0" }}>{line.text}</p>
              ))}
            </div>
          </div>

          {/* Right — Terminal Form */}
          <div className="contact-right" style={{ width: "100%" }}>
            <div
              className="terminal-window"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px", boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                overflow: "hidden",
                transition: "border-color 0.5s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(168,232,255,0.4)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
              onClick={() => {
                if (step === "name" && nameRef.current) nameRef.current.focus();
                if (step === "email" && emailRef.current) emailRef.current.focus();
                if (step === "message" || step === "submit") if (messageRef.current) messageRef.current.focus();
              }}
            >
              {/* Terminal Header */}
              <div style={{
                background: "#2a2a2a", padding: "12px 16px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.12)",
              }}>
                <div style={{ display: "flex", gap: "8px" }}>
                  {["#FF5F56", "#FFBD2E", "#27C93F"].map((c, i) => (
                    <div key={i} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px", color: "rgba(187,201,207,0.5)",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>lock</span>
                  guest@bhuvan-dev: ~/contact-v2
                </div>
                <div style={{ width: "48px" }} />
              </div>

              {/* Terminal Body */}
              <div style={{
                padding: "24px 40px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "14px", minHeight: "480px",
                display: "flex", flexDirection: "column",
              }}>
                {/* Output lines */}
                <div style={{ marginBottom: "24px" }}>
                  {lines.map((line, i) => (
                    <p key={i} style={{ color: line.color, margin: "4px 0", lineHeight: 1.6 }}>
                      {line.text}
                    </p>
                  ))}
                </div>

                {/* Form steps */}
                {step !== "success" && (
                  <div style={{
                    display: "flex", flexDirection: "column", gap: "24px",
                    opacity: submitting ? 0.4 : 1,
                    pointerEvents: submitting ? "none" : "auto",
                    transition: "opacity 0.3s",
                  }}>
                    {/* Name */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "#a8e8ff", fontWeight: 700 }}>➜</span>
                      <span style={{ color: "#bce4ff" }}>Name</span>
                      <span style={{ color: "#859398" }}>:</span>
                      <input
                        ref={nameRef}
                        type="text"
                        value={form.name}
                        onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                        onKeyDown={handleNameEnter}
                        disabled={step !== "name"}
                        style={{ opacity: step === "name" ? 1 : 0.5 }}
                      />
                    </div>

                    {/* Email */}
                    {(step === "email" || step === "message" || step === "submit") && (
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#a8e8ff", fontWeight: 700 }}>➜</span>
                        <span style={{ color: "#bce4ff" }}>Email</span>
                        <span style={{ color: "#859398" }}>:</span>
                        <input
                          ref={emailRef}
                          type="email"
                          value={form.email}
                          onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                          onKeyDown={handleEmailEnter}
                          disabled={step !== "email"}
                          style={{ opacity: step === "email" ? 1 : 0.5 }}
                        />
                      </div>
                    )}

                    {/* Message */}
                    {(step === "message" || step === "submit") && (
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ color: "#a8e8ff", fontWeight: 700 }}>➜</span>
                          <span style={{ color: "#bce4ff" }}>Message</span>
                          <span style={{ color: "#859398" }}>:</span>
                        </div>
                        <textarea
                          ref={messageRef}
                          rows={4}
                          value={form.message}
                          onChange={handleMessageInput}
                          onKeyDown={handleMessageKey}
                          style={{ paddingLeft: "20px", resize: "none" }}
                        />
                      </div>
                    )}

                    {/* Submit */}
                    {step === "submit" && (
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "#a8e8ff", fontWeight: 700 }}>➜</span>
                        <button
                          onClick={handleSubmit}
                          style={{
                            color: "#62ff96",
                            background: "none", border: "none",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "14px", cursor: "pointer",
                            display: "flex", alignItems: "center", gap: "8px",
                            padding: "4px 8px",
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(125,255,162,0.1)"}
                          onMouseLeave={e => e.currentTarget.style.background = "none"}
                        >
                          <span>./send_message.sh --force</span>
                          <span className="material-symbols-outlined animate-pulse" style={{ fontSize: "16px" }}>send</span>
                        </button>
                        <span className="terminal-cursor" />
                      </div>
                    )}

                    {step === "name" && <span className="terminal-cursor" />}
                  </div>
                )}

                {/* Success */}
                {step === "success" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p style={{ color: "#bbc9cf" }}>Encrypting payload...</p>
                    <p style={{ color: "#bbc9cf" }}>Pushing to origin/main...</p>
                    <div style={{
                      display: "flex", alignItems: "center", gap: "16px",
                      padding: "16px",
                      background: "rgba(125,255,162,0.1)",
                      border: "1px solid rgba(125,255,162,0.2)",
                      borderRadius: "8px", marginTop: "16px",
                    }}>
                      <span className="material-symbols-outlined" style={{
                        color: "#7dffa2",
                        fontVariationSettings: "'FILL' 1",
                        fontSize: "28px",
                      }}>check_circle</span>
                      <div>
                        <p style={{ color: "#7dffa2", fontWeight: 700, marginBottom: "4px" }}>Transmission Complete</p>
                        <p style={{ color: "#bbc9cf", fontSize: "12px" }}>
                          Bhuvan will review your packet and respond within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Meta coords */}
            <div style={{
              marginTop: "24px",
              display: "flex", justifyContent: "space-between",
              padding: "0 8px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px", color: "#859398",
              textTransform: "uppercase", letterSpacing: "0.15em",
              opacity: 0.5,
            }}>
              <div style={{ display: "flex", gap: "16px" }}>
                <span>Lat: 37.7749° N</span>
                <span>Lng: 122.4194° W</span>
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <span>Status: Listening</span>
                <span>Port: 443</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.12)",
            }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: "8px 16px", borderRadius: "8px",
                      background: "#0e0e0e",
                      border: "1px solid rgba(255,255,255,0.12)",
                      textDecoration: "none",
                      transition: "border-color 0.3s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(125,255,162,0.4)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"}
                  >
                    <span className="material-symbols-outlined" style={{ color: "#7dffa2", fontSize: "20px" }}>
                      {link.icon}
                    </span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px", color: "#859398",
                        textTransform: "uppercase", letterSpacing: "0.1em",
                      }}>
                        {link.label}
                      </span>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "13px", color: "#e5e2e1",
                        transition: "color 0.3s",
                      }}
                        onMouseEnter={e => e.target.style.color = "#7dffa2"}
                        onMouseLeave={e => e.target.style.color = "#e5e2e1"}
                      >
                        {link.endpoint}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .contact-layout { flex-direction: row !important; gap: 24px !important; }
          .contact-left { width: 33.333% !important; flex-shrink: 0; }
          .contact-right { width: 66.666% !important; }
          .code-decor-hidden { display: block !important; }
        }
        @media (max-width: 1023px) {
          .code-decor-hidden { display: none; }
        }
        @media (max-width: 640px) {
          .contact-layout > div { padding: 16px 20px !important; }
        }
      `}</style>
    </div>
  );
}
