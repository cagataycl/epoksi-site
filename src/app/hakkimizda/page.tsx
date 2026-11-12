import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export const metadata: Metadata = { title: 'Hakkımızda | Epoksiciniz' };
export default function AboutPage() {
  return <><Header /><main className="bg-[var(--color-gray-100)] min-h-[70vh] pt-28 pb-16"><div className="max-w-4xl mx-auto px-6"><p className="section-label mb-4">Epoksiciniz</p><h1 className="text-4xl md:text-5xl font-bold text-[var(--color-dark-2)] mb-8">Hakkımızda</h1><p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">Epoksiciniz olarak epoksi zemin, şap, akıllı şap, baskı beton, taş halı ve izolasyon alanlarında zemin ihtiyaçlarına yönelik çözümler sunuyoruz.</p><p className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]">Her alanın kullanım amacını ve yüzey özelliklerini değerlendirerek projeye uygun uygulamayı planlıyoruz. Projenizi ve ihtiyaçlarınızı konuşmak için bizimle iletişime geçebilirsiniz.</p><Link href="/iletisim" className="inline-flex mt-8 px-7 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] font-bold rounded-sm">İletişime geçin</Link></div></main><Footer /></>;
}
