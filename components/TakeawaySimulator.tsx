"use client";

import React, { useState } from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { ShoppingBag, Clock, MessageSquare, Check, Sparkles, User, AlertCircle } from "lucide-react";

export function TakeawaySimulator() {
  const [nome, setNome] = useState("");
  const [horaLevantamento, setHoraLevantamento] = useState("12:30");
  const [pratoSelecionado, setPratoSelecionado] = useState("Picanha ou Maminha na Brasa");
  const [quantidade, setQuantidade] = useState(1);
  const [incluirSopa, setIncluirSopa] = useState(true);
  const [incluirBebida, setIncluirBebida] = useState("Sumo / Refrigerante");
  const [incluirSobremesa, setIncluirSobremesa] = useState(false);
  const [notas, setNotas] = useState("");
  const [enviado, setEnviado] = useState(false);

  const opcoesPratos = [
    "Picanha ou Maminha na Brasa (c/ arroz, feijão preto e batata)",
    "Dourada ou Robalo Grelhado no Carvão",
    "Bacalhau com Natas Gratinado",
    "Bitoque de Porco / Vaca com Ovo a Cavalo",
    "Grelhados Mistos (Febras e Entremeada)",
    "Opção Vegetariana (Tofu / Legumes)",
    "Prato do Dia (Conforme Ementa de Hoje)"
  ];

  const opcoesHoras = ["12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "14:00"];

  const gerarTextoWhatsapp = () => {
    let msg = `🍽️ *PEDIDO DE TAKE-AWAY — RESTAURANTE LUSITANO*\n\n`;
    msg += `👤 *Nome:* ${nome.trim() || "Cliente"}\n`;
    msg += `⏰ *Hora Prevista de Levantamento:* ${horaLevantamento}\n`;
    msg += `🍲 *Prato:* ${quantidade}x ${pratoSelecionado}\n`;
    if (incluirSopa) msg += `🍵 *Sopa:* Sim (Sopa do Dia)\n`;
    if (incluirBebida) msg += `🥤 *Bebida:* ${incluirBebida}\n`;
    if (incluirSobremesa) msg += `🍰 *Sobremesa:* Sim (Sobremesa do Dia)\n`;
    if (notas.trim()) msg += `📝 *Observações:* ${notas.trim()}\n`;
    msg += `\n_Por favor confirmem a receção e o valor total. Obrigado!_`;

    return msg;
  };

  const handleEnviarPedido = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = gerarTextoWhatsapp();
    const url = `https://wa.me/${RESTAURANTE_INFO.whatsappNumero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  return (
    <section id="takeaway" className="py-16 sm:py-24 bg-stone-950 text-white relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Take-Away Rápido & Sem Esperas</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-black text-white leading-tight">
              Tem Pouco Tempo de Almoço? <br />
              <span className="text-lusitano-dourado">Peça Antes de Sair.</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Trabalha num escritório, loja, clínica ou obra em Leiria? Faça o seu pedido de almoço até às <strong>11h45</strong> e levantamento à hora que quiser, quente e bem embalado.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <div className="p-2 rounded-lg bg-emerald-900/40 text-emerald-400 shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-sm text-stone-100">Escolha os Pratos</h4>
                  <p className="text-xs text-stone-400">Selecione as doses e a hora exata a que passa no restaurante.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <div className="p-2 rounded-lg bg-emerald-900/40 text-emerald-400 shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-sm text-stone-100">Envio Direto para o WhatsApp</h4>
                  <p className="text-xs text-stone-400">O sistema gera o pedido detalhado para a nossa cozinha.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <div className="p-2 rounded-lg bg-emerald-900/40 text-emerald-400 shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-sm text-stone-100">Chegar, Pagar e Levar</h4>
                  <p className="text-xs text-stone-400">Sem filas nem esperas. Estrada da Estação 89, Leiria.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-300 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0 text-amber-400" />
              <span>Também pode encomendar diretamente por chamada telefónica para o <strong>937 117 791</strong>.</span>
            </div>
          </div>

          {/* Right Column: Interactive Order Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-lusitano-dourado" />
                    Simulador de Pedido de Almoço
                  </h3>
                  <p className="text-xs text-stone-400">Preencha e envie para o WhatsApp com 1 toque</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full">
                  Pronto em 15m
                </span>
              </div>

              <form onSubmit={handleEnviarPedido} className="space-y-4">
                
                {/* Nome e Hora */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-lusitano-dourado" />
                      O Seu Nome / Empresa:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: João Silva"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-lusitano-dourado"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-lusitano-dourado" />
                      Hora de Levantamento:
                    </label>
                    <select
                      value={horaLevantamento}
                      onChange={(e) => setHoraLevantamento(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-lusitano-dourado"
                    >
                      {opcoesHoras.map((h) => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Prato e Quantidade */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Escolha o Prato Principal:
                    </label>
                    <select
                      value={pratoSelecionado}
                      onChange={(e) => setPratoSelecionado(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-lusitano-dourado"
                    >
                      {opcoesPratos.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Doses:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                        className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700 font-bold hover:bg-stone-700 text-lg"
                      >
                        -
                      </button>
                      <span className="font-bold text-base w-6 text-center">{quantidade}</span>
                      <button
                        type="button"
                        onClick={() => setQuantidade(quantidade + 1)}
                        className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700 font-bold hover:bg-stone-700 text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Extras Checklist */}
                <div className="bg-stone-950/80 p-4 rounded-xl border border-stone-800 space-y-3">
                  <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block">
                    Complementos do Almoço:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={incluirSopa}
                        onChange={(e) => setIncluirSopa(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-0"
                      />
                      <span className="text-stone-200">Sopa Quente</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={incluirSobremesa}
                        onChange={(e) => setIncluirSobremesa(e.target.checked)}
                        className="w-4 h-4 rounded text-emerald-600 focus:ring-0"
                      />
                      <span className="text-stone-200">Sobremesa Caseira</span>
                    </label>

                    <div className="sm:col-span-1">
                      <select
                        value={incluirBebida}
                        onChange={(e) => setIncluirBebida(e.target.value)}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg p-1.5 text-xs text-stone-200"
                      >
                        <option value="Água das Pedras / Mineral">Água Mineral</option>
                        <option value="Sumo / Refrigerante">Refrigerante</option>
                        <option value="Cerveja">Cerveja</option>
                        <option value="Vinho da Casa">Vinho da Casa</option>
                        <option value="Sem Bebida">Sem Bebida</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Observações */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Observações / Pedidos Especiais:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Batata frita bem passada, sem salada, molho à parte..."
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-3.5 py-2 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-lusitano-dourado"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl text-base shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Enviar Pedido para o WhatsApp (937 117 791)</span>
                </button>

                {enviado && (
                  <p className="text-xs text-emerald-400 text-center flex items-center justify-center gap-1 font-medium animate-in fade-in">
                    <Check className="w-4 h-4" /> A abrir o WhatsApp com o pedido formatado...
                  </p>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
