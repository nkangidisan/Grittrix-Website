'use client';

import * as React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, Package, CheckCircle, ArrowRight, MessageSquare, ShieldCheck, Globe, Zap, Users } from 'lucide-react';
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
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Premium Fabric',
    features: ['Premium Fabric', 'Modern Fit', 'Built for Performance', 'All Day Comfort'],
    rating: 5
  },
  {
    id: 'p2',
    name: 'GRITTRIX Signature Non-Collar Shirt',
    description: 'White dominant upper body with geometric green shoulder panels and a clean modern techwear aesthetic.',
    price: '$28.00',
    image: '/noncollar.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Athletic Fit',
    features: ['Lightweight Fabric', 'Athletic Fit', 'Soft Touch', 'Breathable'],
    rating: 5
  },
  {
    id: 'p3',
    name: 'GRITTRIX Signature Cap',
    description: 'White front panel with dark green sides and beige curved accent. High-quality structured modern fit.',
    price: '$22.00',
    image: '/cap.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    sizes: ['Adjustable (One Size)'],
    badge: 'Embroidery Logo',
    features: ['Premium Quality', 'Adjustable Fit', 'Embroidery Logo', 'Breathable Design'],
    rating: 5
  }
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
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#0f5f3d] z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Sticky Cart Button */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button size="lg" className="rounded-full h-16 w-16 bg-[#0f5f3d] hover:bg-[#0c4d2d] shadow-2xl shadow-[#0f5f3d]/20 text-white p-0" asChild>
          <Link href="/merch/shop"><ShoppingCart className="h-6 w-6" /></Link>
        </Button>
      </motion.div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#0f5f3d]/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-headline font-bold leading-tight mb-8"
              >
                Designed to <span className="text-[#0f5f3d]">Represent.</span><br />
                Built to <span className="text-[#f47321]">Perform.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl"
              >
                Premium apparel engineered for innovators, creators, professionals, and modern businesses.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white text-lg px-10 h-14 rounded-full shadow-lg shadow-[#0f5f3d]/20 transition-all hover:scale-105" asChild>
                  <Link href="/merch/shop">Shop Collection</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-black/10 hover:bg-black/5 text-lg px-10 h-14 rounded-full transition-all hover:scale-105" asChild>
                  <Link href="/merch/shop">Customize for Your Team</Link>
                </Button>
              </motion.div>
            </div>
            
            <div className="relative h-[600px] hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image src="/flyer1.jpeg" alt="Grittrix Fashion" fill className="object-cover rounded-3xl shadow-2xl z-20 rotate-[-5deg] scale-90 translate-x-[-10%]" />
                  <Image src="/flyer2.jpeg" alt="Grittrix Fashion" fill className="object-cover rounded-3xl shadow-2xl z-30 rotate-[5deg] scale-90 translate-x-[10%]" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED MERCH SHOWCASE */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-headline font-bold">The <span className="text-[#0f5f3d]">Signature</span> Series</h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Premium Collar Shirt', img: '/flyer1.jpeg', tag: 'Premium Fabric', desc: 'Engineered for the boardroom and the field.' },
              { title: 'Signature Non-Collar', img: '/flyer2.jpeg', tag: 'Modern Fit', desc: 'Minimalist aesthetic for daily comfort.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-[600px] overflow-hidden rounded-3xl cursor-pointer shadow-2xl bg-white border border-gray-100"
              >
                <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-10 left-10 text-white">
                  <Badge className="bg-[#f47321] text-white mb-4 px-4 py-1">{item.tag}</Badge>
                  <h3 className="text-4xl font-headline font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70 max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                    {item.desc}
                  </p>
                  <Button variant="link" className="text-[#00E5A0] p-0 h-auto font-bold group-hover:gap-4 transition-all" asChild>
                    <Link href="/merch/shop">Explore Details <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT COLLECTION SECTION */}
      <section id="collection" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-headline font-bold mb-6"
              >
                Luxury <span className="text-[#0f5f3d]">Collection</span>
              </motion.h2>
              <p className="text-lg text-gray-500">
                Meticulously crafted using high-end materials to ensure a world-class experience.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="rounded-full" asChild><Link href="/merch/shop">All Products</Link></Button>
              <Button variant="outline" className="rounded-full" asChild><Link href="/merch/shop">New In</Link></Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="border-none shadow-none bg-gray-50/50 group overflow-hidden rounded-[2rem] p-4 transition-all hover:bg-white hover:shadow-xl">
                  <div className="relative aspect-square bg-white rounded-[1.5rem] overflow-hidden mb-6 shadow-sm">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                    />
                    <button className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-[#f47321] transition-colors shadow-lg shadow-black/5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 duration-300">
                      <Heart className="h-5 w-5" />
                    </button>
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-[#0f5f3d] text-white px-4 py-1">{product.badge}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-headline font-bold group-hover:text-[#0f5f3d] transition-colors leading-tight">{product.name}</h3>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-[#f47321] text-[#f47321]" />)}
                    </div>
                    <p className="text-gray-500 text-xs mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                       {product.features.map(f => (
                         <div key={f} className="flex items-center gap-1 text-[10px] text-gray-400">
                            <CheckCircle className="h-2 w-2 text-[#0f5f3d]" /> {f}
                         </div>
                       ))}
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <div className="flex gap-2">
                        {product.colors.map((color, i) => (
                          <div 
                            key={i} 
                            className="w-4 h-4 rounded-full border border-gray-200 cursor-pointer transition-transform hover:scale-125 shadow-sm" 
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <div className="flex gap-2 overflow-x-auto max-w-[120px] no-scrollbar">
                        {product.sizes.map((size, i) => (
                          <span key={i} className="text-[10px] font-bold text-gray-400 hover:text-black cursor-pointer uppercase transition-colors shrink-0">{size}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between gap-4">
                       <p className="font-bold text-lg text-[#0f5f3d]">{product.price.split('/')[0]}</p>
                       <Button className="flex-1 bg-black hover:bg-[#0f5f3d] text-white rounded-xl h-12 transition-all group-hover:shadow-xl group-hover:shadow-[#0f5f3d]/10" asChild>
                        <Link href="/merch/shop">Add to Cart</Link>
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRAND STORY SECTION */}
      <section className="py-32 bg-[#0f5f3d] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-10">One Brand. One <span className="text-[#f47321]">Identity.</span></h2>
            <p className="text-xl md:text-2xl text-white/70 mb-16 leading-relaxed">
              GRITTRIX merchandise is designed for businesses, creators, and innovators who value professionalism, quality, and modern identity.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex justify-center mb-4">
                     <stat.icon className="h-8 w-8 text-[#f47321]" />
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CUSTOM CORPORATE ORDERS SECTION */}
      <section id="corporate" className="py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 relative border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-headline font-bold mb-10 leading-tight"
                >
                  Custom <span className="text-[#0f5f3d]">Corporate</span> Orders
                </motion.h2>
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  {[
                    'Custom Branding', 'Team Apparel', 
                    'Event Merchandise', 'Startup Merch Kits',
                    'Company Uniforms', 'Executive Gifts'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <CheckCircle className="h-6 w-6 text-[#0f5f3d]" />
                      <span className="font-semibold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white px-12 h-16 rounded-full text-lg font-bold shadow-2xl transition-all hover:scale-105" asChild>
                  <Link href="/contact?subject=Corporate%20Merch%20Inquiry">Request Custom Order</Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="relative w-full aspect-square bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 flex items-center justify-center overflow-hidden">
                   {/* CSS Mockup for Corporate Kit */}
                   <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-[#0f5f3d]/5 h-32 rounded-xl flex items-center justify-center border-2 border-dashed border-[#0f5f3d]/20 relative group">
                        <Badge className="absolute top-2 left-2 text-[8px] bg-[#0f5f3d]">Kit A</Badge>
                        <span className="text-xs font-bold text-gray-400">Team Uniforms</span>
                      </div>
                      <div className="bg-[#f47321]/5 h-32 rounded-xl flex items-center justify-center border-2 border-dashed border-[#f47321]/20 relative">
                        <Badge className="absolute top-2 left-2 text-[8px] bg-[#f47321]">Kit B</Badge>
                         <span className="text-xs font-bold text-gray-400">Event Wear</span>
                      </div>
                      <div className="bg-black/5 h-32 rounded-xl flex items-center justify-center border-2 border-dashed border-black/20 relative col-span-2">
                        <Badge className="absolute top-2 left-2 text-[8px] bg-black">Global</Badge>
                         <span className="text-xs font-bold text-gray-400">Startup Merch Packs</span>
                      </div>
                   </div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden sm:block border border-gray-100">
                   <p className="text-xs font-bold text-[#0f5f3d] uppercase tracking-widest mb-2">Enterprise Ready</p>
                   <p className="text-xl font-bold">Bulk Discounts Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <Badge className="bg-[#f47321]/10 text-[#f47321] mb-6 px-4 py-1">Community</Badge>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Trusted by <span className="text-[#0f5f3d]">Leaders</span></h2>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-8 h-full border-gray-100 hover:border-[#0f5f3d]/20 transition-all hover:shadow-xl hover:shadow-[#0f5f3d]/5 group bg-gray-50/30 rounded-3xl">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f47321] text-[#f47321]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 italic leading-relaxed">"{t.content}"</p>
                  <div className="text-left">
                    <p className="font-bold group-hover:text-[#0f5f3d] transition-colors">{t.name}</p>
                    <p className="text-xs text-gray-400 font-semibold">{t.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <motion.div 
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-[#0f5f3d] blur-[120px] rounded-full scale-150"
            />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-headline font-bold mb-8">Wear the <span className="text-[#00E5A0]">Standard.</span></h2>
              <p className="text-xl md:text-2xl text-white/60 mb-12">
                Premium branded apparel built for the future of innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white px-12 h-16 rounded-full text-lg font-bold shadow-xl shadow-[#0f5f3d]/20" asChild>
                  <Link href="/merch/shop">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 h-16 rounded-full text-lg font-bold" asChild>
                   <Link href="/contact"><MessageSquare className="mr-2 h-5 w-5" /> Contact Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
