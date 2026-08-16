"use client";

import React from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Phone, MessageSquare, Instagram, MapPin, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Coluna 1: Marca */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lusitano-bordo border border-lusitano-dourado/40 flex items-center justify-center text-lusitano-dourado font-serif font-black text-xl">
                L
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white">
                  Restaurante Lusitano
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-lusitano-dourado font-semibold">
                  Cozinha Tradicional Portuguesa · Leiria
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs max-w-md leading-relaxed">
              O seu restaurante de eleição para almoços de trabalho, refeições em família e comida caseira com o melhor sabor da tradição em Leiria.
            </p>
          </div>

          {/* Coluna 2: Acesso Rápido */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Acesso Rápido</h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#pratos-do-dia" className="hover:text-lusitano-dourado transition-colors">Pratos do Dia</a></li>
              <li><a href="#especialidades" className="hover:text-lusitano-dourado transition-colors">Especialidades</a></li>
              <li><a href="#takeaway" className="hover:text-lusitano-dourado transition-colors">Pedir Take-Away</a></li>
              <li><a href="#localizacao" className="hover:text-lusitano-dourado transition-colors">Localização & Horários</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contactos */}
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
            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANTE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-pink-400 hover:text-white border border-stone-800 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${RESTAURANTE_INFO.whatsappNumero}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-emerald-400 hover:text-white border border-stone-800 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Restaurante Lusitano Leiria. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Desenvolvido por <strong className="text-stone-300">Proposta Digital</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}
