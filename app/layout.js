import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SplashScreen from './components/layout/SplashScreen';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scythematic.com';

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Scythematic | Enterprise Software Company',
    template: '%s | Scythematic',
  },

  description:
    'Scythematic is an enterprise software company building scalable web platforms, custom software, AI automation systems, DevOps pipelines, and quality-driven digital products.',

  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },

  manifest: '/site.webmanifest',

  keywords: [
    'Scythematic',
    'enterprise software company',
    'web development',
    'custom software development',
    'AI automation',
    'DevOps',
    'software quality assurance',
    'SaaS development',
  ],

  authors: [{ name: 'Scythematic' }],
  creator: 'Scythematic',
  publisher: 'Scythematic',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Scythematic | Enterprise Software Company',
    description:
      'Enterprise-grade software solutions for modern teams, from strategy and architecture to development, automation, QA, and deployment.',
    siteName: 'Scythematic',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scythematic | Enterprise Software Company',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Scythematic | Enterprise Software Company',
    description:
      'Enterprise software development, AI automation, DevOps, QA, and scalable product engineering by Scythematic.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Scythematic',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    description:
      'Scythematic is an enterprise software company building scalable web platforms, custom software, AI automation systems, DevOps pipelines, and quality-driven digital products.',
  };

  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SplashScreen />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}