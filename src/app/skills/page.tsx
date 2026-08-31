import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import type { SkillCategory } from "@/types";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Mohit Redhu — AI/ML, full-stack development, cloud, and more.",
};

// ---------------------------------------------------------------------------
// Placeholder skill data — replace / extend in a future phase
// ---------------------------------------------------------------------------
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "AI / ML",
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Hugging Face"],
  },
  {
    name: "Generative AI & RAG",
    skills: ["LangChain", "LlamaIndex", "OpenAI API", "Vector Databases", "Prompt Engineering"],
  },
  {
    name: "Full-Stack Development",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    name: "Tools & Infrastructure",
    skills: ["Git", "Docker", "Linux", "Vercel", "GitHub Actions"],
  },
];

export default function SkillsPage() {
  return (
    <div className="section container-page">
      <PageHeader
        title="Skills & Technologies"
        accentWord="Skills"
        subtitle="Technologies and tools I work with regularly."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.name} className="card">
            <h2
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            >
              {category.name}
            </h2>

            <ul
              role="list"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {category.skills.map((skill) => (
                <li key={skill}>
                  <span className="badge">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
