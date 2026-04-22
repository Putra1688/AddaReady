"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Founder, TechInno Solutions",
    content: "Layanan yang luar biasa! Website kami sekarang terlihat jauh lebih profesional dan modern. Tim AddaReady sangat responsif dan mengerti detail estetika yang kami cari.",
    rating: 5,
  },
  {
    id: 2,
    name: "Siti Rahma",
    role: "Marketing Director, Creative Hub",
    content: "Sangat puas dengan hasilnya. Performa website sangat cepat dan desainnya benar-benar eksklusif. Ini adalah investasi terbaik untuk branding digital perusahaan kami.",
    rating: 5,
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Independent Consultant",
    content: "AddaReady berhasil mengubah visi saya menjadi realitas digital yang memukau. Proses kerjanya transparan dan hasilnya melebihi ekspektasi. Sangat direkomendasikan!",
    rating: 5,
  },
  {
    id: 4,
    name: "Maya Indah",
    role: "CEO, Fashion Forward",
    content: "Detail yang diberikan pada setiap section sangat luar biasa. Website kami kini menjadi wajah utama brand yang membanggakan. Terima kasih AddaReady!",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const TestimonialCard = ({ testimonial, isActive }: { testimonial: typeof TESTIMONIALS[0], isActive: boolean }) => (
    <div className={`relative p-8 rounded-[2rem] transition-all duration-700 h-full flex flex-col justify-between ${
      isActive 
        ? 'bg-white dark:bg-emerald-900/40 shadow-2xl scale-100 opacity-100 border border-emerald-100 dark:border-emerald-800' 
        : 'bg-emerald-50/50 dark:bg-emerald-950/20 scale-90 opacity-40 blur-[1px]'
    }`}>
      <div className="mb-6">
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-gold text-gold" />
          ))}
        </div>
        <Quote className="w-8 h-8 text-emerald-200 dark:text-emerald-800 mb-4" />
        <p className="text-emerald-900/80 dark:text-emerald-100/80 text-lg italic leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>
      
      <div>
        <div className="h-px w-12 bg-gold/30 mb-4" />
        <h4 className="font-bold text-emerald-950 dark:text-emerald-50 text-base">
          {testimonial.name}
        </h4>
        <p className="text-emerald-900/40 dark:text-emerald-100/40 text-xs font-medium uppercase tracking-widest">
          {testimonial.role}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-32 bg-emerald-950/5 dark:bg-[#011a14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">
            Apa Kata <span className="gold-text">Klien Kami</span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4" ref={emblaRef}>
            <div className="flex -ml-4">
              {TESTIMONIALS.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4"
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={selectedIndex === index} 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  selectedIndex === i ? "w-10 bg-gold" : "w-2 bg-emerald-900/10 dark:bg-emerald-100/10"
                }`}
                onClick={() => emblaApi?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
