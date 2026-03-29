'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import { SITE } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[var(--color-dark)]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.6)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-sm bg-[var(--color-gold)] flex items-center justify-center shadow-[0_0_20px_rgba(200,169,81,0.5)]">
              <span
                className="text-[var(--color-dark)] font-black text-lg leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                E
              </span>
            </div>
            <span
              className="text-white font-black text-xl tracking-tight group-hover:text-[var(--color-gold)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Epoksi<span className="text-[var(--color-gold)]">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-gray-400)] hover:text-[var(--color-gold)] text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-[var(--color-gray-400)] hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              <Phone size={15} strokeWidth={2.5} />
              <span className="text-sm font-semibold">{SITE.phone}</span>
            </a>
            <Link
              href="#iletisim"
              className="px-6 py-2.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] text-xs font-black tracking-widest uppercase rounded-sm transition-all duration-300 shadow-[0_4px_16px_rgba(200,169,81,0.35)] hover:shadow-[0_6px_24px_rgba(200,169,81,0.5)]"
            >
              Teklif Al
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menüyü aç"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-[var(--color-dark-2)] transform transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-8 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-4 border-b border-white/10 text-white hover:text-[var(--color-gold)] font-semibold tracking-wider uppercase text-sm transition-colors duration-300"
              >
                {link.label}
                <ChevronRight size={16} className="text-[var(--color-gray-400)]" />
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 py-3.5 border border-[var(--color-gold)] text-[var(--color-gold)] rounded-sm text-sm font-bold tracking-widest uppercase"
              >
                <Phone size={15} /> {SITE.phone}
              </a>
              <Link
                href="#iletisim"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center py-3.5 bg-[var(--color-gold)] text-[var(--color-dark)] rounded-sm text-sm font-black tracking-widest uppercase"
              >
                Ücretsiz Teklif Al
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
