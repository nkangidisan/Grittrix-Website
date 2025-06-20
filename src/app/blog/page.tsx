
import * as React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Grittrix Insights | AI, Technology & Innovation',
  description: 'Explore Grittrix\'s thoughts on AI, technology, and innovation in emerging markets. Stay updated with the latest trends, research, and Grittrix news.',
};

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
        description="Explore our thoughts on AI, technology, and innovation in emerging markets. Stay updated with the latest trends, research, and Grittrix news through our video content."
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
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://www.youtube.com/@AI_in_White_Coats" target="_blank" rel="noopener noreferrer">
                <span>
                  Visit Channel on YouTube
                  <Youtube className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8 md:my-12">
        <Separator />
      </div>

    </>
  );
}
