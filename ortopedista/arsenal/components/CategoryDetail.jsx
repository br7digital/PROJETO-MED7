import { ArrowLeft } from 'lucide-react';
import AssetList from './AssetList';
import { categories } from '../data/mockData';

export default function CategoryDetail({ activeCategory, setActiveCategory }) {
  const categoryInfo = categories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#071324] relative overflow-y-auto">
      {/* Background Motifs */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 fixed">
         <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-med-cyan/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto pb-16">
        
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 bg-[#071324]/80 backdrop-blur-md border-b border-white/10 px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => setActiveCategory(null)}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10">
              <ArrowLeft size={20} />
            </div>
            <span className="font-medium hidden sm:inline">Voltar ao Arsenal</span>
          </button>
          
          <div className="text-center absolute left-1/2 -translate-x-1/2">
            <h1 className="text-lg md:text-xl font-outfit font-bold text-white tracking-widest">
              {categoryInfo?.name}
            </h1>
          </div>
          
          <div className="w-10"></div> {/* Spacer for centering */}
        </header>

        {/* Content Area */}
        <div className="p-4 md:p-8 mt-4">
          <AssetList activeCategory={activeCategory} />
        </div>
        
      </div>
    </div>
  );
}
