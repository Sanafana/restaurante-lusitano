"use client";

import React, { useState } from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, Clock, MapPin, Menu, X, Utensils } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur border-b border-stone-800 text-white">
      {/* Top Banner de Almoço */}
      <div className="bg-lusitano-bordo text-white py-1.5 px-4 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-lusitano-dourado" />
            <span>Almoços de Segunda a Sábado: <strong>11h45 às 15h30</strong></span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-200">
              <MapPin className="w-3.5 h-3.5" />
              Estrada da Estação 89, Leiria
            </span>
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 font-bold hover:text-amber-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-lusitano-dourado" />
              <span>{RESTAURANTE_INFO.telefone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lusitano-bordo to-lusitano-bordoEscuro border border-lusitano-dourado/40 flex items-center justify-center text-lusitano-dourado font-serif font-black text-2xl shadow-lg group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-lusitano-dourado transition-colors">
                Restaurante Lusitano
              </span>
              <span className="block text-[11px] uppercase tracking-widest text-lusitano-dourado/90 font-medium">
                Cozinha Tradicional · Leiria
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#pratos-do-dia" className="text-stone-300 hover:text-lusitano-dourado transition-colors flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-lusitano-dourado" />
              Pratos do Dia
            </a>
            <a href="#especialidades" className="text-stone-300 hover:text-lusitano-dourado transition-colors">
              Especialidades
            </a>
            <a href="#takeaway" className="text-stone-300 hover:text-lusitano-dourado transition-colors">
              Pedir Take-Away
            </a>
            <a href="#instagram" className="text-stone-300 hover:text-lusitano-dourado transition-colors">
              Instagram
            </a>
            <a href="#localizacao" className="text-stone-300 hover:text-lusitano-dourado transition-colors">
              Localização & Horários
            </a>
          </div>

          {/* Quick CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá! Gostaria de saber os pratos do dia / encomendar almoço.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-emerald-900/30 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 bg-lusitano-dourado hover:bg-lusitano-douradoEscuro text-stone-950 px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Ligar p/ Reservar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="p-2.5 rounded-lg bg-lusitano-dourado text-stone-950 font-bold"
              aria-label="Ligar"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          <a
            href="#pratos-do-dia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-stone-900 font-medium"
          >
            🍲 Pratos do Dia
          </a>
          <a
            href="#especialidades"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-stone-900 font-medium"
          >
            🥩 Especialidades da Casa
          </a>
          <a
            href="#takeaway"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-stone-900 font-medium"
          >
            🥡 Encomendar Take-Away
          </a>
          <a
            href="#instagram"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-stone-900 font-medium"
          >
            📸 Ver no Instagram
          </a>
          <a
            href="#localizacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-lg text-stone-200 hover:bg-stone-900 font-medium"
          >
            📍 Como Chegar & Contactos
          </a>

          <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2">
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá! Gostaria de reservar mesa / encomendar almoço.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 px-3 rounded-lg text-xs font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 bg-lusitano-dourado text-stone-950 py-2.5 px-3 rounded-lg text-xs font-bold"
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
