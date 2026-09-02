"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import { EASE_OUT } from "@/components/hero/HeroSection";
import ProjectCard from "./ProjectCard";

// ---------------------------------------------------------------------------
// ProjectsSection — Mac-window card grid (saranshh.me Featured Work style)
// ---------------------------------------------------------------------------

export default function ProjectsSection() {
  const shouldReduce = useReducedMotion() ?? false;

  const fadeIn = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { duration: 0.5, ease: EASE_OUT, delay },
        };

  return (
    <section id="projects" className="section container-page" aria-label="Featured Projects">
      {/* ── Section Header ── */}
      <motion.div {...fadeIn(0)} style={{ marginBottom: "2.75rem" }}>
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
          SELECTED WORK // {String(PROJECTS.length).padStart(2, "0")} PROJECTS
        </p>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            fontWeight: 750,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
          }}
        >
          Featured Work
        </h2>
      </motion.div>

      {/* ── 2-column responsive card grid ── */}
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
