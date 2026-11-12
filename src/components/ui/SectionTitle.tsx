interface SectionTitleProps {
  label?: string; title: string; highlight?: string; subtitle?: string;
  align?: 'left' | 'center' | 'right'; dark?: boolean;
}
export default function SectionTitle({ label, title, highlight, subtitle, align = 'left', dark = false }: SectionTitleProps) {
  const fullTitle = highlight && !title.includes(highlight) ? `${title} ${highlight}` : title;
  return <div className={`section-title ${dark ? 'section-title-dark' : ''}`} style={{ textAlign: align }}>
    {label && <p className="section-label">{label}</p>}<h2>{fullTitle}</h2>{subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>;
}
