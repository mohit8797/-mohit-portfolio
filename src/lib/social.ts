// ---------------------------------------------------------------------------
// External social / link URLs — update this file with your real URLs.
// Every component that needs a social link imports from here.
// ---------------------------------------------------------------------------

export const SOCIAL_LINKS = {
  /** GitHub profile */
  github: "https://github.com/mohit8797",

  /** LinkedIn profile */
  linkedin: "https://www.linkedin.com/in/mohit-redhu-2075a5225/",

  /** LeetCode profile */
  leetcode: "https://leetcode.com/u/mohit_redhu/",

  /** Resume PDF — replace with your actual Google Drive / PDF link when ready */
  resume: "#", // TODO: add your resume PDF link

  /** Contact email */
  email: "mohitredhu2005@gmail.com",
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;
