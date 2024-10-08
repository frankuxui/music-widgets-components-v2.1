import { siteConfig } from '@/config'

export default function sitemap () {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${siteConfig.siteUrl}/widgets`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}