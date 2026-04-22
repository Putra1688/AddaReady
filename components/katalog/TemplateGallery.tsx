'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity/image'
import { ArrowRight, Search, Filter } from 'lucide-react'

interface TemplateGalleryProps {
  initialTemplates: any[]
}

export default function TemplateGallery({ initialTemplates }: TemplateGalleryProps) {
  const [filter, setFilter] = useState('All')

  const filteredTemplates = filter === 'All' 
    ? initialTemplates 
    : initialTemplates.filter(t => t.category === filter)

  const categories = ['All', 'Good', 'Impressive', 'Excellent']

  return (
    <div className="space-y-12">
      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white dark:bg-emerald-950/20 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 sticky top-24 z-40 backdrop-blur-md">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === cat
                  ? 'bg-emerald-900 dark:bg-emerald-500 text-white dark:text-emerald-950 shadow-lg'
                  : 'bg-emerald-50/50 dark:bg-emerald-900/20 text-emerald-900/60 dark:text-emerald-50/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-900/40 dark:text-emerald-100/40 uppercase tracking-widest px-4 py-2 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-full border border-emerald-100 dark:border-emerald-900/30">
           <Filter className="w-3 h-3" /> {filteredTemplates.length} Templates Found
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <article
              key={template._id}
              className="group relative flex flex-col items-start transition-all"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-zinc-100 shadow-xl transition-shadow group-hover:shadow-2xl dark:shadow-none dark:border dark:border-emerald-900/30">
                {template.thumbnail ? (
                  <Image
                    src={urlForImage(template.thumbnail).url()}
                    alt={template.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-200 dark:bg-emerald-900/20">
                    <span className="text-zinc-400">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                   <Link
                      href={`/templates/${template.slug}`}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-white text-emerald-950 font-bold rounded-2xl shadow-xl hover:bg-emerald-50 transition-colors"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
              </div>

              <div className="mt-8 flex w-full items-center justify-between">
                <span className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
                  template.category === 'Excellent' ? 'bg-amber-100 text-amber-800 dark:bg-gold/10 dark:text-gold' :
                  template.category === 'Impressive' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400' :
                  'bg-zinc-100 text-zinc-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                }`}>
                  {template.category}
                </span>
                <div className="flex gap-3">
                  {template.tech_stack?.slice(0, 2).map((tech: string) => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-emerald-900/30 dark:text-emerald-50/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-emerald-950 dark:text-emerald-50 tracking-tight">
                 <Link href={`/templates/${template.slug}`} className="hover:text-emerald-600 dark:hover:text-gold transition-colors">
                  {template.title}
                </Link>
              </h2>
              
              <p className="mt-4 text-emerald-900/60 dark:text-emerald-100/60 text-sm leading-relaxed line-clamp-2">
                Template website {template.category} premium untuk merepresentasikan {template.title} dengan standar profesional tinggi.
              </p>

              <div className="mt-8 flex items-center gap-6 relative z-10">
                <Link
                  href={template.demo_url || "#"}
                  target="_blank"
                  className="text-sm font-bold text-emerald-950 dark:text-emerald-50 border-b-2 border-emerald-950/10 dark:border-emerald-50/10 hover:border-emerald-950 dark:hover:border-gold transition-all"
                >
                  Live Preview
                </Link>
                <Link
                  href={`/templates/${template.slug}`}
                  className="text-sm font-bold text-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  Details
                </Link>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full py-40 text-center bg-emerald-50/30 dark:bg-emerald-900/10 rounded-3xl border-2 border-dashed border-emerald-100 dark:border-emerald-900/30">
            <h3 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">Belum ada katalog untuk kategori ini</h3>
            <p className="mt-2 text-emerald-900/60 dark:text-emerald-100/60">Coba pilih kategori lain atau tambahkan template baru di Studio.</p>
          </div>
        )}
      </div>
    </div>
  )
}
