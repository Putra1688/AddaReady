import { client } from "@/lib/sanity/client";
import { templatesQuery } from "@/lib/sanity/queries";
import TemplateGallery from "@/components/katalog/TemplateGallery";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await client.fetch(templatesQuery);

  return (
    <div className="min-h-screen bg-white dark:bg-[#022c22] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900/40 hover:text-emerald-900 dark:text-emerald-100/40 dark:hover:text-gold transition-colors group"
         >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Kembali ke Beranda
        </Link>
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            Our Portfolio
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 sm:text-6xl leading-tight">
            Katalog <span className="gold-text">Template Premium</span>
          </h1>
          <p className="mt-8 text-lg text-emerald-900/60 dark:text-emerald-100/60 leading-relaxed">
            Pilih fondasi terbaik untuk representasi digital profesional Anda. 
            Setiap template dirancang khusus untuk performa tinggi dan estetika kelas dunia.
          </p>
        </header>

        <TemplateGallery initialTemplates={templates} />
      </div>
    </div>
  );
}
