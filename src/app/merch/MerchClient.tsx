'use client';

import * as React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, CheckCircle, ArrowRight, MessageSquare, ShieldCheck, Globe, Zap, Users, Activity, BarChart3, TrendingUp, Cpu, Layers, Smartphone, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    id: 'p1',
    name: 'GRITTRIX Premium Collar Shirt',
    description: 'White upper base with deep green lower section and sharp beige lightning stripe. Modern athletic fit with premium fabric texture.',
    price: '$20 / ₹2000 / 70,000 UGX',
    image: '/collar.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    badge: 'Premium Fabric',
    features: ['Premium Fabric', 'Modern Fit', 'Built for Performance', 'All Day Comfort'],
    rating: 5
  },
  {
    id: 'p2',
    name: 'GRITTRIX Signature Non-Collar Shirt',
    description: 'White dominant upper body with geometric green shoulder panels and a clean modern techwear aesthetic.',
    price: '$18.00',
    image: '/noncollar.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    badge: 'Athletic Fit',
    features: ['Lightweight Fabric', 'Athletic Fit', 'Soft Touch', 'Breathable'],
    rating: 5
  },
  {
    id: 'p3',
    name: 'GRITTRIX Signature Cap',
    description: 'White front panel with dark green sides and beige curved accent. Structured modern fit.',
    price: '$15.00',
    image: '/cap.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    badge: 'Embroidery Logo',
    features: ['Premium Quality', 'Adjustable Fit', 'Embroidery Logo', 'Breathable Design'],
    rating: 5
  }
];

const performanceFeatures = [
  { title: 'Thermal Shield', desc: 'Advanced regulation technology.', icon: Zap },
  { title: 'Flex-Mesh', desc: '4-way directional stretch.', icon: Activity },
  { title: 'HD Embroidery', desc: 'Precision logo threading.', icon: ShieldCheck },
  { title: 'QuickDry Flow', desc: 'Sub-minute moisture wicking.', icon: Smartphone },
  { title: 'Feather-Weight', desc: '120g ultra-light build.', icon: Rocket },
  { title: 'Anti-Odor', desc: 'Silver-ion treated fibers.', icon: Layers },
  { title: 'Team-Ready', desc: 'Bulk custom branding.', icon: Users },
  { title: 'Eco-Audit', desc: '100% sustainable sourcing.', icon: Globe },
  { title: 'Data-Thread', desc: 'Interactive digital tag.', icon: Cpu },
];

const stats = [
  { label: 'Premium Quality', value: '100%', icon: ShieldCheck },
  { label: 'Fast Delivery', value: '24h', icon: Zap },
  { label: 'Corporate Branding', value: 'Expert', icon: Globe },
  { label: 'Custom Orders', value: 'Unlimited', icon: Users }
];

const testimonials = [
  {
    name: 'Sarah Nakato',
    role: 'Startup Founder',
    content: 'The quality of the Grittrix collar shirts is unmatched. Our team looks incredibly professional during pitches.',
    rating: 5
  },
  {
    name: 'David Okello',
    role: 'Tech Entrepreneur',
    content: 'I love the minimalist non-collar design. It fits perfectly into my tech-wardrobe and feels great to wear.',
    rating: 5
  },
  {
    name: 'Brian Musoke',
    role: 'Corporate Team Lead',
    content: 'Ordered a bulk kit for our last event. The branding was spot on and the delivery was ahead of schedule.',
    rating: 5
  }
];

