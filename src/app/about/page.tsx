import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Mohit Redhu — his background, interests, and what drives him.",
};

export default function AboutPage() {
  return (
    <div className="section container-page">
      <PageHeader
        title="About Me"
        accentWord="Me"
        subtitle="A little bit about who I am and what I care about."
      />

      {/* Placeholder content — replace with your real bio in a future phase */}
      <div
        style={{
          maxWidth: "65ch",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
          I&apos;m Mohit Redhu, a Computer Science Engineering student
          specialising in Artificial Intelligence (graduating 2027). I&apos;m
          passionate about building systems at the intersection of AI and
          software engineering — from training machine learning models to
          shipping full-stack products.
        </p>

        <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
          My interests span AI/ML, generative AI, retrieval-augmented
          generation (RAG), computer vision, and full-stack development.
          I enjoy turning complex research ideas into practical, deployable
          applications.
        </p>

        <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
          {/* Add more personal details here — hobbies, philosophy, fun facts */}
          [More personal content coming soon — add your story here.]
        </p>
      </div>
    </div>
  );
}
