'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { TESTIMONIALS } from '@/lib/data';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="py-28 bg-[var(--color-gray-100)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Müşteri Yorumları"
          title="Onlar"
          highlight="Anlatsın"
          subtitle="Müşterilerimizin projelerimiz hakkındaki gerçek deneyimleri."
          align="center"
        />

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-lg p-7 shadow-[var(--shadow-card)] border border-transparent transition-all duration-400 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:border-[var(--color-gold)]/25 relative`}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-[var(--color-gold)]/20 absolute top-5 right-5"
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-[var(--color-gold)]"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Content */}
              <p
                className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-7 line-clamp-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-dark-2)] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-[var(--color-gold)] font-black text-sm"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div
                    className="text-[var(--color-dark-2)] font-black text-sm"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {t.name}
                  </div>
                  <div className="text-[var(--color-text-secondary)] text-xs">
                    {t.role} — {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating banner */}
        <div className="bg-[var(--color-dark-2)] rounded-lg p-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div>
            <div
              className="text-5xl font-black gold-gradient-text"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              4.9
            </div>
            <div className="flex justify-center sm:justify-start gap-0.5 mt-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="text-[var(--color-gold)]" fill="currentColor" />
              ))}
            </div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div>
            <div className="text-white font-black text-xl mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
              Google&apos;da 4.9 Puan
            </div>
            <div className="text-[var(--color-gray-400)] text-sm">
              200&apos;den fazla doğrulanmış müşteri yorumuna dayanmaktadır.
            </div>
          </div>
          <div className="sm:ml-auto">
            <a
              href="https://g.page/r/epoksipro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] font-black text-xs tracking-widest uppercase rounded-sm transition-all duration-300"
            >
              Yorumları Gör
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
