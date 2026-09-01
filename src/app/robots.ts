
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        // Explicitly allow AI crawlers that power answer engines
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Applebot-Extended',
          'CCBot',
          'Amazonbot'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://grittrix.com/sitemap.xml',
  };
}
