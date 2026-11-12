'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';

const editedImages: Record<string, string> = { sap: '/images/services/sap-duzenlenmis.png', 'akilli-sap': '/images/services/akilli-sap-duzenlenmis.png' };
const featured = ['sap', 'akilli-sap', 'epoksi', 'tas-hali', 'baski-beton', 'beton-silim', 'otopark-cizgi'];

export default function ServiceSlider() {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.featured-service');
    el.scrollBy({ left: direction * ((card?.offsetWidth ?? el.clientWidth) + 16), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <div className="featured-services">
    <div className="featured-services-top"><p>Uygulamalarımızı keşfedin</p><div className="featured-actions"><button type="button" onClick={() => move(-1)} aria-controls="featured-service-track" aria-label="Önceki hizmetler"><ArrowLeft size={20} /></button><button type="button" onClick={() => move(1)} aria-controls="featured-service-track" aria-label="Sonraki hizmetler"><ArrowRight size={20} /></button></div></div>
    <div ref={track} id="featured-service-track" className="featured-track" role="region" aria-label="Öne çıkan hizmetler" tabIndex={0}>
      {featured.map(id => {
        const service = SERVICES.find(item => item.id === id)!;
        return <Link href={`/hizmetler/${id}`} key={id} className="featured-service">
          <Image src={editedImages[id] ?? service.image} alt="" fill sizes="(max-width: 639px) 82vw, (max-width: 1023px) 45vw, 29vw" className="object-cover" />
          <span className="featured-shade" />
          {id === 'baski-beton' && <span className="featured-disclaimer">Temsili görsel</span>}
          {editedImages[id] && <span className="featured-disclaimer">Görsel düzenlenmiştir</span>}
          <span className="featured-copy"><strong>{service.title}</strong><span>Hizmeti inceleyin <ArrowUpRight size={16} /></span></span>
        </Link>;
      })}
    </div>
    <p className="featured-hint">Diğer hizmetler için kaydırın</p>
  </div>;
}
