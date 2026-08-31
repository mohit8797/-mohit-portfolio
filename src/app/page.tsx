import type { Metadata } from "next";
import { SITE_METADATA } from "@/lib/constants";
import HeroSection from "@/components/hero/HeroSection";

// ---------------------------------------------------------------------------
// Home page metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
};

// ---------------------------------------------------------------------------
// Home page — Phase 2: Hero section only
// About, Skills, Projects, Experience, Education, Contact sections come next.
// ---------------------------------------------------------------------------
export default function HomePage() {
  return <HeroSection />;
}
