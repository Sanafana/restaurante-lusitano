"use client";

import React from "react";
import Image from "next/image";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, UtensilsCrossed, Star, Check, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[#0d0c0a] text-[#f5f3ef] pt-10 pb-20 lg:pt-14 lg:pb-28 border-b border-lusitano-border overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-lusitano-wine/40 via-lusitano-gold/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Banner with Real Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 rounded-2xl overflow-hidden border-2 border-lusitano-gold/60 shadow-2xl bg-black">
            <Image
              src="/logo-lusitano.jpg"
              alt="Logótipo Restaurante Lusitano Leiria"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lusitano-surface border border-lusitano-border text-lusitano-gold text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Almoços de Segunda a Sábado · Estrada da Estação 89, Leiria</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-[1.15]">
            A Verdadeira Cozinha Portuguesa &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lusitano-goldLight via-lusitano-gold to-amber-400">
              Grelhados no Carvão
            </span>
          </h1>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mt-4 font-normal leading-relaxed">
            Pratos do dia caseiros, serviço rápido para a sua pausa de trabalho e comida farta feita com paixão. Coma no restaurante ou leve em <strong>Take-Away</strong> sem esperas.
          </p>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href="#pratos-do-dia"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lusitano-gold to-lusitano-goldLight hover:brightness-110 text-stone-950 px-7 py-3.5 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Ver Pratos de Hoje</span>
            </a>

            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá Restaurante Lusitano! Gostaria de reservar mesa para almoço.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#15803d] hover:bg-[#16a34a] text-white px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Reservar no WhatsApp</span>
            </a>

            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lusitano-surface hover:bg-lusitano-card border border-lusitano-border text-stone-200 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-lusitano-gold" />
              <span>937 117 791</span>
            </a>
          </div>
        </div>

        {/* 3 Pillars / Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-lusitano-border/80">
          
          <div className="p-6 rounded-2xl bg-lusitano-surface border border-lusitano-border hover:border-lusitano-gold/40 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-lusitano-gold font-bold">11h45 às 15h30</span>
                <span className="text-xs bg-lusitano-card px-2.5 py-1 rounded text-stone-300 font-medium">Almoço Diário</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Pratos do Dia Caseiros</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Ementa renovada diariamente com carnes na brasa, peixe fresco grelhado, sopas reconfortantes e opções vegetarianas.
              </p>
            </div>
            <a href="#pratos-do-dia" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-lusitano-goldLight hover:underline">
              <span>Consultar ementa semanal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-lusitano-surface border border-lusitano-border hover:border-lusitano-gold/40 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Sem Filas</span>
                <span className="text-xs bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded text-emerald-300 font-medium">Take-Away</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Pronto à Sua Hora</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Encomende às 11h30 pelo nosso simulador de WhatsApp e passe para levantar quente e embalado no intervalo do trabalho.
              </p>
            </div>
            <a href="#takeaway" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:underline">
              <span>Fazer pedido de take-away</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-lusitano-surface border border-lusitano-border hover:border-lusitano-gold/40 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Braseiro Tradicional</span>
                <span className="text-xs bg-lusitano-card px-2.5 py-1 rounded text-stone-300 font-medium">Carvão</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Grelhados com Sabor</h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Picanha e Maminha fatiadas, entrecosto, febras e douradas grelhadas no ponto com o verdadeiro aroma a carvão.
              </p>
            </div>
            <a href="#especialidades" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-lusitano-goldLight hover:underline">
              <span>Ver especialidades</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
