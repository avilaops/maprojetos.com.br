import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import AnalyticsClickTracker from '@/components/analytics/AnalyticsClickTracker';

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

export const metadata: Metadata = {
  title: {
    default: 'M.A. Projetos e Construções | Matheus Amarante Arquiteto',
    template: '%s | M.A. Projetos e Construções'
  },
  description: 'Projetos arquitetônicos, construções residenciais, regularização de imóveis, reformas e acompanhamento de obras em Votuporanga e região. Transforme seu sonho em realidade.',
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://maprojetos.com.br/',
    title: 'M.A. Projetos e Construções | Matheus Amarante Arquiteto',
    description: 'Projetos que transformam sonhos em realidade. Arquitetura, construção, reformas e regularização em Votuporanga e região.',
    siteName: 'M.A. Projetos e Construções',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'M.A. Projetos e Construções',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M.A. Projetos e Construções | Matheus Amarante Arquiteto',
    description: 'Projetos que transformam sonhos em realidade. Arquitetura e construção de alto padrão.',
    images: ['/og-default.png'],
  },
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

/**
 * Container GTM do maprojetos.com.br (TagFlow). Ele já publica a configuração
 * do GA4 G-D4PW8CP274 — por isso `NEXT_PUBLIC_GA_MEASUREMENT_ID` fica vazio,
 * para não contar cada pageview duas vezes.
 *
 * O ID vem embutido como padrão porque `.env*` não é versionado: com o valor
 * só no `.env` local, qualquer build feito em outra máquina publicaria o site
 * sem medição nenhuma. Ele é público — vai no HTML de qualquer jeito — e a
 * variável continua sobrepondo em staging.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-KF3V9QFC';

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
        {GTM_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`
            }}
          />
        )}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-brand-light text-brand-dark selection:bg-brand-red selection:text-white">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <AnalyticsClickTracker />
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
