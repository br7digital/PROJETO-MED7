import React from 'react';
import { landingDataB } from '../../data/data-config-b';

export function BonusesB() {
  const { overline, title, subtitle, items } = landingDataB.bonuses;

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#010F1F] to-[#020c1a] overflow-hidden">
      <div className="container mx-auto px-5 relative z-10 w-full max-w-[480px]">
        <span className="inline-block text-[#00f2ff] text-[10px] font-display font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">{overline}</span>
        <h2 className="text-[clamp(26px,8vw,34px)] font-display font-black text-white tracking-tighter leading-[1.12] mb-3 text-glow">{title}</h2>
        <p className="text-white/45 text-[15px] leading-[1.6] font-body mb-10 max-w-[440px]">{subtitle}</p>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="group glass-card bg-[#0b1627]/80 hover:bg-[#0b1627] rounded-2xl p-5 border border-white/5 hover:border-[#00f2ff]/15 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,242,255,0.08)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00f2ff]/10 group-hover:bg-[#00f2ff]/15 flex items-center justify-center flex-shrink-0 transition-colors shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-display font-bold text-[15px] mb-1">{item.title}</h3>
                  <p className="text-white/45 text-[13px] leading-[1.6] font-body mb-2">{item.description}</p>
                  <span className="inline-block text-[#00f2ff] text-[9px] font-display font-bold tracking-[0.2em] uppercase bg-[#00f2ff]/8 px-3 py-1 rounded-full border border-[#00f2ff]/15">
                    {item.value}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
