"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroText from "./HeroText";
import HeroPortrait from "./HeroPortrait";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function slideUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  } as const;
}

export function fadeIn(delay: number) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.65, ease: "easeOut" as const, delay },
  } as const;
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion() ?? false;

  return (
    <section
      aria-label="Hero -- introduction"
      className="bg-tech-grid"
      style={{
        position: "relative",
        overflow: "hidden",
        /* Full viewport minus nav -- ensures it fills the screen */
        minHeight: "calc(100svh - var(--nav-height))",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Ambient radial glow */}
      <div
        className="ambient-glow"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Background watermark */}
      <div
        className="watermark-text"
        style={{
          position: "absolute",
          bottom: "-2rem",
          left: "-1rem",
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        MOHIT
      </div>

      {/* Content wrapper */}
      <div
        className="container-page"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          paddingTop: "clamp(2.5rem, 5vw, 4rem)",
          paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
        }}
      >
        {/* Asymmetric 2-col grid */}
        <div className="hero-grid">
          {/* Left -- Typography */}
          <div className="hero-text-col">
            <HeroText shouldReduce={shouldReduce} />
          </div>

          {/* Right -- Portrait */}
          <motion.div
            {...(shouldReduce ? {} : fadeIn(0.12))}
            className="hero-portrait-col"
          >
            <HeroPortrait />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
