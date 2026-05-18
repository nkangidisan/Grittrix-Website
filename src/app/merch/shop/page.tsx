'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, ShieldCheck, Zap, Users, Check, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const products = [
  {
    id: 'p1',
    name: 'GRITTRIX Premium Collar Shirt',
    category: 'Apparel',
    description: 'White upper base with deep green lower section and sharp beige lightning stripe. Modern athletic fit.',
    price: '$20.00',
    priceUgx: '70,000 UGX',
    image: '/collar.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: 'GRITTRIX Signature Non-Collar Shirt',
    category: 'Apparel',
    description: 'White dominant upper body with geometric green shoulder panels and a clean modern techwear aesthetic.',
    price: '$18.00',
    priceUgx: '63,000 UGX',
    image: '/noncollar.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Limited Edition'
  },
  {
    id: 'p3',
    name: 'GRITTRIX Signature Cap',
    category: 'Accessories',
    description: 'White front panel with dark green sides and beige curved accent. Structured modern fit.',
    price: '$15.00',
    priceUgx: '52,500 UGX',
    image: '/cap.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    sizes: ['Adjustable'],
    badge: 'New Arrival'
  }
];

export default function ShopPage() {
  const [filter, setFilter] = React.useState('All');
  const [cartCount, setCartCount] = React.useState(0);
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Shop Header */}
      <div className="bg-[#050508] pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--accent-primary),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/merch" className="inline-flex items-center text-[#00ffb0] mb-8 font-bold hover:gap-2 transition-all">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Brand Story
          </Link>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-6">
            Official <span className="text-[#0f5f3d]">Protocol</span> Shop
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-medium">
            Exclusive GRITTRIX apparel and accessories. Engineered for professionals who demand excellence.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <section className="py-8 border-b border-gray-100 bg-white sticky top-20 z-40 backdrop-blur-xl">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {['All', 'Apparel', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-[#0f5f3d] text-white shadow-xl shadow-[#0f5f3d]/20' 
                    : 'bg-gray-50 border border-gray-200 text-gray-400 hover:border-[#0f5f3d]/50 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-8">
            <div className="text-right hidden sm:block">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Secure Protocol</p>
              <p className="text-sm font-bold text-[#0f5f3d]">Verified Checkout</p>
            </div>
            <div className="relative">
              <button className="h-14 w-14 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-black hover:border-[#0f5f3d] hover:text-[#0f5f3d] transition-all active:scale-90">
                <ShoppingCart className="h-6 w-6" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-[#f47321] text-white text-[10px] flex items-center justify-center font-bold"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <main className="py-24 bg-gray-50/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="border-none shadow-none bg-transparent group">
                    <div className="relative aspect-[4/5] bg-white rounded-[3rem] overflow-hidden mb-10 border border-gray-100 shadow-sm transition-all hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-contain p-16 transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint="product asset"
                      />
                      <div className="absolute top-10 left-10">
                         <Badge className="bg-[#0f5f3d] text-white px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] border-none">{product.badge}</Badge>
                      </div>
                      <button className="absolute bottom-10 right-10 h-16 w-16 rounded-full bg-white/90 backdrop-blur-md border border-white flex items-center justify-center text-gray-400 hover:text-[#f47321] transition-all scale-0 group-hover:scale-100 shadow-2xl">
                        <Heart className="h-7 w-7" />
                      </button>
                    </div>
                    
                    <div className="space-y-6 px-4">
                      <div className="flex justify-between items-start gap-6">
                        <div>
                          <p className="text-[10px] font-bold text-[#f47321] uppercase tracking-widest mb-2">{product.category}</p>
                          <h3 className="text-3xl font-headline font-bold group-hover:text-[#0f5f3d] transition-colors tracking-tighter leading-none">{product.name}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-[#0f5f3d] tracking-tighter">{product.price}</p>
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{product.priceUgx}</p>
                        </div>
                      </div>

                      <p className="text-base text-gray-500 leading-relaxed line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center gap-6 py-4 border-y border-gray-100">
                         <div className="flex gap-2">
                            {product.colors.map((c, i) => (
                              <div key={i} className="w-5 h-5 rounded-full border border-gray-200 hover:scale-125 transition-transform cursor-pointer" style={{ backgroundColor: c }} />
                            ))}
                         </div>
                         <Separator orientation="vertical" className="h-4" />
                         <div className="flex gap-3 overflow-x-auto no-scrollbar">
                            {product.sizes.map((s, i) => (
                              <span key={i} className="text-[10px] font-bold text-gray-400 uppercase hover:text-black cursor-pointer transition-colors shrink-0">{s}</span>
                            ))}
                         </div>
                      </div>

                      <Button 
                        onClick={() => setCartCount(c => c + 1)}
                        className="w-full h-16 bg-black hover:bg-[#0f5f3d] text-white rounded-2xl font-bold transition-all shadow-2xl hover:shadow-[#0f5f3d]/30 active:scale-95"
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Secure Cart
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Guaranteed Quality Bar */}
      <section className="py-40 bg-[#050508] text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-16 md:p-24 shadow-2xl border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#0f5f3d]/10 rounded-full blur-[80px] -mr-32 -mt-32" />
             <div className="inline-flex p-5 bg-[#0f5f3d]/20 rounded-2xl mb-10">
                <Check className="h-10 w-10 text-[#00ffb0]" />
             </div>
             <h2 className="text-5xl font-headline font-bold mb-8 tracking-tighter text-white">Guaranteed Protocol Quality</h2>
             <p className="text-xl text-gray-400 mb-16 leading-relaxed font-medium">Every GRITTRIX product undergoes a performance audit before reaching your doorstep. We represent the future of professional techwear.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { l: 'Express Delivery', d: '24-48h', i: Zap },
                  { l: 'Secure Payment', d: 'AES-256', i: ShieldCheck },
                  { l: 'Ethical Build', d: '100% Certified', i: Check },
                  { l: 'Support', d: '24/7 Priority', i: Users }
                ].map((s, i) => (
                  <div key={i} className="text-center group">
                    <div className="flex justify-center mb-4">
                      <s.i className="h-6 w-6 text-[#00ffb0] group-hover:scale-125 transition-transform" />
                    </div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{s.l}</p>
                    <p className="text-lg font-bold text-white tracking-tight">{s.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
