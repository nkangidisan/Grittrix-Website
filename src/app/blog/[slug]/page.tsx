
import { PageHeader } from '@/components/PageHeader';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import * as React from 'react';

// In a real app, you would fetch a list of posts from a CMS or database.
// For this placeholder, we'll define a few possible slugs.
const posts = [{ slug: 'ai-in-africa' }, { slug: 'future-of-retail-tech' }, { slug: 'democratizing-data' }];

// Define the props type explicitly for clarity and type safety.
interface BlogSlugPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = params;
  const postExists = posts.some(p => p.slug === slug);

  if (!postExists) {
    return {
      title: 'Post Not Found | Grittrix AI Solutions',
    };
  }

  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${title} | Grittrix Blog`,
    description: `Read our thoughts on ${title} and the future of technology in emerging markets.`,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = params;

  // Verify the slug is one of our "valid" posts for this placeholder.
  const postExists = posts.some(p => p.slug === slug);
  if (!postExists) {
    notFound();
  }
  
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const breadcrumbs = [
    { name: 'Blog', href: '/blog' },
    { name: title },
  ];

  return (
    <>
      <PageHeader
        title={title}
        description="An in-depth article from the Grittrix team. Full content coming soon."
        breadcrumbs={breadcrumbs}
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-invert mx-auto max-w-3xl">
            <p className="lead">This is a placeholder for a future blog post. In a real application, the content for the blog post with slug "{slug}" would be fetched from a headless CMS or database and rendered here.</p>
            <p>Our blog will feature insights on AI applications, technology trends in emerging markets, and our journey building Grittrix. We'll cover topics ranging from the technical implementation of our AI models to the socio-economic impact of technology in the regions we serve.</p>
            <p>Stay tuned for articles that explore:</p>
            <ul>
                <li>The role of AI in revolutionizing African healthcare.</li>
                <li>How data analytics can empower smallholder farmers.</li>
                <li>The future of e-commerce and retail in emerging economies.</li>
                <li>Challenges and opportunities in deploying tech solutions in low-connectivity environments.</li>
            </ul>
            <p>We believe in sharing knowledge and fostering a community of innovators. We look forward to sharing our stories with you.</p>
          </article>
        </div>
      </section>
    </>
  );
}
