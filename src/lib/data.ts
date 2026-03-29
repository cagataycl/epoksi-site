import type {
  Service,
  Stat,
  ProcessStep,
  WhyUsItem,
  GalleryItem,
  Testimonial,
  NavLink,
} from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Süreç', href: '#surec' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'İletişim', href: '#iletisim' },
];

export const SERVICES: Service[] = [
  {
    id: 'endustriyel',
    title: 'Endüstriyel Epoksi',
    description:
      'Fabrika, depo ve üretim tesisleri için yüksek dayanımlı, kimyasal dirençli epoksi zemin sistemleri.',
    icon: 'Factory',
    features: ['Kimyasal Direnç', 'Ağır Yük Kapasitesi', 'Kayma Önleyici'],
    image: '/images/services/endustriyel.jpg',
  },
  {
    id: 'metalik',
    title: 'Metalik Epoksi',
    description:
      'Eşsiz metalik efektler ve üç boyutlu görünüm ile mekânlarınıza lüks bir atmosfer katın.',
    icon: 'Sparkles',
    features: ['3D Görünüm Efekti', 'Özel Renk Seçenekleri', 'Ayna Parlaklığı'],
    image: '/images/services/metalik.jpg',
  },
  {
    id: '3d-epoksi',
    title: '3D Epoksi Zemin',
    description:
      'Okyanus, orman, uzay ve daha fazlası — zemin yüzeyine tam anlamıyla hayat veren 3D tasarımlar.',
    icon: 'Layers',
    features: ['Sınırsız Tasarım', 'Yüksek Çözünürlük', 'Dayanıklı Kaplama'],
    image: '/images/services/3d.jpg',
  },
  {
    id: 'ticari',
    title: 'Ticari Epoksi',
    description:
      'Mağaza, restoran, otel ve ofis alanlarına özel, estetik ve dayanıklı zemin çözümleri.',
    icon: 'Building2',
    features: ['Estetik Tasarım', 'Kolay Temizlik', 'Hızlı Uygulama'],
    image: '/images/services/ticari.jpg',
  },
  {
    id: 'garaj',
    title: 'Garaj Zemini',
    description:
      'Araç park alanları için yağ ve yakıt dirençli, uzun ömürlü epoksi zemin kaplama sistemleri.',
    icon: 'Car',
    features: ['Yağ & Yakıt Direnci', 'Kaymaz Yüzey', 'Uzun Ömür'],
    image: '/images/services/garaj.jpg',
  },
  {
    id: 'poliuretan',
    title: 'Poliüretan Kaplama',
    description:
      'UV dayanımı ve esnekliği ile açık alan ve özel zeminler için ideal poliüretan kaplama sistemleri.',
    icon: 'Shield',
    features: ['UV Dayanımı', 'Esnek Yapı', 'Dış Mekan Uyumlu'],
    image: '/images/services/poliuretan.jpg',
  },
];

export const STATS: Stat[] = [
  { value: 500, suffix: '+', label: 'Tamamlanan Proje' },
  { value: 15, suffix: '+', label: 'Yıllık Deneyim' },
  { value: 100000, suffix: '+', label: 'm² Uygulama Alanı' },
  { value: 100, suffix: '%', label: 'Müşteri Memnuniyeti' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Ücretsiz Keşif',
    description:
      'Uzman ekibimiz projenizi yerinde inceler, zemin durumunu değerlendirir ve ihtiyaçlarınızı dinler.',
  },
  {
    number: '02',
    title: 'Yüzey Hazırlığı',
    description:
      'Özel taşlama ve kumlama ekipmanlarımızla zemin yüzeyi mükemmel yapışma için hazırlanır.',
  },
  {
    number: '03',
    title: 'Astar Uygulaması',
    description:
      'Yüksek penetrasyon özellikli epoksi astar ile zemin güçlendirilir, nem bariyeri oluşturulur.',
  },
  {
    number: '04',
    title: 'Epoksi Kaplama',
    description:
      'Seçilen sistem ve tasarıma göre katmanlar profesyonel ekipmanlarla titizlikle uygulanır.',
  },
  {
    number: '05',
    title: 'Son Kat & Teslim',
    description:
      'Koruyucu son kat uygulanır. Zemin kontrol edilir ve garantili olarak teslim edilir.',
  },
];

