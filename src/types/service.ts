export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string; // Lucide icon name string
  image: string;
  benefits: string[];
  indicatedFor: string[];
  ctaText: string;
}
