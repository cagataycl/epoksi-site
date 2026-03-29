interface SectionTitleProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export default function SectionTitle({
  label,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
}: SectionTitleProps) {
  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align];

  const titleColor = dark ? 'text-white' : 'text-[var(--color-dark-2)]';
  const subtitleColor = dark ? 'text-[var(--color-gray-400)]' : 'text-[var(--color-text-secondary)]';

  // Build the full title with highlight replacement
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={`flex flex-col ${alignClass} mb-14`}>
      {label && <span className="section-label mb-4">{label}</span>}
      <h2
        className={`text-4xl md:text-5xl font-black ${titleColor} max-w-3xl leading-tight`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {highlight
          ? parts.map((part, i) => (
              <span key={i}>
                {part}
                {i < parts.length - 1 && (
                  <span className="gold-gradient-text"> {highlight} </span>
                )}
              </span>
            ))
          : title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg ${subtitleColor} max-w-2xl leading-relaxed`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
