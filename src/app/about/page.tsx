import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground">Our Story</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Rooted in tradition, inspired by modern elegance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6 text-lg text-foreground/90">
            <p>
              House of Hameedah began with a simple passion: to share the beauty of authentic craftsmanship and the richness of our culture with the world. Our journey started with Adire, the timeless Nigerian tie-dye fabric, each piece telling a unique story of artistry and heritage.
            </p>
            <p>
              As our family grew, so did our vision. We expanded our collection to include products that touch every part of a graceful life. From captivating fragrances that evoke memories, to nourishing, homemade drinks that refresh the soul, and essentials that bring comfort to your home.
            </p>
            <p>
              We are more than just a brand; we are a promise of <span className="text-primary font-semibold">quality</span>, <span className="text-primary font-semibold">authenticity</span>, and <span className="text-primary font-semibold">customer satisfaction</span>. Every item is carefully selected or crafted, ensuring it meets our high standards and brings a touch of Hameedah Haven into your life. Thank you for being a part of our story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
