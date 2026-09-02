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

  /** Resume — Google Drive link */
  resume: "https://drive.google.com/file/d/1OIsKNl-RdDkQk9Ahpn70zDSJjBfRx1HJ/view?usp=sharing",

  /** Contact email */
  email: "mohitredhu2005@gmail.com",
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;
