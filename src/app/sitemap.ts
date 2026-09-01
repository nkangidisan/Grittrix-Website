
import { MetadataRoute } from 'next';
import { productsList } from '@/lib/productsData';
import { servicesList } from '@/lib/servicesData';
import { industryDetailsData } from '@/lib/industriesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://grittrix.com';
  const lastModified = new Date();

  type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${domain}/`, changeFrequency: 'daily' as ChangeFrequency, priority: 1.0 },
    { url: `${domain}/merch`, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.8 },
    { url: `${domain}/merch/shop`, changeFrequency: 'daily' as ChangeFrequency, priority: 0.9 },
    { url: `${domain}/services`, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    { url: `${domain}/products`, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.9 },
    { url: `${domain}/blog`, changeFrequency: 'daily' as ChangeFrequency, priority: 0.8 },
    { url: `${domain}/about`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
    { url: `${domain}/industries`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
    { url: `${domain}/careers`, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.6 },
    { url: `${domain}/design-services`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${domain}/hosting`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${domain}/contact`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.5 },
    { url: `${domain}/faq`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
    { url: `${domain}/privacy`, changeFrequency: 'yearly' as ChangeFrequency, priority: 0.3 },
  ];

  const productRoutes: MetadataRoute.Sitemap = productsList.map((product) => ({
    url: `${domain}/products/${product.id}`,
    lastModified,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  }));

  const industryRoutes: MetadataRoute.Sitemap = Object.keys(industryDetailsData).map((slug) => ({
    url: `${domain}/industries/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = servicesList
    .filter(service => service.detailsUrl)
    .map((service) => ({
      url: `${domain}${service.detailsUrl}`,
      lastModified,
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...industryRoutes,
    ...serviceRoutes,
  ].map(route => ({ ...route, lastModified }));
}
