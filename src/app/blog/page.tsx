
'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Youtube, 
  Play, 
  Clock, 
  Eye, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Code, 
  Globe, 
  Monitor, 
  Cpu,
  ChevronRight,
  Mail,
  TrendingUp,
  Newspaper
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// --- DATA ---

const youtubeVideos = [
  { id: 'OdloIv_IX4k', title: 'AI for African Startups', views: '12K', date: '2 days ago', duration: '12:45', category: 'Strategy' },
  { id: '5bhyUcnwuEs', title: 'Tech Trends in Emerging Markets', views: '8.4K', date: '1 week ago', duration: '15:20', category: 'Trends' },
  { id: 'rSq-vQG4dCA', title: 'Building Scalable AI Solutions', views: '5.1K', date: '2 weeks ago', duration: '10:15', category: 'Dev' },
  { id: 'HhIYJZ56vik', title: 'AI Ethics in the Global South', views: '3.2K', date: '1 month ago', duration: '18:50', category: 'Insights' },
];

const blogPosts = [
  { 
    slug: 'ai-in-africa', 
    title: 'The AI Revolution in Africa', 
    excerpt: 'Exploring how localized AI models are transforming industries from Lagos to Nairobi.',
    author: 'Nkangi Disan',
    date: 'Feb 24, 2025',
    readTime: '6 min read',
    image: 'https://picsum.photos/seed/ai-africa/800/600',
    category: 'Future Tech'
  },
  { 
    slug: 'future-of-retail-tech', 
    title: 'Smart Retail: Beyond E-commerce', 
    excerpt: 'How computer vision and predictive analytics are saving brick-and-mortar stores.',
    author: 'Achen Linet',
    date: 'Feb 20, 2025',
    readTime: '5 min read',
    image: 'https://picsum.photos/seed/retail/800/600',
    category: 'Automation'
  },
  { 
    slug: 'democratizing-data', 
    title: 'Democratizing Data in Emerging Markets', 
    excerpt: 'Breaking down the barriers to high-quality data collection and processing.',
    author: 'Lubega Mahad',
    date: 'Feb 15, 2025',
    readTime: '8 min read',
    image: 'https://picsum.photos/seed/data/800/600',
    category: 'SaaS'
  },
];

const categories = [
  { name: 'AI Tools', icon: Cpu },
  { name: 'Automation', icon: Zap },
  { name: 'SaaS', icon: Globe },
  { name: 'Startup Growth', icon: TrendingUp },
  { name: 'Web Dev', icon: Code },
  { name: 'Future Tech', icon: Sparkles },
];

// --- COMPONENTS ---

