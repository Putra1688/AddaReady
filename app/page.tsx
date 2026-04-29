import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import logoCircle from "./logo-circle.png";
import PackageCarousel from "@/components/marketing/PackageCarousel";
import AdvantagesAccordion from "@/components/marketing/AdvantagesAccordion";
import TestimonialCarousel from "@/components/marketing/TestimonialCarousel";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#022c22]">
      <div className="fixed inset-0 pointer-events-none -z-20 opacity-30 dark:opacity-20 translate-y-[-10%]">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-emerald-500/20 filter blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-gold/10 filter blur-[150px] rounded-full" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/hero-background.png"
            alt="Premium Background"
            fill
            className="object-cover opacity-90 dark:opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-emerald-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/40 to-emerald-950" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 mb-8 slide-up">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 dark:text-emerald-50">Premium Website Services</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 leading-[1.1]">
              Elevate Your <span className="gold-text">Professional Identity</span> with AddaReady
            </h1>
            
            <p className="text-xl lg:text-2xl text-emerald-100/60 mb-12 max-w-2xl leading-relaxed slide-up" style={{ animationDelay: '0.2s' }}>
              Kami membangun representasi digital yang elegan, cepat, dan berdampak tinggi. Solusi terbaik untuk portofolio dan branding profesional Anda.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/templates"
                className="flex items-center justify-center gap-2 px-8 h-14 bg-emerald-900 dark:bg-emerald-500 text-white dark:text-emerald-950 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-emerald-900/20"
              >
                Jelajahi Katalog <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="https://wa.me/6283153248283?text=Halo%2C%20saya%20tertarik%20dengan%20tawaran%20Anda.%20Namun%2C%20ada%20beberapa%20hal%20yang%20perlu%20saya%20konsultasikan%20untuk%20memperjelas%20apa%20yang%20saya%20harapkan.%20Bisakah%20saya%20meminta%20waktunya%3F%20Terima%20kasih"
                target="_blank"
                className="flex items-center justify-center px-8 h-14 border-2 border-emerald-900/10 dark:border-emerald-500/20 font-bold rounded-full text-emerald-900 dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-all"
              >
                Konsultasi Gratis
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-8 py-8 border-y border-emerald-900/5 dark:border-emerald-500/10 w-full justify-center flex-wrap slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-gold">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-100/40 font-bold">Premium Quality</span>
              </div>
              <div className="w-px h-8 bg-emerald-100/10 hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-gold">24/7</span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-100/40 font-bold">Support Ready</span>
              </div>
              <div className="w-px h-8 bg-emerald-100/10 hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-gold">Fast</span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-100/40 font-bold">Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packs Preview */}
      <section className="py-32 bg-emerald-950/5 dark:bg-[#011a14] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-gold filter blur-[100px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 text-emerald-950 dark:text-emerald-50">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Pilih Paket <span className="gold-text">Terbaik Anda</span></h2>
            <p className="text-emerald-900/60 dark:text-emerald-100/60 max-w-xl mx-auto">
              Beragam pilihan paket yang dirancang untuk memenuhi standar profesional Anda dengan harga kompetitif.
            </p>
          </div>

          <PackageCarousel />
        </div>
      </section>

      {/* Advantages Section */}
      <AdvantagesAccordion />

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Footer Minimalist */}
      <footer className="mt-auto py-12 border-t border-emerald-950/5 dark:border-emerald-900/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black text-emerald-950 dark:text-emerald-50">
            Adda<span className="gold-text">Ready</span>
          </div>
          <div className="text-sm text-emerald-900/40 dark:text-emerald-100/40 font-medium">
            © 2024 AddaReady Studio. Website Portofolio & Branding Digital.
          </div>
          <div className="flex gap-8 text-sm font-bold text-emerald-950 dark:text-emerald-50">
            <Link href="https://www.instagram.com/addaready" className="hover:text-gold transition-colors">Instagram</Link>
            <Link href="https://www.tiktok.com/@addaready" className="hover:text-gold transition-colors">Tiktok</Link>
            <Link href="https://www.linkedin.com/in/ranggadsaputra" className="hover:text-gold transition-colors">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
