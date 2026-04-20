import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity/client";
import { templateBySlugQuery } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";

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
    <div className="min-h-screen bg-white py-20 px-6 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/templates" 
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
        >
          ← Kembali ke Katalog
        </Link>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-zinc-100 shadow-2xl">
            {template.thumbnail ? (
              <Image
                src={urlForImage(template.thumbnail).url()}
                alt={template.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-200 dark:bg-zinc-800">
                <span className="text-zinc-400">No Image</span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
              {template.category}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              {template.title}
            </h1>
            
            <div className="mt-8 flex flex-wrap gap-4">
              {template.tech_stack?.map((tech: string) => (
                <span key={tech} className="rounded-lg border border-zinc-200 py-1 px-3 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-zinc-600 dark:text-zinc-400 placeholder-opacity-50">
              Template ini dirancang khusus untuk kategory {template.category} dengan standarisasi industri yang tinggi. 
              Menggunakan teknologi {template.tech_stack?.join(", ")} untuk memastikan kecepatan akses dan kemudahan kustomisasi.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={template.demo_url || "#"}
                target="_blank"
                className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Lihat Live Demo
              </Link>
              <button className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-8 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
