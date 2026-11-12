import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { SITE } from '@/lib/constants';

export default function Contact() {
  return (
    <section id="iletisim" className="section-space bg-[var(--color-dark-2)]">
      <div className="site-container">
        <SectionTitle label="İletişim" title="Projenizi Konuşalım" highlight="Konuşalım" subtitle="Projeniz ve zemin ihtiyaçlarınız için bizimle iletişime geçin." dark />
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <a href={`tel:${SITE.phone}`} className="p-7 bg-white/5 rounded-lg text-white hover:bg-white/10"><Phone className="text-[var(--color-gold)] mb-4" /><span className="block text-sm text-[var(--color-gray-400)] mb-2">Telefon</span><span className="font-bold">{SITE.phone}</span></a>
          <a href={`mailto:${SITE.email}`} className="p-7 bg-white/5 rounded-lg text-white hover:bg-white/10 break-words"><Mail className="text-[var(--color-gold)] mb-4" /><span className="block text-sm text-[var(--color-gray-400)] mb-2">E-posta</span><span className="font-bold">{SITE.email}</span></a>
          <div className="p-7 bg-white/5 rounded-lg text-white"><MapPin className="text-[var(--color-gold)] mb-4" /><span className="block text-sm text-[var(--color-gray-400)] mb-2">Adres</span><span className="font-bold">{SITE.address}</span></div>
        </div>
        <div className="text-center mt-8"><a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Merhaba, zemin projem hakkında bilgi almak istiyorum.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-[#25D366] hover:bg-[#1fba59] rounded-sm text-white font-bold text-sm"><MessageCircle size={19} /> WhatsApp ile yazın</a></div>
      </div>
    </section>
  );
}
