import React from 'react';
import { landingData } from '../data/data-config';
import { Activity } from 'lucide-react';
import { useCheckout } from '../contexts/CheckoutContext';

export function Navbar() {
  const { openCheckoutModal } = useCheckout();
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[480px] px-4 py-4 pointer-events-none">
      <div className="h-14 px-6 glass-panel rounded-full flex items-center justify-between pointer-events-auto shadow-2xl">

        {/* Logo Text + Icon */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 min-w-0 pointer-events-auto hover:opacity-80 transition-opacity cursor-pointer group">
          <div className="p-1.5 bg-[#00f2ff]/20 rounded-lg flex-shrink-0 group-hover:bg-[#00f2ff]/30 transition-colors">
            <Activity className="w-5 h-5 text-[#00f2ff]" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-widest truncate">
            {landingData.global.logoText.split('|')[0]}<span className="hidden xs:inline"> |{landingData.global.logoText.split('|')[1]}</span>
          </span>
        </a>

        {/* Elite CTA Pill */}
        <button onClick={openCheckoutModal} className="relative overflow-hidden group bg-[#00f2ff] hover:bg-[#00d1db] px-4 py-2 rounded-full text-slate-900 font-display font-extrabold text-[10px] tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] cursor-pointer active:scale-95">

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
