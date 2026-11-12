import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SERVICES } from '@/lib/data';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return SERVICES.map(({ id }) => ({ slug: id })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.id === slug);
  return { title: service ? `${service.title} | Epoksiciniz` : 'Hizmet bulunamadı', description: service?.description };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((item) => item.id === slug);
  if (!service) notFound();
  const hasImage = ['akilli-sap', 'sap', 'tas-hali'].includes(service.id);
  return <><Header /><main className="bg-[var(--color-gray-100)] min-h-screen pt-40 pb-24"><div className="max-w-7xl mx-auto px-6">
    <Link href="/#hizmetler" className="text-sm font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-gold)]">← Tüm hizmetler</Link>
    <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
      <div><p className="section-label mb-4">Hizmetlerimiz</p><h1 className="text-4xl md:text-6xl font-black text-[var(--color-dark-2)] mb-6">{service.title}</h1><p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">{service.description}</p>
        <ul className="mt-8 space-y-3">{service.features.map((feature) => <li key={feature} className="text-[var(--color-text-secondary)]">• {feature}</li>)}</ul>
        <p className="mt-8 text-[var(--color-text-secondary)] leading-relaxed">Uygulama detayları ve projenize uygun seçenekler hakkında bilgi almak için bizimle iletişime geçin.</p>
        <Link href="/iletisim" className="inline-flex mt-8 px-7 py-4 bg-[var(--color-gold)] text-[var(--color-dark)] font-bold rounded-sm">İletişime geçin</Link>
      </div>
      {hasImage && <div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Image src={service.image} alt={`${service.title} uygulaması`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>}
    </div>
  </div></main><Footer /></>;
}
