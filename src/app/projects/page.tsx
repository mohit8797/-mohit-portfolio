import type { Metadata } from "next";
import ProjectsSection from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects by Mohit Redhu in AI/ML, generative AI, RAG, and full-stack development.",
};

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: "2rem" }}>
      <ProjectsSection />
    </div>
  );
}
