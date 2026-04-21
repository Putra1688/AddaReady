"use client";

import React, { useState } from "react";
import { ChevronDown, Zap, Banknote, Infinity, MessageSquare, ArrowUpCircle } from "lucide-react";

const ADVANTAGES = [
  {
    title: "Proses Cepat",
    desc: "Pengerjaan project Anda diselesaikan dalam waktu singkat tanpa mengorbankan kualitas akhir.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Harga Terjangkau",
    desc: "Dapatkan layanan profesional dengan penawaran harga terbaik yang pas untuk semua kalangan.",
    icon: <Banknote className="w-5 h-5" />,
  },
  {
    title: "Website Permanen",
    desc: "Website atau portofolio digital yang kami buatkan akan terus aktif dan permanen alias bisa diakses selamanya sebagai pendukung karya Anda.",
    icon: <Infinity className="w-5 h-5" />,
  },
  {
    title: "Free Konsultasi",
    desc: "Layanan diskusi transparan secara gratis sebelum memesan, pastikan fitur yang Anda inginkan terpenuhi dan sesuai.",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    title: "Bisa Upgrade Setiap Waktu",
    desc: "Sangat fleksibel memperbarui halaman kapan pun Anda inginkan, mulai dari tambah halaman, ubah desain, hingga optimasi server.",
    icon: <ArrowUpCircle className="w-5 h-5" />,
  },
];

export default function AdvantagesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#022c22] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 mb-4">
            Mengapa Memilih <span className="gold-text">AddaReady?</span>
          </h2>
          <p className="text-emerald-900/60 dark:text-emerald-100/60 max-w-xl mx-auto">
            Kami memberikan lebih dari sekadar desain. Kami memberikan nilai tambah untuk kesuksesan digital Anda.
          </p>
        </div>

        <div className="space-y-4">
          {ADVANTAGES.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`group border-b border-emerald-900/10 dark:border-emerald-500/10 transition-all duration-300 ${
                  isOpen ? 'bg-emerald-50/50 dark:bg-emerald-900/20 rounded-3xl p-2' : ''
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-6 px-4 lg:px-8 text-left hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      isOpen 
                        ? 'bg-gold text-white shadow-lg shadow-gold/20' 
                        : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110'
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`text-lg lg:text-xl font-bold tracking-tight transition-colors ${
                      isOpen ? 'text-emerald-950 dark:text-emerald-50' : 'text-emerald-950/70 dark:text-emerald-50/70'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-emerald-900/30 dark:text-emerald-50/30 transition-transform duration-500 ${
                    isOpen ? 'rotate-180 text-gold' : ''
                  }`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 lg:px-24 pb-8 text-emerald-900/60 dark:text-emerald-100/60 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
