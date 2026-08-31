'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Search, Sparkles, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

// Industry data variables for easy asset swapping
const healthcareImage = 'https://picsum.photos/seed/health-grittrix/1200/900';
const retailImage = 'https://picsum.photos/seed/retail-grittrix/1200/900';
const agricultureImage = 'https://picsum.photos/seed/agri-grittrix/1200/900';
const educationImage = 'https://picsum.photos/seed/edu-grittrix/1200/900';

const industries = [
  {
    id: 'healthcare',
    label: 'HEALTHCARE',
    href: '/industries/healthcare',
    headline: 'Smarter healthcare, built for real communities.',
    description: 'AI powered tools that improve diagnosis, patient records, and care delivery in underserved regions.',
    image: healthcareImage,
    dataAiHint: 'healthcare professionals',
  },
  {
    id: 'retail',
    label: 'RETAIL',
    href: '/industries/retail',
    headline: 'Retail that scales with your customers.',
    description: 'From inventory to point-of-sale, we build systems that help retailers grow with confidence.',
    image: retailImage,
    dataAiHint: 'retail store',
  },
  {
    id: 'agriculture',
    label: 'AGRICULTURE',
    href: '/industries/agriculture',
    headline: 'Technology rooted in the field.',
    description: 'Data-driven tools that help farmers and agribusinesses increase yield and reduce waste.',
    image: agricultureImage,
    dataAiHint: 'agriculture field',
  },
  {
    id: 'education',
    label: 'EDUCATION',
    href: '/industries/education',
    headline: 'Learning tools built for the next generation.',
    description: 'We design platforms that make education more accessible, engaging, and effective at scale.',
    image: educationImage,
    dataAiHint: 'education students',
  },
];

export function SolutionsTabSection() {
  const [activeTab, setActiveTab] = useState(industries[0]);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 relative overflow-hidden" aria-labelledby="solutions-tab-heading">
      {/* Decorative background flare */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-section-in">
          <h2 id="solutions-tab-heading" className="text-4xl md:text-5xl font-bold font-headline text-white mb-6">
            Solutions for Every Sector
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
            We combine deep domain knowledge with cutting-edge AI to provide solutions that drive innovation and growth in your industry.
          </p>
        </div>

        {/* Tab Bar Track Container */}
        <div className="flex justify-center mb-20 animate-section-in animation-delay-200">
          <div className="bg-blue-900/40 backdrop-blur-md p-1.5 rounded-full inline-flex flex-wrap justify-center gap-1 border border-white/10 shadow-2xl">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all duration-300",
                  activeTab.id === industry.id
                    ? "bg-[hsl(var(--accent-lime))] text-[#0a1128] shadow-[0_0_20px_rgba(217,255,102,0.4)]"
                    : "text-white hover:bg-white/10"
                )}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with floating card overlays */}
          <div className="lg:col-span-7 relative group animate-section-in">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20"
              >
                <Image
                  src={activeTab.image}
                  alt={activeTab.headline}
                  fill
                  className="object-cover"
                  data-ai-hint={activeTab.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />

                {/* Floating Card 1: Taxonomy Agent Chat Overlay (Bottom-left) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-8 left-8 bg-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-64 hidden sm:block z-20 border border-white"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-teal-400 flex items-center justify-center shrink-0 shadow-inner">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-blue-600 uppercase tracking-tight">Taxonomy Agent</p>
                      <p className="text-[11px] font-bold text-slate-800">Analysis complete. Ready.</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5 flex items-center gap-3">
                    <Search className="w-3.5 h-3.5 text-slate-300" />
                    <span className="text-[11px] text-slate-300 font-bold">Ask a question...</span>
                  </div>
                </motion.div>

                {/* Floating Card 2: AI Metadata Overlay (Top-right) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-8 right-8 bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-72 hidden md:block z-20 border border-white"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent-lime))] animate-pulse shadow-[0_0_10px_rgba(217,255,102,1)]" />
                      <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-widest">AI Detected</span>
                    </div>
                    <LayoutGrid className="w-4 h-4 text-slate-200" />
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase mb-2 tracking-widest">Tags</p>
                      <div className="flex flex-wrap gap-1.5">
                        <div className="h-4 w-12 bg-slate-50 border border-slate-100 rounded-full" />
                        <div className="h-4 w-16 bg-slate-50 border border-slate-100 rounded-full" />
                        <div className="h-4 w-10 bg-slate-50 border border-slate-100 rounded-full" />
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase mb-2 tracking-widest">Structured Metadata</p>
                      <div className="flex gap-2">
                        <div className="bg-[hsl(var(--accent-lime))] text-[#0a1128] rounded-md px-2.5 py-1 text-[10px] font-extrabold shadow-sm">
                          Primary
                        </div>
                        <div className="bg-[hsl(var(--accent-lime))] text-[#0a1128] rounded-md px-2.5 py-1 text-[10px] font-extrabold shadow-sm">
                          Valid
                        </div>
                      </div>
                    </div>

                    <div className="bg-[hsl(var(--accent-lime)/8%)] border border-[hsl(var(--accent-lime)/15%)] rounded-2xl p-4">
                      <p className="text-[9px] font-bold text-blue-900 uppercase mb-3 tracking-widest">Search result</p>
                      <div className="flex gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-full aspect-square bg-white/70 rounded-lg border border-white/50 shadow-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Dynamic Text Content */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center animate-section-in animation-delay-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-3xl md:text-5xl font-bold font-headline text-white mb-8 leading-[1.1] tracking-tight">
                  {activeTab.headline}
                </h3>
                <p className="text-blue-100 text-lg md:text-xl mb-12 leading-relaxed opacity-90">
                  {activeTab.description}
                </p>
                <Link 
                  href={activeTab.href}
                  className="inline-flex items-center gap-3 text-[hsl(var(--accent-lime))] font-extrabold uppercase tracking-[0.2em] text-sm hover:gap-6 transition-all duration-500 group"
                >
                  Learn more 
                  <span className="w-8 h-8 rounded-full border-2 border-[hsl(var(--accent-lime)/30%)] flex items-center justify-center group-hover:bg-[hsl(var(--accent-lime))] group-hover:text-[#0a1128] transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
