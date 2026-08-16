"use client";

import React, { useState } from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { ShoppingBag, Clock, MessageSquare, Check, User, AlertCircle, Sparkles } from "lucide-react";

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
    msg += `⏰ *Hora de Levantamento:* ${horaLevantamento}\n`;
    msg += `🍲 *Prato:* ${quantidade}x ${pratoSelecionado}\n`;
    if (incluirSopa) msg += `🍵 *Sopa:* Sim (Sopa do Dia)\n`;
    if (incluirBebida && incluirBebida !== "Sem Bebida") msg += `🥤 *Bebida:* ${incluirBebida}\n`;
    if (incluirSobremesa) msg += `🍰 *Sobremesa:* Sim (Sobremesa do Dia)\n`;
    if (notas.trim()) msg += `📝 *Notas:* ${notas.trim()}\n`;
    msg += `\n_Por favor confirmem o pedido e o total. Obrigado!_`;

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
    <section id="takeaway" className="py-16 sm:py-24 bg-[#0d0c0a] text-[#f5f3ef] relative border-t border-lusitano-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lusitano-surface border border-lusitano-border text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Take-Away Rápido</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-black text-white leading-tight">
              Pausa de Almoço Curta? <br />
              <span className="text-lusitano-gold">Encomende Antes de Sair.</span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Faça a sua encomenda até às <strong>11h45</strong> para levantamento à hora que quiser. Chega ao restaurante, paga e leva a sua refeição quente e bem embalada.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-lusitano-surface border border-lusitano-border">
                <span className="w-7 h-7 rounded-lg bg-lusitano-card border border-lusitano-border flex items-center justify-center font-bold text-xs text-lusitano-gold shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Selecione o Almoço</h4>
                  <p className="text-xs text-stone-400">Escolha os pratos, número de doses e hora de levantamento.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-lusitano-surface border border-lusitano-border">
                <span className="w-7 h-7 rounded-lg bg-lusitano-card border border-lusitano-border flex items-center justify-center font-bold text-xs text-lusitano-gold shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Envio Imediato para o WhatsApp</h4>
                  <p className="text-xs text-stone-400">A cozinha recebe o pedido formatado e começa a preparar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-lusitano-surface border border-lusitano-border">
                <span className="w-7 h-7 rounded-lg bg-lusitano-card border border-lusitano-border flex items-center justify-center font-bold text-xs text-lusitano-gold shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Levantamento sem Esperas</h4>
                  <p className="text-xs text-stone-400">Estrada da Estação 89, Leiria. Estacionamento fácil.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-lusitano-surface border border-lusitano-border rounded-3xl p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-lusitano-border mb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Simular Pedido de Take-Away
                  </h3>
                  <p className="text-xs text-stone-400">Gera a mensagem para o WhatsApp do Restaurante</p>
                </div>
                <span className="text-xs font-bold text-lusitano-gold bg-lusitano-card border border-lusitano-border px-3 py-1 rounded-full">
                  Pronto em 15m
                </span>
              </div>

              <form onSubmit={handleEnviarPedido} className="space-y-4">
                
                {/* Nome e Hora */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-lusitano-gold" />
                      Nome / Empresa:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Manuel Silva"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-[#0d0c0a] border border-lusitano-border rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-lusitano-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-lusitano-gold" />
                      Hora de Levantamento:
                    </label>
                    <select
                      value={horaLevantamento}
                      onChange={(e) => setHoraLevantamento(e.target.value)}
                      className="w-full bg-[#0d0c0a] border border-lusitano-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-lusitano-gold"
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
                      Prato Principal:
                    </label>
                    <select
                      value={pratoSelecionado}
                      onChange={(e) => setPratoSelecionado(e.target.value)}
                      className="w-full bg-[#0d0c0a] border border-lusitano-border rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-lusitano-gold"
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
                        className="w-10 h-10 rounded-xl bg-lusitano-card border border-lusitano-border font-bold hover:bg-[#25221e] text-lg text-white"
                      >
                        -
                      </button>
                      <span className="font-bold text-base w-6 text-center text-white">{quantidade}</span>
                      <button
                        type="button"
                        onClick={() => setQuantidade(quantidade + 1)}
                        className="w-10 h-10 rounded-xl bg-lusitano-card border border-lusitano-border font-bold hover:bg-[#25221e] text-lg text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Complementos */}
                <div className="bg-[#0d0c0a] p-4 rounded-xl border border-lusitano-border space-y-3">
                  <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest block">
                    Complementos:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={incluirSopa}
                        onChange={(e) => setIncluirSopa(e.target.checked)}
                        className="w-4 h-4 rounded accent-emerald-600"
                      />
                      <span className="text-stone-200">Sopa do Dia</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={incluirSobremesa}
                        onChange={(e) => setIncluirSobremesa(e.target.checked)}
                        className="w-4 h-4 rounded accent-emerald-600"
                      />
                      <span className="text-stone-200">Sobremesa</span>
                    </label>

                    <select
                      value={incluirBebida}
                      onChange={(e) => setIncluirBebida(e.target.value)}
                      className="w-full bg-lusitano-card border border-lusitano-border rounded-lg p-2 text-xs text-stone-200"
                    >
                      <option value="Água das Pedras / Mineral">Água Mineral</option>
                      <option value="Sumo / Refrigerante">Refrigerante</option>
                      <option value="Cerveja">Cerveja</option>
                      <option value="Vinho da Casa">Vinho da Casa</option>
                      <option value="Sem Bebida">Sem Bebida</option>
                    </select>
                  </div>
                </div>

                {/* Notas */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Observações (opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Batata frita bem passada, molho à parte..."
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    className="w-full bg-[#0d0c0a] border border-lusitano-border rounded-xl px-3.5 py-2 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-lusitano-gold"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#15803d] hover:bg-[#16a34a] text-white font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Pedido para o WhatsApp (937 117 791)</span>
                </button>

                {enviado && (
                  <p className="text-xs text-emerald-400 text-center flex items-center justify-center gap-1 font-medium">
                    <Check className="w-4 h-4" /> A abrir o WhatsApp...
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
