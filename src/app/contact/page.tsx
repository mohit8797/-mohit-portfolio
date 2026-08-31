import type { Metadata } from "next";
import { Mail, GitBranch, Link2 } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import type { ElementType } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohit Redhu — open to collaborations, internships, and opportunities.",
};

// ---------------------------------------------------------------------------
// Contact channels — update with your real details
// ---------------------------------------------------------------------------
interface ContactChannel {
  id: string;
  icon: ElementType;
  label: string;
  value: string;
  href: string;
  description: string;
}

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "contact-email",
    icon: Mail,
    label: "Email",
    value: "mohit@example.com", // replace with your real email
    href: "mailto:mohit@example.com",
    description: "Best for project inquiries and collaborations.",
  },
  {
    id: "contact-github",
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/mohitredhu", // replace with your handle
    href: "https://github.com/mohitredhu",
    description: "Browse my open-source work and contributions.",
  },
  {
    id: "contact-linkedin",
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/mohitredhu", // replace with your profile
    href: "https://linkedin.com/in/mohitredhu",
    description: "Connect professionally.",
  },
];

export default function ContactPage() {
  return (
    <div className="section container-page">
      <PageHeader
        title="Get in Touch"
        accentWord="Touch"
        subtitle="I'm open to collaborations, internships, and interesting conversations. Reach out through any of the channels below."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
          maxWidth: "860px",
        }}
      >
        {CONTACT_CHANNELS.map(({ id, icon: Icon, label, value, href, description }) => (
          <a
            key={id}
            id={id}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            // Hover handled by CSS (.contact-card) — no JS event handlers needed
            className="card contact-card"
            aria-label={`Contact via ${label}`}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "0.5rem",
                backgroundColor: "var(--accent-muted)",
              }}
            >
              <Icon size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
            </div>

            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  margin: 0,
                  marginBottom: "0.2rem",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--accent-hover)",
                  margin: 0,
                  marginBottom: "0.25rem",
                }}
              >
                {value}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
