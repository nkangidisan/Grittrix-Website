
import type { Metadata, ResolvingMetadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { AlertTriangle, CalendarDays, UserCircle, Tag as TagIcon } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/types';

// Define blogPosts data directly in this file
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'ai-in-african-healthcare',
    title: 'The Transformative Power of AI in African Healthcare',
    excerpt: 'Exploring how AI is bridging gaps in healthcare accessibility and diagnostics across Africa. From predictive analytics for disease outbreaks to AI-powered tools for rural clinics, the potential is immense.',
    author: 'Nkangi Disan',
    date: '2024-03-15',
    imageUrl: '/media/AfricanHealthcare.jpg',
    category: 'Healthcare AI',
  },
  {
    id: '2',
    slug: 'future-of-retail-ai',
    title: 'The Future of Retail: Personalized Experiences with AI',
    excerpt: 'AI is revolutionizing the retail sector by enabling hyper-personalized customer experiences, optimizing supply chains, and providing intelligent inventory management. Discover the trends shaping tomorrow\'s retail.',
    author: 'Lubega Mahad',
    date: '2024-04-02',
    imageUrl: '/media/ExperienceswithAI.png',
    category: 'Retail Tech',
  },
  {
    id: '3',
    slug: 'precision-agriculture-africa',
    title: 'Precision Agriculture: AI for Sustainable Farming in Africa',
    excerpt: 'Learn how AI-driven precision agriculture techniques, including drone imagery analysis and predictive soil health models, are empowering African farmers to increase yields sustainably and ensure food security.',
    author: 'Ashumbusha Emmanuel',
    date: '2024-04-20',
    imageUrl: '/media/FarmingAfrica.png',
    category: 'AgriTech',
  },
  {
    id: '4',
    slug: 'ai-edtech-emerging-markets',
    title: 'AI in EdTech: Bridging Educational Gaps in Emerging Markets',
    excerpt: 'Artificial intelligence is set to redefine education in emerging markets by providing personalized learning paths, AI tutors, and data-driven insights for educators, making quality education more accessible.',
    author: 'Juma Bakari',
    date: '2024-05-05',
    imageUrl: '/media/EmergingMarket.jpg',
    category: 'EdTech AI',
  },
];

// Props for generateMetadata
interface GenerateMetadataProps {
  params: { slug: string; };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | Grittrix AI Solutions',
      description: 'The blog post you are looking for could not be found.',
    };
  }
  
  const domain = (await parent).metadataBase || new URL('https://grittrix.com');
  const absoluteImageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : new URL(post.imageUrl, domain).toString();

  return {
    title: `${post.title} | Grittrix Blog`,
    description: post.excerpt,
    openGraph: {
        title: `${post.title} | Grittrix Blog`,
        description: post.excerpt,
        images: [{ url: absoluteImageUrl, alt: post.title }],
        authors: [post.author],
        publishedTime: new Date(post.date).toISOString(),
        tags: [post.category],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${post.title} | Grittrix Blog`,
        description: post.excerpt,
        images: [absoluteImageUrl],
    }
  };
}

export default function BlogPostPage(props: any) { // Changed props type to any
  const params = props?.params;
  const slug = typeof params?.slug === 'string' ? params.slug : undefined;

  if (!slug) {
    console.error("BlogPostPage: slug is missing or invalid from params", params);
    notFound();
  }

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Blog', href: '/blog' },
    { name: post.title }
  ];

  const postContentHtml = post.content || `<p>${post.excerpt}</p><p>More content coming soon for this article. Stay tuned for in-depth insights and discussions on ${post.category}. We are working hard to bring you valuable information and perspectives on the latest advancements and applications of AI in various sectors critical to emerging markets.</p><p>In the meantime, explore our other articles or check out our YouTube channel for more insights into the world of AI and technology tailored for professionals, students, and innovators.</p>`;
  const imageAltText = `Blog post illustration for "${post.title}" by ${post.author} on Grittrix`;

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
                data-ai-hint={`${post.category} technology`}
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

/*
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
*/
