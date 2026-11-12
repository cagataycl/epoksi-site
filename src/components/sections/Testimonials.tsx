'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=EPOKS%C4%B0C%C4%B0N%C4%B0Z&query_place_id=ChIJ9eqABFGgnyERT-lza_fs1Bs';

type Review = {
  name: string;
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text: string; languageCode?: string };
  originalText?: { languageCode?: string };
  googleMapsUri?: string;
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
};
type Place = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Review[];
  attributions?: { provider: string; providerUri?: string }[];
};

export default function Testimonials() {
  const [place, setPlace] = useState<Place | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/google-reviews', { signal: controller.signal, cache: 'no-store' })
      .then((response) => response.ok ? response.json() : null)
      .then((data: Place | null) => setPlace(data))
      .catch(() => {});
    return () => controller.abort();
  }, []);
  const reviews = place?.reviews ?? [];
  return (
    <section className="py-28 bg-[var(--color-gray-100)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Müşteri Yorumları" title="Deneyimleri" highlight="Keşfedin" subtitle="Müşterilerimizin Google üzerindeki değerlendirmeleri." />
        {reviews.length > 0 && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => <article key={review.name} className="bg-white rounded-lg p-6 shadow-[var(--shadow-card)] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {review.authorAttribution?.photoUri && <Image unoptimized src={review.authorAttribution.photoUri} alt="" width={40} height={40} className="rounded-full w-10 h-10" />}
              <div><a className="font-bold text-[var(--color-dark-2)]" href={review.authorAttribution?.uri || review.googleMapsUri || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">{review.authorAttribution?.displayName || 'Google kullanıcısı'}</a><p className="text-xs text-[var(--color-text-secondary)]">{review.relativePublishTimeDescription}</p></div>
            </div>
            {typeof review.rating === 'number' && <div className="flex gap-1" aria-label={`${review.rating} üzerinden 5 yıldız`}>{Array.from({ length: review.rating }, (_, index) => <Star key={index} size={16} fill="currentColor" className="text-[var(--color-gold)]" />)}</div>}
            {review.text?.text && <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] whitespace-pre-wrap">{review.text.text}</p>}
            {review.originalText?.languageCode && review.text?.languageCode !== review.originalText.languageCode && <p className="text-xs text-[var(--color-text-secondary)]">Google tarafından çevrildi</p>}
            <Image src="/images/google-maps-darkgray.svg" width={98} height={18} alt="Google Maps" className="mt-auto" />
            {review.googleMapsUri && <a href={review.googleMapsUri} target="_blank" rel="noopener noreferrer" className="text-sm underline text-[var(--color-text-secondary)]">Yorumu Google Haritalar&apos;da gör</a>}
          </article>)}
        </div>}
        <div className="max-w-3xl mx-auto rounded-lg bg-[var(--color-dark-2)] p-8 md:p-12 text-center">
          {typeof place?.rating === 'number' && <p className="text-white text-lg font-bold mb-3">{place.rating.toLocaleString('tr-TR')} / 5 {typeof place.userRatingCount === 'number' && <span className="font-normal text-sm">({place.userRatingCount.toLocaleString('tr-TR')} değerlendirme)</span>}</p>}
          <p className="text-[var(--color-gray-400)] text-sm mb-7">{reviews.length ? 'Yorumlar Google tarafından ilgililik sırasına göre gösterilir.' : 'Epoksiciniz hakkındaki yorumları ve güncel puanımızı Google’da görün.'}</p>
          <a href={place?.googleMapsUri || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] font-black text-xs tracking-widest uppercase rounded-sm">Google yorumlarını gör <ArrowUpRight size={16} /></a>
          {(reviews.length > 0 || typeof place?.rating === 'number') && <><Image src="/images/google-maps-white.svg" width={98} height={18} alt="Google Maps" className="mt-6 mx-auto" /><p className="mt-2 text-xs text-[var(--color-gray-400)]">Google yorumları tek tek doğrulamaz; tespit ettiği sahte içerikleri kaldırır. <a className="underline" href="https://support.google.com/contributionpolicy/answer/7400114" target="_blank" rel="noopener noreferrer">Google yorum politikası</a></p>{place?.attributions?.map((item) => <p key={item.provider} className="text-xs text-[var(--color-gray-400)]">{item.providerUri ? <a href={item.providerUri}>{item.provider}</a> : item.provider}</p>)}</>}
        </div>
      </div>
    </section>
  );
}
