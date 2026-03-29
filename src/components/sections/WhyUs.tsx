'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Star,
  Clock,
  ShieldCheck,
  Search,
  Headphones,
} from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { WHY_US } from '@/lib/data';

const ICON_MAP: Record<string, React.FC<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Award,
  Star,
  Clock,
  ShieldCheck,
  Search,
  HeadphonesIcon: Headphones,
};

export default function WhyUs() {
  return (
    <section id="hakkimizda" className="py-28 bg-[var(--color-dark-2)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Neden EpoksiCLniz?"
          title="Farkımızı"
          highlight="Hissedeceksiniz"
          subtitle="Her projede aynı özen, aynı kalite. İşte bizi tercih etmeniz için 6 güçlü neden."
          align="center"
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white/4 hover:bg-white/7 border border-white/8 hover:border-[var(--color-gold)]/30 rounded-lg p-8 transition-all duration-400"
              >
                {/* Number badge */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/4 group-hover:text-[var(--color-gold)]/8 transition-colors duration-400 select-none"
                  style={{ fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-sm bg-[var(--color-gold)]/10 group-hover:bg-[var(--color-gold)]/20 flex items-center justify-center mb-6 transition-colors duration-400">
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-[var(--color-gold)]"
                  />
                </div>

                <h3
                  className="text-white font-black text-lg mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[var(--color-gray-400)] text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
