"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, Clock, MapPin, Menu, X, Utensils } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0d0c0a]/95 backdrop-blur-md border-b border-lusitano-border text-[#f5f3ef]">
      {/* Top Banner de Almoço */}
      <div className="bg-[#141310] border-b border-lusitano-border/60 py-2 px-4 text-xs font-medium text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Almoços de Segunda a Sábado: <strong className="text-white">11h45 às 15h30</strong></span>
          </div>
          <div className="flex items-center gap-5 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-stone-400">
              <MapPin className="w-3.5 h-3.5 text-lusitano-gold" />
              Estrada da Estação 89, Leiria
            </span>
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 text-lusitano-goldLight hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-lusitano-gold" />
              <span>{RESTAURANTE_INFO.telefone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand with Real Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-lusitano-gold/50 shadow-md group-hover:border-lusitano-gold transition-all bg-black shrink-0">
              <Image
                src="/logo-lusitano.jpg"
                alt="Restaurante Lusitano Leiria"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-lusitano-goldLight transition-colors">
                Restaurante Lusitano
              </span>
              <span className="block text-[11px] uppercase tracking-wider text-lusitano-gold/90 font-medium">
                Cozinha Tradicional · Leiria
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a href="#pratos-do-dia" className="text-stone-300 hover:text-lusitano-goldLight transition-colors flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-lusitano-gold" />
              Pratos do Dia
            </a>
            <a href="#takeaway" className="text-stone-300 hover:text-lusitano-goldLight transition-colors">
              Pedir Take-Away
            </a>
            <a href="#especialidades" className="text-stone-300 hover:text-lusitano-goldLight transition-colors">
              Especialidades
            </a>
            <a href="#instagram" className="text-stone-300 hover:text-lusitano-goldLight transition-colors">
              Instagram
            </a>
            <a href="#localizacao" className="text-stone-300 hover:text-lusitano-goldLight transition-colors">
              Localização
            </a>
          </div>

          {/* Quick CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá! Gostaria de saber os pratos do dia / encomendar almoço.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#16a34a] text-white px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold shadow-sm hover:shadow transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-lusitano-gold to-lusitano-goldLight hover:brightness-110 text-stone-950 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-black shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Reservar Mesa</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="p-2.5 rounded-lg bg-lusitano-gold text-stone-950 font-bold"
              aria-label="Ligar"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-lusitano-surface text-stone-300 hover:text-white border border-lusitano-border"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0c0a] border-b border-lusitano-border px-4 pt-4 pb-6 space-y-3">
          <a
            href="#pratos-do-dia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-lusitano-surface font-medium"
          >
            🍲 Pratos do Dia
          </a>
          <a
            href="#takeaway"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-lusitano-surface font-medium"
          >
            🥡 Pedir Take-Away
          </a>
          <a
            href="#especialidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-lusitano-surface font-medium"
          >
            🥩 Especialidades & Grelhados
          </a>
          <a
            href="#instagram"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-lusitano-surface font-medium"
          >
            📸 Instagram Oficial
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-lusitano-surface font-medium"
          >
            📍 Como Chegar & Contactos
          </a>

          <div className="pt-3 border-t border-lusitano-border grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá! Gostaria de reservar mesa / encomendar almoço.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#15803d] text-white py-2.5 px-3 rounded-lg text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 bg-lusitano-gold text-stone-950 py-2.5 px-3 rounded-lg text-xs font-bold"
            >
              <Phone className="w-4 h-4" />
              Ligar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
