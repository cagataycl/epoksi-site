import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/constants';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${SITE.name} | Profesyonel Epoksi Zemin Kaplama`,
  description:
    'İstanbul ve Türkiye genelinde profesyonel epoksi zemin kaplama hizmetleri. Metalik epoksi, 3D epoksi, endüstriyel kaplama ve garaj zemin çözümleri. 15+ yıl deneyim, 500+ tamamlanan proje.',
  keywords:
    'epoksi zemin, epoksi kaplama, metalik epoksi, 3D epoksi zemin, endüstriyel zemin, garaj epoksi, zemin kaplama istanbul',
  openGraph: {
    title: `${SITE.name} | Profesyonel Epoksi Zemin Kaplama`,
    description:
      'Zeminlerinizi sanat eserine dönüştürüyoruz. 15+ yıl deneyim, 500+ proje, 10 yıl garanti.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
