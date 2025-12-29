"use client";

import { Palette, Camera, Clapperboard, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlareCard } from '@/components/ui/glare-card';

const services = [
  {
    icon: <Palette className="h-5 w-5" />,
    title: 'Branding & Identity',
    description: 'Crafting unique brand identities that resonate and endure.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: <Camera className="h-5 w-5" />,
    title: 'Photography & Videography',
    description: 'Capturing moments and stories through stunning visuals.',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    icon: <Clapperboard className="h-5 w-5" />,
    title: 'Art Direction',
    description: 'Defining and executing a cohesive visual style for your projects.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Creative Studio',
    description: 'Full-service creative solutions tailored to your vision.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-24 overflow-hidden bg-black/50">
      <div className="absolute inset-0 gradient-mesh opacity-40 z-[3]" />
      {/* Solid black overlay that fades at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 via-black/80 via-black/95 to-black z-[4]" />
      {/* Additional smooth fade overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent via-transparent via-black/30 via-black/60 via-black/85 to-transparent z-[5]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What We{' '}
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 tracking-wide leading-relaxed">
            We offer a range of creative services to bring your ideas to life.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 lg:gap-x-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full sm:w-auto min-w-[220px] max-w-[240px] lg:min-w-[240px] lg:max-w-[260px]"
            >
              <div className="[&>div]:!aspect-[4/3] [&>div]:!h-auto [&>div]:!w-full [&>div]:!max-w-full">
                <GlareCard className="h-full flex flex-col w-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
                  <div className="flex flex-col items-center flex-grow p-4 sm:p-5 relative z-10 group h-full justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="mb-3 p-2.5 rounded-xl bg-white/10 border border-white/20 inline-flex"
                    >
                      <div className="text-white">{service.icon}</div>
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 text-center group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed text-center">
                      {service.description}
                    </p>
                  </div>
                </GlareCard>
        </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}