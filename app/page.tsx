import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, ShieldCheck, Sparkles } from "lucide-react";
import logoCircle from "./logo-circle.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#022c22]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#022c22]/80 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={logoCircle} alt="AddaReady Logo" width={40} height={40} priority />
            <span className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-50">
              Adda<span className="text-emerald-500">Ready</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/templates" className="text-sm font-medium text-emerald-900/70 hover:text-emerald-900 dark:text-emerald-50/70 dark:hover:text-emerald-50 transition-colors">
              Katalog
            </Link>
            <Link href="/services" className="text-sm font-medium text-emerald-900/70 hover:text-emerald-900 dark:text-emerald-50/70 dark:hover:text-emerald-50 transition-colors">
              Layanan
            </Link>
            <Link 
              href="/templates" 
              className="bg-emerald-900 dark:bg-emerald-500 text-white dark:text-emerald-950 px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/hero-background.png"
            alt="Premium Background"
            fill
            className="object-cover opacity-90 dark:opacity-70"
            priority
          />
          {/* Subtle Color Overlay to Blend with Emerald Theme */}
          <div className="absolute inset-0 bg-emerald-950/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/40 to-emerald-950" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 mb-8 slide-up">
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-300">
                Premium Website Services
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 leading-[1.1]">
              Elevate Your <span className="gold-text">Professional Identity</span> with AddaReady
            </h1>
            
            <p className="mt-8 text-xl text-emerald-900/60 dark:text-emerald-100/60 leading-relaxed max-w-2xl">
              Kami membangun representasi digital yang elegan, cepat, dan berdampak tinggi. 
              Solusi terbaik untuk portofolio dan branding profesional Anda.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
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

            <div className="mt-16 flex items-center gap-8 py-8 border-y border-emerald-900/5 dark:border-emerald-500/10 w-full justify-center flex-wrap">
              <div className="flex items-center gap-2 text-emerald-900/40 dark:text-emerald-100/40 font-semibold uppercase tracking-tighter">
                <ShieldCheck className="w-5 h-5" /> Secure
              </div>
              <div className="flex items-center gap-2 text-emerald-900/40 dark:text-emerald-100/40 font-semibold uppercase tracking-tighter">
                <Star className="w-5 h-5" /> Award Winning
              </div>
              <div className="flex items-center gap-2 text-emerald-900/40 dark:text-emerald-100/40 font-semibold uppercase tracking-tighter">
                <CheckCircle className="w-5 h-5" /> Automated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packs Preview */}
      <section className="py-24 bg-emerald-50/50 dark:bg-[#011a14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Good', 'Impressive', 'Excellent'].map((pkg, i) => (
              <div key={pkg} className="group p-8 rounded-3xl bg-white dark:bg-[#022c22] border border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-500 dark:hover:border-gold transition-all shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                  {i === 0 ? <CheckCircle /> : i === 1 ? <ShieldCheck /> : <Star />}
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50 mb-4 tracking-tight">Paket {pkg}</h3>
                <p className="text-emerald-900/60 dark:text-emerald-100/60 text-sm leading-relaxed mb-8 flex-1">
                  Solusi ideal untuk {i === 0 ? 'kebutuhan dasar profesional' : i === 1 ? 'branding yang lebih kuat' : 'standar industri tertinggi'}.
                </p>
                <Link href="/templates" className="text-emerald-900 dark:text-gold font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Lihat Katalog <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-emerald-900/5 dark:border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 grayscale opacity-50">
            <Image src={logoCircle} alt="AddaReady Logo" width={32} height={32} />
            <span className="font-bold text-emerald-900 dark:text-emerald-50">AddaReady</span>
          </div>
          <p className="text-sm text-emerald-900/40 dark:text-emerald-100/40">
            &copy; {new Date().getFullYear()} AddaReady. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
