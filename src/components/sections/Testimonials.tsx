'use client';

import { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Star } from 'lucide-react';
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
  const trackRef = useRef<HTMLDivElement>(null);
  const moveReviews = (direction: number) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
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
    <section id="yorumlar" className="section-space bg-[var(--color-gray-100)]">
      <div className="site-container">
        <SectionTitle label="Müşteri Yorumları" title="İşi bizden, yorumu müşterilerimizden" subtitle="Müşterilerimizin Google üzerindeki değerlendirmeleri." />
        {reviews.length > 0 && <div className="flex justify-end gap-2 mb-4"><button type="button" onClick={() => moveReviews(-1)} aria-label="Önceki yorumlar" aria-controls="google-review-list" className="review-nav"><ArrowLeft size={18} /></button><button type="button" onClick={() => moveReviews(1)} aria-label="Sonraki yorumlar" aria-controls="google-review-list" className="review-nav"><ArrowRight size={18} /></button></div>}
        {reviews.length > 0 && <div ref={trackRef} id="google-review-list" className="reviews-track" role="region" aria-label="Google müşteri yorumları" tabIndex={0}>
          {reviews.map((review) => <article key={review.name} className="review-card bg-white rounded-lg p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {review.authorAttribution?.photoUri && <Image unoptimized src={review.authorAttribution.photoUri} alt="" width={40} height={40} className="rounded-full w-10 h-10" />}
              <div><a className="font-bold text-[var(--color-dark-2)]" href={review.authorAttribution?.uri || review.googleMapsUri || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">{review.authorAttribution?.displayName || 'Google kullanıcısı'}</a><p className="text-xs text-[var(--color-text-secondary)]">{review.relativePublishTimeDescription}</p></div>
            </div>
            {typeof review.rating === 'number' && <div className="flex gap-1" aria-label={`5 üzerinden ${review.rating} yıldız`}>{Array.from({ length: review.rating }, (_, index) => <Star key={index} size={16} fill="currentColor" className="text-[var(--color-gold)]" />)}</div>}
            {review.text?.text && <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] whitespace-pre-wrap">{review.text.text}</p>}
            {review.originalText?.languageCode && review.text?.languageCode !== review.originalText.languageCode && <p className="text-xs text-[var(--color-text-secondary)]">Google tarafından çevrildi</p>}
            <Image src="/images/google-maps-darkgray.svg" width={98} height={18} alt="Google Maps" className="mt-auto" />
            {review.googleMapsUri && <a href={review.googleMapsUri} target="_blank" rel="noopener noreferrer" className="text-sm underline text-[var(--color-text-secondary)]">Yorumu Google Haritalar&apos;da gör</a>}
          </article>)}
        </div>}
        <div className="review-summary rounded-lg bg-[var(--color-dark-2)] p-6 text-center">
          {typeof place?.rating === 'number' && <p className="text-white text-lg font-bold mb-3">{place.rating.toLocaleString('tr-TR')} / 5 {typeof place.userRatingCount === 'number' && <span className="font-normal text-sm">({place.userRatingCount.toLocaleString('tr-TR')} değerlendirme)</span>}</p>}
          <p className="text-[var(--color-gray-400)] text-sm mb-4">{reviews.length ? 'Yorumlar Google tarafından ilgililik sırasına göre gösterilir.' : 'Epoksiciniz hakkındaki yorumları ve güncel puanımızı Google’da görün.'}</p>
          <a href={place?.googleMapsUri || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] font-semibold text-sm rounded-sm">Google yorumlarını gör <ArrowUpRight size={16} /></a>
          {(reviews.length > 0 || typeof place?.rating === 'number') && <><Image src="/images/google-maps-white.svg" width={98} height={18} alt="Google Maps" className="mt-4 mx-auto" /><p className="mt-2 text-xs text-[var(--color-gray-400)]">Google yorumları tek tek doğrulamaz; tespit ettiği sahte içerikleri kaldırır. <a className="underline" href="https://support.google.com/contributionpolicy/answer/7400114" target="_blank" rel="noopener noreferrer">Google yorum politikası</a></p>{place?.attributions?.map((item) => <p key={item.provider} className="text-xs text-[var(--color-gray-400)]">{item.providerUri ? <a href={item.providerUri}>{item.provider}</a> : item.provider}</p>)}</>}
        </div>
      </div>
    </section>
  );
}
