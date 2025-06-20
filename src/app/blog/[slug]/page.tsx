
import * as React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, UserCircle, Tag as TagIcon } from 'lucide-react';

import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';

// Moved blogPosts data directly into this file for self-containment
const blogPosts = [
  {
    slug: 'ai-in-african-healthcare',
    title: 'The Transformative Power of AI in African Healthcare',
    excerpt: 'Exploring how AI is bridging gaps in healthcare accessibility across Africa.',
    author: 'Nkangi Disan',
    date: '2024-03-15',
    imageUrl: '/media/AfricanHealthcare.jpg',
    category: 'Healthcare AI',
    contentHtml: '<p>Detailed content about AI in African Healthcare will explore how machine learning algorithms are being used for diagnostics, patient data management, and resource allocation in various African countries. It will also touch upon challenges like data privacy, infrastructure, and the need for localized solutions.</p><p>Grittrix is at the forefront, developing AI tools that are specifically designed to address these unique challenges, aiming to make healthcare more accessible and efficient across the continent. Our solutions focus on empowering local healthcare professionals with cutting-edge technology.</p>'
  },
  {
    slug: 'future-of-retail-ai',
    title: 'The Future of Retail: Personalized Experiences with AI',
    excerpt: 'AI is revolutionizing retail with hyper-personalized customer experiences.',
    author: 'Lubega Mahad',
    date: '2024-04-02',
    imageUrl: '/media/ExperienceswithAI.png',
    category: 'Retail Tech',
    contentHtml: '<p>The retail sector is undergoing a massive transformation, thanks to Artificial Intelligence. This post delves into how AI is enabling businesses to offer hyper-personalized shopping experiences, optimize supply chains, manage inventory effectively, and improve customer engagement through smart chatbots and recommendation engines.</p><p>Grittrix provides AI-powered retail solutions that help businesses understand customer behavior, predict trends, and automate key operations, ultimately driving sales and customer loyalty in competitive markets.</p>'
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params?.slug;

  if (!slug) {
    return {
      title: 'Post Not Found | Grittrix AI Solutions',
      description: 'The requested blog post could not be found or the URL is invalid.',
    };
  }
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Grittrix AI Solutions',
      description: `The blog post with slug "${slug}" does not exist.`,
    };
  }

  return {
    title: `${post.title} | Grittrix Blog`,
    description: post.excerpt,
  };
}

// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

export default function BlogPostPage(props: any) {
  const params = props?.params;
  const slug = params?.slug as string | undefined;

  if (!slug) {
    notFound();
    return null;
  }

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
    return null;
  }

  return (
    <>
      <PageHeader
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[{ name: 'Blog', href: '/blog' }, { name: post.title }]}
      />

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                data-ai-hint={`${post.category.toLowerCase()} technology`}
              />
            </div>

            <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-4 gap-y-2 mb-6">
              <span className="flex items-center">
                <UserCircle className="h-4 w-4 mr-1.5 text-primary" />
                {post.author}
              </span>
              <span className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1.5 text-primary" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <Link href={`/blog?category=${encodeURIComponent(post.category)}`} className="flex items-center hover:text-primary transition-colors">
                <TagIcon className="h-4 w-4 mr-1.5 text-primary" />
                {post.category}
              </Link>
            </div>

            <div className="prose prose-lg prose-invert text-foreground/90 max-w-none space-y-6" dangerouslySetInnerHTML={{ __html: post.contentHtml || `<p>${post.excerpt}</p><p>More in-depth content will be added soon. Stay tuned!</p>` }} />
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/blog">← Back to Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
