
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Bookmark,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';

// Mock post lookup
const posts = [
  { slug: 'ai-in-africa', title: 'The AI Revolution in Africa', category: 'Future Tech' },
  { slug: 'future-of-retail-tech', title: 'Smart Retail: Beyond E-commerce', category: 'Automation' },
  { slug: 'democratizing-data', title: 'Democratizing Data in Emerging Markets', category: 'SaaS' }
];

interface BlogSlugPageProps {
  params: { slug: string };
}

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = params;
  const postInfo = posts.find(p => p.slug === slug);

  if (!postInfo) {
    notFound();
  }

  return (
    <div className="bg-[#050816] text-foreground min-h-screen font-body overflow-x-hidden pt-20">
      {/* Cinematic Article Header */}
      <header className="relative py-24 md:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 border-white/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-cyan-400 mb-12 font-bold uppercase tracking-widest text-[10px] hover:gap-2 transition-all">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Media Hub
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-cyan-500/10 text-cyan-400 border-none px-4 py-1.5 mb-6 text-[10px] uppercase tracking-widest font-bold">
              {postInfo.category}
            </Badge>
            <h1 className="text-4xl md:text-7xl font-headline font-extrabold tracking-tighter leading-tight mb-8">
              {postInfo.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm font-medium">
               <span className="flex items-center gap-2"><User className="h-4 w-4 text-cyan-400" /> Grittrix Research Team</span>
               <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-cyan-400" /> Feb 24, 2025</span>
               <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-cyan-400" /> 8 Min Read</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="grid lg:grid-cols-[1fr_250px] gap-16">
          {/* Main Body */}
          <article className="prose prose-invert prose-cyan lg:prose-xl max-w-none">
            <p className="lead text-xl text-gray-300 leading-relaxed italic">
              This is a premium research article provided by Grittrix Media. We explore the deep technical and socio-economic shifts caused by advanced automation in emerging markets.
            </p>
            
            <div className="relative aspect-video rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
              <Image 
                src={`https://picsum.photos/seed/${slug}/1200/800`}
                alt="Feature visual"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-headline font-bold text-3xl mb-6">The Interface Layer of Tomorrow</h2>
            <p>
              In our latest study, we found that the gap between high-level AI models and practical industry applications is narrowing faster than ever before. Grittrix is at the forefront of this shift, building the middleware that connects raw compute power to everyday business processes.
            </p>
            
            <div className="bg-white/[0.03] border-l-4 border-cyan-500 p-8 my-12 rounded-r-2xl">
               <Sparkles className="text-cyan-400 mb-4" />
               <p className="text-lg font-medium text-white italic">
                 "Innovation is not just about complexity; it's about accessibility. True AI power comes from how many lives can benefit from it in a single day."
               </p>
            </div>

            <p>
              Whether it's optimizing retail inventory or diagnosing crops in rural areas, the underlying principle remains the same: context-aware data processing. Stay tuned as we release more detailed findings from our East African labs.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
               <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-6">Actions</h3>
               <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start border-white/10 text-white hover:bg-white/5">
                    <Share2 className="mr-2 h-4 w-4" /> Share Post
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-white/10 text-white hover:bg-white/5">
                    <Bookmark className="mr-2 h-4 w-4" /> Save Article
                  </Button>
               </div>
            </div>

            <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
               <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4">Newsletter</h3>
               <p className="text-xs text-gray-400 mb-6">Get our research summaries every Friday.</p>
               <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs mb-4 outline-none focus:border-cyan-500"
               />
               <Button size="sm" className="w-full bg-cyan-500 text-black font-bold">Subscribe</Button>
            </div>
          </aside>
        </div>
      </main>

      {/* Suggested Content */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-headline font-bold mb-12 flex items-center gap-3">
             <ChevronRight className="text-cyan-400" /> More from Grittrix Media
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.filter(p => p.slug !== slug).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block p-4 bg-white/[0.03] border border-white/5 rounded-2xl hover:border-cyan-500/50 transition-all">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                  <Image src={`https://picsum.photos/seed/${post.slug}/400/250`} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-headline font-bold text-lg leading-tight group-hover:text-cyan-400 transition-colors">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 opacity-40">
         <p className="text-[10px] font-bold uppercase tracking-widest">© 2025 Grittrix Media Production</p>
      </footer>
    </div>
  );
}
