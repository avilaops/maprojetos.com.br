export interface Project {
  slug: string;
  title: string;
  category: 'Residencial' | 'Chácara' | 'Reforma' | 'Ampliação' | 'Comercial';
  city: string;
  area: number; // in m²
  year: string;
  mainImage: string;
  images: string[]; // gallery images
  description: string;
  challenge: string;
  solution: string;
  highlights: string[];
  materials: string[];
  status: 'estudo' | 'anteprojeto' | 'executivo' | 'construcao' | 'concluido';
}
