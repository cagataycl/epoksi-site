'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { GALLERY_ITEMS } from '@/lib/data';
import type { GalleryCategory } from '@/types';

const CATEGORIES: GalleryCategory[] = [
  'Tümü',
  'Endüstriyel',
  'Metalik',
  '3D Epoksi',
  'Ticari',
  'Konut',
  'Garaj',
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Tümü');
  const [lightboxItem, setLightboxItem] = useState<string | null>(null);

  const filtered =
    activeCategory === 'Tümü'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const lightboxData = GALLERY_ITEMS.find((i) => i.id === lightboxItem);

  return (
    <section id="galeri" className="py-28 bg-[var(--color-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Projelerimiz"
          title="Gerçek"
          highlight="Dönüşümler"
          subtitle="Her zemin kendi hikâyesini anlatır. Tamamladığımız projelerden seçmeler."
          align="center"
          dark
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[var(--color-gold)] text-[var(--color-dark)] shadow-[0_4px_16px_rgba(200,169,81,0.35)]'
                  : 'bg-white/6 text-[var(--color-gray-400)] hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
                onClick={() => setLightboxItem(item.id)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="flex justify-end">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-gold)]/20 backdrop-blur-sm flex items-center justify-center border border-[var(--color-gold)]/40">
                      <ZoomIn size={16} className="text-[var(--color-gold)]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[var(--color-gold)] text-xs font-bold tracking-widest uppercase mb-1">
                      {item.category}
                    </div>
                    <h4
                      className="text-white font-black text-base mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-[var(--color-gray-400)] text-xs">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--color-gold)]/40 hover:border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] font-black text-xs tracking-widest uppercase rounded-sm transition-all duration-300"
          >
            Projeniz İçin Teklif Alın
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxItem(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-4xl w-full rounded-sm overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={lightboxData.image}
                  alt={lightboxData.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="bg-[var(--color-dark-card)] p-5 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[var(--color-gold)] text-xs font-bold tracking-widest uppercase">
                    {lightboxData.category}
                  </span>
                  <h3
                    className="text-white font-black text-lg mt-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {lightboxData.title}
                  </h3>
                  {lightboxData.description && (
                    <p className="text-[var(--color-gray-400)] text-sm mt-1">
                      {lightboxData.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="flex-shrink-0 w-9 h-9 rounded-sm bg-white/8 hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] flex items-center justify-center text-white transition-all duration-300"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
