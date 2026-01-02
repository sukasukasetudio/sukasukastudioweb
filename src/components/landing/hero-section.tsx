"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';


export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden bg-black/50">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <HeroHighlight containerClassName="h-auto relative z-10">
        <div className="container mx-auto px-4 pb-20  sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4"
          >
            <div className="inline-block px-3 py-1.5 rounded-full glass-card-dark border border-white/20 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
                A Creative Studio
              </span>
            </div>
          </motion.div>
          
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
              duration: 0.8,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 text-white"
          >
            <Highlight className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/70">
              SUKASUKA SETUDIO
            </Highlight>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto"
          >
            <div className="text-base text-white/70 sm:text-lg md:text-xl tracking-wide leading-relaxed">
              <TextGenerateEffect words="Where meaningful moments are captured" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3"
          >
            <Button 
              asChild 
              size="default" 
              className="font-medium px-6 py-2.5 text-sm group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-white text-black hover:bg-white/90"
            >
              <Link href="#portfolio" className="flex items-center gap-2">
                Collection
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="default" 
              className="font-medium px-6 py-2.5 text-sm group hover:scale-105 transition-all duration-300 border border-white/30 bg-transparent text-white hover:bg-white/10"
              variant="outline"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
}
