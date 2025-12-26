"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { motion } from "framer-motion";


export default function HeroSection() {
  return (
    <section className="w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center bg-background">
      <HeroHighlight containerClassName="h-auto">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-sm font-bold tracking-widest uppercase text-muted-foreground">
            A Creative Studio
          </div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground"
          >
            <Highlight>Sukasuka Setudio</Highlight>
          </motion.h1>
          <div className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl tracking-wide">
            <TextGenerateEffect words="Raya dengan suka suka" />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="#portfolio">View Work</Link>
            </Button>
            <Button asChild size="lg" className="font-semibold" variant="outline">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
