"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { SOCIAL_LINKS } from "@/lib/social";

// ---------------------------------------------------------------------------
// Inline SVG brand icons (no external dependency)
// ---------------------------------------------------------------------------
function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Navbar — sticky, responsive, accessible
// Desktop (≥ 860px): full nav links + social icons shown
// Mobile (< 860px): hamburger + slide-down panel
// ---------------------------------------------------------------------------
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "var(--nav-height)",
        backgroundColor: scrolled ? "rgba(12, 12, 16, 0.95)" : "rgba(12, 12, 16, 0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid var(--bg-border)" : "1px solid transparent",
        transition: "background-color 0.25s ease, border-color 0.25s ease",
      }}
    >
      <nav
        className="container-page"
        aria-label="Main navigation"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* ── Brand ── */}
        <Link
          href="/"
          aria-label={`${SITE_NAME} — home`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text-primary)" }}>
            MR
          </span>
          <span
            style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--accent)", flexShrink: 0 }}
            aria-hidden="true"
          />
        </Link>

        {/* ── Desktop: nav links (hidden below 860px via CSS class) ── */}
        <ul
          role="list"
          className="nav-desktop-links"
          style={{ listStyle: "none", display: "flex", alignItems: "center", gap: 0, flex: 1, justifyContent: "center" }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link"
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop: social icon buttons ── */}
        <div className="nav-desktop-social" style={{ display: "flex", alignItems: "center", gap: "0.25rem", flexShrink: 0 }}>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="btn-icon"
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="btn-icon"
          >
            <LinkedInIcon size={16} />
          </a>
        </div>

        {/* ── Mobile: hamburger (hidden above 860px via CSS class) ── */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          style={{
            background: "none",
            border: "1px solid var(--bg-border)",
            borderRadius: "0.4rem",
            cursor: "pointer",
            color: "var(--text-primary)",
            padding: "0.375rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* ── Mobile menu panel ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          style={{
            position: "absolute",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-surface)",
            borderBottom: "1px solid var(--bg-border)",
            zIndex: 49,
          }}
        >
          <nav className="container-page" aria-label="Mobile navigation" style={{ paddingBlock: "1rem" }}>
            <ul role="list" style={{ listStyle: "none" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="nav-link"
                    aria-current={isActive(link.href) ? "page" : undefined}
                    style={{ display: "block", padding: "0.6rem 0.65rem", fontSize: "0.925rem" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social links in mobile menu */}
            <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--bg-border)", display: "flex", gap: "0.5rem" }}>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="btn-icon mobile-social-btn"
              >
                <GitHubIcon size={16} />
                <span style={{ marginLeft: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>GitHub</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="btn-icon mobile-social-btn"
              >
                <LinkedInIcon size={16} />
                <span style={{ marginLeft: "0.4rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>LinkedIn</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
