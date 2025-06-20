import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { CalendarDays, UserCircle, Tag as TagIcon } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-in-african-healthcare',
    title: 'The Transformative Power of AI in African Healthcare',
    excerpt: 'Exploring how AI is bridging gaps in healthcare accessibility and diagnostics across Africa...',
    author: 'Nkangi Disan',
    date: '2024-03-15',
    imageUrl: '/media/AfricanHealthcare.jpg',
    category: 'Healthcare AI',
  },
  {
    id: '2',
    slug: 'future-of-retail-ai',
    title: 'The Future of Retail: Personalized Experiences with AI',
    excerpt: 'AI is revolutionizing the retail sector by enabling hyper-personalized customer experiences...',
    author: 'Lubega Mahad',
    date: '2024-04-02',
    imageUrl: '/media/ExperienceswithAI.png',
    category: 'Retail Tech',
  },
  {
    id: '3',
    slug: 'precision-agriculture-africa',
    title: 'Precision Agriculture: AI for Sustainable Farming in Africa',
    excerpt: 'Learn how AI-driven precision agriculture techniques are empowering African farmers...',
    author: 'Ashumbusha Emmanuel',
    date: '2024-04-20',
    imageUrl: '/media/FarmingAfrica.png',
    category: 'AgriTech',
  },
  {
    id: '4',
    slug: 'ai-edtech-emerging-markets',
    title: 'AI in EdTech: Bridging Educational Gaps in Emerging Markets',
    excerpt: 'AI is redefining education in emerging markets through personalized learning tools...',
    author: 'Juma Bakari',
    date: '2024-05-05',
    imageUrl: '/media/EmergingMarket.jpg',
    category: 'EdTech AI',
  },
];

// ✅ FIXED: No parent / ResolvingMetadata
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Grittrix AI Solutions',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  return {
    title: `${post.title} | Grittrix Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: 'Blog', href: '/blog' },
    { name: post.title },
  ];

  const postContentHtml = `
    <p>${post.excerpt}</p>
    <p>More content coming soon for this article. Stay tuned for in-depth insights and discussions on ${post.category}.</p>
  `;

  const imageAltText = `Blog post illustration for "${post.title}" by ${post.author}`;

  return (
    <>
      <PageHeader
        title={post.title}
        description={post.excerpt}
        breadcrumbs={breadcrumbs}
      />

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl mb-8">
              <Image
                src={post.imageUrl}
                alt={imageAltText}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap items-center text-sm text-foreground/70 gap-x-4 gap-y-2 mb-6">
              <span className="flex items-center"><UserCircle className="h-4 w-4 mr-1.5 text-primary" /> {post.author}</span>
              <span className="flex items-center"><CalendarDays className="h-4 w-4 mr-1.5 text-primary" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center"><TagIcon className="h-4 w-4 mr-1.5 text-primary" /> {post.category}</span>
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
                <Link href="/blog"><span>Back to Blog</span></Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
