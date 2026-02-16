import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products } from '@/lib/products';
import ProductCard from '@/components/product-card';
import { ArrowRight, CupSoda, Droplets, Shirt, Sparkle } from 'lucide-react';

const categoryIcons = {
  Adire: <Shirt className="h-8 w-8 text-primary" />,
  Fragrances: <Droplets className="h-8 w-8 text-primary" />,
  Drinks: <CupSoda className="h-8 w-8 text-primary" />,
  Essentials: <Sparkle className="h-8 w-8 text-primary" />,
};

const categories = [
  { name: 'Adire', icon: categoryIcons.Adire },
  { name: 'Fragrances', icon: categoryIcons.Fragrances },
  { name: 'Drinks', icon: categoryIcons.Drinks },
  { name: 'Essentials', icon: categoryIcons.Essentials },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-headline tracking-wider text-shadow-lg">
              House of Hameedah
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl font-body">
              Experience the touch of elegance and authenticity in every product.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black font-bold">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="categories" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline text-foreground">What We Offer</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                A curated selection of quality products for your lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <Card key={category.name} className="flex flex-col items-center justify-center p-6 text-center border-2 border-transparent hover:border-primary hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">{category.icon}</div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="featured-products" className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline text-foreground">Featured Products</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Handpicked favorites, just for you.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="link" className="text-primary text-lg font-bold hover:text-accent">
                <Link href="/shop">
                  Explore All Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
