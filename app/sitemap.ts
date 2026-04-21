import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aztech-seo-friendly.vercel.app/',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://aztech-seo-friendly.vercel.app/#products',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://aztech-seo-friendly.vercel.app/#solutions',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://aztech-seo-friendly.vercel.app/#projects',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://aztech-seo-friendly.vercel.app/#blog',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://aztech-seo-friendly.vercel.app/#contact',
      lastModified: new Date('2025-04-20'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // ── Blog article pages ──────────────────────────────────
    {
      url: 'https://aztech-seo-friendly.vercel.app/blog/indoor-vs-outdoor-led-screens',
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://aztech-seo-friendly.vercel.app/blog/pixel-pitch-explained',
      lastModified: new Date('2024-12-10'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: 'https://aztech-seo-friendly.vercel.app/blog/led-display-trends-dubai-2025',
      lastModified: new Date('2025-02-20'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]
}
