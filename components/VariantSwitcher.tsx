"use client";

import React from "react";
import { Sparkles, Moon, Sun, ClipboardList } from "lucide-react";

export type DesignVariant = "taberna" | "bistro" | "express";

interface VariantSwitcherProps {
  currentVariant: DesignVariant;
  onSelectVariant: (v: DesignVariant) => void;
}

export function VariantSwitcher({ currentVariant, onSelectVariant }: VariantSwitcherProps) {
  const variants: { id: DesignVariant; name: string; tag: string; icon: any; desc: string }[] = [
    {
      id: "taberna",
      name: "1. Taberna Dark & Braseiro",
      tag: "Recomendado",
      icon: Moon,
      desc: "Negro carvão, dourado nobre e ambiente acolhedor",
    },
    {
      id: "bistro",
      name: "2. Bistro Solar & Linho",
      tag: "Fresco / Claro",
      icon: Sun,
      desc: "Linho cru, café tostado e verde oliveira português",
    },
    {
      id: "express",
      name: "3. Quadro Negro Express",
      tag: "Ultra Rápido",
      icon: ClipboardList,
      desc: "Ardósia a giz e foco total em almoços de trabalho",
    },
  ];

  return (
    <aside aria-label="Seletor de Design Impeccable" className="bg-[#141210] border-b border-stone-800 py-2.5 px-4 sticky top-0 z-[60] shadow-xl text-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-lusitano-gold/20 text-lusitano-gold border border-lusitano-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-bold text-white uppercase tracking-wider block sm:inline">
              Impeccable Design:
            </span>{" "}
            <span className="text-stone-400">Escolha uma variante para testar o visual em direto:</span>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0">
          {variants.map((v) => {
            const Icon = v.icon;
            const isSelected = currentVariant === v.id;
            return (
              <button
                key={v.id}
                onClick={() => onSelectVariant(v.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap text-xs ${
                  isSelected
                    ? "bg-lusitano-gold text-stone-950 shadow-md scale-105"
                    : "bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700"
                }`}
                title={v.desc}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{v.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${isSelected ? "bg-stone-950/20 text-stone-950" : "bg-stone-800 text-stone-400"}`}>
                  {v.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
