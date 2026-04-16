import React from 'react';
import { landingData } from '../data/data-config';

export function Hero() {
  const { headline, subheadline, ctaPrimary } = landingData.hero;

  const renderHeadline = () => {
    const parts = headline.split('\n');
    return (
      <div className="flex flex-col gap-1">
        <span className="text-white drop-shadow-lg">{parts[0]}</span>
        {parts[1] && (
          <span className="text-[#00f2ff] drop-shadow-[0_2px_10px_rgba(0,242,255,0.3)] font-extrabold tracking-tight">
            {parts[1]}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="relative w-full bg-[#020a18] overflow-hidden">

      {/* Top Transition - Blending the branding gap */}
      <div className="absolute top-60 inset-x-0 h-[250px] bg-gradient-to-b from-[#020a18] via-[#020a18]/80 to-transparent pointer-events-none z-10" />

      {/* Content Container - High positioning with consistent padding */}
      <div className="relative z-30 w-full px-6 pt-[100px] pb-0">
        <div className="space-y-6 max-w-[360px]">

          {/* Elite Tag */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2ff]"></span>
            </span>
            <span className="text-[#00f2ff] text-[10px] font-bold tracking-[0.2em] uppercase">
              Elite Orthopedic Content
            </span>
          </div>

          <h1 className="text-[clamp(30px,9vw,42px)] font-display text-white tracking-tight font-extrabold !leading-[1.3] drop-shadow-md">
            {renderHeadline()}
          </h1>

          <p className="text-[clamp(15px,4vw,17px)] text-white/80 font-body font-light leading-relaxed max-w-[350] drop-shadow-md">
            {subheadline}
          </p>

          <div className="pt-1">
            <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="btn-elite shadow-2xl flex items-center justify-center gap-3 w-fit group animate-pulse-attention">
              {ctaPrimary}
              <div className="w-1 h-1 rounded-full bg-slate-900 group-hover:scale-150 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* 
        Background Image Container 
        - Uses relative positioning so it follows the text in normal flow.
        - Negative margin on desktop to pull graphics up towards the gap.
      */}
      <div className="relative z-0 -mt-40 sm:-mt-28 md:-mt-32 lg:-mt-58">
        <img
          src="/hero-bg-dark.webp"
          alt="Médico ortopedista"
          className="w-full h-auto object-top opacity-100 block"
        />

        {/* Elite Feathered Fade - Blending text area into image area */}
        <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-[#020a18] to-transparent pointer-events-none" />

        {/* Bottom shadow - CORRECTLY ANCHORED to image bottom area */}
        <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#020814] via-[#020814]/40 to-transparent pointer-events-none" />

        {/* Luxury Badges - CORRECTLY ANCHORED to image bottom area */}
        <div className="absolute bottom-10 left-0 w-full flex justify-around px-4 z-20 pointer-events-none">
          <div className="glass-panel px-3 py-2.5 rounded-xl shadow-elite animate-float flex flex-col items-center gap-1 border-white/20 bg-black/20">
            <span className="text-[#00f2ff] font-display font-black text-xs md:text-sm tracking-tighter">1.2K+</span>
            <span className="text-white/40 text-[7px] md:text-[8px] font-bold uppercase tracking-widest">Envolvimento</span>
          </div>

          <div className="glass-panel px-3 py-2.5 rounded-xl shadow-elite animate-float flex flex-col items-center gap-1 border-white/20 bg-black/20" style={{ animationDelay: '1s' }}>
            <span className="text-[#00f2ff] font-display font-black text-xs md:text-sm tracking-tighter">PREMIUM</span>
            <span className="text-white/40 text-[7px] md:text-[8px] font-bold uppercase tracking-widest">Qualidade CGI</span>
          </div>

          <div className="glass-panel px-3 py-2.5 rounded-xl shadow-elite animate-float flex flex-col items-center gap-1 border-white/20 bg-black/20" style={{ animationDelay: '2s' }}>
            <span className="text-[#00f2ff] font-display font-black text-xs md:text-sm tracking-tighter">VITÁLICIO</span>
            <span className="text-white/40 text-[7px] md:text-[8px] font-bold uppercase tracking-widest">Acesso Imediato</span>
          </div>
        </div>
      </div>

      {/* Premium Glow effect */}
      <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle,rgba(0,242,255,0.08)_0%,transparent_70%)] pointer-events-none z-10" />

    </section>
  );
}
