"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Star } from "lucide-react";

const PACKAGES = [
  { id: 'good', name: "Good", price: "20k", desc: "Tersedia 4 section dengan single page, solusi praktis bagi pemula yang ingin tampil keren.", icon: <CheckCircle className="w-6 h-6" /> },
  { id: 'impressive', name: "Impressive", price: "50k", desc: "Website single page dengan minimal 5 section untuk menyimpan konten & available untuk ditambahkan.", icon: <ShieldCheck className="w-6 h-6" /> },
  { id: 'excellent', name: "Excellent", price: "80k", desc: "Website dengan tampilan premium dengan tersedia untuk request Multi Page. Profesional & Elegan.", icon: <Star className="w-6 h-6" /> },
];

export default function PackageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
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

  // Shared Card UI Component
  const CardContent = ({ pkg, isActive, isDesktop }: { pkg: typeof PACKAGES[0], isActive: boolean, isDesktop?: boolean }) => (
    <div className={`relative h-full p-0.5 rounded-[2.5rem] transition-all duration-700 ${
      isActive || isDesktop
        ? 'bg-gradient-to-br from-emerald-500 via-gold to-emerald-500 glow-emerald-intense dark:glow-gold' 
        : 'bg-emerald-900/10'
    }`}>
      <div className={`p-6 lg:p-8 rounded-[2.4rem] bg-white dark:bg-[#022c22] flex flex-col items-center text-center h-full shadow-xl ${isDesktop ? 'min-h-[420px]' : 'min-h-[460px]'}`}>
        {(pkg.name === 'Impressive' || isActive) && (
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-gold text-white text-[9px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl z-30 whitespace-nowrap">
             {pkg.name === 'Impressive' ? 'Most Popular' : `${pkg.name} Tier`}
          </div>
        )}

        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${
          isActive || isDesktop
            ? 'bg-gold/20 text-gold' 
            : 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 opacity-50'
        }`}>
          {pkg.icon}
        </div>

        <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50 mb-2 tracking-tight">
          Paket {pkg.name}
        </h3>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-3xl font-black text-emerald-900 dark:text-gold tracking-tighter">
            {pkg.price}
          </span>
          <span className="text-emerald-900/40 dark:text-emerald-100/40 text-[9px] font-bold uppercase tracking-widest">
            / Project
          </span>
        </div>

        <p className={`text-xs leading-relaxed mb-10 flex-1 ${(isActive || isDesktop) ? 'text-emerald-900/60 dark:text-emerald-100/60' : 'text-emerald-900/20 dark:text-emerald-100/20'}`}>
          {pkg.desc}
        </p>

        <Link
          href="/templates"
          className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${
            isActive || isDesktop
              ? "bg-emerald-900 dark:bg-emerald-500 text-white dark:text-emerald-950 hover:shadow-xl hover:-translate-y-1"
              : "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-100 opacity-50 pointer-events-none"
          }`}
        >
          Pilih Paket
        </Link>
      </div>
    </div>
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* LAPTOP/DESKTOP VIEW: Static Grid, All Glowing */}
      <div className="hidden lg:grid grid-cols-3 gap-8 py-10">
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} className={`transition-all duration-500 ${pkg.name === 'Impressive' ? 'scale-105' : 'scale-100'}`}>
            <CardContent pkg={pkg} isActive={true} isDesktop={true} />
          </div>
        ))}
      </div>

      {/* MOBILE/TABLET VIEW: Carousel */}
      <div className="lg:hidden group/carousel relative">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y -ml-4 items-center py-16">
            {/* Duplicated for smooth loop on smaller screens */}
            {[...PACKAGES, ...PACKAGES].map((pkg, index) => {
              const isActive = selectedIndex === index;
              return (
                <div
                  key={`${pkg.id}-${index}`}
                  className="flex-[0_0_85%] sm:flex-[0_0_50%] pl-4 transition-all duration-700 ease-in-out select-none"
                  style={{
                    transform: isActive ? "scale(1.05)" : "scale(0.9)",
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 0,
                  }}
                >
                  <CardContent pkg={pkg} isActive={isActive} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Indicators */}
        <div className="flex justify-center gap-3 mt-4">
          {PACKAGES.map((_, i) => (
            <button
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                (selectedIndex % PACKAGES.length) === i ? "w-10 bg-gold" : "w-2 bg-emerald-900/10 dark:bg-emerald-100/10"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
