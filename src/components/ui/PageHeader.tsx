// ---------------------------------------------------------------------------
// PageHeader — reusable section title block used on every inner page
// ---------------------------------------------------------------------------

interface PageHeaderProps {
  /** Main heading text */
  title: string;
  /** Optional subtitle / description */
  subtitle?: string;
  /** Accent word(s) within the title to highlight in gradient */
  accentWord?: string;
}

export default function PageHeader({ title, subtitle, accentWord }: PageHeaderProps) {
  // Split the title so we can apply gradient to the accent word only
  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      style={{
        marginBottom: "3rem",
        paddingBottom: "1.5rem",
        borderBottom: "1px solid var(--bg-border)",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          marginBottom: subtitle ? "0.75rem" : 0,
          color: "var(--text-primary)",
        }}
      >
        {renderTitle()}
      </h1>

      {subtitle && (
        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            maxWidth: "55ch",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
