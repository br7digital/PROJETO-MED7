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
        <div className="text-center mb-12">
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
            {/* Top Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/40 border border-[#00f2ff]/30 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.15)]">
                <span className="text-orange-500 animate-pulse text-[11px]">🔥</span>
                <span className="text-[#00f2ff] text-[10px] font-black tracking-widest uppercase">
                  Oferta Limitada - 97% OFF
                </span>
              </div>
            </div>

            {/* Pricing Area */}
            <div className="text-center">
              <p className="text-white/70 line-through text-xs font-display font-medium tracking-wider mb-2">De R$ 2.500,00</p>
              <div className="flex items-center justify-center gap-1 drop-shadow-xl mb-4">
                <span className="text-white/80 text-3xl font-display font-bold">R$</span>
                <span className="text-white text-[90px] leading-none font-display font-black tracking-tighter text-glow">97</span>
                <span className="text-white/80 text-3xl font-display font-bold">,00</span>
              </div>
              <div className="mb-4">
                <span className="text-emerald-400 font-bold text-[11px] uppercase tracking-wide bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 shadow-inner drop-shadow-md">
                  💰 Economize R$ 2.403,00
                </span>
              </div>

              <div className="mt-2">
                <span className="inline-block bg-white/5 px-6 py-1.5 rounded-full text-[#00f2ff] font-display font-bold text-sm border border-[#00f2ff]/20 shadow-[0_5px_15px_rgba(0,242,255,0.1)]">
                  Ou {installments}
                </span>
              </div>
            </div>
          </div>

          {/* Elite Benefits List */}
          <ul className="space-y-5 mb-12">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-4 group/item">
                <div className="w-6 h-6 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 flex items-center justify-center flex-shrink-0 group-hover/item:border-[#00f2ff]/50 transition-colors">
                  <svg className="w-3 h-3 text-[#00f2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/70 text-[13px] font-medium leading-tight group-hover/item:text-white transition-colors">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Elite CTA Button */}
          <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="relative btn-elite w-full py-7 group overflow-hidden animate-pulse-attention shadow-[0_0_25px_rgba(0,242,255,0.4)] hover:shadow-[0_0_40px_rgba(0,242,255,0.6)]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-30deg] animate-[shimmer_2.5s_infinite]" />
            <span className="relative z-10 text-[clamp(13.5px,4vw,18px)] uppercase tracking-[0.1em] md:tracking-widest font-black drop-shadow-md px-2 whitespace-nowrap">QUERO GARANTIR COM DESCONTO</span>
          </button>

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
        <div className="mt-16 relative p-8 md:p-10 glass-panel rounded-[32px] text-center flex flex-col items-center overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00f2ff]/5 to-transparent pointer-events-none" />
          
          <div className="w-36 h-36 flex items-center justify-center relative z-10 mb-4">
            <img 
              src="/LOGO SATISFAÇÃO.webp" 
              alt="Selo de Satisfação" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h3 className="text-white font-display font-black text-2xl tracking-tighter z-10 mb-3 text-glow">
            Garantia Blindada Incondicional
          </h3>
          <div className="flex flex-col gap-4 text-white/70 text-[14px] font-body px-2 leading-relaxed max-w-[380px] relative z-10">
            <p>
              <strong className="text-white block text-[16px] mb-1">Nós assumimos 100% do risco.</strong> 
              Acesse sua área de membros agora e teste a praticidade de ter todo seu conteúdo pronto.
            </p>
            <p>
              Se em até 7 dias você não sentir um aumento na sua autoridade, devolvemos cada centavo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
