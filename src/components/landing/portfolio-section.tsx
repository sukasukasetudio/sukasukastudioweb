"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const package1 = [
  { id: 'suka1', src: '/img/suka1.jpg', description: 'Creative Project 1' },
  { id: 'suka2', src: '/img/suka2.jpg', description: 'Creative Project 2' },
  { id: 'suka3', src: '/img/suka3.jpg', description: 'Creative Project 3' },
];

const package2 = [
  { id: 'suka4', src: '/img/suka4.jpg', description: 'Creative Project 4' },
  { id: 'suka5', src: '/img/suka5.jpg', description: 'Creative Project 5' },
  { id: 'suka6', src: '/img/suka6.jpg', description: 'Creative Project 6' },
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
            Our Selected{' '}
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 tracking-wide leading-relaxed">
            A glimpse into the projects that define our craft.
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
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-white/20"></div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60">Package</h3>
                <span className="text-2xl font-black text-white">01</span>
                <div className="h-px w-16 bg-white/20"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {package1.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-full max-w-[320px]"
                >
                  <div
                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <div className="mx-2 flex-1">
                      <div className="relative mt-2 aspect-[3/4] w-full">
                        <Image
                          src={image.src}
                          alt={image.description}
                          width={1080}
                          height={1080}
                          className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                      <div className="text-xs">{image.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Package 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-16 bg-white/20"></div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60">Package</h3>
                <span className="text-2xl font-black text-white">02</span>
                <div className="h-px w-16 bg-white/20"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
                    className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <div className="mx-2 flex-1">
                      <div className="relative mt-2 aspect-[3/4] w-full">
                        <Image
                          src={image.src}
                          alt={image.description}
                          width={1080}
                          height={1080}
                          className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                            opacity: 1,
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                      <div className="text-xs">{image.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
