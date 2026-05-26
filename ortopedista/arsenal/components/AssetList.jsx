import { videos, categories } from '../data/mockData';
import { Download, Edit3, PlayCircle } from 'lucide-react';

export default function AssetList({ activeCategory }) {
  const currentVideos = videos[activeCategory] || [];
  const categoryInfo = categories.find(c => c.id === activeCategory);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-outfit font-semibold text-white mb-2 flex items-center gap-3">
          {categoryInfo?.name}
          <span className="bg-med-cyan/20 text-med-cyan text-xs px-3 py-1 rounded-full font-inter">
            {currentVideos.length} {currentVideos.length === 1 ? 'Ativo' : 'Ativos'}
          </span>
        </h2>
        <p className="text-gray-400">Modelos validados para atração de pacientes particulares.</p>
      </div>

      {currentVideos.length === 0 ? (
        <div className="glass-panel p-12 text-center">
          <p className="text-gray-400">Nenhum ativo disponível nesta categoria no momento.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentVideos.map((video) => (
            <div key={video.id} className="glass-panel glass-panel-hover overflow-hidden group">
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-med-navy via-med-navy/50 to-transparent"></div>
                
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 rounded-full bg-med-cyan/90 text-med-navy flex items-center justify-center shadow-[0_0_30px_var(--color-med-cyan-glow)] scale-75 group-hover:scale-100 transition-all duration-300">
                    <PlayCircle size={32} />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{video.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{video.description}</p>
                </div>
              </div>

              {/* Action Buttons (Entrega Dual) */}
              <div className="p-5 flex flex-col sm:flex-row gap-4">
                <a 
                  href={video.downloadUrl}
                  className="flex-1 btn-secondary"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Download size={18} />
                  <span>Download Direto</span>
                </a>
                
                <a 
                  href={video.canvaUrl}
                  className="flex-1 btn-primary"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Edit3 size={18} />
                  <span>Personalizar no Canva</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
