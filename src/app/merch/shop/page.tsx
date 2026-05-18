'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Star, Filter, X, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/PageHeader';

const products = [
  {
    id: 'p1',
    name: 'GRITTRIX Premium Collar Shirt',
    category: 'Apparel',
    description: 'White upper base with deep green lower section and sharp beige lightning stripe. Modern athletic fit with premium fabric texture.',
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
    price: '$28.00',
    priceUgx: '98,000 UGX',
    image: '/noncollar.jpeg',
    colors: ['#ffffff', '#0f5f3d', '#f5f5dc'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Premium Fit'
  },
  {
    id: 'p3',
    name: 'GRITTRIX Signature Cap',
    category: 'Accessories',
    description: 'White front panel with dark green sides and beige curved accent. High-quality structured modern fit.',
    price: '$22.00',
    priceUgx: '77,000 UGX',
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
      <PageHeader 
        title="Official Shop" 
        description="Exclusive GRITTRIX apparel and accessories. Engineered for professionals."
        breadcrumbs={[{ name: 'Merchandise', href: '/merch' }, { name: 'Shop' }]}
      />

      <section className="py-12 border-b border-gray-100 bg-gray-50/30 sticky top-20 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {['All', 'Apparel', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-[#0f5f3d] text-white shadow-lg' 
                    : 'bg-white border border-gray-200 text-gray-400 hover:border-[#0f5f3d]/50 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Experience</p>
              <p className="text-sm font-bold text-[#0f5f3d]">Premium Checkout</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="relative">
              <button className="h-12 w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-black hover:border-[#0f5f3d] hover:bg-[#0f5f3d] hover:text-white transition-all">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#f47321] text-white text-[10px] flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="border-none shadow-none bg-transparent group">
                    <div className="relative aspect-[4/5] bg-gray-50 rounded-[2.5rem] overflow-hidden mb-8 border border-gray-100 shadow-sm transition-all hover:shadow-2xl hover:shadow-[#0f5f3d]/5">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-8 left-8">
                         <Badge className="bg-[#0f5f3d] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">{product.badge}</Badge>
                      </div>
                      <button className="absolute bottom-8 right-8 h-14 w-14 rounded-full bg-white/80 backdrop-blur-md border border-white flex items-center justify-center text-gray-400 hover:text-[#f47321] transition-all scale-0 group-hover:scale-100">
                        <Heart className="h-6 w-6" />
                      </button>
                    </div>
                    
                    <div className="space-y-4 px-4">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <p className="text-[10px] font-bold text-[#f47321] uppercase tracking-widest mb-1">{product.category}</p>
                          <h3 className="text-2xl font-headline font-bold group-hover:text-[#0f5f3d] transition-colors">{product.name}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[#0f5f3d]">{product.price}</p>
                          <p className="text-[10px] font-bold text-gray-400">{product.priceUgx}</p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center gap-4 py-2">
                         <div className="flex gap-1.5">
                            {product.colors.map((c, i) => (
                              <div key={i} className="w-4 h-4 rounded-full border border-gray-200" style={{ backgroundColor: c }} />
                            ))}
                         </div>
                         <Separator orientation="vertical" className="h-4" />
                         <div className="flex gap-2">
                            {product.sizes.slice(0, 3).map((s, i) => (
                              <span key={i} className="text-[10px] font-bold text-gray-400 uppercase">{s}</span>
                            ))}
                            {product.sizes.length > 3 && <span className="text-[10px] font-bold text-gray-400">+</span>}
                         </div>
                      </div>

                      <Button 
                        onClick={() => setCartCount(c => c + 1)}
                        className="w-full h-14 bg-black hover:bg-[#0f5f3d] text-white rounded-2xl font-bold transition-all shadow-xl shadow-black/5 hover:shadow-[#0f5f3d]/20 active:scale-[0.98]"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
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

      <section className="py-32 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100">
             <div className="inline-flex p-4 bg-green-50 rounded-2xl mb-8">
                <Check className="h-8 w-8 text-[#0f5f3d]" />
             </div>
             <h2 className="text-4xl font-headline font-bold mb-6">Guaranteed Quality</h2>
             <p className="text-lg text-gray-500 mb-12">Every GRITTRIX product goes through a rigorous performance audit before reaching your doorstep. We represent the future of professional techwear.</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { l: 'Express Delivery', d: '24-48h' },
                  { l: 'Secure Payment', d: 'AES-256' },
                  { l: 'Ethical Build', d: '100%' },
                  { l: 'Local Support', d: '24/7' }
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{s.l}</p>
                    <p className="text-lg font-bold text-[#0f5f3d]">{s.d}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
