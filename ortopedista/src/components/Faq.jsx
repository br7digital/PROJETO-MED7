import React, { useState } from 'react';
import { landingData } from '../data/data-config';

export function Faq() {
  const { title, questions } = landingData.faq;
  const [openIndex, setOpenIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#02101d] to-[#010612] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 w-full max-w-[480px]">
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
              className={`border border-white/10 rounded-2xl transition-all duration-300 ${
                openIndex === idx ? 'bg-white/[0.05] border-white/20' : 'bg-transparent'
              }`}
            >
              <button 
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-zinc-200 font-medium text-[15px] md:text-base pr-4">
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-zinc-200 transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180 bg-white/10 text-white' : ''
                }`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
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
          <div className="bg-gradient-to-b from-[#0b1627] to-[#010612] border border-[#00f2ff]/20 rounded-3xl p-8 relative overflow-hidden text-center shadow-[0_0_30px_rgba(0,242,255,0.05)]">
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
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            ACIONAR SUPORTE
          </button>
        </div>
      </div>

      {/* Final CTA Mini-Card (Skeptical Final Hook) */}
      <div className="mt-16 text-center border-t border-white/5 pt-12 relative z-10 w-full max-w-[420px] mx-auto pb-4">
        <div className="bg-[#11151c]/95 rounded-[32px] p-8 md:p-10 border border-[#00f2ff]/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col items-center text-center">
          
          {/* Tech SVG Hexagon Seal */}
          <div className="w-20 h-20 mb-6 drop-shadow-[0_0_15px_rgba(0,242,255,0.4)] text-[#00f2ff] relative">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full animate-[spin_15s_linear_infinite] opacity-50 absolute inset-0">
              <polygon points="50 3 93 25 93 75 50 97 7 75 7 25" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full relative z-10">
              <polygon points="50 5 90 27 90 73 50 95 10 73 10 27" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="18" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
              <text x="50" y="56" textAnchor="middle" fill="currentColor" fontSize="22" fontWeight="900" fontFamily="sans-serif">7D</text>
            </svg>
          </div>

          <h3 className="text-white font-display font-bold text-[20px] md:text-[22px] mb-3 leading-snug tracking-tight drop-shadow-md px-2">
            Pronto para elevar o nível do seu <span className="text-[#00f2ff]">posicionamento?</span>
          </h3>
          <p className="text-white/80 font-body text-[14px] md:text-[15px] mb-8 leading-relaxed max-w-[320px]">
            Junte-se aos ortopedistas que já dominam o digital com sofisticação técnica e liberdade de tempo.
          </p>

          <div className="flex flex-col items-center justify-center gap-1 drop-shadow-xl mb-6 w-full px-4 pt-4 border-t border-white/10">
            <p className="text-rose-500/50 line-through text-[13px] font-display font-medium tracking-widest uppercase mb-1">De R$ 2.500,00</p>
            <div className="flex items-center">
              <span className="text-emerald-400 text-lg font-display font-black mr-1 mt-1">R$</span>
              <span className="text-emerald-400 text-5xl leading-none font-display font-black tracking-tighter drop-shadow-[0_0_12px_rgba(52,211,153,0.3)]">197</span>
              <span className="text-emerald-400 text-xl font-display font-bold">,90</span>
            </div>
          </div>

          <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="relative btn-elite w-full py-6 group overflow-hidden shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] rounded-2xl animate-pulse-attention">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
            <span className="relative z-10 text-[13px] md:text-[15px] uppercase tracking-wider md:tracking-[0.15em] font-black drop-shadow-md">QUERO MEU ACESSO IMEDIATO</span>
          </button>
        </div>
      </div>

      {/* Support Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0b1627] border border-[#00f2ff]/30 rounded-3xl p-6 md:p-8 max-w-[340px] w-full shadow-[0_0_60px_rgba(0,0,0,1)] relative transform transition-all border-b-4 border-b-[#00f2ff]">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
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
              
              <p className="text-zinc-400 text-[14px] leading-relaxed mb-5 px-1">
                Preservamos este canal para garantir agilidade total na implementação técnica para médicos já cadastrados.
              </p>

              <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl mb-6">
                <p className="text-white/90 text-[14px] leading-relaxed">
                  Sinta-se seguro: teste o acervo por <span className="text-[#00f2ff] font-bold">7 Dias</span>. Se o material não atender sua exigência, reembolsamos o valor integral com prioridade.
                </p>
              </div>

              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  window.open('https://pay.hotmart.com/P105394697A', '_blank');
                }}
                className="w-full py-4 bg-[#00f2ff] hover:bg-[#00d0db] text-[#011021] font-black rounded-xl tracking-widest text-[14px] transition-all hover:scale-[1.02] shadow-[0_10px_20px_rgba(0,242,255,0.2)]"
              >
                CONCORDAR E ACESSAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </section>
  );
}
