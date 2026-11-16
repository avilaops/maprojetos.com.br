import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { homeTitle, pageMetadata, titleTemplate } from '@/lib/page-metadata';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://maprojetos.com.br/#organization',
      name: 'M.A. Projetos e Construções',
      url: 'https://maprojetos.com.br/',
      logo: 'https://maprojetos.com.br/images/logo/logo-ma-simbolo.png',
      image: 'https://maprojetos.com.br/og-default.png',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://maprojetos.com.br/#website',
      name: 'M.A. Projetos e Construções',
      url: 'https://maprojetos.com.br/',
      inLanguage: 'pt-BR',
      publisher: { '@id': 'https://maprojetos.com.br/#organization' },
    },
  ],
};

export const metadata: Metadata = {
  ...pageMetadata({
    path: '/',
    title: 'Matheus Amarante Arquiteto',
    description: 'Projetos arquitetônicos, construções residenciais, regularização de imóveis, reformas e acompanhamento de obras em Votuporanga e região. Transforme seu sonho em realidade.',
  }),
  title: {
    default: homeTitle,
    template: titleTemplate
  },
  keywords: [
    'arquiteto em Votuporanga',
    'projetos arquitetônicos',
    'construção residencial',
    'projeto de chácara',
    'regularização de imóveis',
    'ampliação residencial',
    'acompanhamento de obra',
    'projetos e construções',
    'Matheus Amarante',
    'M.A. Projetos'
  ],
  authors: [{ name: 'Matheus Amarante' }],
  creator: 'M.A. Projetos e Construções',
  metadataBase: new URL('https://maprojetos.com.br/'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/** Mesmo `theme_color` declarado no manifest entregue pelo cliente. */
export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-light text-brand-dark selection:bg-brand-red selection:text-white">
        <Script type="module" src="/measurement/site.mjs" strategy="afterInteractive" />
        <Header />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
