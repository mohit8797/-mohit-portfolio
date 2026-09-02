"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Briefcase, Cpu, Award } from "lucide-react";
import { EASE_OUT } from "@/components/hero/HeroSection";

// ---------------------------------------------------------------------------
// AboutSection — Background, experience summary, and key highlights
// ---------------------------------------------------------------------------

const HIGHLIGHT_CARDS = [
  {
    id: "about-edu",
    icon: GraduationCap,
    title: "Education",
    subtitle: "B.Tech in CSE (AI Specialization)",
    detail: "Bennett University · 2023–Present · CGPA: 8.89 / 10.0",
  },
  {
    id: "about-exp",
    icon: Briefcase,
    title: "AI/ML Internship",
    subtitle: "Triclops · Jun 2026 – Aug 2026",
    detail: "Voice agents, agentic workflows & API testing for US restaurant automation",
  },
  {
    id: "about-focus",
    icon: Cpu,
    title: "Core Focus",
    subtitle: "AI/ML & Full-Stack Engineering",
    detail: "RAG systems, AutoML pipelines, and production web applications",
  },
  {
    id: "about-dsa",
    icon: Award,
    title: "Problem Solving",
    subtitle: "400+ DSA Problems Solved",
    detail: "Active problem solver across LeetCode & GeeksforGeeks",
  },
] as const;

export default function AboutSection() {
  const shouldReduce = useReducedMotion() ?? false;

  const fadeInAnim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.55, ease: EASE_OUT, delay },
        };

  return (
    <section id="about" className="section container-page" aria-label="About Me">
      {/* Section Header */}
      <motion.div {...fadeInAnim(0)} style={{ marginBottom: "2.5rem" }}>
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent-light)",
            marginBottom: "0.5rem",
          }}
        >
          About Me
        </p>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}
        >
          Background &amp; Focus
        </h2>
      </motion.div>

      {/* Two-column Content Layout */}
      <div className="about-grid">
        {/* Left Column — First Person Bio */}
        <motion.div {...fadeInAnim(0.1)} className="about-bio-col">
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            I am a Computer Science Engineering student specializing in Artificial
            Intelligence at Bennett University (Class of 2027, CGPA 8.89). My work bridges
            machine learning algorithms and full-stack software development, focusing on turning
            theoretical concepts into functional, reliable applications.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "1.25rem",
            }}
          >
            During my AI/ML internship at Triclops, I contributed to building and testing
            AI-powered voice agents for the US restaurant industry. I designed conversational
            flows, validated agent behavior using node-based agentic platforms, and tested
            workflow execution and API integrations under real-world operational scenarios.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
            }}
          >
            Whether engineering AutoML pipelines, building RAG applications, or developing
            relational database backend services, I am focused on writing clean, scalable code and
            solving concrete technical problems.
          </p>
        </motion.div>

        {/* Right Column — Quick Fact Highlight Cards */}
        <motion.div {...fadeInAnim(0.2)} className="about-cards-col">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {HIGHLIGHT_CARDS.map(({ id, icon: Icon, title, subtitle, detail }) => (
              <div key={id} className="card" style={{ padding: "1.25rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "var(--accent-muted)",
                    color: "var(--accent-light)",
                    marginBottom: "0.75rem",
                  }}
                >
                  <Icon size={18} aria-hidden="true" />
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--text-muted)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {title}
                </p>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {subtitle}
                </h3>
                <p
                  style={{
                    fontSize: "0.825rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
