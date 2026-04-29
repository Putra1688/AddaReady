import React from "react";
import Navbar from "@/components/layout/Navbar";
import { CheckCircle2, ClipboardList, PenTool, Layout, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    title: "Pilih Paket",
    desc: "Cari paket yang sesuai dengan kebutuhan Anda di halaman Katalog, lalu tekan tombol detail untuk melihat spesifikasi lengkapnya.",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: "Hubungi Kami",
    desc: "Klik tombol 'Hubungi Kami' pada paket yang Anda pilih. Anda akan diarahkan langsung ke WhatsApp kami untuk konsultasi awal.",
    icon: <MessageCircle className="w-6 h-6" />,
  },
  {
    title: "Terima Formulir",
    desc: "Kami akan mengirimkan formulir konten website yang perlu Anda isi agar kami memiliki semua materi yang dibutuhkan.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: "Isi & Kirim Formulir",
    desc: "Silakan melengkapi data yang diminta pada formulir tersebut dan kirimkan kembali kepada tim kami.",
    icon: <Send className="w-6 h-6" />,
  },
  {
    title: "Pengerjaan",
    desc: "Tim ahli kami akan mulai membangun website Anda dengan dedikasi penuh terhadap estetika dan performa.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Selesai",
    desc: "Website Anda siap diluncurkan! Kami akan menyerahkan akses dan memastikan semuanya berjalan dengan sempurna.",
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
];

export default function OrderPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#022c22]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              Ordering Guide
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 mb-6">
              Cara <span className="gold-text">Pemesanan</span>
            </h1>
            <p className="text-lg text-emerald-900/60 dark:text-emerald-100/60 max-w-2xl mx-auto leading-relaxed">
              Ikuti langkah-langkah mudah di bawah ini untuk memiliki representasi digital profesional Anda sendiri bersama AddaReady.
            </p>
          </header>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-emerald-100 via-gold/30 to-emerald-100 dark:from-emerald-900/50 dark:via-gold/20 dark:to-emerald-900/50 hidden md:block" />

            <div className="space-y-12">
              {STEPS.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 md:items-center group">
                  {/* Step Number/Icon */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-[#022c22] border border-emerald-100 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-gold shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {index + 1}
                    </div>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8 rounded-3xl bg-emerald-50/30 dark:bg-emerald-900/10 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800 transition-all duration-500">
                    <h3 className="text-xl font-bold text-emerald-950 dark:text-emerald-50 mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-emerald-900/60 dark:text-emerald-100/60 leading-relaxed text-sm lg:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/templates" 
              className="inline-flex items-center gap-2 px-10 py-5 bg-emerald-900 dark:bg-emerald-500 text-white dark:text-emerald-950 font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-emerald-900/20"
            >
              Lihat Katalog Sekarang
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-emerald-950/5 dark:border-emerald-900/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black text-emerald-950 dark:text-emerald-50">
            Adda<span className="gold-text">Ready</span>
          </div>
          <div className="text-sm text-emerald-900/40 dark:text-emerald-100/40 font-medium">
            © 2024 AddaReady Studio. Website Portofolio & Branding Digital.
          </div>
        </div>
      </footer>
    </div>
  );
}
