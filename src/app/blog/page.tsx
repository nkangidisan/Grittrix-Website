
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost } from '@/lib/types';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Placeholder blog posts data
export const blogPosts: BlogPost[] = [
  { id: '1', slug: 'ai-in-african-healthcare', title: 'The Transformative Power of AI in African Healthcare', excerpt: 'Discover how AI is revolutionizing diagnostics, treatment, and healthcare accessibility across the African continent.', author: 'Dr. Aisha Bello', date: '2024-07-15', imageUrl: 'https://placehold.co/400x250.png', imageHint: 'health vector', category: 'Healthcare' },
  { id: '2', slug: 'future-of-retail-ai', title: 'The Future of Retail: Personalized Experiences with AI', excerpt: 'Explore how AI-driven personalization, supply chain optimization, and smart analytics are reshaping the retail industry in emerging markets.', author: 'Ken Njoroge', date: '2024-07-08', imageUrl: 'https://placehold.co/400x250.png', imageHint: 'retail vector', category: 'Retail' },
  { id: '3', slug: 'precision-agriculture-africa', title: 'Precision Agriculture: AI for Sustainable Farming in Africa', excerpt: 'Learn about the role of AI in optimizing crop yields, managing resources efficiently, and promoting sustainable agricultural practices.', author: 'Fatima Diallo', date: '2024-06-28', imageUrl: 'https://placehold.co/400x250.png', imageHint: 'agritech vector', category: 'Agriculture' },
  { id: '4', slug: 'ai-edtech-emerging-markets', title: 'AI in EdTech: Bridging Educational Gaps in Emerging Markets', excerpt: 'How adaptive learning platforms and AI-powered tools are personalizing education and improving learning outcomes.', author: 'Rajesh Kumar', date: '2024-06-15', imageUrl: 'https://placehold.co/400x250.png', imageHint: 'edtech vector', category: 'Education' },
];


export default function BlogPage() {
  const breadcrumbs = [{ name: 'Blog' }];

  return (
    <>
      <PageHeader
        title="Grittrix Insights"
        description="Explore our thoughts on AI, technology, and innovation in emerging markets. Stay updated with the latest trends, research, and Grittrix news."
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full bg-card overflow-hidden group hover:shadow-xl transition-shadow">
                <CardHeader className="p-0">
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-video w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={post.imageHint}
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="mb-2 text-xs text-accent font-semibold uppercase tracking-wider flex items-center">
                     <Tag className="h-3.5 w-3.5 mr-1.5" /> {post.category}
                  </div>
                  <CardTitle className="font-headline text-xl text-primary mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:underline group-hover:text-primary/90 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm text-foreground/70 line-clamp-3 mb-3">{post.excerpt}</CardDescription>
                  <div className="text-xs text-foreground/60 flex flex-wrap gap-x-4 gap-y-1">
                    <span className="flex items-center"><UserCircle className="h-3.5 w-3.5 mr-1" /> {post.author}</span>
                    <span className="flex items-center"><CalendarDays className="h-3.5 w-3.5 mr-1" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                   <Button variant="outline" asChild className="w-full hover:bg-primary/10 hover:text-primary border-primary/50 text-primary">
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                   </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {/* Placeholder for pagination or load more */}
          <div className="mt-16 text-center">
            <Button variant="ghost" className="text-accent hover:text-accent/90 hover:bg-accent/10">Load More Articles</Button>
          </div>
        </div>
      </section>
    </>
  );
}
