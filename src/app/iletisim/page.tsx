import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';
export const metadata: Metadata = { title: 'İletişim | Epoksiciniz' };
export default function ContactPage() {
  return <><Header /><main className="pt-20 bg-[var(--color-dark-2)]"><Contact /></main><Footer /></>;
}
