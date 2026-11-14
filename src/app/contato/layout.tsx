import type { ReactNode } from 'react';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({
  path: '/contato/',
  title: 'Contato',
  description: 'Entre em contato com a M.A. Projetos e Construções para conversar sobre seu projeto, solicitar um orçamento ou tirar suas dúvidas.',
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
