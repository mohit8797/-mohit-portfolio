// ---------------------------------------------------------------------------
// Shared TypeScript types — extend these as new data shapes are introduced.
// ---------------------------------------------------------------------------

/** A single navigation item */
export interface NavItem {
  label: string;
  href: string;
}

/** A skill category grouping */
export interface SkillCategory {
  name: string;
  skills: string[];
}

/** A portfolio project */
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

/** A work / internship experience entry */
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

/** An education entry */
export interface Education {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}
