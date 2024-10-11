import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [ /* Your Code */ ],
    },
    sitemap: 'http://localhost:4001/sitemap.xml',
  }
}