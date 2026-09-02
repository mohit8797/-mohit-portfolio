"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/components/hero/HeroSection";

// ---------------------------------------------------------------------------
// Tech Stack data -- matches Image 1 reference exactly
// Languages: Python, JavaScript, C++, SQL  (no TypeScript)
// Databases: MySQL, PostgreSQL             (no MongoDB)
// Tools: Docker, Git, GitHub, VS Code, n8n (added n8n)
// ---------------------------------------------------------------------------
const TECH_STACK = [
  {
    category: "Languages",
    span: 1,
    items: [
      { name: "Python",     icon: "devicon-python-plain colored",     custom: false },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", custom: false },
      { name: "C++",        icon: "devicon-cplusplus-plain colored",  custom: false },
      { name: "SQL",        icon: "devicon-azuresqldatabase-plain colored", custom: false },
    ],
  },
  {
    category: "Frontend",
    span: 1,
    items: [
      { name: "React.js",    icon: "devicon-react-original colored",      custom: false },
      { name: "Next.js",     icon: "devicon-nextjs-plain",               custom: false },
      { name: "Tailwind CSS",icon: "devicon-tailwindcss-original colored",custom: false },
      { name: "HTML5",       icon: "devicon-html5-plain colored",         custom: false },
    ],
  },
  {
    category: "Backend",
    span: 1,
    items: [
      { name: "Node.js",    icon: "devicon-nodejs-plain colored",   custom: false },
      { name: "Express.js", icon: "devicon-express-original",       custom: false },
      { name: "FastAPI",    icon: "devicon-fastapi-plain colored",  custom: false },
      { name: "Flask",      icon: "devicon-flask-original",         custom: false },
    ],
  },
  {
    category: "AI / ML",
    span: 1,
    items: [
      { name: "TensorFlow",  icon: "devicon-tensorflow-original colored", custom: false },
      { name: "PyTorch",     icon: "devicon-pytorch-original colored",    custom: false },
      { name: "Scikit-learn",icon: "devicon-scikitlearn-plain colored",   custom: false },
      { name: "Pandas",      icon: "devicon-pandas-original colored",     custom: false },
    ],
  },
  {
    category: "Databases",
    span: 1,
    items: [
      { name: "MySQL",      icon: "devicon-mysql-plain colored",      custom: false },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", custom: false },
    ],
  },
  {
    category: "Tools",
    span: 1,
    items: [
      { name: "Docker",  icon: "devicon-docker-plain colored",   custom: false },
      { name: "Git",     icon: "devicon-git-plain colored",      custom: false },
      { name: "GitHub",  icon: "devicon-github-original",        custom: false },
      { name: "VS Code", icon: "devicon-vscode-plain colored",   custom: false },
      { name: "n8n",     icon: "",                               custom: true  },
    ],
  },
] as const;

// Custom n8n icon -- orange "n" mark
function N8nIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#ea4b00" />
      <text x="7" y="28" fontFamily="monospace" fontSize="18" fontWeight="bold" fill="white">n8n</text>
    </svg>
  );
}

interface TechTileProps {
  name: string;
  icon: string;
  custom: boolean;
  delay: number;
  shouldReduce: boolean;
}

function TechTile({ name, icon, custom, delay, shouldReduce }: TechTileProps) {
  const tileAnim = shouldReduce
    ? {}
    : {
        initial: { opacity: 0, scale: 0.88 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-30px" },
        transition: { duration: 0.4, ease: "backOut" as const, delay },
      };

  return (
    <motion.div {...tileAnim} className="tech-tile" title={name}>
      {custom ? (
        <N8nIcon />
      ) : (
        <i className={icon} style={{ fontSize: "2.25rem", lineHeight: 1 }} aria-hidden="true" />
      )}
      <span style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--text-secondary)", textAlign: "center", lineHeight: 1.2, marginTop: "0.15rem" }}>
        {name}
      </span>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// SkillsSection -- Tech Stack icon grid (full-page, larger icons)
// ---------------------------------------------------------------------------
export default function SkillsSection() {
  const shouldReduce = useReducedMotion() ?? false;

  const fadeUp = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px" },
          transition: { duration: 0.5, ease: EASE_OUT, delay },
        };

  return (
    <section id="skills" className="section container-page" aria-label="Tech Stack">
      {/* Heading */}
      <motion.div {...fadeUp(0)} style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.5rem" }}>
          SKILLS & TOOLS
        </p>
        <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 750, letterSpacing: "-0.03em", color: "var(--text-primary)" }}>
          Tech Stack
        </h2>
      </motion.div>

      {/* 3-column category grid */}
      <div className="techstack-grid">
        {TECH_STACK.map((group, gi) => (
          <motion.div key={group.category} {...fadeUp(gi * 0.07)} className="techstack-category">
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.1rem", letterSpacing: "-0.01em" }}>
              {group.category}
            </p>

            <div className="techstack-tiles">
              {group.items.map((item, ii) => (
                <TechTile
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                  custom={item.custom}
                  delay={gi * 0.07 + ii * 0.05}
                  shouldReduce={shouldReduce}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
