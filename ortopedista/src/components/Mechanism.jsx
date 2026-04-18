import React from 'react';
import { landingData } from '../data/data-config';

export function Mechanism() {
  const { title, subtitle, ctaLabel, items } = landingData.mechanism;

  return (
    <section 
      className="relative py-14 bg-gradient-to-b from-[#010816] to-[#000E1E] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/fundo-esqueletos.webp')" }}
    >
      {/* Top Transition Mask */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#010816] to-transparent z-0" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-[clamp(30px,8vw,36px)] font-display font-black text-white tracking-tighter mb-4 text-glow leading-none">
            {title.split('\n').map((part, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="text-[#00f2ff]">{part}</span> : part}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-white/80 text-[clamp(16px,4vw,18px)] font-body font-light">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-2xl mt-12 relative">
          {/* Vertical Connecting Glow Line */}
          <div className="absolute left-[35px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-[#00f2ff]/40 to-transparent z-0 shadow-[0_0_15px_rgba(0,242,255,0.5)] hidden md:block" />
          <div className="absolute left-[35px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-[#00f2ff]/20 to-transparent z-0 md:hidden" />

          {items.map((item, idx) => (
            <div 
              key={idx}
              className="group relative flex items-center bg-[#0d2a33]/60 backdrop-blur-xl border-2 border-[#22575e]/80 rounded-[1.5rem] p-4 transition-all duration-500 hover:border-[#38b2ac]/80 hover:bg-[#0d2a33]/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 min-h-[100px] z-10"
            >
              {/* 3D Icon Container - Overlapping left edge style */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#133d45] border-2 border-[#2c6e76] rounded-[1.2rem] flex items-center justify-center p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2 z-10 overflow-visible">
                {/* Glow behind icon */}
                <div className="absolute inset-0 bg-[#38b2ac]/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                
                {/* Dynamic Icons - Referencing Public Folder */}
                   {item.assetType === 'attention' && (
                     <img 
                       src="/OSSO.webp" 
                       alt="Atenção"
                       className="w-full h-full object-contain scale-[1.8] drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] relative z-20 animate-float"
                     />
                   )}
                   {item.assetType === 'understanding' && (
                     <img 
                       src="/COLUNA.webp" 
                       alt="Entendimento"
                       className="w-full h-full object-contain scale-[1.8] drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] relative z-20"
                     />
                   )}
                   {item.assetType === 'conversion' && (
                     <img 
                       src="/doctor.webp" 
                       alt="Conversão"
                       className="w-full h-full object-contain scale-[1.8] drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] relative z-20"
                     />
                   )}
              </div>

              {/* Text Content - Optimized for Mobile-Contained width */}
              <div className="flex flex-col pl-[86px] pr-1 py-1">
                <h3 className="text-lg font-display font-bold text-white mb-1 leading-tight">
                  {item.label}: <span className="font-light text-white/90">{item.sublabel}</span>
                </h3>
                {item.description && (
                  <p className="text-white/70 text-xs font-body font-light leading-snug">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 md:mt-28 flex justify-center w-full relative z-20">
           <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="group relative w-[90%] sm:w-auto whitespace-nowrap px-4 py-4 md:px-12 md:py-6 bg-gradient-to-r from-[#2c7a7b] to-[#38b2ac] rounded-full text-white font-display font-bold text-[clamp(16px,5vw,24px)] md:text-2xl shadow-[0_10px_30px_rgba(56,178,172,0.3)] hover:shadow-[0_15px_40px_rgba(56,178,172,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider overflow-hidden">
              {ctaLabel}
              {/* Shine effect on hover */}
              <div className="absolute inset-0 rounded-full">
                <div className="w-1/2 h-full bg-white/20 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000" />
              </div>
           </button>
        </div>
      </div>
    </section>
  );
}