export const WHY_US: WhyUsItem[] = [
  {
    icon: 'Award',
    title: 'Uzman Ekip',
    description:
      '15 yılı aşkın deneyime sahip, sertifikalı uygulama uzmanlarından oluşan profesyonel ekibimiz.',
  },
  {
    icon: 'Star',
    title: 'Premium Malzeme',
    description:
      'Yalnızca Avrupa ve Türkiye\'nin önde gelen markalarının A-kalite epoksi sistemlerini kullanıyoruz.',
  },
  {
    icon: 'Clock',
    title: 'Hızlı Teslim',
    description:
      'Projenizi en kısa sürede tamamlamak için planlı çalışma programı ve disiplinli ekip yapısı.',
  },
  {
    icon: 'ShieldCheck',
    title: '10 Yıl Garanti',
    description:
      'Tüm uygulamalarımıza yazılı 10 yıl garanti veriyoruz. Zemin kalitesinden yüzde yüz eminiz.',
  },
  {
    icon: 'Search',
    title: 'Ücretsiz Keşif',
    description:
      'Projenizi değerlendirmek için ücretsiz yerinde keşif ve detaylı teklif hizmeti sunuyoruz.',
  },
  {
    icon: 'HeadphonesIcon',
    title: '7/24 Destek',
    description:
      'Uygulama sonrası teknik destek ve bakım hizmetleri ile her zaman yanınızdayız.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Metalik Gri Endüstriyel Zemin',
    category: 'Endüstriyel',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description: 'İstanbul, Fabrika — 2.500 m²',
  },
  {
    id: '2',
    title: 'Okyanus 3D Zemin Sanatı',
    category: '3D Epoksi',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    description: 'Bursa, Villa — 180 m²',
  },
  {
    id: '3',
    title: 'Altın Metalik Showroom',
    category: 'Metalik',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    description: 'İstanbul, Showroom — 320 m²',
  },
  {
    id: '4',
    title: 'Garaj Epoksi Kaplama',
    category: 'Garaj',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80',
    description: 'Ankara, Özel Villa Garajı — 90 m²',
  },
  {
    id: '5',
    title: 'Restoran Ticari Uygulama',
    category: 'Ticari',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'İzmir, Fine Dining Restoran — 240 m²',
  },
  {
    id: '6',
    title: 'Konut Metalik Zemin',
    category: 'Konut',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
    description: 'İstanbul, Lüks Konut — 280 m²',
  },
  {
    id: '7',
    title: 'Lojistik Depo Zemini',
    category: 'Endüstriyel',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    description: 'Kocaeli, Depo — 8.000 m²',
  },
  {
    id: '8',
    title: 'Mavi Okyanus 3D Efekt',
    category: '3D Epoksi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    description: 'Antalya, Otel Lobby — 450 m²',
  },
  {
    id: '9',
    title: 'Gümüş Metalik Ofis',
    category: 'Metalik',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    description: 'İstanbul, Kurumsal Ofis — 1.200 m²',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    role: 'Fabrika Sahibi',
    company: 'Yılmaz Metal Sanayi',
    content:
      'Fabrikamızın 5.000 m² zemin alanını EpoksiCLniz ile kapladık. Hem süreç hem de sonuç tam beklediğimiz gibi oldu. Ekip zamanında geldi, işi zamanında bitirdi. Kaliteden hiç ödün verilmedi. Kesinlikle tavsiye ederim.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Selin Kaya',
    role: 'Interior Designer',
    company: 'Kaya Design Studio',
    content:
      'Müşterilerime her zaman EpoksiCLniz\'yu öneriyorum. 3D ve metalik zemin projelerinde gösterdikleri ustalık inanılmaz. Son projemizde okyanus temalı 3D zemin yaptılar — misafirlerimiz gözlerine inanamadı!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mehmet Demir',
    role: 'Otel Genel Müdürü',
    company: 'Grand Boutique Hotel',
    content:
      'Otelimizdeki lobby ve restoran alanlarını EpoksiCLniz ile yeniledik. Misafirlerimizden aldığımız geri bildirimler olağanüstü. İş kalitesi, temizlik ve profesyonellik açısından tam puan. Teşekkürler!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Zeynep Arslan',
    role: 'Ev Sahibi',
    company: 'Bireysel Müşteri',
    content:
      'Villamızın tüm zemin katını metalik epoksi ile kapladırdık. Fiyat/performans açısından çok memnunuz. Uygulama tek günde tamamlandı, 48 saat sonra üzerinde yürüdük. Harika bir deneyimdi.',
    rating: 5,
  },
];
