import React from 'react';
import { landingDataB } from '../../data/data-config-b';
import { useCheckout } from '../../contexts/CheckoutContext';

export function PricingB() {
  const { overline, title, subtitle, comparison, totalMarket, price, cents, installments, savings, benefits, guarantee } = landingDataB.pricing;
  const { openCheckoutModal } = useCheckout();

  return (
    <section className="relative pt-10 pb-20 bg-gradient-to-b from-[#010F1F] to-[#020c1a] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f2ff]/20 to-transparent" />
      <div className="container mx-auto px-5 relative z-10 w-full max-w-[480px]">
        <span className="inline-block text-[#00f2ff] text-[10px] font-display font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">{overline}</span>
        <h2 className="text-[clamp(26px,8vw,34px)] font-display font-black text-white tracking-tighter leading-[1.12] mb-3 text-glow">{title}</h2>
        <p className="text-white/50 text-[15px] leading-[1.6] font-body mb-10 max-w-[440px]">{subtitle}</p>

        {/* Market Value Comparison */}
        <div className="glass-card bg-[#0b1627]/60 rounded-2xl p-5 border border-white/5 mb-8">
          <h3 className="text-white font-display font-bold text-[12px] uppercase tracking-[0.15em] mb-4">Custo de produção no mercado</h3>
          <div className="space-y-3">
            {comparison.map((row, idx) => (
              <div key={idx} className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0 last:pb-0">
                <span className="text-white/50 text-[13px] font-body">{row.item}</span>
                <span className="text-white/90 font-display font-bold text-[13px]">{row.marketPrice}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-[#00f2ff]/20 flex justify-between items-center">
            <span className="text-[#00f2ff]/60 text-[10px] font-display font-bold uppercase tracking-[0.15em]">Total de mercado</span>
            <span className="text-red-500/80 font-display font-black text-lg line-through decoration-red-500/40 decoration-2">{totalMarket}</span>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="mt-[40px] text-center relative z-10 w-full max-w-[450px] mx-auto pb-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] bg-[#00f2ff]/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="bg-gradient-to-b from-[#0f1a2a] to-[#010612] rounded-[48px] p-5 md:p-12 pt-12 md:pt-16 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col items-center relative overflow-visible group">
            <div className="absolute inset-0 border border-white/5 rounded-[48px] m-1.5 pointer-events-none" />

            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <span className="inline-block text-[#00f2ff] bg-[#00f2ff]/10 border border-[#00f2ff]/20 px-4 py-1.5 rounded-full font-display font-bold text-[10px] tracking-[0.3em] uppercase drop-shadow-[0_0_10px_rgba(0,242,255,0.4)] backdrop-blur-md">
                OFERTA EXCLUSIVA
              </span>
            </div>

            <p className="text-white/60 text-[12px] font-display font-bold uppercase tracking-[0.25em] mb-4 mt-2">Seu investimento hoje</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-emerald-500 text-2xl font-display font-bold">R$</span>
              <span className="text-emerald-500 text-[72px] leading-none font-display font-black tracking-tighter drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">{price}</span>
              <span className="text-emerald-500 text-2xl font-display font-bold">,{cents || '90'}</span>
            </div>
            <p className="text-white/40 text-[14px] font-body mb-3">Ou {installments}</p>
            <span className="inline-block text-emerald-500 text-[10px] font-display font-bold uppercase tracking-[0.15em] bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-8 shadow-inner">
              💰 Economize {savings}
            </span>

            <ul className="text-left space-y-3.5 mb-8 w-full max-w-[320px]">
              {benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20">
                    <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-white/80 text-[13px] font-body leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <button onClick={openCheckoutModal} className="relative btn-elite w-full py-5 group/btn overflow-hidden shadow-[0_15px_40px_rgba(0,242,255,0.2)] hover:shadow-[0_20px_60px_rgba(0,242,255,0.4)] rounded-2xl flex items-center justify-center">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-30deg] animate-[shimmer_3s_infinite]" />
              <span className="relative z-10 text-[13px] sm:text-[14px] uppercase tracking-[0.1em] font-black drop-shadow-md">QUERO MEU ACESSO IMEDIATO</span>
            </button>

            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="text-lg">🛡️</span>
              <p className="text-white/40 text-[11px] font-body">{guarantee}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
