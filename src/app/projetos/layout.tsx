import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/projetos/',
  title: 'Projetos',
  description: 'Explore os projetos residenciais, reformas, ampliações e chácaras da M.A. Projetos e Construções, com imagens e informações de cada projeto.',
});

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
