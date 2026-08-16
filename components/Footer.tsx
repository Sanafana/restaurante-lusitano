"use client";

import React from "react";
import Image from "next/image";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#090807] text-stone-400 border-t border-lusitano-border text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-lusitano-gold/40 shadow-sm bg-black shrink-0">
                <Image
                  src="/logo-lusitano.jpg"
                  alt="Restaurante Lusitano"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block font-serif text-base font-bold text-white">
                  Restaurante Lusitano
                </span>
                <span className="block text-[10px] uppercase tracking-wider text-lusitano-gold font-semibold">
                  Cozinha Tradicional Portuguesa · Leiria
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs max-w-md leading-relaxed">
              O seu restaurante de eleição para almoços em Leiria. Comida portuguesa farta, carnes grelhadas no carvão e take-away sem demoras.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Menu Rápido</h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#pratos-do-dia" className="hover:text-lusitano-goldLight transition-colors">Pratos do Dia</a></li>
              <li><a href="#takeaway" className="hover:text-lusitano-goldLight transition-colors">Pedir Take-Away</a></li>
              <li><a href="#especialidades" className="hover:text-lusitano-goldLight transition-colors">Especialidades</a></li>
              <li><a href="#localizacao" className="hover:text-lusitano-goldLight transition-colors">Localização & Horários</a></li>
            </ul>
          </div>

          {/* Contactos */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Contactos</h4>
            <p className="text-stone-300">
              <strong className="text-white">Telefone:</strong> {RESTAURANTE_INFO.telefone}
            </p>
            <p className="text-stone-300">
              <strong className="text-white">Morada:</strong> {RESTAURANTE_INFO.morada}
            </p>
            <p className="text-stone-300">
              <strong className="text-white">Horário:</strong> Seg. a Sáb. 11h45 – 15h30
            </p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href={RESTAURANTE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-lusitano-surface hover:bg-lusitano-card text-stone-300 hover:text-white border border-lusitano-border transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-lusitano-surface hover:bg-lusitano-card text-emerald-400 hover:text-white border border-lusitano-border transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-lusitano-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Restaurante Lusitano Leiria. Estrada da Estação 89 R/C.
          </p>
          <p>
            Desenvolvido por <strong className="text-stone-300">Proposta Digital</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}
