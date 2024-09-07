import { SITE_AUTHOR, SITE_META_DESCRIPTION, SITE_META_TITLE, SITE_URL } from '@/config'

export default function manifest () {
  return {
    name: SITE_META_TITLE,
    short_name: SITE_AUTHOR,
    description: SITE_META_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    categories: [ 'reactjs', 'portafolio', 'design', 'web', 'frontend', 'ui', 'ux', 'figma', 'react', 'nextjs', 'tailwindcss', 'typescript', 'javascript', 'html', 'css', 'music', 'widgets', 'responsive' ],
    related_applications: [
      {
        platform: 'web',
        id: 'music-widgets-components-v2-1',
        url: SITE_URL,
      },
    ],
    lang: 'es',
    id: 'music-widgets-components-v2-1',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png'
      },
      {
        src: '/apple-touch-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png'
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}