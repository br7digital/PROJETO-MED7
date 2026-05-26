import { categories } from '../data/mockData';
import { Bone, Activity, Stethoscope, Shield, Crosshair, Zap, AlertCircle, TrendingUp } from 'lucide-react';

const iconMap = {
  Bone, Activity, Stethoscope, Shield, Crosshair, Zap, AlertCircle, TrendingUp
};

export default function HomeGrid({ setActiveCategory }) {
  return (
    <div className="min-h-screen bg-[#071324] relative overflow-hidden flex flex-col items-center pt-12 pb-16 px-4">
      
      {/* Background Tech Motifs (Circuit lines approximation) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-med-cyan rounded-tr-3xl" style={{ right: '5%', top: '10%' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border-l-2 border-b-2 border-med-cyan rounded-bl-3xl" style={{ left: '-5%', bottom: '20%' }}></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-med-cyan/10 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-outfit font-bold text-white tracking-wide mb-2 drop-shadow-md">
          MED7 ARSENAL:
          <br/>
          PACK EXPERT
        </h1>
        <p className="text-sm md:text-base font-inter text-gray-300 tracking-widest uppercase">
          Selecione a categoria para abrir
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl w-full">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Activity;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="flex flex-col items-center justify-center p-4 rounded-3xl bg-gradient-to-b from-[#152e4d]/80 to-[#0a192f] border border-[#a3b8cc]/30 shadow-[0_0_15px_rgba(0,0,0,0.5),inset_0_0_10px_rgba(255,255,255,0.05)] hover:border-med-cyan/60 hover:shadow-[0_0_20px_var(--color-med-cyan-glow)] transition-all duration-300 group"
            >
              {/* 3D Image Placeholder Area */}
              <div className="h-28 w-28 md:h-36 md:w-36 mb-2 flex items-center justify-center drop-shadow-2xl">
                {cat.image3d ? (
                  <img src={cat.image3d} alt={cat.name} className="h-full object-contain transform group-hover:scale-110 transition-transform duration-300" />
                ) : (
                  <Icon size={64} className="text-white/80 group-hover:text-med-cyan transition-colors" strokeWidth={1.5} />
                )}
              </div>
              
              <h2 className="text-lg md:text-xl font-outfit font-bold text-white mb-1 drop-shadow-md tracking-wider text-center">
                {cat.name}
              </h2>
              <p className="text-[9px] md:text-[10px] uppercase font-inter text-gray-400 tracking-wider text-center">
                Clique para abrir no Canva
              </p>
            </button>
          );
        })}
      </div>

      {/* Footer Diamond Icon Placeholder */}
      <div className="relative z-10 mt-12 opacity-80">
        <div className="w-16 h-16 bg-gradient-to-b from-white/20 to-transparent border border-white/20 rotate-45 flex items-center justify-center shadow-[0_0_20px_var(--color-med-cyan-glow)]">
           <div className="w-8 h-8 bg-gradient-to-b from-med-cyan to-blue-600 shadow-[0_0_15px_var(--color-med-cyan-glow)]"></div>
        </div>
      </div>
    </div>
  );
}
