import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import type { Experience } from "@/types";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work and internship experience of Mohit Redhu in AI, software engineering, and full-stack development.",
};

// ---------------------------------------------------------------------------
// Placeholder experience data — replace with real entries in a future phase.
// ---------------------------------------------------------------------------
const EXPERIENCES: Experience[] = [
  {
    company: "Company Name",
    role: "Role / Position",
    period: "Month YYYY – Month YYYY",
    description: [
      "Replace this with a bullet point describing a key responsibility or achievement.",
      "Use action verbs and quantify impact where possible (e.g., improved X by Y%).",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="section container-page">
      <PageHeader
        title="Experience"
        accentWord="Experience"
        subtitle="Roles and internships where I've applied my skills."
      />

      {EXPERIENCES.length === 0 ? (
        <p style={{ color: "var(--text-muted)" }}>
          No experience entries yet — add your real data to the EXPERIENCES array.
        </p>
      ) : (
        <ol
          role="list"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {EXPERIENCES.map((exp, index) => (
            <li key={index}>
              <article className="card">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "0.1rem",
                      }}
                    >
                      {exp.role}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--accent-hover)",
                        fontWeight: 500,
                        margin: 0,
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul
                  role="list"
                  style={{
                    margin: 0,
                    paddingLeft: "1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                      }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
