import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
          Sukasuka Setudio
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl tracking-wide">
          Raya dengan suka suka
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="font-semibold">
            <Link href="#portfolio">View Work</Link>
          </Button>
          <Button asChild size="lg" className="font-semibold" variant="outline">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
