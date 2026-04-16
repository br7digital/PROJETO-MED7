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
        
        {/* Neon Vertical Cards Stack - Cards moved up */}
        <div className="flex flex-col gap-4 w-full relative z-20">
          
          {pillars.map((pillar, index) => {
            const icons = [ASSETS.ICON_POSTS, ASSETS.ICON_PREMIUM, ASSETS.ICON_AUTHORITY];
            return (
              <div key={index} className="group relative bg-[#0a1e2f]/95 backdrop-blur-3xl border-2 border-[#00f2ff] rounded-2xl p-5 flex items-center gap-4 transition-all duration-500 hover:scale-[1.03] shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                  {/* Asset Box - Enlarged for Phone Mockups */}
                  <div className="relative w-24 h-32 flex-shrink-0 flex items-center justify-center">
                     <img src={icons[index]} className="w-full h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" alt="" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-white leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-body leading-tight mt-1">
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
