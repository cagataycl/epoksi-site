'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { PROCESS_STEPS } from '@/lib/data';

export default function Process() {
  return (
    <section id="surec" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Nasıl Çalışırız?"
          title="5 Adımda"
          highlight="Mükemmel Zemin"
          subtitle="Keşiften teslimata kadar şeffaf ve planlı bir süreç. Her adımda sizi bilgilendiriyoruz."
          align="center"
        />

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gray-200)] to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Step circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-[var(--color-dark-2)] group-hover:bg-[var(--color-gold)] flex items-center justify-center transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:shadow-[0_8px_32px_rgba(200,169,81,0.35)] z-10 relative">
                    <span
                      className="text-2xl font-black text-[var(--color-gold)] group-hover:text-[var(--color-dark)] transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold)]/30 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                <h3
                  className="text-[var(--color-dark-2)] font-black text-base mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[var(--color-text-secondary)] text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 bg-[var(--color-dark-2)] rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-white font-black text-2xl mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Projenize hemen başlayalım
            </h3>
            <p className="text-[var(--color-gray-400)] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Ücretsiz keşif için randevu alın, uzmanlarımız sizi arasın.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#iletisim"
              className="px-8 py-3.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] font-black text-xs tracking-widest uppercase rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(200,169,81,0.3)] hover:shadow-[0_6px_28px_rgba(200,169,81,0.5)] text-center"
            >
              Ücretsiz Keşif İste
            </a>
            <a
              href={`tel:${'+90 532 000 00 00'}`}
              className="px-8 py-3.5 border border-white/20 hover:border-[var(--color-gold)] text-white hover:text-[var(--color-gold)] font-bold text-xs tracking-widest uppercase rounded-sm transition-all duration-300 text-center"
            >
              Hemen Ara
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
