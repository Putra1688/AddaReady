import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { templatesQuery } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";

export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
  const templates = await client.fetch(templatesQuery);

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6 dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Katalog Template
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Pilih fondasi terbaik untuk representasi digital profesional Anda. 
            Setiap template dirancang untuk performa dan konversi tinggi.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {templates?.length > 0 ? (
            templates.map((template: any) => (
              <article
                key={template._id}
                className="group relative flex flex-col items-start transition-all hover:scale-[1.02]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-xl transition-shadow group-hover:shadow-2xl">
                  {template.thumbnail ? (
                    <Image
                      src={urlForImage(template.thumbnail).url()}
                      alt={template.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-200 dark:bg-zinc-800">
                      <span className="text-zinc-400">No Image</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <div className="mt-6 flex w-full items-center justify-between">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    template.category === 'Excellent' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' :
                    template.category === 'Impressive' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' :
                    'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                  }`}>
                    {template.category}
                  </span>
                  <div className="flex gap-2">
                    {template.tech_stack?.slice(0, 2).map((tech: string) => (
                      <span key={tech} className="text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                   <Link href={`/templates/${template.slug}`}>
                    <span className="absolute -inset-y-4 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">{template.title}</span>
                  </Link>
                </h2>
                
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  Template website {template.category} dengan dukungan penuh {template.tech_stack?.join(", ")}.
                </p>

                <div className="mt-6 flex items-center gap-4 relative z-30">
                  <Link
                    href={template.demo_url || "#"}
                    target="_blank"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 hover:underline underline-offset-4"
                  >
                    Live Preview →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Belum ada katalog</h3>
              <p className="mt-2 text-zinc-600">Tambah template baru melalui Sanity Studio.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
