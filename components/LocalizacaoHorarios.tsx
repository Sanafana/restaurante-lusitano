"use client";

import React from "react";
import Image from "next/image";
import { RESTAURANTE_INFO, TESTEMUNHOS } from "@/lib/data";
import { MapPin, Clock, Phone, Navigation, Star, Car } from "lucide-react";

export function LocalizacaoHorarios() {
  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-[#0d0c0a] text-[#f5f3ef] relative border-t border-lusitano-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testemunhos */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-lusitano-gold font-bold">
              Avaliações de Clientes
            </span>
            <h2 className="font-serif text-3xl font-black text-white">
              A Escolha Diária em Leiria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTEMUNHOS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-lusitano-surface border border-lusitano-border space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.estrelas)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-300 italic leading-relaxed">
                  "{t.texto}"
                </p>
                <div className="pt-2 border-t border-lusitano-border/60">
                  <h4 className="font-bold text-sm text-white">{t.nome}</h4>
                  <p className="text-xs text-stone-500">{t.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Localização & Horários Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-6 bg-lusitano-surface border border-lusitano-border rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-lusitano-gold font-bold">
                  Onde Estamos
                </span>
                <h3 className="font-serif text-3xl font-black text-white mt-1">
                  Localização & Horários
                </h3>
              </div>

              {/* Morada */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-lusitano-card border border-lusitano-border text-lusitano-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Morada</h4>
                  <p className="text-stone-300 text-sm">{RESTAURANTE_INFO.morada}</p>
                  <p className="text-stone-400 text-xs">{RESTAURANTE_INFO.codigoPostal} · {RESTAURANTE_INFO.cidade}</p>
                  <p className="text-xs text-amber-300/80 mt-1 flex items-center gap-1">
                    <Car className="w-3.5 h-3.5" />
                    Junto à Estação de Comboios de Leiria · Fácil Estacionamento
                  </p>
                </div>
              </div>

              {/* Horários */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-lusitano-card border border-lusitano-border text-lusitano-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Horário de Almoço</h4>
                  <p className="text-stone-200 text-sm font-semibold text-emerald-400">
                    Segunda a Sábado: 11h45 às 15h30
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Serviço de Almoço de Sala & Take-Away
                  </p>
                </div>
              </div>

              {/* Contactos */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-lusitano-card border border-lusitano-border text-lusitano-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Contacto Telefónico</h4>
                  <a
                    href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
                    className="text-lg font-bold text-lusitano-goldLight hover:underline block"
                  >
                    {RESTAURANTE_INFO.telefone}
                  </a>
                  <p className="text-xs text-stone-400">Chamada para a rede móvel nacional</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-6 border-t border-lusitano-border grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={RESTAURANTE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-lusitano-card hover:bg-[#26231f] text-stone-200 py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold border border-lusitano-border transition-colors"
              >
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>Google Maps</span>
              </a>

              <a
                href={RESTAURANTE_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-lusitano-card hover:bg-[#26231f] text-stone-200 py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold border border-lusitano-border transition-colors"
              >
                <Navigation className="w-4 h-4 text-cyan-400" />
                <span>Navegar no Waze</span>
              </a>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="lg:col-span-6 rounded-3xl bg-lusitano-surface border border-lusitano-border overflow-hidden relative shadow-2xl flex flex-col justify-between p-8 text-center">
            <div className="relative w-20 h-20 mx-auto rounded-xl overflow-hidden border border-lusitano-gold/50 shadow-md bg-black">
              <Image
                src="/logo-lusitano.jpg"
                alt="Restaurante Lusitano"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2 my-6">
              <h4 className="font-serif font-bold text-2xl text-white">
                Restaurante Lusitano Leiria
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto leading-relaxed">
                Localizado na Estrada da Estação 89 R/C, com acessos rápidos a partir da IC2, A19 e centro de Leiria.
              </p>
            </div>

            <a
              href={RESTAURANTE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lusitano-gold to-lusitano-goldLight text-stone-950 font-black px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all w-full max-w-sm mx-auto"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver Rota no Google Maps</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
