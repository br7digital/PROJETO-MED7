import React from 'react';

export function MiniOffer() {
  return (
    <section className="relative px-6 pt-10 pb-6 bg-gradient-to-b from-[#020a18] to-[#020814] z-40 flex flex-col items-center">
      
      {/* Elite Tag moved from Hero */}
      <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-[#10B981]/50 bg-[#011a14]/80 backdrop-blur-xl shadow-[0_0_25px_rgba(16,185,129,0.35)] relative z-20">
        <span className="relative flex h-2.5 w-2.5 mr-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
        </span>
        <span className="text-[#10B981] text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase flex items-center drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
          CONFORMIDADE CFM <span className="text-[#00f2ff]/40 mx-2 text-[12px] font-light drop-shadow-none">|</span> <span className="text-[#00f2ff] drop-shadow-[0_0_5px_rgba(0,242,255,0.6)]">ESTRATÉGIA DE ELITE</span>
        </span>
      </div>

      <div className="relative w-full max-w-sm mx-auto glass-card p-6 rounded-[32px] overflow-hidden group bg-[#081221]/95 backdrop-blur-3xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] border-white/10">
        
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00f2ff]/10 blur-[40px] group-hover:bg-[#00f2ff]/20 transition-colors duration-700 pointer-events-none" />

        {/* Top Badge */}
        <div className="flex justify-center mb-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00f2ff]/10 border border-[#00f2ff]/30 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.15)] animate-pulse">
            <span className="text-[#00f2ff] text-[9px] font-black tracking-widest uppercase">
              LOTE DE LANÇAMENTO
            </span>
          </div>
        </div>

        {/* Pricing Area */}
        <div className="text-center mb-6 relative z-10">
          <p className="text-white/70 line-through text-xs font-display font-medium tracking-wider mb-1">De R$ 2.500,00</p>
          <div className="flex items-center justify-center gap-1 drop-shadow-xl mt-1">
            <span className="text-white/80 text-xl font-display font-bold">R$</span>
            <span className="text-white text-[56px] leading-none font-display font-black tracking-tighter drop-shadow-2xl scale-110 mx-1">197</span>
            <span className="text-white/80 text-xl font-display font-bold">,90</span>
          </div>
          <div className="mt-3">
            <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wide bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-inner">
              💰 Economize R$ 2.302,10
            </span>
          </div>
          <div className="mt-4 mb-3 px-2">
            <p className="text-white/80 font-body text-[12px] md:text-[13px] font-medium leading-relaxed max-w-[280px] mx-auto drop-shadow-md">
              Economize mais de R$ 2.300 em custos de agência. Tenha o arsenal completo de um estúdio por uma fração do preço.
            </p>
          </div>
          <div className="mt-3 text-center">
            <span className="inline-block bg-[#00f2ff]/5 px-4 py-1.5 rounded-full text-white/80 font-display font-medium text-[12px] border border-[#00f2ff]/20">
              Ou 12x de R$ 19,75
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="relative z-10 flex flex-col gap-3">
          <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="btn-elite w-full py-4 !text-sm group shadow-[0_0_20px_rgba(0,242,255,0.2)] animate-pulse-attention">
            <span className="relative z-10 uppercase tracking-[0.05em] md:tracking-widest font-black text-[clamp(12px,3.5vw,14px)] whitespace-nowrap">QUERO GARANTIR COM DESCONTO</span>
          </button>
          <p className="text-center text-[#00f2ff]/90 font-medium text-[10px] md:text-[11px] font-display tracking-wide flex items-center justify-center gap-2 mt-1">
            <span className="w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#10B981] animate-pulse"></span>
            Condição especial para os primeiros acessos.
          </p>
        </div>

        {/* Bottom Trust Indicators matched from Pricing */}
        <div className="flex justify-between items-center px-4 pt-5 mt-5 border-t border-white/5 relative z-10 w-full mb-0">
          <div className="flex flex-col items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-xl drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">🛡️</span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#00f2ff] uppercase">Seguro</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">⚡</span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#fbbf24] uppercase">Imediato</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-xl drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">🏆</span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#fbbf24] uppercase">Garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
