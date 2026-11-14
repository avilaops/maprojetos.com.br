import type { ReactNode } from 'react';
import { pageMetadata, titleTemplate } from '@/lib/page-metadata';

export const metadata = {
  ...pageMetadata({
    path: '/projetos/',
    title: 'Projetos',
    description: 'Explore os projetos residenciais, reformas, ampliações e chácaras da M.A. Projetos e Construções, com imagens e informações de cada projeto.',
  }),
  title: { default: 'Projetos', template: titleTemplate },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
