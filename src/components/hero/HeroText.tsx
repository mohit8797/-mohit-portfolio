"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/social";
import { slideUp, fadeIn } from "./HeroSection";

interface HeroTextProps {
  shouldReduce: boolean;
}

export default function HeroText({ shouldReduce }: HeroTextProps) {
  const anim = (fn: (delay: number) => object, delay: number) =>
    shouldReduce ? {} : fn(delay);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {/* Eyebrow */}
      <motion.p
        {...anim(slideUp, 0)}
        style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--accent-light)",
          marginBottom: "1.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span className="pulse-dot" aria-hidden="true" />
        NOT ANOTHER DEV PORTFOLIO
      </motion.p>

      {/* Massive display name */}
      <motion.h1
        {...anim(slideUp, 0.07)}
        style={{
          fontSize: "clamp(2.4rem, 9vw, 7.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 0.95,
          marginBottom: "1.25rem",
          color: "var(--text-primary)",
        }}
      >
        Mohit Redhu.
      </motion.h1>

      {/* Tagline */}
      <motion.p
        {...anim(slideUp, 0.14)}
        style={{
          fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)",
          fontWeight: 500,
          color: "var(--text-primary)",
          lineHeight: 1.45,
          marginBottom: "0.9rem",
          letterSpacing: "-0.01em",
        }}
      >
        I build AI systems that feel precise and real.
      </motion.p>

      {/* Bio */}
      <motion.p
        {...anim(slideUp, 0.2)}
        style={{
          fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          marginBottom: "2rem",
          maxWidth: "46ch",
        }}
      >
        B.Tech CSE student at Bennett University. I like AI-heavy products,
        RAG architectures, and engineering work that holds up under pressure.
      </motion.p>

      {/* Badge pills */}
      <motion.div
        {...anim(fadeIn, 0.27)}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2.25rem",
        }}
      >
        {["8.89 CGPA", "400+ DSA Problems", "AI/ML + Full-Stack"].map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        {...anim(slideUp, 0.34)}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.85rem",
          alignItems: "center",
        }}
      >
        {/* White solid — "My Work" */}
        <Link
          href="/#projects"
          className="btn-solid-white"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.8rem 1.75rem",
            borderRadius: "9999px",
            backgroundColor: "var(--text-primary)",
            color: "var(--bg-primary)",
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "-0.01em",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          My Work
        </Link>

        {/* Ghost outlined — "Download Resume" */}
        <a
          href={SOCIAL_LINKS.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-ghost"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.78rem 1.6rem",
            borderRadius: "9999px",
            backgroundColor: "transparent",
            color: "var(--text-primary)",
            fontWeight: 600,
            fontSize: "0.95rem",
            letterSpacing: "-0.01em",
            textDecoration: "none",
            border: "1.5px solid var(--bg-border)",
            flexShrink: 0,
          }}
          aria-label="Download resume"
        >
          <FileText size={16} aria-hidden="true" />
          Download Resume
        </a>
      </motion.div>
    </div>
  );
}
