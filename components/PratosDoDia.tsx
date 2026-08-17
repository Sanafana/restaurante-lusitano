"use client";

import React, { useState, useEffect } from "react";
import { EMENTA_SEMANAL, RESTAURANTE_INFO } from "@/lib/data";
import { Utensils, Fish, Flame, Salad, Cake, MessageSquare, Clock, Check, Sparkles } from "lucide-react";

export function PratosDoDia() {
  const [diaAtivo, setDiaAtivo] = useState<string>("segunda");

  useEffect(() => {
    const hoje = new Date().getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const mapaDias: { [key: number]: string } = {
      1: "segunda",
      2: "terca",
      3: "quarta",
      4: "quinta",
      5: "sexta",
      6: "sabado",
    };
    if (mapaDias[hoje]) {
      setDiaAtivo(mapaDias[hoje]);
    }
  }, []);

  const ementaAtual = EMENTA_SEMANAL[diaAtivo] || EMENTA_SEMANAL["segunda"];

  const listaDias = [
    { id: "segunda", label: "Segunda-feira", destaque: "Picanha & Dourada" },
    { id: "terca", label: "Terça-feira", destaque: "Cozido à Portuguesa" },
    { id: "quarta", label: "Quarta-feira", destaque: "Robalo & Feijoada" },
    { id: "quinta", label: "Quinta-feira", destaque: "Bacalhau Assado" },
    { id: "sexta", label: "Sexta-feira", destaque: "Leitão & Picanha" },
    { id: "sabado", label: "Sábado", destaque: "Cabrito no Forno" },
  ];

  return (
    <section id="pratos-do-dia" className="py-16 sm:py-24 relative border-t transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full surface-card border text-[#c59b27] text-xs font-bold uppercase tracking-widest">
            <Utensils className="w-3.5 h-3.5" />
            <span>Ementa Semanal de Almoço</span>
          </div>
          <h2 className="optical-title font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-heading">
            O Que Há Para Almoçar Hoje?
          </h2>
          <p className="optical-body text-body-muted text-sm sm:text-base">
            Consulte os pratos confecionados diariamente ou encomende a sua dose quente para levantar.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {listaDias.map((d) => {
            const isSelected = d.id === diaAtivo;
            return (
              <button
                key={d.id}
                onClick={() => setDiaAtivo(d.id)}
                className={`apple-button px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap border flex flex-col items-center gap-0.5 ${
                  isSelected
                    ? "bg-gradient-to-b from-[#d4af37] to-[#b38820] text-stone-950 border-[#d4af37] shadow-lg scale-105"
                    : "surface-card text-body-muted hover:border-[#c59b27]/60"
                }`}
              >
                <span>{d.label}</span>
                <span className={`text-[10px] uppercase tracking-wider font-semibold ${isSelected ? "text-stone-950" : "text-[#c59b27]"}`}>
                  {d.destaque}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Menu Board */}
        <div className="surface-card border rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/10 dark:border-white/10 gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold">
                Ementa de Almoço
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-heading mt-1">
                {ementaAtual.diaSemana}
              </h3>
            </div>
            
            <a
              href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent(`Olá! Gostaria de reservar para almoçar na ${ementaAtual.diaSemana}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-b from-[#16a34a] to-[#15803d] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Pedir Ementa de {ementaAtual.diaSemana}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Carnes & Grelhados no Carvão */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-black/10 dark:border-white/10">
                <Flame className="w-5 h-5 text-amber-500" />
                <h4 className="font-serif font-bold text-lg text-heading">
                  Grelhados no Carvão & Carnes
                </h4>
              </div>

              <div className="space-y-3">
                {ementaAtual.carne.map((carne, i) => (
                  <div
                    key={carne.id || i}
                    className="p-4 rounded-2xl surface-card-subtle border flex items-center justify-between gap-4 apple-card"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base text-heading">{carne.nome}</span>
                        {carne.destaque && (
                          <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-600 dark:text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                            No Carvão
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-body-muted leading-relaxed">{carne.descricao || "Acompanha com arroz, batata e salada fresca."}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-[#c59b27] block mb-1">
                        {carne.preco || "Menu Almoço"}
                      </span>
                      <a
                        href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent(`Olá! Gostaria de pedir "${carne.nome}" para take-away.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-button inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <MessageSquare className="w-3 h-3" />
                        Pedir
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peixes, Sopas e Outros */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Peixe Fresco */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-black/10 dark:border-white/10">
                  <Fish className="w-5 h-5 text-sky-500" />
                  <h4 className="font-serif font-bold text-lg text-heading">
                    Peixe Fresco
                  </h4>
                </div>

                {ementaAtual.peixe.map((peixe, i) => (
                  <div
                    key={peixe.id || i}
                    className="p-4 rounded-2xl surface-card-subtle border flex items-center justify-between gap-4 apple-card"
                  >
                    <div className="space-y-1">
                      <span className="font-bold text-sm sm:text-base text-heading">{peixe.nome}</span>
                      <p className="text-xs text-body-muted leading-relaxed">{peixe.descricao || "Grelhado na brasa ao momento com batata cozida e legumes."}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-[#c59b27] block mb-1">
                        {peixe.preco || "Menu Almoço"}
                      </span>
                      <a
                        href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent(`Olá! Gostaria de pedir "${peixe.nome}" para take-away.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-button inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <MessageSquare className="w-3 h-3" />
                        Pedir
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sopa & Sobremesa */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl surface-card-subtle border">
                  <div className="flex items-center gap-2 text-[#c59b27] mb-1">
                    <Utensils className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Sopa do Dia</span>
                  </div>
                  <p className="font-semibold text-xs text-heading">
                    {ementaAtual.sopas[0]?.nome || "Sopa de Legumes da Horta"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl surface-card-subtle border">
                  <div className="flex items-center gap-2 text-rose-500 mb-1">
                    <Cake className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Sobremesa</span>
                  </div>
                  <p className="font-semibold text-xs text-heading">
                    {ementaAtual.sobremesas[0]?.nome || "Mousse de Chocolate Caseira"}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
