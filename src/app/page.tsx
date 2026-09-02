import type { Metadata } from "next";
import { SITE_METADATA } from "@/lib/constants";
import HeroSection from "@/components/hero/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProblemSolvingSection from "@/components/sections/ProblemSolvingSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
};

// Hero → Journey → Projects → Tech Stack → Problem Solving → Let's Build
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <ProjectsSection />
      <SkillsSection />
      <ProblemSolvingSection />
      <ContactSection />
    </>
  );
}
