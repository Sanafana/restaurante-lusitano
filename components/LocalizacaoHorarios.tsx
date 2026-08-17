"use client";

import React from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { MapPin, Clock, Phone, Navigation, Car } from "lucide-react";

export function LocalizacaoHorarios() {
  return (
    <section id="localizacao" className="py-16 sm:py-24 relative border-t transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full surface-card border text-[#c59b27] text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Fácil Acesso & Estacionamento</span>
          </div>
          <h2 className="optical-title font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-heading">
            Onde Estamos & Horários
          </h2>
          <p className="optical-body text-body-muted text-sm sm:text-base">
            Situado no Bloco 89 da Estrada da Estação em Leiria, com estacionamento facilitado à porta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card Informações */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="surface-card border rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              {/* Morada */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl surface-card-subtle border text-[#c59b27] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-widest block">Morada</span>
                  <h3 className="font-bold text-base text-heading">{RESTAURANTE_INFO.morada}</h3>
                  <p className="text-xs text-body-muted mt-0.5">{RESTAURANTE_INFO.codigoPostal} · {RESTAURANTE_INFO.cidade}</p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4 pt-4 border-t border-black/10 dark:border-white/10">
                <div className="p-3 rounded-2xl surface-card-subtle border text-[#c59b27] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-widest block">Horário de Funcionamento</span>
                  <h3 className="font-bold text-base text-heading">{RESTAURANTE_INFO.horarioAlmoco}</h3>
                  <p className="text-xs text-body-muted mt-0.5">Segunda a Sábado exclusivamente para Almoços</p>
                  <p className="text-xs font-semibold text-rose-500 mt-1">Domingo: Encerrado</p>
                </div>
              </div>

              {/* Contacto */}
              <div className="flex items-start gap-4 pt-4 border-t border-black/10 dark:border-white/10">
                <div className="p-3 rounded-2xl surface-card-subtle border text-[#c59b27] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-widest block">Telefone Direto</span>
                  <a
                    href={`tel:${RESTAURANTE_INFO.telefone.replace(/\s/g, "")}`}
                    className="font-bold text-lg text-heading hover:text-[#c59b27] transition-colors"
                  >
                    {RESTAURANTE_INFO.telefone}
                  </a>
                  <p className="text-xs text-body-muted mt-0.5">Atendimento rápido para reservas e encomendas</p>
                </div>
              </div>

            </div>

            {/* Botões de Navegação GPS */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={RESTAURANTE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button flex items-center justify-center gap-2 p-3.5 rounded-2xl surface-card border text-xs font-bold text-heading shadow-md hover:border-[#c59b27]"
              >
                <Navigation className="w-4 h-4 text-sky-500" />
                <span>Google Maps</span>
              </a>

              <a
                href={RESTAURANTE_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button flex items-center justify-center gap-2 p-3.5 rounded-2xl surface-card border text-xs font-bold text-heading shadow-md hover:border-[#c59b27]"
              >
                <Car className="w-4 h-4 text-indigo-500" />
                <span>Abrir no Waze</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7">
            <div className="surface-card border rounded-3xl overflow-hidden shadow-2xl h-full min-h-[380px] relative">
              <iframe
                title="Mapa Restaurante Lusitano"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.307221054366!2d-8.8189876!3d39.7554959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd227310e53a27f7%3A0x4a0ff46d814cfd2!2sEstrada%20da%20Esta%C3%A7%C3%A3o%2C%20Leiria!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl surface-card border backdrop-blur-md flex items-center justify-between text-xs shadow-lg">
                <span className="font-semibold text-heading">Estrada da Estação - Bloco 89 R/C, Leiria</span>
                <span className="text-[#c59b27] font-bold">Tel: {RESTAURANTE_INFO.telefone}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
