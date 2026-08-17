"use client";

import React from "react";
import Image from "next/image";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, UtensilsCrossed, Sparkles, MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#0c0a09] text-[#f5f3ef]">
      
      {/* Subtle radial ambient glow matching logo gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c59b27]/10 blur-[130px] pointer-events-none -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Logo Emblem Header */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full apple-glass-card border border-[#c59b27]/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#c59b27]"></span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#e5c158]">
              Estrada da Estação 89 · Leiria
            </span>
          </div>

          {/* Headline with Optical Sizing */}
          <h1 className="optical-display font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            Almoços Tradicionais & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5f3ef] to-[#c59b27]">
              Grelhados no Carvão
            </span>
          </h1>

          {/* Subtitle */}
          <p className="optical-body text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            A paragem diária em Leiria para quem valoriza comida portuguesa bem confecionada, doses fartas e rapidez de serviço. No restaurante ou para levar.
          </p>

          {/* Dual CTAs (Phone + WhatsApp + Menu) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            
            <a
              href="#pratos-do-dia"
              className="apple-button w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-b from-[#d4af37] to-[#b38820] text-stone-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:brightness-110"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Ver Ementa de Hoje</span>
            </a>

            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá! Gostaria de encomendar almoço de take-away.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-b from-[#16a34a] to-[#15803d] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:brightness-110"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Pedir Take-Away no WhatsApp</span>
            </a>

            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="apple-button w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700/80 font-semibold text-xs tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c59b27]" />
              <span>{RESTAURANTE_INFO.telefone}</span>
            </a>

          </div>

          {/* Quick Pillars */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <div className="p-3 rounded-xl apple-glass-card border border-stone-800 text-center">
              <span className="block text-xs font-bold text-white">Carvão Natural</span>
              <span className="block text-[11px] text-stone-400">Grelhados no Ponto</span>
            </div>
            <div className="p-3 rounded-xl apple-glass-card border border-stone-800 text-center">
              <span className="block text-xs font-bold text-white">Peixe Fresco</span>
              <span className="block text-[11px] text-stone-400">Dourada & Robalo</span>
            </div>
            <div className="p-3 rounded-xl apple-glass-card border border-stone-800 text-center">
              <span className="block text-xs font-bold text-white">Take-Away 15m</span>
              <span className="block text-[11px] text-stone-400">Sem Filas</span>
            </div>
            <div className="p-3 rounded-xl apple-glass-card border border-stone-800 text-center">
              <span className="block text-xs font-bold text-white">Fácil Estacionar</span>
              <span className="block text-[11px] text-stone-400">Junto à Estação</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
