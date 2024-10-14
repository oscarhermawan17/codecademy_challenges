import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/public/', '/components/', '/data/'],
    },
    sitemap: 'http://localhost:4001/sitemap.xml',
  }
}