"use client";

import React, { useState } from "react";
import { RESTAURANTE_INFO } from "@/lib/data";
import { ShoppingBag, Clock, MessageSquare, Check, User, AlertCircle } from "lucide-react";

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
    <section id="takeaway" className="py-16 sm:py-24 relative border-t transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full surface-card border text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Take-Away Sem Filas</span>
            </div>

            <h2 className="optical-title font-serif text-3xl sm:text-4xl font-black text-heading leading-tight">
              Pausa de Almoço Curta? <br />
              <span className="text-[#c59b27]">Encomende Antes de Sair.</span>
            </h2>

            <p className="optical-body text-body-muted text-sm sm:text-base leading-relaxed">
              Faça a sua encomenda até às <strong>11h45</strong> para levantamento à hora que desejar. Chega ao restaurante, paga e leva a sua refeição quente e bem embalada.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl surface-card border">
                <span className="w-7 h-7 rounded-xl surface-card-subtle border flex items-center justify-center font-bold text-xs text-[#c59b27] shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-sm text-heading">Selecione o Almoço</h4>
                  <p className="text-xs text-body-muted">Escolha os pratos, número de doses e hora de levantamento.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl surface-card border">
                <span className="w-7 h-7 rounded-xl surface-card-subtle border flex items-center justify-center font-bold text-xs text-[#c59b27] shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-sm text-heading">Envio Imediato para o WhatsApp</h4>
                  <p className="text-xs text-body-muted">A cozinha recebe o pedido formatado e começa a preparar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl surface-card border">
                <span className="w-7 h-7 rounded-xl surface-card-subtle border flex items-center justify-center font-bold text-xs text-[#c59b27] shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-sm text-heading">Levantamento sem Esperas</h4>
                  <p className="text-xs text-body-muted">Estrada da Estação 89, Leiria. Estacionamento fácil.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="surface-card border rounded-3xl p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10 mb-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-heading">
                    Simulador de Take-Away
                  </h3>
                  <p className="text-xs text-body-muted">Gera a mensagem para o WhatsApp do Restaurante</p>
                </div>
                <span className="text-xs font-bold text-[#c59b27] surface-card-subtle border px-3 py-1 rounded-full">
                  Pronto em 15m
                </span>
              </div>

              <form onSubmit={handleEnviarPedido} className="space-y-4">
                
                {/* Nome e Hora */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-heading mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-[#c59b27]" />
                      Nome / Empresa:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Manuel Silva"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full input-field border rounded-xl px-3.5 py-2.5 text-sm placeholder-stone-400 focus:outline-none focus:border-[#c59b27]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-heading mb-1.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c59b27]" />
                      Hora de Levantamento:
                    </label>
                    <select
                      value={horaLevantamento}
                      onChange={(e) => setHoraLevantamento(e.target.value)}
                      className="w-full input-field border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c59b27]"
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
                    <label className="block text-xs font-bold text-heading mb-1.5">
                      Prato Principal:
                    </label>
                    <select
                      value={pratoSelecionado}
                      onChange={(e) => setPratoSelecionado(e.target.value)}
                      className="w-full input-field border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#c59b27]"
                    >
                      {opcoesPratos.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-heading mb-1.5">
                      Doses:
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                        className="apple-button w-10 h-10 rounded-xl surface-card-subtle border font-bold text-lg text-heading"
                      >
                        -
                      </button>
                      <span className="font-bold text-base w-6 text-center text-heading">{quantidade}</span>
                      <button
                        type="button"
                        onClick={() => setQuantidade(quantidade + 1)}
                        className="apple-button w-10 h-10 rounded-xl surface-card-subtle border font-bold text-lg text-heading"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Complementos */}
                <div className="surface-card-subtle p-4 rounded-2xl border space-y-3">
                  <span className="text-[11px] font-bold text-body-muted uppercase tracking-widest block">
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
                      <span className="text-heading font-medium">Sopa do Dia</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={incluirSobremesa}
                        onChange={(e) => setIncluirSobremesa(e.target.checked)}
                        className="w-4 h-4 rounded accent-emerald-600"
                      />
                      <span className="text-heading font-medium">Sobremesa</span>
                    </label>

                    <select
                      value={incluirBebida}
                      onChange={(e) => setIncluirBebida(e.target.value)}
                      className="w-full input-field border rounded-lg p-2 text-xs text-heading"
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
                  <label className="block text-xs font-bold text-heading mb-1.5">
                    Observações (opcional):
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Batata frita bem passada, molho à parte..."
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    className="w-full input-field border rounded-xl px-3.5 py-2 text-sm placeholder-stone-400 focus:outline-none focus:border-[#c59b27]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="apple-button w-full bg-gradient-to-b from-[#16a34a] to-[#15803d] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 hover:brightness-110"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Pedido para o WhatsApp ({RESTAURANTE_INFO.telefone})</span>
                </button>

                {enviado && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 text-center flex items-center justify-center gap-1 font-bold">
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
