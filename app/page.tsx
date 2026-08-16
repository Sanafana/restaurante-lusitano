"use client";

import React, { useState } from "react";
import { VariantSwitcher, DesignVariant } from "@/components/VariantSwitcher";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PratosDoDia } from "@/components/PratosDoDia";
import { TakeawaySimulator } from "@/components/TakeawaySimulator";
import { Especialidades } from "@/components/Especialidades";
import { InstagramSection } from "@/components/InstagramSection";
import { LocalizacaoHorarios } from "@/components/LocalizacaoHorarios";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [variant, setVariant] = useState<DesignVariant>("taberna");

  // Define dynamic theme classes based on variant
  const getThemeWrapperClass = () => {
    switch (variant) {
      case "bistro":
        return "theme-bistro bg-[#fcfaf6] text-stone-900";
      case "express":
        return "theme-express bg-[#18181b] text-zinc-100";
      case "taberna":
      default:
        return "theme-taberna bg-[#0d0c0a] text-[#f5f3ef]";
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${getThemeWrapperClass()}`}>
      <VariantSwitcher currentVariant={variant} onSelectVariant={setVariant} />
      <Navbar />
      <Hero />
      <PratosDoDia />
      <TakeawaySimulator />
      <Especialidades />
      <InstagramSection />
      <LocalizacaoHorarios />
      <Footer />
    </div>
  );
}