export function MerchClient() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white text-black font-body overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#0f5f3d] z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button size="lg" className="rounded-full h-16 w-16 bg-[#0f5f3d] hover:bg-[#0c4d2d] shadow-2xl shadow-[#0f5f3d]/40 text-white p-0" asChild>
          <Link href="/merch/shop"><ShoppingCart className="h-6 w-6" /></Link>
        </Button>
      </motion.div>

      {/* 1. HERO SECTION - SENIOR DEV DESIGN */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#0f5f3d]/20 rounded-full blur-[140px]"
          />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f5f3d]/10 border border-[#0f5f3d]/20 mb-8"
              >
                <div className="w-2 h-2 rounded-full bg-[#0f5f3d] animate-pulse" />
                <span className="text-[10px] font-bold text-[#0f5f3d] uppercase tracking-[0.2em]">Next-Gen Apparel Protocol v4.0</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-7xl md:text-9xl font-headline font-bold leading-[0.85] text-white mb-8 tracking-tighter"
              >
                Designed to <span className="text-[#0f5f3d]">Represent.</span><br />
                Built to <span className="text-[#f47321]">Perform.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-gray-400 mb-12 max-w-xl leading-relaxed"
              >
                Premium apparel engineered for innovators, creators, and modern businesses. Where high-end fashion meets performance technology.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white text-lg px-12 h-16 rounded-full shadow-2xl shadow-[#0f5f3d]/30 transition-all hover:scale-105" asChild>
                  <Link href="/merch/shop">Shop Collection</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 text-lg px-12 h-16 rounded-full transition-all hover:scale-105" asChild>
                  <Link href="/contact?subject=Custom%20Apparel">Customize for Your Team</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="relative h-[650px] flex items-center justify-center">
              {/* HIGH-FIDELITY CSS MOCKUP DASHBOARD */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="w-full max-w-[480px] bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-[#0f5f3d]/5 to-transparent pointer-events-none" />
                 
                 <div className="flex items-center justify-between mb-10">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#f47321]/80" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Analytics Layer</span>
                     <div className="px-2 py-0.5 rounded bg-[#0f5f3d]/20 text-[#0f5f3d] text-[8px] font-bold uppercase">LIVE</div>
                   </div>
                </div>

                <div className="space-y-10">
                   <div className="space-y-3">
                      <div className="flex justify-between items-end">
                         <div className="space-y-1">
                           <p className="text-[10px] font-bold text-gray-500 uppercase">Fabric Integrity</p>
                           <p className="text-3xl font-headline font-bold text-white tracking-tighter">Premium Grade</p>
                         </div>
                         <span className="text-sm font-bold text-[#0f5f3d]">98.4%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '98.4%' }}
                            transition={{ duration: 2, delay: 1 }}
                            className="h-full bg-gradient-to-r from-[#0f5f3d] to-[#00ffb0]" 
                         />
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-5 bg-white/5 rounded-[1.5rem] border border-white/5 group hover:bg-white/10 transition-colors">
                         <Activity className="h-6 w-6 text-[#f47321] mb-4" />
                         <p className="text-[9px] font-bold text-gray-500 uppercase mb-1">Breathability</p>
                         <p className="text-lg font-bold text-white">Ultra-Fine</p>
                      </div>
                      <div className="p-5 bg-white/5 rounded-[1.5rem] border border-white/5 group hover:bg-white/10 transition-colors">
                         <Cpu className="h-6 w-6 text-[#0f5f3d] mb-4" />
                         <p className="text-[9px] font-bold text-gray-500 uppercase mb-1">Engineered Fit</p>
                         <p className="text-lg font-bold text-white">Athletic 2.0</p>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sub-System Status</p>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-[#0f5f3d]/20 rounded-lg">
                            <ShieldCheck className="h-4 w-4 text-[#0f5f3d]" />
                          </div>
                          <span className="text-xs font-bold text-white/80">Embroidery Precision</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0f5f3d]" />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-[#f47321]/20 rounded-lg">
                            <TrendingUp className="h-4 w-4 text-[#f47321]" />
                          </div>
                          <span className="text-xs font-bold text-white/80">Wash Cycle Rating</span>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400">500+</span>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PERFORMANCE PROTOCOL GRID (3x3) */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-24">
             <Badge className="bg-[#0f5f3d]/10 text-[#0f5f3d] border-none px-6 py-2 rounded-full mb-6 font-bold tracking-widest text-[10px] uppercase">Engineering</Badge>
             <h2 className="text-5xl md:text-7xl font-headline font-bold text-center tracking-tighter">Performance <span className="text-[#0f5f3d]">Protocol</span></h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {performanceFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col justify-between aspect-[4/3] hover:bg-[#0f5f3d] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0f5f3d]/20"
              >
                <div>
                  <h3 className="text-3xl font-headline font-bold mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/70 transition-colors leading-relaxed">{feature.desc}</p>
                </div>
                <div className="flex justify-between items-end">
                   <div className="h-16 w-16 rounded-2xl bg-[#0f5f3d]/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-[#0f5f3d] group-hover:text-white" />
                   </div>
                   <div className="flex flex-col items-end opacity-20 group-hover:opacity-40 transition-opacity">
                      <span className="text-[4rem] font-headline font-bold leading-none tracking-tighter">{idx + 1}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED MERCH SHOWCASE - SIGNATURE SERIES */}
      <section className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-24">
             <Badge className="bg-[#0f5f3d]/10 text-[#0f5f3d] border-none px-6 py-2 rounded-full mb-6 font-bold tracking-widest text-[10px] uppercase">The Icons</Badge>
             <h2 className="text-5xl md:text-7xl font-headline font-bold text-center tracking-tighter">The <span className="text-[#0f5f3d]">Signature</span> Series</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {[
              { title: 'Premium Collar Shirt', img: '/collar.jpeg', tag: 'High-Conversion Fit', desc: 'Engineered for the boardroom and the field. Professionalism redefined through superior fabric.' },
              { title: 'Signature Non-Collar', img: '/noncollar.jpeg', tag: 'Tech-Wear Comfort', desc: 'Minimalist aesthetic for daily high-performance wear. Breathable, durable, unmatched.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] overflow-hidden rounded-[3rem] cursor-pointer shadow-2xl bg-white"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint="lifestyle fashion" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
                <div className="absolute bottom-16 left-12 right-12 text-white">
                  <Badge className="bg-[#f47321] text-white mb-6 px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full">{item.tag}</Badge>
                  <h3 className="text-5xl font-headline font-bold mb-6 tracking-tighter">{item.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all translate-y-8 group-hover:translate-y-0 duration-700">
                    {item.desc}
                  </p>
                  <Button variant="link" className="text-[#00ffb0] p-0 h-auto font-bold group-hover:gap-4 transition-all text-lg" asChild>
                    <Link href="/merch/shop">Explore Collection <ArrowRight className="ml-2 h-6 w-6" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT COLLECTION SECTION */}
      <section id="collection" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-headline font-bold mb-6 tracking-tighter"
              >
                The <span className="text-[#0f5f3d]">Full</span> Protocol
              </motion.h2>
              <p className="text-xl text-gray-500 font-medium">
                Meticulously crafted using high-grade materials to ensure a world-class user experience.
              </p>
            </div>
            <Button variant="outline" className="rounded-full h-14 px-10 border-black/10 font-bold hover:bg-black hover:text-white transition-all" asChild>
              <Link href="/merch/shop">View All Inventory</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="border-none shadow-none bg-white group overflow-hidden rounded-[2.5rem] p-6 transition-all hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-gray-50">
                  <div className="relative aspect-square bg-[#f8f8f8] rounded-[2rem] overflow-hidden mb-8">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="product shot"
                    />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-[#0f5f3d] text-white px-5 py-1.5 text-[9px] font-bold uppercase tracking-widest rounded-full">{product.badge}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-headline font-bold leading-tight group-hover:text-[#0f5f3d] transition-colors">{product.name}</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between gap-6">
                       <div className="space-y-0.5">
                         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Base Value</p>
                         <p className="font-bold text-2xl text-[#0f5f3d]">{product.price.split('/')[0]}</p>
                       </div>
                       <Button className="flex-1 bg-black hover:bg-[#0f5f3d] text-white rounded-2xl h-14 font-bold transition-all shadow-xl active:scale-95" asChild>
                        <Link href="/merch/shop">Deploy to Cart</Link>
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND STORY SECTION */}
      <section className="py-40 bg-[#0f5f3d] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="bg-white/10 text-white border-none px-6 py-2 rounded-full mb-10 font-bold tracking-widest text-[10px] uppercase">Our Core</Badge>
            <h2 className="text-6xl md:text-8xl font-headline font-bold mb-12 tracking-tighter">One Brand. One <span className="text-[#f47321]">Identity.</span></h2>
            <p className="text-2xl md:text-3xl text-white/70 mb-20 leading-relaxed font-medium">
              GRITTRIX merchandise is designed for businesses, creators, and innovators who value professionalism, quality, and modern identity.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex justify-center mb-6">
                     <stat.icon className="h-10 w-10 text-[#f47321]" />
                  </div>
                  <p className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CUSTOM CORPORATE ORDERS SECTION - CSS MOCKUP */}
      <section id="corporate" className="py-40 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#f8f8f8] rounded-[4rem] p-12 md:p-24 relative border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <Badge className="bg-[#0f5f3d]/10 text-[#0f5f3d] border-none px-6 py-2 rounded-full mb-10 font-bold tracking-widest text-[10px] uppercase">Enterprise</Badge>
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-headline font-bold mb-10 leading-[0.9] tracking-tighter"
                >
                  Custom <span className="text-[#0f5f3d]">Corporate</span> Orders
                </motion.h2>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">Equip your entire organization with high-performance branded apparel that reflects your standard of excellence.</p>
                <div className="grid sm:grid-cols-2 gap-6 mb-16">
                  {[
                    'Custom Tech-Branding', 'Global Team Uniforms', 
                    'Premium Event Kits', 'Startup Launch Packs',
                    'Executive Gifting', 'Fleet Identity'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="h-6 w-6 rounded-full bg-[#0f5f3d]/10 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-[#0f5f3d]" />
                      </div>
                      <span className="font-bold text-gray-700 text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white px-12 h-16 rounded-full text-lg font-bold shadow-2xl transition-all hover:scale-105" asChild>
                  <Link href="/contact?subject=Corporate%20Merch%20Inquiry">Request Custom Quote</Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative w-full aspect-square bg-white rounded-[3rem] shadow-2xl p-10 border border-gray-100 flex flex-col justify-center gap-6 overflow-hidden">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="bg-[#0f5f3d]/5 aspect-[4/3] rounded-[1.5rem] border-2 border-dashed border-[#0f5f3d]/20 relative flex flex-col items-center justify-center">
                        <div className="absolute top-4 left-4 h-6 w-12 rounded bg-[#0f5f3d]/20 flex items-center justify-center text-[8px] font-bold text-[#0f5f3d]">KIT A</div>
                        <Image src="/collar.jpeg" alt="Collar" width={60} height={60} className="object-contain opacity-40 mb-2" />
                        <span className="text-[10px] font-bold text-gray-400">TEAM POLOS</span>
                      </div>
                      <div className="bg-[#f47321]/5 aspect-[4/3] rounded-[1.5rem] border-2 border-dashed border-[#f47321]/20 relative flex flex-col items-center justify-center">
                         <div className="absolute top-4 left-4 h-6 w-12 rounded bg-[#f47321]/20 flex items-center justify-center text-[8px] font-bold text-[#f47321]">KIT B</div>
                         <Image src="/noncollar.jpeg" alt="Non-Collar" width={60} height={60} className="object-contain opacity-40 mb-2" />
                         <span className="text-[10px] font-bold text-gray-400">EVENT WEAR</span>
                      </div>
                      <div className="bg-black/5 h-40 rounded-[1.5rem] border-2 border-dashed border-black/20 col-span-2 relative flex flex-col items-center justify-center">
                        <div className="absolute top-4 left-4 h-6 w-12 rounded bg-black/20 flex items-center justify-center text-[8px] font-bold text-black">ACCESSORY</div>
                        <div className="flex gap-8 items-center">
                           <Image src="/cap.jpeg" alt="Cap" width={80} height={80} className="object-contain opacity-40" />
                           <div className="space-y-1">
                              <p className="text-xs font-bold text-black/60">BULK HEADWEAR</p>
                              <p className="text-[8px] text-black/40">Adjustable One-Size</p>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF SECTION */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-[#f47321]/10 text-[#f47321] border-none px-6 py-2 rounded-full mb-10 font-bold tracking-widest text-[10px] uppercase">Feedback</Badge>
          <h2 className="text-5xl md:text-7xl font-headline font-bold mb-24 tracking-tighter">Trusted by <span className="text-[#0f5f3d]">Leaders</span></h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-left"
              >
                <Card className="p-10 h-full border-none bg-gray-50 rounded-[3rem] transition-all hover:bg-[#0f5f3d]/5">
                  <div className="flex gap-1 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#f47321] text-[#f47321]" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-600 mb-10 italic leading-relaxed font-medium">"{t.content}"</p>
                  <div className="space-y-1">
                    <p className="text-lg font-bold tracking-tight">{t.name}</p>
                    <p className="text-[10px] text-[#0f5f3d] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-40">
        <div className="container mx-auto px-4">
          <div className="bg-black rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
            <motion.div 
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 bg-[#0f5f3d] blur-[150px] rounded-full scale-150"
            />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-headline font-bold mb-10 tracking-tighter">Wear the <span className="text-[#00ffb0]">Standard.</span></h2>
              <p className="text-xl md:text-2xl text-white/60 mb-16 leading-relaxed">
                Premium branded apparel built for the future of innovation. Join the movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white px-16 h-20 rounded-full text-xl font-bold shadow-2xl" asChild>
                  <Link href="/merch/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-16 h-20 rounded-full text-xl font-bold" asChild>
                   <Link href="/contact"><MessageSquare className="mr-2 h-6 w-6" /> Contact Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
