
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
  Newspaper,
  Terminal,
  Activity
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// --- DATA ---

const youtubeVideos = [
  { id: '2qk91cRtz1A', title: 'Mastering AI Automation: The 2025 Blueprint', views: '14.2K', date: '2 days ago', duration: '15:40', category: 'Tutorial' },
  { id: 'HdNCDXr9pCA', title: 'The Grittrix Engineering Vision: Building for Impact', views: '9.8K', date: '5 days ago', duration: '12:15', category: 'Culture' },
  { id: 'Y9fCMH7e1t8', title: 'Scaling Beyond Boundaries in Emerging Markets', views: '7.1K', date: '1 week ago', duration: '18:30', category: 'Strategy' },
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
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
          TRENDING NOW ✦ AI AGENTS ✦ ZERO FRICTION ✦ AUTOMATION 2.0 ✦ GRITTRIX MEDIA ✦ 2025 VISION ✦
        </span>
      ))}
    </motion.div>
  </div>
);

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const videoSectionRef = React.useRef<HTMLElement>(null);
  const articleSectionRef = React.useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#050816] text-foreground min-h-screen font-body overflow-x-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-150" />
          <div className="absolute inset-0 border-b border-white/5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8 backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 text-cyan-400" />
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.2em]">Innovation Hub 4.0</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-6xl md:text-9xl font-headline font-extrabold tracking-tighter leading-none mb-10"
          >
            AI Media.<br />
            Innovation. <span className="text-cyan-400 animate-text-glow relative">The Future.
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto mb-14 leading-relaxed font-medium"
          >
            Grittrix builds AI systems, automation, websites, and digital experiences that produce real results. Explore our research and cinematic insights.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button 
              onClick={() => scrollToSection(videoSectionRef)}
              size="lg" 
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-12 h-16 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105 active:scale-95"
            >
              Watch Content <Youtube className="ml-2 h-6 w-6" />
            </Button>
            <Button 
              onClick={() => scrollToSection(articleSectionRef)}
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 h-16 px-12 rounded-full font-bold transition-all backdrop-blur-sm"
            >
              Explore Articles
            </Button>
          </motion.div>
        </div>
      </section>

      <Ticker />

      {/* 2. FEATURED YOUTUBE (NETFLIX STYLE) */}
      <section ref={videoSectionRef} className="py-32 bg-[#050816] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <Badge className="bg-red-500/10 text-red-500 border-none px-3 py-1 font-bold text-[10px] tracking-widest uppercase">Stream Now</Badge>
              <h2 className="text-4xl md:text-6xl font-headline font-bold flex items-center gap-4 tracking-tighter">
                <Youtube className="text-red-500 h-10 w-10 md:h-14 md:w-14" /> Grittrix Media
              </h2>
            </div>
            <Link 
              href="https://www.youtube.com/@grittrix" 
              target="_blank" 
              className="group text-lg text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]"
            >
              Enter Official Channel <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {youtubeVideos.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link href={`https://youtu.be/${video.id}`} target="_blank">
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5 shadow-2xl">
                    <Image 
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                      <div className="h-16 w-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white fill-current" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/90 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/10">
                      {video.duration}
                    </div>
                  </div>
                  <Badge className="bg-cyan-500/10 text-cyan-400 border-none mb-3 text-[10px] font-bold uppercase tracking-widest">{video.category}</Badge>
                  <h3 className="text-xl md:text-2xl font-headline font-bold leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2 tracking-tight">{video.title}</h3>
                  <div className="flex items-center gap-4 mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Eye className="h-4 w-4 text-cyan-400" /> {video.views}</span>
                    <Separator orientation="vertical" className="h-3 bg-white/10" />
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-cyan-400" /> {video.date}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES SECTION */}
      <section className="py-16 border-y border-white/5 bg-white/[0.01] backdrop-blur-3xl sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
             {['All', ...categories.map(c => c.name)].map((cat) => (
               <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat 
                  ? 'bg-cyan-500 border-cyan-500 text-black shadow-lg shadow-cyan-500/30 scale-105' 
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
      <section ref={articleSectionRef} className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
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
                  <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 h-full transition-all group-hover:bg-white/[0.05] group-hover:border-cyan-500/40 group-hover:shadow-[0_40px_100px_rgba(6,182,212,0.1)]">
                    <div className="relative aspect-[16/11] rounded-[2rem] overflow-hidden mb-8 border border-white/5">
                      <Image 
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute top-5 left-5">
                        <Badge className="bg-black/70 backdrop-blur-xl text-white border-white/10 px-4 py-1.5 font-bold rounded-full text-[10px] uppercase tracking-widest">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="space-y-6 px-2">
                      <div className="flex items-center gap-4 text-[10px] text-cyan-400 font-bold uppercase tracking-[0.2em]">
                        <span>{post.date}</span>
                        <span className="w-1.5 h-1.5 bg-cyan-400/20 rounded-full" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-3xl font-headline font-bold leading-[1.1] text-white group-hover:text-cyan-400 transition-colors tracking-tighter">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-medium">
                        {post.excerpt}
                      </p>
                      <div className="pt-6 flex items-center justify-between border-t border-white/5">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                              <Terminal className="w-4 h-4 text-cyan-400" />
                           </div>
                           <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{post.author}</span>
                         </div>
                         <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                           <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                         </div>
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
      <section className="py-32 relative overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
               {/* Insights Column */}
               <div className="lg:col-span-1 bg-cyan-500/[0.03] backdrop-blur-3xl border border-cyan-500/20 rounded-[3rem] p-10 relative overflow-hidden group">
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px]" />
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                  
                  <h2 className="text-3xl md:text-4xl font-headline font-bold mb-10 flex items-center gap-4 tracking-tighter">
                    <Activity className="text-cyan-400 h-8 w-8" /> AI Insights
                  </h2>
                  <div className="space-y-8">
                     {[
                       { t: 'Localizing LLMs', d: 'Adapting language models for deep African dialect support.' },
                       { t: 'Edge Processing', d: 'The future of remote diagnostics with low-latency edge AI.' },
                       { t: 'Automation 2.0', d: 'Seamless multi-currency payment reconciliation engines.' }
                     ].map((insight, i) => (
                       <div key={i} className="flex gap-6 group/item cursor-default">
                          <div className="h-8 w-8 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 text-cyan-400 font-bold text-xs border border-cyan-500/20">
                            {i+1}
                          </div>
                          <div>
                            <p className="text-white font-bold text-sm mb-1 group-hover/item:text-cyan-400 transition-colors uppercase tracking-widest">{insight.t}</p>
                            <p className="text-xs text-gray-400 leading-relaxed font-medium">{insight.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
                  <Button variant="link" className="mt-12 p-0 h-auto text-cyan-400 font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                    Access Research Papers <ArrowRight className="h-4 w-4" />
                  </Button>
               </div>

               {/* Services CTA Banner */}
               <div className="lg:col-span-2 bg-gradient-to-br from-cyan-900/40 via-[#050816] to-purple-900/40 border border-white/10 rounded-[3rem] p-12 md:p-16 flex flex-col justify-center relative group overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                  
                  <div className="relative z-10">
                    <Badge className="bg-cyan-500 text-black border-none px-4 py-1 font-bold text-[10px] tracking-widest uppercase mb-6">Build With Us</Badge>
                    <h2 className="text-5xl md:text-7xl font-headline font-bold mb-8 tracking-tighter leading-[0.9]">
                      Build the Future <br />With <span className="text-cyan-400">Grittrix.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-medium">
                      We develop custom AI agents, automation systems, high-end websites, and SaaS platforms that scale with your vision.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                       {[
                         { l: 'AI Agents', i: Cpu },
                         { l: 'Automation', i: Zap },
                         { l: 'Web Apps', i: Monitor },
                         { l: 'Branding', i: Sparkles },
                         { l: 'SaaS Systems', i: Globe },
                         { l: 'Mobile Apps', i: Newspaper },
                       ].map((s, i) => (
                         <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">
                            <s.i className="h-4 w-4 text-cyan-400" /> {s.l}
                         </div>
                       ))}
                    </div>
                    <Button size="lg" className="bg-white text-black hover:bg-cyan-500 hover:text-black font-bold rounded-full h-16 px-12 w-fit text-lg transition-all" asChild>
                      <Link href="/contact">Start Your Project</Link>
                    </Button>
                  </div>
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 opacity-5 group-hover:opacity-10 transition-opacity">
                     <Cpu className="w-full h-full text-cyan-400 rotate-12" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. NEWSLETTER CTA */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-cyan-500/[0.02] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex p-6 bg-cyan-500/10 rounded-[2rem] mb-10 border border-cyan-500/20"
          >
            <Mail className="h-12 w-12 text-cyan-400" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold mb-8 tracking-tighter leading-none">Join the <span className="text-cyan-400">Movement.</span></h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 font-medium leading-relaxed">
            Get the latest research, tech tutorials, and automation strategies delivered to your inbox every week.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="name@email.com" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-cyan-500 transition-all text-white font-bold"
              required
            />
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold rounded-full h-16 px-10 text-sm uppercase tracking-widest">
              Subscribe
            </Button>
          </form>
          <p className="text-[10px] text-gray-600 mt-8 uppercase tracking-[0.4em] font-bold">
            Zero Spam. Maximum Innovation.
          </p>
        </div>
      </section>

      {/* 7. FOOTER OVERRIDE SYNC */}
      <footer className="py-16 border-t border-white/5 bg-[#050816]">
        <div className="container mx-auto px-4 text-center">
           <div className="flex flex-col items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.5em] font-bold">
                  GRITTRIX MEDIA ✦ PRODUCTION 2025
                </p>
             </div>
             <div className="flex gap-8 opacity-40 hover:opacity-100 transition-opacity">
               <Link href="https://x.com/grittrix" className="hover:text-cyan-400 transition-colors"><TrendingUp className="w-5 h-5" /></Link>
               <Link href="https://www.linkedin.com/company/grittrix/" className="hover:text-cyan-400 transition-colors"><Globe className="w-5 h-5" /></Link>
               <Link href="https://www.youtube.com/@grittrix" className="hover:text-cyan-400 transition-colors"><Youtube className="w-5 h-5" /></Link>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
