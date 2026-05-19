import React from 'react';
import { landingDataB } from '../../data/data-config-b';
import { useCheckout } from '../../contexts/CheckoutContext';

export function CustomizationB() {
  const { overline, title, subtitle, steps } = landingDataB.customization;
  const { openCheckoutModal } = useCheckout();

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#020c1a] to-[#010F1F] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-5 relative z-10 w-full max-w-[480px]">
        <span className="inline-block text-[#00f2ff] text-[10px] font-display font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">{overline}</span>
        <h2 className="text-[clamp(26px,8vw,34px)] font-display font-black text-white tracking-tighter leading-[1.12] mb-4 text-glow">
          <span className="text-[#00f2ff]">Seu nome</span>, sua marca, sua <span className="text-[#00f2ff]">autoridade</span>.
        </h2>
        <p className="text-white/50 text-[15px] leading-[1.7] font-body mb-10 max-w-[440px]">{subtitle}</p>

        {/* Steps */}
        <div className="space-y-4 mb-10">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4 items-start glass-card bg-[#0b1627]/80 rounded-2xl p-5 border border-white/5 hover:border-[#00f2ff]/15 shadow-elite transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,242,255,0.08)]">
              <div className="w-10 h-10 rounded-xl bg-[#00f2ff] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                <span className="text-slate-900 font-display font-black text-[13px]">{s.step}</span>
              </div>
              <div>
                <h3 className="text-white font-display font-bold text-[15px] mb-1">{s.label}</h3>
                <p className="text-white/45 text-[13px] leading-[1.6] font-body">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Visual */}
        <div className="glass-card bg-[#0b1627]/80 rounded-2xl border border-white/5 p-5 shadow-elite">
          <p className="text-center text-[#00f2ff] text-[10px] font-display font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">Antes e depois</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/5">
              <p className="text-white/30 text-[11px] font-display font-bold uppercase tracking-wider mb-2">Genérico</p>
              <div className="w-full h-28 bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-white/15 text-[28px]">📄</span>
              </div>
              <p className="text-white/25 text-[10px] mt-2 font-body">Sem identidade</p>
            </div>
            <div className="bg-[#00f2ff]/5 rounded-xl p-4 text-center border border-[#00f2ff]/20">
              <p className="text-[#00f2ff] text-[11px] font-display font-bold uppercase tracking-wider mb-2">Personalizado</p>
              <div className="w-full h-28 bg-gradient-to-br from-[#00f2ff]/10 to-[#00f2ff]/5 rounded-lg flex items-center justify-center">
                <span className="text-[#00f2ff] text-[28px]">🏥</span>
              </div>
              <p className="text-[#00f2ff] text-[10px] mt-2 font-body font-medium">Dr. Seu Nome + @</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button onClick={openCheckoutModal} className="btn-elite shadow-2xl flex items-center justify-center gap-3 mx-auto group py-4 px-8 text-[14px]">
            Quero personalizar meu acervo
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover:scale-150 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
