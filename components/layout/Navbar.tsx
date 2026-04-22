"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logoCircle from "@/app/logo-circle.png";

const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Katalog", href: "/templates" },
  { name: "Cara Pesan", href: "/cara-pesan" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#022c22]/80 backdrop-blur-md border-b border-emerald-100 dark:border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Image src={logoCircle} alt="AddaReady Logo" width={40} height={40} priority />
            <span className="text-xl font-bold tracking-tight text-emerald-900 dark:text-emerald-50">
              Adda<span className="text-emerald-500">Ready</span>
            </span>
          </Link>
          
          {/* Desktop Links */}
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

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-emerald-900 dark:text-emerald-50 hover:bg-emerald-50 dark:hover:bg-emerald-800/30 rounded-xl transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-[#022c22]/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-[#022c22] shadow-2xl transition-transform duration-500 ease-out border-l border-emerald-100 dark:border-emerald-800 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-12">
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`text-lg font-bold transition-all ${
                      isActive 
                        ? "text-gold translate-x-2" 
                        : "text-emerald-900 dark:text-emerald-50 hover:text-gold hover:translate-x-2"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto">
              <Link 
                href="/templates" 
                className="block w-full text-center bg-emerald-900 dark:bg-emerald-500 text-white dark:text-emerald-950 py-3 rounded-xl text-sm font-bold shadow-xl active:scale-95 transition-all"
              >
                Mulai Sekarang
              </Link>
              <div className="mt-8 text-center">
                <p className="text-xs text-emerald-900/40 dark:text-emerald-100/40 font-medium">
                  © 2024 AddaReady Studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
