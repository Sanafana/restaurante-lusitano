"use client";

import React, { useState, useEffect } from "react";
import { EMENTA_SEMANAL, RESTAURANTE_INFO, DiaEmenta, PratoItem } from "@/lib/data";
import { Utensils, Fish, Flame, Salad, Cake, Share2, MessageSquare, Phone, Sparkles } from "lucide-react";

export function PratosDoDia() {
  const [selectedDayKey, setSelectedDayKey] = useState<string>("segunda");

  useEffect(() => {
    const dayIndex = new Date().getDay(); // 0 = Domingo, 1 = Segunda, 2 = Terça...
    const mapDays: Record<number, string> = {
      1: "segunda",
      2: "terca",
      3: "quarta",
      4: "quinta",
      5: "sexta",
      6: "sabado",
    };
    if (mapDays[dayIndex]) {
      setSelectedDayKey(mapDays[dayIndex]);
    }
  }, []);

  const ementa: DiaEmenta = EMENTA_SEMANAL[selectedDayKey] || EMENTA_SEMANAL["segunda"];

  const buildWhatsappLinkForPrato = (pratoNome: string) => {
    const texto = `Olá Restaurante Lusitano! Gostaria de reservar/encomendar o prato "${pratoNome}" (${ementa.diaSemana}) para almoço.`;
    return `https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent(texto)}`;
  };

  return (
    <section id="pratos-do-dia" className="py-16 sm:py-24 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-lusitano-dourado text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Almoço Fresco Todos os Dias</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Ementa & Pratos do Dia
          </h2>
          <p className="text-stone-300 text-sm sm:text-base">
            Servidos de Segunda a Sábado das <strong>11h45 às 15h30</strong>. Selecione o dia da semana para consultar os pratos confecionados:
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {[
            { key: "segunda", label: "Segunda", full: "Segunda-feira" },
            { key: "terca", label: "Terça", full: "Terça-feira" },
            { key: "quarta", label: "Quarta", full: "Quarta-feira" },
            { key: "quinta", label: "Quinta", full: "Quinta-feira" },
            { key: "sexta", label: "Sexta", full: "Sexta-feira" },
            { key: "sabado", label: "Sábado", full: "Sábado" },
          ].map((d) => {
            const isActive = selectedDayKey === d.key;
            return (
              <button
                key={d.key}
                onClick={() => setSelectedDayKey(d.key)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-lusitano-bordo to-lusitano-bordoClaro text-white shadow-lg border border-lusitano-dourado scale-105"
                    : "bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700"
                }`}
              >
                <span>{d.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-lusitano-dourado animate-ping"></span>}
              </button>
            );
          })}
        </div>

        {/* Ementa Grid Card */}
        <div className="bg-stone-950/90 border border-stone-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur relative overflow-hidden">
          
          {/* Top Label */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-stone-800 gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-lusitano-dourado font-semibold">
                Quadro de Hoje
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
                {ementa.diaSemana}
              </h3>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-stone-800 hover:bg-stone-700 text-stone-200 px-3.5 py-2 rounded-lg border border-stone-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-lusitano-dourado" />
                <span>Reservar Mesa: {RESTAURANTE_INFO.telefone}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left Column: Pratos de Carne & Grelhados */}
            <div className="space-y-6">
              
              {/* Carne */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-lusitano-bordo/40 text-lusitano-dourado border border-lusitano-bordo">
                    <Flame className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-amber-200 uppercase tracking-wide">
                    Pratos de Carne & Grelhados no Carvão
                  </h4>
                </div>

                <div className="space-y-3">
                  {ementa.carne.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 hover:border-amber-500/40 transition-all flex justify-between items-start gap-4 group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm sm:text-base text-stone-100 group-hover:text-amber-200 transition-colors">
                            {item.nome}
                          </span>
                          {item.destaque && (
                            <span className="text-[10px] uppercase font-black tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded">
                              Destaque
                            </span>
                          )}
                        </div>
                        {item.descricao && (
                          <p className="text-xs text-stone-400 mt-1">{item.descricao}</p>
                        )}
                      </div>

                      <a
                        href={buildWhatsappLinkForPrato(item.nome)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 rounded-lg bg-stone-800 hover:bg-emerald-600 text-stone-400 hover:text-white transition-colors"
                        title="Pedir este prato no WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vegetariano */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                    <Salad className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-emerald-300 uppercase tracking-wide">
                    Opção Vegetariana
                  </h4>
                </div>

                <div className="space-y-2">
                  {ementa.vegetariano.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 flex justify-between items-center"
                    >
                      <span className="text-sm font-medium text-stone-200">{item.nome}</span>
                      <a
                        href={buildWhatsappLinkForPrato(item.nome)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md text-stone-400 hover:text-emerald-400"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Peixe, Sopas & Sobremesas */}
            <div className="space-y-6">
              
              {/* Peixe */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-sky-950/60 text-sky-400 border border-sky-800/40">
                    <Fish className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-sky-200 uppercase tracking-wide">
                    Peixe Fresco & Pratos do Mar
                  </h4>
                </div>

                <div className="space-y-3">
                  {ementa.peixe.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-stone-900/90 border border-stone-800 hover:border-sky-500/40 transition-all flex justify-between items-start gap-4 group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm sm:text-base text-stone-100 group-hover:text-sky-200 transition-colors">
                            {item.nome}
                          </span>
                          {item.destaque && (
                            <span className="text-[10px] uppercase font-black tracking-widest bg-sky-500/20 text-sky-300 border border-sky-500/40 px-2 py-0.5 rounded">
                              Fresco do Dia
                            </span>
                          )}
                        </div>
                      </div>

                      <a
                        href={buildWhatsappLinkForPrato(item.nome)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 rounded-lg bg-stone-800 hover:bg-emerald-600 text-stone-400 hover:text-white transition-colors"
                        title="Pedir este prato no WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sopas */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-amber-950/50 text-amber-400 border border-amber-800/40">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-amber-200 uppercase tracking-wide">
                    Sopas Quentes da Casa
                  </h4>
                </div>

                <div className="space-y-2">
                  {ementa.sopas.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 text-sm text-stone-300"
                    >
                      🍵 {item.nome}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sobremesas */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-pink-950/50 text-pink-400 border border-pink-800/40">
                    <Cake className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-pink-200 uppercase tracking-wide">
                    Sobremesas Caseiras
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                  {ementa.sobremesas.map((item) => (
                    <div key={item.id} className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 flex items-center gap-2">
                      <span className="text-lusitano-dourado">🍰</span>
                      <span>{item.nome}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Note */}
          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400 text-center sm:text-left">
            <span>
              ℹ️ Todos os menus incluem pão da casa, azeitonas, prato principal, bebida e café. Doses completas e meias doses disponíveis.
            </span>
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent(`Olá! Gostaria de encomendar almoço para take-away (${ementa.diaSemana}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-lg text-xs transition-colors shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Pedir Tudo por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
