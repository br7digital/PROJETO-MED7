import React from 'react';
import { landingData } from '../data/data-config';

export function Hero() {
  const { headline, subheadline, ctaPrimary } = landingData.hero;

  const renderHeadline = () => {
    const parts = headline.split('\n');
    
    // Function to dynamically inject neon colors
    const highlightWords = (text) => {
      // Splits retaining the target words to style them correctly
      return text.split(/(autoridade|"blogueiros"\?)/g).map((chunk, i) => {
        if (chunk === 'autoridade' || chunk === '"blogueiros"?') {
          return <span key={i} className="text-[#00f2ff] [text-shadow:-1px_-1px_0_rgba(0,0,0,0.8),1px_-1px_0_rgba(0,0,0,0.8),-1px_1px_0_rgba(0,0,0,0.8),1px_1px_0_rgba(0,0,0,0.8)] drop-shadow-[0_0_6px_rgba(0,242,255,0.5)] brightness-110">{chunk}</span>;
        }
        return <span key={i}>{chunk}</span>;
      });
    };

    return (
      <div className="flex flex-col gap-0.5">
        <span className="text-white drop-shadow-lg leading-[1.15]">{parts[0]}</span>
        {parts[1] && (
          <span className="text-white drop-shadow-md font-extrabold tracking-tight leading-[1.15]">
            {highlightWords(parts[1])}
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
      <div className="relative z-30 w-full px-5 pt-[85px] sm:pt-[100px] pb-0">
        <div className="space-y-5 max-w-md md:max-w-[520px]">

          {/* Elite Tag */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#10B981]/50 bg-[#011a14]/80 backdrop-blur-xl shadow-[0_0_25px_rgba(16,185,129,0.35)]">
            <span className="relative flex h-2.5 w-2.5 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
            </span>
            <span className="text-[#10B981] text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase flex items-center drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
              CONFORMIDADE CFM <span className="text-white/20 mx-2 text-[12px] font-light">|</span> <span className="text-[#00f2ff] drop-shadow-[0_0_5px_rgba(0,242,255,0.6)]">ESTRATÉGIA DE ELITE</span>
            </span>
          </div>

          <h1 className="text-[clamp(24px,7vw,40px)] font-display text-white tracking-tight font-extrabold !leading-[1.15] drop-shadow-md">
            {renderHeadline()}
          </h1>

          <p className="text-[clamp(15px,4vw,17px)] text-white/80 font-body font-light leading-relaxed max-w-[350] drop-shadow-md">
            {subheadline}
          </p>

          <div className="pt-1 flex flex-col gap-3">
            <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="btn-elite shadow-2xl flex items-center justify-center gap-3 w-fit group animate-pulse-attention">
              {ctaPrimary}
              <div className="w-1 h-1 rounded-full bg-slate-900 group-hover:scale-150 transition-transform duration-300" />
            </button>
            <p className="text-[#00f2ff]/80 font-light text-[9px] sm:text-[11px] font-display tracking-wide ml-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#10B981] animate-pulse"></span>
              Condição especial exclusiva para os primeiros acessos.
            </p>
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
            <span className="text-white/70 text-[7px] md:text-[8px] font-bold uppercase tracking-widest">Envolvimento</span>
          </div>

          <div className="glass-panel px-3 py-2.5 rounded-xl shadow-elite animate-float flex flex-col items-center gap-1 border-white/20 bg-black/20" style={{ animationDelay: '1s' }}>
            <span className="text-[#00f2ff] font-display font-black text-xs md:text-sm tracking-tighter">PREMIUM</span>
            <span className="text-white/70 text-[7px] md:text-[8px] font-bold uppercase tracking-widest">Qualidade CGI</span>
          </div>

          <div className="glass-panel px-3 py-2.5 rounded-xl shadow-elite animate-float flex flex-col items-center gap-1 border-white/20 bg-black/20" style={{ animationDelay: '2s' }}>
            <span className="text-[#00f2ff] font-display font-black text-xs md:text-sm tracking-tighter">VITALÍCIO</span>
            <span className="text-white/70 text-[7px] md:text-[8px] font-bold uppercase tracking-widest">Acesso Imediato</span>
          </div>
        </div>
      </div>

      {/* Premium Glow effect */}
      <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle,rgba(0,242,255,0.08)_0%,transparent_70%)] pointer-events-none z-10" />

    </section>
  );
}
