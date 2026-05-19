import React from 'react';
import { landingDataB } from '../../data/data-config-b';
import { useCheckout } from '../../contexts/CheckoutContext';

export function HeroB() {
  const { badge, headline, subheadline, ctaPrimary } = landingDataB.hero;
  const { openCheckoutModal } = useCheckout();

  return (
    <section className="relative w-full bg-[#020a18] overflow-hidden">
      {/* Top gradient blend */}
      <div className="absolute top-60 inset-x-0 h-[250px] bg-gradient-to-b from-[#020a18] via-[#020a18]/80 to-transparent pointer-events-none z-10" />

      <div className="relative z-30 w-full px-5 pt-[85px] sm:pt-[100px] pb-0">
        <div className="space-y-5 max-w-md md:max-w-[520px]">

          {/* Badge */}
          <div className="flex items-start sm:items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-[16px] sm:rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3 shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
            <div className="mt-1.5 sm:mt-0 w-2 h-2 flex-shrink-0 rounded-full bg-[#00f2ff] animate-pulse" />
            <span className="text-white/90 text-[11px] md:text-[12px] font-bold tracking-[0.1em] sm:tracking-wider uppercase font-display leading-[1.6] sm:leading-none">
              ⚡ {badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(30px,9vw,44px)] font-display text-white tracking-tighter font-black !leading-[1.12] drop-shadow-md">
            <span className="text-[#00f2ff] drop-shadow-[0_1px_4px_rgba(0,242,255,0.4)]">30 vídeos virais</span> com personagens 3D animados para Ortopedistas publicarem com{' '}
            <span className="text-[#00f2ff] drop-shadow-[0_1px_4px_rgba(0,242,255,0.4)]">autoridade</span> — sem precisar gravar do zero.
          </h1>

          {/* Subheadline */}
          <p className="text-[clamp(16px,5vw,18px)] text-white/80 font-body font-medium leading-[1.65] max-w-[400px] drop-shadow-sm pt-1">
            {subheadline}
          </p>

          {/* CTA */}
          <div className="pt-4 pb-8 sm:pb-12 flex flex-col gap-3.5 relative z-20">
            <button onClick={openCheckoutModal} className="btn-elite shadow-2xl flex items-center justify-center gap-3 w-fit group animate-pulse-attention py-4 px-8 text-[14px] md:text-[16px]">
              {ctaPrimary}
              <div className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover:scale-150 transition-transform duration-300" />
            </button>
            <p className="text-[#00f2ff]/90 font-medium text-[11px] sm:text-[13px] font-display tracking-wide ml-2 flex items-center gap-2">
              <span className="w-2 h-2 flex-shrink-0 rounded-full bg-[#10B981] animate-pulse" />
              Acesso imediato após a confirmação.
            </p>
          </div>
        </div>
      </div>

      {/* Background visual — smartphone mockup area */}
      <div className="relative z-0 mt-8 sm:mt-12">
        <div className="flex justify-center">
          <div className="relative w-[240px] h-[420px] bg-[#0a1525] rounded-[36px] p-2.5 shadow-[0_25px_70px_rgba(0,0,0,0.6)] border border-white/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0a1525] rounded-b-2xl z-20" />
            <div className="w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-br from-[#071422] via-[#0e243e] to-[#071422] flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-[#00f2ff]/10 border border-[#00f2ff]/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.15)]">
                  <svg className="w-7 h-7 text-[#00f2ff]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <p className="text-[#00f2ff] text-[11px] font-display font-bold uppercase tracking-[0.2em]">Prévia 3D</p>
                <p className="text-white/30 text-[10px] font-body mt-1">Anatomia em alta fidelidade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute bottom-16 left-0 w-full flex justify-around px-4 z-20 pointer-events-none">
          <div className="glass-panel px-3 py-2.5 rounded-xl shadow-elite animate-float flex flex-col items-center gap-1 border-white/20 bg-black/20">
            <span className="text-[#00f2ff] font-display font-black text-xs tracking-tighter">4K</span>
            <span className="text-white/70 text-[7px] font-bold uppercase tracking-widest">Resolução</span>
          </div>
          <div className="glass-panel px-3 py-2.5 rounded-xl shadow-elite animate-float flex flex-col items-center gap-1 border-white/20 bg-black/20" style={{ animationDelay: '1s' }}>
            <span className="text-[#00f2ff] font-display font-black text-xs tracking-tighter">PREMIUM</span>
            <span className="text-white/70 text-[7px] font-bold uppercase tracking-widest">Realismo 3D</span>
          </div>
          <div className="glass-panel px-3 py-2.5 rounded-xl shadow-elite animate-float flex flex-col items-center gap-1 border-white/20 bg-black/20" style={{ animationDelay: '2s' }}>
            <span className="text-[#00f2ff] font-display font-black text-xs tracking-tighter">30 VÍDEOS</span>
            <span className="text-white/70 text-[7px] font-bold uppercase tracking-widest">Acervo Completo</span>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#020814] via-[#020814]/40 to-transparent pointer-events-none" />
      </div>

      {/* Premium glow */}
      <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle,rgba(0,242,255,0.08)_0%,transparent_70%)] pointer-events-none z-10" />
    </section>
  );
}
