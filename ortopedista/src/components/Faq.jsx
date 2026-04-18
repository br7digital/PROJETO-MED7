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
          <h2 className="text-3xl font-display font-bold text-white leading-tight">
            {title}
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
                <span className="text-zinc-200 font-medium text-sm pr-4">
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
                <div className="px-6 pb-6 pt-2 text-zinc-200 text-[13px] md:text-sm leading-relaxed border-t border-white/5" dangerouslySetInnerHTML={{ __html: item.answer }}>
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
            
            <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-2">
              Suporte Exclusivo via WhatsApp
            </h3>
            <p className="text-zinc-200 text-sm font-body mb-8 max-w-[340px] mx-auto">
              Ao garantir seu acervo, você ganha acesso direto ao nosso time técnico para auxiliar em toda a sua implementação.
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111b29] hover:bg-[#1a293f] text-white rounded-full text-xs font-black border border-white/10 hover:border-[#00f2ff]/50 tracking-widest transition-all duration-300 shadow-xl"
            >
              <svg className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              ACIONAR SUPORTE
            </button>
          </div>
        </div>

        {/* Final CTA & AI Guarantee Seal */}
        <div className="mt-16 text-center border-t border-white/5 pt-12 relative z-10 flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center relative mb-8">
            <img 
              src="/LOGO SATISFAÇÃO.webp" 
              alt="Garantia de Excelência" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]"
            />
          </div>
          <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="relative btn-elite w-full py-6 group overflow-hidden shadow-[0_0_30px_rgba(0,242,255,0.3)] hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] rounded-full animate-pulse-attention">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
            <span className="relative z-10 text-[13px] md:text-[15px] uppercase tracking-widest font-black drop-shadow-md px-4">QUERO GARANTIR MEU ACERVO DE ELITE</span>
          </button>
        </div>

        {/* Support Modal Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#0b1627] border border-[#00f2ff]/30 rounded-2xl p-6 md:p-8 max-w-[360px] w-full shadow-[0_0_40px_rgba(0,242,255,0.15)] relative transform transition-all">
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                ✕
              </button>
              
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                  <svg className="w-7 h-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight tracking-[0.02em]">🔒 Canal de Suporte Prioritário</h3>
                <p className="text-zinc-200 text-[13px] leading-relaxed mb-4">
                  Para garantir a excelência e agilidade no atendimento, nosso suporte via WhatsApp é dedicado exclusivamente aos alunos do Acervo MED7. Isso garante que cada médico receba atenção individualizada na implementação dos vídeos.
                </p>
                <div className="bg-[#00f2ff]/10 border border-[#00f2ff]/20 p-4 rounded-xl mb-2">
                  <p className="text-white/95 text-[12.5px] leading-[1.5]">
                    Se você tem alguma dúvida pontual, ela provavelmente está respondida no nosso FAQ ou é coberta pela nossa <strong className="text-white">Garantia Incondicional de 7 Dias</strong>. Você pode acessar agora, testar o material e, se não for o que esperava, nosso suporte resolve seu reembolso com um clique.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  window.open('https://pay.hotmart.com/P105394697A', '_blank');
                }}
                className="w-full py-4 bg-[#00f2ff] hover:bg-[#00d0db] text-[#010612] font-black rounded-xl tracking-wider text-sm transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(0,242,255,0.4)]"
              >
                ENTENDIDO, QUERO MEU ACESSO
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
