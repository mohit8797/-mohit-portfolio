import type { Metadata } from "next";
import { ExternalLink, GitBranch } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import type { Project } from "@/types";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects by Mohit Redhu in AI/ML, generative AI, RAG, and full-stack development.",
};

// ---------------------------------------------------------------------------
// Placeholder project data — replace with real projects in a future phase.
// Do NOT add fake information; this is intentionally left as a template.
// ---------------------------------------------------------------------------
const PROJECTS: Project[] = [
  {
    id: "project-placeholder-1",
    title: "Project Title",
    description:
      "A short description of what this project does, the problem it solves, and the impact it had. Replace this with your real project details.",
    tags: ["Python", "PyTorch", "React"],
    githubUrl: "#",
    featured: true,
  },
  {
    id: "project-placeholder-2",
    title: "Another Project",
    description:
      "Another project placeholder. Add your real project data here when ready.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="section container-page">
      <PageHeader
        title="Projects"
        accentWord="Projects"
        subtitle="Things I've built — from research prototypes to production applications."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {PROJECTS.map((project) => (
          <article key={project.id} id={project.id} className="card">
            {project.featured && (
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "0.5rem",
                }}
              >
                ★ Featured
              </p>
            )}

            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
                color: "var(--text-primary)",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.65,
                marginBottom: "1rem",
              }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <ul
              role="list"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
                marginBottom: "1.25rem",
              }}
            >
              {project.tags.map((tag) => (
                <li key={tag}>
                  <span className="badge">{tag}</span>
                </li>
              ))}
            </ul>

            {/* Links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: "0.8rem", padding: "0.4rem 0.9rem" }}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GitBranch size={14} aria-hidden="true" />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                  style={{ fontSize: "0.8rem", padding: "0.4rem 0.9rem" }}
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
