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
    id: 'fabrika',
    title: 'Fabrika Epoksi Zemin',
    category: 'Endüstriyel',
    image: '/images/projects/fabrika-epoksi-zemin.webp',
    description: 'Üretim alanında gri epoksi zemin uygulaması.',
  },
  {
    id: 'uretim-hatti',
    title: 'Üretim Hattı Zemini',
    category: 'Endüstriyel',
    image: '/images/projects/uretim-hatti-epoksi.webp',
    description: 'Üretim hattı boyunca kesintisiz zemin kaplama.',
  },
  {
    id: 'ticari-dokulu',
    title: 'Dokulu Ticari Zemin',
    category: 'Ticari',
    image: '/images/projects/ticari-dokulu-zemin.webp',
    description: 'Cam cepheli ticari alanda dokulu zemin görünümü.',
  },
  {
    id: 'metalik',
    title: 'Metalik Dekoratif Zemin',
    category: 'Metalik',
    image: '/images/projects/metalik-dekoratif-zemin.webp',
    description: 'Gri tonlarda dalgalı, parlak metalik yüzey.',
  },
  {
    id: 'oto-servis',
    title: 'Oto Servis Epoksi Zemini',
    category: 'Garaj',
    image: '/images/projects/oto-servis-epoksi.webp',
    description: 'Araç kabul ve servis alanında epoksi kaplama.',
  },
  {
    id: 'atolye',
    title: 'Atölye Epoksi Zemini',
    category: 'Endüstriyel',
    image: '/images/projects/atolye-epoksi-zemin.webp',
    description: 'Geniş atölye alanında parlak gri zemin.',
  },
  {
    id: 'turkuaz-uretim',
    title: 'Turkuaz Üretim Alanı',
    category: 'Endüstriyel',
    image: '/images/projects/turkuaz-uretim-zemini.webp',
    description: 'Üretim alanında turkuaz renkli epoksi yüzey.',
  },
  {
    id: 'ticari-parlak',
    title: 'Parlak Ticari Zemin',
    category: 'Ticari',
    image: '/images/projects/ticari-parlak-zemin.webp',
    description: 'Geniş, cam cepheli alanda açık renkli zemin kaplama.',
  },
  {
    id: 'tesis',
    title: 'Endüstriyel Tesis Zemini',
    category: 'Endüstriyel',
    image: '/images/projects/endustriyel-tesis-zemini.webp',
    description: 'Tesis ekipmanları çevresinde kesintisiz zemin uygulaması.',
  },
  {
    id: 'turkuaz',
    title: 'Turkuaz Epoksi Kaplama',
    category: 'Endüstriyel',
    image: '/images/projects/turkuaz-epoksi-zemin.webp',
    description: 'Kolonlu üretim alanında parlak turkuaz kaplama.',
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
      'Müşterilerime her zaman EpoksiCLniz\'i öneriyorum. 3D ve metalik zemin projelerinde gösterdikleri ustalık inanılmaz. Son projemizde okyanus temalı 3D zemin yaptılar — misafirlerimiz gözlerine inanamadı!',
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
