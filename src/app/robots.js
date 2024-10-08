import { siteConfig } from '@/config'

export default function robots () {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  }
}