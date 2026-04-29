"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Apa itu AddaReady?",
    answer: "AddaReady adalah studio pembuatan website premium yang fokus pada pembuatan portofolio digital dan website profesional dengan estetika kelas dunia dan performa tinggi.",
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Waktu pengerjaan bervariasi tergantung paket yang dipilih, namun rata-rata berkisar antara 3 hingga 7 hari kerja setelah semua konten diterima.",
  },
  {
    question: "Apakah saya bisa melakukan kustomisasi desain?",
    answer: "Tentu! Setiap template kami dirancang fleksibel. Anda dapat meminta penyesuaian warna, font, dan tata letak selama masih dalam lingkup paket yang dipilih.",
  },
  {
    question: "Bagaimana jika saya ingin menambahkan halaman baru di kemudian hari?",
    answer: "Sangat bisa! Layanan kami bersifat upgradeable. Anda dapat menghubungi kami kapan saja untuk menambahkan fitur atau halaman baru pada website Anda.",
  },
  {
    question: "Apakah biaya yang dibayarkan sudah termasuk hosting dan domain?",
    answer: "Detail ini bergantung pada promo paket yang sedang berjalan. Biasanya paket Excellent sudah mencakup biaya pemeliharaan dasar, namun kami akan menginformasikan detailnya saat konsultasi.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#022c22]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <header className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 mb-6">
              Punya <span className="gold-text">Pertanyaan?</span>
            </h1>
            <p className="text-lg text-emerald-900/60 dark:text-emerald-100/60 leading-relaxed">
              Kami merangkum beberapa hal yang sering ditanyakan pelanggan untuk membantu Anda memahami layanan kami lebih baik.
            </p>
          </header>

          <div className="space-y-4">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border border-emerald-950/5 dark:border-emerald-500/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? "bg-emerald-50/50 dark:bg-emerald-900/10 shadow-sm" : "hover:bg-emerald-50/20 dark:hover:bg-emerald-900/5"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-gold text-white" : "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600"
                      }`}>
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <span className={`font-bold transition-colors ${
                        isOpen ? "text-emerald-950 dark:text-emerald-50" : "text-emerald-950/70 dark:text-emerald-50/70"
                      }`}>
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-emerald-900/30 dark:text-emerald-50/30 transition-transform duration-500 ${
                      isOpen ? "rotate-180" : ""
                    }`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-6 pb-6 pt-0 ml-12 text-emerald-900/60 dark:text-emerald-100/60 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-emerald-950 dark:bg-emerald-900/30 text-white text-center relative overflow-hidden border border-emerald-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 filter blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <h3 className="text-xl font-bold mb-4 relative z-10">Pertanyaan Anda tidak ada di sini?</h3>
            <p className="text-emerald-100/60 mb-8 relative z-10">Jangan ragu untuk langsung mengonsultasikannya dengan tim kami melalui WhatsApp.</p>
            <a 
              href="https://wa.me/6283153248283" 
              target="_blank"
              className="inline-flex items-center gap-2 px-8 h-12 bg-gold text-emerald-950 font-bold rounded-full hover:scale-105 active:scale-95 transition-all relative z-10"
            >
              Hubungi Kami Sekarang
            </a>
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
