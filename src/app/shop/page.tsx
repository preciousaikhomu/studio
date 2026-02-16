'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products, type Product } from '@/lib/products';
import ProductCard from '@/components/product-card';

const categories = ['All', 'Adire', 'Fragrances', 'Drinks', 'Essentials'];

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProducts = activeTab === 'All'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Our Collection</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our curated selection of fine products.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-2xl grid-cols-2 sm:grid-cols-5 h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm md:text-base">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        <AnimatePresence products={filteredProducts} />
        
      </Tabs>
    </div>
  );
}

// A simple component to animate the product grid on tab change
function AnimatePresence({ products }: { products: Product[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="animate-in fade-in-0 duration-500"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
        </div>
    );
}
