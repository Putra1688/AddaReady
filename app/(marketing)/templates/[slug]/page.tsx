import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity/client";
import { templateBySlugQuery } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { ArrowLeft, ExternalLink, MessageCircle, Sparkles } from "lucide-react";

export const dynamic = "force-dynamic";

interface TemplatePageProps {
  params: {
    slug: string;
  };
}

export default async function TemplateDetailsPage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = await client.fetch(templateBySlugQuery, { slug });

  if (!template) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#022c22] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/templates" 
          className="inline-flex items-center gap-2 text-sm font-bold text-emerald-900/40 hover:text-emerald-900 dark:text-emerald-100/40 dark:hover:text-gold transition-colors group"
         >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Kembali ke Katalog
        </Link>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Visual Preview */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] bg-emerald-50 dark:bg-emerald-950/20 shadow-2xl border border-emerald-100 dark:border-emerald-900/50">
            {template.thumbnail ? (
              <Image
                src={urlForImage(template.thumbnail).url()}
                alt={template.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-emerald-100/50 dark:bg-emerald-900/30">
                <span className="text-emerald-900/20 dark:text-emerald-100/20 font-bold uppercase tracking-widest">No Image</span>
              </div>
            )}
          </div>

          {/* Details Content */}
          <div className="flex flex-col pt-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 w-fit border border-emerald-100 dark:border-emerald-800">
               <Sparkles className="w-3 h-3" /> {template.category} Package
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50 sm:leading-tight">
              {template.title}
            </h1>
            
            <div className="mt-10 flex flex-wrap gap-3">
              {template.tech_stack?.map((tech: string) => (
                <span key={tech} className="rounded-xl bg-zinc-50 border border-zinc-100 dark:bg-emerald-900/20 dark:border-emerald-800 py-2 px-4 text-xs font-bold uppercase tracking-wider text-emerald-900/60 dark:text-emerald-100/60 transition-colors hover:border-gold hover:text-gold">
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-10 text-xl leading-relaxed text-emerald-900/60 dark:text-emerald-100/60">
              Template ini dirancang khusus untuk kategori <span className="text-emerald-900 dark:text-emerald-50 font-semibold">{template.category}</span> dengan standarisasi industri yang tinggi. 
              Menggunakan teknologi modern untuk memastikan kecepatan akses dan kemudahan kustomisasi bagi bisnis Anda.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link
                href={template.demo_url || "#"}
                target="_blank"
                className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-900 px-10 text-sm font-bold text-white transition-all hover:bg-emerald-800 hover:scale-[1.02] active:scale-95 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-gold shadow-xl shadow-emerald-900/10"
              >
                Lihat Live Demo <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href={`https://wa.me/6283153248283?text=Halo%2C%20saya%20tertarik%20memiliki%20website%20${encodeURIComponent(template.title)}.%20Bisa%20bantu%20saya%20untuk%20mewujudkannya%3F`}
                target="_blank"
                className="flex h-14 items-center justify-center gap-2 rounded-2xl border-2 border-emerald-900/10 px-10 text-sm font-bold text-emerald-900 transition-all hover:bg-emerald-50 dark:border-emerald-500/20 dark:text-emerald-50 dark:hover:bg-emerald-900/30"
              >
                <MessageCircle className="w-4 h-4" /> Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
