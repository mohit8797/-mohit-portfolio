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

/** A single step in an engineering pipeline visualization */
export interface ProjectPipelineStep {
  step: string;
  label: string;
}

/** A portfolio project definition */
export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  details: string[];
  pipeline: ProjectPipelineStep[];
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
