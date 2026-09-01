import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://maprojetos.com.br';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Sem `disallow: /_next/`: o Googlebot precisa baixar o JS/CSS de
      // /_next/static/ para renderizar a página; bloquear quebra a renderização.
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
