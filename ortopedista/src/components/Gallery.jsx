import React from 'react';
import { landingData } from '../data/data-config';

export function Gallery() {
  const { title, description, images } = landingData.gallery;

  if (!images || images.length === 0) return null;

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#020c1a] via-[#042038] to-[#020b18] overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full max-w-[480px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[clamp(22px,6vw,26px)] font-display font-bold text-white mb-3">
            {title.split('\n').map((part, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="text-[#00f2ff]">{part}</span> : part}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-zinc-200 text-sm max-w-xs mx-auto">
            {description}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-3">
          {images.map((item, idx) => {
            const isFeature = item.type === 'feature' || idx === 0;

            return (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a2b48]/30 backdrop-blur-md transition-all duration-500 hover:border-[#00f2ff]/40 shadow-xl ${isFeature ? 'col-span-2 aspect-video' : 'col-span-1 aspect-square'
                  }`}
              >
                {/* Image Overlay with Neon Highlight */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 transition-opacity duration-300 group-hover:from-black/90" />

                {/* Subtle Neon Line on Hover */}
                <div className="absolute inset-0 border-[1px] border-[#00f2ff]/0 group-hover:border-[#00f2ff]/40 rounded-2xl transition-all duration-300 z-30 pointer-events-none" />

                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                  <span className={`block font-display font-bold text-white leading-tight transition-all duration-300 group-hover:text-[#00f2ff] ${isFeature ? 'text-lg' : 'text-xs uppercase tracking-wider'
                    }`}>
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Badge */}
        <div className="mt-12 flex justify-center">
          <div className="bg-[#1a2b48]/50 backdrop-blur-xl border border-[#00f2ff]/20 px-6 py-3 rounded-full flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2ff]"></span>
            </span>
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Diversos formatos estruturados para dominar o algoritmo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
