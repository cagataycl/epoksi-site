'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, Send } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { SITE } from '@/lib/constants';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const SERVICE_OPTIONS = [
  'Endüstriyel Epoksi',
  'Metalik Epoksi',
  '3D Epoksi Zemin',
  'Ticari Epoksi',
  'Garaj Zemini',
  'Poliüretan Kaplama',
  'Diğer',
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulated form submission
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('success');
  };

  return (
    <section id="iletisim" className="py-28 bg-[var(--color-dark-2)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="İletişim"
          title="Projenizi"
          highlight="Konuşalım"
          subtitle="Ücretsiz keşif ve detaylı teklif için bizimle iletişime geçin."
          align="center"
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact cards */}
            {[
              {
                icon: Phone,
                label: 'Telefon',
                value: SITE.phone,
                href: `tel:${SITE.phone}`,
                sub: 'Pazartesi – Cumartesi: 08:00 – 19:00',
              },
              {
                icon: Mail,
                label: 'E-posta',
                value: SITE.email,
                href: `mailto:${SITE.email}`,
                sub: 'Genellikle 4 saat içinde yanıtlıyoruz',
              },
              {
                icon: MapPin,
                label: 'Adres',
                value: SITE.address,
                href: '#',
                sub: 'İstanbul ve Türkiye genelinde hizmet',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-5 bg-white/4 hover:bg-white/7 border border-white/8 hover:border-[var(--color-gold)]/30 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-sm bg-[var(--color-gold)]/10 group-hover:bg-[var(--color-gold)]/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Icon size={18} strokeWidth={1.5} className="text-[var(--color-gold)]" />
                  </div>
                  <div>
                    <div className="text-[var(--color-gray-400)] text-xs font-bold tracking-widest uppercase mb-1">
                      {item.label}
                    </div>
                    <div
                      className="text-white font-semibold text-sm mb-1"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item.value}
                    </div>
                    <div className="text-[var(--color-gray-400)] text-xs">{item.sub}</div>
                  </div>
                </a>
              );
            })}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Merhaba%2C%20epoksi%20zemin%20projesi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#1fba59] rounded-lg text-white font-black text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:shadow-[0_10px_32px_rgba(37,211,102,0.45)]"
            >
              <MessageCircle size={18} fill="currentColor" />
              WhatsApp ile Yaz
            </a>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-[var(--color-dark-card)] border border-white/8 rounded-lg p-8 md:p-10">
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle
                    size={56}
                    className="text-[var(--color-gold)] mb-6"
                    strokeWidth={1.5}
                  />
                  <h3
                    className="text-white font-black text-2xl mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Mesajınız Alındı!
                  </h3>
                  <p
                    className="text-[var(--color-gray-400)] text-sm max-w-sm"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    En kısa sürede sizinle iletişime geçeceğiz. Acele durumlar için
                    doğrudan arayabilirsiniz.
                  </p>
                  <button
                    onClick={() => { setFormState('idle'); setForm({ name: '', phone: '', service: '', message: '' }); }}
                    className="mt-8 px-6 py-3 bg-[var(--color-gold)] text-[var(--color-dark)] font-black text-xs tracking-widest uppercase rounded-sm hover:bg-[var(--color-gold-dark)] transition-colors duration-300"
                  >
                    Yeni Form
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    className="text-white font-black text-xl mb-8"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Ücretsiz Keşif Formu
                  </h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[var(--color-gray-400)] text-xs font-bold tracking-widest uppercase mb-2">
                          Adınız Soyadınız *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Ahmet Yılmaz"
                          className="w-full bg-white/5 border border-white/12 hover:border-white/20 focus:border-[var(--color-gold)] rounded-sm px-4 py-3.5 text-white text-sm placeholder:text-[var(--color-gray-400)] outline-none transition-colors duration-300"
                          style={{ fontFamily: 'var(--font-body)' }}
                        />
                      </div>
                      <div>
                        <label className="block text-[var(--color-gray-400)] text-xs font-bold tracking-widest uppercase mb-2">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+90 5XX XXX XX XX"
                          className="w-full bg-white/5 border border-white/12 hover:border-white/20 focus:border-[var(--color-gold)] rounded-sm px-4 py-3.5 text-white text-sm placeholder:text-[var(--color-gray-400)] outline-none transition-colors duration-300"
                          style={{ fontFamily: 'var(--font-body)' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[var(--color-gray-400)] text-xs font-bold tracking-widest uppercase mb-2">
                        İlgilendiğiniz Hizmet
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/12 hover:border-white/20 focus:border-[var(--color-gold)] rounded-sm px-4 py-3.5 text-white text-sm outline-none transition-colors duration-300 appearance-none cursor-pointer"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        <option value="" className="bg-[var(--color-dark-2)]">Seçiniz...</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[var(--color-dark-2)]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[var(--color-gray-400)] text-xs font-bold tracking-widest uppercase mb-2">
                        Mesajınız
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Projeniz hakkında kısa bilgi verin (alan m², zemin tipi, bütçe vs.)"
                        className="w-full bg-white/5 border border-white/12 hover:border-white/20 focus:border-[var(--color-gold)] rounded-sm px-4 py-3.5 text-white text-sm placeholder:text-[var(--color-gray-400)] outline-none transition-colors duration-300 resize-none"
                        style={{ fontFamily: 'var(--font-body)' }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="flex items-center justify-center gap-2.5 py-4 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-dark)] font-black text-sm tracking-widest uppercase rounded-sm transition-all duration-300 shadow-[0_6px_24px_rgba(200,169,81,0.35)] hover:shadow-[0_8px_32px_rgba(200,169,81,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {formState === 'loading' ? (
                        <span className="w-4 h-4 border-2 border-[var(--color-dark)] border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send size={15} strokeWidth={2.5} />
                      )}
                      {formState === 'loading' ? 'Gönderiliyor...' : 'Ücretsiz Teklif İste'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
