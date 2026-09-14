"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/components/hero/HeroSection";

// ---------------------------------------------------------------------------
// Social icons — animated circular buttons
// ---------------------------------------------------------------------------

const EMAIL = "mohitredhu2005@gmail.com";
const GITHUB = "https://github.com/mohit8797";
const LINKEDIN = "https://www.linkedin.com/in/mohit-redhu-2075a5225/";
const LEETCODE = "https://leetcode.com/u/mohit_redhu/";

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const SOCIALS = [
  { label: "GitHub", href: GITHUB, icon: <GitHubIcon /> },
  { label: "LinkedIn", href: LINKEDIN, icon: <LinkedInIcon /> },
  { label: "LeetCode", href: LEETCODE, icon: <LeetCodeIcon /> },
  { label: "Email", href: `mailto:${EMAIL}`, icon: <MailIcon /> },
];

const INFO_CARDS = [
  {
    label: "FOCUS",
    value: "AI/ML, RAG systems, full-stack products",
  },
  {
    label: "BASE",
    value: "Greater Noida, India · Remote friendly",
  },
  {
    label: "STATUS",
    value: "AI/ML Intern at Triclops, open to new opportunities",
  },
];

// ---------------------------------------------------------------------------
// ContactSection — "Let's Build." CTA (saranshh.me reference, Image last)
// ---------------------------------------------------------------------------
export default function ContactSection() {
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
    <section
      id="contact"
      className="section bg-tech-grid contact-section"
      aria-label="Contact and CTA"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Ambient glow behind heading */}
      <div
        className="contact-glow"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(600px, 90vw)",
          maxWidth: "100%",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(124,92,252,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Section Header ── */}
        <motion.div
          {...fadeUp(0)}
          style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {/* Accent top line — like the reference's green line */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--accent-light), transparent)",
              margin: "0 auto 2rem",
            }}
            aria-hidden="true"
          />

          <h2
            style={{
              fontSize: "clamp(2.1rem, 7.5vw, 6rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--text-primary)",
              marginBottom: "0.1em",
            }}
          >
            Let&apos;s Build.
          </h2>
        </motion.div>

        {/* ── Subtitle ── */}
        <motion.p
          {...fadeUp(0.1)}
          style={{
            textAlign: "center",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-secondary)",
            marginBottom: "0.75rem",
          }}
        >
          Open to interesting problems, sharp ideas, and serious builds.
        </motion.p>

        {/* ── Code comment line ── */}
        <motion.p
          {...fadeUp(0.18)}
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "0.9rem",
            color: "var(--accent-light)",
            marginBottom: "3.5rem",
          }}
        >
          {"// Always up to talk about AI, code, and ambitious products ✦"}
        </motion.p>

        {/* ── Info Cards ── */}
        <motion.div
          {...fadeUp(0.25)}
          className="contact-cards"
        >
          {INFO_CARDS.map((card) => (
            <div key={card.label} className="contact-info-card">
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.6rem",
                }}
              >
                {card.label}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-primary)",
                  fontWeight: 500,
                  lineHeight: 1.5,
                }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Animated Social Icon Row ── */}
        <motion.div
          {...fadeUp(0.35)}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "3rem",
            paddingBottom: "1rem",
          }}
          role="list"
          aria-label="Social links"
        >
          {SOCIALS.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={`${social.label} (opens in new tab)`}
              role="listitem"
              initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.35 + i * 0.07 }}
              whileHover={shouldReduce ? {} : { y: -4, scale: 1.1 }}
              whileTap={shouldReduce ? {} : { scale: 0.95 }}
              className="contact-social-icon"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* ── Email CTA ── */}
        <motion.p
          {...fadeUp(0.45)}
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          or email directly at{" "}
          <a
            href={`mailto:${EMAIL}`}
            style={{ color: "var(--accent-light)", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            {EMAIL}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
