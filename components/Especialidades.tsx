"use client";

import React from "react";
import { ESPECIALIDADES_DESTAQUE, RESTAURANTE_INFO } from "@/lib/data";
import { Flame, Star, MessageSquare } from "lucide-react";

export function Especialidades() {
  return (
    <section id="especialidades" className="py-16 sm:py-24 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lusitano-bordo border border-lusitano-dourado/40 text-lusitano-dourado text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Tradição & Sabor no Carvão</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Especialidades da Casa
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Ingredientes frescos de produtores locais, carnes selecionadas grelhadas no ponto e receitas clássicas com o sabor de antigamente.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ESPECIALIDADES_DESTAQUE.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden shadow-xl hover:border-lusitano-dourado/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-lusitano-bordo/90 text-lusitano-dourado text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-lusitano-dourado/30">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-medium text-lusitano-dourado uppercase tracking-widest block">
                    {item.subtitulo}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-200 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 mt-auto border-t border-stone-900 flex items-center justify-between">
                <span className="text-xs font-bold text-lusitano-dourado">
                  {item.preco}
                </span>
                <a
                  href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent(`Olá! Gostaria de reservar para provar "${item.titulo}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-stone-300 hover:text-emerald-400"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
