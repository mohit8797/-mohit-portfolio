import Image from "next/image";

// ---------------------------------------------------------------------------
// HeroPortrait — Editorial Technical Frame & Integrated Metadata Card
// Server Component
// ---------------------------------------------------------------------------

export default function HeroPortrait() {
  return (
    <div
      className="portrait-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
        width: "clamp(260px, 80vw, 460px)",
        flexShrink: 0,
        marginRight: "auto",
      }}
    >
      {/* Editorial Framed Container */}
      <div
        className="editorial-frame editorial-frame-ticks"
        style={{
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Top Technical Metadata Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.5rem 0.85rem",
            backgroundColor: "rgba(12, 12, 16, 0.85)",
            borderBottom: "1px solid var(--bg-border)",
            fontSize: "0.675rem",
            fontFamily: "var(--font-mono, monospace)",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <span>/ BENNETT UNIVERSITY</span>
          <span style={{ color: "var(--accent-light)" }}>CSE &apos;27</span>
        </div>

        {/* Image Container with 3:4 aspect ratio */}
        <div
          style={{
            position: "relative",
            aspectRatio: "3 / 4",
            width: "100%",
          }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Mohit Redhu — AI/ML Engineer and Full-Stack Developer"
            fill
            priority
            sizes="(max-width: 859px) 320px, 340px"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />

          {/* Vertical overlay tag on edge */}
          <div
            style={{
              position: "absolute",
              right: "0.5rem",
              bottom: "1rem",
              writingMode: "vertical-rl",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontSize: "0.625rem",
              fontWeight: 600,
              color: "rgba(255, 255, 255, 0.5)",
              backgroundColor: "rgba(12, 12, 16, 0.65)",
              padding: "0.5rem 0.25rem",
              borderRadius: "0.25rem",
              backdropFilter: "blur(4px)",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            AI/ML // RAG // FULL-STACK
          </div>
        </div>
      </div>

      {/* Docked "Currently Into" Metadata Box */}
      <div
        style={{
          padding: "0.85rem 1rem",
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--bg-border)",
          borderRadius: "0.5rem",
        }}
      >
        <p
          style={{
            fontSize: "0.675rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--accent-light)",
            marginBottom: "0.3rem",
          }}
        >
          CURRENTLY INTO
        </p>
        <p
          style={{
            fontSize: "0.825rem",
            color: "var(--text-secondary)",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Agentic AI workflows, RAG architectures, and production full-stack apps.
        </p>
      </div>
    </div>
  );
}
