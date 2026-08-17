"use client";

import React from "react";
import Image from "next/image";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, MapPin, Instagram, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="surface-card border-t py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#c59b27]/50 shadow-md bg-black">
                <Image
                  src="/logo-lusitano.jpg"
                  alt="Restaurante Lusitano"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-xl text-heading">
                RESTAURANTE LUSITANO
              </span>
            </div>
            <p className="text-xs text-body-muted max-w-sm leading-relaxed">
              Almoços tradicionais, peixe fresco e grelhados no carvão natural. Servimos a comunidade de Leiria e quem nos visita com hospitalidade e comida genuína.
            </p>
          </div>

          {/* Horários */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#c59b27]">
              Horário de Almoços
            </h4>
            <p className="text-xs text-heading font-medium">Segunda a Sábado</p>
            <p className="text-xs text-body-muted">{RESTAURANTE_INFO.horarioAlmoco}</p>
            <p className="text-xs text-rose-500 font-semibold pt-1">Domingo: Encerrado</p>
          </div>

          {/* Contactos */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#c59b27]">
              Contacto & Reservas
            </h4>
            <p className="text-xs text-heading font-bold">{RESTAURANTE_INFO.telefone}</p>
            <p className="text-xs text-body-muted">{RESTAURANTE_INFO.morada} · {RESTAURANTE_INFO.cidade}</p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href={RESTAURANTE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button p-2 rounded-xl surface-card-subtle border text-[#c59b27] hover:border-[#c59b27]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}`}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button p-2 rounded-xl bg-[#15803d] text-white"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-body-muted">
          <p>© {new Date().getFullYear()} Restaurante Lusitano · Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Design & Desenvolvimento por <span className="font-semibold text-heading">Proposta Digital</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
