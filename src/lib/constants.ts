// ============================================================
// DESIGN TOKENS — Tüm renkler, tipografi ve spacing buraya
// ============================================================

export const COLORS = {
  // Dark backgrounds
  dark: '#0A0B0E',
  darkSecondary: '#111827',
  darkCard: '#1C2333',
  darkStrip: '#141B2D',

  // Brand accent — gold/amber
  gold: '#C8A951',
  goldLight: '#E8C96A',
  goldDark: '#A88B35',

  // CTA — vibrant orange
  orange: '#FF6B35',
  orangeHover: '#E85A24',

  // Neutral
  white: '#FFFFFF',
  grayLight: '#F4F6F8',
  grayMid: '#E2E8F0',
  grayText: '#94A3B8',
  textPrimary: '#1A202C',
  textSecondary: '#4A5568',
} as const;

export const FONTS = {
  heading: 'var(--font-heading)',
  body: 'var(--font-body)',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const SITE = {
  name: 'EpoksiPro',
  tagline: 'Zeminlerinizi Sanat Eserine Dönüştürüyoruz',
  phone: '+90 532 000 00 00',
  whatsapp: '+905320000000',
  email: 'info@epoksipro.com.tr',
  address: 'Atatürk Mah. Sanayi Cad. No:42, Büyükçekmece / İstanbul',
  instagram: 'https://instagram.com/epoksipro',
  facebook: 'https://facebook.com/epoksipro',
  youtube: 'https://youtube.com/@epoksipro',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.4...', // replace with real embed
} as const;
