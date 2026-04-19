import React, { useState } from 'react';
import { landingData } from '../data/data-config';

export function Faq() {
  const { title, questions } = landingData.faq;
  const { price, cents, installments, savings } = landingData.pricing;
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative pt-10 pb-6 bg-gradient-to-b from-[#020c1a] to-[#01050d] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-[480px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[clamp(30px,8vw,36px)] font-display font-black text-white leading-none tracking-tighter text-glow">
            Dúvidas <span className="text-[#00f2ff] drop-shadow-[0_0_10px_rgba(0,242,255,0.3)]">Frequentes</span>
          </h2>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-4">
          {questions.map((item, idx) => (
            <div
              key={idx}
              className={`border border-white/10 rounded-2xl transition-all duration-300 ${openIndex === idx ? 'bg-white/[0.05] border-white/20' : 'bg-transparent'
                }`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span 
                  className="text-zinc-200 font-medium text-[15px] md:text-base pr-4"
                  dangerouslySetInnerHTML={{ __html: item.question }}
                />
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-zinc-200 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-white/10 text-white' : ''
                  }`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 pt-2 text-zinc-200 text-[14px] md:text-[15px] leading-relaxed border-t border-white/5" dangerouslySetInnerHTML={{ __html: item.answer }}>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Support CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-b from-[#0b1627] to-[#010612] border border-[#00f2ff]/20 rounded-3xl p-5 md:p-8 relative overflow-hidden text-center shadow-[0_0_30px_rgba(0,242,255,0.05)]">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#00f2ff] shadow-[0_0_20px_rgba(0,242,255,1)]" />

            <h3 className="text-white font-display font-bold text-2xl md:text-3xl mb-3">
              Suporte Exclusivo via <span className="text-[#00f2ff]">WhatsApp</span>
            </h3>
            <p className="text-zinc-200 text-[15px] md:text-base font-body mb-8 max-w-[360px] mx-auto leading-relaxed">
              Ao garantir seu acervo, você ganha acesso direto ao nosso time técnico para auxiliar em toda a sua implementação.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-5 bg-[#111b29] hover:bg-[#1a293f] text-white rounded-full text-[13px] md:text-[14px] font-black border border-white/10 hover:border-[#00f2ff]/50 tracking-widest transition-all duration-300 shadow-xl"
            >
              <svg className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              ACIONAR SUPORTE
            </button>
          </div>
        </div>

        {/* Final CTA Mini-Card (Skeptical Final Hook) */}
        <div className="mt-[140px] text-center relative z-10 w-full max-w-[450px] mx-auto pb-4">
          {/* Background Glow Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] bg-[#00f2ff]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="bg-gradient-to-b from-[#0f1a2a] to-[#010612] rounded-[48px] p-5 md:p-12 pt-16 md:pt-24 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col items-center relative overflow-visible group">
            {/* Internal Accent Border */}
            <div className="absolute inset-0 border border-white/5 rounded-[48px] m-1.5 pointer-events-none" />

            {/* Cyber-Vault Security Seal - OVERLAPPING POSITION */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 flex items-center justify-center">
              {/* Rotate Right Layer */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] opacity-25" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" stroke="#00f2ff" strokeWidth="0.5" strokeDasharray="3 6" fill="none" />
              </svg>
              {/* Rotate Left Layer */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite_reverse] opacity-40" viewBox="0 0 100 100" style={{ transform: 'scale(0.82)' }}>
                <circle cx="50" cy="50" r="48" stroke="#00f2ff" strokeWidth="1" strokeDasharray="12 18" fill="none" />
              </svg>
              {/* Shield Core */}
              <div className="relative z-10 w-24 h-24 bg-gradient-to-b from-[#00f2ff]/20 to-transparent rounded-3xl border border-[#00f2ff]/30 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(0,242,255,0.4)] backdrop-blur-xl">
                <span className="text-[13px] font-display font-black text-[#00f2ff] tracking-[0.05em] mb-1.5 uppercase drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">7 Dias</span>
                <div className="h-[1px] w-8 bg-[#00f2ff]/20 mb-1.5" />
                <span className="text-[10px] font-display font-black text-white/90 leading-none tracking-[0.2em] relative z-10 uppercase">Protegido</span>
              </div>
            </div>

            {/* Elite Pattern Header */}
            <div className="mb-10 px-2 text-center">
              <span className="inline-block text-[#00f2ff] font-display font-bold text-[11px] tracking-[0.35em] uppercase mb-4 drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]">
                O INVESTIMENTO SEGURO
              </span>
              <h3 className="text-white font-display font-black text-[26px] md:text-[30px] leading-tight tracking-tighter uppercase">
                REVOLUCIONE SEU <br />
                <span className="text-[#00f2ff] text-glow">ALCANCE MÉDICO</span>
              </h3>
            </div>

            <p className="text-white/60 font-body text-[14px] md:text-[15px] mb-10 leading-relaxed max-w-[340px]">
              Junte-se à elite que domina o digital com <span className="text-white font-medium">sofisticação técnica</span> e liberdade de tempo imediata.
            </p>

            <div className="flex flex-col items-center gap-1 mb-10 w-full group/price">
              <p className="text-amber-600/80 line-through decoration-amber-600/60 decoration-2 text-[15px] font-display font-black tracking-[0.2em] uppercase mb-1 drop-shadow-sm">De R$ 2.500,00</p>
              <div className="flex items-baseline gap-1">
                <span className="text-emerald-500 text-lg font-display font-black">R$</span>
                <span className="text-emerald-500 text-6xl leading-none font-display font-black tracking-tighter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">{price}</span>
                <span className="text-emerald-500 text-2xl font-display font-bold">,{cents || '90'}</span>
              </div>

              {/* Standardized Payment & Saving Hierachy */}
              <div className="mt-4 flex flex-col items-center gap-4">
                <span className="inline-block bg-[#00f2ff]/5 px-5 py-1.5 rounded-full text-white/70 font-display font-medium text-[13px] border border-[#00f2ff]/10 shadow-sm">
                  Ou {installments}
                </span>
                <span className="text-emerald-500 font-bold text-[11px] uppercase tracking-widest bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-inner">
                  💰 Economize {savings}
                </span>
              </div>
            </div>

            <button
              onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')}
              className="relative btn-elite w-full py-6 group/btn overflow-hidden shadow-[0_15px_40px_rgba(0,242,255,0.2)] hover:shadow-[0_20px_60px_rgba(0,242,255,0.4)] rounded-2xl"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
              <span className="relative z-10 text-[14px] uppercase tracking-[0.1em] font-black drop-shadow-md">QUERO MEU ACESSO IMEDIATO</span>
            </button>

            <div className="mt-8 flex items-center justify-center gap-2 px-3 py-2 bg-white/5 rounded-full border border-white/5 shadow-inner min-w-[280px]">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-[9px] md:text-[10px] text-[#00f2ff] font-display font-black uppercase tracking-[0.2em] whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">
                Inscrição Segura <span className="text-white/20 px-1">|</span> Checkout Hotmart
              </p>
            </div>
          </div>
        </div>

        {/* Support Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-md animate-fade-in" onClick={() => setIsModalOpen(false)}>
            <div className="bg-[#0b1627] border border-[#00f2ff]/30 rounded-3xl p-6 md:p-8 max-w-[300px] w-full shadow-[0_0_60px_rgba(0,0,0,1)] relative transform transition-all border-b-4 border-b-[#00f2ff]" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all text-lg font-bold z-30"
              >
                ✕
              </button>

              <div className="text-center">
                <div className="w-12 h-12 bg-[#00f2ff]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00f2ff]/20">
                  <svg className="w-6 h-6 text-[#00f2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight">
                  Atendimento <span className="text-[#00f2ff]">Prioritário</span>
                </h3>

                <p className="text-zinc-400 text-[14px] leading-relaxed mb-5">
                  Preservamos este canal para garantir agilidade total na implementação técnica para médicos já cadastrados.
                </p>

                <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl mb-6">
                  <p className="text-white/90 text-[14px] leading-relaxed">
                    Sinta-se seguro: teste o acervo por <span className="text-[#00f2ff] font-bold">7 Dias</span>. Se o material não atender sua exigência, reembolsamos o valor integral com prioridade.
                  </p>
                </div>

                {/* CTA with Character */}
                <div className="relative">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      window.open('https://pay.hotmart.com/P105394697A', '_blank');
                    }}
                    className="w-full py-4 pr-14 bg-[#00f2ff] hover:bg-[#00d0db] text-[#011021] font-black rounded-xl tracking-widest text-[14px] transition-all hover:scale-[1.02] shadow-[0_10px_20px_rgba(0,242,255,0.2)]"
                  >
                    CONCORDAR E ACESSAR
                  </button>
                  {/* Dr. Osso peeking */}
                  <div className="absolute -bottom-10 -right-4 w-20 h-auto pointer-events-none z-20">
                    <img
                      src="/dr osso avaliar.webp"
                      alt="Dr. Osso"
                      className="w-full h-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] animate-float"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
