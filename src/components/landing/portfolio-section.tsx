import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PortfolioSection() {
  const portfolioImages = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-'));

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Selected Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground tracking-wide">
            A glimpse into the projects that define our craft.
          </p>
        </div>
        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {portfolioImages.map((image) => {
            const parts = image.imageUrl.split('/');
            const width = parseInt(parts[parts.length - 2], 10);
            const height = parseInt(parts[parts.length - 1], 10);

            return (
              <div key={image.id} className="overflow-hidden rounded-lg break-inside-avoid group">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={width}
                  height={height}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
