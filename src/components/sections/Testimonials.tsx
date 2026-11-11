import { ArrowUpRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=EPOKS%C4%B0C%C4%B0N%C4%B0Z+-+ZEM%C4%B0N+KAPLAMA&si=AE1YtOpq69kQPYJq7TIn_jext5SiMwQcb6Hqfr7QepP6tJJpj-31Dm9P_eBb9rBS7XiWkDHCFcroZN6XHe9vsaa09o1Qo7QQH5jtBwIJvdKHdRVzkGQuzhfyCHSu9yJyRH4jat8sn9Jgq6w9zpW3NnkWm3FkXc1I4w%3D%3D';

export default function Testimonials() {
  return (
    <section className="py-28 bg-[var(--color-gray-100)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Müşteri Yorumları" title="Deneyimleri" highlight="Keşfedin" subtitle="Müşterilerimizin değerlendirmelerini Google üzerinde inceleyebilirsiniz." />
        <div className="max-w-3xl mx-auto rounded-lg bg-[var(--color-dark-2)] p-8 md:p-12 text-center">
          <p className="text-white text-lg font-bold mb-3">Google yorumlarımız</p>
          <p className="text-[var(--color-gray-400)] text-sm mb-7">Epoksiciniz hakkındaki yorumları ve güncel puanımızı Google&apos;da görün.</p>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] font-black text-xs tracking-widest uppercase rounded-sm">
            Google yorumlarını gör <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
