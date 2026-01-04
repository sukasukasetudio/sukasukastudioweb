"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const package1 = [
  { id: 'suka1', src: '/img/IMG_0237.avif', description: 'Minimalist' },
  { id: 'suka2', src: '/img/IMG_9677.avif', description: 'Classic' },
];

const rayaPackages = [
  { 
    name: 'Package A (1 Deco)', 
    showAnyDeco: true,
    prices: ['RM99'],
    includes: ['Unlimited Shots', 'All photos edited', '20 minutes', '1-8 pax', 'Add on pax - RM10/pax']
  },
  { 
    name: 'Package B (2 Deco)', 
    prices: ['RM180'],
    includes: ['Unlimited Shots', 'All photos edited', '20 minutes', '1-8 pax', 'Add on pax - RM10/pax']
  },
  { 
    name: 'Package C (2 Deco)', 
    prices: ['RM180'],
    includes: ['Unlimited Shots', 'All photos edited', '40 minutes', 'Maximum 12 pax', 'Add on pax - RM10/pax']
  },
];

const package2 = [
  { id: 'suka4', src: '/img/IMG_0237.avif', description: 'Retro' },
  { id: 'suka5', src: '/img/IMG_9677.avif', description: 'Funky' },
  { id: 'suka6', src: '/img/IMG_9677.avif', description: 'Studio' },
];

const selfShootPackages = [
  { 
    name: 'Package A (1 Deco)', 
    showAnyDeco: true,
    prices: ['RM49'],
    includes: ['Unlimited Shots (20 mins)', 'All photos edited', '1-3 pax', 'Add on pax - RM10/pax', 'Add on time - RM25/10 min']
  },
  { 
    name: 'Package B (2 Deco)', 
    showAnyDeco: true,
    prices: ['RM89'],
    includes: ['Unlimited Shots (25 mins)', 'All photos edited', '1-4 pax', 'Add on pax - RM10/pax', 'Add on time - RM25/10 min']
  },
  { 
    name: 'Package C (3 Deco)', 
    prices: ['RM99'],
    includes: ['Unlimited Shots (35 mins)', 'All photos edited', '1-4 pax', 'Add on pax - RM10/pax', 'Add on time - RM25/10 min']
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-24 overflow-hidden bg-black/50">
      <div className="absolute inset-0 gradient-mesh opacity-20 z-[3]" />
      {/* Solid black overlay that fades at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 via-black/80 via-black/95 to-black z-[4]" />
      {/* Additional smooth fade overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-transparent via-transparent via-black/30 via-black/60 via-black/85 to-transparent z-[5]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Collection & Package
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 tracking-wide leading-relaxed font-light">
            Curated collections that reflect our commitment to excellence
          </p>
        </motion.div>
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Package 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-16">
              <div className="flex items-center justify-center gap-6 mb-2">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-white/20"></div>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-xs font-light tracking-[0.2em] uppercase text-white/50">Deco</h3>
                  <span className="text-3xl font-light tracking-wider text-white">RAYA</span>
                </div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-white/30 to-white/20"></div>
              </div>
            </div>
            <div className="max-w-[1000px] mx-auto mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {package1.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full max-w-[480px]"
                >
                  <div
                    className="group flex w-full cursor-pointer flex-col items-stretch rounded-2xl border border-white/10 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] p-3 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="mx-1 flex-1 overflow-hidden rounded-xl">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                        <Image
                          src={image.src}
                          alt={image.description}
                          width={1080}
                          height={1080}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-shrink-0 items-center justify-between px-2 pb-1">
                      <div className="text-sm font-light tracking-wide text-white/90">{image.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
            {/* Package List Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[960px] mx-auto"
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] px-5 py-5 shadow-2xl shadow-black/50">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-light tracking-wide text-white mb-2">Package RAYA</h3>
                  <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {rayaPackages.map((pkg, idx) => (
                    <div key={idx} className="group border border-white/10 rounded-xl p-5 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                      <h4 className="text-base font-light tracking-wide text-white mb-4 flex items-center flex-wrap">
                        <span>{pkg.name}</span>
                        {pkg.showAnyDeco && <span className="text-xs font-extralight text-white/60 ml-2 italic whitespace-nowrap">*any deco</span>}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.prices.map((price, priceIdx) => (
                          <span key={priceIdx} className="text-lg font-light tracking-wide text-white bg-white/5 border border-white/10 px-4 py-1.5 rounded-lg backdrop-blur-sm">
                            {price}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs font-light text-white/70 flex items-start leading-relaxed">
                            <span className="mr-2.5 text-white/40 mt-1.5 text-[8px]">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Package 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-16">
              <div className="flex items-center justify-center gap-6 mb-2">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-white/20"></div>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-xs font-light tracking-[0.2em] uppercase text-white/50">Deco</h3>
                  <span className="text-3xl font-light tracking-wider text-white">SELFSHOOT</span>
                </div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-white/30 to-white/20"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-8">
              {package2.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full max-w-[320px]"
                >
                  <div
                    className="group flex w-full cursor-pointer flex-col items-stretch rounded-2xl border border-white/10 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] p-3 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="mx-1 flex-1 overflow-hidden rounded-xl">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                        <Image
                          src={image.src}
                          alt={image.description}
                          width={1080}
                          height={1080}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-shrink-0 items-center justify-between px-2 pb-1">
                      <div className="text-sm font-light tracking-wide text-white/90">{image.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Package List Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[960px] mx-auto"
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] px-6 py-8 shadow-2xl shadow-black/50">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-light tracking-wide text-white mb-2">Package SELFSHOOT</h3>
                  <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {selfShootPackages.map((pkg, idx) => (
                    <div key={idx} className="group border border-white/10 rounded-xl p-5 bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
                      <h4 className="text-base font-light tracking-wide text-white mb-4 flex items-center flex-wrap">
                        <span>{pkg.name}</span>
                        {pkg.showAnyDeco && <span className="text-xs font-extralight text-white/60 ml-2 italic whitespace-nowrap">*any deco</span>}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pkg.prices.map((price, priceIdx) => (
                          <span key={priceIdx} className="text-lg font-light tracking-wide text-white bg-white/5 border border-white/10 px-4 py-1.5 rounded-lg backdrop-blur-sm">
                            {price}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {pkg.includes.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs font-light text-white/70 flex items-start leading-relaxed">
                            <span className="mr-2.5 text-white/40 mt-1.5 text-[8px]">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
