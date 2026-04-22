"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoCircle from "@/app/logo-circle.png";

const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Katalog", href: "/templates" },
  { name: "Cara Pesan", href: "/cara-pesan" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#022c22]/80 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src={logoCircle} alt="AddaReady Logo" width={40} height={40} priority />
          <span className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-50">
            Adda<span className="text-emerald-500">Ready</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${
                  isActive 
                    ? "text-emerald-900 dark:text-gold" 
                    : "text-emerald-900/70 hover:text-emerald-900 dark:text-emerald-50/70 dark:hover:text-emerald-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link 
            href="/templates" 
            className="bg-emerald-900 dark:bg-emerald-500 text-white dark:text-emerald-950 px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all active:scale-95"
          >
            Mulai Sekarang
          </Link>
        </div>

        {/* Mobile Menu (Simplified for now, can be expanded if needed) */}
        <div className="md:hidden flex items-center">
          <Link 
            href="/templates" 
            className="bg-emerald-900 dark:bg-emerald-500 text-white dark:text-emerald-950 px-4 py-2 rounded-full text-xs font-semibold"
          >
            Mulai
          </Link>
        </div>
      </div>
    </nav>
  );
}
