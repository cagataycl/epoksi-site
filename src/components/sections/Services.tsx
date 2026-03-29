'use client';

import { motion } from 'framer-motion';
import {
  Factory,
  Sparkles,
  Layers,
  Building2,
  Car,
  Shield,
  ArrowRight,
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { SERVICES } from '@/lib/data';

const ICON_MAP: Record<string, React.FC<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Factory,
  Sparkles,
  Layers,
  Building2,
  Car,
  Shield,
};

export default function Services() {
  return (
    <section id="hizmetler" className="py-28 bg-[var(--color-gray-100)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Hizmetlerimiz"
          title="Her Zemin İçin"
          highlight="Mükemmel"
          subtitle="Endüstriyel tesislerden lüks konutlara, ticari mekânlardan garajlara — her türlü zemin için özelleştirilmiş epoksi çözümlerimiz mevcuttur."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Factory;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-lg overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[0_16px_60px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Gold accent bar top */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-light)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-[var(--color-dark-2)] group-hover:bg-[var(--color-gold)] flex items-center justify-center mb-6 transition-colors duration-400 shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-[var(--color-gold)] group-hover:text-[var(--color-dark)] transition-colors duration-400"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-black text-[var(--color-dark-2)] mb-3 group-hover:text-[var(--color-dark)] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#iletisim"
                    className="inline-flex items-center gap-1.5 text-[var(--color-gold)] text-xs font-bold tracking-widest uppercase hover:gap-3 transition-all duration-300"
                  >
                    Teklif Al
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
