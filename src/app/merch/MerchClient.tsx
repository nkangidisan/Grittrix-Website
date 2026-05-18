'use client';

import * as React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, Package, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    id: 'p1',
    name: 'Grittrix Collar Shirt',
    description: 'Executive fit with premium breathable fabric.',
    price: '$45.00',
    image: '/image(1).jpeg',
    colors: ['#0f5f3d', '#000000', '#ffffff'],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: 'Grittrix Non-Collar Shirt',
    description: 'Modern minimalist design for daily comfort.',
    price: '$35.00',
    image: '/image(2).jpeg',
    colors: ['#0f5f3d', '#000000', '#f47321'],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'New Arrival'
  },
  {
    id: 'p3',
    name: 'Premium Tech Cap',
    description: 'Structured fit with signature logo embroidery.',
    price: '$25.00',
    image: '/image(3).jpeg',
    colors: ['#0f5f3d', '#000000'],
    sizes: ['One Size'],
    badge: 'Essentials'
  }
];

const stats = [
  { label: 'Premium Quality', value: '100%' },
  { label: 'Fast Delivery', value: '24h' },
  { label: 'Corporate Branding', value: 'Expert' },
  { label: 'Custom Orders', value: 'Unlimited' }
];

const testimonials = [
  {
    name: 'Sarah Nakato',
    role: 'Startup Founder',
    content: 'The quality of the Grittrix collar shirts is unmatched. Our team looks incredibly professional during pitches.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
    rating: 5
  },
  {
    name: 'David Okello',
    role: 'Tech Entrepreneur',
    content: 'I love the minimalist non-collar design. It fits perfectly into my tech-wardrobe and feels great to wear.',
    avatar: 'https://picsum.photos/seed/david/100/100',
    rating: 5
  },
  {
    name: 'Brian Musoke',
    role: 'Corporate Team Lead',
    content: 'Ordered a bulk kit for our last event. The branding was spot on and the delivery was ahead of schedule.',
    avatar: 'https://picsum.photos/seed/brian/100/100',
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
        <Button size="lg" className="rounded-full h-16 w-16 bg-[#0f5f3d] hover:bg-[#0c4d2d] shadow-2xl shadow-[#0f5f3d]/20 text-white p-0">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#0f5f3d]/5 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#f47321]/5 rounded-full blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
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
                <Link href="#collection">Shop Collection</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-black/10 hover:bg-black/5 text-lg px-10 h-14 rounded-full transition-all hover:scale-105" asChild>
                <Link href="#corporate">Customize for Your Team</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating UI Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[30%] hidden lg:block"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-gray-100 p-4 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="bg-[#0f5f3d]/10 p-3 rounded-xl text-[#0f5f3d]">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">In Stock</p>
              <p className="font-bold">Next Day Delivery</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. FEATURED MERCH SHOWCASE */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Collar Shirt', img: '/flyer1.jpeg', tag: 'Premium Fabric' },
              { title: 'Non-Collar Shirt', img: '/flyer2.jpeg', tag: 'Modern Fit' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-[600px] overflow-hidden rounded-3xl cursor-pointer shadow-2xl"
              >
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="luxury apparel mockup"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-10 left-10 text-white">
                  <Badge className="bg-[#f47321] text-white mb-4 px-4 py-1">{item.tag}</Badge>
                  <h3 className="text-4xl font-headline font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70 max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                    Aspirational wear for the modern professional. Engineered for comfort and style.
                  </p>
                  <Button variant="link" className="text-[#00E5A0] p-0 h-auto font-bold group-hover:gap-4 transition-all">
                    Explore Details <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold">
                    Built for Performance
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT COLLECTION SECTION */}
      <section id="collection" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-headline font-bold mb-6"
              >
                Our Signature <span className="text-[#0f5f3d]">Collection</span>
              </motion.h2>
              <p className="text-lg text-gray-500">
                Each piece is meticulously crafted using high-end materials to ensure a world-class experience.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="rounded-full">All Products</Button>
              <Button variant="outline" className="rounded-full">New In</Button>
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
                <Card className="border-none shadow-none bg-transparent group overflow-hidden">
                  <div className="relative aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden mb-6">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint="ecommerce product"
                    />
                    <button className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-400 hover:text-[#f47321] transition-colors shadow-lg shadow-black/5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 duration-300">
                      <Heart className="h-5 w-5" />
                    </button>
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-[#0f5f3d] text-white px-4 py-1">{product.badge}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-headline font-bold group-hover:text-[#0f5f3d] transition-colors">{product.name}</h3>
                      <p className="font-bold text-lg">{product.price}</p>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {product.colors.map((color, i) => (
                          <div 
                            key={i} 
                            className="w-5 h-5 rounded-full border border-gray-200 cursor-pointer transition-transform hover:scale-125" 
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {product.sizes.map((size, i) => (
                          <span key={i} className="text-[10px] font-bold text-gray-400 hover:text-black cursor-pointer uppercase transition-colors">{size}</span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 bg-black hover:bg-[#0f5f3d] text-white rounded-xl h-12 transition-all group-hover:shadow-xl group-hover:shadow-[#0f5f3d]/10">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRAND STORY SECTION */}
      <section className="py-32 bg-[#0f5f3d] text-white relative overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-50%] right-[-20%] w-[100%] h-[100%] border border-white/5 rounded-full"
        />
        
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
                  <p className="text-4xl md:text-5xl font-bold text-[#f47321] mb-2">{stat.value}</p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CUSTOM CORPORATE ORDERS SECTION */}
      <section id="corporate" className="py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 relative">
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
                <Button size="lg" className="bg-black hover:bg-[#0f5f3d] text-white px-12 h-16 rounded-full text-lg font-bold shadow-2xl transition-all hover:scale-105">
                  Request Custom Order
                </Button>
              </div>
              
              <div className="relative">
                <motion.div
                   initial={{ opacity: 0, rotate: 5 }}
                   whileInView={{ opacity: 1, rotate: -5 }}
                   viewport={{ once: true }}
                   className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-black/10"
                >
                  <Image 
                    src="/flyer1.jpeg" 
                    alt="Corporate Merch" 
                    fill 
                    className="object-cover"
                    data-ai-hint="corporate branding"
                  />
                  <div className="absolute inset-0 bg-[#0f5f3d]/10 mix-blend-overlay" />
                </motion.div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden sm:block">
                   <p className="text-xs font-bold text-[#0f5f3d] uppercase tracking-widest mb-2">Enterprise Ready</p>
                   <p className="text-xl font-bold">Bulk Discounts Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF SECTION */}
      <section className="py-24">
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
                <Card className="p-8 h-full border-gray-100 hover:border-[#0f5f3d]/20 transition-all hover:shadow-xl hover:shadow-[#0f5f3d]/5 group">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f47321] text-[#f47321]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-8 italic leading-relaxed">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold group-hover:text-[#0f5f3d] transition-colors">{t.name}</p>
                      <p className="text-xs text-gray-400 font-semibold">{t.role}</p>
                    </div>
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
                <Button size="lg" className="bg-[#0f5f3d] hover:bg-[#0c4d2d] text-white px-12 h-16 rounded-full text-lg font-bold">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-12 h-16 rounded-full text-lg font-bold">
                   <MessageSquare className="mr-2 h-5 w-5" /> Contact Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}