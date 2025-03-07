import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/#servicos',
        '/#sobre',
        '/#contato'
      ],
      disallow: [
        '/api/',
        '/admin/'
      ]
    },
    sitemap: 'https://unisuntec.com.br/sitemap.xml'
  }
}