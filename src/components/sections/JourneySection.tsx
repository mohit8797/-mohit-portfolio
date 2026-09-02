"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/components/hero/HeroSection";

// ---------------------------------------------------------------------------
// Timeline data — Experience + Education
// ---------------------------------------------------------------------------
const TIMELINE = [
  {
    id: "triclops",
    type: "experience" as const,
    title: "AI / ML Intern",
    org: "Triclops",
    period: "Jun 2026 – Aug 2026",
    side: "left" as const,
    bullets: [
      "Built and tested AI-powered voice agents for US restaurant industry automation.",
      "Designed agentic workflows for conversational order-taking and customer interaction.",
      "Integrated APIs for real-time restaurant operations and automated workflow testing.",
      "Refined pipeline reliability through systematic iteration and edge-case handling.",
    ],
  },
  {
    id: "bennett",
    type: "education" as const,
    title: "Student",
    org: "Bennett University",
    period: "2023 – Present",
    side: "right" as const,
    bullets: [
      "B.Tech in Computer Science and Engineering (AI Specialisation) — CGPA: 8.89 / 10.0.",
      "Relevant coursework: Data Structures, Algorithms, AI, Machine Learning, DBMS, Operating Systems.",
      "Solved 400+ DSA problems across competitive programming platforms.",
    ],
  },
];

// ---------------------------------------------------------------------------
// JourneySection — Vertical alternating timeline (saranshh.me reference)
// ---------------------------------------------------------------------------
export default function JourneySection() {
  const shouldReduce = useReducedMotion() ?? false;

  const slideIn = (side: "left" | "right", delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, x: side === "left" ? -28 : 28 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.55, ease: EASE_OUT, delay },
        };

  return (
    <section id="journey" className="section container-page" aria-label="Experience and Education">
      {/* ── Heading ── */}
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
        style={{ marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 750,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}
        >
          The Journey
        </h2>
      </motion.div>

      {/* ── Timeline ── */}
      <div className="timeline-container">
        {/* Center / left accent line */}
        <div className="timeline-line" aria-hidden="true" />

        {TIMELINE.map((item, index) => (
          <div key={item.id} className={`timeline-row timeline-row--${item.side}`}>

            {/* Dot on the line */}
            <div className="timeline-dot" aria-hidden="true" />

            {/* Card */}
            <motion.div
              {...slideIn(item.side, index * 0.15)}
              className="timeline-card"
            >
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  marginBottom: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>{item.org}</strong>
                <span
                  style={{
                    width: "1px",
                    height: "12px",
                    backgroundColor: "var(--bg-border)",
                    display: "inline-block",
                  }}
                  aria-hidden="true"
                />
                {item.period}
              </p>

              <ul role="list" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {item.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent-light)",
                        flexShrink: 0,
                        marginTop: "0.5rem",
                      }}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Invisible spacer — desktop only — pushes card to correct half */}
            <div className="timeline-spacer" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
