import React from 'react';
import { landingData } from '../data/data-config';
import { useCheckout } from '../contexts/CheckoutContext';

export function SocialProof() {
  const { title, subtitle, testimonials } = landingData.socialProof;
  const { openCheckoutModal } = useCheckout();

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#010F1F] to-[#111827] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-[480px]">

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
              <div className="text-[10px] text-white/80 uppercase tracking-widest font-bold">
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

        {/* Social Platforms Bar */}
        <div className="flex flex-col items-center gap-3 mt-10 mb-6">
          <span className="text-white/40 text-[10px] font-display font-bold uppercase tracking-[0.25em]">Publique em todas as plataformas</span>
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shadow-[0_0_15px_rgba(225,48,108,0.5)] hover:scale-110 transition-transform duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            {/* TikTok */}
            <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:scale-110 transition-transform duration-300">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.2 8.2 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z"/>
              </svg>
            </div>
            {/* Facebook */}
            <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center shadow-[0_0_15px_rgba(24,119,242,0.4)] hover:scale-110 transition-transform duration-300">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            {/* WhatsApp */}
            <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* CTA Area */}
        <div className="relative flex flex-col items-center w-full max-w-[400px]">

          {/* Button */}
          <button onClick={openCheckoutModal} className="btn-elite w-full py-5 group relative z-10 flex items-center justify-center">
            <span className="relative z-10 font-display font-black text-[clamp(12px,4vw,15px)] uppercase tracking-[0.05em] md:tracking-wider text-center leading-snug">
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
