import React from 'react';
import { landingDataB } from '../../data/data-config-b';

export function GalleryB() {
  const { overline, title, subtitle, items } = landingDataB.gallery;

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#010F1F] to-[#020c1a] overflow-hidden">
      <div className="container mx-auto px-5 relative z-10 w-full max-w-[480px]">
        <span className="inline-block text-[#00f2ff] text-[10px] font-display font-bold tracking-[0.25em] uppercase mb-3 drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">{overline}</span>
        <h2 className="text-[clamp(26px,8vw,34px)] font-display font-black text-white tracking-tighter leading-[1.12] mb-3 text-glow">{title}</h2>
        <p className="text-white/50 text-[15px] leading-[1.6] font-body mb-10 max-w-[440px]">{subtitle}</p>

        <div className="grid grid-cols-2 gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="group relative glass-card bg-[#0b1627]/80 hover:bg-[#0b1627] rounded-2xl p-4 border border-white/5 hover:border-[#00f2ff]/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,242,255,0.08)] hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-xl bg-[#00f2ff]/10 group-hover:bg-[#00f2ff]/15 flex items-center justify-center mb-3 transition-colors duration-300 shadow-[0_0_12px_rgba(0,242,255,0.1)]">
                <span className="text-lg">{item.icon}</span>
              </div>
              <h3 className="text-white font-display font-bold text-[14px] leading-tight mb-1.5">{item.title}</h3>
              <p className="text-white/35 text-[12px] leading-[1.5] font-body">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-[#00f2ff]/40 text-[11px] font-display font-semibold tracking-[0.15em] uppercase">+ Outros temas incluídos no acervo completo</p>
        </div>
      </div>
    </section>
  );
}
