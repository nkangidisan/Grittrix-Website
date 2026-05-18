'use client';

import * as React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star, CheckCircle, ArrowRight, MessageSquare, ShieldCheck, Globe, Zap, Users, Activity, Cpu, Layers, Smartphone, Rocket } from 'lucide-react';
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
    badge: 'Premium Fabric'
  },
  {
    id: 'p2',
    name: 'GRITTRIX Signature Non-Collar Shirt',
    description: 'White dominant upper body with geometric green shoulder panels and a clean modern techwear aesthetic.',
    price: '$18.00',
    image: '/noncollar.jpeg',
    badge: 'Athletic Fit'
  },
  {
    id: 'p3',
    name: 'GRITTRIX Signature Cap',
    description: 'White front panel with dark green sides and beige curved accent. Structured modern fit.',
    price: '$15.00',
    image: '/cap.jpeg',
    badge: 'Embroidery Logo'
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
    <div className="bg-background text-foreground font-body overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#0f5f3d] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* 1. HERO SECTION - Synchronized with Homepage Background */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-20 md:pt-32 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-40">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#0f5f3d]/20 rounded-full blur-[140px]"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f5f3d]/10 border border-[#0f5f3d]/20 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-[#0f5f3d] animate-pulse" />
                <span className="text-[10px] font-bold text-[#0f5f3d] uppercase tracking-[0.2em]">Apparel Intelligence Layer</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl lg:text-9xl font-headline font-bold leading-[0.9] text-white mb-8 tracking-tighter"
              >
                Designed to <span className="text-[#0f5f3d]">Represent.</span><br />
                Built to <span className="text-[#f47321]">Perform.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-2xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Premium apparel engineered for innovators, creators, and modern businesses. Where high-end fashion meets performance technology.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white text-lg px-10 h-14 md:h-16 rounded-full shadow-2xl transition-all hover:scale-105" asChild>
                  <Link href="/merch/shop">Shop Collection</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 text-lg px-10 h-14 md:h-16 rounded-full transition-all hover:scale-105" asChild>
                  <Link href="/contact?subject=Custom%20Apparel">Customize for Your Team</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="w-full max-w-[440px] bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-8">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#f47321]/80" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                   </div>
                   <div className="px-2 py-0.5 rounded bg-[#0f5f3d]/20 text-[#0f5f3d] text-[8px] font-bold uppercase">LIVE STATUS</div>
                </div>

                <div className="space-y-8">
                   <div className="space-y-2">
                      <div className="flex justify-between items-end">
                         <div className="space-y-0.5">
                           <p className="text-[9px] font-bold text-gray-500 uppercase">Fabric Integrity</p>
                           <p className="text-2xl md:text-3xl font-headline font-bold text-white tracking-tighter">Premium Grade</p>
                         </div>
                         <span className="text-xs font-bold text-[#0f5f3d]">98.4%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '98.4%' }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-[#0f5f3d] to-[#00ffb0]" 
                         />
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-white/5 rounded-[1.25rem] border border-white/5 group hover:bg-white/10 transition-colors">
                         <Activity className="h-5 w-5 text-[#f47321] mb-3" />
                         <p className="text-[8px] font-bold text-gray-500 uppercase mb-0.5">Breathability</p>
                         <p className="text-base font-bold text-white leading-none">Ultra-Fine</p>
                      </div>
                      <div className="p-4 bg-white/5 rounded-[1.25rem] border border-white/5 group hover:bg-white/10 transition-colors">
                         <Cpu className="h-5 w-5 text-[#0f5f3d] mb-3" />
                         <p className="text-[8px] font-bold text-gray-500 uppercase mb-0.5">Engineered Fit</p>
                         <p className="text-base font-bold text-white leading-none">Athletic 2.0</p>
                      </div>
                   </div>

                   <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <ShieldCheck className="h-4 w-4 text-[#0f5f3d]" />
                          <span className="text-[10px] font-bold text-white/80 uppercase">Precision Threading</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0f5f3d] shadow-[0_0_8px_#0f5f3d]" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <Rocket className="h-4 w-4 text-[#f47321]" />
                          <span className="text-[10px] font-bold text-white/80 uppercase">Wash Durability</span>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400">500+ Cycles</span>
                      </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE SERIES */}
      <section id="signature" className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 md:mb-24">
             <Badge className="bg-[#0f5f3d]/10 text-[#0f5f3d] border-none px-5 py-2 rounded-full mb-4 font-bold tracking-widest text-[10px] uppercase">The Icons</Badge>
             <h2 className="text-4xl md:text-7xl font-headline font-bold text-center tracking-tighter text-slate-900">
               The <span className="text-[#0f5f3d]">Signature</span> Series
             </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {[
              { title: 'Premium Collar Shirt', img: '/collar.jpeg', tag: 'High-Conversion Fit', desc: 'Engineered for the boardroom and the field. Professionalism redefined through superior fabric.' },
              { title: 'Signature Non-Collar', img: '/noncollar.jpeg', tag: 'Tech-Wear Comfort', desc: 'Minimalist aesthetic for daily high-performance wear. Breathable, durable, unmatched.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] cursor-pointer shadow-2xl bg-white"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" data-ai-hint="lifestyle fashion" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
                <div className="absolute bottom-10 md:bottom-16 left-8 md:left-12 right-8 md:right-12 text-white">
                  <Badge className="bg-[#f47321] text-white mb-4 md:mb-6 px-4 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full">{item.tag}</Badge>
                  <h3 className="text-3xl md:text-5xl font-headline font-bold mb-4 md:mb-6 tracking-tighter leading-none">{item.title}</h3>
                  <p className="text-white/70 text-sm md:text-lg leading-relaxed mb-6 md:mb-8 opacity-0 group-hover:opacity-100 transition-all translate-y-8 group-hover:translate-y-0 duration-700">
                    {item.desc}
                  </p>
                  <Button variant="link" className="text-[#00ffb0] p-0 h-auto font-bold group-hover:gap-4 transition-all text-base md:text-lg" asChild>
                    <Link href="/merch/shop">Explore Collection <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT COLLECTION */}
      <section id="collection" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-headline font-bold mb-4 tracking-tighter leading-none text-slate-900"
              >
                The <span className="text-[#0f5f3d]">Full</span> Collection
              </motion.h2>
              <p className="text-base md:text-xl text-gray-500 font-medium">
                Meticulously crafted using high-grade materials to ensure a world-class user experience.
              </p>
            </div>
            <Button variant="outline" className="rounded-full h-12 md:h-14 px-8 border-black/10 font-bold text-slate-900 hover:bg-black hover:text-white transition-all w-full md:w-auto" asChild>
              <Link href="/merch/shop">View All Inventory</Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="border-none shadow-none bg-white group overflow-hidden rounded-[2rem] p-5 md:p-6 transition-all hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-gray-50">
                  <div className="relative aspect-square bg-[#f8f8f8] rounded-[1.5rem] overflow-hidden mb-6 md:mb-8">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-contain p-8 md:p-12 transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="product shot"
                    />
                    <div className="absolute top-4 md:top-6 left-4 md:left-6">
                      <Badge className="bg-[#0f5f3d] text-white px-4 py-1.5 text-[8px] md:text-[9px] font-bold uppercase tracking-widest rounded-full">{product.badge}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <h3 className="text-xl md:text-2xl font-headline font-bold leading-tight text-slate-900 group-hover:text-[#0f5f3d] transition-colors mb-4">{product.name}</h3>
                    <p className="text-gray-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed line-clamp-2">{product.description}</p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 md:gap-6">
                       <div className="space-y-0.5 text-center sm:text-left">
                         <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Base Value</p>
                         <p className="font-bold text-xl md:text-2xl text-[#0f5f3d]">{product.price.split('/')[0]}</p>
                       </div>
                       <Button className="bg-black hover:bg-[#0f5f3d] text-white rounded-xl md:rounded-2xl h-12 md:h-14 font-bold transition-all shadow-xl active:scale-95" asChild>
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

      {/* 4. BRAND STORY */}
      <section className="py-24 md:py-40 bg-[#0f5f3d] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="bg-white/10 text-white border-none px-6 py-2 rounded-full mb-8 font-bold tracking-widest text-[10px] uppercase">Our Core</Badge>
            <h2 className="text-4xl md:text-8xl font-headline font-bold mb-8 md:mb-12 tracking-tighter leading-none">One Brand. One <span className="text-[#f47321]">Identity.</span></h2>
            <p className="text-lg md:text-3xl text-white/70 mb-12 md:mb-20 leading-relaxed font-medium">
              GRITTRIX merchandise is designed for businesses, creators, and innovators who value professionalism, quality, and modern identity.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex justify-center mb-4 md:mb-6">
                     <stat.icon className="h-8 w-8 md:h-10 md:w-10 text-[#f47321]" />
                  </div>
                  <p className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4 tracking-tighter">{stat.value}</p>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CUSTOM CORPORATE ORDERS */}
      <section id="corporate" className="py-24 md:py-40 overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f8f8] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 relative border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="text-center lg:text-left">
                <Badge className="bg-[#0f5f3d]/10 text-[#0f5f3d] border-none px-5 py-2 rounded-full mb-6 md:mb-10 font-bold tracking-widest text-[10px] uppercase">Enterprise</Badge>
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-7xl font-headline font-bold mb-6 md:mb-10 leading-[0.9] tracking-tighter text-slate-900"
                >
                  Custom <span className="text-[#0f5f3d]">Corporate</span> Orders
                </motion.h2>
                <p className="text-base md:text-xl text-gray-500 mb-8 md:mb-12 leading-relaxed font-medium">Equip your entire organization with high-performance branded apparel that reflects your standard of excellence.</p>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-16">
                  {[
                    'Custom Tech-Branding', 'Global Team Uniforms', 
                    'Premium Event Kits', 'Startup Launch Packs',
                    'Executive Gifting', 'Fleet Identity'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 justify-center lg:justify-start">
                      <div className="h-5 w-5 rounded-full bg-[#0f5f3d]/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-3 w-3 text-[#0f5f3d]" />
                      </div>
                      <span className="font-bold text-gray-700 text-xs md:text-sm tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white px-10 h-14 md:h-16 rounded-full text-base md:text-lg font-bold shadow-2xl transition-all hover:scale-105 w-full md:w-auto" asChild>
                  <Link href="/contact?subject=Corporate%20Merch%20Inquiry">Request Custom Quote</Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative w-full aspect-square bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl p-6 md:p-10 border border-gray-100 flex flex-col justify-center gap-4 md:gap-6 overflow-hidden">
                   <div className="grid grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-[#0f5f3d]/5 aspect-[4/3] rounded-2xl border-2 border-dashed border-[#0f5f3d]/20 relative flex flex-col items-center justify-center p-4">
                        <Image src="/collar.jpeg" alt="Collar" width={40} height={40} className="object-contain opacity-40 mb-2 md:w-16 md:h-16" />
                        <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase">TEAM POLOS</span>
                      </div>
                      <div className="bg-[#f47321]/5 aspect-[4/3] rounded-2xl border-2 border-dashed border-[#f47321]/20 relative flex flex-col items-center justify-center p-4">
                         <Image src="/noncollar.jpeg" alt="Non-Collar" width={40} height={40} className="object-contain opacity-40 mb-2 md:w-16 md:h-16" />
                         <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase">EVENT WEAR</span>
                      </div>
                      <div className="bg-black/5 h-24 md:h-40 rounded-2xl border-2 border-dashed border-black/20 col-span-2 relative flex items-center justify-center gap-6 md:gap-8 px-6">
                        <Image src="/cap.jpeg" alt="Cap" width={50} height={50} className="object-contain opacity-40 md:w-20 md:h-20" />
                        <div className="space-y-0.5">
                           <p className="text-[10px] md:text-xs font-bold text-black/60 uppercase">BULK HEADWEAR</p>
                           <p className="text-[8px] text-black/40">Adjustable One-Size</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-[#f47321]/10 text-[#f47321] border-none px-5 py-2 rounded-full mb-8 md:mb-10 font-bold tracking-widest text-[10px] uppercase">Feedback</Badge>
          <h2 className="text-4xl md:text-7xl font-headline font-bold mb-16 md:mb-24 tracking-tighter leading-none text-slate-900">
            Trusted by <span className="text-[#0f5f3d]">Leaders</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-left"
              >
                <Card className="p-8 md:p-10 h-full border-none bg-gray-50 rounded-[2rem] md:rounded-[3rem] transition-all hover:bg-[#0f5f3d]/5">
                  <div className="flex gap-1 mb-6 md:mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-[#f47321] text-[#f47321]" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 italic leading-relaxed font-medium">"{t.content}"</p>
                  <div className="space-y-0.5">
                    <p className="text-base md:text-lg font-bold tracking-tight text-slate-900">{t.name}</p>
                    <p className="text-[9px] md:text-[10px] text-[#0f5f3d] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PERFORMANCE PROTOCOL */}
      <section id="protocol" className="py-24 md:py-32 bg-white relative border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 md:mb-24">
             <Badge className="bg-[#0f5f3d]/10 text-[#0f5f3d] border-none px-5 py-2 rounded-full mb-4 font-bold tracking-widest text-[10px] uppercase">Engineering</Badge>
             <h2 className="text-4xl md:text-7xl font-headline font-bold text-center tracking-tighter text-slate-900">
               Performance <span className="text-[#0f5f3d]">Protocol</span>
             </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {performanceFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="group p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col justify-between aspect-square md:aspect-[4/3] hover:bg-[#0f5f3d] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0f5f3d]/20"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-white transition-colors leading-none">{feature.title}</h3>
                  <p className="text-xs md:text-base text-gray-500 group-hover:text-white/70 transition-colors leading-relaxed">{feature.desc}</p>
                </div>
                <div className="flex justify-between items-end">
                   <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl md:rounded-2xl bg-[#0f5f3d]/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-[#0f5f3d] group-hover:text-white" />
                   </div>
                   <div className="flex flex-col items-end opacity-20 group-hover:opacity-40 transition-opacity">
                      <span className="text-4xl md:text-[4rem] font-headline font-bold leading-none tracking-tighter text-slate-900 group-hover:text-white">{idx + 1}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 md:py-40 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="bg-black rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-32 text-center text-white relative overflow-hidden">
            <motion.div 
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 bg-[#0f5f3d] blur-[120px] md:blur-[150px] rounded-full scale-150"
            />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-8xl font-headline font-bold mb-6 md:mb-10 tracking-tighter leading-none">Wear the <span className="text-[#00ffb0]">Standard.</span></h2>
              <p className="text-base md:text-2xl text-white/60 mb-10 md:mb-16 leading-relaxed">
                Premium branded apparel built for the future of innovation. Join the movement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white px-12 md:px-16 h-14 md:h-20 rounded-full text-lg md:text-xl font-bold shadow-2xl w-full sm:w-auto" asChild>
                  <Link href="/merch/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 md:px-16 h-14 md:h-20 rounded-full text-lg md:text-xl font-bold w-full sm:w-auto" asChild>
                   <Link href="/contact"><MessageSquare className="mr-2 h-5 w-5 md:h-6 md:w-6" /> Contact Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
