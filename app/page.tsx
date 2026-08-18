"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/ThemeContext";
import { DesignVariant, VariantSwitcher } from "@/components/VariantSwitcher";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PratosDoDia } from "@/components/PratosDoDia";
import { TakeawaySimulator } from "@/components/TakeawaySimulator";
import { Especialidades } from "@/components/Especialidades";
import { InstagramSection } from "@/components/InstagramSection";
import { LocalizacaoHorarios } from "@/components/LocalizacaoHorarios";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [variant, setVariant] = useState<DesignVariant>("original");

  useEffect(() => {
    const savedVariant = window.localStorage.getItem("lusitano-design");
    if (["original", "atelier", "editorial", "vibrante"].includes(savedVariant ?? "")) {
      setVariant(savedVariant as DesignVariant);
    }
  }, []);

  const selectVariant = (nextVariant: DesignVariant) => {
    setVariant(nextVariant);
    window.localStorage.setItem("lusitano-design", nextVariant);
  };

  return (
    <ThemeProvider>
      <div data-design={variant} className="design-canvas">
        <VariantSwitcher currentVariant={variant} onSelectVariant={selectVariant} />
        <main className="min-h-screen selection:bg-[#c59b27] selection:text-black">
          <Navbar />
          <Hero />
          <PratosDoDia />
          <TakeawaySimulator />
          <Especialidades />
          <InstagramSection />
          <LocalizacaoHorarios />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
