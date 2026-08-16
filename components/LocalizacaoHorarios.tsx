"use client";

import React from "react";
import { RESTAURANTE_INFO, TESTEMUNHOS } from "@/lib/data";
import { MapPin, Clock, Phone, MessageSquare, Navigation, Star, Car } from "lucide-react";

export function LocalizacaoHorarios() {
  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-stone-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testemunhos */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-lusitano-dourado font-bold">
              Opinião de Quem Cá Almoça
            </span>
            <h2 className="font-serif text-3xl font-black text-white">
              A Escolha Diária em Leiria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTEMUNHOS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.estrelas)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-300 italic leading-relaxed">
                  "{t.texto}"
                </p>
                <div className="pt-2 border-t border-stone-900">
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
          <div className="lg:col-span-6 bg-stone-950 border border-stone-800 rounded-3xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-lusitano-dourado font-bold">
                  Onde Estamos
                </span>
                <h3 className="font-serif text-3xl font-black text-white mt-1">
                  Localização & Horários
                </h3>
              </div>

              {/* Morada */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-lusitano-bordo/40 border border-lusitano-bordo text-lusitano-dourado shrink-0">
                  <MapPin className="w-6 h-6" />
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
                <div className="p-3 rounded-xl bg-amber-950/50 border border-amber-800/50 text-amber-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Horário de Funcionamento</h4>
                  <p className="text-stone-300 text-sm font-semibold text-emerald-400">
                    Segunda a Sábado: 11h45 às 15h30
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Serviço de Almoço & Take-Away
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Domingos e Noites: Encerrado para descanso da equipa.
                  </p>
                </div>
              </div>

              {/* Contactos */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Reservas & Encomendas</h4>
                  <a
                    href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
                    className="text-lg font-bold text-lusitano-dourado hover:underline block"
                  >
                    {RESTAURANTE_INFO.telefone}
                  </a>
                  <p className="text-xs text-stone-400">Chamada para a rede móvel nacional</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-6 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={RESTAURANTE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 py-3 px-4 rounded-xl text-sm font-bold border border-stone-700 transition-colors"
              >
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>Abrir Google Maps</span>
              </a>

              <a
                href={RESTAURANTE_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 py-3 px-4 rounded-xl text-sm font-bold border border-stone-700 transition-colors"
              >
                <Navigation className="w-4 h-4 text-cyan-400" />
                <span>Navegar no Waze</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Mockup Card */}
          <div className="lg:col-span-6 rounded-3xl bg-stone-950 border border-stone-800 overflow-hidden relative shadow-2xl flex flex-col">
            <div className="p-6 bg-stone-900 border-b border-stone-800 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-white text-sm">Leiria · Zona da Estação</h4>
                <p className="text-xs text-stone-400">Estrada da Estação, 89 R/C</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
            </div>

            <div className="relative flex-1 min-h-[300px] bg-stone-950 flex items-center justify-center p-8 text-center">
              {/* Map visual stylised */}
              <div className="space-y-4 max-w-sm">
                <div className="w-16 h-16 rounded-full bg-lusitano-bordo border-2 border-lusitano-dourado text-lusitano-dourado mx-auto flex items-center justify-center shadow-xl animate-bounce">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-xl text-white">
                  Restaurante Lusitano Leiria
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  A poucos minutos do centro de Leiria e com acesso rápido pela IC2 / A19. Ponto ideal para almoçar sem stress de trânsito.
                </p>
                <a
                  href={RESTAURANTE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-lusitano-dourado text-stone-950 font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Ver Rota no Mapa
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
