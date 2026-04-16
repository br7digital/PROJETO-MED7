import React from 'react';
import { landingData } from '../data/data-config';

export function SocialProof() {
  const { title, subtitle, testimonials } = landingData.socialProof;

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#000E1E] to-[#020c1a] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[480px]">

        {/* Header Section */}
        <div className="mb-14">
          <h2 className="text-center text-[clamp(30px,8vw,36px)] font-display font-black text-white leading-none tracking-tighter text-glow mb-8">
            Avaliações
          </h2>

          <div className="grid grid-cols-2 gap-4 items-center max-w-[340px] mx-auto">
            {/* Left Column - 4.9/5 Stars */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-2 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#fbbf24] text-2xl">★</span>
                ))}
              </div>
              <div className="text-[36px] font-display font-black text-white leading-none mb-1">
                4.9/5
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">
                847 Avaliações
              </div>
            </div>

            {/* Right Column - 98% Satisfação Card */}
            <div className="glass-card bg-[#0b1627]/95 border border-[#00f2ff]/20 rounded-[20px] p-4 flex flex-col items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all hover:border-[#00f2ff]/50 hover:shadow-[0_15px_30px_rgba(0,242,255,0.15)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#00f2ff]/10 blur-xl group-hover:bg-[#00f2ff]/20 transition-colors" />
              <div className="text-[40px] font-display font-black text-[#00f2ff] leading-none mb-1 text-glow relative z-10">
                98%
              </div>
              <div className="text-[10px] text-white/70 uppercase tracking-widest font-bold relative z-10">
                Satisfação
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards Stack */}
        <div className="flex flex-col gap-6 mb-16 px-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`group relative glass-card bg-[#0b1627]/95 backdrop-blur-xl border border-[#00f2ff]/10 rounded-[22px] p-5 flex gap-4 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-1 hover:border-[#00f2ff]/30 hover:shadow-[0_20px_45px_rgba(0,242,255,0.15)] ${idx === 1 ? 'translate-x-4' : idx === 2 ? '-translate-x-4' : ''
                }`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#00f2ff]/30 shadow-[0_0_15px_rgba(0,242,255,0.2)] group-hover:border-[#00f2ff]/60 transition-colors duration-500">
                  <img src={t.imageUrl} alt={t.name} className="w-full h-full object-cover filter contrast-125" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <div className="flex flex-col justify-start mb-2">
                  <span className="font-display font-bold text-white text-[15px] tracking-wide">
                    {t.name}
                  </span>
                  {/* Stars - Underneath the name */}
                  <div className="flex gap-0.5 opacity-90 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)] mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#fbbf24] text-[10px]">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-white/70 text-[13px] font-body font-light leading-relaxed pr-1">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Area with Character */}
        <div className="relative mt-20 flex flex-col items-center">

          {/* Bonequinho character popping out */}
          <div className="absolute -top-33 right-1 w-28 h-40 pointer-events-none z-20">
            <img
              src="/dr osso avaliar.webp"
              alt="Character"
              className="w-full h-full object-contain animate-float drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
            {/* Heart Popup */}
            <div className="absolute -top-2 -left-2 bg-pink-500 rounded-full p-2 shadow-[0_0_20px_rgba(236,72,153,0.6)] animate-bounce duration-1000">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Button */}
          <button className="btn-elite w-full py-5 group relative z-10">
            <span className="relative z-10 font-display font-black text-[17px] uppercase tracking-wider">
              TAMBÉM QUERO ESSA TRANSFORMAÇÃO
            </span>
          </button>

          {/* Verification Badge */}
          <div className="mt-8 flex items-center gap-2 opacity-40">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-white text-[10px] uppercase font-bold tracking-widest">
              Garantia de Autenticidade
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
