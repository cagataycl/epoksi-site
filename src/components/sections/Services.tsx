import { ArrowUpRight, Factory, Sparkles, Layers, Building2, Car, Shield } from 'lucide-react';
import Link from 'next/link';
import ServiceSlider from '@/components/sections/ServiceSlider';
import SectionTitle from '@/components/ui/SectionTitle';
import { SERVICES } from '@/lib/data';
const icons = { Factory, Sparkles, Layers, Building2, Car, Shield };
export default function Services() {
  return <section id="hizmetler" className="section-space bg-[var(--color-gray-100)]"><div className="site-container">
    <SectionTitle label="Hizmetlerimiz" title="Her alan için doğru uygulama" subtitle="Zemininizin ihtiyacına uygun çözümü keşfedin." align="left" />
    <ServiceSlider />
    <h3 className="all-services-heading">Tüm hizmetlerimiz</h3>
    <div className="service-grid">{SERVICES.map(service => {
      const Icon = icons[service.icon as keyof typeof icons] ?? Layers;
      return <Link className="service-card" key={service.id} href={`/hizmetler/${service.id}`}><Icon size={22} strokeWidth={1.5} /><div><h3>{service.title}</h3><p>{service.description}</p></div><ArrowUpRight className="service-arrow" size={19} /></Link>;
    })}</div>
  </div></section>;
}
