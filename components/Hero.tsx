"use client";

import React from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, UtensilsCrossed, Star, CheckCircle, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-stone-950 text-white overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-stone-800">
      {/* Background Decorator / Ambient Light */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-lusitano-bordo blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-amber-600 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lusitano-bordo/60 border border-lusitano-dourado/40 text-lusitano-dourado text-xs sm:text-sm font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Aberto para Almoços em Leiria · Estrada da Estação 89</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-none">
              O Verdadeiro <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-lusitano-dourado to-amber-500">
                Almoço Tradicional
              </span>
              <br />no Coração de Leiria.
            </h1>

            {/* Description */}
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Pratos do dia caseiros confecionados diariamente, grelhados no carvão, peixe fresco e sobremesas da casa. Doses generosas, serviço rápido para a sua pausa de trabalho e opção prática de <strong>Take-Away</strong>.
            </p>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#pratos-do-dia"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-lusitano-bordo to-lusitano-bordoClaro hover:from-lusitano-bordoClaro hover:to-lusitano-bordo border border-lusitano-dourado/50 text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-xl hover:scale-105 transition-all"
              >
                <UtensilsCrossed className="w-5 h-5 text-lusitano-dourado" />
                <span>Ver Pratos de Hoje</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent("Olá Restaurante Lusitano! Gostaria de reservar mesa para almoço.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-lg transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Reservar no WhatsApp</span>
              </a>

              <a
                href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-lusitano-dourado" />
                <span>937 117 791</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-400 mt-1">
                  <strong>+1.400</strong> Clientes Satisfeitos
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Carvão 100%
                </p>
                <p className="text-xs text-stone-400 mt-0.5">Grelhados no Ponto</p>
              </div>

              <div>
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Take-Away
                </p>
                <p className="text-xs text-stone-400 mt-0.5">Pronto à Hora</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-lusitano-dourado/30 to-lusitano-bordo/50 rounded-2xl blur-lg"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl bg-stone-900 border border-stone-700/80 overflow-hidden shadow-2xl">
                
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                    alt="Grelhados Lusitano"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
                  
                  <span className="absolute top-4 left-4 bg-lusitano-bordo text-white font-bold text-xs uppercase px-3 py-1.5 rounded-md shadow border border-lusitano-dourado/40">
                    Especialidade Diária
                  </span>

                  <span className="absolute bottom-4 right-4 bg-stone-900/90 text-amber-300 font-serif font-black text-lg px-3.5 py-1 rounded-lg border border-amber-500/40 backdrop-blur">
                    Picanha & Maminha
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-xl text-white">Menu Completo de Almoço</h3>
                      <p className="text-xs text-stone-400">Prato + Pão + Sopa / Bebida + Café</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-stone-400 block">A partir de</span>
                      <span className="font-serif font-bold text-2xl text-lusitano-dourado">8,50 €</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-stone-300 border-t border-stone-800 pt-3">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lusitano-dourado"></span>
                      <span><strong>Pratos Rápidos:</strong> Menos de 10 min de espera.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lusitano-dourado"></span>
                      <span><strong>Estacionamento:</strong> Zona de fácil paragem.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-lusitano-dourado"></span>
                      <span><strong>Take-Away:</strong> Encomende por WhatsApp e levante pronto.</span>
                    </li>
                  </ul>

                  <a
                    href="#takeaway"
                    className="block text-center w-full bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold py-2.5 rounded-lg text-sm border border-stone-700 transition-colors"
                  >
                    Simular Pedido de Take-Away →
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="text-center pt-8">
        <a href="#pratos-do-dia" className="inline-flex items-center gap-1 text-stone-500 hover:text-lusitano-dourado text-xs uppercase tracking-widest transition-colors">
          <span>Explorar Ementa</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
