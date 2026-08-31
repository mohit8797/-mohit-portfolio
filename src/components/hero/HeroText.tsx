"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { HERO_KEYWORDS } from "@/lib/constants";
import { SOCIAL_LINKS } from "@/lib/social";
import { slideUp, fadeIn } from "./HeroSection";
import HeroSocials from "./HeroSocials";

// ---------------------------------------------------------------------------
// HeroText — name, title, description, keywords, CTAs, social links
// ---------------------------------------------------------------------------

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
        maxWidth: "580px",
      }}
    >
      {/* Eyebrow */}
      <motion.p
        {...anim(slideUp, 0)}
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--accent-light)",
          marginBottom: "1.1rem",
        }}
      >
        B.Tech CSE &middot; Bennett University &middot; 2023–Present
      </motion.p>

      {/* Name */}
      <motion.h1
        {...anim(slideUp, 0.08)}
        style={{
          fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.06,
          marginBottom: "0.5rem",
          color: "var(--text-primary)",
        }}
      >
        Mohit Redhu
      </motion.h1>

      {/* Role */}
      <motion.p
        {...anim(slideUp, 0.15)}
        style={{
          fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
          fontWeight: 400,
          color: "var(--text-secondary)",
          marginBottom: "1.5rem",
          lineHeight: 1.4,
        }}
      >
        AI/ML Engineer &amp;{" "}
        <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
          Full-Stack Developer
        </span>
      </motion.p>

      {/* Description */}
      <motion.p
        {...anim(slideUp, 0.22)}
        style={{
          fontSize: "0.975rem",
          color: "var(--text-secondary)",
          lineHeight: 1.75,
          marginBottom: "1.75rem",
          maxWidth: "52ch",
        }}
      >
        I build AI-powered applications and full-stack products that solve
        practical problems — from AutoML pipelines and RAG systems to
        production web platforms.
      </motion.p>

      {/* Keyword pills */}
      <motion.div
        {...anim(fadeIn, 0.3)}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "2.25rem",
          alignItems: "center",
        }}
      >
        {HERO_KEYWORDS.map((kw) => (
          <span key={kw} className="hero-keyword">
            {kw}
          </span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        {...anim(slideUp, 0.36)}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "2rem",
          alignItems: "center",
        }}
      >
        <Link href="/projects" className="btn-accent">
          View Projects
          <ArrowRight size={15} aria-hidden="true" />
        </Link>

        <a
          href={SOCIAL_LINKS.resume}
          target={SOCIAL_LINKS.resume !== "#" ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="btn-ghost"
          aria-label="Download resume"
        >
          <Download size={15} aria-hidden="true" />
          Resume
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div {...anim(fadeIn, 0.42)}>
        <HeroSocials />
      </motion.div>
    </div>
  );
}
