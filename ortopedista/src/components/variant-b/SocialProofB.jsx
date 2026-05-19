import React from 'react';
import { landingDataB } from '../../data/data-config-b';

export function SocialProofB() {
  const { title, subtitle, testimonials } = landingDataB.socialProof;

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#020c1a] to-[#010F1F] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-5 relative z-10 w-full max-w-[480px]">

        <div className="text-center mb-10">
          <h2 className="text-[clamp(28px,8vw,36px)] font-display font-black text-white tracking-tighter leading-none text-glow mb-3">{title}</h2>
          <p className="text-white/40 text-[14px] leading-[1.6] font-body max-w-[400px] mx-auto">{subtitle}</p>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-2 gap-4 items-center max-w-[340px] mx-auto mb-12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-1 mb-2 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
              {[...Array(5)].map((_, i) => (<span key={i} className="text-[#fbbf24] text-2xl">★</span>))}
            </div>
            <div className="text-[36px] font-display font-black text-white leading-none mb-1">4.9/5</div>
            <div className="text-[10px] text-white/80 uppercase tracking-widest font-bold">847 Avaliações</div>
          </div>
          <div className="glass-card bg-[#0b1627]/95 border border-[#00f2ff]/20 rounded-[20px] p-4 flex flex-col items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all hover:border-[#00f2ff]/50 hover:shadow-[0_15px_30px_rgba(0,242,255,0.15)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f2ff]/10 blur-xl group-hover:bg-[#00f2ff]/20 transition-colors" />
            <div className="text-[40px] font-display font-black text-[#00f2ff] leading-none mb-1 text-glow relative z-10">98%</div>
            <div className="text-[10px] text-white/70 uppercase tracking-widest font-bold relative z-10">Satisfação</div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col gap-6 mb-10 px-2">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`group relative glass-card bg-[#0b1627]/95 backdrop-blur-xl border border-[#00f2ff]/10 rounded-[22px] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-1 hover:border-[#00f2ff]/30 hover:shadow-[0_20px_45px_rgba(0,242,255,0.15)] ${idx === 1 ? 'translate-x-4' : idx === 2 ? '-translate-x-4' : ''}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#00f2ff]/10 border-2 border-[#00f2ff]/25 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.2)] group-hover:border-[#00f2ff]/50 transition-colors">
                  <span className="text-[#00f2ff] font-display font-bold text-[14px]">{t.name.charAt(0)}{t.name.split(' ').pop().charAt(0)}</span>
                </div>
                <div>
                  <span className="font-display font-bold text-white text-[15px] tracking-wide block">{t.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5 opacity-90 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]">
                      {[...Array(5)].map((_, i) => (<span key={i} className="text-[#fbbf24] text-[10px]">★</span>))}
                    </div>
                    <span className="text-white/30 text-[10px] font-body">·</span>
                    <span className="text-[#00f2ff] text-[10px] font-display font-bold tracking-wider uppercase">{t.focus}</span>
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-[13px] font-body font-light leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
