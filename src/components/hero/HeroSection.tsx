"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroText from "./HeroText";
import HeroPortrait from "./HeroPortrait";

// ---------------------------------------------------------------------------
// HeroSection — two-column layout (text left, portrait right on desktop)
// ---------------------------------------------------------------------------

// Shared easing curve
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function slideUp(delay: number) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE_OUT, delay },
  } as const;
}

export function fadeIn(delay: number) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  } as const;
}

export function scaleIn(delay: number) {
  return {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  } as const;
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion() ?? false;

  return (
    <section
      aria-label="Hero — introduction"
      className="container-page"
      style={{
        // Tight enough to fit in first viewport; generous enough for small laptops
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        minHeight: "calc(100svh - var(--nav-height))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/*
        Layout strategy:
        - Mobile (< 860px): single column, text first then portrait centered below
        - Desktop (≥ 860px): two columns, text left | portrait right
          align-items: flex-start so portrait top aligns with first text line
      */}
      <div className="hero-grid">
        {/* Text column — always renders first in DOM (good for SEO / screen readers) */}
        <div className="hero-text-col">
          <HeroText shouldReduce={shouldReduce} />
        </div>

        {/* Portrait column */}
        <motion.div
          {...(shouldReduce ? {} : fadeIn(0.1))}
          className="hero-portrait-col"
        >
          <HeroPortrait />
        </motion.div>
      </div>
    </section>
  );
}
