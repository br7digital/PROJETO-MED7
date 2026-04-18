import React, { useState, useEffect } from 'react';
import { landingData } from '../data/data-config';

export function Hero() {
  const { headlineVariations, subheadline, ctaPrimary, badge } = landingData.hero;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % headlineVariations.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out
    }, 4500); // Change headline every 4.5 seconds

    return () => clearInterval(timer);
  }, [headlineVariations.length]);

  const renderHeadline = () => {
    const headline = headlineVariations[currentIndex];
    
    // Function to dynamically inject neon colors
    const highlightWords = (text) => {
      const wordsToHighlight = ['autoridade', '"blogueiro"', 'elite', 'prestígio', 'técnico', 'digital'];
      const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
      
      return text.split(regex).map((chunk, i) => {
        if (wordsToHighlight.some(w => chunk.toLowerCase().includes(w.toLowerCase()))) {
          return <span key={i} className="text-[#00f2ff] drop-shadow-[0_1px_4px_rgba(0,242,255,0.4)] brightness-110">{chunk}</span>;
        }
        return <span key={i}>{chunk}</span>;
      });
    };

    return (
      <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <span className="text-white drop-shadow-md leading-[1.15]">
          {highlightWords(headline)}
        </span>
      </div>
    );
  };

  const renderSubheadline = () => {
    const splitIndex = subheadline.indexOf('.') + 1;
    if (splitIndex > 0) {
      return (
        <>
          <span className="font-bold text-white/95">{subheadline.substring(0, splitIndex)}</span>
          {subheadline.substring(splitIndex)}
        </>
      );
    }
    return subheadline;
  };

  return (
    <section className="relative w-full bg-[#020a18] overflow-hidden">

      {/* Top Transition - Blending the branding gap */}
      <div className="absolute top-60 inset-x-0 h-[250px] bg-gradient-to-b from-[#020a18] via-[#020a18]/80 to-transparent pointer-events-none z-10" />

      {/* Content Container - High positioning with consistent padding */}
      <div className="relative z-30 w-full px-5 pt-[85px] sm:pt-[100px] pb-0">
        <div className="space-y-5 max-w-md md:max-w-[520px]">

          {/* Title now opens the page */}

          <div className="flex items-start sm:items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-[16px] sm:rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
            <div className="mt-1.5 sm:mt-0 w-2 h-2 flex-shrink-0 rounded-full bg-[#00f2ff] animate-pulse"></div>
            <span className="text-white/90 text-[11px] md:text-[12px] font-bold tracking-[0.1em] sm:tracking-wider uppercase font-display leading-[1.6] sm:leading-none">
              {badge}
            </span>
          </div>

          <h1 className="text-[clamp(32px,9vw,46px)] font-display text-white tracking-tighter font-black !leading-[1.12] drop-shadow-md">
            {renderHeadline()}
          </h1>

          <p className="text-[clamp(16.5px,5vw,19px)] text-white/90 font-body font-medium leading-[1.6] max-w-[380px] drop-shadow-sm pt-1">
            {renderSubheadline()}
          </p>

          <div className="pt-4 pb-8 sm:pb-12 flex flex-col gap-3.5 relative z-20">
            <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="btn-elite shadow-2xl flex items-center justify-center gap-3 w-fit group animate-pulse-attention py-4 px-8 text-[14px] md:text-[16px]">
              {ctaPrimary}
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover:scale-150 transition-transform duration-300" />
            </button>
            <p className="text-[#00f2ff]/90 font-medium text-[11px] sm:text-[13px] font-display tracking-wide ml-2 flex items-center gap-2">
              <span className="w-2 h-2 flex-shrink-0 rounded-full bg-[#10B981] animate-pulse"></span>
              Condição especial para os primeiros acessos.
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
