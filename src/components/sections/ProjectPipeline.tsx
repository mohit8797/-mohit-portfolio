import { ProjectPipelineStep } from "@/types";

// ---------------------------------------------------------------------------
// ProjectPipeline — Technical Architectural Flow Diagram Visualizer
// Server Component / Pure CSS Interactive Flow
// ---------------------------------------------------------------------------

interface ProjectPipelineProps {
  steps: ProjectPipelineStep[];
}

export default function ProjectPipeline({ steps }: ProjectPipelineProps) {
  return (
    <div
      aria-label="Engineering Architecture Flow"
      style={{
        padding: "1.1rem 1.25rem",
        backgroundColor: "rgba(12, 12, 16, 0.6)",
        border: "1px solid var(--bg-border)",
        borderRadius: "0.5rem",
        marginTop: "1.25rem",
        marginBottom: "1.5rem",
      }}
    >
      <p
        style={{
          fontSize: "0.675rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--accent-light)",
          marginBottom: "0.85rem",
        }}
      >
        ARCHITECTURE &amp; DATA PIPELINE
      </p>

      {/* Horizontal Flow Steps */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {steps.map(({ step, label }, index) => (
          <div
            key={step + label}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {/* Step Pill */}
            <div
              className="tech-tag"
              style={{
                fontSize: "0.75rem",
                padding: "0.3rem 0.65rem",
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--bg-border)",
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "var(--accent-light)",
                  fontWeight: 700,
                }}
              >
                {step}
              </span>
              <span>{label}</span>
            </div>

            {/* Connector Arrow (unless last step) */}
            {index < steps.length - 1 && (
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                &rarr;
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
