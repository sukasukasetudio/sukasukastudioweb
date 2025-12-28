"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 overflow-hidden bg-black/50">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="max-w-3xl mx-auto glass-card-dark relative overflow-hidden border-white/20 shadow-2xl">
            <CardContent className="p-8 sm:p-10">
              <div className="text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    A Creative Studio For{' '}
                    <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      Visionaries
                    </span>
                  </h2>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-4 text-base sm:text-lg leading-relaxed text-white/70 tracking-wide max-w-2xl mx-auto"
                >
                  Sukasuka Setudio is a multidisciplinary creative studio based in the heart of digital innovation. We partner with brands and businesses to create meaningful experiences, tell compelling stories, and build lasting connections. Our work is driven by a passion for simplicity, elegance, and purpose.
                </motion.p>
              </div>
              <Meteors number={30} />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
