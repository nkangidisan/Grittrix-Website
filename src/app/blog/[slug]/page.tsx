
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
  Sparkles,
  Terminal,
  Activity
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
      <header className="relative py-24 md:py-40 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute inset-0 border-white/5 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <Link href="/blog" className="inline-flex items-center text-cyan-400 mb-16 font-extrabold uppercase tracking-[0.3em] text-[10px] hover:gap-4 transition-all group">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Media Hub
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 px-6 py-2 mb-10 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full">
              {postInfo.category}
            </Badge>
            <h1 className="text-5xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] mb-12">
              {postInfo.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-10 text-gray-500 text-xs font-bold uppercase tracking-widest">
               <span className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center"><User className="h-3 w-3 text-cyan-400" /></div> Grittrix Research Team</span>
               <span className="flex items-center gap-3"><Calendar className="h-4 w-4 text-cyan-400" /> Feb 24, 2025</span>
               <span className="flex items-center gap-3"><Clock className="h-4 w-4 text-cyan-400" /> 8 Min Read</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-32 container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_300px] gap-24">
          {/* Main Body */}
          <article className="prose prose-invert prose-cyan lg:prose-xl max-w-none prose-headings:font-headline prose-headings:font-extrabold prose-headings:tracking-tighter">
            <p className="lead text-2xl text-gray-300 leading-relaxed font-medium italic border-l-4 border-cyan-500 pl-10 py-2">
              This is a premium research article provided by Grittrix Media. We explore the deep technical and socio-economic shifts caused by advanced automation in emerging markets.
            </p>
            
            <div className="relative aspect-video rounded-[3rem] overflow-hidden my-20 border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <Image 
                src={`https://picsum.photos/seed/${slug}/1200/800`}
                alt="Feature visual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 to-transparent" />
            </div>

            <h2 className="text-4xl mb-10">The Interface Layer of Tomorrow</h2>
            <p>
              In our latest study, we found that the gap between high-level AI models and practical industry applications is narrowing faster than ever before. Grittrix is at the forefront of this shift, building the middleware that connects raw compute power to everyday business processes.
            </p>
            
            <div className="bg-white/[0.02] border border-white/5 p-12 my-20 rounded-[2.5rem] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-20"><Sparkles className="text-cyan-400 h-16 w-16" /></div>
               <p className="text-2xl font-bold text-white italic leading-relaxed relative z-10">
                 "Innovation is not just about complexity; it's about accessibility. True AI power comes from how many lives can benefit from it in a single day."
               </p>
               <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center"><Terminal className="w-5 h-5 text-cyan-400" /></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Executive Insight</span>
               </div>
            </div>

            <p>
              Whether it's optimizing retail inventory or diagnosing crops in rural areas, the underlying principle remains the same: context-aware data processing. Stay tuned as we release more detailed findings from our East African labs.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-16">
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] backdrop-blur-xl">
               <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-8">Actions</h3>
               <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-between border-white/10 text-white hover:bg-white/5 h-12 rounded-xl group px-6">
                    Share Post <Share2 className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between border-white/10 text-white hover:bg-white/5 h-12 rounded-xl group px-6">
                    Save Article <Bookmark className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </Button>
               </div>
            </div>

            <div className="p-8 bg-cyan-500/5 border border-cyan-500/10 rounded-[2rem] relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 opacity-10 group-hover:scale-110 transition-transform"><Activity className="h-32 w-32 text-cyan-400" /></div>
               <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-6">Newsletter</h3>
               <p className="text-xs text-gray-400 mb-8 leading-relaxed font-medium">Get our research summaries every Friday morning.</p>
               <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-xs mb-4 outline-none focus:border-cyan-500 transition-all text-white font-bold"
               />
               <Button className="w-full bg-cyan-500 text-black font-extrabold h-12 rounded-xl uppercase tracking-widest text-[10px]">Subscribe</Button>
            </div>
          </aside>
        </div>
      </main>

      {/* Suggested Content */}
      <section className="py-32 bg-white/[0.01] border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter mb-16 flex items-center gap-4">
             <ChevronRight className="text-cyan-400 h-10 w-10" /> More Research
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {posts.filter(p => p.slug !== slug).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-cyan-500/30 transition-all hover:bg-white/[0.04]">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/5">
                  <Image src={`https://picsum.photos/seed/${post.slug}/600/400`} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-headline font-bold text-xl md:text-2xl leading-tight group-hover:text-cyan-400 transition-colors tracking-tight">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-30">
         <p className="text-[9px] font-bold uppercase tracking-[0.5em]">© 2025 GRITTRIX MEDIA ✦ A GRITTRIX AI SOLUTIONS PRODUCTION</p>
      </footer>
    </div>
  );
}
