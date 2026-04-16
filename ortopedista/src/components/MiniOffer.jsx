import React from 'react';

export function MiniOffer() {
  return (
    <section className="relative px-6 pt-10 pb-6 bg-gradient-to-b from-[#020a18] to-[#020814] z-40">
      <div className="relative w-full mx-auto glass-card p-6 rounded-[32px] overflow-hidden group bg-[#081221]/95 backdrop-blur-3xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] border-white/10">
        
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00f2ff]/10 blur-[40px] group-hover:bg-[#00f2ff]/20 transition-colors duration-700 pointer-events-none" />

        {/* Top Badge */}
        <div className="flex justify-center mb-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-[#00f2ff]/30 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.15)]">
            <span className="text-orange-500 animate-pulse text-[10px]">🔥</span>
            <span className="text-[#00f2ff] text-[9px] font-black tracking-widest uppercase">
              Oferta Limitada - 97% OFF
            </span>
          </div>
        </div>

        {/* Pricing Area */}
        <div className="text-center mb-6 relative z-10">
          <p className="text-white/40 line-through text-xs font-display font-medium tracking-wider mb-1">De R$ 2.500,00</p>
          <div className="flex items-center justify-center gap-1 drop-shadow-xl">
            <span className="text-white/80 text-xl font-display font-bold">R$</span>
            <span className="text-white text-[56px] leading-none font-display font-black tracking-tighter text-glow">97</span>
            <span className="text-white/80 text-xl font-display font-bold">,00</span>
          </div>
          <div className="mt-3">
            <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wide bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-inner">
              💰 Economize R$ 2.403,00
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="relative z-10">
          <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="btn-elite w-full py-4 !text-sm group shadow-[0_0_20px_rgba(0,242,255,0.2)] animate-pulse-attention">
            <span className="relative z-10 uppercase tracking-widest font-black">QUERO GARANTIR AGORA</span>
          </button>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="flex justify-between items-center px-4 pt-5 mt-5 border-t border-white/5 relative z-10">
          <div className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
             <span className="text-sm filter grayscale brightness-200">🛡️</span>
             <span className="text-[8px] font-bold tracking-[0.2em] text-white uppercase">Seguro</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
             <span className="text-sm filter grayscale brightness-200">⚡</span>
             <span className="text-[8px] font-bold tracking-[0.2em] text-white uppercase">Imediato</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
             <span className="text-sm filter grayscale brightness-200">🏆</span>
             <span className="text-[8px] font-bold tracking-[0.2em] text-white uppercase">Garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
