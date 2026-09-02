"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { EASE_OUT } from "@/components/hero/HeroSection";

// ---------------------------------------------------------------------------
// Inline brand SVG icons
// ---------------------------------------------------------------------------
function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Mac-style traffic light dots
// ---------------------------------------------------------------------------
function WindowChrome() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {["#ff5f57", "#febc2e", "#28c840"].map((color, i) => (
        <div
          key={i}
          style={{
            width: "11px",
            height: "11px",
            borderRadius: "50%",
            backgroundColor: color,
            opacity: 0.85,
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

// ---------------------------------------------------------------------------
// ProjectCard — Mac window card style (saranshh.me Featured Work reference)
// ---------------------------------------------------------------------------
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduce = useReducedMotion() ?? false;

  const anim = shouldReduce
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-40px" },
        transition: { duration: 0.55, ease: EASE_OUT, delay: index * 0.1 },
      };

  const statusLabel = project.featured ? "FEATURED" : "PROJECT";

  return (
    <motion.article
      {...anim}
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--bg-border)",
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s ease, transform 0.2s ease",
      }}
      className="project-mac-card"
    >
      {/* ── Mac Window Header Bar ── */}
      <div
        style={{
          padding: "0.75rem 1.1rem",
          borderBottom: "1px solid var(--bg-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          backgroundColor: "rgba(12, 12, 16, 0.6)",
        }}
      >
        {/* Traffic lights + status + category */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <WindowChrome />
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: project.featured ? "var(--accent-light)" : "var(--text-muted)",
                backgroundColor: project.featured
                  ? "var(--accent-muted)"
                  : "rgba(255,255,255,0.04)",
                border: `1px solid ${project.featured ? "var(--accent-border)" : "var(--bg-border)"}`,
                padding: "0.15rem 0.45rem",
                borderRadius: "3px",
              }}
            >
              {statusLabel}
            </span>
            <span
              style={{
                fontSize: "0.675rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Action icons — GitHub + Live */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository (opens in new tab)`}
              className="btn-icon"
              style={{ width: "2rem", height: "2rem" }}
            >
              <GitHubIcon />
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo (opens in new tab)`}
              className="btn-icon"
              style={{ width: "2rem", height: "2rem" }}
            >
              <ArrowUpRight size={14} />
            </a>
          ) : null}
        </div>
      </div>

      {/* ── Card Body ── */}
      <div
        style={{
          padding: "1.4rem 1.4rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: 1,
        }}
      >
        {/* Title & Subtitle */}
        <div>
          <h3
            style={{
              fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
              fontWeight: 750,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              marginBottom: "0.2rem",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--accent-light)",
              fontWeight: 500,
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
          }}
        >
          {project.description}
        </p>

        {/* Architecture / Pipeline tags (first row — component flow) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {project.pipeline.map(({ label }, idx) => (
            <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
              <span
                style={{
                  fontSize: "0.73rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--bg-border)",
                  padding: "0.2rem 0.55rem",
                  borderRadius: "999px",
                }}
              >
                {label}
              </span>
              {idx < project.pipeline.length - 1 && (
                <span
                  style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Spacer to push stack to bottom */}
        <div style={{ flex: 1 }} />

        {/* Tech stack tags (second row — full stack pills) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.73rem",
                fontWeight: 500,
                color: "var(--text-muted)",
                backgroundColor: "var(--bg-elevated)",
                border: "1px solid var(--bg-border)",
                padding: "0.22rem 0.6rem",
                borderRadius: "999px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