const Ticker = () => (
  <div className="bg-cyan-500/10 border-y border-cyan-500/20 py-3 overflow-hidden whitespace-nowrap">
    <motion.div 
      animate={{ x: [0, -1000] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
          TRENDING NOW ✦ AI AGENTS ✦ ZERO FRICTION ✦ AUTOMATION 2.0 ✦ GRITTRIX MEDIA ✦
        </span>
      ))}
    </motion.div>
  </div>
);

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  return (
    <div className="bg-[#050816] text-foreground min-h-screen font-body overflow-x-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100" />
          <div className="absolute inset-0 border-b border-white/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
          >
            <Sparkles className="h-3 w-3 text-cyan-400" />
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Innovation Hub</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-headline font-extrabold tracking-tighter leading-none mb-8"
          >
            AI Media.<br />
            Innovation. <span className="text-cyan-400 animate-text-glow">The Future.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Grittrix builds AI systems, automation, websites, and digital experiences that produce real results. Explore our research and insights.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 h-14 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
              Watch Content <Youtube className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 h-14 px-10 rounded-full">
              Explore Articles
            </Button>
          </motion.div>
        </div>
      </section>

      <Ticker />

      {/* 2. FEATURED YOUTUBE (NETFLIX STYLE) */}
      <section className="py-24 bg-[#050816]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
              <Youtube className="text-red-500" /> Latest from Grittrix Media
            </h2>
            <Link href="https://www.youtube.com/@grittrix" target="_blank" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1 font-medium">
              View Channel <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {youtubeVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/5">
                  <Image 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-12 w-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Play className="h-6 w-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-1.5 py-0.5 bg-black/80 backdrop-blur-md rounded text-[10px] font-bold text-white">
                    {video.duration}
                  </div>
                </div>
                <Badge className="bg-cyan-500/10 text-cyan-400 border-none mb-2 text-[9px] uppercase tracking-widest">{video.category}</Badge>
                <h3 className="text-lg font-headline font-bold leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">{video.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                   <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {video.views}</span>
                   <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {video.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES SECTION */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
             {['All', ...categories.map(c => c.name)].map((cat) => (
               <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all border ${
                  activeCategory === cat 
                  ? 'bg-cyan-500 border-cyan-500 text-black shadow-lg shadow-cyan-500/20' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-cyan-500/50 hover:text-white'
                }`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* 4. BLOG GRID (GLASSMORPHISM) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-4 h-full transition-all group-hover:bg-white/[0.06] group-hover:border-cyan-500/50 group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black/60 backdrop-blur-md text-white border-none px-3 py-1">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="space-y-4 px-2">
                      <div className="flex items-center gap-3 text-xs text-cyan-400 font-bold uppercase tracking-widest">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-headline font-bold leading-tight text-white group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="pt-4 flex items-center justify-between border-t border-white/5">
                         <span className="text-xs text-gray-500 font-medium italic">By {post.author}</span>
                         <ArrowRight className="h-5 w-5 text-cyan-400 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI INSIGHTS & SERVICES BANNER */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
               {/* Insights Column */}
               <div className="lg:col-span-1 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden group">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl" />
                  <h2 className="text-3xl font-headline font-bold mb-8 flex items-center gap-3">
                    <Sparkles className="text-cyan-400" /> AI Insights
                  </h2>
                  <div className="space-y-6">
                     {[
                       'Localizing LLMs for African dialects.',
                       'Edge AI: The future of remote diagnostics.',
                       'Automating multi-currency payment reconciliation.'
                     ].map((insight, i) => (
                       <div key={i} className="flex gap-4 group/item cursor-default">
                          <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400 font-bold text-[10px]">
                            {i+1}
                          </div>
                          <p className="text-sm text-gray-300 group-hover/item:text-cyan-400 transition-colors">{insight}</p>
                       </div>
                     ))}
                  </div>
                  <Button variant="link" className="mt-8 p-0 h-auto text-cyan-400 font-bold group-hover:gap-2 transition-all">
                    Read Research Papers <ArrowRight className="h-4 w-4" />
                  </Button>
               </div>

               {/* Services CTA Banner */}
               <div className="lg:col-span-2 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-10 flex flex-col justify-center relative group">
                  <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Build the Future <br />With Grittrix.</h2>
                    <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
                      We develop custom AI agents, automation systems, high-end websites, and SaaS platforms that scale with your vision.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                       {[
                         { l: 'AI Agents', i: Cpu },
                         { l: 'Automation', i: Zap },
                         { l: 'Web Apps', i: Monitor },
                         { l: 'Branding', i: Sparkles },
                         { l: 'SaaS Systems', i: Globe },
                         { l: 'Mobile Apps', i: Zap },
                       ].map((s, i) => (
                         <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-white transition-colors">
                            <s.i className="h-3 w-3 text-cyan-400" /> {s.l}
                         </div>
                       ))}
                    </div>
                    <Button size="lg" className="bg-white text-black hover:bg-cyan-500 hover:text-black font-bold rounded-full h-14 px-8 w-fit">
                      Start Your Project
                    </Button>
                  </div>
                  <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                     <Cpu className="w-full h-full text-cyan-400" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. NEWSLETTER CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex p-4 bg-cyan-500/10 rounded-2xl mb-8">
            <Mail className="h-10 w-10 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Join the Future of AI.</h2>
          <p className="text-lg text-gray-400 mb-10">
            Get the latest research, tech tutorials, and automation strategies delivered to your inbox every week.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-cyan-500 transition-all text-white"
            />
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full h-14 px-8">
              Subscribe
            </Button>
          </form>
          <p className="text-[10px] text-gray-600 mt-6 uppercase tracking-widest font-bold">
            No Spam. Just Innovation. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* 7. FOOTER OVERRIDE SYNC */}
      <footer className="py-12 border-t border-white/5 bg-[#050816]">
        <div className="container mx-auto px-4 text-center">
           <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
             © 2025 Grittrix Media ✦ A Grittrix AI Solutions Production
           </p>
        </div>
      </footer>
    </div>
  );
}
