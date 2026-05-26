import { categories } from '../data/mockData';
import { Bone, Activity, Stethoscope, Shield, Crosshair, Zap, AlertCircle, TrendingUp } from 'lucide-react';

const iconMap = {
  Bone, Activity, Stethoscope, Shield, Crosshair, Zap, AlertCircle, TrendingUp
};

export default function HomeGrid({ setActiveCategory }) {
  return (
    <div className="min-h-screen bg-[#071324] relative overflow-hidden flex flex-col items-center pt-12 pb-16 px-4">
      
      {/* Background radial sutil (removidas as linhas confusas) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-med-cyan/10 via-transparent to-transparent"></div>
      </div>

      {/* Wrapper to hold Header and Grid */}
      <div className="relative w-full max-w-5xl z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="relative z-10 text-center mb-10 w-full">
          <h1 className="text-3xl md:text-4xl font-outfit font-bold tracking-wide mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            <span className="text-white">MED7 ARSENAL:</span>
            <br/>
            <span className="text-med-cyan drop-shadow-[0_0_15px_var(--color-med-cyan-glow)]">PACK EXPERT</span>
          </h1>
          <p className="text-sm md:text-base font-inter text-[#8dc6ff] tracking-widest uppercase drop-shadow-[0_0_8px_rgba(141,198,255,0.3)] font-medium">
            Selecione a categoria para abrir
          </p>
        </div>

        {/* Grid */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Activity;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="flex flex-col items-center justify-center p-4 rounded-3xl bg-gradient-to-b from-[#152e4d] to-[#0a192f] border border-[#a3b8cc]/20 shadow-[0_4px_15px_rgba(0,0,0,0.4),inset_0_0_10px_rgba(255,255,255,0.02)] hover:border-med-cyan/80 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* 3D Image Placeholder Area */}
                <div className="h-24 w-24 md:h-32 md:w-32 mb-3 flex items-center justify-center drop-shadow-2xl">
                  {cat.image3d ? (
                    <img src={cat.image3d} alt={cat.name} className="h-full object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" />
                  ) : (
                    <Icon size={64} className="text-white/80 group-hover:text-med-cyan transition-colors" strokeWidth={1.5} />
                  )}
                </div>
                
                <h2 className="text-sm md:text-lg font-outfit font-bold text-white mb-1 drop-shadow-md tracking-widest text-center uppercase">
                  {cat.name}
                </h2>
                <p className="text-[8px] md:text-[9px] uppercase font-inter text-[#7a8b99] tracking-widest text-center mt-1">
                  ACESSAR ACERVO
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Logo */}
      <div className="relative z-10 mt-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <img 
          src="/Logo Med7 v2 1x1 sem fundo.png" 
          alt="Med7 Logo" 
          className="w-16 h-16 object-contain drop-shadow-[0_0_15px_var(--color-med-cyan-glow)]" 
        />
      </div>
    </div>
  );
}
