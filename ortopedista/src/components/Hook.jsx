import React from 'react';
import { landingData } from '../data/data-config';

export function Hook() {
  const { badge, pillars, title, subtitle, bentoCards, footerText } = landingData.hook;

  // ASSET CONFIGURATION - Replace these names in the public folder to update images
  const ASSETS = {
    ICON_POSTS: '/POSTS-PRONTOS.webp', // Updated: OSSO.webp -> POSTS-PRONTOS.webp
    ICON_PREMIUM: '/VISUAL-PREMIUM.webp', // Updated: COLUNA.webp -> VISUAL-PREMIUM.webp
    ICON_AUTHORITY: '/MAIS-AUTORIDADE.webp', // Updated: scapula.webp -> MAIS-AUTORIDADE.webp
  };

  return (
    <section className="relative pt-12 pb-14 overflow-hidden bg-gradient-to-b from-[#020814] to-[#031633]">
      {/* 1. The Vertical Glow Line - Clean and continuous */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-[90%] bg-gradient-to-b from-transparent via-[#00f2ff] to-transparent shadow-[0_0_15px_rgba(0,242,255,0.8)] z-0" />

      <div className="px-6 relative z-10 w-full max-w-[480px] mx-auto flex flex-col items-center">
        
        {/* Header Intro */}
        <div className="text-center mb-10 relative z-20">
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full border border-[#00f2ff]/30 bg-[#00f2ff]/10 text-[#00f2ff] text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,242,255,0.15)]">
            {badge}
          </span>
          <h2 className="text-[clamp(30px,8vw,36px)] font-display font-black text-white leading-[1.1] tracking-tighter text-glow">
            O que compõe o seu novo <span className="text-[#00f2ff]">arsenal digital?</span>
          </h2>
        </div>

        {/* Neon Vertical Cards Stack - Cards moved up */}
        <div className="flex flex-col gap-10 w-full relative z-20">
          
          {pillars.map((pillar, index) => {
            const icons = [ASSETS.ICON_POSTS, ASSETS.ICON_PREMIUM, ASSETS.ICON_AUTHORITY];
            return (
              <div key={index} className="group relative bg-[#0a1e2f]/95 backdrop-blur-3xl border-2 border-[#00f2ff] rounded-2xl py-4 pr-5 pl-2 flex items-center gap-2 transition-all duration-500 hover:scale-[1.03] shadow-[0_0_20px_rgba(0,242,255,0.3)] min-h-[160px]">
                  {/* Asset Box - Breaking the Left Border */}
                  <div className="relative w-[140px] h-[180px] flex-shrink-0 flex items-center justify-center -ml-10 z-30">
                     <img src={icons[index]} className="w-full h-full object-contain drop-shadow-[5px_15px_25px_rgba(0,0,0,0.6)] scale-125 transition-transform duration-700 group-hover:scale-[1.35]" alt="" />
                  </div>
                  
                  <div className="flex-1 -ml-2 relative z-10 pr-1">
                    <h3 className="text-[17px] md:text-xl font-display font-black text-white leading-[1.2] tracking-tighter">
                      {index === 0 && <>Acervo <span className="text-[#00f2ff]">Pronto para Postar</span></>}
                      {index === 1 && <>Estética de <span className="text-[#00f2ff]">Alta Fidelidade</span></>}
                      {index === 2 && <><span className="text-[#00f2ff]">Autoridade Instantânea</span></>}
                    </h3>
                    <p className="text-gray-200 text-[13px] md:text-sm font-body leading-relaxed mt-2 opacity-95 max-w-[195px]">
                      {pillar.description}
                    </p>
                  </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
