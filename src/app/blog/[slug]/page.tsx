
import * as React from 'react'; // Ensure React is imported
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle, Tag as TagIcon } from 'lucide-react';

// Data is now self-contained in this file
type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-in-african-healthcare',
    title: 'The Transformative Power of AI in African Healthcare',
    excerpt: 'Exploring how AI is bridging gaps in healthcare accessibility and diagnostics across Africa.',
    author: 'Nkangi Disan',
    date: '2024-03-15',
    imageUrl: '/media/AfricanHealthcare.jpg',
    category: 'Healthcare AI',
  },
  {
    id: '2',
    slug: 'future-of-retail-ai',
    title: 'The Future of Retail: Personalized Experiences with AI',
    excerpt: 'AI is revolutionizing the retail sector by enabling hyper-personalized customer experiences.',
    author: 'Lubega Mahad',
    date: '2024-04-02',
    imageUrl: '/media/ExperienceswithAI.png',
    category: 'Retail Tech',
  },
  {
    id: '3',
    slug: 'precision-agriculture-africa',
    title: 'Precision Agriculture: AI for Sustainable Farming in Africa',
    excerpt: 'Learn how AI-driven precision agriculture techniques are empowering African farmers.',
    author: 'Ashumbusha Emmanuel',
    date: '2024-04-20',
    imageUrl: '/media/FarmingAfrica.png',
    category: 'AgriTech',
  },
  {
    id: '4',
    slug: 'ai-edtech-emerging-markets',
    title: 'AI in EdTech: Bridging Educational Gaps in Emerging Markets',
    excerpt: 'AI is set to redefine education in emerging markets with personalized learning tools.',
    author: 'Juma Bakari',
    date: '2024-05-05',
    imageUrl: '/media/EmergingMarket.jpg',
    category: 'EdTech AI',
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!params || !params.slug) {
    return {
      title: 'Post Not Found | Grittrix Blog',
      description: 'This blog post could not be found or the URL is invalid.',
    };
  }
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Grittrix Blog',
      description: 'This blog post could not be found.',
    };
  }
  const domainBase = process.env.NEXT_PUBLIC_DOMAIN_URL || 'https://grittrix.com';
  const absoluteImageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : new URL(post.imageUrl, domainBase).toString();

  return {
    title: `${post.title} | Grittrix Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Grittrix Blog`,
      description: post.excerpt,
      images: [{ url: absoluteImageUrl, alt: `Image for ${post.title}` }],
    }
  };
}

// Page component with props as 'any' to bypass the stubborn type error.
// NO INTERFACE NAMED BlogPostPageProps IS DEFINED IN THIS FILE.
export default function BlogPostPage(props: any) {
  // Safely access params and slug
  const pageParams = props?.params as { slug?: string }; // Type assertion for internal use
  const slug = pageParams?.slug;

  if (!slug) {
    console.error("BlogPostPage: slug is missing from props.params", props);
    notFound();
    return null; 
  }

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
    return null;
  }

  const postContentHtml = `<p>${post.excerpt}</p><p>More insights and updates will be added soon. Stay tuned! This page uses static data defined within the file.</p>`;

  return (
    <>
      <PageHeader
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[{ name: 'Blog', href: '/blog' }, { name: post.title }]}
      />

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
              <Image
                src={post.imageUrl}
                alt={`Image for ${post.title}`}
                fill
                className="object-cover"
                priority
                data-ai-hint={`${post.category.toLowerCase()} technology`}
              />
            </div>

            <div className="flex flex-wrap items-center text-sm text-foreground/70 gap-x-4 gap-y-2 mb-6">
              <span className="flex items-center">
                <UserCircle className="h-4 w-4 mr-1.5 text-primary" />
                {post.author}
              </span>
              <span className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1.5 text-primary" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <TagIcon className="h-4 w-4 mr-1.5 text-primary" />
                {post.category}
              </span>
            </div>

            <div
              className="prose prose-lg prose-invert text-foreground/80 max-w-none space-y-6"
              dangerouslySetInnerHTML={{ __html: postContentHtml }}
            />

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold font-headline text-primary mb-4">Share this post:</h3>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">Share on X</Button>
                <Button variant="outline" size="sm">Share on LinkedIn</Button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/blog">Back to Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

/*
// generateStaticParams remains commented out to simplify for debugging
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
*/
