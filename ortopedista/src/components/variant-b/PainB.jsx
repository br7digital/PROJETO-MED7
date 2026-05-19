import React from 'react';
import { landingDataB } from '../../data/data-config-b';

export function PainB() {
  const { overline, title, paragraphs, solution } = landingDataB.pain;

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#020814] to-[#010F1F] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-5 relative z-10 w-full max-w-[480px]">
        <span className="inline-block text-[#00f2ff] text-[10px] font-display font-bold tracking-[0.25em] uppercase mb-5 drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]">{overline}</span>

        <h2 className="text-[clamp(26px,8vw,34px)] font-display font-black text-white tracking-tighter leading-[1.12] mb-8 text-glow">
          {title.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line.includes('"blogueiro"') ? (
                <>{line.split('"blogueiro"')[0]}<span className="text-[#00f2ff] drop-shadow-[0_1px_4px_rgba(0,242,255,0.4)]">"blogueiro"</span>{line.split('"blogueiro"')[1]}</>
              ) : line}
            </span>
          ))}
        </h2>

        <div className="space-y-4 mb-10">
          {paragraphs.map((p, i) => (
            <div key={i} className="flex gap-3.5 items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff]/40 mt-2.5 flex-shrink-0" />
              <p className="text-white/70 text-[15px] leading-[1.75] font-body">{p}</p>
            </div>
          ))}
        </div>

        <div className="relative glass-card bg-[#0b1627]/95 rounded-2xl p-6 border border-[#00f2ff]/15 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff]/40 to-transparent" />
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#00f2ff]/15 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_0_15px_rgba(0,242,255,0.15)]">
              <svg className="w-5 h-5 text-[#00f2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white/90 text-[15px] leading-[1.7] font-body font-medium">{solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
