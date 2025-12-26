import { Card, CardContent } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-card/50 relative overflow-hidden">
          <CardContent className="pt-6">
            <div className="text-center relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A Creative Studio For Visionaries
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground tracking-wide">
                Sukasuka Setudio is a multidisciplinary creative studio based in the heart of digital innovation. We partner with brands and businesses to create meaningful experiences, tell compelling stories, and build lasting connections. Our work is driven by a passion for simplicity, elegance, and purpose.
              </p>
            </div>
            <Meteors number={20} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
