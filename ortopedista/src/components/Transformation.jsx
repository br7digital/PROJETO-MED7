import React from 'react';
import { landingData } from '../data/data-config';

export function Transformation() {
  const { title, subtitle, beforeText, afterText, comparison } = landingData.transformation;

  return (
    <section className="py-14 bg-[#010b1a] relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-md mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[clamp(30px,8vw,36px)] font-display font-black text-white leading-none tracking-tighter text-glow mb-4">
            {title.split('\n').map((part, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="text-[#10B981]">{part}</span> : part}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-zinc-200 text-sm">
            {subtitle}
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-6">
          {/* Before */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-1 h-full bg-rose-500/50" />
             <span className="text-rose-500 font-bold text-xs uppercase tracking-widest mb-2 block">Cenário Comum</span>
             <p className="text-zinc-300 text-sm leading-relaxed">
               {beforeText}
             </p>
          </div>

          {/* Icon Divider */}
          <div className="flex justify-center -my-3 relative z-20">
             <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)]">
               <span className="text-white font-bold">VS</span>
             </div>
          </div>

          {/* After */}
          <div className="p-6 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-1 h-full bg-[#10B981]" />
             <span className="text-[#10B981] font-bold text-xs uppercase tracking-widest mb-2 block">Clinical Curator</span>
             <p className="text-white text-sm leading-relaxed font-medium">
               {afterText}
             </p>
          </div>
        </div>

        {/* Detailed Comparison List */}
        <div className="mt-16 space-y-4">
          {comparison.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest text-center">{item.label}</span>
              <div className="flex items-center justify-between gap-4">
                <span className="text-rose-400/70 text-sm flex-1 text-center font-body line-through decoration-rose-500/50">{item.before}</span>
                <div className="w-[1px] h-4 bg-white/10" />
                <span className="text-emerald-400 text-sm flex-1 text-center font-bold font-display">{item.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
