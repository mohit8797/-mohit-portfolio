"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/components/hero/HeroSection";

const LEETCODE_URL = "https://leetcode.com/u/mohit_redhu/";
const GFG_URL = "https://www.geeksforgeeks.org/profile/mohitredhp9e?tab=activity";

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------
function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// GFG green leaf icon
function GFGIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-1.678.258 4.54 4.54 0 0 1-1.144-.143 4.107 4.107 0 0 1-.97-.42 3.535 3.535 0 0 1-.746-.663 3.513 3.513 0 0 1-.49-.883H12v-1.32h2.758a3.492 3.492 0 0 1-.49.883 3.535 3.535 0 0 1-.746.663 4.107 4.107 0 0 1-.97.42 4.54 4.54 0 0 1-1.144.143 4.51 4.51 0 0 1-1.678-.258 3.691 3.691 0 0 1-1.104-.695 3.133 3.133 0 0 1-.565-.745A2.47 2.47 0 0 1 7.87 13.1a2.47 2.47 0 0 1 .19-1.216c.143-.28.334-.532.565-.745a3.691 3.691 0 0 1 1.104-.695A4.51 4.51 0 0 1 11.407 10.187a4.54 4.54 0 0 1 1.144.143 4.107 4.107 0 0 1 .97.42 3.535 3.535 0 0 1 .746.663c.108.135.205.277.29.424H17.303a3.513 3.513 0 0 1 .49-.883 3.535 3.535 0 0 1 .746-.663 4.107 4.107 0 0 1 .97-.42 4.54 4.54 0 0 1 1.144-.143 4.51 4.51 0 0 1 1.678.258 3.691 3.691 0 0 1 1.104.695c.23.213.422.465.565.745A2.47 2.47 0 0 1 24 13.1a2.47 2.47 0 0 1-.55 1.215zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/>
    </svg>
  );
}

const PLATFORMS = [
  {
    name: "LeetCode",
    url: LEETCODE_URL,
    description: "Data Structures & Algorithms",
    color: "#ffa116",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: "GeeksforGeeks",
    url: GFG_URL,
    description: "Competitive Programming",
    color: "#2f8d46",
    icon: <GFGIcon />,
  },
];

const DIFFICULTY_CONFIG = [
  { label: "Easy", color: "#22c55e" },
  { label: "Medium", color: "#f59e0b" },
  { label: "Hard", color: "#f43f5e" },
];

export default function ProblemSolvingSection() {
  const shouldReduce = useReducedMotion() ?? false;

  const fadeUp = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.55, ease: EASE_OUT, delay },
        };

  return (
    <section id="dsa" className="section container-page" aria-label="Problem Solving">
      {/* Heading */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.5rem" }}>
          CONSISTENCY
        </p>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 750, letterSpacing: "-0.03em", color: "var(--text-primary)" }}>
          Problem Solving
        </h2>
      </motion.div>

      {/* Main stat card */}
      <motion.div {...fadeUp(0.08)} className="dsa-card">
        {/* Left panel */}
        <div className="dsa-left">
          <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "var(--accent-muted)", border: "1px solid var(--accent-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent-light)", marginBottom: "1.25rem" }}>
            <CodeIcon />
          </div>

          <p style={{ fontSize: "clamp(2.75rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--text-primary)", marginBottom: "0.3rem" }}>
            400<span style={{ color: "var(--accent-light)" }}>+</span>
          </p>
          <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "1rem" }}>
            Problems Solved
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "28ch", marginBottom: "1.5rem" }}>
            Consistent practice on LeetCode and GeeksforGeeks — focusing on Data Structures, Algorithms, and problem-solving patterns.
          </p>

          {/* Platform links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.5rem 0.9rem",
                  borderRadius: "0.4rem",
                  backgroundColor: "var(--bg-elevated)",
                  border: "1px solid var(--bg-border)",
                  color: p.color,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "border-color 0.2s ease, background-color 0.2s ease",
                  width: "fit-content",
                }}
                className="platform-link"
                aria-label={`View ${p.name} profile (opens in new tab)`}
              >
                {p.icon}
                <span style={{ color: "var(--text-primary)" }}>{p.name}</span>
                <ExternalLinkIcon />
              </a>
            ))}
          </div>
        </div>

        {/* Right panel - difficulty bars */}
        <div className="dsa-right">
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            DIFFICULTY BREAKDOWN
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {DIFFICULTY_CONFIG.map(({ label, color }) => (
              <div key={label}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.9rem", fontWeight: 600, color }}>{label}</span>
                  <a href={LEETCODE_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.72rem", color: "var(--text-muted)", textDecoration: "none" }}>
                    view on LeetCode &rarr;
                  </a>
                </div>
                <div style={{ height: "7px", borderRadius: "999px", backgroundColor: "rgba(255,255,255,0.06)", overflow: "hidden" }} role="presentation" aria-hidden="true">
                  <motion.div
                    initial={shouldReduce ? {} : { width: 0 }}
                    whileInView={{ width: label === "Easy" ? "72%" : label === "Medium" ? "54%" : "14%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                    style={{ height: "100%", borderRadius: "999px", backgroundColor: color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "1.5rem", fontStyle: "italic" }}>
            Bars show approximate Easy / Medium / Hard ratio. Exact counts on profile.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
