import { Palette, Monitor, Camera, Clapperboard } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Branding & Identity',
    description: 'Crafting unique brand identities that resonate and endure.',
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: 'Web Design & Development',
    description: 'Building beautiful, responsive, and high-performing websites.',
  },
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: 'Photography & Videography',
    description: 'Capturing moments and stories through stunning visuals.',
  },
  {
    icon: <Clapperboard className="h-8 w-8 text-primary" />,
    title: 'Art Direction',
    description: 'Defining and executing a cohesive visual style for your projects.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground tracking-wide">
            We offer a range of creative services to bring your ideas to life.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="bg-background/50 border-border/50 text-center hover:border-primary/50 transition-colors duration-300 flex flex-col">
              <CardHeader className="items-center flex-grow">
                <div className="mb-4 p-4 bg-secondary rounded-full">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="pt-2 text-sm">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
