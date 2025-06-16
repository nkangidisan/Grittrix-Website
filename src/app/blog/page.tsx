
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { BlogPost } from '@/lib/types';
import { CalendarDays, UserCircle, Tag, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Grittrix Insights Blog | AI, Technology & Innovation',
  description: 'Explore Grittrix\'s thoughts on AI, technology, and innovation in emerging markets. Stay updated with the latest trends, research, and Grittrix news.',
};

// Placeholder blog posts data
export const blogPosts: BlogPost[] = [
  { id: '1', slug: 'ai-in-african-healthcare', title: 'The Transformative Power of AI in African Healthcare', excerpt: 'Discover how AI is revolutionizing diagnostics, treatment, and healthcare accessibility across the African continent.', author: 'Dr. Aisha Bello', date: '2024-07-15', imageUrl: '/media/health.webp', category: 'Healthcare' },
  { id: '2', slug: 'future-of-retail-ai', title: 'The Future of Retail: Personalized Experiences with AI', excerpt: 'Explore how AI-driven personalization, supply chain optimization, and smart analytics are reshaping the retail industry in emerging markets.', author: 'Ken Njoroge', date: '2024-07-08', imageUrl: '/media/retail.png', category: 'Retail' },
  { id: '3', slug: 'precision-agriculture-africa', title: 'Precision Agriculture: AI for Sustainable Farming in Africa', excerpt: 'Learn about the role of AI in optimizing crop yields, managing resources efficiently, and promoting sustainable agricultural practices.', author: 'Fatima Diallo', date: '2024-06-28', imageUrl: '/media/agriculture.jpg', category: 'Agriculture' },
  { id: '4', slug: 'ai-edtech-emerging-markets', title: 'AI in EdTech: Bridging Educational Gaps in Emerging Markets', excerpt: 'How adaptive learning platforms and AI-powered tools are personalizing education and improving learning outcomes.', author: 'Rajesh Kumar', date: '2024-06-15', imageUrl: '/media/education-section.jpg', category: 'Education' },
];

const youtubeVideos = [
  { id: 'OdloIv_IX4k', title: 'AI for African Startups', description: 'Exploring AI integration in African startups for growth and innovation.'},
  { id: '5bhyUcnwuEs', title: 'Tech Trends in Emerging Markets', description: 'A look at key technology trends shaping the future of emerging economies.'},
  { id: 'rSq-vQG4dCA', title: 'Building Scalable AI Solutions', description: 'Insights into developing AI solutions that can scale effectively.'},
  { id: 'HhIYJZ56vik', title: 'AI Ethics in the Global South', description: 'Discussing the ethical considerations of AI in developing regions.'},
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

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                 <Youtube className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
              🎥 AI in White Coats — Learn, Build & Stay Ahead in Tech
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Explore expert-led tutorials, explainers, and thought leadership content from our YouTube channel. We simplify how to use powerful AI tools and break down the latest changes in the tech world — tailored for professionals, students, and innovators in Africa and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {youtubeVideos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-background/50 p-1 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden rounded-md group-hover:scale-105 transition-transform duration-300">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title || "YouTube video player"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-md"
                    loading="lazy"
                  ></iframe>
                </div>
                 <div className="p-4">
                    <h3 className="text-md font-semibold text-primary mb-1 truncate group-hover:text-primary/90">{video.title}</h3>
                    <p className="text-xs text-foreground/70 line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in animation-delay-300">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="https://www.youtube.com/@AI_in_White_Coats" target="_blank" rel="noopener noreferrer">
                Visit Channel on YouTube
                <Youtube className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-12">
        <Separator />
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-12 text-center">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="flex flex-col h-full bg-card overflow-hidden group hover:shadow-xl transition-shadow animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="p-0">
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-video w-full">
                    <Image
                      src={post.imageUrl} 
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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

          <div className="mt-16 text-center">
            <Button variant="ghost" className="text-accent hover:text-accent/90 hover:bg-accent/10">Load More Articles</Button>
          </div>
        </div>
      </section>
    </>
  );
}

    