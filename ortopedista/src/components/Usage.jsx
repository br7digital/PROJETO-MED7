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
        <div className="text-center mb-10">
          <span className="text-[#00f2ff] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block animate-pulse">
            {overline}
          </span>
          <h2 className="text-[clamp(26px,8vw,32px)] font-display font-bold text-white leading-[1.1] mb-6">
            {title.split('\n').map((part, i, arr) => (
              <React.Fragment key={i}>
                <span className={i === arr.length - 1 ? "text-[#00f2ff]" : ""}>
                  {part}
                </span>
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-zinc-200 text-sm font-body leading-relaxed max-w-[280px] mx-auto">
            {subheadline}
          </p>
        </div>

        {/* Carousel Area */}
        <div 
          className="relative flex flex-col items-center select-none"
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
                  <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden border-[6px] border-[#0c1f32] shadow-2xl bg-[#0c1f32]">
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
            <h3 className="text-white font-display font-bold text-lg transition-all duration-300">
              {carousel[activeIndex].label}
            </h3>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mb-8">
            {carousel.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-[#00f2ff]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Microchips Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {chips.map((chip, idx) => (
              <div 
                key={idx} 
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#00f2ff] text-[10px] font-bold uppercase tracking-wider shadow-lg"
              >
                {chip}
              </div>
            ))}
          </div>

          {/* Footer Support Text */}
          <div className="text-center mb-8">
            <p className="text-[#00f2ff] text-[11px] font-bold tracking-widest uppercase bg-[#00f2ff]/10 inline-block px-4 py-1.5 rounded-full border border-[#00f2ff]/20 shadow-[0_0_15px_rgba(0,242,255,0.15)]">
              {supportText}
            </p>
          </div>

          {/* Matemática da Autoridade & CTA (Google AI Conversion Tactic) */}
          <div className="relative w-full max-w-sm mx-auto p-6 md:p-8 rounded-[24px] bg-[#020a18]/80 backdrop-blur-xl border border-emerald-500/20 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-center">
            
            <div className="flex justify-center mb-4">
               <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wide bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20 shadow-inner">
                 ⚖️ A Matemática da Autoridade
               </span>
            </div>

            <p className="text-white/80 font-body text-[13px] leading-relaxed text-center mb-6">
              Por que estamos entregando este arsenal de elite por apenas <strong className="text-white">R$ 197,90</strong>? Porque decidimos <strong className="text-[#00f2ff]">diluir o custo</strong> de uma produção de R$ 2.500,00 para democratizar o seu acesso.
            </p>

            <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="btn-elite w-full py-4 !text-sm group shadow-[0_0_20px_rgba(0,242,255,0.2)] animate-pulse-attention">
              <span className="relative z-10 uppercase tracking-[0.05em] md:tracking-widest font-black text-[clamp(12px,3.5vw,14px)] whitespace-nowrap">QUERO MEU ACESSO AGORA</span>
            </button>
            <p className="text-center text-[#00f2ff]/90 font-medium text-[10px] md:text-[11px] font-display tracking-wide mt-3 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 flex-shrink-0 rounded-full bg-[#10B981] animate-pulse"></span>
              Lote promocional exclusivo
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
