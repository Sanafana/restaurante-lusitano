"use client";

import React from "react";
import Image from "next/image";
import { RESTAURANTE_INFO } from "@/lib/data";
import { useTheme } from "./ThemeContext";
import { Phone, MessageSquare, UtensilsCrossed, Sparkles, MapPin, ArrowRight } from "lucide-react";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 transition-colors">
      
      {/* Subtle radial ambient glow matching logo gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#c59b27]/10 blur-[130px] pointer-events-none -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Logo Emblem Header */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full surface-card border border-[#c59b27]/40 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c59b27]"></span>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#c59b27]">
              Estrada da Estação 89 · Leiria
            </span>
          </div>

          {/* Headline with Optical Sizing */}
          <h1 className="optical-display font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-heading tracking-tight leading-[1.08]">
            Almoços Tradicionais & <br />
            <span className={theme === "dark" ? "text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5f3ef] to-[#c59b27]" : "gold-gradient-text"}>
              Grelhados no Carvão
            </span>
          </h1>

          {/* Subtitle */}
          <p className="optical-body text-body-muted text-base sm:text-lg max-w-2xl mx-auto font-normal">
            A paragem diária em Leiria para quem valoriza comida portuguesa honesta, doses fartas e rapidez de serviço. No restaurante ou para levar.
          </p>

          {/* Dual CTAs (Phone + WhatsApp + Menu) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            
            <a
              href="#pratos-do-dia"
              className="apple-button w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-b from-[#d4af37] to-[#b38820] text-stone-950 font-black text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 hover:brightness-110"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Ver Ementa de Hoje</span>
            </a>

            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá! Gostaria de encomendar almoço de take-away.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-b from-[#16a34a] to-[#15803d] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 hover:brightness-110"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Pedir Take-Away no WhatsApp</span>
            </a>

            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="apple-button w-full sm:w-auto px-6 py-3.5 rounded-2xl surface-card border font-semibold text-xs text-heading tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#c59b27]" />
              <span>{RESTAURANTE_INFO.telefone}</span>
            </a>

          </div>

          {/* Quick Pillars */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <div className="p-3.5 rounded-2xl surface-card border text-center">
              <span className="block text-xs font-bold text-heading">Carvão Natural</span>
              <span className="block text-[11px] text-body-muted">Grelhados no Ponto</span>
            </div>
            <div className="p-3.5 rounded-2xl surface-card border text-center">
              <span className="block text-xs font-bold text-heading">Peixe Fresco</span>
              <span className="block text-[11px] text-body-muted">Dourada & Robalo</span>
            </div>
            <div className="p-3.5 rounded-2xl surface-card border text-center">
              <span className="block text-xs font-bold text-heading">Take-Away 15m</span>
              <span className="block text-[11px] text-body-muted">Sem Filas</span>
            </div>
            <div className="p-3.5 rounded-2xl surface-card border text-center">
              <span className="block text-xs font-bold text-heading">Fácil Estacionar</span>
              <span className="block text-[11px] text-body-muted">Junto à Estação</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
