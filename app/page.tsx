"use client";

import React from "react";
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
    <main className="min-h-screen bg-stone-950 text-white selection:bg-lusitano-bordo selection:text-white">
      <Navbar />
      <Hero />
      <PratosDoDia />
      <TakeawaySimulator />
      <Especialidades />
      <InstagramSection />
      <LocalizacaoHorarios />
      <Footer />
    </main>
  );
}
