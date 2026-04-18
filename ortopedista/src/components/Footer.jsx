import React from 'react';
import { Activity } from 'lucide-react';
import { landingData } from '../data/data-config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#01050d] to-black pt-8 pb-20">
      <div className="container mx-auto px-6 w-full max-w-[480px] text-center flex flex-col items-center">

        {/* Brand Identity */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex flex-col items-center gap-3 mb-10 group cursor-pointer hover:opacity-80 transition-opacity"
        >
          {/* Main Logo */}
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-[#00f2ff]/10 rounded-[10px] shadow-[0_0_15px_rgba(0,242,255,0.1)] group-hover:bg-[#00f2ff]/20 transition-colors">
              <Activity className="w-5 h-5 text-[#00f2ff]" />
            </div>
            <span className="font-display font-black text-[22px] text-white tracking-widest uppercase drop-shadow-md">
              MED7
            </span>
          </div>
          {/* Sub-logo: Acervo Visual */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 group-hover:border-[#00f2ff]/30 transition-colors">
            <svg className="w-3.5 h-3.5 text-[#00f2ff]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <span className="text-white/50 text-[10px] font-display font-semibold tracking-[0.2em] uppercase">Acervo Visual</span>
          </div>
        </a>

        {/* Links (WCAG Compliant Contrast) */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10 w-full">
          <a href="#" className="text-zinc-200 text-[12px] uppercase font-black tracking-[0.1em] hover:text-[#00f2ff] transition-colors">Termos de Uso</a>
          <a href="#" className="text-zinc-200 text-[12px] uppercase font-black tracking-[0.1em] hover:text-[#00f2ff] transition-colors">Políticas de Privacidade</a>
        </div>

        {/* Disclaimer (Technical Legal Requirement) */}
        <p className="text-zinc-500 text-[11px] font-body leading-relaxed mb-10 px-2 max-w-[420px]">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
        </p>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-zinc-700/50">
          <p className="text-zinc-200 text-[13px] md:text-[14px] font-medium tracking-wide">
            © {currentYear} MED7 • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
