import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/servicos/',
  title: 'Serviços',
  description: 'Conheça os serviços de projetos arquitetônicos, construções residenciais, regularização de imóveis, ampliações, reformas e acompanhamento de obra da M.A.',
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
