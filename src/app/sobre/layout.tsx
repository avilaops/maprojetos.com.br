import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/sobre/',
  title: 'Sobre',
  description: 'Conheça a M.A. Projetos e Construções e o trabalho de arquitetura e construção sob a coordenação do arquiteto Matheus Amarante.',
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
