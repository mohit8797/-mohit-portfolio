import Image from "next/image";

// ---------------------------------------------------------------------------
// HeroPortrait — profile photo with clean rectangular frame treatment
// Server Component — no interactivity needed
// ---------------------------------------------------------------------------

export default function HeroPortrait() {
  return (
    <div
      style={{
        /*
          Width is constrained:
          - Mobile: 80% of screen width, max 280px (centered by parent flex)
          - Desktop: fixed via CSS class .hero-portrait-col sizing
        */
        width: "clamp(200px, 60vw, 280px)",
        flexShrink: 0,
      }}
      className="portrait-wrapper"
    >
      {/*
        portrait-frame (globals.css):
        - border-radius: 12px
        - overflow: hidden  (keeps image inside rounded corners)
        - ::before → 2px accent bar, top-left
        - ::after  → 1px inset border overlay
      */}
      <div
        className="portrait-frame"
        style={{
          aspectRatio: "4 / 5",
          position: "relative",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Mohit Redhu — AI/ML Engineer and Full-Stack Developer"
          fill
          priority
          sizes="(max-width: 859px) 280px, 260px"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
          }}
        />
      </div>

      {/* Subtle caption below portrait */}
      <p
        style={{
          marginTop: "0.75rem",
          fontSize: "0.7rem",
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
          textAlign: "center",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
        aria-hidden="true"
      >
        CGPA 8.89 &middot; Bennett University
      </p>
    </div>
  );
}
