// ---------------------------------------------------------------------------
// Site-wide constants — update this file to change metadata, nav links, etc.
// ---------------------------------------------------------------------------

export const SITE_NAME = "Mohit Redhu";

export const SITE_METADATA = {
  title: "Mohit Redhu — AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Mohit Redhu — B.Tech CSE student building AI/ML systems, RAG applications, and full-stack products.",
  url: "https://mohitredhu.dev", // update when deployed
  author: "Mohit Redhu",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];

/** Hero keyword tags displayed under the subtitle */
export const HERO_KEYWORDS = [
  "AI / ML",
  "Generative AI",
  "RAG",
  "Full-Stack Dev",
] as const;
