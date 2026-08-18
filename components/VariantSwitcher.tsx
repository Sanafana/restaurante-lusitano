"use client";

import { Check, LayoutTemplate, Palette, Sparkles, Type } from "lucide-react";

export type DesignVariant = "original" | "atelier" | "editorial" | "vibrante";

const variants = [
  { id: "original", number: "01", name: "Original", note: "Clássico Lusitano", icon: LayoutTemplate },
  { id: "atelier", number: "02", name: "Atelier", note: "Criação livre", icon: Sparkles },
  { id: "editorial", number: "03", name: "Editorial", note: "Referência I", icon: Type },
  { id: "vibrante", number: "04", name: "Vibrante", note: "Referência II", icon: Palette },
] as const;

interface VariantSwitcherProps {
  currentVariant: DesignVariant;
  onSelectVariant: (variant: DesignVariant) => void;
}

export function VariantSwitcher({ currentVariant, onSelectVariant }: VariantSwitcherProps) {
  return (
    <aside className="design-switcher" aria-label="Escolher versão visual do site">
      <div className="design-switcher__inner">
        <div className="design-switcher__intro">
          <span className="design-switcher__eyebrow">Direção visual</span>
          <strong>Escolha uma versão</strong>
        </div>
        <div className="design-switcher__options" role="group" aria-label="Versões disponíveis">
          {variants.map(({ id, number, name, note, icon: Icon }) => {
            const selected = currentVariant === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={selected}
                onClick={() => onSelectVariant(id)}
                className="design-switcher__button"
              >
                <span className="design-switcher__number">{number}</span>
                <Icon className="design-switcher__icon" aria-hidden="true" />
                <span className="design-switcher__copy">
                  <strong>{name}</strong>
                  <small>{note}</small>
                </span>
                {selected && <Check className="design-switcher__check" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
