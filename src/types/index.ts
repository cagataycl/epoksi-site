export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  description?: string;
}

export type GalleryCategory =
  | 'Tümü'
  | 'Endüstriyel'
  | 'Ticari'
  | 'Konut'
  | 'Garaj'
  | '3D Epoksi'
  | 'Metalik';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
