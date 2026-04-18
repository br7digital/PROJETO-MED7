import React from 'react';
import { landingData } from '../data/data-config';

export function Pricing() {
  const { title, subtitle, price, installments, benefits, guarantee } = landingData.pricing;

  const ASSETS = {
    SEAL: '/selo-premium.webp',
    DOCTORS: '/DOCTORS2.webp',
  };

  return (
    <section className="relative pt-12 pb-24 bg-gradient-to-b from-[#020b18] to-[#02101d] overflow-hidden">
      {/* Intense glow at bottom for CTA focus */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#00f2ff]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[480px] flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[clamp(30px,8vw,36px)] font-display font-black text-white mb-4 leading-none tracking-tighter text-glow">
            {title.split('\n').map((part, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="text-[#00f2ff] block">{part}</span> : part}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-white/70 font-body font-light text-sm tracking-wide">
            {subtitle}
          </p>
        </div>

        {/* Analytical Value Stack (Google AI Skeptical Conversion) */}
        <div className="w-full bg-[#11151c]/95 rounded-3xl p-6 md:p-8 mb-16 md:mb-20 border border-[#00f2ff]/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)] relative z-20 backdrop-blur-xl">
          <h3 className="text-[#00f2ff] font-display font-bold text-center mb-3 text-[11px] md:text-xs uppercase tracking-widest drop-shadow-md">O Custo Oculto da Produção Tradicional</h3>
          <p className="text-white/85 text-center font-body text-[11px] sm:text-xs md:text-[13px] leading-[1.4] mb-6 w-full mx-auto block drop-shadow-sm">
            Se você fosse assinar as <strong className="text-white">ferramentas de IA</strong>, contratar <strong className="text-white">editores</strong> e gastar <strong className="text-white">horas criando roteiros técnicos</strong> do zero, seu investimento seria este:
          </p>
          <ul className="space-y-4 font-body text-[13px] md:text-sm text-white/90">
            <li className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="font-medium text-white/80"><strong className="text-white">Produção CGI</strong> e Renderização IA</span>
              <span className="font-bold text-white tracking-wide">R$ 1.500,00</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="font-medium text-white/80"><strong className="text-white">Roteirização Técnica</strong> e Estratégica</span>
              <span className="font-bold text-white tracking-wide">R$ 600,00</span>
            </li>
            <li className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="font-medium text-white/80"><strong className="text-white">Pós-Produção</strong> Digital Especializada</span>
              <span className="font-bold text-white tracking-wide">R$ 400,00</span>
            </li>
            <li className="flex justify-between items-center pt-2">
              <span className="text-white/60 font-black uppercase text-[10px] md:text-[11px] tracking-widest bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 shadow-inner">VALOR DE MERCADO</span>
              <span className="text-rose-500/60 font-black text-xl md:text-2xl line-through decoration-rose-500/50 decoration-2 drop-shadow-sm">R$ 2.500,00</span>
            </li>
          </ul>
        </div>

        {/* Seal and Doctors Container */}
        <div className="relative flex flex-col items-center w-full z-0 mb-[-60px]">
          {/* Vertical line connecting seal to doctors */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-[#00f2ff] to-transparent z-10 opacity-50" />

          <div className="relative w-32 h-32 animate-float z-30">
            <img
              src={ASSETS.SEAL}
              alt="Selo Premium"
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(200,160,50,0.5)]"
            />
          </div>
          <div className="relative w-[110%] max-w-[400px] h-56 -mt-10 z-20">
            <img
              src={ASSETS.DOCTORS}
              className="w-full h-full object-contain drop-shadow-2xl"
              alt="Expert Doctors"
            />
          </div>
        </div>

        {/* Elite Pricing Card */}
        <div className="relative w-full px-8 py-10 pt-14 glass-card rounded-[40px] overflow-hidden group z-30 bg-[#0b1627]/95 backdrop-blur-3xl shadow-[0_-20px_40px_rgba(0,0,0,0.6)]">

          {/* Decorative Corner Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00f2ff]/20 blur-[40px] group-hover:bg-[#00f2ff]/30 transition-colors duration-700 pointer-events-none" />

          {/* Top Header Section of Card - Imported from MiniOffer */}
          <div className="flex flex-col items-center mb-8 relative z-10">
            {/* To avoid redundant limits badge visually, we leave the top of pricing empty for the Launch Batch badge directly. */}
            <div className="mb-2"></div>

            {/* Pricing Area */}
            <div className="text-center">
              <div className="mb-3">
                <span className="inline-block bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] text-[12px] md:text-[13px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.2)] animate-pulse">
                  LOTE DE LANÇAMENTO
                </span>
              </div>
              <p className="text-rose-500/50 line-through text-[14px] font-display font-medium tracking-wider mb-2">De R$ 2.500,00</p>
              <div className="flex items-center justify-center gap-1 mb-4 mt-2">
                <span className="text-emerald-400 text-3xl font-display font-bold">R$</span>
                <span className="text-emerald-400 text-[90px] leading-none font-display font-black tracking-tighter drop-shadow-[0_0_30px_rgba(52,211,153,0.4)] scale-110 mx-2">197</span>
                <span className="text-emerald-400 text-3xl font-display font-bold">,90</span>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-[#00f2ff]/5 px-6 py-2 rounded-full text-white/80 font-display font-medium text-[14px] md:text-[16px] border border-[#00f2ff]/20 shadow-[0_5px_15px_rgba(0,242,255,0.05)]">
                  Ou 12x de R$ 19,75
                </span>
              </div>

              <div className="mt-5 mb-4">
                <span className="text-emerald-400 font-bold text-[13px] md:text-[14px] uppercase tracking-wide bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 shadow-inner drop-shadow-md">
                  💰 Economize R$ 2.302,10
                </span>
              </div>
            </div>
          </div>

          {/* Elite Benefits List */}
          <ul className="space-y-5 mb-12">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-4 group/item">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 flex items-center justify-center flex-shrink-0 group-hover/item:border-[#00f2ff]/50 transition-colors">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00f2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/70 text-[14px] md:text-[15px] font-medium leading-tight group-hover/item:text-white transition-colors">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Elite CTA Button with Scarcity */}
          <div className="flex flex-col gap-3.5">
            <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="relative btn-elite w-full py-8 group overflow-hidden animate-pulse-attention shadow-[0_0_25px_rgba(0,242,255,0.4)] hover:shadow-[0_0_40px_rgba(0,242,255,0.6)]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-30deg] animate-[shimmer_2.5s_infinite]" />
              <span className="relative z-10 text-[13px] xs:text-[14px] sm:text-[15px] md:text-[17px] uppercase tracking-wider md:tracking-widest font-black drop-shadow-md px-2 w-full text-center leading-snug">QUERO GARANTIR COM DESCONTO</span>
            </button>
            <p className="text-center text-[#00f2ff]/90 font-medium text-[11px] sm:text-[13px] font-display tracking-wide flex items-center justify-center gap-2 mt-1">
              <span className="w-2 h-2 flex-shrink-0 rounded-full bg-[#10B981] animate-pulse"></span>
              Condição especial exclusiva para os primeiros acessos.
            </p>
          </div>

          {/* Bottom Trust Indicators - Imported from MiniOffer */}
          <div className="flex justify-between items-center px-2 pt-6 mt-6 border-t border-white/5 relative z-10 w-full mb-0">
            <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-2xl drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">🛡️</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#00f2ff] uppercase">Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">⚡</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#fbbf24] uppercase">Imediato</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-2xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">🏆</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#fbbf24] uppercase">Garantia</span>
            </div>
          </div>
        </div>

        {/* Elite Guarantee Block */}
        <div className="mt-32 md:mt-40 relative px-8 py-16 md:py-20 bg-[#010815]/90 rounded-[32px] text-center flex flex-col items-center border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00f2ff]/5 to-transparent rounded-[32px] pointer-events-none" />
          
          {/* Overlapping Satisfaction Seal - Slightly smaller visual weight than CFM */}
          <div className="absolute -top-14 md:-top-20 w-28 h-28 md:w-40 md:h-40 z-20 animate-float-slow">
            <img 
              src="/LOGO SATISFAÇÃO.webp" 
              alt="Selo de Satisfação" 
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.2)] opacity-95 brightness-105 contrast-105"
            />
          </div>
          
          <h3 className="text-white font-display font-black text-xl md:text-2xl tracking-tighter z-10 mb-2 drop-shadow-md text-center max-w-[95%]">
            GARANTIA DE EXCELÊNCIA OU REEMBOLSO INTEGRAL
          </h3>
          <p className="text-[#00f2ff] font-display font-bold text-[13px] md:text-[14px] uppercase tracking-widest mb-6 z-10 drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]">
            7 Dias de Proteção Total
          </p>
          <div className="flex flex-col text-white/80 text-[14px] md:text-[16px] font-body px-4 leading-[1.6] max-w-[460px] relative z-10">
            <p>
              <strong className="text-white font-medium block mb-3 opacity-90">Comprometidos com o mais alto padrão de entrega.</strong>
              Caso nosso arsenal visual não atenda à sua exigência de qualidade técnica ou estética, devolvemos 100% do seu investimento em até <strong className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">7 dias</strong>. Sem burocracia e sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
