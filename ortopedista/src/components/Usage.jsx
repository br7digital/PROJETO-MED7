import React, { useState, useEffect, useRef } from 'react';
import { landingData } from '../data/data-config';

export function Usage() {
  const { overline, title, subheadline, supportText, chips, carousel } = landingData.usage;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoPlayTimer = useRef(null);

  // Minimum swipe distance (in pixels) to trigger slide change
  const minSwipeDistance = 50;

  // Auto-play logic with a more robust implementation
  useEffect(() => {
    const startTimer = () => {
      autoPlayTimer.current = setInterval(() => {
        if (!isPaused) {
          setActiveIndex((prev) => (prev + 1) % carousel.length);
        }
      }, 4000);
    };

    startTimer();

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [carousel.length, isPaused]);

  // Touch Handlers
  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
        setIsPaused(false);
        return;
    }
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % carousel.length);
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + carousel.length) % carousel.length);
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
    
    // Keep paused for a moment after interaction ends
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#031633] to-[#010816] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(0,242,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[480px]">
        
        {/* Header Section */}
        <div className="text-center mb-2 flex flex-col items-center">
          <span className="text-[#00f2ff] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block animate-pulse">
            {overline}
          </span>
          <h2 className="text-[clamp(30px,8vw,36px)] font-display font-black text-white tracking-tighter mb-4 text-glow leading-[1.1]">
            Selecione o vídeo.<br />
            Publique em minutos.<br />
            <span className="text-[#00f2ff]">Vire a referência.</span>
          </h2>
          <p className="text-zinc-200 text-sm font-body leading-relaxed max-w-[280px] mx-auto">
            {subheadline}
          </p>
          
          {/* Connector Line */}
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#00f2ff]/50 to-transparent mt-6 mx-auto shadow-[0_0_10px_rgba(0,242,255,0.3)]"></div>
        </div>

        {/* Carousel Area */}
        <div 
          className="relative flex flex-col items-center select-none -mt-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
          <div className="relative w-full h-[520px] mb-4 flex justify-center items-center overflow-hidden touch-pan-y">
            {carousel.map((item, index) => {
              // Calculate relative position to active index
              const position = index - activeIndex;
              const isCenter = index === activeIndex;
              const isNext = position === 1 || (activeIndex === carousel.length - 1 && index === 0);
              const isPrev = position === -1 || (activeIndex === 0 && index === carousel.length - 1);
              
              let style = {};
              let zIndex = 0;
              let opacity = 0;

              if (isCenter) {
                style = { transform: 'translateX(0) scale(1)', zIndex: 30 };
                opacity = 1;
              } else if (isNext) {
                style = { transform: 'translateX(45%) scale(0.85) perspective(1000px) rotateY(-15deg)', zIndex: 20 };
                opacity = 0.4;
              } else if (isPrev) {
                style = { transform: 'translateX(-45%) scale(0.85) perspective(1000px) rotateY(15deg)', zIndex: 20 };
                opacity = 0.4;
              } else {
                style = { transform: `translateX(${position > 0 ? '60%' : '-60%'}) scale(0.7)`, zIndex: 10 };
                opacity = 0;
              }

              return (
                <div 
                  key={item.id}
                  className="absolute w-56 aspect-[9/19.5] transition-all duration-700 ease-out cursor-pointer"
                  style={{ ...style, opacity }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden border-[6px] border-[#0c1f32] shadow-2xl bg-[#0c1f32] group-hover:border-[#00f2ff]/30 transition-colors">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover pointer-events-none" 
                      alt={item.label} 
                    />
                    
                    {/* Shadow overlay for depth */}
                    {!isCenter && (
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-700" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Label */}
          <div className="text-center mb-6">
            <h3 className="text-white font-display font-black text-xl tracking-tight transition-all duration-300 text-glow">
              {carousel[activeIndex].label}
            </h3>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mb-10">
            {carousel.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-10 bg-[#00f2ff]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* New Numbered Process Flow */}
          <div className="flex flex-col gap-5 w-full max-w-[320px] mb-10 relative">
            {/* Continuous Connecting Line - Identical to Hook section */}
            <div className="absolute left-[27px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-[#00f2ff]/0 via-[#00f2ff]/40 to-[#00f2ff]/0 shadow-[0_0_10px_rgba(0,242,255,0.2)] z-0 pointer-events-none"></div>

            {chips.map((chip, idx) => (
              <div key={idx} className="group flex items-center gap-4 p-3 rounded-2xl bg-[#020a18]/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-[#00f2ff]/30 hover:bg-[#00f2ff]/5 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#0aa1e2f] border border-[#00f2ff]/40 flex items-center justify-center text-[#00f2ff] font-display font-black text-xs shadow-[0_0_15px_rgba(0,242,255,0.15)] group-hover:bg-[#00f2ff] group-hover:text-black transition-all shrink-0">
                  0{idx + 1}
                </div>
                <span className="text-white font-display font-bold text-[13px] uppercase tracking-wider opacity-90 group-hover:opacity-100">
                  {chip}
                </span>
              </div>
            ))}
          </div>

          {/* Footer Support Text */}
          <div className="text-center mb-10">
            <p className="text-[#00f2ff] text-[12px] font-bold tracking-widest uppercase bg-[#00f2ff]/10 inline-block px-5 py-2 rounded-full border border-[#00f2ff]/20 shadow-[0_0_15px_rgba(0,242,255,0.15)] animate-pulse">
              {supportText}
            </p>
          </div>

          {/* Matemática da Autoridade & CTA (Google AI Conversion Tactic) */}
          <div className="relative w-full max-w-[420px] mx-auto p-8 md:p-10 rounded-[32px] bg-[#020a18]/90 backdrop-blur-3xl border border-emerald-500/30 shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col items-center">
            
            <div className="flex justify-center mb-6">
               <span className="text-emerald-400 font-bold text-[11px] uppercase tracking-widest bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20 shadow-inner">
                 ⚖️ A Matemática da Autoridade
               </span>
            </div>

            <p className="text-white/90 font-body text-[14px] md:text-[15px] leading-relaxed text-center mb-8 px-2">
              Por que estamos entregando este arsenal de elite por apenas <strong className="text-white font-black text-[17px] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] bg-white/10 px-3 py-1 rounded-lg mx-1 tracking-wide">R$ 197,90</strong>? Porque decidimos <strong className="text-[#00f2ff]">diluir o custo</strong> de uma produção de R$ 2.500,00 para viabilizar e escalar o seu posicionamento.
            </p>

            <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="btn-elite w-full py-6 !text-base group shadow-[0_0_30px_rgba(0,242,255,0.25)] animate-pulse-attention">
              <span className="relative z-10 uppercase tracking-widest font-black text-[clamp(13px,4vw,16px)]">QUERO MEU ACESSO AGORA</span>
            </button>
            <p className="text-center text-[#00f2ff]/90 font-medium text-[11px] md:text-[12px] font-display tracking-widest mt-4 flex items-center justify-center gap-3">
              <span className="w-2 h-2 flex-shrink-0 rounded-full bg-[#10B981] animate-pulse"></span>
              LOTE PROMOCIONAL EXCLUSIVO
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
