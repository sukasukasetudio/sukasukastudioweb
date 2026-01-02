"use client";

import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmad",
    role: "Pengantin",
    rating: 5,
    text: "Pengalaman yang menakjubkan! Pasukan berjaya menangkap setiap detik berharga dengan cantik. Gambar yang dihasilkan melebihi jangkaan kami dan kami sangat gembira dengan hasilnya.",
    image: "/img/IMG_0237.avif",
  },
  {
    id: 2,
    name: "Ahmad Zaki",
    role: "Pengantin Lelaki",
    rating: 5,
    text: "Perkhidmatan profesional dari mula hingga akhir. Jurugambar sangat mesra, kreatif, dan membuatkan kami berasa selesa sepanjang sesi.",
    image: "/img/IMG_0237.avif",
  },
  {
    id: 3,
    name: "Nurul Iman",
    role: "Penganjur Acara",
    rating: 5,
    text: "Kualiti yang luar biasa dan perhatian terhadap butiran. Sukasuka Setudio menyampaikan tepat apa yang kami perlukan untuk acara korporat kami. Sangat disyorkan!",
    image: "/img/IMG_9677.avif",
  },
  {
    id: 4,
    name: "Muhammad Firdaus",
    role: "Pelanggan",
    rating: 5,
    text: "Proses tempahan sangat lancar dan pasukan sangat membantu. Gambar akhir sangat menakjubkan dan berjaya menangkap intipati sambutan kami dengan sempurna.",
    image: "/img/IMG_9677.avif",
  },
];

export default function AboutSection() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="about" className="relative py-20 sm:py-24 overflow-hidden bg-black/50">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 tracking-wide leading-relaxed font-light">
            Real experiences from our valued customers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full">
                  <div className="group flex w-full h-full flex-col md:flex-row rounded-2xl border border-white/10 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] p-3 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5">
                    {/* Image Side */}
                    <div className="relative w-full md:w-1/2 h-56 md:h-auto flex-shrink-0 mx-1 my-1">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        {testimonial.image ? (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                            <span className="text-white/30 text-4xl font-light">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                    </div>
                    {/* Text Side */}
                    <div className="flex-1 px-4 py-3 md:px-5 md:py-3 flex flex-col justify-between">
                      <div>
                        <Quote className="h-6 w-6 text-white/30 mb-3" />
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle2 className="h-4 w-4 text-white/50" />
                          <span className="text-xs font-light text-white/50 tracking-wide">Verified Review</span>
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed text-white/90 mb-6 font-light">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-sm font-light tracking-wide text-white/90">{testimonial.name}</p>
                        <p className="text-xs text-white/60 mt-1 font-light">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-white/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 hover:border-white/30 text-white hover:text-white shadow-lg" />
            <CarouselNext className="hidden md:flex -right-12 border-white/20 bg-black/80 backdrop-blur-sm hover:bg-black/90 hover:border-white/30 text-white hover:text-white shadow-lg" />
          </Carousel>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-white/80"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
