import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import type { Education } from "@/types";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Academic background of Mohit Redhu — B.Tech Computer Science Engineering (AI), graduating 2027.",
};

// ---------------------------------------------------------------------------
// Education data — add your real degrees / certifications here
// ---------------------------------------------------------------------------
const EDUCATION_ENTRIES: Education[] = [
  {
    institution: "Your University Name",
    degree: "B.Tech – Computer Science Engineering (Artificial Intelligence)",
    period: "2023 – 2027",
    details:
      "Specialising in Artificial Intelligence. Relevant coursework: Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Data Structures & Algorithms.",
  },
];

export default function EducationPage() {
  return (
    <div className="section container-page">
      <PageHeader
        title="Education"
        accentWord="Education"
        subtitle="My academic background and qualifications."
      />

      <ol
        role="list"
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          maxWidth: "720px",
        }}
      >
        {EDUCATION_ENTRIES.map((entry, index) => (
          <li key={index}>
            <article className="card">
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    flexShrink: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "var(--accent-muted)",
                  }}
                >
                  <GraduationCap
                    size={18}
                    style={{ color: "var(--accent)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {entry.institution}
                      </h2>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--accent-hover)",
                          fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        {entry.degree}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-muted)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {entry.period}
                    </span>
                  </div>

                  {entry.details && (
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {entry.details}
                    </p>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
