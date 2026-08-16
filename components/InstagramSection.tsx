"use client";

import React from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";

export function InstagramSection() {
  const postsSimulados = [
    {
      imagem: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      caption: "Segunda-feira com cheiro a grelhados! Picanha fatiada no ponto com arroz, feijão preto e batata estaladiça.",
      likes: 42,
    },
    {
      imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      caption: "Dourada fresca grelhada no carvão para o almoço de hoje. Peça já por WhatsApp para levantar à hora!",
      likes: 38,
    },
    {
      imagem: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      caption: "Bacalhau com natas gratinado a sair do forno. Conforto português para o seu almoço de trabalho.",
      likes: 56,
    },
    {
      imagem: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
      caption: "Bitoque à Lusitano com ovo a cavalo. Rápido, farto e saboroso. Esperamos por si na Estrada da Estação.",
      likes: 49,
    },
  ];

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-stone-950 text-white relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-pink-500/40 text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>Siga-nos no Instagram</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-white">
              A Ementa Diária no Seu Feed
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Publicamos todos os dias a ementa atualizada com as fotos dos pratos prontos a sair da cozinha.
            </p>
          </div>

          <a
            href={RESTAURANTE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:from-purple-500 hover:to-amber-500 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg transition-all hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir {RESTAURANTE_INFO.instagramUser}</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {postsSimulados.map((post, i) => (
            <a
              key={i}
              href={RESTAURANTE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-pink-500/50 transition-all block shadow-lg"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={post.imagem}
                  alt="Instagram Post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-full bg-stone-900/80 text-white">
                      <Instagram className="w-4 h-4 text-pink-400" />
                    </span>
                  </div>

                  <p className="text-xs text-stone-200 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-bold text-stone-300">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      Comentar
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-stone-900 to-lusitano-bordo/40 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-900/40 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Identifique-nos nos seus Stories!</h4>
              <p className="text-xs text-stone-400">Marque <strong>@restaurante_lusitano_leiria</strong> na sua foto de almoço para fazermos repost.</p>
            </div>
          </div>
          <a
            href={RESTAURANTE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-lusitano-dourado hover:text-amber-300 transition-colors uppercase tracking-wider"
          >
            Abrir Instagram →
          </a>
        </div>

      </div>
    </section>
  );
}
