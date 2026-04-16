import React from 'react';
import { landingData } from '../data/data-config';
import { Activity } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[480px] px-4 py-4 pointer-events-none">
      <div className="h-14 px-6 glass-panel rounded-full flex items-center justify-between pointer-events-auto shadow-2xl">
        
        {/* Logo Text + Icon */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-[#00f2ff]/20 rounded-lg">
            <Activity className="w-5 h-5 text-[#00f2ff]" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-widest">
            {landingData.global.logoText}
          </span>
        </div>
        
        {/* Elite CTA Pill */}
        <button onClick={() => window.open('https://pay.hotmart.com/P105394697A', '_blank')} className="relative overflow-hidden group bg-[#00f2ff] hover:bg-[#00d1db] px-4 py-2 rounded-full text-slate-900 font-display font-extrabold text-[10px] tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] cursor-pointer active:scale-95">
          <span className="relative z-10">QUERO AGORA</span>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 -skew-x-12"
            style={{ animation: 'shimmer 2.5s infinite' }}
          />
        </button>
      </div>
    </nav>
  );
}
