"use client";

import { ThemeProvider } from "@/components/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PratosDoDia } from "@/components/PratosDoDia";
import { TakeawaySimulator } from "@/components/TakeawaySimulator";
import { Especialidades } from "@/components/Especialidades";
import { InstagramSection } from "@/components/InstagramSection";
import { LocalizacaoHorarios } from "@/components/LocalizacaoHorarios";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
