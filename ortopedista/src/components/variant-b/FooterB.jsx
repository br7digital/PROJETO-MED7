import React from 'react';

export function FooterB() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#01050d] pt-10 pb-20 border-t border-white/5">
      <div className="max-w-lg mx-auto px-6 text-center flex flex-col items-center relative z-10">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity cursor-pointer">
          <div className="p-1.5 bg-[#00f2ff]/10 border border-[#00f2ff]/20 rounded-lg">
            <svg className="w-5 h-5 text-[#00f2ff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl text-white tracking-wide">MED<span className="text-[#00f2ff] text-glow">7</span></span>
        </a>
        <p className="text-[#00f2ff]/50 text-[10px] font-display font-semibold tracking-[0.2em] uppercase mb-8">Acervo Visual</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          <a href="#" className="text-white/40 text-[11px] uppercase font-bold tracking-[0.1em] hover:text-[#00f2ff] transition-colors">Termos de Uso</a>
          <a href="#" className="text-white/40 text-[11px] uppercase font-bold tracking-[0.1em] hover:text-[#00f2ff] transition-colors">Políticas de Privacidade</a>
        </div>

        <p className="text-white/20 text-[10px] font-body leading-relaxed mb-8 px-2 max-w-[420px]">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
        </p>

        <div className="w-full pt-6 border-t border-white/10">
          <p className="text-white/30 text-[12px] font-medium tracking-wide">
            © {currentYear} MED7 • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
