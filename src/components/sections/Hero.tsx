import Image from 'next/image';
import { ArrowUpRight, Phone } from 'lucide-react';
import { SITE } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="section-label">Epoksi & zemin uygulamaları</p>
          <h1>Mekânınıza yakışan,<br />işinize uygun zeminler.</h1>
          <p className="hero-description">Endüstriyel alanlardan yaşam alanlarına; epoksi, şap ve dekoratif zemin çözümlerini projenize göre uyguluyoruz.</p>
          <div className="hero-actions">
            <a href="#iletisim" className="button-primary">Projeniz için teklif alın <ArrowUpRight size={18} /></a>
            <a href="#galeri" className="button-secondary">Uygulamaları inceleyin</a>
          </div>
          <a href={`tel:${SITE.phone}`} className="hero-phone"><Phone size={16} /><span>Birlikte planlayalım <strong>{SITE.phone}</strong></span></a>
        </div>
        <figure className="hero-photo">
          <Image src="/images/projects/atolye-epoksi-zemin.webp" alt="Epoksiciniz tarafından uygulanan parlak gri atölye zemini" fill preload sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
          <figcaption><span>Uygulamalarımızdan</span><strong>Atölye epoksi zemini</strong><a href="#galeri" aria-label="Tüm uygulama fotoğraflarını gör"><ArrowUpRight size={22} /></a></figcaption>
        </figure>
      </div>
      <div className="hero-footnote site-container"><span>Endüstriyel & ticari alanlar</span><span>Dekoratif yüzeyler</span><span>Zemin hazırlığı & izolasyon</span></div>
    </section>
  );
}
