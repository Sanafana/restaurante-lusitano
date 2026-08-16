"use client";

import React, { useState, useEffect } from "react";
import { EMENTA_SEMANAL, RESTAURANTE_INFO, DiaEmenta } from "@/lib/data";
import { Utensils, Fish, Flame, Salad, Cake, MessageSquare, Phone } from "lucide-react";

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
    <section id="pratos-do-dia" className="py-16 sm:py-24 bg-[#0d0c0a] text-[#f5f3ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lusitano-surface border border-lusitano-border text-lusitano-gold text-xs font-bold uppercase tracking-widest">
            <span>Ementa Semanal de Almoço</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Pratos do Dia
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Servidos diariamente das <strong>11h45 às 15h30</strong>. Escolha o dia da semana para consultar o menu:
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-10">
          {[
            { key: "segunda", label: "Segunda" },
            { key: "terca", label: "Terça" },
            { key: "quarta", label: "Quarta" },
            { key: "quinta", label: "Quinta" },
            { key: "sexta", label: "Sexta" },
            { key: "sabado", label: "Sábado" },
          ].map((d) => {
            const isActive = selectedDayKey === d.key;
            return (
              <button
                key={d.key}
                onClick={() => setSelectedDayKey(d.key)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-lusitano-gold to-lusitano-goldLight text-stone-950 shadow-md scale-105"
                    : "bg-lusitano-surface hover:bg-lusitano-card text-stone-400 hover:text-white border border-lusitano-border"
                }`}
              >
                {d.label}
              </button>
            );
          })}
        </div>

        {/* Ementa Card */}
        <div className="bg-lusitano-surface border border-lusitano-border rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-lusitano-border gap-4 mb-8">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-lusitano-gold font-bold">
                Ementa Selecionada
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
                {ementa.diaSemana}
              </h3>
            </div>
            
            <a
              href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-lusitano-card hover:bg-[#25221e] text-stone-200 px-4 py-2 rounded-lg border border-lusitano-border transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-lusitano-gold" />
              <span>Reservar Mesa: {RESTAURANTE_INFO.telefone}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Coluna 1: Carnes & Grelhados + Vegetariano */}
            <div className="space-y-8">
              
              {/* Carne */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-md bg-amber-950/40 text-lusitano-gold border border-amber-800/40">
                    <Flame className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-amber-200 uppercase tracking-wide">
                    Pratos de Carne & Grelhados no Carvão
                  </h4>
                </div>

                <div className="space-y-3">
                  {ementa.carne.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-lusitano-card border border-lusitano-border hover:border-lusitano-gold/50 transition-all flex justify-between items-start gap-4 group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm sm:text-base text-stone-100 group-hover:text-amber-200 transition-colors">
                            {item.nome}
                          </span>
                          {item.destaque && (
                            <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-500/10 text-lusitano-gold border border-amber-500/30 px-2 py-0.5 rounded">
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
                        className="shrink-0 p-2 rounded-lg bg-lusitano-surface hover:bg-[#15803d] text-stone-400 hover:text-white transition-colors border border-lusitano-border"
                        title="Pedir no WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vegetariano */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-md bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
                    <Salad className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-emerald-300 uppercase tracking-wide">
                    Opção Vegetariana
                  </h4>
                </div>

                <div className="space-y-2">
                  {ementa.vegetariano.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-lusitano-card border border-lusitano-border flex justify-between items-center"
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

            {/* Coluna 2: Peixe, Sopas & Sobremesas */}
            <div className="space-y-8">
              
              {/* Peixe */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded-md bg-sky-950/40 text-sky-400 border border-sky-800/40">
                    <Fish className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-sky-200 uppercase tracking-wide">
                    Peixe Fresco & Pratos do Mar
                  </h4>
                </div>

                <div className="space-y-3">
                  {ementa.peixe.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-lusitano-card border border-lusitano-border hover:border-sky-500/40 transition-all flex justify-between items-start gap-4 group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm sm:text-base text-stone-100 group-hover:text-sky-200 transition-colors">
                            {item.nome}
                          </span>
                          {item.destaque && (
                            <span className="text-[10px] uppercase font-bold tracking-wider bg-sky-500/10 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded">
                              Fresco
                            </span>
                          )}
                        </div>
                      </div>

                      <a
                        href={buildWhatsappLinkForPrato(item.nome)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 p-2 rounded-lg bg-lusitano-surface hover:bg-[#15803d] text-stone-400 hover:text-white transition-colors border border-lusitano-border"
                        title="Pedir no WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sopas */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-md bg-amber-950/30 text-lusitano-gold border border-amber-800/30">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-stone-200 uppercase tracking-wide">
                    Sopas Caseiras
                  </h4>
                </div>

                <div className="space-y-2">
                  {ementa.sopas.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-lusitano-card border border-lusitano-border text-xs sm:text-sm text-stone-300"
                    >
                      🥣 {item.nome}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sobremesas */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-1.5 rounded-md bg-pink-950/30 text-pink-300 border border-pink-800/30">
                    <Cake className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-pink-200 uppercase tracking-wide">
                    Sobremesas da Casa
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                  {ementa.sobremesas.map((item) => (
                    <div key={item.id} className="p-2.5 rounded-lg bg-lusitano-card border border-lusitano-border flex items-center gap-2">
                      <span className="text-lusitano-gold">🍰</span>
                      <span>{item.nome}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Footer Bar */}
          <div className="mt-8 pt-6 border-t border-lusitano-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400 text-center sm:text-left">
            <span>
              ℹ️ Menus completos incluem pão, azeitonas, prato principal, bebida e café.
            </span>
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent(`Olá! Gostaria de encomendar almoço para take-away (${ementa.diaSemana}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#15803d] hover:bg-[#16a34a] text-white font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-colors shrink-0"
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
