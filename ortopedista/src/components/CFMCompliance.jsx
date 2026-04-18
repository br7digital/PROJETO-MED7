import React from 'react';

export function CFMCompliance() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-[#000E1E] to-[#010F1F] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-[480px]">
        {/* Compliance Block (Jurídico e CFM) */}
        <div className="mt-16 md:mt-20 relative w-full flex flex-col items-center text-center px-4 md:px-6 py-12 bg-[#010815]/90 rounded-[32px] border border-[#00f2ff]/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-3xl">
          
          {/* Overlapping CFM Seal - Elite Break-the-Border Style */}
          <div className="absolute -top-14 md:-top-20 w-28 h-28 md:w-40 md:h-40 z-20 animate-float">
            <img 
              src="/LOGO CFM.webp" 
              alt="Selo de Conformidade CFM" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] brightness-110 contrast-110"
            />
          </div>

          <div className="mt-12 md:mt-16 flex flex-col items-center gap-3 mb-6 relative z-10">
            <h4 className="text-[#00f2ff] font-display font-bold text-[12px] md:text-[14px] tracking-[0.2em] uppercase drop-shadow-md">
              Segurança Jurídica e Ética Médica
            </h4>
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#00f2ff]/50 to-transparent"></div>
          </div>

          <h3 className="text-white font-black font-display text-[18px] md:text-[22px] mb-6 tracking-tight relative z-10 leading-tight px-1 md:px-4 drop-shadow-sm">
            Conformidade Total com a <br className="hidden sm:block" />
            <span className="text-[#00f2ff]">Resolução CFM nº 2.336/23</span>
          </h3>

          <div className="space-y-4 max-w-[440px] relative z-10">
            <p className="text-white/90 font-body text-[15px] md:text-[17px] leading-relaxed px-2 font-medium">
              Protocolize sua comunicação digital com total segurança jurídica.
            </p>
            <p className="text-white/70 font-body text-[13px] md:text-[14px] leading-relaxed px-1 md:px-4">
              Este acervo foi <strong className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">desenvolvido rigorosamente sob as novas diretrizes do CFM</strong>, garantindo o fortalecimento da sua autoridade sem colocar seu registro profissional em risco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
