'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Phone, Play } from 'lucide-react';
import { SITE } from '@/lib/constants';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-dark)]">
      {/* Background image (fallback / static) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85')`,
        }}
      />

      {/* Multi-layer dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/98 via-[var(--color-dark)]/85 to-[var(--color-dark)]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent" />

      {/* Gold accent bar — left edge */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-[var(--color-gold)]" />
            <span
              className="text-[var(--color-gold)] text-xs font-bold tracking-[0.25em] uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Profesyonel Epoksi Zemin Kaplama
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Zemininizi{' '}
            <span className="relative inline-block">
              <span className="gold-gradient-text">Sanat Eserine</span>
              <span
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-light)] to-transparent"
              />
            </span>
            <br />
            Dönüştürüyoruz
          </h1>

          {/* Subtitle */}
          <p
            className="text-[var(--color-gray-400)] text-lg md:text-xl leading-relaxed mb-12 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            15 yılı aşkın deneyim ve 500&apos;den fazla tamamlanan projeyle
            endüstriyel, ticari ve konut alanlarınız için premium epoksi zemin
            çözümleri sunuyoruz.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] font-black text-sm tracking-widest uppercase rounded-sm transition-all duration-300 shadow-[0_8px_32px_rgba(200,169,81,0.4)] hover:shadow-[0_12px_40px_rgba(200,169,81,0.55)] hover:-translate-y-0.5"
            >
              Ücretsiz Teklif Al
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#galeri"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/25 hover:border-[var(--color-gold)] text-white hover:text-[var(--color-gold)] font-bold text-sm tracking-widest uppercase rounded-sm transition-all duration-300 backdrop-blur-sm"
            >
              <Play size={14} strokeWidth={2.5} className="fill-current" />
              Projelerimizi Gör
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {[
              { value: '500+', label: 'Tamamlanan Proje' },
              { value: '15+', label: 'Yıl Deneyim' },
              { value: '10 Yıl', label: 'Yazılı Garanti' },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <div className="text-2xl font-black text-[var(--color-gold)]" style={{ fontFamily: 'var(--font-heading)' }}>
                  {badge.value}
                </div>
                <div className="text-[var(--color-gray-400)] text-xs uppercase tracking-widest">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone CTA — bottom right */}
      <a
        href={`tel:${SITE.phone}`}
        className="absolute bottom-10 right-8 hidden lg:flex items-center gap-3 group"
      >
        <div className="text-right">
          <div className="text-[var(--color-gray-400)] text-xs uppercase tracking-widest mb-0.5">
            Hemen Arayın
          </div>
          <div className="text-white group-hover:text-[var(--color-gold)] font-bold text-sm transition-colors duration-300">
            {SITE.phone}
          </div>
        </div>
        <div className="w-10 h-10 rounded-full border border-[var(--color-gold)]/40 group-hover:border-[var(--color-gold)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-gold)]/10">
          <Phone size={16} className="text-[var(--color-gold)]" />
        </div>
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="text-white text-xs tracking-widest uppercase">Kaydır</div>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}
