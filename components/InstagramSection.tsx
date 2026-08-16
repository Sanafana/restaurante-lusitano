"use client";

import React from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";

export function InstagramSection() {
  const posts = [
    {
      imagem: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
      caption: "Picanha & Maminha fatiadas no ponto com arroz solto, feijão preto e batata estaladiça.",
      likes: 48,
    },
    {
      imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
      caption: "Dourada fresca grelhada no carvão. Almoço saudável e saboroso na Estrada da Estação.",
      likes: 41,
    },
    {
      imagem: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
      caption: "Bacalhau com natas tradicional gratinado no forno a sair a fumegar da cozinha.",
      likes: 62,
    },
    {
      imagem: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
      caption: "Bitoque à Lusitano com ovo a cavalo. Rápido, farto e com o sabor de sempre.",
      likes: 53,
    },
  ];

  return (
    <section id="instagram" className="py-16 sm:py-24 bg-[#0d0c0a] text-[#f5f3ef] relative border-t border-lusitano-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lusitano-surface border border-lusitano-border text-lusitano-gold text-xs font-bold uppercase tracking-widest mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Oficial</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-white">
              Siga a Ementa Diária no Feed
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2">
              Publicamos todos os dias os pratos que estão a sair do carvão.
            </p>
          </div>

          <a
            href={RESTAURANTE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lusitano-surface hover:bg-lusitano-card border border-lusitano-border text-stone-200 font-bold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            <Instagram className="w-4 h-4 text-lusitano-gold" />
            <span>Seguir {RESTAURANTE_INFO.instagramUser}</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-stone-500" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={RESTAURANTE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-lusitano-surface rounded-2xl overflow-hidden border border-lusitano-border hover:border-lusitano-gold/50 transition-all block shadow-lg"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={post.imagem}
                  alt="Post Restaurante Lusitano"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0d0c0a]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5">
                  <div className="flex justify-end">
                    <span className="p-2 rounded-lg bg-lusitano-surface text-lusitano-gold border border-lusitano-border">
                      <Instagram className="w-4 h-4" />
                    </span>
                  </div>

                  <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-bold text-stone-400">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" />
                      Comentários
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
