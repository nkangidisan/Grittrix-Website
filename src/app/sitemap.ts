
import { MetadataRoute } from 'next';
import { productsList } from '@/lib/productsData';
import { servicesList } from '@/lib/servicesData';
import { industryDetailsData } from '@/lib/industriesData';
import type { JobListing } from '@/lib/types';

// This is the same list from the careers pages.
const jobListings: JobListing[] = [
  { id: 'software-engineer', title: 'Software Engineer (Frontend & Backend)', location: 'Remote', type: 'Full-time', description: '', applyUrl: '/careers/apply/software-engineer' },
  { id: 'data-scientist-ml', title: 'Data Scientist / ML Engineer', location: 'Remote', type: 'Full-time', description: '', applyUrl: '/careers/apply/data-scientist-ml' },
  { id: 'ui-ux-designer', title: 'UI/UX Designer', location: 'Remote', type: 'Full-time', description: '', applyUrl: '/careers/apply/ui-ux-designer' },
  { id: 'business-development-sales', title: 'Business Development & Sales', location: 'Remote', type: 'Full-time', description: '', applyUrl: '/careers/apply/business-development-sales' },
  { id: 'industry-advisor', title: 'Industry Advisor (Health, Agri, Education)', location: 'Remote', type: 'Contract', description: '', applyUrl: '/careers/apply/industry-advisor' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://grittrix.com';
  const lastModified = new Date().toISOString();

  // Define a type for the change frequency to satisfy TypeScript
  type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${domain}/`, changeFrequency: 'daily' as ChangeFrequency, priority: 1.0 },
    { url: `${domain}/about`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${domain}/services`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
    { url: `${domain}/industries`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
    { url: `${domain}/products`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
    { url: `${domain}/blog`, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.7 },
    { url: `${domain}/careers`, changeFrequency: 'weekly' as ChangeFrequency, priority: 0.7 },
    { url: `${domain}/contact`, changeFrequency: 'yearly' as ChangeFrequency, priority: 0.5 },
    { url: `${domain}/design-services`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${domain}/hosting`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
    { url: `${domain}/merch`, changeFrequency: 'monthly' as ChangeFrequency, priority: 0.6 },
    { url: `${domain}/faq`, changeFrequency: 'yearly' as ChangeFrequency, priority: 0.5 },
    { url: `${domain}/privacy`, changeFrequency: 'yearly' as ChangeFrequency, priority: 0.3 },
  ].map(route => ({ ...route, lastModified }));

  // Dynamic product pages
  const productRoutes: MetadataRoute.Sitemap = productsList.map((product) => ({
    url: `${domain}/products/${product.id}`,
    lastModified,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  }));

  // Dynamic industry pages
  const industryRoutes: MetadataRoute.Sitemap = Object.keys(industryDetailsData).map((slug) => ({
    url: `${domain}/industries/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as ChangeFrequency,
    priority: 0.8,
  }));

  // Dynamic service pages
  const serviceRoutes: MetadataRoute.Sitemap = servicesList
    .filter(service => service.detailsUrl)
    .map((service) => ({
      url: `${domain}${service.detailsUrl}`,
      lastModified,
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.7,
  }));
  
  // Dynamic job application pages
  const jobRoutes: MetadataRoute.Sitemap = jobListings
    .filter(job => job.applyUrl)
    .map((job) => ({
        url: `${domain}${job.applyUrl}`,
        lastModified,
        changeFrequency: 'weekly' as ChangeFrequency,
        priority: 0.6,
  }));


  return [
    ...staticRoutes,
    ...productRoutes,
    ...industryRoutes,
    ...serviceRoutes,
    ...jobRoutes,
  ];
}
