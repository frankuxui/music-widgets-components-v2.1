import './globals.css'
import { siteConfig } from '@/config'

export const metadata = {
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: '/',
  },
  robots: 'follow, index',
  authors: [ { name: siteConfig.author } ],
  keywords: siteConfig.keywords,
  icons: {
    icon: './favicon.ico',
    shortcut: './shortcut-icon.ico',
    apple: './apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  appleWebApp: {
    title: siteConfig.metaTitle,
    statusBarStyle: 'black',
  },
  openGraph: {
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1440,
        height: 900,
        alt: siteConfig.metaDescription,
      },
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.metaDescription,
      }
    ],
  },
  category: 'Web development',
  twitter: {
    card: 'summary_large_image',
    site: '@frankuxui',
    creator: '@frankuxui',
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name='theme-color' content='#000000' />
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <link rel='favicon' href='./favicon.ico' />
        <link rel="shortcut-icon" href="/favicon.png" type="image/x-icon" />
        <link rel="shortcut-icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel='manifest' href='./manifest.json' />
      </head>
      <body>
        <main className='min-h-screen w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
