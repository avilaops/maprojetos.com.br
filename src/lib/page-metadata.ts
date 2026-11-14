import type { Metadata } from 'next';

const siteName = 'M.A. Projetos e Construções';
export const titleTemplate = `%s • ${siteName}`;
export const homeTitle = `Matheus Amarante Arquiteto • ${siteName}`;

/** Metadados da rota, sem herdar a canonical ou a prévia da página inicial. */
export function pageMetadata({ path, title, description, image = '/og-default.png' }: {
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = new URL(path, 'https://maprojetos.com.br/').href;
  const previewTitle = `${title} • ${siteName}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName,
      url,
      title: previewTitle,
      description,
      images: [{ url: image, alt: previewTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: previewTitle,
      description,
      images: [image],
    },
  };
}
