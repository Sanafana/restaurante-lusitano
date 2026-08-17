"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, Clock, MapPin, Menu, X, Utensils } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 apple-glass transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#d4af37]/40 shadow-lg bg-black shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo-lusitano.jpg"
                alt="Restaurante Lusitano"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#e5c158] transition-colors">
                LUSITANO
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c59b27]">
                Almoços & Take-Away · Leiria
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a href="#pratos-do-dia" className="hover:text-[#e5c158] transition-colors">
              Pratos do Dia
            </a>
            <a href="#takeaway" className="hover:text-[#e5c158] transition-colors">
              Take-Away
            </a>
            <a href="#especialidades" className="hover:text-[#e5c158] transition-colors">
              Especialidades
            </a>
            <a href="#localizacao" className="hover:text-[#e5c158] transition-colors">
              Localização
            </a>
          </nav>

          {/* Status & Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/80 border border-stone-800 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-stone-300 font-medium">Almoço: 11h45 – 15h30</span>
            </div>

            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="apple-button flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 text-xs font-semibold border border-stone-700/60 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>{RESTAURANTE_INFO.telefone}</span>
            </a>

            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá! Gostaria de encomendar almoço no Restaurante Lusitano.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-b from-[#16a34a] to-[#15803d] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}`}
              className="apple-button p-2 rounded-xl bg-[#15803d] text-white"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="apple-button p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden apple-glass border-b border-stone-800 px-4 pt-3 pb-6 space-y-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-900 text-xs text-stone-300">
            <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Almoços: Seg. a Sáb. 11h45 – 15h30</span>
          </div>

          <div className="flex flex-col space-y-2 text-sm font-medium">
            <a
              href="#pratos-do-dia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-900 text-stone-200"
            >
              Pratos do Dia
            </a>
            <a
              href="#takeaway"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-900 text-stone-200"
            >
              Take-Away Rápido
            </a>
            <a
              href="#especialidades"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-900 text-stone-200"
            >
              Especialidades no Carvão
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-900 text-stone-200"
            >
              Localização & Contactos
            </a>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="apple-button flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-xs font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Ligar</span>
            </a>
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#15803d] text-xs font-bold text-white uppercase tracking-wider"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
