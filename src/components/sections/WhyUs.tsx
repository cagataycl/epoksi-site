import Link from 'next/link';
import { Check } from 'lucide-react';
export default function WhyUs() {
  return <section id="hakkimizda" className="about-strip"><div className="site-container about-strip-grid"><div><p className="section-label">Epoksiciniz</p><h2>İyi bir zemin,<br />doğru hazırlıkla başlar.</h2><Link href="/hakkimizda">Bizi tanıyın</Link></div><div><p>Önce alanınızı ve kullanım ihtiyaçlarınızı değerlendiriyoruz. Yüzey hazırlığından son kata kadar, her aşamayı projenize göre planlıyoruz.</p><ul>{['Yüzeye uygun malzeme seçimi', 'Planlı uygulama süreci', 'Uygulama sonrası destek'].map(text => <li key={text}><Check size={17} />{text}</li>)}</ul></div></div></section>;
}
